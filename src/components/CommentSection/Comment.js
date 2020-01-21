import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.post.username}</span>
      {' '}
      <span className="comment">{props.post.text}</span>
    </div>
  );
};


export default Comment;
