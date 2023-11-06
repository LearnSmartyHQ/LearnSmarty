import type { IUserRole } from './user-role-interface';

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: IUserRole;
  createdAt: Date;
  updatedAt?: Date;
}
