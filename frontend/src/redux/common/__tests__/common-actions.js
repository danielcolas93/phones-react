import * as actions from '../common-actions';
import * as types from '../common-types';

describe('common actions', () => {
  it('showModal', () => {
    const expectedAction = {
      type: types.SHOW_MODAL,
    };

    expect(actions.showModal()).toEqual(expectedAction);
  });

  it('hideModal', () => {
    const expectedAction = {
      type: types.HIDE_MODAL,
    };

    expect(actions.hideModal()).toEqual(expectedAction);
  });
});