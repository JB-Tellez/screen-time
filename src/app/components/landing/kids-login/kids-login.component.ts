import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kids-login',
  templateUrl: './kids-login.component.html',
  styleUrls: ['./kids-login.component.css']
})
export class KidsLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
