import mongoose from 'mongoose';

export const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  attending: Boolean,
});
