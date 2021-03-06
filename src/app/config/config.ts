import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Path } from '../interfaces/path';
import { Token } from '../interfaces/token';
import { ConfG, Login} from '../interfaces/ConfGeneral';

export const PathService: Path = {    
    path: "http://127.0.0.1:8000/" 
};


export class ClassGenerica implements Login{

  activateLoading;

  constructor(){
    this.loading(false);
  }

  protected loading(parameter): void{
    this.activateLoading= parameter;
  }

}


export class HeaderOptions extends ClassGenerica implements Token{
	token;
  headersT;
  	constructor() {
      super();
  		this.token = sessionStorage.getItem('token');
  	}

  	headersfunct(): any{
      if(this.token != null){
        this.headersT = new Headers({'Content-Type': 'application/json','Authorization': "Token "+this.token});
      }else{
        this.headersT = new Headers({'Content-Type': 'application/json'});
      }
    	let options = new RequestOptions({ headers: this.headersT });

    	return options;
  	}
}

export class ConfGeneral extends HeaderOptions implements ConfG{
  title;
  showMenu;

  all;save;edit;deleteC;

  constructor(){
    super();
    this.title = 'Tystab -- Angular2';

    if(this.token){
        this.showMenu = true;
    }
  }
  isLoggedIn(): boolean{
    if(this.token){
      return true;
    }else{
      return false;
    }   
  }
  closeSession(): void{
    sessionStorage.removeItem('token');
  }

  protected activate(All,save,edit,deleteC): void{
    this.all = All;
    this.save = save;
    this.edit = edit;
    this.deleteC = deleteC;
  }

}
@Injectable()
export class AuthGuard extends ConfGeneral implements CanActivate {
    constructor() { 
      super();
    }

    isToken(): boolean{
      console.log(this.token);
      if(this.token){
        return true;
      }else{
        return false;
      }
    }




    canActivate() {
      return this.isToken();
    }
}
