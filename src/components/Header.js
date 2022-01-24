import React from 'react';

function Header({ setIsDarkMode, isDarkMode }) {
  return (
    <header>
      <h1>Annote</h1>
      <button className="btn" onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Mode
      </button>
    </header>
  );
}

export default Header;
