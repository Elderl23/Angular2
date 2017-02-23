// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

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
    HttpModule,
    JsonpModule,
    AlumnosRoutingModule,
  ],
  declarations: [
    AlumnosComponent,
  ],
  providers: [
    AlumnosService,
    AuthGuard
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class AlumnosdModule { }
