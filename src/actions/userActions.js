import * as types from 'constants/userConstants.js';

export function addUser(user) {
  return {
    type: types.ADD_USER,
    user,
    io: true,
  };
}

export function fetchUsers() {
  return {
    type: types.FETCH_USERS,
    io: true,
  };
}
