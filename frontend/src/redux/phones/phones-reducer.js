import {
  GET_PHONES_FAIL,
  GET_PHONES_START,
  GET_PHONES_SUCCESS,
  GET_PHONE_DETAILS,
  REMOVE_PHONE_DETAILS,
} from './phones-types';

const initialState = {
  phones: [],
  selectedPhone: {},
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        phones: action.payload,
        loading: false,
        error: null
      };
    case GET_PHONES_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload
      };
    case GET_PHONE_DETAILS:
      return {
        ...state,
        phone: action.payload,
      };
    case REMOVE_PHONE_DETAILS:
    return {
      ...state,
      phone: {},
    };
    default:
      return state;
  }
};
