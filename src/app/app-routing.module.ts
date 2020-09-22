import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atara/signup', component: SignupComponent },
  { path: 'atara/login', component: LoginComponent},
  { path: 'atara/products', component: ProductsComponent},
  { path: 'atara/product', component: ProductComponent},
  { path: 'atara/wishlist', component: WishlistComponent},
  { path: 'atara/cart', component: CartComponent},
  { path: 'atara/user/personal-data', component: UserComponent},
  { path: 'atara/user/orders', component: UserComponent},
  { path: 'atara/user/addresses', component: UserComponent},
  { path: 'atara/user/payment', component: UserComponent},
  { path: 'atara/admin/personal-data', component: AdminComponent},
  { path: 'atara/admin/users', component: AdminComponent},
  { path: 'atara/admin/orders', component: AdminComponent},
  { path: 'atara/admin/products', component: AdminComponent},
  { path: 'atara/admin/add-product', component: AdminComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
