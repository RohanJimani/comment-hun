import React, { useState } from "react";
import "../styles/CommentForm.css";

export const CommentForm = ({ users, onAddComment }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedUser) {
      alert("Please select a user");
      return;
    }

    if (!comment.trim()) {
      alert("Please enter a comment");
      return;
    }

    onAddComment(selectedUser, comment);
    setComment("");
    setSelectedUser("");
  };

  return (
    <div className="comment-form">
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit} className="comment-form__group">
        {/* Select User */}
        <div>
          <label className="comment-form__label">Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="comment-form__select"
          >
            <option value="">Choose a user...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.company.name})
              </option>
            ))}
          </select>
        </div>

        {/* Comment Input */}
        <div>
          <label className="comment-form__label">Your Comment</label>
          <textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-form__textarea"
          />
        </div>

        <button type="submit" className="comment-form__button">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
