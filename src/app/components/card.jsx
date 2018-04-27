import React from 'react';
import reset from '../../../css/reset.css';
import style from '../../../css/card.css';

const Card = () => (
  <li className="card">
    <div className="color"></div>
    <div className="cardContent">
      <div className="cardHeader">
        <div className="cardHeaderText">
          <h1>Grocery List</h1>
        </div>
        <div className="iconsDiv">
          <div className="iconsHolder">
            <a className="icon pencil"></a>
            <a className="icon bin"></a>
          </div>
        </div>
      </div>
      <div className="cardBody">
        <p>This is where you write your thoughts and anything else you want to share.</p>
      </div>
    </div>
  </li>
)

export default Card;
