import mongoose from 'mongoose';
import { userSchema } from './schemas';

export const userModel = mongoose.model('user', userSchema);
