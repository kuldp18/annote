import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
function NotesList({ notes }) {
  return (
    <div className="notes-list">
      <AddNote />
      {notes.map((note) => {
        return <Note {...note} key={note.id} />;
      })}
    </div>
  );
}

export default NotesList;
