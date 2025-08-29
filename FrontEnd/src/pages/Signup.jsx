import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// ToastContainer is now global in App.jsx
import { handleError, handleSuccess } from "./utils"; // Corrected import path

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    // Renamed from signInfo for clarity
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("All fields (Name, Email, Password) are required.");
    }
    // Basic password validation (example)
    if (password.length < 6) {
      return handleError("Password must be at least 6 characters long.");
    }

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();

      if (result.success) {
        handleSuccess(result.message || "Signup successful! Please log in.");
        navigate("/login"); // Navigate to login page
      } else {
        // Prefer specific error message from backend if available
        const errorMessage =
          result.error?.details?.[0]?.message ||
          result.message ||
          "Signup failed. Please try again.";
        handleError(errorMessage);
      }
    } catch (err) {
      console.error("Signup API error:", err);
      handleError("An error occurred during signup. Please try again later.");
    }
    // Optionally clear form, or just password
    // setSignupInfo({ name: "", email: "", password: "" });
  };

  return (
    // Use auth-container for consistent styling from App.css
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            className="form-control"
            onChange={handleChange}
            type="text"
            name="name"
            id="name" // Added id
            autoFocus
            placeholder="Enter your full name"
            value={signupInfo.name}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            onChange={handleChange}
            type="email"
            name="email"
            id="email" // Added id
            placeholder="Enter your email"
            value={signupInfo.email}
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
            id="password" // Added id
            placeholder="Create a password (min. 6 characters)"
            value={signupInfo.password}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          {" "}
          {/* w-100 for full width */}
          Sign Up
        </button>
        <div className="mt-3 text-center">
          {" "}
          {/* text-center for centering link */}
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
      {/* ToastContainer moved to App.jsx */}
    </div>
  );
}

export default Signup;
