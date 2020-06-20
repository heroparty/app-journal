import { Injectable } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  check(): void {
    const articles = localStorage.getItem('articles');
    if (!articles) {
      localStorage.setItem('articles', JSON.stringify([]));
    }
  }

  create(article: ArticleModel): void {

  }

  get all(): ArticleModel[] {
    return [];
  }

}
