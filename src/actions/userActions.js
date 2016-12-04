export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function userNameErrorOn(name) {
  return {
    type: 'USER_NAME_ERROR_ON',
  }
}

export function userNameErrorOff(name) {
  return {
    type: 'USER_NAME_ERROR_OFF',
  }
}

export function setUserSurname(surname) {
  return {
    type: 'SET_USER_SURNAME',
    payload: surname,
  }
}

export function userSurnameErrorOn(name) {
  return {
    type: 'USER_SURNAME_ERROR_ON',
  }
}

export function userSurnameErrorOff(name) {
  return {
    type: 'USER_SURNAME_ERROR_OFF',
  }
}
