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

  setArticles(newArticles: Article[]): void {
    this.articles = newArticles;
  }

  getArticles(): Article[] {
    return this.articles;
  }
}
