import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';



@NgModule({
  declarations: [AppFooterComponent, AppHeaderComponent],
  imports: [
    CommonModule,
    NgxDropzoneModule
  ],
  exports: [
    NgxDropzoneModule,
    AppFooterComponent,
    AppHeaderComponent
  ]
})
export class SharedModule { }
