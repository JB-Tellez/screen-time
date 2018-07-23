import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import { Kid, Family, Viewing } from "../store/model";

@Injectable()
export class BackendService {

  API_URL = 'https://screen-time-api.herokuapp.com/';
  //'http://localhost:3000/';// 
  
  constructor(private http: Http) { }

  fetchFamilies() {
    return this.http.get(`${this.API_URL}api/families`).map(data => data.json());
  }

  fetchFamily(id) {

    return this.http.get(`${this.API_URL}api/families/${id}`).map( data => data.json() );
  }

   addKid(kid:Kid) {
    // return this.http.post(`http://localhost:3000/kids`, kid).map(data => data.json());
    kid._id = '' + Math.floor(Math.random() * 100);
    return Observable.of(kid);
  }

  signUpFamily(creds:any) {
    console.log('createFamily', creds);
    return this.http.post(`${this.API_URL}auth/signup`, creds).map( data => data.json());
  }

  logInFamily(creds:any) {
    console.log('logInFamily', creds);
    creds.username = creds.name; // DANGER
    return this.http.post(`${this.API_URL}auth/login`, creds).map( data => data.json());
  }

  createKid(kid:Kid) {
    
    let dto:any = {...kid};

    // server wants just the id
    dto.family = kid.family._id;
    
    return this.http.post(`${this.API_URL}api/kids`, dto).map( data => data.json());
  }

  deleteKid(kid:Kid) {
 
    return this.http.delete(`${this.API_URL}api/kids/${kid._id}`).map( data => data.json());
  }

   createViewing(viewing:Viewing) {
    
    console.log('createViewing', viewing);
    
    let dto:any = {...viewing};

    // server wants just the id
    dto.viewing = viewing._id;

    return this.http.post(`${this.API_URL}api/viewings`, dto).map( data => data.json());
  }

}