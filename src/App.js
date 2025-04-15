// src/App.js

import React, { useState } from 'react';
import './App.css';
import recipes from './recipes.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">🍽️ Epic Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search thy feast..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </li>
          ))
        ) : (
          <li className="no-result">🍂 No recipes found, dear seeker.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
