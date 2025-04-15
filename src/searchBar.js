import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    className="search-input"
    placeholder="Search for a recipe..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
    