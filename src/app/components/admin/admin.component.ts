import { SignUpFamilyAction, CreateKidAction } from './../../store/actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State, Family, Kid, Viewing } from "../../store/model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public families$: Observable<Family[]>
  public kids$: Observable<Kid[]>
  public family$: Observable<Family>;

  constructor(private store:Store<State>, private router: Router) { }

  ngOnInit() {
    this.families$ = this.store.select('app', 'families');
    this.kids$ = this.store.select('app', 'kids');
    this.family$ = this.store.select('app', 'family');
  }

  familyClicked(family:Family) {
    this.router.navigate([`/family/${family['_id']}`]);
  }

  createFamily() {

    const name = 'family_' + Math.floor(Math.random() * 1000);
    const password = 'pass';

    this.store.dispatch(new SignUpFamilyAction({ name, password}));
  }

  createKid(family:Family) {

    const kidName = 'kid_' + Math.floor(Math.random() * 1000);

                          // { _id: string, showId: string, movieId: string, title: string, startTime: Date, endTime: Date };
    const viewing:Viewing = {_id:undefined, showId: undefined, movieId: undefined, title:'Gone with the Wind', startTime: new Date(), endTime: new Date()};

    const kid:Kid = {_id: undefined, name:kidName, password:'pass', family:family, 
      minutesPerWeek:400, 
      viewings:[viewing], 
      bedTimes:[new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()]}
    
    this.store.dispatch(new CreateKidAction(kid));

  } 

  kidClicked(family: Family, kid:Kid) {
    console.log('family', family, 'kid', kid);
    this.router.navigate([`/family/${family._id}/kid/${kid._id}`]);
  }

  viewingClicked(viewing:Viewing) {
    console.log('viewing', viewing);
  }

  getTimeSpent(viewing: Viewing) {
    return +viewing.endTime - +viewing.startTime;
  }

}
