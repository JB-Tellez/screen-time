import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Kid } from "../../store/model";

@Component({
  selector: 'app-kid-stats',
  templateUrl: './kid-stats.component.html',
  styleUrls: ['./kid-stats.component.css']
})
export class KidStatsComponent implements OnInit {

  @Input() kid:Kid;
  @Output() showSettings:EventEmitter<boolean> = new EventEmitter(false);
  
  constructor() { }

  ngOnInit() {
  }

  gotoKidsSettings() {
    this.showSettings.next(true);
  }

}
