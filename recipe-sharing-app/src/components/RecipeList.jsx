import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      <Link to="/add" className="add-link">Add New Recipe</Link>
      
      <div className="recipes">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description.substring(0, 100)}...</p>
            <Link to={`/recipe/${recipe.id}`} className="view-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;