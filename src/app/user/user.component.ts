import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  page: string;
  hide = true;
  personalData = false;
  emailAndPassword = false;

  // Personal data
  genders: string[] = ['female', 'male'];
  firstName = 'Cristina';
  lastName = 'Mititelu';
  selectedGender = 'female';
  birthday = '29/01/2000';
  email = 'mititelucristina29@gmail.com';
  password = 'parola';

  // Orders
  orders: object[] = [
    {number: 1, date: '01/07/2020', price: 70, products: [
      { name: 'Dress 1', size: 'XS', color: 'Blue', pieces: 1, price: 70}]
    },
    {number: 2, date: '02/07/2020', price: 278, products: [
      { name: 'Dress 1', size: 'XS', color: 'Blue', pieces: 1, price: 70},
      { name: 'Dress 2', size: 'M', color: 'Black', pieces: 2, price: 104}]
    }
  ];
  nrOrders: number;

  // Addresses
  addresses: object[] = [
    {number: 1, name: 'Cristina Mititelu', street: 'Pacurari', strNumber: 8, city: 'Iasi', country: 'Romania', postalCode: 700567, edit: 'false'},
    {number: 2, name: 'Madalina Plugariu', street: 'Recea', strNumber: 3, city: 'Iasi', country: 'Romania', postalCode: 700936, edit: 'false'}
  ];
  nrAddresses: number;

  // Cards
  cards: object[] = [
    {number: 1, type: 'visa', cardNumber: 59901902918819192, month: '01', year: 2025},
    {number: 2, type: 'master', cardNumber: 59901902918819192, month: '09', year: 2028}
  ];
  nrCards: number;

  constructor() {
    this.page = window.location.pathname.split('/', 4)[3];
    this.nrOrders = this.orders.length;
    this.nrAddresses = this.addresses.length;
    this.nrCards = this.cards.length;
  }

  ngOnInit(): any {
  }

  logout(): any{
  }

  editPersonalData(f: NgForm): any{
    console.log(f.value);
    this.personalData = false;
  }

  editEmailAndPassword(f: NgForm): any{
    console.log(f.value);
    this.emailAndPassword = false;
  }

  openAddressForm(nr: number): any{
    const adr = this.addresses[nr - 1];
    console.log(adr);
  }

  editAddress(): any{
    console.log(this.addresses);
  }

}