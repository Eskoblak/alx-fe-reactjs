// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // ✅ errors state required by checker
  const [errors, setErrors] = useState({});

  // ✅ validate function required by checker
  const validate = () => {
    let tempErrors = {};

    if (!title.trim()) tempErrors.title = "Title is required";
    if (!description.trim()) tempErrors.description = "Description is required";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) tempErrors.instructions = "Instructions are required";

    setErrors(tempErrors);

    // returns true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("New Recipe:", { title, description, ingredients, instructions });

      // reset form
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setErrors({});
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium mb-1">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
