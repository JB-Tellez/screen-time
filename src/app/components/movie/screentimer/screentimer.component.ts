import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-screentimer',
  templateUrl: './screentimer.component.html',
  styleUrls: ['./screentimer.component.css']
})
export class ScreentimerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
}
