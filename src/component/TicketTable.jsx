import React, {Component} from 'react';
import {Card, Table} from 'antd';
import $ from 'jquery';
class TicketTable extends Component{
  constructor(props) {
    super(props);
    this.displayName = 'TicketTable';
  }
  componentDidMount() {
    $.ajax('/mock/api.promise').then((res) => {
      console.log(res);
    }).catch()
  }
  render() {
    
  }
}