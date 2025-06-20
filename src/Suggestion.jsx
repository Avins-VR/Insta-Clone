import React, { useState } from 'react';
import suggestion1 from './assets/suggestion1.jpg';
import suggestion2 from './assets/suggestion2.jpg';
import suggestion3 from './assets/suggestion3.jpg';
import suggestion4 from './assets/suggestion4.jpg';
import suggestion5 from './assets/suggestion5.jpg';
import userProfile from './assets/user.jpg';

function Suggesion() {
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      username: "jane_doe",
      profile_picture: suggestion1,
      following: false
    },
    {
      id: 2,
      username: "john_smith",
      profile_picture: suggestion2,
      following: false
    },
    {
      id: 3,
      username: "alice_w",
      profile_picture: suggestion3,
      following: false
    },
    {
      id: 4,
      username: "bob_brown",
      profile_picture: suggestion4,
      following: false
    },
    {
      id: 5,
      username: "charlie_black",
      profile_picture: suggestion5,
      following: false
    }
  ]);

  const [profile, setProfile] = useState({
    username: "ram_dev",
    profile_picture: userProfile
  });
  const handleFollowToggle = (id) => {
  const updatedSuggestions = suggestions.map((sugg) => {
    if (sugg.id === id) {
      sugg.following = !sugg.following; // toggle follow/unfollow
    }
    return sugg;
  });
  setSuggestions([...updatedSuggestions]);
};

  return (
    <div>
      <div className="suggestion-profile">
        <img src={profile.profile_picture} alt="Profile" />
        <h5>{profile.username}</h5>
        <p>Switch</p>
      </div>

      <div className="suggestion-header">
        <p>Suggestions for you</p>
        <p>See All</p>
      </div>

      <div>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-item">
            <img src={suggestion.profile_picture} alt="Profile" />
            <h5>{suggestion.username}</h5>
            <p
              onClick={() => handleFollowToggle(suggestion.id)}
              style={{ cursor: "pointer", color: suggestion.following ? "blue" : "blue" }}
      >
            {suggestion.following ? "Following" : "Follow"}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggesion;
