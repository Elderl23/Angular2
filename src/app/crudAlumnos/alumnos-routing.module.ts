// Importaciones generales
import { NgModule }      from '@angular/core';
import { RouterModule, Routes}   from '@angular/router';
import { AuthGuard} from '../config/config';

// Component
import { AlumnosComponent } from './alumnos.component';


const AlumnosRoutes: Routes = [
      {
        path: 'alumnos',
        component: AlumnosComponent,//Clase del comonente
      }
];


@NgModule({
  imports: [
    RouterModule.forChild(AlumnosRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class AlumnosRoutingModule { }