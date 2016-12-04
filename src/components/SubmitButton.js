import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SubmitButton extends Component {
  handleSubmit(e) {
    if (typeof this.props.submitForm === "function") {
      this.props.submitForm();
    } else {
      console.error('this.props.submitForm is not defined for SubmitButton');
    }
  }

  render() {
    return (
      <div className="text-center">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleSubmit.bind(this)}
        >
          Зарегистрироваться
        </Button>
      </div>
    );
  }
}
