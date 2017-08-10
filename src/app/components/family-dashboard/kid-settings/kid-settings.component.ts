import { CreateKidAction } from './../../../store/actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Kid, Family, State } from "../../../store/model";


@Component({
  selector: 'app-kid-settings',
  templateUrl: './kid-settings.component.html',
  styleUrls: ['./kid-settings.component.css']
})
export class KidSettingsComponent implements OnInit {

  @Input() kid:Kid;
  @Input() family:Family;

  avatars = [0,1,2,3];

  constructor(private store:Store<State>) {}

  ngOnInit() {

    this.kid = {
      _id: undefined,
      name: 'name',
      avatar: 0,
      age: 0,
      password: '',
      family: undefined,
      bedTimes: [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
      viewings: [],
      minutesPerWeek: 100,
      currentViewing: undefined
    }
  }

  submitForm(form) {
    this.kid.family = this.family;
    this.kid.avatar = ['icon_one','icon_two','icon_three','icon_four'].indexOf(form.value.avatar);
    console.log('submitForm', this.kid, form);
    this.store.dispatch(new CreateKidAction(this.kid));

  }

}
