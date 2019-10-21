import {
  GET_PHONES_FAIL,
  GET_PHONES_START,
  GET_PHONES_SUCCESS,
  SET_SELECTED_PHONE,
  REMOVE_SELECTED_PHONE,
} from './phones-types';

const initialState = {
  phones: [],
  selectedPhone: {},
  error: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        phones: action.payload,
        isLoading: false,
        error: null
      };
    case GET_PHONES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_SELECTED_PHONE:
      return {
        ...state,
        selectedPhone: action.payload,
      };
    case REMOVE_SELECTED_PHONE:
    return {
      ...state,
      selectedPhone: {},
    };
    default:
      return state;
  };
};
