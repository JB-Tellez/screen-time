import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidHomeComponent } from './kid-home.component';

describe('KidHomeComponent', () => {
  let component: KidHomeComponent;
  let fixture: ComponentFixture<KidHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
