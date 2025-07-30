import { createContext } from 'react';

const UserContext = createContext({
  name: 'Guest',
  email: 'guest@example.com',
  lastLogin: null
});

export default UserContext;