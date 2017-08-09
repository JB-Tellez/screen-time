import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,transition, useAnimation, state, style } from '@angular/animations';
import { bounceOutRight, fadeIn } from 'ng-animate';


@Component({
  selector: 'app-interactive-wrapper',
  templateUrl: './interactive-wrapper.component.html',
  styleUrls: ['./interactive-wrapper.component.css'],
  animations: [
    trigger('bounceOutRight', [
      state('on-screen', style({transform: 'translateX(0%)'})),
      state('off-screen', style({transform: 'translateX(200%)'})),
      transition('on-screen => off-screen', useAnimation(bounceOutRight,{
    }
    ))]),
  trigger('movieAnim', [
      state('on-screen', style({transform: 'translateY(0%)'})),
      state('off-screen', style({transform: 'translateY(200%)'})),
      transition('on-screen => off-screen', useAnimation(fadeIn,{
    }
    ))])
  ]
})
export class InteractiveWrapperComponent implements OnInit {

  state : string = 'on-screen';
  movieState : string = 'off-screen';
  showMovies = false;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  // startAnimation(){
  //   this.state = 'off-screen';
  // }

  // animDone() {
  //   // alert('yo');
  //   //this.state = 'off-screen';
  // }

  // startMovieAnim() {
  //   this.movieState = 'off-screen';
  // }
  
  gotoMovies() {
    // this.router.navigate(['/movies']);
    this.showMovies = true;
    

  }

}

