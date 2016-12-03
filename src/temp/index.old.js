import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const fetchTweets = (dispatch) => {
  const url =
    "http://rest.learncode.academy"+
    "/api/test123/tweets";
  return dispatch(
    {
      // auto reducer calls:
      // *_PENDING, *_REJECTED, *_FULFILLED
      type: "FETCH_USERS",
      payload: axios.get(url)
    }
  )
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_USERS_PENDING":
      // called automagically by redux-promise-middleware
      return {...state, fetching: true};

    case "FETCH_USERS_REJECTED":
    // called automagically by redux-promise-middleware
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    case "FETCH_USERS_FULFILLED":
    // called automagically by redux-promise-middleware
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload.data
      };

    default:
      return state;
  }
}

const middlewares = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middlewares);


fetchTweets(store.dispatch);

// store.dispatch({
//   type: "FETCH_USERS",
//   payload: axios.get("http://rest.learncode.academy/api/wstern/users")
// })






// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
