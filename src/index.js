import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ops from './Ops'
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
const MenuItem = Menu.Item;
import './index.css';


const {Header} = Layout;
var Config = () => (
  <Router>
    <Layout>
      <Header style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="" className="app-logo"/>
        <Menu mode="horizontal" className="main-nav">
          <MenuItem><Link to="/"><Icon type="home"/>home</Link></MenuItem>
          <MenuItem><Link to="/ops"><Icon type="setting"/>ops</Link></MenuItem>
          <MenuItem><Link to="/monitor"><Icon type="pie-chart"/>monitor</Link></MenuItem>
          <MenuItem><Link to="/ticket"><Icon type="code"/>ticket</Link></MenuItem>
        </Menu>
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
