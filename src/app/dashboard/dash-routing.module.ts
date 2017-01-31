// Importaciones generales
import { NgModule }      from '@angular/core';
import { RouterModule, Routes}   from '@angular/router';

// Component
import { DashboardComponent } from './dash.component';


const DashRoutes: Routes = [
      {
        path: 'dashboard',
        component: DashboardComponent,//Clase del comonente
      }
];


@NgModule({
  imports: [
    RouterModule.forChild(DashRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class DashRoutingModule { }