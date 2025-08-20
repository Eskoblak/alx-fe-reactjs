import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // For now, just load from localStorage (or mock data)
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const foundRecipe = savedRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-6">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h2>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 mb-4">{recipe.description}</p>

      {/* Ingredients */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <p className="text-gray-600 whitespace-pre-line">{recipe.ingredients}</p>
      </div>

      {/* Steps */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Steps</h3>
        <p className="text-gray-600 whitespace-pre-line">{recipe.steps}</p>
      </div>
    </div>
  );
}
