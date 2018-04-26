import React from 'react';
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
            <button>Add Note</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
