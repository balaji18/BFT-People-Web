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
  loginForm = true;
  forgotPasswordForm = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = true;
    setTimeout(() => {
      myExtObject.loadFlag('');
    });
  }


  redirectToSignUp() {
    this.router.navigate(['merchant-signup']);
  }

  redirectToSignIn() {
    this.loginForm = true;
    this.forgotPasswordForm =  false;
  }

  forgotPassword() {
    this.loginForm = false;
    this.forgotPasswordForm =  true;
  }

}
