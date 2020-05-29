import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toolbarMenuOpened: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  onMenuToggle() {
    this.toolbarMenuOpened = !this.toolbarMenuOpened;
  }

}
