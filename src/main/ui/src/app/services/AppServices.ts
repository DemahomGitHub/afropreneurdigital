import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  private appMenuSubject = new Subject<any>();
  private mobileDevicesMenuSubject = new Subject<boolean>();

  getAppMenuObserver(): Observable<any> {
    return this.appMenuSubject.asObservable();
  }
  switchToAdminMenu(canSwitch: boolean) {
    this.appMenuSubject.next(canSwitch);
  }

  getMobileDevicesMenuObserver(): Observable<boolean> {
    return this.mobileDevicesMenuSubject.asObservable();
  }

  openMenuForMobileDevices(opened: boolean) {
    this.mobileDevicesMenuSubject.next(opened);
  }
}
