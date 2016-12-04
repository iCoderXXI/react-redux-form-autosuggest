import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class TextInput extends Component {
  // handleChange(e) {
  //   this.props.inputChange(e.target.value);
  // }
  //
  // handleEvent(e, handlerName, preventDefault = true) {
  //   if (preventDefault) e.preventDefault();
  //   if (typeof this.props[handlerName] === 'function') {
  //     this.props[handlerName]();
  //   }
  // }
  //
  // handleBlur(e) {
  //   console.log('Blur detected');
  //   const deferred = (evt, that) => {
  //     console.log('Blur proceeded');
  //     that.handleEvent(evt, 'onBlur', false);
  //   }
  //   setTimeout( deferred, 1000, e, this );
  //   return true;
  // }
  //
  // handleKeyPress(e) {
  //   //console.log(e.keyCode);
  //   switch(e.keyCode) {
  //     case 13: //KeyENTER
  //       this.handleEvent(e, 'onKeyENTER')
  //       return true;
  //
  //     case 27: //KeyESCAPE
  //       this.handleEvent(e, 'onKeyESC')
  //       return true;
  //
  //     case 38: //KeyUP
  //       this.handleEvent(e, 'onKeyUP')
  //       return true;
  //
  //     case 40: //KeyDOWN
  //       this.handleEvent(e, 'onKeyDOWN')
  //       return true;
  //
  //     default:
  //       return true;
  //   }
  // }

  render() {
    return (
      <div className="text-center">
        <Button bsStyle="primary" bsSize="large">
          Зарегистрироваться
        </Button>
      </div>
    );
  }
}
