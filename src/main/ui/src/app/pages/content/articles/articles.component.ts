import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ArticlesServices} from '../../../services/ArticlesServices';
import {Article} from '../../../model/Article';

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
  dateFilterControl = new FormControl();
  dateFilter: Filter[] = [
      {value: 'bulbasaur-0', viewValue: 'Les plus récents d\'abord'},
      {value: 'oddish-1', viewValue: 'Les plus anciens d\'abord'}
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesServices: ArticlesServices
  ) {
  }

  ngOnInit() {
    this.articles = this.articlesServices.getAllArticles();
  }

}
