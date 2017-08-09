import { Injectable } from '@angular/core';
import { Kid } from "../store/model";
import * as moment from 'moment';

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

}
