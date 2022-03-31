import { Role } from './role';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  isConfirmed: boolean;
  isBlocked: boolean;
  isAuthenticated: boolean;
  roles: Role[] | [];
}
