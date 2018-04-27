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
      editNote: false,
      cardToEdit: 0,
    }
    this.showAddNote = this.showAddNote.bind(this);
    this.closeAddNote = this.closeAddNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.showEditNote = this.showEditNote.bind(this);
  }

  showAddNote() {
    this.setState({
      showAddNote: true,
    })
  }

  showEditNote(index) {
    this.setState({
      editNote: true,
      cardToEdit: index,
    })
  }

  closeAddNote() {
    this.setState({
      showAddNote: false,
      editNote: false,
    })
  }

  addNote({color, title, body}) {
    this.setState((prevState) => {
      const cards = prevState.cards.slice();
      cards.push({color, title, body});
      return { cards };
    })
  }

  saveNote({color, title, body}) {
    this.setState((prevState) => {
      const cards = prevState.cards.slice();
      cards[this.state.cardToEdit] = {color, title, body};
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
                <Card key={index} color={card.color} title={card.title} body={card.body} editNote={() => this.showEditNote(index)}/>
              ))
            }
          </ul>
        </div>
        {
          this.state.showAddNote ? <AddNote closeAddNote={this.closeAddNote} addNote={this.addNote} isNewNote={true}/> : null
        }
        {
          this.state.editNote ? 
          <AddNote 
            closeAddNote={this.closeAddNote} 
            addNote={this.addNote} 
            isNewNote={false} 
            body={this.state.cards[this.state.cardToEdit].body}
            title={this.state.cards[this.state.cardToEdit].title}
            color={this.state.cards[this.state.cardToEdit].color}
            saveNote={this.saveNote}
          /> : null
        }
      </div>
    );
  }
}

export default App;
