import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-login',
  templateUrl: './family-login.component.html',
  styleUrls: ['./family-login.component.css']
})
export class FamilyLoginComponent {

  model = { name: '', password: '' }

  constructor(private router:Router, private auth:AuthService) { }

  gotoSignup() {
    this.router.navigate(['/signup']);
  }

  onSubmit() { 
    
    this.auth.login(this.model.name, this.model.password);

    return false;
  }
}
