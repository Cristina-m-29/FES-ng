import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  page: string;
  hide = true;
  genders: string[] = ['female', 'male'];
  personalData = false;
  emailAndPassword = false;

  // Personal data
  firstName = 'Cristina';
  lastName = 'Mititelu';
  selectedGender = 'female';
  birthday = '29/01/2000';
  email = 'cristina_admin@mail.com';
  password = 'parola';

  // Users
  users = [
    {number: 1, id: 111, name: 'Cristina Mititelu', email: 'cristina_admin@mail.com', order: 2, favorites: 7},
    {number: 2, id: 112, name: 'Cristina Mititelu', email: 'mititelucristina@mail.com', order: 1, favorites: 4}
  ];
  nrUsers: number;

  // Orders
  orders = [
    {number: 1111, id: 111, date: '20/02/2020', price: 70, products: [{name: 'Dress 1', size: 'XS', color: 'Blue', pieces: 1, price: 70}]},
    {number: 1112, id: 111, date: '27/02/2020', price: 278, products: [{name: 'Dress 1', size: 'XS', color: 'Blue', pieces: 1, price: 70},
    {name: 'Dress 2', size: 'M', color: 'Black', pieces: 2, price: 104}]},
    {number: 1113, id: 112, date: '03/09/2020', price: 140, products: 
    [{name: 'Jeans', size: 'S', color: 'Light Blue', pieces: 1, price: 140}]}
  ];
  nrOrders: number;

  // Products
  products = [
    {
      id: 10, category: 'women', type: 't-shirts', name: 'T-shirt 1', price: 50,
      hex_colors: [{id: 1, color: '#000000'}, {id: 2, color: '#b3b3b3'}, {id: 3, color: 'red'}, {id: 4, color: 'green'}, {id: 5, color: 'yellow'}], sizes: [{id: 1, size: 'XS'}, {id: 2, size: 'S'}, {id: 3, size: 'M'}]
    }
  ];

  productEditId = -1;
  beforeProduct = {
    name: '',
    price: 0,
    sizes: [],
    hex_colors: []
  };
  newSizes = [];
  newColors = [];
  addSize = '';
  addColor = '';

  // Add new product
  productImg: string;
  productDesign: string;
  productCategory: string;
  productName: string;
  productPrice: number;
  productSizes: string;
  productColors: string;
  addProdImg: any = '../../assets/images/girl.jpg';
  editProdImg: any =  '../../assets/images/girl.jpg';

  constructor() {
    this.page = window.location.pathname.split('/', 4)[3];
    this.nrUsers = this.users.length;
    this.nrOrders = this.orders.length;
  }

  ngOnInit(): any {
  }

  logout(): any {
  }

  editPersonalData(): any{
    this.personalData = false;
  }

  editEmailAndPassword(): any{
    this.emailAndPassword = false;
  }

  deleteUser(email: string): any{
  }

  openEditWindow(id: number): any{
    for ( let i = 0; i < this.products.length; i++){
      if ( this.products[i].id === id){
        this.beforeProduct.name = this.products[i].name;
        this.beforeProduct.price = this.products[i].price;
        this.beforeProduct.sizes = this.products[i].sizes;
        this.beforeProduct.hex_colors = this.products[i].hex_colors;
        this.productEditId = i;
        this.newSizes = [];
        this.newColors = [];
      }
    }
  }

  cancelEdit(): any{
    this.addSize = '';
    this.addColor = '';
  }

  deleteSize(sizeId: number): any{
    const sizes = this.beforeProduct.sizes;
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < sizes.length; i++){
      if (sizes[i].id !== sizeId){
        this.newSizes.push({
          id: sizes[i].id,
          size: sizes[i].size
        });
      }
    }
    this.beforeProduct.sizes = this.newSizes;
    this.newSizes = [];
  }

  deleteColor(colorId: number): any{
    const colors = this.beforeProduct.hex_colors;
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < colors.length; i++){
      if (colors[i].id !== colorId){
        this.newColors.push({
          id: colors[i].id,
          color: colors[i].color
        });
      }
    }
    this.beforeProduct.hex_colors = this.newColors;
    this.newColors = [];
  }

  deleteProduct(id: number): any{

  }

  editProduct(id: number): any{
    if (this.addSize !== ''){
      const sizes = this.addSize.split(',');
      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < sizes.length; i++){
        const len = this.beforeProduct.sizes.length + 1;
        this.beforeProduct.sizes.push({
          id: len,
          size: sizes[i]
        });
      }
    }
    if (this.addColor !== ''){
      const colors = this.addColor.split(',');
      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < colors.length; i++){
        const len = this.beforeProduct.hex_colors.length + 1;
        this.beforeProduct.hex_colors.push({
          id: len,
          color: colors[i]
        });
      }
    }
    this.products[this.productEditId].name = this.beforeProduct.name;
    this.products[this.productEditId].price = this.beforeProduct.price;
    this.products[this.productEditId].sizes = this.beforeProduct.sizes;
    this.products[this.productEditId].hex_colors = this.beforeProduct.hex_colors;
    this.addSize = '';
    this.addColor = '';
    this.productEditId = -1;
  }

  photoSelected(evt: any, env: any): any{
    const file = evt.target.files[0];
    if (file){
      if (/(jpe?g|png|gf)$/i.test(file.type)){
        const r = new FileReader();
        r.readAsDataURL(file);
        r.onload = (e) => {
          const base64 = e.target.result;
          if (env === 'edit'){
            this.editProdImg = base64;
          }
          else{
            this.addProdImg = base64;
          }
        };
      }
      else {
        console.log('WTF is this??');
      }
    }
    else{
      console.log('No file found');
    }
  }

}