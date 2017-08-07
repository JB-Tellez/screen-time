import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,transition, useAnimation, state } from '@angular/animations';
import { bounceOutRight } from 'ng-animate';


@Component({
  selector: 'app-interactive-wrapper',
  templateUrl: './interactive-wrapper.component.html',
  styleUrls: ['./interactive-wrapper.component.css'],
  animations: [
    trigger('bounceOutRight', [transition('* => *', useAnimation(bounceOutRight,{
      params: { timing: 5 }
    }
    ))])
  ]
})
export class InteractiveWrapperComponent implements OnInit {

  bounceOutRight: any;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

bounceOut() {
  this.bounceOutRight = 'bounceOutRight';
}

}

