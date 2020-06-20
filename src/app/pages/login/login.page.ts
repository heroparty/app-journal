import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  name: string;

  constructor(
    private router: Router,
    private user: UserService,
  ) { }

  assign(event) {
    this.name = event.target.value;
  }

  navigate() {
    this.user.create({ name: this.name });
    this.router.navigateByUrl('/list');
  }

}
