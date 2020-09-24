import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl();
  hide = true;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      email: this.email,
      password: this.password
    });
    if (this.authService.menu.value === 'opened'){
      this.authService.changeMenuState();
    }
  }

  ngOnInit(): any {
  }

  getEmailErrorMessage(): any {
    if (this.email.hasError('required')) {
      return 'Field requiered';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  logIn(): any{
    console.log(this.loginForm.value);
    window.location.href = '/home';
  }

}