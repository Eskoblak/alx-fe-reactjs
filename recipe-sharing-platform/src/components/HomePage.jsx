// src/components/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="space-x-4">
        <Link
          to="/add-recipe"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add a New Recipe
        </Link>
      </div>
    </div>
  );
}
