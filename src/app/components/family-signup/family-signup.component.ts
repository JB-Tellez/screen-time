import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-family-signup',
  templateUrl: './family-signup.component.html',
  styleUrls: ['./family-signup.component.css']
})
export class FamilySignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

    gotoLogin() {
    this.router.navigate(['/login']);
  }
}
