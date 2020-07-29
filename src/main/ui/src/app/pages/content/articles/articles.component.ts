import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ArticlesServices} from '../../../services/ArticlesServices';
import {Article} from '../../../model/Article';
import {AuthenticationServices} from '../../../services/AuthenticationServices';
import {AppServices} from '../../../services/AppServices';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../main-content/main-content.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  cols: number;
  rowHeight: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articlesServices: ArticlesServices,
    private appServices: AppServices
  ) {
    appServices.observeWebLandscape().subscribe(res => {
      if (res.matches) {
        this.cols = 3;
        this.rowHeight = '1:1';
      }
    });
    appServices.observeTablet().subscribe(res => {
      if (res.matches) {
        this.cols = 2;
        this.rowHeight = '9:10';
      }
    });
    appServices.observePhone().subscribe(res => {
      if (res.matches) {
        this.cols = 1;
        this.rowHeight = '9:10';
      }
    });
  }
  ngOnInit(): void {
    if (this.articlesServices.getArticles() != null) {
      this.articles = this.articlesServices.getArticles();
    } else {
      this.articlesServices
        .findAll()
        .subscribe(resp => {
          console.log(resp);
          if (resp.status === 'OK') {
            console.log('OK');
            this.articles = resp.data;
            this.articles = this.articlesServices.sortArticlesByDateDescending(this.articles);
            this.articlesServices.setArticles(this.articles);
          } else {
            console.log(resp.message);
          }
        });
    }
  }
}
