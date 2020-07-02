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
  constructor(private appServices: AppServices) {}

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
