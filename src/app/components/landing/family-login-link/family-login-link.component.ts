import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip } from 'ng-animate/lib/flippers';



@Component({
  selector: 'app-family-login-link',
  templateUrl: './family-login-link.component.html',
  styleUrls: ['./family-login-link.component.css'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip, {
      // Set the duration to 2seconds
      //params: { timing: 2 }
    }))])
  ]
})

export class FamilyLoginLinkComponent implements OnInit {

  flip: any;

 


  constructor(private router:Router) {
    
  }

  ngOnInit() {
  }

  runAnimation(){
    console.log('Animating bastard !!!! '); 
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
