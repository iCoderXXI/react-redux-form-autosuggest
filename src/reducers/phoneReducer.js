import initialState from '../data/initialState';

const PHONE_LENGTH_MAX = 11;

const phoneFormatRE = {
  1: /(.{3})(.{3})(.{2})(.{2})/,
  2: /(.{2})(.{3})(.{2})(.{2})/,
  3: /(.{1})(.{3})(.{2})(.{2})/,
  4: /(.{0})(.{3})(.{2})(.{2})/,
  5: /(.{0})(.{2})(.{2})(.{2})/,
}


export const phoneClean = (rawPhone, phoneCode) => {
  const pc = '' + phoneCode;
  const maxLength = PHONE_LENGTH_MAX-pc.length;
  let phone = rawPhone.replace(/[^\d]+/gi, '');
  if (phone.length>maxLength) {
    phone = phone.substring(0,maxLength);
  }
  return phone;
}


const phoneFormat = (rawPhone, phoneCode) => {
  const pc = '' + phoneCode;
  let phone = phoneClean(rawPhone, phoneCode);
  const phoneRe = phoneFormatRE[pc.length]
  phone = (phone + '            ')
    .replace(phoneRe, '$1 $2 $3 $4').trim();
  return phone;
}

export default (state=initialState.phone, action) => {
    switch (action.type) {
      case 'SET_PHONE':
        return {
          ...state,
          phone: phoneFormat(action.payload, state.phoneCode),
        }

      case 'SELECT_COUNTRY':
        // return {...state, name: action.payload}
        return {
          ...state,
          countryId: action.payload,
          phoneCode: state.data[action.payload].phoneCode,
          placeHolder: state.placeHolders[
            state.data[action.payload].phoneCode.length
          ],
          phone: phoneFormat(state.phone, state.data[action.payload].phoneCode),
        };

      case 'PHONE_ERROR_ON':
        return {
          ...state,
          errorPhone: true,
        }

      case 'PHONE_ERROR_OFF':
        return {
          ...state,
          errorPhone: false,
        }

      default:
        return state;
    }

}
