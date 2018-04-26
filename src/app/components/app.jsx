import React from 'react';
import resetStyle from '../../../css/reset.css';
import style from '../../../css/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <button className="addNoteBtn">Add Note</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
