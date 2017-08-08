import { Component, OnInit, Input } from '@angular/core';
import { Kid } from "../../store/model";
import * as moment from 'moment';

@Component({
  selector: 'app-kid-card',
  templateUrl: './kid-card.component.html',
  styleUrls: ['./kid-card.component.css']
})
export class KidCardComponent implements OnInit {

  @Input() kid: Kid;
  showViewings = false;
  showBedtimes = false;
  
  constructor() { }

  ngOnInit() {
  }

    public getMinutesSpent() {

    if (true === true) return 0; // DANGER

    // TODO: handle missing endTime


    const sunday = moment().startOf('week');

    return this.kid.viewings.reduce((acc, cur) => {

      let minutesSpent = 0;

      if (moment(cur.startTime).isAfter(sunday)) {

        const secondsSpent = moment(cur.endTime).diff(moment(cur.startTime), 'seconds');

        minutesSpent = Math.floor(secondsSpent / 60);
      }

      return acc + minutesSpent;

    }, 0)
  }

}
