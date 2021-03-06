import React from 'react';
import reset from '../../../css/reset.css';
import style from '../../../css/card.css';

const Card = ({color, title, body, editNote, showDelete}) => (
  <li className="card">
    <div className={`color ${color}`}></div>
    <div className="cardContent">
      <div className="cardHeader">
        <div className="cardHeaderText">
          <h1>{title}</h1>
        </div>
        <div className="iconsDiv">
          <div className="iconsHolder">
              <svg className="icon" viewBox="0 0 528.899 528.899" style={{'enableBackground': 'new 0 0 528.899 528.899'}}>
                <g>
                  <path onClick={editNote} id="pencil" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z" fill="#dcddde"/>
                </g>
              </svg>
              <svg className="icon" viewBox="0 0 459 459" style={{'enableBackground': 'new 0 0 459 459'}}>
                <g>
                  <g>
                    <path onClick={showDelete} id="bin" d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5    H51v51h357V25.5z" fill="#dcddde"/>
                  </g>
                </g>
              </svg>
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
