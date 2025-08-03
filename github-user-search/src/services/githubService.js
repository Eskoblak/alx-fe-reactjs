import axios from "axios";

// GitHub Search API base URL
const BASE_URL = "https://api.github.com/search/users?q=";

// Advanced Search Function
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const fullUrl = `${BASE_URL}${query}`;

  const response = await axios.get(fullUrl);
  return response.data; // returns { items: [...] }
};

// Fetch Full User Details (used in Task 2)
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};
