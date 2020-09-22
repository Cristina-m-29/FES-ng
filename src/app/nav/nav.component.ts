import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  isOpen = false;
  cartBadge = 0;
  favBadge = 0;

  constructor( public authService: AuthService ) { }

  ngOnInit(): any{
  }

  changeMenuState(): void{
    this.isOpen = !this.isOpen;
    this.authService.changeMenuState();
  }

  loggedIn(): any{
    return this.authService.loggedIn();
  }

}