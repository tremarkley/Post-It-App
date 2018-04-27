import React from 'react';
import resetStyle from '../../../css/reset.css';
import style from '../../../css/app.css';
import Card from './card';
import AddNote from './addNote';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [{
        color: 'green',
        title: 'Grocery List',
        body: 'This is where you write your thoughts and anything else you want to share.',
      }],
      showAddNote: false,
    }
    this.showAddNote = this.showAddNote.bind(this);
    this.closeAddNote = this.closeAddNote.bind(this);
    this.addNote = this.addNote.bind(this);
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

  addNote({color, title, body}) {
    this.setState((prevState) => {
      const cards = prevState.cards.slice();
      cards.push({color, title, body});
      return { cards };
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
            {
              this.state.cards.map((card, index) => (
                <Card key={index} color={card.color} title={card.title} body={card.body}/>
              ))
            }
          </ul>
        </div>
        {
          this.state.showAddNote ? <AddNote closeAddNote={this.closeAddNote} addNote={this.addNote}/> : null
        }
      </div>
    );
  }
}

export default App;
