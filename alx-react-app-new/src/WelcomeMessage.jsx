import PropTypes from 'prop-types';
import './WelcomeMessage.css';

const WelcomeMessage = ({ user }) => {
  return (
    <div className="welcome-message">
      <h2>Welcome, {user || 'Guest'}!</h2>
      <p>Try our interactive counter below</p>
    </div>
  );
};

WelcomeMessage.propTypes = {
  user: PropTypes.string
};

export default WelcomeMessage;