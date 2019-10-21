import { SHOW_MODAL, HIDE_MODAL } from './common-types';

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
