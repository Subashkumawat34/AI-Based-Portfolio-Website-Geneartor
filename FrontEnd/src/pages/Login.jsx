import React, { useState } from "react";
import { Link } from "react-router-dom";
// ToastContainer is now global in App.jsx
import { handleError, handleSuccess } from "./utils"; // Corrected import path

// Receive onLoginSuccess prop from App.js
function Login({ onLoginSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and password are required.");
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send only email and password
      });

      const result = await response.json();

      if (result.success && result.jwtToken && result.name) {
        handleSuccess(result.message || "Login successful!");
        onLoginSuccess(result.name, result.jwtToken); // Pass name and token
      } else {
        handleError(
          result.message || "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      console.error("Login API error:", err);
      handleError("An error occurred during login. Please try again later.");
    }
    // Clear password field, optionally email too based on UX preference
    setLoginInfo((prev) => ({ ...prev, password: "" }));
  };

  return (
    // Use auth-container for consistent styling from App.css
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            onChange={handleChange}
            type="email"
            name="email"
            id="email" // Added id for label association
            autoFocus
            placeholder="Enter your email"
            value={loginInfo.email}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            onChange={handleChange}
            type="password"
            name="password"
            id="password" // Added id for label association
            placeholder="Enter your password"
            value={loginInfo.password}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          {" "}
          {/* w-100 for full width */}
          Login
        </button>
        <div className="mt-3 text-center">
          {" "}
          {/* text-center for centering link */}
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
      {/* ToastContainer moved to App.jsx */}
    </div>
  );
}

export default Login;
