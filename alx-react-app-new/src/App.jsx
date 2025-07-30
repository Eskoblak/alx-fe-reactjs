// src/App.jsx
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState('Guest');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header 
        title="React Counter App" 
        darkMode={darkMode} 
        onToggleTheme={toggleTheme}
      />
      
      <MainContent>
        <WelcomeMessage user={user} />
        
        <div className="counter-section">
          <h2>Interactive Counter</h2>
          <Counter />
        </div>

        <div className="user-controls">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
      </MainContent>

      <Footer 
        year={new Date().getFullYear()} 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;