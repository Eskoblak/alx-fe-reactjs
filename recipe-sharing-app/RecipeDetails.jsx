import { useRecipeStore } from '../store/recipeStore';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === Number(id))
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{recipe.instructions}</p>
      
      <div className="actions">
        <Link to={`/edit/${recipe.id}`} className="btn">Edit</Link>
        <Link to="/" className="btn">Back to List</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;  // Default export