import { SignUpFamilyAction, CreateKidAction, DeleteKidAction, FamilySelectedAction, KidSelectedAction } from './../../store/actions';
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
    this.store.dispatch(new KidSelectedAction(null));
  }

  kidSelected(kid:Kid) {
    this.store.dispatch(new KidSelectedAction(kid));
  }

  familyClicked() {
    this.router.navigate([`/family/${this.getFamilyId()}`]);
  }

  private getFamilyId() {

    let familyId;

    this.family$.take(1).subscribe( f => familyId = f._id);

    return familyId;
  }

  createFamily() {

    const name = 'family_' + Math.floor(Math.random() * 1000);
    const password = 'pass';

    this.store.dispatch(new SignUpFamilyAction({ name, password}));
  }

  createKid() {

    const kidName = 'kid_' + Math.floor(Math.random() * 1000);

    const bedTimes = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    const viewings: Viewing[] = []; // WARNING: no viewings yet because back end errors

    let family;
    
    this.family$.take(1).subscribe( f => family = f).unsubscribe();

    const kid:Kid = {_id: undefined, name:kidName, password:'pass', 
      minutesPerWeek:400, 
      age:10,
      avatar:0,
      family,
      viewings, 
      bedTimes,
    currentViewing: undefined}
    
      
    this.store.dispatch(new CreateKidAction(kid));
  } 

  kidClicked(kid:Kid) {
    console.log('kid clicked', kid);
    this.router.navigate([`/family/${this.getFamilyId()}/kid/${kid._id}`]);
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
