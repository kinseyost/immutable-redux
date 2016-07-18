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
