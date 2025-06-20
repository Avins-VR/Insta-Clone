import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import all profile pictures
import profile1 from './assets/story profile1.webp';
import profile2 from './assets/story profile2.jpg';
import profile3 from './assets/story profile3.jpg';
import profile4 from './assets/story profile4.jpg';
import profile5 from './assets/story profile5.jpg';
import profile6 from './assets/story profile6.jpg';
import profile7 from './assets/story profile7.jpg';
import profile8 from './assets/story profile8.jpg';

import story1 from './assets/stories1.jpg';
import story2 from './assets/stories2.jpg';
import story3 from './assets/stories3.jpg';
import story4 from './assets/stories4.jpg';
import story5 from './assets/stories5.jpg';
import story6 from './assets/stories6.jpg';
import story7 from './assets/stories7.jpg';
import story8 from './assets/stories8.jpg';

function Stories() {
  const navigate = useNavigate();
  const [stories, setStories] = useState([
    {
      story_id: "1",
      user: {
        id: 100,
        username: "sunset_chaser",
        profile_picture: profile1
      },
      image: story1
    },
    {
      story_id: "2",
      user: {
        id: 101,
        username: "foodie_diary",
        profile_picture: profile2
      },
      image: story2
    },
    {
      story_id: "3",
      user: {
        id: 102,
        username: "urban_rider",
        profile_picture: profile3
      },
      image: story3
    },
    {
      story_id: "4",
      user: {
        id: 103,
        username: "wild_traveler",
        profile_picture: profile4
      },
      image: story4
    },
    {
      story_id: "5",
      user: {
        id: 104,
        username: "urban_vibes",
        profile_picture: profile5
      },
      image: story5
    },
    {
      story_id: "6",
      user: {
        id: 105,
        username: "nature_lover",
        profile_picture: profile6
      },
      image: story6
    },
    {
      story_id: "7",
      user: {
        id: 106,
        username: "fitness_freak",
        profile_picture: profile7
      },
      image: story7
    },
    {
      story_id: "8",
      user: {
        id: 107,
        username: "artsy_soul",
        profile_picture: profile8
      },
      image: story8
    }
  ]);

  const total = stories.length;

  return (
    <div className="stories">
      {stories.map((story) => (
        <div
          className="story"
          key={story.story_id}
          onClick={() => navigate(`/Story/${story.story_id}/${total}`)}
        >
          <div className="story-ring">
            <img src={story.user.profile_picture} alt={`${story.user.username}'s profile`} />
          </div>
          <p>{story.user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
