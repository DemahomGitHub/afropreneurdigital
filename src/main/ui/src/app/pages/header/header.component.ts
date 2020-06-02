import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AppServices} from '../../services/AppServices';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toolbarMenuOpened: boolean;
  switchToAdminMenu: boolean;

  constructor(private router: Router, private appServices: AppServices) {
    appServices
      .getAppMenuObserver()
      .subscribe(canSwitch => {
        this.switchToAdminMenu = canSwitch;
      });
  }

  ngOnInit() {}

  onMenuToggle() {
    this.toolbarMenuOpened = !this.toolbarMenuOpened;
  }

}
