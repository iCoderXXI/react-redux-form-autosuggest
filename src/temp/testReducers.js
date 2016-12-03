import store from './store';


store.dispatch({
  type: "SET_PROFESSION",
  payload: 'админ'
})

store.dispatch({
  type: "SELECT_PROFESSION",
  payload: 18
})


store.dispatch({
  type: "SET_PHONE",
  payload: 'qaaaa'
})

store.dispatch({
  type: "COUNTRY_LIST_SHOW",
  payload: '1234567890345234345'
})

store.dispatch({
  type: "SELECT_COUNTRY",
  payload: 'ME'
})

store.dispatch({
  type: "SET_PHONE",
  payload: '1234567890345234345'
})
