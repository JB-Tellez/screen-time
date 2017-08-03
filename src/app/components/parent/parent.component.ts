import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { State, Adult } from '../../store/model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  adult: Adult;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      const id = params['id'];

      this.store.select('app', 'adult').subscribe((adult: Adult) => this.adult = adult);
    });
  }

  public addKid() {
    alert('add kid');
  }

}
