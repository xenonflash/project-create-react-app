import React, { Component } from 'react';
import CountBoard from './component/CountBoard.jsx';
import Pagination from './component/Pagination.jsx';
import TicketTable from './component/TicketTable.jsx';
import TodayNotice from './component/TodayNotice.jsx'
import OverviewMenu from './component/OverviewMenu.jsx'
import {Modal} from 'antd';
import $ from 'jquery';
import './App.css';
import './mock/app_mock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBoardData: [],
      TicketData: [],
      currNotice: null,
      noticeData: [],
      boardList: [],
    };
  }
  componentDidMount() {
    this.getBoardData();
    this.getCountBoard();
    this.getTicketData();
    this.getNoticeData();
  }
  getBoardData() {
    $.ajax('/mock/api.describeBoard').then((res) => {
      res = JSON.parse(res);
      if (res.ret_code === 0) {
        this.setState({
          boardList: res.ret_set,
          currBoard: res.ret_set.filter((item) => {return !!item.curr})[0]
        });
      }
    });
  }
  getCountBoard() {
    $.ajax('/mock/api.Describe').then((res) =>{
      res = JSON.parse(res);
      if (res.ret_code === 0) {
        console.log(res.ret_code);
        this.setState({
          countBoardData: res.ret_set
        });
      }
    });
  }
  getTicketData() {
    $.ajax('/mock/api.describeTicket').then((res) => {
      res = JSON.parse(res);
      console.log(res.ret_set);
      if (res.ret_code === 0) {
        this.setState({
          TicketData: res.ret_set
        });
      }
    });
  }
  getNoticeData() {
    $.ajax('/mock/api.describeNoticeTopFour').then((res) => {
      res = JSON.parse(res);
      if (res.ret_code === 0) {
        this.setState({noticeData: res.ret_set});
      }
    });
  }
  onPageChange = (index) => {
  }
  handleNotice = (notice) => {
    this.setState({
      currNotice: notice,
      noticeModalShow: true
    });
  }
  closeNoticeModal = () =>{
    this.setState({noticeModalShow: false})
  }
  handleBoardChange = (board) => {
    this.setState({currBoard: board});
  }
  render() {
    return (
      <div className="App">
        <div className="today-summary">
          <CountBoard data={this.state.countBoardData} style={{flex: '4 1'}}/>
          <TodayNotice noticeList={this.state.noticeData} style={{flex: '1 1'}} onSelect={this.handleNotice}/>
        </div>
        <OverviewMenu
          boardList={this.state.boardList}
          handleBoardChange={this.handleBoardChange}
          currBoard={this.state.currBoard}
        />
        {
            this.state.TicketData.map((item, index) => {
            return (
              <TicketTable
                key={index}
                dataSource={item}
                columns={[
                  {title: 'Name', dataIndex: 'name', key: 'name'},
                  {title: 'Age',dataIndex: 'age',key: 'age'},
                  {title: 'Address',dataIndex: 'address',key: 'address'}
                ]}
              />
            );
          })
        }
        {
          this.state.currNotice ?
          <Modal
            title={this.state.currNotice.text}
            visible={this.state.noticeModalShow}
            onCancel={this.closeNoticeModal}
            onOk={this.closeNoticeModal}
          >
            {this.state.currNotice.content}
          </Modal> : ''
        }
        <Pagination totalPage={500} onSelect={this.onPageChange}/>
      </div>
    );
  }
}

export default App;
