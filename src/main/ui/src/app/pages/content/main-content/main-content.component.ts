import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() menuOpened: boolean;
  smallScreen = false;
  constructor(private mobileDeviceObserver: BreakpointObserver) {}

  ngOnInit() {
    this.mobileDeviceObserver
      .observe([Breakpoints.Handset, Breakpoints.WebPortrait, Breakpoints.TabletPortrait])
      .subscribe(res => {
        this.smallScreen = res.matches;
      });
  }
}
