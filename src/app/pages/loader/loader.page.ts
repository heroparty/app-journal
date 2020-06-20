import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(
    private router: Router,
    private user: UserService,
  ) { }

  ngOnInit() {
    timer(3000).subscribe(() => this.check());
  }

  check() {
    if (this.user.exists()) {
      this.router.navigateByUrl('/list');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
