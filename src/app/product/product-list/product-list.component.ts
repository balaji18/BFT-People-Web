import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    // this.getUserList();
  }

  getUserList() {
    this.productService.getUserList().subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }
}
