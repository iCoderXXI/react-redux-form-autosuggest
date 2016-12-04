import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import UserInput from '../containers/UserInput';
import Profession from '../containers/Profession/Profession';
import PhoneInput from './PhoneInput';
// import Countries from '../containers/Countries';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Row>
          <UserInput />
        </Row>
        <Row>
          <Profession />
        </Row>
        <Row>
          <PhoneInput />
        </Row>
      </div>
    );
  }
}
