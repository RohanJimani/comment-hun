import React, { useState, useEffect } from "react";
import { CommentForm } from "../components/CommentForm";
import { CommentList } from "../components/CommentList";
import commentsData from "../mock/comments.json";
import usersData from "../mock/users.json";
import "../styles/index.css"; // Import the CSS

const Index = () => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setComments(commentsData);
    setUsers(usersData);
  }, []);

  const handleAddComment = (userId, content) => {
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    const newComment = {
      id: String(comments.length + 1),
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      company: user.company.name,
      initials: user.name
        .split(" ")
        .map((n) => n[0])
        .join(""),
      content,
      timestamp: new Date(),
    };

    setComments([newComment, ...comments]);
  };

  return (
    <div className="index-container">
      <div className="index-content">
        <h1 className="index-title">Comment System</h1>
        <CommentForm users={users} onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default Index;
