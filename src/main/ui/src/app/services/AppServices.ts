import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  private appMenuSubject = new Subject<any>();

  getAppMenuObserver(): Observable<any> {
    return this.appMenuSubject.asObservable();
  }
  switchToAdminMenu(canSwitch: boolean) {
    this.appMenuSubject.next(canSwitch);
  }
}
