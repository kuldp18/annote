import React, { useState } from 'react';

function AddNote({ addNote }) {
  const [noteText, setNoteText] = useState('');
  const handleSave = (e) => {
    e.preventDefault();
    addNote(noteText);
    setNoteText('');
  };
  return (
    <div className="note add-note">
      <textarea
        name="add-note"
        id="add-note"
        cols="8"
        rows="10"
        placeholder="Type to add a new note...."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save-note-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
