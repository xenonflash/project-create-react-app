import React, {Component} from 'react'
import {Select, Input, Button} from 'antd'
const {Option} = Select;

var OverviewMenu = (props) => (
  <div className="overview-menu">
    <Select>
      {
        props.boardList.map((item) => {
          return (
            <Option key={item.id} onClick={props.handleBoardChange.bind(item)}>{item.name}</Option>
          );
        })
      }
    </Select>
    <Input value={props.currBoard.name}/>
    <Button></Button>
  </div>
);