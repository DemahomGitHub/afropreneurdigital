import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticlesServices} from '../../../services/ArticlesServices';
import {Article} from '../../../model/Article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleDetails: Article;
  articles: Article[];
  articleId: number;
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesServices: ArticlesServices
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.articleId = +params.id;
    });

    if (!this.articlesServices.hasArticles()) {
      this.articlesServices.findAll().subscribe(resp => {
        if (resp.status === 'OK') {
          this.articles = resp.data;
          this.articles = this.articlesServices.sortArticlesByDateDescending(this.articles);
          this.articlesServices.setArticles(this.articles);
        }
        this.setArticleDetails();
      });
    } else {
      this.setArticleDetails();
    }
  }

  setArticleDetails(): void {
    if (this.articleId) {
      this.articleDetails = this.articlesServices.findArticleById(this.articleId);
      this.loading = false;
    }
  }

}
