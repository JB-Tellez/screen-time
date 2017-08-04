import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDashboardComponent } from './family-dashboard.component';

describe('FamilyDashboardComponent', () => {
  let component: FamilyDashboardComponent;
  let fixture: ComponentFixture<FamilyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
