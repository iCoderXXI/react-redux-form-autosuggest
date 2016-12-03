import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import UserInput from '../containers/UserInput';
import Profession from '../containers/Profession/Profession';
import Phone from '../containers/Phone';

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
          <Phone />
        </Row>
      </div>
    );
  }
}

// export default App;
