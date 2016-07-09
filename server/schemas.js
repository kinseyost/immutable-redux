var mongoose = require('mongoose');

var userSchema = mongoose.schema({
  name: String,
  phone: String,
  email: String,
  street: String,
  City: String,
  State: String,
  Zip: Number
})
