import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State, Kid } from "../../store/model";
import { NavbarComponent } from '../landing/navbar/navbar.component';
import { MoviesComponent } from '../movies/movies.component';
import * as moment from 'moment';

@Component({
  selector: 'app-kid-home',
  templateUrl: './kid-home.component.html',
  styleUrls: ['./kid-home.component.css']
})

export class KidHomeComponent implements OnInit {

  currentComponent = "movies"

  public kid$: Observable<Kid>;
  public today: Date;

  constructor(private router:Router, private store:Store<State>) { }

  ngOnInit() {
    this.kid$ = this.store.select('app','kid');
    this.today = new Date();
  }

  gotoMovies() {
    this.router.navigate(['/movies']);
  }

  gotoKidTime() {
    this.router.navigate(['/kid-time']);
  }

  gotoParentSettings() {
    this.router.navigate(['/parent-settings']);
  }

  getBedtime(kid:Kid) {
    
    return kid.bedTimes ? kid.bedTimes[moment(this.today).day()] : null;
  }

  getRemainingTime(kid:Kid) {
    return kid ? kid.minutesPerWeek - this.getMinutesSpent(kid) : 0;
  }

  getMinutesSpent(kid: Kid) {

    if (!kid.viewings) return 0; 

    const sunday = moment().startOf('week');

    return kid.viewings.reduce((acc, cur) => {

      let minutesSpent = 0;

      if (moment(cur.startTime).isAfter(sunday)) {

        const secondsSpent = moment(cur.endTime).diff(moment(cur.startTime), 'seconds');

        minutesSpent = Math.floor(secondsSpent / 60);
      }

      return acc + minutesSpent;

    }, 0)
  }
 
}

