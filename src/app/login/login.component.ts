import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { ConfGeneral} from '../config/config';



@Component({
  	selector: 'my-login',
    styleUrls: ['app/login/templates/login.component.css'],
  	templateUrl: 'app/login/templates/login.component.html',
})



export class LoginComponent extends ConfGeneral{
  model: any = {};
  showAlert: boolean = false;

  MsgAlert: string;


  constructor(
    private loginservice: LoginService,
    private router: Router
  ) {
    super();
  } 


  login() {

    super.loading(true);

    this.loginservice.login(
      this.model.username,
      this.model.password,
    ).subscribe(
          data => {
            this.router.navigate(['./alumnos']);
          },
          error => {
            this.MsgAlert = error;
            this.showAlert = true;
            super.loading(false);
          },
          () => super.loading(false)
     );
  }

}
