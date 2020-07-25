import {Component, OnInit} from '@angular/core';
import {AuthenticationServices} from './services/AuthenticationServices';
import {AppServices} from './services/AppServices';
import {User} from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  leftMenuOpened = false;
  isAdminConsole = false;
  admin: User;

  constructor(
    private appServices: AppServices,
    private authenticationServices: AuthenticationServices
  ) {}

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
          this.admin = this.authenticationServices.getAdmin();
          if (opened) {
            console.log('Admin Console Opened');
          } else {
            console.log('Admin Console Closed');
          }
        });
  }

  onMenuClosed() {
    this.leftMenuOpened = !this.leftMenuOpened;
  }

  onDisconnect() {
    this.authenticationServices.disconnect();
  }
}
