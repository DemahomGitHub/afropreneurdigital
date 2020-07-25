import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  private openAdminConsoleSubject = new Subject<any>();
  private mobileDevicesMenuSubject = new Subject<boolean>();

  constructor(
    private mobileDeviceObserver: BreakpointObserver,
    private phoneObserver: BreakpointObserver,
    private tabletObserver: BreakpointObserver,
    private webLandscapeObserver: BreakpointObserver) {}

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

  observeMobileDevices() {
    return this.mobileDeviceObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait]);
  }

  observePhone() {
    return this.phoneObserver.observe([Breakpoints.Handset]);
  }

  observeTablet() {
    return this.tabletObserver.observe([Breakpoints.Tablet, Breakpoints.WebPortrait]);
  }

  observeWebLandscape() {
    return this.webLandscapeObserver.observe([Breakpoints.WebLandscape]);
  }
}
