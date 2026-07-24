import React, { useState } from 'react';

const userData = {
  name: "Janice V. Agnote",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  bio: "Appdev1 student.",
  skills: ["Problem Solving", "Coffee Drinking", "Debugging", "Procrastination"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard({ user = userData }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleToggleFavorite() {
    setIsFavorited((prev) => !prev);
  }

  return (
    <>
      <div className="profile-card">
        <img 
          src={user.avatarUrl} 
          alt={user.name} 
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
        />
        <h2>{user.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{user.bio}</p>

        <h3>Skills</h3>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: 'blue', fontWeight: 'bold' }}>
          Messages sent: {messageCount}
        </div>

        {user.isOnline ? <span>🟢 Online </span> : <span>⚪ Offline </span>}

        {user.isOnline && (
          <button onClick={handleToggleFavorite}>
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        )}

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <p className="footer">Card last updated: {user.lastUpdated}</p>
    </>
  );
}

export default UserProfileCard;