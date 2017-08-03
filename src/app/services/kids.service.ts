import { AllUserData } from './../../../shared/to/all-user-data';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class KidsService {

  constructor(private http: Http) { }

  loadKids():Observable<AllUserData> {
    return this.http.get('/assets/db-data.json')
      .map( data => data.json());
  }

}
