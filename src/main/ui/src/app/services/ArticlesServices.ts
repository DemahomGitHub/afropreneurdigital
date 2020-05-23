import {Injectable} from '@angular/core';
// @ts-ignore
import * as data from './articles.json';
import {Article} from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServices {
  articles: Article[];

  getAllArticles() {
    this.articles = data.default as Article[];
    return this.articles;
  }

}
