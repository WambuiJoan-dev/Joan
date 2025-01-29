import React from 'react';

function SearchSort({ searchQuery, setSearchQuery, sortOption, setSortOption }) {
  return (
    <div className='search-sort-container'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
        <option value='name-asc'>Sort by Name (A-Z)</option>
        <option value='name-desc'>Sort by Name (Z-A)</option>
        <option value='price-asc'>Sort by Price (Low to High)</option>
        <option value='price-desc'>Sort by Price (High to Low)</option>
      </select>
    </div>
  );
}

export default SearchSort;