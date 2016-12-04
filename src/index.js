import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./components/App"
import store from "./store"

import "./index.css";

store.dispatch({
  type: "SET_PHONE",
  payload: '9676348120',
})

store.dispatch({
  type: "SUBMIT_FORM",
})

// store.dispatch({
//   type: "USER_NAME_ERROR_ON",
// })
//
// store.dispatch({
//   type: "USER_SURNAME_ERROR_ON",
// })
//
// store.dispatch({
//   type: "PROFESSION_ERROR_ON",
// })
//
// store.dispatch({
//   type: "PHONE_ERROR_ON",
// })

// store.dispatch({
//   type: "NEXT_PROFESSION",
// })
//
// store.dispatch({
//   type: "NEXT_PROFESSION",
// })
//
// store.dispatch({
//   type: "SELECT_CURRENT_PROFESSION",
// })

//
// store.dispatch({
//   type: "PREV_PROFESSION",
// })
//
// store.dispatch({
//   type: "PREV_PROFESSION",
// })
//
// store.dispatch({
//   type: "PREV_PROFESSION",
// })
//
// store.dispatch({
//   type: "PREV_PROFESSION",
// })
//
// store.dispatch({
//   type: "PREV_PROFESSION",
// })
//
// store.dispatch({
//   type: "PREV_PROFESSION",
// })


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
