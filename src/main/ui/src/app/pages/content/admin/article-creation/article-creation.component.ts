import { Component, OnInit } from '@angular/core';
import {AuthenticationServices} from '../../../../services/AuthenticationServices';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  constructor(private authenticationServices: AuthenticationServices) { }

  ngOnInit() {
    this.authenticationServices.switchToAdminConsole(true);
  }

}
