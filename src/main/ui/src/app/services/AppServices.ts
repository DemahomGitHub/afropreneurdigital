import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  private openAdminConsoleSubject = new Subject<any>();
  private mobileDevicesMenuSubject = new Subject<boolean>();
  
  constructor(private mobileDeviceObserver: BreakpointObserver) {}

  getOpenAdminConsoleSubjectObserver(): Observable<any> {
    return this.openAdminConsoleSubject.asObservable();
  }
  enableAdminConsole(enable: boolean) {
    this.openAdminConsoleSubject.next(enable);
  }

  getMobileDevicesMenuObserver(): Observable<boolean> {
    return this.mobileDevicesMenuSubject.asObservable();
  }

  openMenuForMobileDevices(opened: boolean) {
    this.mobileDevicesMenuSubject.next(opened);
  }

  observerMobileDevices() {
    return this.mobileDeviceObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait]);
  }
}
