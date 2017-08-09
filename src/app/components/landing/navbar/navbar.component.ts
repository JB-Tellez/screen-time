import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, Family } from "../../../store/model";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private family: Family;

  constructor(private router:Router, private store:Store<State>) { }

  ngOnInit() {
    this.store.select('app', 'family').subscribe( family => this.family = family);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  gotoLanding() {
    this.router.navigate(['/']);
  }

   gotoFamilyHome() {
    this.router.navigate([`/family/${this.family._id}`]);
  }

  gotoFamilyDashboard() {
    this.router.navigate([`/family/${this.family._id}/dashboard`]);
  }
}
