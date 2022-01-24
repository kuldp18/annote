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
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
