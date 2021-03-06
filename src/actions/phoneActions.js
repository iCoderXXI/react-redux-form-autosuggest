export function setPhone(phone) {
  return {
    type: 'SET_PHONE',
    payload: phone,
  }
}

export function selectCountry(countryId) {
  return {
    type: 'SELECT_COUNTRY',
    payload: countryId,
  }
}

export function phoneErrorOn() {
  return {
    type: 'PHONE_ERROR_ON',
  }
}

export function phoneErrorOff() {
  return {
    type: 'PHONE_ERROR_OFF',
  }
}
