import React, {Component} from 'react'
import {Select, Input, Button} from 'antd'
import '../css/overviewMenu.css'
const Option = Select.Option;

var OverviewMenu = (props) => {
  let currBoard = props.boardList.filter(item => {return item.id === props.currBoard;})[0];
  return(
    <div className="overview-menu">
      {
        props.boardList.length ?
        <Select defaultValue={currBoard.name} onChange={props.handleBoardChange}>
          {
            props.boardList.map((item) => {
              return (
                <Option key={item.id} value={item.id}>{item.name}</Option>
              );
            })
          }
        </Select> : ''
      }
      <Input value={currBoard ? currBoard.name : ''} className='overview-menu-title'/>
      <Button>删除</Button>
    </div>
  );
}
export  default OverviewMenu;