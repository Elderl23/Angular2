import { Injectable } from '@angular/core';


import { Alumnos } from './alumnos';
import { Path } from '../interfaces/path';
import { PathService, HeaderOptions} from '../config/config';

import { Headers, Http, Response, RequestOptions} from '@angular/http';

// Add the RxJS Observable operators.
//import './rxjs-operators';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// clase de servicio que puede ser compartido por muchos componentes.

//servicio que devuelve promesa a el Componente
@Injectable()
export class AlumnosService extends HeaderOptions implements Path{
  path;

  constructor(private http: Http) {
    super();
  }

  getFunctionAll (): Observable<Alumnos[]> {

    this.path = PathService.path+'service-alumnos-query/';

    return this.http.get(this.path,super.headersfunct())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // addHero (name: string): Observable<Cdash> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.post(this.heroesUrl, { name }, options)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res.json();
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


