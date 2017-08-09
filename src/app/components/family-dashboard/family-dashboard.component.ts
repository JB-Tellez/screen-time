import { CreateKidAction } from './../../store/actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { State, Family, Kid, Viewing } from '../../store/model';


@Component({
  selector: 'app-family-dashboard',
  templateUrl: './family-dashboard.component.html',
  styleUrls: ['./family-dashboard.component.css']
})
export class FamilyDashboardComponent implements OnInit {

  family$: Observable<Family>;

  public showBedtimes: false;
  public showViewings: false;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.family$ = this.store.select('app', 'family');
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
    
      
    this.store.dispatch(new CreateKidAction({kid,family}));
  } 

  gotoKidSettings() {
    this.router.navigate['/kid-settings'];
  }

}