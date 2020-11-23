import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../externalJs/external';
declare let myExtObject: any;


@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      myExtObject.loadFlag('');
    });
  }


  redirectToSignUp() {
    this.router.navigate(['merchant-signup']);

  }

}
