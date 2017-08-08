import { SignUpFamilyAction, CreateKidAction, DeleteKidAction, FamilySelectedAction } from './../../store/actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State, Family, Kid, Viewing } from "../../store/model";
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public families$: Observable<Family[]>
  public kid$: Observable<Kid>
  public family$: Observable<Family>;

  constructor(private store:Store<State>, private router: Router) { }

  ngOnInit() {
    this.families$ = this.store.select('app', 'families');
    this.kid$ = this.store.select('app', 'kid');
    this.family$ = this.store.select('app', 'family');
  }

  familySelected(family:Family) {
    this.store.dispatch(new FamilySelectedAction(family));
  }
  familyClicked() {

    let family;
    
    this.family$.take(1).subscribe( f => family = f).unsubscribe();

    this.router.navigate([`/family/${family['_id']}`]);
  }

  createFamily() {

    const name = 'family_' + Math.floor(Math.random() * 1000);
    const password = 'pass';

    this.store.dispatch(new SignUpFamilyAction({ name, password}));
  }

  createKid() {

    const kidName = 'kid_' + Math.floor(Math.random() * 1000);

    const viewing:Viewing = {_id:undefined, showId: "foo", movieId: "bar", title:"Gone with the Wind", startTime: new Date(), endTime: new Date()};
    const bedTimes = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    const viewings: Viewing[] = []; // WARNING: no viewings yet because back end errors

    let family;
    
    this.family$.take(1).subscribe( f => family = f).unsubscribe();

    const kid:Kid = {_id: undefined, name:kidName, password:'pass', 
      minutesPerWeek:400, 
      family,
      viewings, 
      bedTimes}
    
      
    this.store.dispatch(new CreateKidAction({kid, family}));
  } 

  kidClicked(kid:Kid) {
    console.log('kid clicked', kid);
    this.router.navigate([`/family/${kid.family}/kid/${kid._id}`]);
  }

  viewingClicked(viewing:Viewing) {
    console.log('viewing', viewing);
  }

  getTimeSpent(viewing: Viewing) {
    return +viewing.endTime - +viewing.startTime;
  }

  deleteKid(kid:Kid) {
    // alert('delete kid ' + kid.name);
    this.store.dispatch(new DeleteKidAction(kid));
  }

}
