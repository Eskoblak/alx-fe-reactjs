import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const fullUrl = `${BASE_URL}${query}`;
  console.log("Search URL:", fullUrl); // Optional for debugging

  const response = await axios.get(fullUrl);
  return response.data;
};
