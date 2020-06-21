import { Injectable } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public check(): void {
    const articles = localStorage.getItem('articles');
    if (!articles) {
      localStorage.setItem('articles', JSON.stringify([]));
    }
  }

  public create(article: ArticleModel): void {
    const articles = this.all;
    const id = (articles.length + 1);
    articles.push({ ...article, id });
    this.save(articles);
  }

  public delete(id: number): void {
    const articles = this.all;
    const ids = articles.map(at => at.id);
    const index = ids.indexOf(id);
    const exists = index !== -1;
    if (exists) {
      articles.splice(index, 1);
      this.save(articles);
    }
  }

  public get all(): ArticleModel[] {
    return JSON.parse(localStorage.getItem('articles'));
  }

  private save(articles: ArticleModel[]): void {
    localStorage.setItem('articles', JSON.stringify(articles));
  }

}
