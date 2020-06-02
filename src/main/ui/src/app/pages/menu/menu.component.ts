import { Component, OnInit } from '@angular/core';
import {AuthenticationServices} from '../../services/AuthenticationServices';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  switchToAdminDashboard = false;
  constructor(private authenticationServices: AuthenticationServices) { }

  ngOnInit() {
    this.authenticationServices
      .getAuthServiceMessage()
      .subscribe(canSwitch => {
        this.switchToAdminDashboard = canSwitch;
      });
  }

}
