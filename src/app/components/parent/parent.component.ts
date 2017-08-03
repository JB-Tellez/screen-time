import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { State, Adult, Kid, Viewing } from '../../store/model';
import * as moment from 'moment';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  adult: Adult;
  public times: Date[] = [] // DANGER: need per kid
  public showDetails: false;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      const id = params['id'];

      this.store.select('app', 'adult').subscribe((adult: Adult) => {
        
        this.adult = adult;

        if (this.adult.kids) {
        this.times = this.adult.kids[0].bedTimes.map( time => new Date(time * 1000));
        }
      });
    });
  }

  public addKid() {
    alert('add kid');
  }

  public getDay(index) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
  }

  public getMinutesSpent(kid: Kid) {

    // TODO: handle missing endTime


    const sunday = moment().startOf('week');

    return kid.viewings.reduce( (acc, cur) => {

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
