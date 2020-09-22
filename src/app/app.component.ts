import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'FES-ng';

  constructor(private router: Router) {}

  loggedIn(): any{
    return localStorage.getItem('loggedIn') === 'true';
  }

  noNavbar(): any{
    const url = this.router.url;
    if (url.search('login') > 0 || url.search('signup') > 0){
      return true;
    }
    return false;
  }
}
