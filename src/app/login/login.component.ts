import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { ConfGeneral} from '../config/config';



@Component({
  	selector: 'my-login',
  	templateUrl: 'app/login/templates/login.component.html',
})



export class LoginComponent extends ConfGeneral{
  model: any = {};
  showAlert: boolean = false;

  constructor(
    private loginservice: LoginService,
    private router: Router
  ) {
    super();
  } 


  login() {


        this.loginservice.login(
          this.model.username,
          this.model.password,
          
        ).subscribe(
          data => {
            this.router.navigate(['./dashboard']);
          },
          error => {
            console.log(error);
            this.showAlert = true;
          });
  }

}
