import React from 'react';
import resetStyle from '../../../css/reset.css';
import style from '../../../css/delete.css';

const Delete = ({closeDelete, deleteNote}) => (
  <div className="deletePopup">
    <div className="deletePopupInner">
      <div className="warningText">
        <h1 className="deleteHeader">Delete Note</h1>
        <p className="deleteWarningText">Are you sure you want to delete this note?</p>
      </div>
      <div className="delete-flex-vertical">
        <div className="deleteButtonsDiv">
          <button className="deleteButton cancel" onClick={closeDelete}>Cancel</button>
          <button className="deleteButton delete" onClick={deleteNote}>Delete</button>
        </div>
      </div>
    </div>
  </div>
);

export default Delete;