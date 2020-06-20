import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public exists(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  public create(user: UserModel): void {
    localStorage.setItem('user',
      JSON.stringify(user)
    );
  }

  public get selected(): UserModel {
    return JSON.parse(localStorage.getItem('user'));
  }

  public get name(): string {
    return this.selected.name;
  }

}
