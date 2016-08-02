import { combineReducers } from 'redux-immutablejs';
import userInfo from './userReducers.js';
import components from './componentReducers.js';

export default combineReducers({
  userInfo,
  components,
});
