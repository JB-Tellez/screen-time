import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bedtime-list',
  templateUrl: './bedtime-list.component.html',
  styleUrls: ['./bedtime-list.component.css']
})
export class BedtimeListComponent implements OnInit {

  @Input() bedtimes: Date[];
  
  constructor() { }

  ngOnInit() {
  }

  public getDay(index) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
  }

}
