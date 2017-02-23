import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfGeneral} from '../config/config';
import { MenuComponent} from '../menu/menu.component';

import { Alumnos } from './alumnos';
import { AlumnosService } from './alumnos.service';

@Component({
    selector: 'my-alumnos',
    templateUrl: 'app/crudAlumnos/templates/alumnos.component.html',
})



export class AlumnosComponent extends ConfGeneral implements OnInit {

  objEmpleados : Alumnos[] = [];
  errorMessage: string;

  constructor(
    private heroService: AlumnosService,
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

    //ciclo de vida para hacer la peticion a el servicio cuando nuestra EmpleadoComponent se activa.
    ngOnInit(): void {
      this.getHeroes();
    }



}


