import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { ViewModel } from 'src/app/models/view.model';
import { DateService } from 'src/app/services/date.service';
import { ViewDialogPage } from 'src/app/shared/dialogs/view-dialog/view-dialog.page';
import { ModalController } from '@ionic/angular';
import { ArticleModel } from 'src/app/models/article.model';

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
    private date: DateService,
    private modal: ModalController,
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

  async open(article: ArticleModel) {
    const modal = await this.modal.create({
      component: ViewDialogPage,
      componentProps: { article },
      animated: true,
    });
    await modal.present();
    await modal.onWillDismiss();
    this.load();
  }

  convertDate(timestamp: number) {
    return this.date.convertTimeToView(timestamp);
  }

}
