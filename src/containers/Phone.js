import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPhone, selectCountry, phoneErrorOff } from '../actions/phoneActions';
import PhoneInput from '../components/PhoneInput';

export default connect(
  (state) => {
    return {
      phoneCode: state.phone.phoneCode,
      phone: state.phone.phone,
      placeHolder: state.phone.placeHolder,
      label: state.phone.title,
      error: state.phone.errorPhone,
      id: 'phone',
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        phoneChange: setPhone,
        countryChange: selectCountry,
        handleBlur: phoneErrorOff,
      }, dispatch
    );
  }
)(PhoneInput);
