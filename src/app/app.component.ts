import { LOAD_KIDS_ACTION, loadKidsAction } from './store/actions';
import { ApplicationState } from './store/application-state';
import { KidsService } from './services/kids.service';
import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // DANGER: testing
  constructor(kidsService:KidsService, store: Store<ApplicationState>) {
    kidsService.loadKids().subscribe( kids => {
      store.dispatch(new loadKidsAction(kids));
    });
  }
}
