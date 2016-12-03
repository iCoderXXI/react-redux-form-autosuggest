import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ProfessionsList extends Component {
  clickHandle(id) {
    // console.log(this, id);
    if (typeof this.props.selectProfession === "function") {
      this.props.selectProfession(id);
    }
  }
  render() {
    const currKey = this.props.currentListItemId;
    let list = [];
    for(let id in this.props.list) {
      if (true) {
        const item = this.props.list[id];
        const isActive = currKey === id ? 'success' : null;
        list.push(
          <ListGroupItem
            key={id}
            listItem
            bsStyle={isActive}
          >
          <div
            className="profession"
            onClick={this.clickHandle.bind(this,id)}
          >
            <div dangerouslySetInnerHTML={{__html: item}}></div>
          </div>
          </ListGroupItem>
        );
      }
    }
    // console.log(list);
    return (
      <div className="professionsContainer">
        <ListGroup>
          {list && list}
        </ListGroup>
      </div>
    )
  }
}
