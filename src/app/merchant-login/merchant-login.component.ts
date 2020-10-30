import { Component, OnInit } from '@angular/core';
import '../externalJs/external';
declare let myExtObject: any;


@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      myExtObject.loadFlag('');
    });
  }

}
