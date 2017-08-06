import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import { Kid, Family } from "../store/model";

@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  fetchFamilies() {
    return this.http.get(`api/families`).map(data => data.json());
  }

  fetchKids() {
    return this.http.get(`api/kids`).map(data => data.json());
  }

  fetchFamily(id) {

    return this.http.get(`api/families/${id}`).map( data => data.json() );
  }

   addKid(kid:Kid) {
    // return this.http.post(`http://localhost:3000/kids`, kid).map(data => data.json());
    kid._id = '' + Math.floor(Math.random() * 100);
    return Observable.of(kid);
  }

  createFamily(family:Family) {
    return this.http.post(`api/families`, family).map( data => data.json());
  }

  createKid(kid:Kid) {
    console.log('createKid', kid);
    return this.http.post(`api/kids`, kid).map( data => data.json());
  }
}
