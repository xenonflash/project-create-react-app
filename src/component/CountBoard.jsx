import React from 'react';
import '../css/countBoard.css'
var colors = ['green', 'purple', 'orange', 'grey', 'blue', 'red'];
var CountBoard = (props) => (
  <div className="count-board" style={props.style}>
    {props.data.map((item, i) => {
      return (
        <div className="count-board-item">
          <span className="count-board-value" style={{color: colors[i]}}>{item.value}</span>
          <p className="count-board-name">{item.name}</p>
        </div>
      );
    })}
  </div>
);

export default CountBoard;