import {Component, OnInit} from '@angular/core';
import {AuthenticationServices} from './services/AuthenticationServices';
import {AppServices} from './services/AppServices';
import {User} from './model/User';
import {Router} from '@angular/router';

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
    private authenticationServices: AuthenticationServices,
    private router: Router
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
          }
        });
  }

  onMenuClosed() {
    this.leftMenuOpened = !this.leftMenuOpened;
  }

  onDisconnect() {
    console.log('Disconnecting from the admin');
    this.authenticationServices.logout();
    if (!this.authenticationServices.connected()) {
      this.router
        .navigate(['/admin/login'])
        .then(ok => {
          this.appServices.enableAdminConsole(false);
          console.log('Admin console closed', ok);
        })
        .catch(err => {
          console.log('Something went wrong while trying to close the admin console');
          console.log('Error message: ', err);
        });
    }
  }
}
