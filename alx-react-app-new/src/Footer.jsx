import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ year, darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <p>© {year} React Counter App. All rights reserved.</p>
      <p>Created with React and ❤️</p>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired
};

export default Footer;