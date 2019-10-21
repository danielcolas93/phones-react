import { call, put } from 'redux-saga/effects';
import { getPhones } from '../../../utils/api';
import { getPhonesSuccess, getPhonesFail } from '../phones-actions';

export default function* get() {
  try {
    const phones = yield call(getPhones);
    yield put(getPhonesSuccess(phones.data));
  } catch (e) {
    yield put(getPhonesFail(e));
  };
};
