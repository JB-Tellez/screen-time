import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidTimeComponent } from './kid-time.component';

describe('KidTimeComponent', () => {
  let component: KidTimeComponent;
  let fixture: ComponentFixture<KidTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
