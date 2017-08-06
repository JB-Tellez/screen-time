import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { State } from "../store/model";

@Injectable()
export class AuthService {

  constructor(private store:Store<State>) { }

  signup(name: string, password: string) {
    this.store.dispatch({type:'SIGN_UP_FAMILY', payload: {name, password}});
  }

  login(name: string, password: string) {
    this.store.dispatch({type:'LOG_IN_FAMILY', payload: {name, password}});
  }

}
