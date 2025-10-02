import React from "react";
import "../styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <div className="flex gap-4">
        {/* User Avatar */}
        {/* <div className="comment-card__avatar">{comment.initials}</div> */}

        {/* Comment Content */}
        <div className="comment-card__content">
          <div className="comment-card__header">
        <div className="comment-card__avatar">{comment.initials}</div>

            {/* User Info */}
            <div className="comment-card__user-info">
              <h3>{comment.userName}</h3>
              <p>{comment.userEmail}</p>
            </div>

            {/* Company */}
            <span className="comment-card__company">{comment.company}</span>
          </div>

          {/* Comment Text */}
          <p className="comment-card__text">{comment.content}</p>

          {/* Footer Actions */}
          <div className="comment-card__footer">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
