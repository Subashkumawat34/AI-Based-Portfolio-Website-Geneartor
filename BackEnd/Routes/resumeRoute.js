// resumeRoute.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdfParse = require("pdf-parse"); // ✅ Correct import for pdf-parse
const mammoth = require("mammoth");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary upload folder

// ✅ Check for API key
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in environment variables!");
  process.exit(1);
}

// ✅ Initialize Gemini API (FREE MODEL)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
let model;
try {
  model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" }); // FREE model
} catch (err) {
  console.warn("⚠️ Falling back to gemini-2.5-flash due to model error");
  model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
}

/**
 * Extract text from uploaded file (PDF, DOCX, or TXT)
 */
async function extractTextFromFile(filePath, mimetype) {
  const ext = path.extname(filePath).toLowerCase();

  try {
    if (ext === ".pdf" || mimetype === "application/pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      // Use pdfParse as a direct function, not as an object
      const parsed = await pdfParse(dataBuffer);
      return parsed.text || "";
    } else if (ext === ".docx" || mimetype.includes("word")) {
      const result = await mammoth.extractRawText({ path: filePath });
      return result.value || "";
    } else {
      return fs.readFileSync(filePath, "utf8");
    }
  } catch (err) {
    console.error("❌ Error reading file:", err);
    throw new Error("Failed to extract text from the uploaded file.");
  }
}

/**
 * Build prompt for structured resume parsing
 */
function buildPrompt(resumeText) {
  return `
You are an intelligent resume parser. Analyze the following resume text and return valid JSON (no markdown, no code block, no explanation).

Schema:
{
  "personalInfo": {
    "fullName": "",
    "location": "",
    "phone": "",
    "email": "",
    "github": "",
    "linkedin": "",
    "website": ""
  },
  "summary": {
    "headline": "",
    "careerObjective": ""
  },
  "skills": {
    "languages": [],
    "frameworks": [],
    "tools": [],
    "problemSolving": [],
    "concepts": []
  },
  "education": [
    { "degree": "", "institution": "", "year": "", "grade": "" }
  ],
  "experience": [
    { "title": "", "organization": "", "duration": "", "location": "", "description": "" }
  ],
  "projects": [
    { "title": "", "date": "", "description": "" }
  ],
  "certifications": [
    { "title": "", "date": "", "description": "" }
  ]
}

If any field is missing, leave it empty or as an empty list.
Resume content:
"""${resumeText.replace(/\n+/g, " ")}"""
`;
}

/**
 * Parse resume text using Gemini API
 */
async function parseWithGemini(resumeText) {
  const prompt = buildPrompt(resumeText);

  try {
    const result = await model.generateContent(prompt);
    const raw = result.response.text();

    // Try to extract JSON safely
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    const jsonText = jsonMatch ? jsonMatch[0] : raw;

    return JSON.parse(jsonText);
  } catch (err) {
    console.error("❌ Gemini parsing error:", err);
    throw new Error("Gemini failed to parse resume text.");
  }
}

/**
 * Route: POST /extract-resume
 */
router.post("/extract-resume", upload.single("resume"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded." });

  const filePath = req.file.path;

  try {
    const resumeText = await extractTextFromFile(filePath, req.file.mimetype);
    if (!resumeText || resumeText.trim().length < 20) {
      throw new Error("Insufficient resume content extracted.");
    }

    const parsed = await parseWithGemini(resumeText);

    // Fallback structure for safety
    const safe = {
      personalInfo: parsed.personalInfo || {
        fullName: "",
        location: "",
        phone: "",
        email: "",
        github: "",
        linkedin: "",
        website: "",
      },
      summary: parsed.summary || { headline: "", careerObjective: "" },
      skills: parsed.skills || {
        languages: [],
        frameworks: [],
        tools: [],
        problemSolving: [],
        concepts: [],
      },
      education: Array.isArray(parsed.education) ? parsed.education : [],
      experience: Array.isArray(parsed.experience) ? parsed.experience : [],
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      certifications: Array.isArray(parsed.certifications)
        ? parsed.certifications
        : [],
    };

    res.json(safe);
  } catch (err) {
    console.error("Resume extraction error:", err.message);
    res.status(500).json({
      error: "Failed to process resume.",
      detail: err.message,
    });
  } finally {
    // Cleanup uploaded file
    try {
      fs.unlinkSync(filePath);
    } catch (e) {}
  }
});

module.exports = router;
