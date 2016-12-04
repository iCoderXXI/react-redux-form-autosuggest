import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setProfession,
  prevProfession,
  nextProfession,
  selectCurrentProfession,
  cancelProfession,
  professionErrorOff,
} from '../../actions/professionActions';

import TextInput from '../../components/TextInput';

export default connect(
  (state) => {
    return {
      text: state.profession.val,
      id: 'profession',
      label: state.profession.title,
      placeholder: 'Введите профессию',
      currentListItemId: state.profession.currentListItemId,
      error: state.profession.errorProfession
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        inputChange: setProfession,
        onKeyUP: prevProfession,
        onKeyDOWN: nextProfession,
        onKeyENTER: selectCurrentProfession,
        onKeyESC: cancelProfession,
        onBlur: cancelProfession,
        handleBlur: professionErrorOff,
      }, dispatch
    );
  }
)(TextInput);
