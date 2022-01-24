import React, { useState } from 'react';
import NotesList from './components/NotesList';
function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="container">
      <NotesList />
    </div>
  );
}

export default App;
