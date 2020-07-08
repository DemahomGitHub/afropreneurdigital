import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AppServices} from '../../services/AppServices';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toolbarMenuOpened = undefined;
  smallScreen = false;
  @Input() mobileDeviceMenuOpened = false;
  constructor(private router: Router, private appServices: AppServices) {
    appServices.observerMobileDevices().subscribe(res => this.smallScreen = res.matches);
  }

  ngOnInit() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.toolbarMenuOpened = false;
      }
    });
  }

  onMenuToggle() {
    this.mobileDeviceMenuOpened = !this.mobileDeviceMenuOpened;
    this.appServices.openMenuForMobileDevices(this.mobileDeviceMenuOpened);
  }

}
