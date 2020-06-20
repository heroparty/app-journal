import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  name: string;

  constructor(private router: Router) { }

  assign(event) {
    this.name = event.target.value;
  }

  enter() {
    localStorage.setItem('user', JSON.stringify({
      name: this.name
    }));
    this.router.navigateByUrl('/list');
  }

}
