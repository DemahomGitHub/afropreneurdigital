import {Injectable} from '@angular/core';
import * as fromArticles from './articles.json';
import {Article} from '../model/Article';
import {Topics} from '../enums/ArticlesTopics';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlesServices {
  articles: Article[];
  private API_ARTICLE_URL = 'http://localhost:8080/api/v1/articles';

  constructor(private http: HttpClient) {}

  findAll() {
    if (this.articles !== null && this.articles !== undefined && this.articles.length > 0) {
      return this.articles;
    }
    this.articles = fromArticles[Object.keys(fromArticles).shift()] as Article[];
    /*this.http
        .get(this.API_ARTICLE_URL)
        .subscribe( response => {
          console.log('ok');
        }); */
    return this.articles;
  }
  sortArticlesByDateAscending(articles: Article[]) {
    articles = articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return da - db;
    });
    return articles;
  }

  sortArticlesByDateDescending(articles: Article[]) {
    articles = articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return db - da;
    });
    return articles;
  }

  filterResultsBasedOnURL(url: string) {
    if (url === '/articles') {
      this.articles = this.findAll();
    }
    if (url === '/articles/education') {
      this.articles = this.findAll().filter(a => a.topics.find(tpc => tpc.value === Topics.EDUCATION) !== undefined);
    }
    if (url === '/articles/healthcare') {
      this.articles = this.findAll().filter(a => a.topics.find(tpc => tpc.value === Topics.HEALTHCARE) !== undefined);
    }
    if (url === '/articles/fintech') {
      this.articles = this.findAll().filter(a => a.topics.find(tpc => tpc.value === Topics.FINTECH) !== undefined);
    }
    return this.articles;
  }

  findArticleById(id: number): Article {
    return this.findAll().find(article => article.id === id);
  }
}
