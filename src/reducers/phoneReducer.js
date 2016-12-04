import initialState from '../data/initialState';

const PHONE_LENGTH_MAX = 11;

const phoneFormatRE = {
  1: /(.{3})(.{3})(.{2})(.{2})/,
  2: /(.{2})(.{3})(.{2})(.{2})/,
  3: /(.{1})(.{3})(.{2})(.{2})/,
  4: /(.{0})(.{3})(.{2})(.{2})/,
  5: /(.{0})(.{2})(.{2})(.{2})/,
}

const phoneFormat = (rawPhone, phoneCode) => {
  const pc = '' + phoneCode;
  const maxLength = PHONE_LENGTH_MAX-pc.length;
  const phoneRe = phoneFormatRE[pc.length]
  let phone = rawPhone.replace(/[^\d]+/gi, '');
  console.log(
    '['+pc+']',
    '['+maxLength+' - '+phone.length+']',
    '['+rawPhone+']',
    '['+phone+']'
  );
  if (phone.length>maxLength) {
    phone = phone.substring(0,maxLength);
  }
  console.log('['+phone+']')
  phone = (phone + '            ').replace(
    phoneRe,
    '$1 $2 $3 $4'
  ).trim();
  console.log('['+phone+']');
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

      default:
        return state;
    }

}
