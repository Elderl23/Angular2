import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ValidationService } from '../service/validation.service';

import { ConfGeneral} from '../config/config';
import { MenuComponent} from '../menu/menu.component';

import { Alumnos } from './alumnos';
import { AlumnosService } from './alumnos.service';

@Component({
    selector: 'my-alumnos',
    templateUrl: 'app/crudAlumnos/templates/alumnos.component.html',
})



export class AlumnosComponent extends ConfGeneral implements OnInit {

  objAllModel : Alumnos[] = [];
  errorMessage: string;

  activateSave: boolean;
  activateGetAll: boolean;

  userForm: any;

  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    super();
    this.activate(true,false);

    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }






  public functionEdit = (alumno) => {
    console.log(alumno);
  }

  public functionDelete = (alumno) => {
    console.log(alumno);
  }
 

   public functionOpenForm = (alumno) => {
    this.activate(false,true);
  }

   public functionCancel = () => {
    this.activate(true,false);
  }

  public functionSave = () => {
    console.log("Guardamos");
  }

  private activate(getAll,save): any{
    this.activateGetAll = getAll;
    this.activateSave = save;
  }


  getall() {
      this.alumnosService.getFunctionAll().subscribe(
      objGetAll => this.objAllModel = objGetAll,
      error =>  this.errorMessage = <any>error
      );
  }
    ngOnInit(): void {
      this.getall();
    }



}


