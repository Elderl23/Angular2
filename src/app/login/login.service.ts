import { Injectable } from '@angular/core';

import { Clogin } from './login';

import { Headers, Http, Response, RequestOptions} from '@angular/http';

// Add the RxJS Observable operators.
//import './rxjs-operators';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

// clase de servicio que puede ser compartido por muchos componentes.

//servicio que devuelve promesa a el Componente
@Injectable()
export class LoginService {
  private heroesUrl = 'http://127.0.0.1:8000/api-token-auth/';  // URL to web api
  token: string;
  constructor(private http:Http){this.token=localStorage.getItem('token');}
  login (username: string, password: string): Observable<Clogin> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.heroesUrl, { username,password }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    localStorage.setItem('token', body.token);
    return body || { };
  }


  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}


