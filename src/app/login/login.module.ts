import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'merchant-login', component: MerchantLoginComponent },
  { path: 'merchant-signup', component: SignupComponent },
];

@NgModule({
  declarations: [MerchantLoginComponent, SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }





