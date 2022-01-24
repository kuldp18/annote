import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
function NotesList({ notes, addNote }) {
  return (
    <div className="notes-list">
      <AddNote addNote={addNote} />
      {notes.map((note) => {
        return <Note {...note} key={note.id} />;
      })}
    </div>
  );
}

export default NotesList;
