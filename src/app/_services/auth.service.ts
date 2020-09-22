import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  menu = new BehaviorSubject<string>('closed');
  isOpen = this.menu.asObservable();
  navBtn = true;
  showBtnIndex = true;

  constructor() { }

  changeMenuState(): void{
    if ( this.menu.value === 'closed'){
      this.menu.next('opened');
    }
    else{
      this.menu.next('closed');
    }
    this.navBtn = !this.navBtn;
  }

  loggedIn(): any{
     const user = localStorage.getItem('loggedIn');
     return user !== '' ? true : false;
  }

  isAdmin(): any{
    const user = localStorage.getItem('loggedIn');
    return (user === 'admin') ? true : false;
  }

}