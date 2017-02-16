// Importaciones generales
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Importaciones routing app
import { LoginRoutingModule }     from './login-routing.module';

// Component
import { LoginComponent } from './login.component';

// Service
import { LoginService } from './login.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,

  ],
  providers: [
    LoginService
  ],
})



export class LoginModule { }
