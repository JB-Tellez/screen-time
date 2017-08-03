import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { State, Adult, Kid } from '../../store/model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  adult: Adult;
  public times:Date[] = [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(), new Date()]
  public showDetails: false;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      const id = params['id'];

      this.store.select('app', 'adult').subscribe((adult: Adult) => this.adult = adult);
    });
  }

  public addKid() {
    alert('add kid');
  }

  public getDay(index) {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][index];
  }

  public getMinutesSpent(kid:Kid) {

    // TODO: handle missing endTime
    
    return kid.viewings.reduce( (acc, cur) => {
      
      const secondsSpent = cur.endTime - cur.startTime;

      const minutesSpent = Math.floor(secondsSpent / 60);

      return acc + minutesSpent;

    }, 0)
  }

}
