import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./components/App"
import store from "./store"

import "./index.css";

store.dispatch({
  type: "SET_PROFESSION",
  payload: 'админ'
})

// store.dispatch({
//   type: "NEXT_PROFESSION",
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
