import React, { useState } from "react";
import CommentCard from "./CommentCard";
import "../styles/CommentList.css";
import { Clock,Calendar } from "lucide-react";


export const CommentList = ({ comments }) => {
  const [sortOrder, setSortOrder] = useState("newest");

  const sortedComments = [...comments].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.timestamp) - new Date(a.timestamp);
    }
    return new Date(a.timestamp) - new Date(b.timestamp);
  });

  return (
    <div className="comment-list">
      <div className="comment-list__header">
        <h2 className="comment-list__title">Comments ({comments.length})</h2>
        <div className="comment-list__sort-buttons">
          <button
            onClick={() => setSortOrder("newest")}
            className={`comment-list__sort-button ${
              sortOrder === "newest" ? "active" : ""
            }`}
          >
            <Clock className="newest" />
             Newest
          </button>
          <button
            onClick={() => setSortOrder("oldest")}
            className={`comment-list__sort-button ${
              sortOrder === "oldest" ? "active" : ""
            }`}
          >
            <Calendar className="newest" />
            Oldest
          </button>
        </div>
      </div>

      <div className="comment-list__comments">
        {sortedComments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
