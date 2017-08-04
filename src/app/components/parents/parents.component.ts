import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from "../../store/model";

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  public adults$;

  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.adults$ = this.store.select('app', 'family');
  }

}
