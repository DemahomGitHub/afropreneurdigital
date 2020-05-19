import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<null>();
  @Input() menuOpened: boolean;

  constructor() {}

  ngOnInit() {
  }

  onMenuToggle() {
    console.log(this.menuOpened);
    this.menuToggle.emit();
  }
}
