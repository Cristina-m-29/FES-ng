import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

export interface Tile {
  route: string;
  params: string;
  background: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Casual', cols: 1, rows: 3, background: 'url("../../assets/images/tiles/tile1.jpg")',
      // tslint:disable-next-line: quotemark
      route: 'atara/casual', params: ''},
    {text: 'Elegant', cols: 1, rows: 3, background: 'url("../../assets/images/tiles/tile2.jpg")',
    route: 'atara/elegant"]', params: ''},
    {text: 'Sport', cols: 1, rows: 3, background: 'url("../../assets/images/tiles/tile3.jpg")',
    route: 'atara/sport', params: ''},
  ];
  windowHeight: string;
  windowWidth: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): any {
    this.windowHeight = (window.innerHeight + 7).toString() + 'px';
    this.windowWidth = (window.innerWidth).toString() + 'px';
  }

}