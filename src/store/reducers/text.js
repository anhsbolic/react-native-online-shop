import { UPDATE_TEXT } from '../actions/actions';

const initialState = {
  text: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        text: action.text
      };
  
    default:
      return state;
  }
};

export default reducer;