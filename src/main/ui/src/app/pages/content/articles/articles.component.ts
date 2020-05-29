import {ActivatedRoute, ActivationEnd, ActivationStart, NavigationEnd, Router} from '@angular/router';
import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ArticlesServices} from '../../../services/ArticlesServices';
import {Article} from '../../../model/Article';
import {Topics} from '../../../enums/ArticlesTopics';

interface Filter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../main-content/main-content.component.css']
})
export class ArticlesComponent implements OnInit, DoCheck {
  ORDER_ASC = 'ASC';
  ORDER_DESC = 'DESC';
  articles: Article[];
  dateFilterControl = new FormControl();
  dateFilter: Filter[] = [
      {value: this.ORDER_DESC, viewValue: 'Les plus récents d\'abord'},
      {value: this.ORDER_ASC, viewValue: 'Les plus anciens d\'abord'}
  ];
  displayArticleDetails = false;
  articleDetails: Article;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articlesServices: ArticlesServices
  ) {}


  ngOnInit() {
    if (this.articles === undefined) {
      this.articles = this.articlesServices.findAll();
    }
    this.articles = this.articlesServices.sortArticlesByDateDescending();
  }

  ngDoCheck() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.articles = this.articlesServices.filterResultsBasedOnTopic(this.articlesServices.getTopicBasedOnUrl(event.url));
      }
    });
  }

  onFilterChange() {
    const selected = this.dateFilterControl.value;
    if (selected === this.ORDER_ASC) {
      this.articles = this.articlesServices.sortArticlesByDateAscending();
    }
    if (selected === this.ORDER_DESC) {
      this.articles = this.articlesServices.sortArticlesByDateDescending();
    }
  }

  onShowArticleDetails(id: number) {
    this.articleDetails = this.articlesServices.findArticleById(id);
    this.displayArticleDetails = !this.displayArticleDetails;
  }

  onNavigateBack() {
    this.displayArticleDetails = !this.displayArticleDetails;
    this.router
      .navigate(['/articles'])
      .then(value => {
        console.log('navigation succeed');
      })
      .catch(reason => {
        console.log('Something went wrong during the navigation. Reason [' + reason + ']');
      });
  }
}
