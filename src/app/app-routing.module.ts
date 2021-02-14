import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , loadChildren: () => import('./bft-portal/bft-portal.module').then(m => m.BftPortalModule)},
  { path: '' , loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
