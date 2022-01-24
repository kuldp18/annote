import React from 'react';
import Note from './Note';

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note {...note} key={note.id} />;
      })}
    </div>
  );
}

export default NotesList;
