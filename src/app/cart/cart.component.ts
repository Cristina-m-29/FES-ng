import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  addresses: string[][] = [
    [ '1', 'Pacurari', 'Iasi', 'Romania'],
    [ '2', 'Pacurari', 'Iasi', 'Romania'],
    [ '3', 'Pacurari', 'Iasi', 'Romania'],
  ];
  selectedAddress = '0';
  payMethods: string[] = ['cash', 'card'];
  cardTypes: string[] = ['Master', 'Visa'];
  selectedMethod = '';
  cardType: string;
  orderError = false;

  addNewAddressForm: FormGroup;
  addNewCardForm: FormGroup;
  name = new FormControl();
  street = new FormControl();
  streetNr = new FormControl();
  city = new FormControl();
  country = new FormControl();
  postalCode = new FormControl();
  cardNumber = new FormControl();
  monthExp = new FormControl();
  yearExp = new FormControl();
  securityCode = new FormControl();

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.addNewAddressForm = fb.group({
      name: this.name,
      street: this.street,
      streetNr: this.streetNr,
      city: this.city,
      country: this.country,
      postalCode: this.postalCode
    });
    this.addNewCardForm = fb.group({
      cardNumber: this.cardNumber,
      expirationMonth: this.monthExp,
      expirationYear: this.yearExp,
      securityCode: this.securityCode
    });
    if (this.authService.menu.value === 'opened'){
      this.authService.changeMenuState();
    }
  }

  ngOnInit(): any {
  }

  addAddress(): any{
    if (!this.addNewAddressForm.invalid){
      console.log('Added address');
    }
  }

  addCard(): any{
    if (!this.addNewCardForm.invalid){
      console.log('Added card');
    }
  }

  sendOrder(): any{
    if (this.selectedAddress === '0' || this.selectedMethod === ''){
      this.orderError = true;
    }
    else{
      this.orderError = false;
    }
  }

}