import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  colors: string[] = ['#000000', '#F1C40F', '#922B21', '#283747'];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  selectedColor = 'not selected';
  selectedSize = 'not selected';
  alert: boolean;
  added: string;

  constructor(private authService: AuthService) {
    if (this.authService.menu.value === 'opened'){
      this.authService.changeMenuState();
    }
  }

  ngOnInit(): any {

  }

  addToFavorites(): any{
    if (this.selectedColor === 'not selected' || this.selectedSize === 'not selected'){
      this.alert = true;
    }
    else{
      (async () => {
        this.added = 'favorites';
        await this.delay(1500);
        this.added = '';
      })();
    }
  }

  addToCart(): any{
    if (this.selectedColor === 'not selected' || this.selectedSize === 'not selected'){
      this.alert = true;
    }
    else{
      (async () => {
        this.added = 'cart';
        await this.delay(1500);
        this.added = '';
      })();
    }
  }

  delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
