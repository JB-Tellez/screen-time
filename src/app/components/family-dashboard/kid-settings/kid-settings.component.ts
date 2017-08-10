import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Kid } from "../../../store/model";


@Component({
  selector: 'app-kid-settings',
  templateUrl: './kid-settings.component.html',
  styleUrls: ['./kid-settings.component.css']
})
export class KidSettingsComponent implements OnInit {

  @Input() kid:Kid;
  
  myTime1 = new Date();
  
  constructor(private router:Router) {}

  ngOnInit() {
  }

}
