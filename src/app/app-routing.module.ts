import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , loadChildren: () => import('./bft-portal/bft-portal.module').then(m => m.BftPortalModule)},
  { path: 'login' , loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'product' , loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
