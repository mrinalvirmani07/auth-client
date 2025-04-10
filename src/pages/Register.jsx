import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await axios.post("https://auth-service-jo7q.onrender.com/api/auth/register", form);
      const { token } = res.data;

      // Store token in localStorage
      localStorage.setItem("token", token);

      // Optionally fetch profile data
      const profileRes = await axios.get("https://user-profile-service-z6kg.onrender.com/api/profile/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Save profile to localStorage or global context (for now localStorage)
      localStorage.setItem("profile", JSON.stringify(profileRes.data));

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e2e8f0, #f0f2f5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem 3rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "350px",
          maxWidth: "90%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333", fontWeight: "500" }}>
          Create Your Account 🚀
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#555" }}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#555" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#555" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              fontSize: "1.1rem",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1e7e34")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {error && (
          <p style={{ color: "#dc3545", marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>
            {error}
          </p>
        )}

        <div style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
