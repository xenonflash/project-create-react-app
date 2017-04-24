import React, { Component } from 'react';
import CountBoard from './component/CountBoard.jsx';
import Pagination from './component/Pagination.jsx';
import $ from 'jquery';
import './App.css';
import './mock/app_mock';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBoardData: [],
    };
  }
  componentDidMount() {
    $.ajax('/mock/api.Describe', {
      success: (res) => {
        res = JSON.parse(res);
        if (res.ret_code === 0) {
          console.log(res.ret_code);
          this.setState({
            countBoardData: res.ret_set
          });
        }
      }
    });
  }
  onPageChange = (index) => {
  }
  render() {
    return (
      <div className="App">
        <CountBoard data={this.state.countBoardData}/>
        
        <Pagination totalPage={500} onSelect={this.onPageChange}/>
      </div>
    );
  }
}

export default App;
