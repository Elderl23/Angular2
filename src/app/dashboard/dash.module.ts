// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MenuModule} from '../menu/menu.module';

import { AuthGuard} from '../config/config';

// Importaciones routing app
import { DashRoutingModule }     from './dash-routing.module';

// Component
import { DashboardComponent } from './dash.component';

// Service
import { DashService } from './dash.service';



@NgModule({
  imports: [
    MenuModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    DashRoutingModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    DashService,
    AuthGuard
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class DashboardModule { }
