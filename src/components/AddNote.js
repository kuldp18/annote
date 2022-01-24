import React, { useState } from 'react';

function AddNote({ addNote }) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 250;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText('');
    }
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
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save-note-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
