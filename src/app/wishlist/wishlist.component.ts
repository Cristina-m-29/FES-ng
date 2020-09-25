import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {
  products = [0, 1, 2, 3, 4, 5];

  constructor(private authService: AuthService) {
    if (this.authService.menu.value === 'opened'){
      this.authService.changeMenuState();
    }
  }

  ngOnInit(): any {
  }

}
 