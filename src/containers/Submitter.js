import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { setPhone, selectCountry } from '../actions/phoneActions';
import SubmitButton from '../components/SubmitButton';

export default connect(
  (state) => {
    return {
      name: state.user.name,
      surname: state.user.surname,
      profession: state.phone.profession,
      phone: state.phone.phone,
    };
  },
  (dispatch) => {
    // return bindActionCreators(
    //   {
    //     phoneChange: setPhone,
    //     countryChange: selectCountry
    //   }, dispatch
    // );
  }
)(SubmitButton);
