import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../externalJs/external';
import { LoginService } from '../login.service';
import {HttpClient} from '@angular/common/http';
declare let myExtObject: any;


@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent implements OnInit {
  loginForm = true;
  forgotPasswordForm = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = true;
    setTimeout(() => {
      myExtObject.loadFlag('');
    });
  }

  getOTP() {
      const payload = {
        mobileCountryCode: '+91',
        mobileNo: '8217631764'
      };
      this.loginService.generateOTP(payload).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
          if (error.error.message === 'Session expired' ||
            error.error.message === 'Unauthorized request' ||
            error.error.message === 'Update privacy policy') {
            this.router.navigate(['error/' + error.error.message]);
          }
        }
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
