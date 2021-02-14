import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'merchant-login', component: MerchantLoginComponent },
  { path: 'merchant-signup', component: SignupComponent },

];

@NgModule({
  declarations: [MerchantLoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }





