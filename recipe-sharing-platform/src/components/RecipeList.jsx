// src/components/RecipeList.jsx
import { Link } from "react-router-dom";

const recipes = [
  { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta dish" },
  { id: 2, title: "Chicken Curry", description: "Spicy and flavorful Indian curry" },
  { id: 3, title: "Vegetable Stir Fry", description: "Quick and healthy veggie stir fry" },
];

export default function RecipeList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>

      <Link
        to="/add"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add a New Recipe
      </Link>

      <ul className="mt-6 space-y-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="border p-4 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
            <Link
              to={`/recipes/${recipe.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
