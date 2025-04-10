import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ name: "", bio: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://user-profile-service-z6kg.onrender.com/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put("https://user-profile-service-z6kg.onrender.com/api/profile", profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem", maxWidth: "400px" }}>
        <label>Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          style={inputStyle}
        />
        <label>Bio</label>
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          style={{ ...inputStyle, height: "100px" }}
        />
        <button type="submit" style={buttonStyle}>Save</button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default EditProfile;
