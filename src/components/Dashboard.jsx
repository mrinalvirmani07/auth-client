import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null); // from localStorage
  const [profile, setProfile] = useState(null); // from backend
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      const userObj = JSON.parse(storedUser);
      setUser(userObj);

      axios
        .get("https://user-profile-service-z6kg.onrender.com/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setProfile(res.data))
        .catch((err) => console.error("Error fetching profile:", err));
    } else {
      navigate("/login");
    }

    // TODO: Replace with real fetch later
    setPosts([
      {
        id: 1,
        user: "Alice",
        avatar: "https://i.pravatar.cc/150?img=32",
        content: "Had a great day at the beach! 🌊☀️",
        image: "https://source.unsplash.com/600x400/?beach",
      },
      {
        id: 2,
        user: "Bob",
        avatar: "https://i.pravatar.cc/150?img=56",
        content: "Just cooked the best pasta ever 🍝🔥",
        image: "https://source.unsplash.com/600x400/?food",
      },
    ]);
  }, [navigate]);

  if (!user || !profile) return <p style={{ padding: "2rem" }}>Loading...</p>;

  const isProfileComplete = profile.bio && profile.location;
  const joinDate = new Date(profile.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div style={{ display: "flex", fontFamily: "'Segoe UI', sans-serif", height: "100vh", background: "#f4f4f4" }}>
      
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#ffffff", padding: "2rem 1rem", boxShadow: "2px 0 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ marginBottom: "2rem", color: "#333" }}>SocialApp</h2>
        <nav>
          <a href="#" style={linkStyle}>🏠 Home</a>
          <a href="#" style={linkStyle}>🔔 Notifications</a>
          <a href="#" style={linkStyle}>✉️ Messages</a>
          <a href="#" style={linkStyle}>👤 Profile</a>
          <a href="#" style={linkStyle}>⚙️ Settings</a>
        </nav>
      </div>

      {/* Feed */}
      <div style={{ flex: 1, overflowY: "auto", padding: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Welcome, {profile.name || user.name}!</h2>

        {posts.map((post) => (
          <div key={post.id} style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <img src={post.avatar} alt="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "1rem" }} />
              <strong>{post.user}</strong>
            </div>
            <p style={{ marginBottom: "1rem", fontSize: "15px", color: "#444" }}>{post.content}</p>
            <img src={post.image} alt="post" style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* Right Panel */}
      <div style={{ width: "280px", padding: "2rem 1rem", background: "#fff", boxShadow: "-2px 0 10px rgba(0,0,0,0.05)" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={`https://i.pravatar.cc/150?u=${profile.name || user.name}`}
            alt="profile"
            style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "1rem" }}
          />
          <h3>{profile.name}</h3>
          <p style={{ color: "#777" }}>{user.role.toUpperCase()}</p>
          <p style={{ fontSize: "14px", marginTop: "0.5rem", color: "#777" }}>📅 Joined {joinDate}</p>

          {/* Followers / Following */}
          <div style={{ margin: "1rem 0", display: "flex", justifyContent: "space-around" }}>
            <div>
              <strong>{profile.followers?.length || 0}</strong>
              <p style={{ fontSize: "13px", color: "#888" }}>Followers</p>
            </div>
            <div>
              <strong>{profile.following?.length || 0}</strong>
              <p style={{ fontSize: "13px", color: "#888" }}>Following</p>
            </div>
          </div>

          {/* Profile badge */}
          <p style={{ color: isProfileComplete ? "green" : "#999", fontSize: "13px", marginBottom: "1rem" }}>
            {isProfileComplete ? "✅ Profile Complete" : "⚠️ Incomplete Profile"}
          </p>

          {/* Edit Profile Button */}
          <button
            onClick={() => navigate("/edit-profile")}
            style={{
              marginBottom: "0.5rem",
              padding: "0.5rem 1rem",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Edit Profile
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            style={{
              padding: "0.5rem 1rem",
              background: "#ff5252",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "0.5rem",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const linkStyle = {
  display: "block",
  marginBottom: "1rem",
  color: "#555",
  textDecoration: "none",
  fontSize: "16px",
  transition: "0.2s",
  padding: "0.4rem 1rem",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: 500,
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  marginBottom: "1.5rem",
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
};

export default Dashboard;
