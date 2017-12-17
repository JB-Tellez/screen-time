import { Injectable } from '@angular/core';
import { Kid, Viewing } from "../store/model";
import * as moment from 'moment';
import { environment } from '../../environments/environment';

@Injectable()
export class TimeHelperService {

  constructor() { }

  getBedtime(kid: Kid):Date {
    return kid && kid.bedTimes ? new Date(kid.bedTimes[moment().day()]) : null;
  }
  getMinutesUntilBed(kid: Kid): number {

    const todayBedtime = this.getBedtime(kid);

    if (todayBedtime) {
      
      let now = new Date();

      todayBedtime.setFullYear(now.getFullYear());

      return Math.round(moment(todayBedtime).diff(now) / 1000 / 60);

    } else {

      return 0;
    }
  }

  isEndTimeInFuture(viewing:Viewing):boolean {
    return moment(viewing.endTime).isAfter(moment());
  }
  getMinutesScreenTimeRemaining(kid:Kid): number {

    console.log('getMinutesScreenTimeRemaining', kid);

    const viewings = kid.viewings || [];

    // need to add up viewing end-start diffs and sum
    let sum = viewings.reduce( (acc, cur) => {
      
      const start = cur.startTime;
      
      const end = moment(cur.endTime);

      var duration = moment.duration(end.diff(cur.startTime));
      var minutes = duration.asMinutes();

      return minutes;
    }, 0);

    return 0;
  }

}
