import PropTypes from 'prop-types';
import './MainContent.css';

const MainContent = ({ children }) => {
  return (
    <main className="main-content">
      {children}
    </main>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContent;