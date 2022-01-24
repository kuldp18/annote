import React, { useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
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
    <div className="container">
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
