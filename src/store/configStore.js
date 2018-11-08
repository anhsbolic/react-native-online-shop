import { createStore, combineReducers } from 'redux';
import textReducer from './reducers/text';

const rootReducer = combineReducers({
  text: textReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;