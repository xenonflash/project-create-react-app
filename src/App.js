import React, { Component } from 'react';
import CountBoard from './component/CountBoard';
import Pagination from './component/Pagination';
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
    // fetch('/mock/api.Describe').then((data) => {
    //   console.log(data);
    // }).catch(() => {
      
    // });
    this.setState({
      countBoardData: [
        {name: 'xiaoming', value: 2},
        {name: 'xiaoming', value: 4},
        {name: 'xiaoming', value: 11},
        {name: 'xiaoming', value: 0},
      ],
    });
  }
  onPageChange = (index) => {
    console.log(index);
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
