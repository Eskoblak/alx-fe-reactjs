// src/UserContext.js

import { createContext } from 'react';

// This creates a new Context object for user data
const UserContext = createContext(null);

// We export it so other files can use it
export default UserContext;
