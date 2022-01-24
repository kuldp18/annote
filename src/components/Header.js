import React from 'react';
import { MdModeNight } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
function Header({ setIsDarkMode, isDarkMode }) {
  return (
    <header>
      <h1>Annote</h1>
      <button
        className="btn theme-changer-btn"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <WiDaySunny className="theme-change-icon" />
        ) : (
          <MdModeNight className="theme-change-icon" />
        )}
      </button>
    </header>
  );
}

export default Header;
