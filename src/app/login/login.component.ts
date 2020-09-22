import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: this.email,
      password: this.password
    });
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