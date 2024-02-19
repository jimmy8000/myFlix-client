import React from 'react';

const SearchBar = ({ onSearch, searchQuery }) => {
  return (
    <input
      type="text"
      className="form-control mt-3 mb-3"
      placeholder="Search movies by name..."
      onChange={(e) => onSearch(e.target.value)}
      value={searchQuery}
    />
  );
};

export default SearchBar;
