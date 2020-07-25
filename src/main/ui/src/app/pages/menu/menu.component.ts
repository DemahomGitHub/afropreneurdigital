import { Component, OnInit } from '@angular/core';
import {AuthenticationServices} from '../../services/AuthenticationServices';
import {User} from '../../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  switchToAdminDashboard = false;
  user: User;
  constructor(
    private authenticationServices: AuthenticationServices,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationServices
      .getAuthServiceMessage()
      .subscribe(canSwitch => {
        this.switchToAdminDashboard = canSwitch;
        this.user = this.authenticationServices.getAdmin();
      });
  }

  onDisconnect() {
    this.authenticationServices.disconnect();
    this.router.navigate(['/admin']).then(r => console.log(r));
  }

}
