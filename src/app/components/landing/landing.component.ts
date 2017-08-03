import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { KidsLoginComponent } from './kids-login/kids-login.component';

//disabled --> declare const particlesJS: any;


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //disabled --> particlesJS.load('../../../assets/javascripts/particles.js', '../../../assets/particles.json', null); 
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }


}
