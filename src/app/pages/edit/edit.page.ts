import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private articles: ArticleService,
    private date: DateService,
  ) {
    this.route.params.subscribe((params: any) => this.id = params.id);
  }

  ngOnInit() {

    console.log(this.id);

  }

}
