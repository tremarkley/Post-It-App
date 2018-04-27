import React from 'react';
import reset from '../../../css/reset.css';
import style from '../../../css/card.css';

const Card = ({color, title, body}) => (
  <li className="card">
    <div className={`color ${color}`}></div>
    <div className="cardContent">
      <div className="cardHeader">
        <div className="cardHeaderText">
          <h1>{title}</h1>
        </div>
        <div className="iconsDiv">
          <div className="iconsHolder">
            <a className="icon pencil"></a>
            <a className="icon bin"></a>
          </div>
        </div>
      </div>
      <div className="cardBody">
        <p>{body}</p>
      </div>
    </div>
  </li>
)

export default Card;
