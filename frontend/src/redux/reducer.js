import { combineReducers } from 'redux';
import { reducer as common } from './common';
import { reducer as phones } from './phones';

export default combineReducers({
  common,
  phones,
});