import { Injectable } from '@angular/core';


import { Cdash } from './dash';

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
export class DashService {
  token: string;

  private heroesUrl = 'http://localhost:8000/service-status-query/';  // URL to web api

  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }

  getHeroes (): Observable<Cdash[]> {
    let headers = new Headers({'Content-Type': 'application/json','Authorization': "Token "+this.token});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.heroesUrl,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addHero (name: string): Observable<Cdash> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
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


