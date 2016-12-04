import React, { Component } from 'react';
import {
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

import CountrySelector from "../containers/CountrySelector";

const colDimensions = { lg: 12, md: 12, sm: 12, xs: 12 }

export default class PhoneInput extends Component {
  phoneChange(e) {
    if (typeof this.props.phoneChange === "function") {
      this.props.phoneChange(e.target.value);
    } else {
      console.log('this.props.phoneChange handler is not set for PhoneInput coomponent');
    }
  }
  render() {
    return (
      <Row>
        <Col { ...colDimensions } className="form-group">
          <FormGroup
            validationState={this.props.error ? "error" : null}
          >
            <ControlLabel>{this.props.label}</ControlLabel>
            <InputGroup bsSize="large">
              <CountrySelector />
              <InputGroup.Addon>+{this.props.phoneCode || "7"}</InputGroup.Addon>
              <FormControl
                type="text"
                placeholder={
                  this.props.placeHolder || "999 999 99 99"
                }
                value={this.props.phone || ""}
                onChange={this.phoneChange.bind(this)}
                id="phone"
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
