import mongoose from 'mongoose';

export const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  street: String,
  City: String,
  State: String,
  Zip: Number,
});
