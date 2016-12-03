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

export function countriesListShow() {
  return {
    type: 'COUNTRY_LIST_SHOW',
  }
}