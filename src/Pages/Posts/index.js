import React from 'react';
import './style.css';

const Index = (props) => {
  return (
    <div className="post-box">
      <div className="post-header">
        <div className="user-info">
          <img className="user-avatar" src={props.avatar} alt="User Avatar" />
          <div className="user-details">
            <h1 className="user-name">{props.name}</h1>
            <p className="post-time">{props.time}</p>
          </div>
        </div>
      </div>

      <div className="post-content">
        <p className="post-caption">{props.caption}</p>
        <img className="post-image" src={props.image} alt="Post Image" />
      </div>

      <div className="post-actions">
        <button className="action-button">Like</button>
        <button className="action-button">Comment</button>
        <button className="action-button">Share</button>
      </div>
    </div>
  );
}

export default Index;
