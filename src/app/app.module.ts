// Importaciones generales
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Importaciones Component Base
import { AppComponent }         from './app.component';

// Importaciones routing app

import {routing, appRoutingProviders} from './app.routing';

import { DashboardModule }     from './dashboard/dash.module';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    DashboardModule
  ],
  declarations: [
  	AppComponent,
    LoginComponent
  ],
  providers: [
     appRoutingProviders,
     LoginService
   ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
