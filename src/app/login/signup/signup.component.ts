import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import '../../externalJs/external';
declare let myExtObject: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl(''),
    email: new FormControl(''),
    businessname: new FormControl(''),
    address: new FormControl(''),
    category: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl('')
  });

  constructor(private router: Router) {
    setTimeout(() => { myExtObject.loadFlag(''); });

   }

  ngOnInit() {
    setTimeout(() => { myExtObject.loadFlagForInvite('in'); });
  }


  redirectSignIn() {
    console.log(this.signUpForm);
    // this.router.navigate(['merchant-login']);
  }

}
