import initialState from '../data/initialState';

export default (state=initialState.user, action) => {
    switch (action.type) {
      case 'SET_USER_NAME':
        return {...state, name: action.payload}

      case 'USER_NAME_ERROR_ON':
        return {...state, errorName: true}

      case 'USER_NAME_ERROR_OFF':
        return {...state, errorName: false}

      case 'SET_USER_SURNAME':
        return {...state, surname: action.payload}

      case 'USER_SURNAME_ERROR_ON':
        return {...state, errorSurname: true}

      case 'USER_SURNAME_ERROR_OFF':
        return {...state, errorSurname: false}

      default:
        return state;
    }

}
