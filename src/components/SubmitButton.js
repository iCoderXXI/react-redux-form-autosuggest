import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';

export default class SubmitButton extends Component {
  handleSubmit(e) {
    if (typeof this.props.submitForm === "function") {
      this.props.submitForm();
    } else {
      console.error('this.props.submitForm is not defined for SubmitButton');
    }
  }

  render() {
    let content;
    if (this.props.success) {
      content = (
        <Alert bsStyle="success">
          Данные успешно отправлены.
        </Alert>
      );
    } else {
      content = (
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleSubmit.bind(this)}
        >
          Зарегистрироваться
        </Button>
      );
    }
    return (
      <div className="text-center">
        {content}
      </div>
    );
  }
}
