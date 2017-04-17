import React from 'react';

var style = {
  minWidth: '35px',
  minHeight: '35px',
  fontSize: '25px',
  fontWeight: 'bold',
  testAlign: 'center',
  margin: '5px',
};
var colors = ['green', 'purple', 'orange', 'grey', 'blue', 'red'];
var CountBoard = (props) => (
  props.data.map((item, i) => {
    return (
      <div >
        <div style={Object.assign({},{style}, {color: colors[i]})}>
          {item.value}
          <p>{item.name}</p>
        </div>
      </div>
    );
  })
);

export default CountBoard;