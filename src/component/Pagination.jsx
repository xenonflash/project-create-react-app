import React, {Component} from 'react';
import '../css/paginatin.css'
export default class Pagination extends Component{
  constructor(props){
    super(props);
    this.state = {
      currIdx: 1
    }
  }
  handleSelect = (index) => {
    index !== this.state.currIdx
    &&index >= 1
    && index <= this.props.totalPage
    && this.setState({currIdx: index},() => {
      typeof this.props.onSelect === 'function' && this.props.onSelect(index);
    });
  }
  render() {
    var items = [];
    var currIdx = this.state.currIdx;
    var totalPage = this.props.totalPage;
    for (let i = 1; i <= totalPage; i++) {
      var isActive = currIdx === i ? 'active' : '';
      if (i >= currIdx - 2 && i <= currIdx + 2) {
        items.push(
          <span
            className={'item ' + isActive}
            onClick={this.handleSelect.bind(this, i)}>{i}</span>
        )
      }
    }
    if (totalPage >= 4 && currIdx <= totalPage - 3) {
      items.push(
        <span className='item'
          onClick={this.handleSelect.bind(null, currIdx + 2)}>...</span>
      );
    }
    if (totalPage >= 7 && currIdx >= 3) {
      items.unshift(<span className='item' onClick={this.handleSelect.bind(null, currIdx - 2)}>...</span>);
    }
    return (
      <div className='pagination'>
        <span
          className={`item ${currIdx === 1 ? 'disable' : ''}`}
          onClick={this.handleSelect.bind(this, currIdx - 1)}
        >前一页</span>
          {items}
        <span
          className={`item ${currIdx === totalPage ? 'disable' : ''}`}
          onClick={this.handleSelect.bind(this, currIdx + 1)}
        >后一页</span>
      </div>
    );
  }
}