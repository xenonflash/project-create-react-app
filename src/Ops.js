import React, { Component } from 'react';
import {Layout, Breadcrumb} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TicketView from './component/TicketView.jsx'
const {Sider, Content} = Layout;
class Ops extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {match} = this.props;
    console.log(match);
    return (
      <Router>
        <Layout>
          <Sider style={{background: '#aaa'}}>
            <ul>
              <li><Link to={match.url + "/ticketView:monitor"}>监控工单</Link></li>
              <li><Link to={match.url + "/ticketView:breakdown"}>报障工单</Link></li>
              <li><Link to={match.url + "/ticketView:service"}>服务工单</Link></li>
              <li><Link to={match.url + "/ticketView:CMDB"}>CMDB</Link></li>
            </ul>
          </Sider>
          <div>
            {this.props.children}
          </div>
          <Route path={match.url + "/ticketView:id"} component={TicketView}/>
        </Layout>
      </Router>
    );
  }
}

export default Ops;
