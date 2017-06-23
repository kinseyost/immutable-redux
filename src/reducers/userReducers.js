import { fromJS, Map } from 'immutable';
import * as types from 'constants/userConstants.js';

export default function userReducers(state = new Map(), action) {
  switch (action.type) {
    case types.FETCH_USERS:
      return state.set('users', fromJS(action.users));
    default:
      return state;
  }
}
