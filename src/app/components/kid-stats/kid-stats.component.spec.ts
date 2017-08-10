import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidStatsComponent } from './kid-stats.component';

describe('KidStatsComponent', () => {
  let component: KidStatsComponent;
  let fixture: ComponentFixture<KidStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
