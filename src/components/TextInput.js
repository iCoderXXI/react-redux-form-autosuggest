import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class TextInput extends Component {
  handleChange(e) {
    this.props.inputChange(e.target.value);
  }

  handleKeyEvent(e, handlerName) {
    e.preventDefault();
    if (typeof this.props[handlerName] === 'function') {
      this.props[handlerName]();
    }
  }

  handleKeyPress(e) {
    //console.log(e.keyCode);
    switch(e.keyCode) {
      case 13: //KeyENTER
        this.handleKeyEvent(e, 'onKeyENTER')
        return true;

      case 27: //KeyESCAPE
        this.handleKeyEvent(e, 'onKeyESC')
        return true;

      case 38: //KeyUP
        this.handleKeyEvent(e, 'onKeyUP')
        return true;

      case 40: //KeyDOWN
        this.handleKeyEvent(e, 'onKeyDOWN')
        return true;

      default:
        return true;
    }
  }

  render() {
    // console.log('Render TextInput: ',this.props);
    return (
      <FormGroup>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.props.text}
          id={this.props.id}
          name={this.props.id}
          placeholder={this.props.placeholder}
          onKeyDown={this.handleKeyPress.bind(this)}
        />
      </FormGroup>
    );
  }
}
