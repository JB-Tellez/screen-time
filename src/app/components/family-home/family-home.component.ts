import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State, Family, Kid } from "../../store/model";

@Component({
  selector: 'app-family-home',
  templateUrl: './family-home.component.html',
  styleUrls: ['./family-home.component.css']
})
export class FamilyHomeComponent implements OnInit {

  family$: Observable<Family>;
  
  constructor(private store:Store<State>, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.family$ = this.store.select('app', 'family');
  }

  gotoDashboard() {
    
    // WARNING: snapshot safe?
    const id = this.route.snapshot.params['id'];

    // TODO: got to be an easier way to just add /dashboard to current route
    this.router.navigate([`/family/${id}/dashboard`]);
  }

  gotoKid(kid:Kid) {

    // WARNING: snapshot safe?
    const id = this.route.snapshot.params['id'];

    this.router.navigate([`/family/${id}/kid/${kid._id}`]);
  }

}
