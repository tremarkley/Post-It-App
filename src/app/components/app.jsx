import React from 'react';
import resetStyle from '../../../css/reset.css';
import style from '../../../css/app.css';
import Card from './card';
import AddNote from './addNote';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      showAddNote: false,
    }
    this.showAddNote = this.showAddNote.bind(this);
    this.closeAddNote = this.closeAddNote.bind(this);
  }

  showAddNote() {
    this.setState({
      showAddNote: true,
    })
  }

  closeAddNote() {
    this.setState({
      showAddNote: false,
    })
  }

  render() {
    return (
      <div>
        <ul className="navBar">
          <li className="navItem">
            <button className="addNoteBtn" onClick={this.showAddNote}><div className="plusIcon"><span>+</span></div>Add Note</button>
          </li>
        </ul>
        <div className="content">
          <ul className="flex-container">
            <Card />
          </ul>
        </div>
        {
          this.state.showAddNote ? <AddNote closeAddNote={this.closeAddNote}/> : null
        }
      </div>
    );
  }
}

export default App;
