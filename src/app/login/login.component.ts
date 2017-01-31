import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from './login.service';

@Component({
  	selector: 'my-login',
  	templateUrl: 'app/login/templates/login.component.html',
})



export class LoginComponent implements OnInit{
  model: any = {};

  constructor(
    private heroServiceCons: LoginService,
    private router: Router
  ) {} //Inyectar el Service en el constructor y mantenerlo en un campo privado 


  login() {
        this.heroServiceCons.login(
          this.model.username,
          this.model.password
        ).subscribe(
          data => {
            this.router.navigate(['./dashboard']);
          },
          error => {
            console.log(error);
          });
  }
  ngOnInit() {
  }

}
