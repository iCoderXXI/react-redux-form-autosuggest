import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col} from 'react-bootstrap';

import { setUserName, setUserSurname, userNameErrorOff, userSurnameErrorOff } from '../actions/userActions';
import TextInput from '../components/TextInput';

export const UserName = connect(
  (state) => {
    return {
      text: state.user.name,
      id: 'name',
      label: 'ИМЯ',
      placeholder: 'Введите имя',
      error: state.user.errorName
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        inputChange: setUserName,
        handleBlur: userNameErrorOff
      }, dispatch
    );
  }
)(TextInput);

export const UserSurname = connect(
  (state) => {
    return {
      text: state.user.surname,
      id: 'surname',
      label: 'ФАМИЛИЯ',
      placeholder: 'Введите фамилию',
      error: state.user.errorSurname,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        inputChange: setUserSurname,
        handleBlur: userSurnameErrorOff
      }, dispatch
    );
  }
)(TextInput);

const colDimensions = {
  lg: 6,
  md: 6,
  sm: 6,
  xs: 6
}

export default class User extends Component {
  render() {
    return (
      <Row>
        <Col { ...colDimensions } className="form-group">
          <UserName />
        </Col>
        <Col { ...colDimensions } className="form-group">
          <UserSurname />
        </Col>
      </Row>
    )
  }
}
