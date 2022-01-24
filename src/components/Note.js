import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
function Note({ id, date, text, deleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}

export default Note;
