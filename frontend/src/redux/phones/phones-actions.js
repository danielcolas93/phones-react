import {
  GET_PHONES_FAIL,
  GET_PHONES_START,
  GET_PHONES_SUCCESS,
  GET_PHONE_DETAILS,
  REMOVE_PHONE_DETAILS,
} from './phones-types';

export const getPhonesStart = payload => ({
  type: GET_PHONES_START,
  payload,
});

export const getPhonesSuccess = payload => ({
  type: GET_PHONES_SUCCESS,
  payload,
});

export const getPhonesFail = payload => ({
  type: GET_PHONES_FAIL,
  payload,
});

export const getPhoneDetails = payload => ({
  type: GET_PHONE_DETAILS,
  payload,
});

export const removePhoneDetails = payload => ({
  type: REMOVE_PHONE_DETAILS,
  payload,
});
