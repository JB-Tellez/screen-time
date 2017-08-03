import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BackendService {

  constructor(private http:Http) {}

  getAdult(id) {
    return this.http.get(`http://localhost:3000/adults/${id}`).map( data => data.json() );
  }

}
