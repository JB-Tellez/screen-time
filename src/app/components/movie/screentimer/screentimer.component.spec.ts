import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreentimerComponent } from './screentimer.component';

describe('ScreentimerComponent', () => {
  let component: ScreentimerComponent;
  let fixture: ComponentFixture<ScreentimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreentimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreentimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
