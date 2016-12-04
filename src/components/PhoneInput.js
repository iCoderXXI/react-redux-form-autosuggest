import React, { Component } from 'react';
import {
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

import Countries from "../containers/Countries";

const colDimensions = { lg: 12, md: 12, sm: 12, xs: 12 }

export default class PhoneInput extends Component {
  render() {
    return (
      <Row>
        <Col { ...colDimensions }>
          <FormGroup>
            <InputGroup>
              <Countries />
              <InputGroup.Addon>+7</InputGroup.Addon>
              <FormControl type="text" placeholder="999 999 99 99"/>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
