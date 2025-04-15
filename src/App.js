import React, { useState } from 'react';
import './App.css';
import recipes from './recipes.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">🍽️ Epic Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <ul className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <li
              key={index}
              className="recipe-item"
              onClick={() => setSelectedRecipe(recipe)}
              style={{ cursor: 'pointer' }}
            >
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </li>
          ))
        ) : (
          <li className="no-result">🍂 No recipes found, dear seeker.</li>
        )}
      </ul>

      {selectedRecipe && selectedRecipe.fullRecipe && (
        <div className="recipe-detail">
          <h2>📖 {selectedRecipe.name} Recipe</h2>
          <h3>🧾 Ingredients:</h3>
          <ul>
            {selectedRecipe.fullRecipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3>🧑‍🍳 Steps:</h3>
          <ol>
            {selectedRecipe.fullRecipe.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;
