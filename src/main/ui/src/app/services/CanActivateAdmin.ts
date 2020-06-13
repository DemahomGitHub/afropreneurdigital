import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthenticationServices} from './AuthenticationServices';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdmin implements CanActivate {
  constructor(private authenticationServices: AuthenticationServices) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.authenticationServices.connected());
    return this.authenticationServices.connected();
  }
}
