import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    timer(3000).subscribe(() => {
      const user = localStorage.getItem('user');
      if (user) {
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

}
