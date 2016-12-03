import { connect } from 'react-redux';

import TextInput from '../components/TextInput';

export default connect(
  (store) => {
    return {
      listShow: store.phone.listShow,
    };
  }
)(TextInput);
