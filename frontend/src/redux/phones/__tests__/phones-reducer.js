import reducer from '../phones-reducer';
import * as types from '../phones-types';


describe('phones-reducers', () => {
  const initialState = {
    phones: [],
    selectedPhone: {},
    error: null,
    isLoading: false,
  };
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set isLoading=true and error=null', () => {
    expect(reducer(initialState, {
      type: types.GET_PHONES_START,
    })).toEqual({ ...initialState, isLoading: true, error: null });
  });

  it('should set phones, isLoading=false, error=null', () => {
    const phones = [{ id: 1, name: 'iPhone 7' }];

    expect(reducer(initialState, {
      type: types.GET_PHONES_SUCCESS,
      payload: phones,
    })).toEqual({ ...initialState, phones });
  });

  it('should set error and isLoading=false', () => {
    const error = { error: true };
    expect(reducer(initialState, {
      type: types.GET_PHONES_FAIL,
      payload: error,
    })).toEqual({ ...initialState, isLoading: false, error });
  });

  it('should set selectedPhone object', () => {
    const selectedPhone = { id: 1, name: 'iPhone 7' };
    expect(reducer(initialState, {
      type: types.SET_SELECTED_PHONE,
      payload: selectedPhone,
    })).toEqual({ ...initialState, selectedPhone });
  });

  it('should set selectedPhone={}', () => {
    expect(reducer(initialState, {
      type: types.REMOVE_SELECTED_PHONE,
    })).toEqual({ ...initialState, selectedPhone: {} });
  })
});