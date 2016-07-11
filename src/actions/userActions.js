export function addUser(user) {
  debugger;
  const { name, email, phone, street, city, state, zip } = user;
  return {
    type: 'createUser',
    email,
    phone,
    street,
    city,
    state,
    zip,
  };
}
