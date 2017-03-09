import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfGeneral} from '../config/config';
import { MenuComponent} from '../menu/menu.component';

import { Producto } from './dash';
import { DashService } from './dash.service';




@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html',
})



export class DashboardComponent extends ConfGeneral implements OnInit {

  objAllModel : Producto[] = [];
  errorMessage: string;


  constructor(
    private heroService: DashService,
    private router: Router
  ) { 
    super();
    this.activate(true,false,false,false);
  } 

  public cargarCarrito = (alumno) => {
    console.log(alumno);
  }



  getall() {

    super.loading(true);

    this.heroService.getFunctionAll().subscribe(
      objGetAll => this.objAllModel = objGetAll,
      error =>  this.errorMessage = <any>error,
      () => super.loading(false)
    );
  }

    ngOnInit(): void {
      this.getall();
    }



}


