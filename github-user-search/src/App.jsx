import { useState } from "react";
import Search from "./components/Search";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (params) => {
    try {
      const data = await searchUsers(params);
      setUsers(data.items);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-center text-3xl font-bold mb-6">
        GitHub User Search
      </h1>
      <Search onSearch={handleSearch} users={users} />
    </div>
  );
}

export default App;
