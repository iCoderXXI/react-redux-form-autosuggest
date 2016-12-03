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
  (store) => {
    return {
      text: store.profession.val,
      id: 'profession',
      label: 'Профессия',
      placeholder: 'Введите профессию',
      currentListItemId: store.profession.currentListItemId
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

// export default ProfessionFld;
