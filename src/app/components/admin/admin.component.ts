import { Router } from '@angular/router';
import { Kid } from './../../../../shared/model/kid';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State, Family } from "../../store/model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public families$: Observable<Family[]>
  public kids$: Observable<Kid[]>
  public family$: Observable<Family>;

  constructor(private store:Store<State>, private router: Router) { }

  ngOnInit() {
    this.families$ = this.store.select('app', 'families');
    this.kids$ = this.store.select('app', 'kids');
    this.family$ = this.store.select('app', 'family');
  }

  familyClicked(family:Family) {
    this.router.navigate([`/family/${family['_id']}`]);
  }

}
