import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitForm } from '../actions/submitActions';
import SubmitButton from '../components/SubmitButton';

export default connect(
  (state) => {
    return {
      success: state.submit.submit.success,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        submitForm: submitForm,
      }, dispatch
    );
  }
)(SubmitButton);
