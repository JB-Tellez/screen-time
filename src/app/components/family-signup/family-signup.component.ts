import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-family-signup',
  templateUrl: './family-signup.component.html',
  styleUrls: ['./family-signup.component.css']
})
export class FamilySignupComponent implements OnInit {

  model = { name: '', password: '' }

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() { 
    
    this.auth.signup(this.model.name, this.model.password);

    return false;
  }
}
