import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.sass']
})
export class SidemenuComponent implements OnInit {
  height = '0';
  width = '100%';
  transition = 'height 0.5s ease-in-out';
  display: string;
  menu: string;
  ok = 0;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): any {
    this.authService.isOpen.subscribe(() => {
      this.changeHeight();
    });
  }

  changeHeight(): any{
    if (window.innerWidth > 590){
      if (this.ok !== 0){
        if (this.height === '0'){
          (async () => {
            this.authService.showBtnIndex = false;
            this.transition = 'height 0.5s ease-in-out';
            this.height = '100vh';
            await this.delay(500);
            this.transition = 'width 0.5s ease-in-out';
            this.display = 'block';
            this.width = '50%';
          })();
        }
        else{
          (async () => {
            this.menu = '';
            this.transition = 'width 0.5s ease-in-out';
            this.width = '100%';
            await this.delay(500);
            this.display = 'none';
            this.transition = 'height 0.5s ease-in-out';
            this.authService.showBtnIndex = true;
            this.height = '0';
          })();
        }
      }
    }
    else{
      if (this.ok !== 0){
        if (this.height === '0'){
          this.transition = 'height 0.5s ease-in-out';
          this.height = '100vh';
          this.display = 'block';
        }
        else{
          this.display = 'none';
          this.transition = 'height 0.3s ease-in-out';
          this.height = '0';
        }
      }
    }
    this.ok = 1;
  }

  changeMenu(m: string): any{
    if (this.menu !== m){
      this.menu = m;
    }
    else{
      this.menu = '';
    }
  }

  delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
