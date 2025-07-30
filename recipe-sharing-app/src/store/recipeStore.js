import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Sample Recipe",
      description: "This is a sample recipe",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      instructions: "Step 1. Do this\nStep 2. Do that"
    }
  ],
  
  // Add new recipe
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  
  // Update existing recipe
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  // Delete recipe
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Get single recipe
  getRecipe: (id) => {
    return useRecipeStore.getState().recipes.find(recipe => recipe.id === id);
  }
}));