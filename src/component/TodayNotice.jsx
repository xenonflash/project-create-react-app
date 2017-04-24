import React, {Component} from 'react';
import '../css/todayNotice.css';
var TodayNotice =(props) =>(
  <div className="today-notice" style={props.TodayNotice}>
    {
      props.noticeList.map((item, index) => {
        return(
          <p key={index} className="today-notice-item" onClick={props.onSelect.bind(null, item)}>{item.text}</p>
        );
      })
    }
  </div>
)

export default TodayNotice;