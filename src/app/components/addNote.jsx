import React from 'react';
import reset from '../../../css/reset.css';
import style from '../../../css/addNote.css';

const AddNote = (props) => (
  <div className="popup">
    <div className="popupInner">
      <div className="colorPopup"></div>
      <div className="popupContent">
        <div className="colorPickerDiv">
          <ul className="colorPicker">  
            <li className="colorItem red"></li>
            <li className="colorItem green"></li>
            <li className="colorItem orange"></li>
            <li className="colorItem blue"></li>
          </ul>
        </div>
        <div className="titleDiv">
          <input type="text" className="titleInput" placeholder="Untitled"></input>
        </div>
        <div className="noteContent">
          <textarea placeholder="Enter text here"></textarea>
        </div>
        <div className="flex-vertical">
          <div className="buttonsDiv">
            <button className="popupButton cancel" onClick={props.closeAddNote}>Cancel</button>
            <button className="popupButton add">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddNote;
