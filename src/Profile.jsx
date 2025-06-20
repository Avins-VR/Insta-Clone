import React, { useState } from 'react';
import './Profile.css';
import './App.css'; 
import Sidebar from './Sidebar';
import userPic from './assets/user.jpg';

function Profile() {
  const [user] = useState({
    id: 1,
    username: 'ram_dev',
    name: 'Ram Dev',
    profile_picture: userPic, 
    followers: 150,
    following: 100,
    posts: 0
  });

  return (
    <div className="app-container">
      <Sidebar />
      <div className="profile-container">
        <div className="profile-picture-section">
          <div className="profile-picture">
            <img src={user.profile_picture} alt={user.name} />
          </div>
          <div className="profile-add-new">
            <i className="bi bi-plus-circle"></i>
            <p>New</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-top">
            <h2>{user.username}</h2>
            <div className="profile-buttons">
              <button>Edit profile</button>
              <button>View archive</button>
            </div>
            <i className="bi bi-gear-wide profile-settings"></i>
          </div>
          <div className="profile-stats">
            <p><strong>{user.posts}</strong> posts</p>
            <p><strong>{user.followers}</strong> followers</p>
            <p><strong>{user.following}</strong> following</p>
          </div>
          <div className="profile-name">{user.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
