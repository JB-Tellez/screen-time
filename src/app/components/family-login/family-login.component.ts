import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-family-login',
  templateUrl: './family-login.component.html',
  styleUrls: ['./family-login.component.css']
})
export class FamilyLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoSignup() {
    this.router.navigate(['/signup']);
  }

  gotoFamilyHome() {
    this.router.navigate(['/family/1']);
  }
  

}
