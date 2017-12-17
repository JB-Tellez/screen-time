import { SignUpFamilyAction, LogInFamilyAction } from './../store/actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { State } from "../store/model";
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  constructor(private store:Store<State>) { }

  signup(name: string, password: string) {
    this.store.dispatch(new SignUpFamilyAction({name, password}))
  }

  login(name: string, password: string) {
    this.store.dispatch(new LogInFamilyAction({name, password}));
  }

}
