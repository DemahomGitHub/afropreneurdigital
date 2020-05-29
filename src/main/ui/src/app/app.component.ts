import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leftMenuOpened = true;
  constructor(mobileDevicesObserver: BreakpointObserver) {
    mobileDevicesObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait])
      .subscribe(result => {
        this.leftMenuOpened = !result.matches;
      });
  }
}
