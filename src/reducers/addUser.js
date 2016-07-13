import { fromJS, Map } from 'immutable';
import * as types from 'constants/userConstants.js';

export default function userReducers(state = new Map(), { type, user }) {
   switch (type) {
    case types.ADD_USER:
      const id = state.get('users') && state.get('users').size || 0;
      return state.setIn(['users', id], fromJS(user));
    default:
      return state
  }
}
