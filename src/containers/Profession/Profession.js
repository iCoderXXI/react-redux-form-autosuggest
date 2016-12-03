import { connect } from 'react-redux';

import ProfessionInput from '../../components/ProfessionInput';

export default connect(
  (store) => {
    return {
      listShow: store.profession.listShow,
    };
  }
)(ProfessionInput);
