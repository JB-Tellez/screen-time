import { Component, OnInit, Input } from '@angular/core';
import { Viewing } from "../../store/model";

@Component({
  selector: 'app-viewing-list',
  templateUrl: './viewing-list.component.html',
  styleUrls: ['./viewing-list.component.css']
})
export class ViewingListComponent implements OnInit {

  @Input() viewings: Viewing[];
  
  constructor() { }

  ngOnInit() {
  }

    public getViewingDuration(viewing: Viewing) {
    return 0; //Math.floor((viewing.endTime - viewing.startTime) / 60);
  }

}
