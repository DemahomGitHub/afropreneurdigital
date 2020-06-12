import { Component, OnInit } from '@angular/core';
import {AuthenticationServices} from '../../services/AuthenticationServices';
import {User} from '../../model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  switchToAdminDashboard = false;
  user: User;
  constructor(private authenticationServices: AuthenticationServices) { }

  ngOnInit() {
    this.authenticationServices
      .getAuthServiceMessage()
      .subscribe(canSwitch => {
        this.switchToAdminDashboard = canSwitch;
        this.user = this.authenticationServices.findUser();
      });
  }

}
