import { useState, useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getRecipe = useRecipeStore(state => state.getRecipe);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: ''
  });

  useEffect(() => {
    const existingRecipe = getRecipe(Number(id));
    if (existingRecipe) {
      setRecipe(existingRecipe);
    }
  }, [id, getRecipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe(prev => ({ ...prev, ingredients: newIngredients }));
  };

  const addIngredient = () => {
    setRecipe(prev => ({ ...prev, ingredients: [...prev.ingredients, ''] }));
  };

  const removeIngredient = (index) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe(prev => ({ ...prev, ingredients: newIngredients }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(Number(id), recipe);
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Edit Recipe</h2>
      
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Ingredients:</label>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-row">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              required
            />
            <button 
              type="button" 
              onClick={() => removeIngredient(index)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient} className="add-btn">
          Add Ingredient
        </button>
      </div>

      <div className="form-group">
        <label>Instructions:</label>
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>

      <button type="submit" className="submit-btn">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;  // Changed to default export