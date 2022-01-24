import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
function NotesList({ notes, addNote, deleteNote }) {
  return (
    <div className="notes-list">
      <AddNote addNote={addNote} />
      {notes.map((note) => {
        return <Note {...note} key={note.id} deleteNote={deleteNote} />;
      })}
    </div>
  );
}

export default NotesList;
