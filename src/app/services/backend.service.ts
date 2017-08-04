import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Kid } from "../../../shared/model/kid";
import 'rxjs/add/observable/of';

@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  // TODO: needed?
  fetchFamilies() {
    return this.http.get(`http://localhost:3000/families`).map(data => data.json());
  }

  fetchFamily(id) {
    return this.http.get(`http://localhost:3000/families/${id}`).map(data => data.json());
  }

   addKid(kid:Kid) {
    // return this.http.post(`http://localhost:3000/kids`, kid).map(data => data.json());
    kid.id = Math.floor(Math.random() * 100);
    return Observable.of(kid);
  }
}
