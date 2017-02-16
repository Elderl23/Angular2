// Importaciones generales
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//import { MenuComponent} from '../directiveComponent/menu.component';

// Importaciones routing app
import { DashRoutingModule }     from './dash-routing.module';

// Component
import { DashboardComponent } from './dash.component';

// Service
import { DashService } from './dash.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    DashRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    //MenuComponent
  ],
  providers: [
    DashService
  ],
})



export class DashboardModule { }
