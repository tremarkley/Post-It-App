import React from 'react';
import resetStyle from '../../../css/reset.css';
import style from '../../../css/app.css';
import Card from './card';
import AddNote from './addNote';
import Delete from './delete';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      showAddNote: false,
      editNote: false,
      cardToEdit: 0,
      showDelete: false,
    }
    this.showAddNote = this.showAddNote.bind(this);
    this.closeAddNote = this.closeAddNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.showEditNote = this.showEditNote.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.closeDelete = this.closeDelete.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  showAddNote() {
    this.setState({
      showAddNote: true,
    });
    //  prevent scrolling
    document.body.style.overflow = 'hidden';
  }

  showEditNote(index) {
    this.setState({
      editNote: true,
      cardToEdit: index,
    });
    //  prevent scrolling
    document.body.style.overflow = 'hidden';
  }

  showDelete(index) {
    this.setState({
      showDelete: true,
      cardToEdit: index,
    });
    //  prevent scrolling
    document.body.style.overflow = 'hidden';
  }

  closeDelete() {
    this.setState({
      showDelete: false,
    });
    // re-enable scrolling
    document.body.style.overflow = 'auto';
  }

  closeAddNote() {
    this.setState({
      showAddNote: false,
      editNote: false,
    });
    // re-enable scrolling
    document.body.style.overflow = 'auto';
  }

  addNote({color, title, body}) {
    this.setState((prevState) => {
      const cards = prevState.cards.slice();
      cards.push({color, title, body});
      return { cards };
    });
  }

  saveNote({color, title, body}) {
    this.setState((prevState) => {
      const cards = prevState.cards.slice();
      cards[this.state.cardToEdit] = {color, title, body};
      return { cards };
    });
  }

  deleteNote() {
    this.setState((prevState) => {
      prevState.cards.splice(this.state.cardToEdit, 1);
      return { cards: prevState.cards, showDelete: false };
    });
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
                <Card 
                  key={index} 
                  color={card.color} 
                  title={card.title} 
                  body={card.body} 
                  editNote={() => this.showEditNote(index)}
                  showDelete={() => this.showDelete(index)}
                />
              ))
            }
          </ul>
        </div>
        {
          this.state.showAddNote ? <AddNote closeAddNote={this.closeAddNote} addNote={this.addNote} isNewNote={true} color='red' /> : null
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
        {
          this.state.showDelete ? <Delete closeDelete={this.closeDelete} deleteNote={this.deleteNote}/> : null
        }
      </div>
    );
  }
}

export default App;
