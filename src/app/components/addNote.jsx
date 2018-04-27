import React from 'react';
import reset from '../../../css/reset.css';
import style from '../../../css/addNote.css';

class AddNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
      body: props.body,
      title: props.title,
      addButtonActive: false,
      changesHaveBeenMade: false,
    }
    this.clickAddNote = this.clickAddNote.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
  }

  clickAddNote() {
    if (this.state.addButtonActive) {
      if (this.props.isNewNote) {
        this.props.addNote(this.state);
      } else {
        this.props.saveNote(this.state);
      }
      this.props.closeAddNote();
    }
  }

  activateAddButton() {
    if (this.state.body && 
        this.state.title && 
        this.state.body.length > 0 && 
        this.state.title.length > 0) {
      this.setState({
        addButtonActive: true,
      });
    } else {
      this.setState({
        addButtonActive: false,
      });
    }
  }

  titleChange(event) {
    this.setState({ title: event.target.value }, () => {
      this.activateAddButton();
    });
  }

  colorChange(event) {
    const color = event.target.id;
    if (color !== this.state.color) {
      this.setState({ color });
      this.activateAddButton();
    }
  }

  bodyChange(event) {
    this.setState({ body: event.target.value }, () => {
      this.activateAddButton();
    });
  }

  render() {
    return (
      <div className="popup">
          <div className="popupInner">
            <div className={`colorPopup ${this.state.color}`}></div>
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
                  <button className={`popupButton add ${this.state.addButtonActive ? 'active' : null}`} onClick={this.clickAddNote}>{this.props.isNewNote ? 'Add' : 'Save'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default AddNote;
