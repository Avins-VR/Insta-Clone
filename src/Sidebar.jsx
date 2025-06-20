import React from 'react';
import { useNavigate } from 'react-router-dom';
import instaTextLogo from './assets/Insta text.png';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar"> 
      <div className="sidebar-top">
        <img
          src={instaTextLogo}
          alt="Instagram Logo"
          className="sidebar-logo"
        />
        <div className="sidebar-item" onClick={() => navigate('/')}>
          <i className="bi bi-house-door"></i>Home
        </div>
        <div className="sidebar-item">
          <i className="bi bi-search"></i>Search
        </div>
        <div className="sidebar-item">
          <i className="bi bi-compass"></i>Explore
        </div>
        <div className="sidebar-item">
          <i className="bi bi-play-btn-fill"></i>Reels
        </div>
        <div className="sidebar-item">
          <i className="bi bi-chat-dots"></i>Messages
        </div>
        <div className="sidebar-item">
          <i className="bi bi-heart"></i>Notifications
        </div>
        <div className="sidebar-item">
          <i className="bi bi-plus-square"></i>Create
        </div>
        <div className="sidebar-item" onClick={() => navigate('/Profile')}>
          <i className="bi bi-person-circle"></i>Profile
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-item">
          <i className="bi bi-threads"></i>Threads
        </div>
        <div className="sidebar-item">
          <i className="bi bi-list"></i>More
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
