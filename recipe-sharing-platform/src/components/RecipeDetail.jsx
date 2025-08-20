import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Recipe Sharing Platform
      </h1>

      {/* Add new recipe button */}
      <div className="text-center mb-8">
        <Link
          to="/add"
          className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          ➕ Add a New Recipe
        </Link>
      </div>

      {/* Recipe cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
              <Link
                to={`/recipes/${recipe.id}`}
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
