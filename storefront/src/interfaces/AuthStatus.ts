import {User} from './LoginResponse';

export interface AuthStatus {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  errorMessage: string;
  user: User | null;
}
