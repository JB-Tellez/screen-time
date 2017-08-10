import { CreateKidAction, KidSelectedAction } from './../../store/actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Family, Kid, Viewing } from '../../store/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-family-dashboard',
  templateUrl: './family-dashboard.component.html',
  styleUrls: ['./family-dashboard.component.css'],
})
export class FamilyDashboardComponent implements OnInit {

  @ViewChild('settingsModal') public settingsModal: ModalDirective;

  family$: Observable<Family>;
  kid$: Observable<Kid>;

  public showBedtimes: false;
  public showViewings: false;



  constructor(private route: ActivatedRoute, private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.family$ = this.store.select('app', 'family');
    this.kid$ = this.store.select('app', 'kid');
  }

  kidSelected(kid: Kid) {
    console.log('kidSelected', kid);
    this.store.dispatch(new KidSelectedAction(kid));
    this.showSettingsModal();
  }

  gotoKidSettings() {
    // this.router.navigate['/kidsettings'];
    // this.showSettingsModal();

  }

  createKid() {
    this.showSettingsModal();
  }


  public showSettingsModal(): void {
    this.settingsModal.show();
  }

  public hideSettingsModal(): void {
    this.settingsModal.hide();
  }


}