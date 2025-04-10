import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await axios.post("https://auth-service-jo7q.onrender.com/api/auth/login", {
        email,
        password,
      });

      const token = res.data.token;
      const user = res.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("✅ Login successful:", user);

      try {
        const profileRes = await axios.get("https://user-profile-service-z6kg.onrender.com/api/profile/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const profile = profileRes.data;
        console.log("✅ Profile fetched:", profile);

        if (profile && profile.name) {
          navigate("/dashboard");
        } else {
          console.log("⚠️ Profile exists but missing required fields");
          navigate("/complete-profile");
        }
      } catch (profileErr) {
        console.error("❌ Error fetching profile:", profileErr.response?.data || profileErr.message);
        // If profile is not found (404 or any error), assume incomplete profile
        navigate("/complete-profile");
      }
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
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
        background: "linear-gradient(135deg, #f0f2f5, #e2e8f0)",
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
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Welcome Back! 👋
        </h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", color: "#555" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              backgroundColor: "#007bff",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              fontSize: "1.1rem",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
        </form>

        {error && (
          <p
            style={{
              color: "#dc3545",
              marginTop: "1rem",
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </p>
        )}

        <div style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
          Don't have an account?{" "}
          <a href="/register" style={{ color: "#007bff", textDecoration: "none" }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
