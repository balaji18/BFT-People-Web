import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppFooterComponent, AppHeaderComponent],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxDropzoneModule,
    AppFooterComponent,
    AppHeaderComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
