import { combineReducers } from "redux";

import userReducer from './userReducer';
import phoneReducer from './phoneReducer';
import professionReducer from './professionReducer';
import submitReducer from './submitReducer';

const combinedReducers = combineReducers({
  user: userReducer,
  phone: phoneReducer,
  profession: professionReducer,
});

export default (state, action) => {
  return submitReducer(
    combinedReducers(state, action),
    action
  );
}

/*
  reducers/actions:
  SET_USER_NAME
    - update name in user store

  SET_USER_SURNAME
    - update surname in user store

  SET_PROFESSION
    - update val in profession store
    - filter professions list by val & show suggester if any

  SELECT_PROFESSION
    - update val, professionId in profession store
    - hide suggester

  SET_PHONE
    - format phone according to current country code
      in phone store

  SELECT_COUNTRY
    - update countryId && countryCode in phone store
    - reformat phone according to current country
      in phone code

  // -------------------------------------------------
  // Access other subreducer's store:
  // -------------------------------------------------
  export const SOME_ACTION = 'SOME_ACTION';
  export function someAction() {
    return (dispatch, getState) => {
      const {items} = getState().otherReducer;

      dispatch(anotherAction(items));
    }
  }

*/
