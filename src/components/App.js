import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import User from '../containers/User';
import Profession from '../containers/Profession/Profession';
import Phone from '../containers/Phone';
import Submitter from '../containers/Submitter';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Row>
          <User />
        </Row>
        <Row>
          <Profession />
        </Row>
        <Row>
          <Phone />
        </Row>
        <Row>
          <Submitter />
        </Row>
      </div>
    );
  }
}
