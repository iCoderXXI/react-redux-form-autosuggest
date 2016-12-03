import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectProfession } from '../../actions/professionActions';

import ProfessionsList from '../../components/ProfessionsList';

export default connect(
  (store) => {
    // console.log('Store: ',store.profession);
    return {
      list: store.profession.list,
      text: store.profession.val,
      currentListItemId: store.profession.currentListItemId
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        selectProfession: selectProfession,
      }, dispatch
    );
  }
)(ProfessionsList);

// export default ProfessionsSuggest;
