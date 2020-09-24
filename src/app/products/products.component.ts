import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{
  category: string;
  typeSelected: string;
  range: string;
  size: string;
  hasType: boolean;
  cover: string;
  overlay = 0;
  overlayState = 'main';

  // categories and types
  categories: string[] = ['most bought', 'most viewed', 'women', 'men'];
  womentypes: string[] = ['dresses', 't-shirts', 'jeans'];
  mentypes: string[] = ['t-shirts', 'jackets', 'jeans'];

  // price ranges and sizes
  ranges: string[] = ['0 - 100', '100 - 200', '200 - 300', '300 - 400'];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  colors: string[] = ['#000000', '#F1C40F', '#922B21', '#283747'];

  // paginator options
  length: number;
  itemsPerRow =  4;
  pageIndex: number;
  pageSizeOptions: number[] = [3, 4];
  pageEvent: PageEvent;

  // products list
  products: string[] = ['1', '2', '3', '4', '5'];

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.route.queryParams.subscribe( params => {
      this.category = params.category;
      if (typeof(params.type) !== 'undefined'){
        this.typeSelected = params.type;
        this.hasType = true;
      }
      else{
        this.typeSelected = '';
        this.hasType = false;
      }
      if (this.authService.menu.value === 'opened'){
        this.authService.changeMenuState();
      }
      console.log('change');
    });
   }

  ngOnInit(): any {
    this.length = this.products.length;
  }

  show(): any{
    if (this.hasType || this.category === 'most bought' || this.category === 'most viewed'){
      return true;
    }
    return false;
  }

  changePage(cat: string, t: any): any{
    if (t !== ''){
      this.router.navigate(['/atara/products'], {queryParams: {category: cat, type: t.toLowerCase()}});
    }
    else{
      this.router.navigate(['/atara/products'], {queryParams: {category: cat.toLowerCase()}});
    }
  }

  // changePageFormat(event?: PageEvent): any {
  //   this.length = event.length;
  //   this.itemsPerRow = event.pageSize;
  //   this.pageIndex = event.pageIndex;
  //   (document.querySelector('.products-list') as HTMLElement).style.gridTemplateColumns = `repeat(${this.itemsPerRow}, auto)`;
  // }

  previousState(state: string): any{
    if (state === 'size'){
      this.overlayState = 'color';
    }
    if (state === 'color'){
      this.overlayState = 'main';
    }
  }

  nextState(state: string): any{
    if (state === 'main'){
      this.overlayState = 'color';
    }
    if (state === 'color'){
      this.overlayState = 'size';
    }
  }

}