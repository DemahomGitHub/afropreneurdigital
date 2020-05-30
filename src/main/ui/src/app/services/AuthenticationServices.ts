import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServices {
  login() {
    console.log('Logged In');
  }
}
