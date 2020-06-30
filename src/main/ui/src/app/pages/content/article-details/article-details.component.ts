import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ArticlesServices} from '../../../services/ArticlesServices';
import {Article} from '../../../model/Article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleDetails: Article;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesServices: ArticlesServices
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.articleDetails = this.articlesServices.findArticleById(+params.id);
    });
  }

}
