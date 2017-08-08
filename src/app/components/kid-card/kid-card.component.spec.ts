import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidCardComponent } from './kid-card.component';

describe('KidCardComponent', () => {
  let component: KidCardComponent;
  let fixture: ComponentFixture<KidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
