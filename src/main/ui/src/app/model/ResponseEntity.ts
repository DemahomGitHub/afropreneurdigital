import {User} from './User';

export interface ResponseEntity {
  status: string;
  data: User;
  message: string;
}
