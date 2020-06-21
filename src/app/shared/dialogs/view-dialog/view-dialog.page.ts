import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleModel } from 'src/app/models/article.model';
import { ViewModel } from 'src/app/models/view.model';
import { UserModel } from 'src/app/models/user.model';
import { DateService } from 'src/app/services/date.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.page.html',
  styleUrls: ['./view-dialog.page.scss'],
})
export class ViewDialogPage {

  @Input() article: ArticleModel;

  @Input() user: UserModel;

  constructor(
    private router: Router,
    private modal: ModalController,
    private articles: ArticleService,
    private date: DateService,
  ) { }

  edit() {
    const article = this.article;
    const id = article.id;
    this.router.navigateByUrl(`/edit/${id}`);
    this.dismiss();
  }

  delete() {
    const article = this.article;
    const id = article.id;
    this.articles.delete(id);
    this.dismiss();
  }

  dismiss() {
    this.modal.dismiss();
  }

  getDate(timestamp: number) {
    return this.date.convertTimeToView(timestamp, 'DD/MM/YYYY');
  }

  getHour(timestamp: number) {
    return this.date.convertTimeToView(timestamp, 'h:mm:ss a');
  }

}
