import {Injectable} from '@angular/core';
import * as fromUsers from './user.json';
import {User} from '../model/User';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServices {
  private admin: User;
  private result = {ok: false, code: '', message: ''};
  private authServiceMessage = new Subject<any>();
  private loggedIn = false;

  login(login: string, password: string): {ok: boolean, code: string, message: string} {
    const user = this.findUser();

    if (user.login !== login) {
      this.result = {
        ok: false,
        code: 'INCORRECT_LOGIN',
        message: 'Login incorrect. Veuillez réssayer'
      };
    } else if (user.password !== password) {
      this.result = {
        ok: false,
        code: 'INCORRECT_PASSWORD',
        message: 'Mot de passe incorrect. Veuillez réssayer'
      };
    } else {
      this.result = {
        ok: true,
        code: 'CONNECTION_SUCCEED',
        message: 'Connexion réussie !'
      };
      this.loggedIn = true;
    }
    return this.result;
  }

  findUser(): User {
    if (this.admin === undefined || this.admin === null) {
      this.admin = fromUsers[Object.keys(fromUsers).shift()].shift() as User;
    }
    return this.admin;
  }

  switchToAdminConsole(canSwitch: boolean) {
    this.authServiceMessage.next(canSwitch);
  }

  getAuthServiceMessage(): Observable<any> {
    return this.authServiceMessage.asObservable();
  }

  connected(): boolean {
    return this.loggedIn;
  }

  disconnect() {
    this.loggedIn = false;
    this.admin = null;
    this.result = null;
    this.switchToAdminConsole(false);
  }
}
