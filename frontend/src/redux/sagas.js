import { takeLatest, all } from 'redux-saga/effects';

import * as phoneTypes from './phones/phones-types';

import getPhones from './phones/sagas/get-phones-saga';

export default function* rootSaga() {
  yield all([
    takeLatest(phoneTypes.GET_PHONES_START, getPhones),
  ]);
};