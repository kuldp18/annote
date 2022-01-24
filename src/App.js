import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { nanoid } from 'nanoid';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get notes from local storage(should be done first)
  useEffect(() => {
    const data = localStorage.getItem('annote-data');
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  // Save notes to local storage
  useEffect(() => {
    window.localStorage.setItem('annote-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString('en-GB'),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={isDarkMode ? 'dark-container dark-mode' : 'dark-container'}>
      <div className="container">
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
