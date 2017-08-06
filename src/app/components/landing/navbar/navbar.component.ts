import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  gotoLanding() {
    this.router.navigate(['/']);
  }

  gotoKidHome() {
    this.router.navigate(['family/1/kid/1'])
  }

   gotoFamilyHome() {
    this.router.navigate(['/family/1']);
  }

  gotoFamilyDashboard() {
    this.router.navigate(['/family/1/dashboard']);
  }
}
