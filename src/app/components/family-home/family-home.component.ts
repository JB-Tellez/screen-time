import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-home',
  templateUrl: './family-home.component.html',
  styleUrls: ['./family-home.component.css']
})
export class FamilyHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoFamilyDashboard() {
    this.router.navigate(['/family/1/dashboard']);
  }

  gotoKidHome() {
    this.router.navigate(['family/1/kid/1'])
  }


}
