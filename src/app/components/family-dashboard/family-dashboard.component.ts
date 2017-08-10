import { CreateKidAction } from './../../store/actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Family, Kid, Viewing } from '../../store/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-family-dashboard',
  templateUrl: './family-dashboard.component.html',
  styleUrls: ['./family-dashboard.component.css']
})
export class FamilyDashboardComponent implements OnInit {

  @ViewChild('settingsModal') public settingsModal: ModalDirective;

  family$: Observable<Family>;

  public showBedtimes: false;
  public showViewings: false;



  constructor(private route: ActivatedRoute, private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.family$ = this.store.select('app', 'family');
  }

  gotoKidSettings() {
    // this.router.navigate['/kidsettings'];

  }

  createKid() {

    const kidName = 'kid_' + Math.floor(Math.random() * 1000);

    const bedTimes = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    const viewings: Viewing[] = []; // WARNING: no viewings yet because back end errors

    let family;

    this.family$.take(1).subscribe(f => family = f).unsubscribe();

    const kid: Kid = {
      _id: undefined,
      name: kidName,
      password: 'pass',
      minutesPerWeek: 400,
      family,
      viewings,
      bedTimes,
      currentViewing: undefined
    }


    this.store.dispatch(new CreateKidAction(kid));
  }

  public showSettingsModal(): void {
    this.settingsModal.show();
  }

  public hideSettingsModal(): void {
    this.settingsModal.hide();
  }


}