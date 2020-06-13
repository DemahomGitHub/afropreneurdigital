import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AuthenticationServices} from './services/AuthenticationServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  leftMenuOpened = true;
  constructor(
    private mobileDevicesObserver: BreakpointObserver
  ) {
    mobileDevicesObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait])
      .subscribe(result => {
        this.leftMenuOpened = !result.matches;
      });
  }

  ngOnInit() {}

}
