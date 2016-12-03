export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserSurname(surname) {
  return {
    type: 'SET_USER_SURNAME',
    payload: surname,
  }
}
