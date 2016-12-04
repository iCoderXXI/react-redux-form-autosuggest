import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPhone } from '../actions/phoneActions';
import PhoneInput from '../components/PhoneInput';

export default connect(
  (state) => {
    return {
      phoneCode: state.phone.phoneCode,
      phone: state.phone.phone,
      placeHolder: state.phone.placeHolder,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {phoneChange: setPhone}, dispatch
    );
  }
)(PhoneInput);
