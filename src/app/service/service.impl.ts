import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class Implements {

    token: string;

    constructor(protected http:Http){
        this.token=localStorage.getItem('token');
    }

    guardar(path:string, parameter:any){

        console.log(path);
        console.log(parameter);



        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("1");
        let options = new RequestOptions({ headers: headers });
        console.log("2");
        this.http.post(path, parameter, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    protected extractData(res: Response) {
        console.log("ok");
        let body = res.json();
        localStorage.setItem('token', body.token);
        return body || { };
    }


  protected handleError (error: Response | any) {
    console.log("error");
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
    return Observable.throw("ERROR");
  }



}