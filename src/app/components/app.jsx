import React from 'react';
import resetStyle from '../../../css/reset.css';
import style from '../../../css/app.css';
import Card from './card';

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
        <ul className="navBar">
          <li className="navItem">
            <button className="addNoteBtn"><div className="plusIcon"><span>+</span></div>Add Note</button>
          </li>
        </ul>
        <div className="content">
          <ul className="flex-container">
            {/* <li className="flex-item">1</li>
            <li className="flex-item">2</li>
            <li className="flex-item">3</li>
            <li className="flex-item">4</li>
            <li className="flex-item">5</li>
            <li className="flex-item">6</li> */}
            <Card />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
