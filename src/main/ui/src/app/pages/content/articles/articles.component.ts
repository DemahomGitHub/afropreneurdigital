import {ActivatedRoute, ActivationEnd, ActivationStart, NavigationEnd, Router} from '@angular/router';
import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ArticlesServices} from '../../../services/ArticlesServices';
import {Article} from '../../../model/Article';
import {Topics} from '../../../enums/ArticlesTopics';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AuthenticationServices} from '../../../services/AuthenticationServices';

interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../main-content/main-content.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  dateFilterCols: number;
  dateFilterRows: string;
  articlesGridListCols: number;
  articlesGridListRows: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articlesServices: ArticlesServices,
    private mobileDevicesObserver: BreakpointObserver,
    private authenticationServices: AuthenticationServices
  ) {
    mobileDevicesObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait])
      .subscribe(results => {
        if (results.matches) {
          this.dateFilterCols = 1;
          this.dateFilterRows = '4:1';
          this.articlesGridListCols = 1;
          this.articlesGridListRows = '9:10';
        } else {
          this.dateFilterCols = 3;
          this.dateFilterRows = '3:1';
          this.articlesGridListCols = 2;
          this.articlesGridListRows = '10:5';
        }
      });
    authenticationServices.switchToAdminConsole(false);
  }
  ngOnInit() {
    this.articles = this.articlesServices.findAll();
    this.articles = this.articlesServices.sortArticlesByDateDescending(this.articles);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.articles = this.articlesServices.filterResultsBasedOnURL(event.url);
      }
    });
  }
}
