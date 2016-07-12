import { fromJS, Map } from 'immutable';
import * as types from 'constants/userConstants.js';

export function userReducers(state = new Map(), { type, user }) {
  switch (action.type) {
    case types.ADD_USER:
      debugger;
      const id = state.get('users').size;
      return state.set('users', id, fromJS(user));
    default:
      return state
  }
}
