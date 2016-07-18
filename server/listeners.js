import { UserModel } from './models.js';

export function ADD_USER(action) {
  const user = action.user;
  const newUser = new UserModel(user);
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('saved user', user);
    }
  });
  return action;
}

export async function FETCH_USERS(action) {
  await UserModel.find((err, allUsers) => {
    if (err) {
      return console.error(err);
    }
    action.users = allUsers;
  });
  return action;
}
