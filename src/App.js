import React, { Component } from 'react';
import CountBoard from './component/CountBoard'
import './App.css';
import './mock/app_mock';
import $ from 'jquery';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBoardData: [],
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="App">
        <CountBoard data={this.state.countBoardData}/>
      </div>
    );
  }
}

export default App;
