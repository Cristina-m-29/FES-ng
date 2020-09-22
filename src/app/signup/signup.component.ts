import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  name = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);
  gender = new FormControl('male');
  birthday = new FormControl();
  password = new FormControl();
  hide = true;

  ngOnInit(): any {
  }

  constructor(fb: FormBuilder) {
    this.signUpForm = fb.group({
      gender: this.gender,
      name: this.name,
      email: this.email,
      birthday: this.birthday,
      password: this.password
    });
  }

  getEmailErrorMessage(): any {
    if (this.email.hasError('required')) {
      return 'Field requiered';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp(): any{
    console.log(this.signUpForm.value);
    window.location.href = '/home';
  }

}