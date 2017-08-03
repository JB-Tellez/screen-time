import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip } from 'ng-animate/lib/flippers';



@Component({
  selector: 'app-kids-login',
  templateUrl: './kids-login.component.html',
  styleUrls: ['./kids-login.component.css'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip, {
      // Set the duration to 5seconds
      //params: { timing: 2 }
    }))])
  ]
})
export class KidsLoginComponent implements OnInit {

  flip: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
