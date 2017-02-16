import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfGeneral} from '../config/config';

import { Cdash } from './dash';
import { DashService } from './dash.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
})



export class DashboardComponent extends ConfGeneral implements OnInit {

  objEmpleados : Cdash[] = [];
  errorMessage: string;

  constructor(
    private heroService: DashService,
    private router: Router
  ) { 
    super();
  } //Inyectar el EmpleadoService en el constructor y mantenerlo en un campo privado 

  //ciclo de vida para hacer la peticion a el servicio cuando nuestra EmpleadoComponent se activa.

    getHeroes() {
      this.heroService.getHeroes()
                     .subscribe(
                       objEmpleados => this.objEmpleados = objEmpleados,
                       error =>  this.errorMessage = <any>error);
  }

  onLogout() {
    this.closeSession();
    this.router.navigate(['/login']);
  }

    //ciclo de vida para hacer la peticion a el servicio cuando nuestra EmpleadoComponent se activa.
    ngOnInit(): void {
      this.getHeroes();
    }



}


