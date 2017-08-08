import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from "../../store/model";
import { NavbarComponent } from '../landing/navbar/navbar.component';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-kid-home',
  templateUrl: './kid-home.component.html',
  styleUrls: ['./kid-home.component.css']
})

export class KidHomeComponent implements OnInit {

  currentComponent = "movies"

  public kid$;

  constructor(private router:Router, private store:Store<State>) { }

  ngOnInit() {
    this.kid$ = this.store.select('app','kid');
  }

  gotoMovies() {
    this.router.navigate(['/movies']);
  }

  gotoKidTime() {
    this.router.navigate(['/kid-time']);
  }

  gotoParentSettings() {
    this.router.navigate(['/parent-settings']);
  }
 
}

