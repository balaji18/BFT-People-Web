import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';


const routes: Routes = [
      {path: 'merchant-login', component: MerchantLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
