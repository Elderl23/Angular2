import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ConfGeneral} from './config/config';

@Component({
  selector: 'app',
  templateUrl: 'app/templates/base.component.html',
})
export class AppComponent extends ConfGeneral{

	constructor(private router: Router){
		super();
	}


	
}