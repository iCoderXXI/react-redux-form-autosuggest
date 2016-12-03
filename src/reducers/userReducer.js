import initialState from '../data/initialState';

export default (state=initialState.user, action) => {
    switch (action.type) {
      case 'SET_USER_NAME':
        return {...state, name: action.payload}

      case 'SET_USER_SURNAME':
        return {...state, surname: action.payload}

      default:
        return state;
    }

}
