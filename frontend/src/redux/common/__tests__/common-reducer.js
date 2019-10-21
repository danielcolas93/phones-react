import reducer from '../common-reducer';
import * as types from '../common-types';

describe('common-reducers', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      isModalShown: false,
    });
  });

  it('should set isShownModal to true', () => {
    expect(reducer({}, {
      type: types.SHOW_MODAL,
    })).toEqual({ isModalShown: true });
  });

  it('should set isShownModal to false', () => {
    expect(reducer({}, {
      type: types.HIDE_MODAL,
    })).toEqual({ isModalShown: false });
  });
});