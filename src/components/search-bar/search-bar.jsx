import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search movies by name..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
