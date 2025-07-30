import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title, darkMode, onToggleTheme }) => {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <h1>{title}</h1>
      <button 
        onClick={onToggleTheme}
        className="theme-toggle"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
      </button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired
};

export default Header;