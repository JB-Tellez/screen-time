import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { KidsLoginComponent } from './kids-login/kids-login.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }


}
