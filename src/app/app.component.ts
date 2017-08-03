import { Store } from '@ngrx/store';
import { BackendService } from './services/backend.service';
import { Component } from '@angular/core';
import { State } from './store/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private backend:BackendService, private store:Store<State>) {}

  ngOnInit() {
    // TEMP: will move once Authorization implemented
    this.backend.getAdult(1).subscribe(adult => {
      this.store.dispatch({type:'LOAD_ADULT', payload:adult});
    });
  }
}
