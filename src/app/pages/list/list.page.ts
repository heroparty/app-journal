import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { ViewModel } from 'src/app/models/view.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  view: ViewModel = { articles: [], user: { name: '' } };

  constructor(
    private router: Router,
    private user: UserService,
    private articles: ArticleService,
  ) { }

  ionViewDidEnter() {
    this.load();
  }

  load() {
    this.articles.check();
    this.view = {
      articles: this.articles.all,
      user: this.user.selected,
    };
  }

  create() {
    this.router.navigateByUrl('/create');
  }

}
