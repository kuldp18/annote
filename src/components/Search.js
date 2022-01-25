import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <BiSearchAlt className="search-icon" size="1.3em" />
      <input
        type="text"
        name="search-input"
        className="search-input"
        placeholder="Type to search..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
}

export default Search;
