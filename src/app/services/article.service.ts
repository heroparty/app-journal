import { Injectable } from '@angular/core';
import { ArticleModel } from '../models/article.model';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private date: DateService,
  ) { }

  public check(): void {
    const articles = localStorage.getItem('articles');
    const key = localStorage.getItem('key');
    if (!articles) {
      localStorage.setItem('articles', JSON.stringify([]));
    }
    if (!key) {
      localStorage.setItem('key', JSON.stringify({ current: 1 }));
    }
  }

  public create(title: string, description: string): void {
    this.update(this.uniqueId(), title, description);
  }

  public find(id: number): ArticleModel | null {
    const articles = this.all;
    const ids = articles.map(at => at.id);
    const index = ids.indexOf(id);
    const exists = index !== -1;
    if (exists) {
      return articles[index];
    } else {
      return null;
    }
  }

  public update(id: number, title: string, description: string): void {
    const timestamp = this.date.convertDateToTime(new Date());
    const articles = this.all;
    const ids = articles.map(at => at.id);
    const index = ids.indexOf(id);
    const exists = index !== -1;
    if (exists) {
      articles.splice(index, 1);
    }
    articles.push({ title, description, id, timestamp });
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

  private uniqueId(): number {
    const key = JSON.parse(localStorage.getItem('key'));
    const currentId = parseInt(key.current, 10);
    const nextId = (currentId + 1);
    const newCurrent = JSON.stringify({ current: nextId });
    localStorage.setItem('key', newCurrent);
    return currentId;
  }

  private save(articles: ArticleModel[]): void {
    localStorage.setItem('articles', JSON.stringify(articles));
  }

}
