import React, { useState } from 'react';

import profile1 from './assets/profile1.jpg';
import profile2 from './assets/profile2.jpg';
import profile3 from './assets/profile3.jpg';
import profile4 from './assets/profile4.jpg';
import profile5 from './assets/profile5.jpg';
import profile6 from './assets/profile6.jpg';

import img1 from './assets/Waves and whispers.jpg';
import img2 from './assets/Above the clouds.jpg';
import img3 from './assets/Starry night vibes.jpg';
import img4 from './assets/Chasing sunsets .png';
import img5 from './assets/Walk through the wild.jpg';
import img6 from './assets/City lights never sleep.jpg';

function Post() {
  const [posts, setPosts] = useState([
    {
      post_id: "001",
      user: { username: "coastal_dreamer", profile_picture: profile4 },
      image: img1,
      caption: "Waves and whispers 🌊",
      likes: 154,
      following: true,
      liked: false,
      saved: false
    },
    {
      post_id: "002",
      user: { username: "mountain_muse", profile_picture: profile5 },
      image: img2,
      caption: "Above the clouds 🏔️",
      likes: 312,
      following: true,
      liked: false,
      saved: false
    },
    {
      post_id: "003",
      user: { username: "starry_skies", profile_picture: profile6 },
      image: img3,
      caption: "Starry night vibes ✨🌌",
      likes: 348,
      following: false,
      liked: false,
      saved: false
    },
    {
      post_id: "004",
      user: { username: "avins_dev", profile_picture: profile1 },
      image: img4,
      caption: "Chasing sunsets 🌅",
      likes: 287,
      following: false,
      liked: false,
      saved: false
    },
    {
      post_id: "005",
      user: { username: "nature_snapper", profile_picture: profile2 },
      image: img5,
      caption: "Walk through the wild 🌲",
      likes: 198,
      following: false,
      liked: false,
      saved: false
    },
    {
      post_id: "006",
      user: { username: "urban_rider", profile_picture: profile3 },
      image: img6,
      caption: "City lights never sleep 🌃",
      likes: 420,
      following: false,
      liked: false,
      saved: false
    }
  ]);

  const handleLike = (post_id) => {
    const updatedPosts = posts.map((post) => {
      if (post.post_id === post_id) {
        if (!post.liked) {
          post.liked = true;
          post.likes += 1;
        } else {
          post.liked = false;
          post.likes -= 1;
        }
      }
      return post;
    });
    setPosts([...updatedPosts]);
  };
  const handleSave = (post_id) => {
  const updatedPosts = posts.map((post) => {
    if (post.post_id === post_id) {
      post.saved = !post.saved; 
    }
    return post;
  });
  setPosts([...updatedPosts]);
};
const handleFollowToggle = (post_id) => {
  const updatedPosts = posts.map((post) => {
    if (post.post_id === post_id) {
      post.following = !post.following;  
    }
    return post;
  });
  setPosts([...updatedPosts]);
};

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.post_id} className="post">
            <div className="post-header">
              <img src={post.user.profile_picture} alt={`${post.user.username}'s profile`} />
              <div className="post-user-info">
                <h5>{post.user.username}</h5>
                <p 
                  className="follow-text" 
                  onClick={() => handleFollowToggle(post.post_id)}
                  style={{ cursor: "pointer", userSelect: "none", color: post.following ? "blue" : "blue" }}
                >
                {post.following ? ". Following" : ". Follow"}
                </p>
              </div>
              <button className="menu-button"><i className="bi bi-three-dots"></i></button>
            </div>

            <img className="post-image" src={post.image} alt={post.caption} />

            <div className="post-actions">
              <button onClick={() => handleLike(post.post_id)}>
                <i
                  className={post.liked ? "bi bi-heart-fill" : "bi bi-heart"}
                   style={{
                    color: post.liked ? 'red' : 'white',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s ease'
                  }}
                ></i>
              </button>
              <button><i className="bi bi-chat"></i></button>
              <button><i className="bi bi-send"></i></button>
              <button className="save-button" onClick={() => handleSave(post.post_id)}>
              <i
                className={post.saved ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
                style={{
                color: post.saved ? "white" : "white", 
                fontSize: "1.5rem",
                transition: "color 0.3s ease"
                }}
              ></i>
              </button>
            </div>

            <div className="post-likes">
              <p>{post.likes} likes</p>
            </div>

            <p className="post-caption">{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts to show</p>
      )}
    </div>
  );
}

export default Post;
