import { SHOW_MODAL, HIDE_MODAL } from './common-types';

const initialState = {
  isModalShown: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalShown: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModalShown: false,
      };
    default:
      return state;
  }
};
