import React from 'react';
import reset from '../../../css/reset.css';
import style from '../../../css/addNote.css';

class AddNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      body: undefined,
      title: undefined,
    }
    this.clickAddNote = this.clickAddNote.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
  }

  clickAddNote() {
    debugger
    this.props.addNote(this.state);
    this.props.closeAddNote();
  }

  titleChange(event) {
    this.setState({ title: event.target.value });
  }

  colorChange(event) {
    console.log(event);
  }

  bodyChange(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <div className="popup">
          <div className="popupInner">
            <div className="colorPopup"></div>
            <div className="popupContent">
              <div className="colorPickerDiv">
                <ul className="colorPicker">  
                  <li id="red" className="colorItem red" onClick={this.colorChange}></li>
                  <li id="green" className="colorItem green" onClick={this.colorChange}></li>
                  <li id="orange" className="colorItem orange" onClick={this.colorChange}></li>
                  <li id="blue" className="colorItem blue" onClick={this.colorChange}></li>
                </ul>
              </div>
              <div className="titleDiv">
                <input type="text" value={this.state.title} className="titleInput" placeholder="Untitled" onChange={this.titleChange}></input>
              </div>
              <div className="noteContent">
                <textarea placeholder="Enter text here" value={this.state.body} onChange={this.bodyChange}></textarea>
              </div>
              <div className="flex-vertical">
                <div className="buttonsDiv">
                  <button className="popupButton cancel" onClick={this.props.closeAddNote}>Cancel</button>
                  <button className="popupButton add" onClick={this.clickAddNote}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default AddNote;
