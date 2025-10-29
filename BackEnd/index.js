require("dotenv").config();
const express = require("express");
const cors = require("cors");

// ✅ Verify required environment variables
const requiredEnvVars = [
  "MONGO_CONN",
  "JWT_SECRET",
  "GITHUB_USERNAME",
  "GITHUB_TOKEN",
  "VERCEL_TOKEN",
  "GEMINI_API_KEY",
];
requiredEnvVars.forEach((env) => {
  if (!process.env[env]) {
    console.error(`❌ Missing required environment variable: ${env}`);
    process.exit(1);
  }
});

// ✅ Database connection
require("./Models/db");

const app = express();

// ✅ Middleware setup
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());

// ✅ Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date(),
    memoryUsage: process.memoryUsage(),
  });
});

// ✅ Import all routes
const AuthRouter = require("./Routes/AuthRouter");
const GeneratorRouter = require("./Routes/GeneratorRouter");
const resumeRoute = require("./Routes/resumeRoute");

// ✅ Use routes
app.use("/auth", AuthRouter);
app.use("/generator", GeneratorRouter);
app.use("/", resumeRoute); // Handles POST /extract-resume

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Global error handler:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ✅ Start the server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// ✅ Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});
