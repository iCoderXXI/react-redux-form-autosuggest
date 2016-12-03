import initialState from '../data/initialState';

const PHONE_LENGTH_MAX = 11;

const phoneFormat = (rawPhone, phoneCode) => {
  const pc = '' + phoneCode;
  const maxLength = PHONE_LENGTH_MAX-pc.length;
  let phone = rawPhone.replace(/[^\d]+/gi, '');
  if (phone.length>maxLength) {
    phone = phone.substring(0,maxLength);
  }
  return phone;
}

export default (state=initialState.phone, action) => {
    switch (action.type) {
      case 'SET_PHONE':
        return {
          ...state,
          phone: phoneFormat(action.payload, state.phoneCode),
          listShow: false
        }

      case 'SELECT_COUNTRY':
        // return {...state, name: action.payload}
        return {
          ...state,
          countryId: action.payload,
          phoneCode: state.data[action.payload].phoneCode,
          listShow: false
        };

      case 'COUNTRY_LIST_SHOW':
        return {
          ...state,
          listShow: true
        }

      default:
        return state;
    }

}
