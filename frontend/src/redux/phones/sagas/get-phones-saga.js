import { call, put, delay } from 'redux-saga/effects';
import { getPhones } from '../../../utils/api';
import { getPhonesSuccess, getPhonesFail } from '../phones-actions';

export default function* get({ payload }) {
  try {
    if (payload && Object.keys(payload).length > 0) {
      yield delay(200);
    }
    const phones = yield call(getPhones, payload);
    yield put(getPhonesSuccess(phones.data));
  } catch (e) {
    yield put(getPhonesFail(e));
  }
}
