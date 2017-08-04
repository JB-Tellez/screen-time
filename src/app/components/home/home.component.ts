import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../landing/navbar/navbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
