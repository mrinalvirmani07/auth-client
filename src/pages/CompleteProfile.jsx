import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://user-profile-service-z6kg.onrender.com/api/profile",
        { name, bio },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Profile creation failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to create profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "4rem auto", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: "8px", background: "#fff" }}>
      <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", resize: "vertical" }}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
          }}
        >
          {isSubmitting ? "Saving..." : "Save Profile"}
        </button>
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
};

export default CompleteProfile;
