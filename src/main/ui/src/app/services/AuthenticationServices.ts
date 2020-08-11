import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ResponseEntity} from '../model/ResponseEntity';
import {CookieService} from 'ngx-cookie-service';
import {CookieName} from '../model/CookieName';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServices {
  private admin: User;
  private authServiceMessage = new Subject<any>();
  private loggedIn = false;
  private BASE_URL = 'http://localhost:8080/api/v1/authors/';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(login: string, password: string): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>(this.BASE_URL + login + '/' + password);
  }

  logout() {
    this.loggedIn = false;
    this.admin = null;

    if (this.cookieService.check(CookieName.ID)) {
      this.cookieService.delete(CookieName.ID);
      this.cookieService.delete(CookieName.LOGIN);
      this.cookieService.delete(CookieName.PASSWORD);
      this.cookieService.delete(CookieName.FULL_NAME);
      this.cookieService.delete(CookieName.DESCRIPTION);
    }
  }

  getAdmin(): User {
    if (this.connected()) {
      return this.admin;
    }
    return null;
  }
  switchToAdminConsole(canSwitch: boolean) {
    this.authServiceMessage.next(canSwitch);
  }

  getAuthServiceMessage(): Observable<any> {
    return this.authServiceMessage.asObservable();
  }

  connected(): boolean {
    return this.getUserSession() != null;
  }
  saveUserSession(data: User): void {
    const expiresIn = 1;
    this.cookieService.set(CookieName.ID, String(data.id), expiresIn, '/admin', 'localhost', false, 'Strict');
    this.cookieService.set(CookieName.LOGIN, data.login, expiresIn, '/admin', 'localhost', false, 'Strict');
    this.cookieService.set(CookieName.FULL_NAME, data.fullName, expiresIn, '/admin', 'localhost', false, 'Strict');
    this.cookieService.set(CookieName.DESCRIPTION, data.description, expiresIn, '/admin', 'localhost', false, 'Strict');
    this.admin = data;
  }

  getUserSession(): User {
    if (this.cookieService.check(CookieName.ID)) {
      this.admin = {
        id : +this.cookieService.get(CookieName.ID),
        login : this.cookieService.get(CookieName.LOGIN),
        password : '',
        fullName : this.cookieService.get(CookieName.FULL_NAME),
        description : this.cookieService.get(CookieName.DESCRIPTION),
      };
      return this.admin;
    }
    return null;
  }
}
