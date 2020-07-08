import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AuthenticationServices} from './services/AuthenticationServices';
import {AppServices} from './services/AppServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  leftMenuOpened = false;
  isAdminConsole = false;

  constructor(private appServices: AppServices) {}

  ngOnInit() {
    this.appServices
        .getMobileDevicesMenuObserver()
        .subscribe(opened => {
            this.leftMenuOpened = opened;
        });
    this.appServices
        .getOpenAdminConsoleSubjectObserver()
        .subscribe(opened => {
          this.isAdminConsole = opened;
          if (this.isAdminConsole) {
            console.log('Admin Console Opened');
          }
        });
  }

  onMenuClosed() {
    this.leftMenuOpened = !this.leftMenuOpened;
  }

  onDisconnect() {}
}
