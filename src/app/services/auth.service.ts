import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { State, Family, TestAction } from "../store/model";

@Injectable()
export class AuthService {

  constructor(private store:Store<State>, private router: Router) { }

  signup(name: string, password: string) {
    const family:Family = {name, password, _id:undefined, kids:[]};
    console.log('signup', family);

    // this.store.select('app', 'family').subscribe( (family:Family) => {
    //   console.log('family change', family);
    //   if (family._id) {
    //     this.router.navigate([`/family/${family._id}`]);
    //   }
    // });

    // family['onCompleteActions'] = {type:'TEST_ACTION'};

    this.store.dispatch({type:'SIGN_UP_FAMILY', payload: family});
  }

}
