import React, { useState, useEffect } from "react";
import axios from "axios";
import { CommentForm } from "../components/CommentForm";
import { CommentList } from "../components/CommentList";
import "../styles/index.css"; // Import the CSS

const Index = () => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch users & comments from backend
  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));

    axios.get("http://localhost:5000/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  // Handle adding a new comment
  const handleAddComment = (userId, content) => {
    const user = users.find((u) => u.id === (userId)); // ✅ fixed

    if (!user) return;

    const newComment = {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      company: user.company?.name || "N/A",
      initials: user.name
        .split(" ")
        .map((n) => n[0])
        .join(""),
      content,
      timestamp: new Date().toISOString(), // ✅ use ISO string for consistency
    };

    // Save to backend
    axios.post("http://localhost:5000/comments", newComment)
      .then((res) => {
        // Add the new comment returned by backend
        setComments([res.data, ...comments]);
      })
      .catch((err) => console.error("Error posting comment:", err));
  };

  return (
    <div className="index-container">
      <div className="index-content">
        <h1 className="index-title">Comment System</h1>
        <p className="share">
          Share your thoughts and engage with the community. Join the conversation <br /> below!
        </p>
        <CommentForm users={users} onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default Index;
