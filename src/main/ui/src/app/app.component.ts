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
  constructor(
    private mobileDevicesObserver: BreakpointObserver,
    private appServices: AppServices
  ) {
    mobileDevicesObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait])
      .subscribe(res => {
        console.log('ok');
      });
  }

  ngOnInit() {
    this.appServices
        .getMobileDevicesMenuObserver()
        .subscribe(opened => {
            this.leftMenuOpened = opened;
        });
  }

  onMenuClosed() {
    this.leftMenuOpened = !this.leftMenuOpened;
  }

}
