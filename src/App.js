import React, { useState } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { nanoid } from 'nanoid';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note!',
      date: '24/01/2022',
    },
    {
      id: nanoid(),
      text: 'this is my second note!',
      date: '26/01/2022',
    },
    {
      id: nanoid(),
      text: 'this is my third note!',
      date: '21/01/2022',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
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
