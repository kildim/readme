import { User } from './user.interface';

export interface UserAuth extends User {
  passwordHash: string;
}
