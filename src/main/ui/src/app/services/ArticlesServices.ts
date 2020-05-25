import {Injectable} from '@angular/core';
import * as fromArticles from './articles.json';
import {Article} from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServices {
  articles: Article[];

  getAllArticles() {
    this.articles = fromArticles[Object.keys(fromArticles).shift()] as Article[];
    return this.articles;
  }
  sortArticlesByDateAscending() {
    return this.articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return da - db;
    });
  }

  sortArticlesByDateDescending() {
    return this.articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return db - da;
    });
  }
}
