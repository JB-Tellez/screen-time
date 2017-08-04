import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { State, Family, Kid, Viewing, KidAdded } from '../../store/model';
import * as moment from 'moment';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  family$: Observable<Family>;

  public showDetails: false;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<State>) { }

  ngOnInit() {

    this.family$ = this.store.select('app', 'family');

    // need to inject date objects
    this.family$.forEach(family => {
      if (family.kids) {
        family.kids.forEach(kid => {
          kid['bts'] = kid.bedTimes.map(bedTime => new Date(bedTime * 1000));
        })
      }
    });

  }

  public addKid() {
    const kid: Kid = {
      id: undefined,
      name: 'Johnny',
      password: 'pass',
      minutesPerWeek: 400,
      bedTimes: [],
      viewings: []
    };
    this.store.dispatch({ type: 'ADD_KID', payload: kid });

  }

  public getDay(index) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
  }

  public getMinutesSpent(kid: Kid) {

    // TODO: handle missing endTime


    const sunday = moment().startOf('week');

    return kid.viewings.reduce((acc, cur) => {

      let minutesSpent = 0;

      if (moment.unix(cur.startTime).isAfter(sunday)) {

        const secondsSpent = cur.endTime - cur.startTime;

        minutesSpent = Math.floor(secondsSpent / 60);
      }

      return acc + minutesSpent;

    }, 0)
  }

  public getViewingDuration(viewing: Viewing) {
    return Math.floor((viewing.endTime - viewing.startTime) / 60);
  }

}
