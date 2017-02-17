// Importaciones generales
import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { MenuComponent} from '../menu/menu.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent]
})



export class MenuModule { }
