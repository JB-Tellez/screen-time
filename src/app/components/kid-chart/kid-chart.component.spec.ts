import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidChartComponent } from './kid-chart.component';

describe('KidChartComponent', () => {
  let component: KidChartComponent;
  let fixture: ComponentFixture<KidChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
