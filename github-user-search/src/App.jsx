import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error('User not found');
      }
      throw new Error('Failed to fetch user data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !username.trim()}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <div className="status-message">Loading...</div>}
      {error && <div className="status-message error">{error}</div>}

      {userData && (
        <div className="user-card">
          <div className="avatar-container">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`} 
              className="avatar"
            />
          </div>
          <div className="user-info">
            <h2>{userData.name || userData.login}</h2>
            {userData.bio && <p className="bio">{userData.bio}</p>}
            <div className="stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repos: {userData.public_repos}</span>
            </div>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;