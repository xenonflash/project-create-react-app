import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ops from './Ops'
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout} from 'antd';
import './index.css';


const {Header} = Layout;
var Config = () => (
  <Router>
    <Layout>
      <Header style={{display: 'flex'}}>
        <Link to="/">首页</Link>
        <Link to="/ops">运维</Link>
        <Link to="/monitor">监控</Link>
        <Link to="/ticket">工单</Link>
        <img src={logo} alt="" className="app-logo"/>
      </Header>
      <Route exact path='/' component={App}/>
      <Route exact path='/ops' component={Ops}/>
      <Route exact path='/monitor' component={App}/>
      <Route exact path='/ticket' component={App}/>
    </Layout>
  </Router>
);

ReactDOM.render(
  <Config />,
  document.getElementById('root')
);
