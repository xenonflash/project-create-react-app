import React, { Component } from 'react';
import CountBoard from './component/CountBoard'
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
    fetch('/mock/api.Describe').then((data) => {
      console.log(data);
    }).catch(() => {
      
    });
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
