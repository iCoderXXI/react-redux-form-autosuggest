import initialState from '../data/initialState';

const validateForm = (state) => {
  console.log(state);
}

export default (state=initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM':
        validateForm(state);
        return state

      default:
        return state;
    }

}
