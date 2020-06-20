import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { ArticleModel } from 'src/app/models/article.model';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  view: {
    articles: ArticleModel[],
    user: UserModel,
  };

  constructor(
    private router: Router,
    private user: UserService,
    private articles: ArticleService,
  ) { }

  ngOnInit() {

    this.articles.check();

    this.view = {
      articles: this.articles.all,
      user: this.user.selected,
    };

  }

}
