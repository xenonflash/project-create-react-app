import React from 'react';
var style = {
  minWidth: '150px',
  minHeight: '100px',
  fontSize: '25px',
  fontWeight: 'bold',
  testAlign: 'center',
  margin: '5px',
};
var colors = ['green', 'purple', 'orange', 'grey', 'blue', 'red'];
var CountBoard = (props) => (
  <div style={{display: 'flex'}}>
    {props.data.map((item, i) => {
      return (
        <div style={{border: '2px solid #aaa', borderRadius: '5px', margin: '10px', boxShadow: '0 0 8px #ddd'}}>
          <div style={Object.assign({}, style, {color: colors[i]})}>
            {item.value}
            <p>{item.name}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default CountBoard;