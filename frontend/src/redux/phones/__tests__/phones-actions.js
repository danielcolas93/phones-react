import * as actions from '../phones-actions';
import * as types from '../phones-types';

describe('phones actions', () => {
  it('getPhonesStart', () => {
    const expectedAction = {
      type: types.GET_PHONES_START,
    };

    expect(actions.getPhonesStart()).toEqual(expectedAction);
  });

  it('getPhonesSuccess', () => {
    const phones = [{ id: 1, name: 'iPhone 7' }];
    const expectedAction = {
      type: types.GET_PHONES_SUCCESS,
      payload: phones,
    };

    expect(actions.getPhonesSuccess(phones)).toEqual(expectedAction);
  });

  it('getPhonesFail', () => {
    const error = { error: true };
    const expectedAction = {
      type: types.GET_PHONES_FAIL,
      payload: error,
    };

    expect(actions.getPhonesFail(error)).toEqual(expectedAction);
  });

  it('removeSelectedPhone', () => {
    const phone = { id: 1, name: 'iPhone 7' };
    const expectedAction = {
      type: types.SET_SELECTED_PHONE,
      payload: phone,
    };

    expect(actions.setSelectedPhone(phone)).toEqual(expectedAction);
  });

  it('removeSelectedPhone', () => {
    const expectedAction = {
      type: types.REMOVE_SELECTED_PHONE,
    };

    expect(actions.removeSelectedPhone()).toEqual(expectedAction);
  });
});