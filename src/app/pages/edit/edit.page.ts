import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { DateService } from 'src/app/services/date.service';
import { ArticleModel } from 'src/app/models/article.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  id: number;

  article: ArticleModel;

  edition: ArticleModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articles: ArticleService,
    private date: DateService,
    public alert: AlertController,
  ) {
    this.route.params.subscribe((params: any) => this.create(params));
  }

  create(params: any) {
    const id = parseInt(params.id, 10);
    const article = this.articles.find(id);
    this.article = { ...article };
    this.edition = { ...article };
    this.id = id;
  }

  async cancel() {
    const hasTitleAlterations = this.edition.title !== this.article.title;
    const hasDescriptionAlterations = this.edition.description !== this.article.description;
    if (hasTitleAlterations || hasDescriptionAlterations) {
      const alert = await this.alert.create({
        header: 'Cancelar?',
        message: 'Você deseja sair no meio da edição? <strong> Os dados não salvos serão perdidos.</strong>',
        buttons: [
          { text: 'Cancelar', handler: () => { } },
          { text: 'Sair', handler: () => { this.router.navigateByUrl('/list'); } }
        ]
      });
      await alert.present();
    } else {
      this.router.navigateByUrl('/list');
    }
  }

  save() {
    const article = this.edition;
    this.articles.update(article.id, article.title, article.description);
    this.router.navigateByUrl('/list');
  }

  getDate(timestamp: number) {
    return this.date.convertTimeToView(timestamp, 'DD/MM/YYYY');
  }

  getHour(timestamp: number) {
    return this.date.convertTimeToView(timestamp, 'h:mm:ss a');
  }

}
