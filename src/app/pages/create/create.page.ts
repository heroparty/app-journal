import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  title: string;

  description: string;

  constructor(
    private router: Router,
    private article: ArticleService,
    public alert: AlertController
  ) { }

  async cancel() {
    const title = this.title;
    const description = this.description;
    if (title || description) {
      const alert = await this.alert.create({
        header: 'Sair?',
        message: 'Você deseja sair no meio da edição? <strong> Os dados atuais serão perdidos.</strong>',
        buttons: [
          { text: 'Cancelar', handler: (blah) => { } },
          { text: 'Sair', handler: () => { this.router.navigateByUrl('/list'); } }
        ]
      });
      await alert.present();
    } else {
      this.router.navigateByUrl('/list');
    }
  }

  save() {
    const title = this.title;
    const description = this.description;
    const timestamp = new Date().getTime();
    this.article.create({ title, description, timestamp });
    this.router.navigateByUrl('/list');
  }

}
