/**
 * Node modules
 */
import { IUser } from '@/types/user';
import { Schema, model } from 'mongoose';

/**
 * User schema
 */
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'Username is required'],
    maxLength: [20, 'Username must be less than 20 characters'],
    unique: [true, 'Username must be unique'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxLength: [50, 'Email must be less than 50 characters'],
    unique: [true, 'Email must be unique'],
  },
});
