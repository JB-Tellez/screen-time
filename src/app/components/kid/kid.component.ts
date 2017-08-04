import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from "../../store/model";

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit {

  public kid$;

  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.kid$ = this.store.select('app','kid');
  }

}
