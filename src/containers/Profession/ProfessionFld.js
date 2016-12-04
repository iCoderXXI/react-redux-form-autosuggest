import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setProfession,
  prevProfession,
  nextProfession,
  selectCurrentProfession,
  cancelProfession
} from '../../actions/professionActions';

import TextInput from '../../components/TextInput';

export default connect(
  (state) => {
    return {
      text: state.profession.val,
      id: 'profession',
      label: state.profession.title,
      placeholder: 'Введите профессию',
      currentListItemId: state.profession.currentListItemId
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
      }, dispatch
    );
  }
)(TextInput);
