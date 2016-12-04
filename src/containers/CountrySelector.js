import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCountry } from '../actions/phoneActions';
import CountryList from '../components/CountryList';

export default connect(
  (state) => {
    return {
      list: state.phone.data,
      countryId: state.phone.countryId,
      error: state.phone.errorPhone,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {countryChange: selectCountry}, dispatch
    );
  }
)(CountryList);
