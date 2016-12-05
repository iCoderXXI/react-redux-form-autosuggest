import initialState from '../data/initialState';

import { phoneClean } from './phoneReducer';

const validateForm = (state) => {
  const userName = ''+state.user.name.trim();
  if(userName.length<2) {
    return {...state, user: {...state.user, errorName: true} }
  }

  const userSurname = ''+state.user.surname.trim();
  if(userSurname.length<2) {
    return {...state, user: {...state.user, errorSurname: true} }
  }

  const profession = ''+state.profession.val.trim();
  if(profession.length<4) {
    return {
      ...state,
      profession: {
        ...state.profession,
        errorProfession: true
      }
    }
  }

  const phoneCode = '' + state.phone.phoneCode;
  const phone = `${phoneCode}${phoneClean(state.phone.phone, phoneCode)}`;
  if(phone.length!==11) {
    return {
      ...state,
      phone: {
        ...state.phone,
        errorPhone: true
      }
    }
  }
}

export default (state=initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM':
        // console.log('ValidateForm within reducer: ', state);
        return validateForm(state);
        //return state

      default:
        return state;
    }

}
