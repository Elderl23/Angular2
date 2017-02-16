import { Headers, RequestOptions} from '@angular/http';

import { Path } from '../interfaces/path';
import { Token } from '../interfaces/token';
import { ConfG } from '../interfaces/ConfGeneral';

export const PathService: Path = {    
    path: "http://localhost:8000/"    
};

export class HeaderOptions implements Token{
	token;
  	constructor() {
  		this.token = sessionStorage.getItem('token');
  	}

  	headersfunct(): any{
  		let headers = new Headers({'Content-Type': 'application/json','Authorization': "Token "+this.token});
    	let options = new RequestOptions({ headers: headers });

    	return options;
  	}
}

export class ConfGeneral extends HeaderOptions implements ConfG{
  title;
  showMenu;
  constructor(){
    super();
    this.title = 'Tystab -- Angular2';

    if(this.token){
        this.showMenu = true;
        console.log("Mostramos menu");
      }
  }


  closeSession(): void{
    sessionStorage.removeItem('token');
  }
}
