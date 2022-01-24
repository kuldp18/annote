import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
function Note() {
  return (
    <div className="note">
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit iusto
        culpa eum, quo nostrum.
      </span>
      <div className="note-footer">
        <small>24/01/22</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
