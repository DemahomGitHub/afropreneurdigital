import {Injectable} from '@angular/core';
import {Article} from '../model/Article';
import {HttpClient} from '@angular/common/http';
import {ResponseEntity} from '../model/ResponseEntity';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesServices {
  articles: Article[];
  private API_ARTICLE_URL = 'http://localhost:8080/api/v1/articles';

  constructor(private http: HttpClient) {}

  findAll(): Observable<ResponseEntity> {
    /*
    if (this.articles !== null && this.articles !== undefined && this.articles.length > 0) {
      return this.articles;
    }
    this.articles = fromArticles[Object.keys(fromArticles).shift()] as Article[];*/
    return this.http.get<ResponseEntity>(this.API_ARTICLE_URL);
  }

  sortArticlesByDateAscending(articles: Article[]): Article[] {
    articles = articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return da - db;
    });
    return articles;
  }

  sortArticlesByDateDescending(articles: Article[]): Article[] {
    articles = articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return db - da;
    });
    return articles;
  }

  findArticleById(id: number): Article {
    return this.articles.find(article => article.id === id);
  }
}
