/**
 * Node modules
 */
import { Document } from 'mongoose';

/**
 * Types
 */
import { IBaseDocument } from './index';

export interface IUser extends IBaseDocument {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  firstName?: string;
  lastName?: string;
  socialLinks?: {
    website?: string;
    facebook?: string;
    instagram?: string;
    x?: string;
    youtube?: string;
  };
}
