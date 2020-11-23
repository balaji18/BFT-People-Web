import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../externalJs/external';
declare let myExtObject: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => { myExtObject.loadFlag(''); });

   }

  ngOnInit() {
    setTimeout(() => { myExtObject.loadFlagForInvite('in'); });

  }


  redirectSignIn() {
    this.router.navigate(['merchant-login']);
  }

}
