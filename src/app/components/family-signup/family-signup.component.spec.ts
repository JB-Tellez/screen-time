import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySignupComponent } from './family-signup.component';

describe('FamilySignupComponent', () => {
  let component: FamilySignupComponent;
  let fixture: ComponentFixture<FamilySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
