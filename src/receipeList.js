import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) return <p className="no-results">No recipes found.</p>;

  return (
    <ul className="recipe-list">
      {recipes.map((recipe, index) => (
        <li key={index} className="recipe-item">{recipe}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
