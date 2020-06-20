import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public exists(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  public create({ name }): void {
    localStorage.setItem('user',
      JSON.stringify({ name })
    );
  }

  public get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  public get name(): string {
    return this.user.name;
  }

}
