import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUserData}>Search</button>
      </div>

      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt="Profile" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available."}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;