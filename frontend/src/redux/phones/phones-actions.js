import {
  GET_PHONES_FAIL,
  GET_PHONES_START,
  GET_PHONES_SUCCESS,
  SET_SELECTED_PHONE,
  REMOVE_SELECTED_PHONE,
} from './phones-types';

export const getPhonesStart = () => ({
  type: GET_PHONES_START,
});

export const getPhonesSuccess = payload => ({
  type: GET_PHONES_SUCCESS,
  payload,
});

export const getPhonesFail = payload => ({
  type: GET_PHONES_FAIL,
  payload,
});

export const setSelectedPhone = payload => ({
  type: SET_SELECTED_PHONE,
  payload,
});

export const removeSelectedPhone = () => ({
  type: REMOVE_SELECTED_PHONE,
});
