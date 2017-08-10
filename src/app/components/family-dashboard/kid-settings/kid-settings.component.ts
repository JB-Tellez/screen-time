import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kid-settings',
  templateUrl: './kid-settings.component.html',
  styleUrls: ['./kid-settings.component.css']
})
export class KidSettingsComponent implements OnInit {

  myTime1 = new Date();
  
  constructor(private router:Router) {}

  ngOnInit() {
  }

}
