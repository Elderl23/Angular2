// Importaciones generales
import { NgModule }      from '@angular/core';
import { RouterModule, Routes}   from '@angular/router';

// Component
import { LoginComponent } from './login.component';


const loginRoutes: Routes = [
      {
      path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,//Clase del comonente
      }
];


@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class LoginRoutingModule { }