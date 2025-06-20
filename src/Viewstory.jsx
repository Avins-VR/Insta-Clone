import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import profile1 from '../src/assets/story profile1.webp';
import profile2 from '../src/assets/story profile2.jpg';
import profile3 from '../src/assets/story profile3.jpg';
import profile4 from '../src/assets/story profile4.jpg';
import profile5 from '../src/assets/story profile5.jpg';
import profile6 from '../src/assets/story profile6.jpg'; 
import profile7 from '../src/assets/story profile7.jpg';
import profile8 from '../src/assets/story profile8.jpg';
import story1 from '../src/assets/stories1.jpg';
import story2 from '../src/assets/stories2.jpg';
import story3 from '../src/assets/stories3.jpg';
import story4 from '../src/assets/stories4.jpg';
import story5 from '../src/assets/stories5.jpg';
import story6 from '../src/assets/stories6.jpg';
import story7 from '../src/assets/stories7.jpg';
import story8 from '../src/assets/stories8.jpg';

import '../src/index.css';

function Viewstory() {
  const { story_id, total } = useParams();
  const navigate = useNavigate();

const [stories] = useState([
  {
    story_id: "1",
    user: {
      id: 100,
      username: "sunset_chaser",
      profile_picture: profile1
    },
    image: story1,
    song: "🎵 DJ Mausam - Happy Birthday to you"
  },
  {
    story_id: "2",
    user: {
      id: 101,
      username: "foodie_diary",
      profile_picture: profile2
    },
    image: story2,
    song: "🎵 DJ Snake - Let Me Love You"
  },
  {
    story_id: "3",
    user: {
      id: 102,
      username: "urban_rider",
      profile_picture: profile3
    },
    image: story3,
    song: "🎵 Katy Perry - Firework"
  },
  {
    story_id: "4",
    user: {
      id: 103,
      username: "wild_traveler",
      profile_picture: profile4
    },
    image:story4,
    song: "🎵 Ed Sheeran - Shape of You"
  },
  {
    story_id: "5",
    user: {
      id: 104,
      username: "urban_vibes",
      profile_picture: profile5
    },
    image: story5,
    song: "🎵 The Weeknd - Blinding Lights"
  },
  {
  story_id: "6",
  user: {
    id: 105,
    username: "nature_lover",
    profile_picture: profile6
  },
  image: story6,
  song: "🎵 Imagine Dragons - Believer"
},
{
  story_id: "7",
  user: {
    id: 106,
    username: "fitness_freak",
    profile_picture: profile7
  },
  image: story7,
  song: "🎵 Dua Lipa - Don't Start Now"
},
{
  story_id: "8",
  user: {
    id: 107,
    username: "artsy_soul",
    profile_picture: profile8
  },
  image: story8,
  song: "🎵 Billie Eilish - Bad Guy"
}
]);


  const [story, setStory] = useState(null);

  useEffect(() => {
  const matchedStory = stories.find(s => s.story_id === story_id);
  setStory(matchedStory);

  const numericId = Number(story_id);
  const totalCount = Number(total);
  if (numericId < 1 || numericId > totalCount || !matchedStory) {
    navigate('/');
  }
}, [story_id, total, stories, navigate]);

  if (!story) {
    return <div className="story-not-found">Story not found</div>;
  }

  const currentId = Number(story_id);
const prevId = currentId > 1 ? currentId - 1 : null;
const nextId = currentId < stories.length ? currentId + 1 : null;


  return (
    <div className="story-container">
      <div className="story-header">
        <div className="story-header-left">
          <img src={story.user.profile_picture} alt="Profile" className="profile-pic" />
          <div className="user-info">
            <span className="username">{story.user.username}</span>
            <span className="music">{story.song}</span>
          </div>
        </div>
        <div className="header-icons">
          <i className="bi bi-volume-off-fill"></i>
          <i className="bi bi-three-dots"></i>
        </div>
      </div>
      <div className="story-nav-wrapper">
        <Link to={`/Story/${prevId}/${total}`}>
          <i className="bi bi-arrow-left-circle-fill story-nav left-nav"></i>
        </Link>

        <div className="story-image-wrapper">
          <img
            src={story.image}
            alt="Story content"
            className="story-image"
          />
        </div>

        <Link to={`/Story/${nextId}/${total}`}>
          <i className="bi bi-arrow-right-circle-fill story-nav right-nav"></i>
        </Link>
      </div>
      <div className="reply-bar">
        <span className="reply-text">Reply to {story.user.username}</span>
        <div className="icons">
          <i className="bi bi-heart"></i>
          <i className="bi bi-send"></i>
        </div>
      </div>
    </div>
  );
}

export default Viewstory;
