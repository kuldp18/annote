import React from 'react';

function AddNote() {
  return (
    <div className="note add-note">
      <textarea
        name="add-note"
        id="add-note"
        cols="8"
        rows="10"
        placeholder="Type to add a new note...."
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save-note-btn">Save</button>
      </div>
    </div>
  );
}

export default AddNote;
