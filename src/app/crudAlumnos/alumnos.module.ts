// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { ControlMessagesComponent } from '../service/control-messages.component';
import { ValidationService } from '../service/validation.service';


import { MenuModule} from '../menu/menu.module';
import { AuthGuard} from '../config/config';

// Importaciones routing app
import { AlumnosRoutingModule }     from './alumnos-routing.module';

// Component
import { AlumnosComponent } from './alumnos.component';

// Service
import { AlumnosService } from './alumnos.service';



@NgModule({
  imports: [
    MenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AlumnosRoutingModule,
  ],
  declarations: [
    AlumnosComponent,
    ControlMessagesComponent
  ],
  providers: [
    AlumnosService,
    AuthGuard,
    ValidationService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class AlumnosdModule { }
