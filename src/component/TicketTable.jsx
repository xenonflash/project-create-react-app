import React, {Component} from 'react';
import {Card, Table, Icon} from 'antd';
import $ from 'jquery';
import '../css/ticketTable.css';
class TicketTable extends Component{
  constructor(props) {
    super(props);
    this.displayName = 'TicketTable';
  }
  handleUp() {
    console.log(
      'up clicked'
    )
  }
  operationArea = (
    <div style={{display: 'flex', width: '100px', justifyContent: 'space-between'}}>
      <Icon type="caret-up" onClick={this.handleUp}/>
      <Icon type="caret-down" onClick={this.handleDown}/>
      <Icon type="delete" onClick={this.handleDelete}/>
      <Icon type="edit" onClick={this.handleEdit}/>
    </div>
  )
  render() {
    return(
      <div className='ticket-table'>
        <Card
          title="测试标题"
          bordered={true}
          extra={this.operationArea}
        >
          <Table
            dataSource={this.props.dataSource}
            columns={this.props.columns}
          />
        </Card>
      </div>
    );
  }
}

export default TicketTable;