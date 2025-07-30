import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div className="user-details">
      <h3>User Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {user.lastLogin && (
        <p><strong>Last Login:</strong> {user.lastLogin}</p>
      )}
    </div>
  );
}

export default UserDetails;