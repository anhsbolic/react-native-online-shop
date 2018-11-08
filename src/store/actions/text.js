import { UPDATE_TEXT } from './actions';

export const updateText = (text) => {
  return {
    type: UPDATE_TEXT,
    text: text
  };
};
