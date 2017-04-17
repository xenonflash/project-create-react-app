import React, {Component} from 'react';

export default class TicketView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  displayName = '工单视图'
  render() {
    var param = this.props.match.params.id.slice(1);
    return (
      <h1>
        {"ticket view of " + param}
      </h1>
    );
  }
}