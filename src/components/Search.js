import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
function Search() {
  return (
    <div className="search">
      <BiSearchAlt className="search-icon" size="1.3em" />
      <input
        type="text"
        name="search-input"
        className="search-input"
        placeholder="Type to search..."
      />
    </div>
  );
}

export default Search;
