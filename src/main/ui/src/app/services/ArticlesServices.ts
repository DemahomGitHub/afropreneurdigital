import {Injectable} from '@angular/core';
import * as fromArticles from './articles.json';
import {Article} from '../model/Article';
import {Topics} from '../enums/ArticlesTopics';


@Injectable({
  providedIn: 'root'
})
export class ArticlesServices {
  articles: Article[];

  findAll() {
    this.articles = fromArticles[Object.keys(fromArticles).shift()] as Article[];
    return this.articles;
  }
  sortArticlesByDateAscending() {
    this.articles = this.articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return da - db;
    });
    return this.articles;
  }

  sortArticlesByDateDescending() {
    this.articles = this.articles.sort((a, b) => {
      const da = Date.parse(a.releaseDate);
      const db = Date.parse(b.releaseDate);
      return db - da;
    });
    return this.articles;
  }

  filterResultsBasedOnTopic(searchTopic: string) {
    if (searchTopic === Topics.ALL) {
      this.articles = this.findAll();
    } else {
      this.articles = this.findAll().filter(a => a.topics.find(tpc => tpc.value === searchTopic) !== undefined);
    }
    return this.articles;
  }

  getTopicBasedOnUrl(url: string): string {
    if (url.includes(Topics.EDUCATION)) {
      return Topics.EDUCATION;
    }
    if (url.includes(Topics.HEALTHCARE)) {
      return Topics.HEALTHCARE;
    }
    if (url.includes(Topics.FINTECH)) {
      return Topics.FINTECH;
    }
    return Topics.ALL;
  }

  findArticleById(id: number): Article {
    return this.findAll().find(article => article.id === id);
  }
}
