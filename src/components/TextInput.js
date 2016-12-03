import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class TextInput extends Component {
  handleChange(e) {
    this.props.inputChange(e.target.value);
  }

  handleEvent(e, handlerName, preventDefault = true) {
    if (preventDefault) e.preventDefault();
    if (typeof this.props[handlerName] === 'function') {
      this.props[handlerName]();
    }
  }

  handleBlur(e) {
    this.handleEvent(e, 'onBlur', false);
    return true;
  }

  handleKeyPress(e) {
    //console.log(e.keyCode);
    switch(e.keyCode) {
      case 13: //KeyENTER
        this.handleEvent(e, 'onKeyENTER')
        return true;

      case 27: //KeyESCAPE
        this.handleEvent(e, 'onKeyESC')
        return true;

      case 38: //KeyUP
        this.handleEvent(e, 'onKeyUP')
        return true;

      case 40: //KeyDOWN
        this.handleEvent(e, 'onKeyDOWN')
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
          onBlur={this.handleBlur.bind(this)}
        />
      </FormGroup>
    );
  }
}
