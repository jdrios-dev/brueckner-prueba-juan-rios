import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient ) {}

  private baseUrl = environment.baseUrl;

  private successHandler(value: any) { return value; }
  private errorHandler(error: any) { return error; }

  public makeRequest(requestObject): any {
    let type = requestObject.type.toLowerCase();
    if(!type){ return console.log('No type specified in the request object.'); }

    let body = requestObject.body || {};
    let location = requestObject.location;
    if (!location) { return console.log('No location specified in the request object.'); }

    let url = `${this.baseUrl}/${location}`;

    let httpOptions = {};

    if(type === 'get'){
      return this.http.get(url, httpOptions).toPromise()
        .then(this.successHandler)
        .catch(this.errorHandler);
    }

    if(type === 'post'){
      return this.http.post(url, body, httpOptions).toPromise()
        .then(this.successHandler)
        .catch(this.errorHandler);
    }
  }
}
