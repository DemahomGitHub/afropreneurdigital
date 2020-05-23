import {Injectable} from '@angular/core';


interface ArticlesDetails {
  title: string;
  releaseDate: string;
  author: string;
  topic: string[];
  content: string;
}


@Injectable({
  providedIn: 'root'
})
export class ArticlesServices {
  articles: ArticlesDetails[];

  getAllArticles() {

  }

}
