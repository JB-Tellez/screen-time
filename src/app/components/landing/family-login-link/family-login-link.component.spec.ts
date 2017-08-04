import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsLoginComponent } from './kids-login.component';

describe('KidsLoginComponent', () => {
  let component: KidsLoginComponent;
  let fixture: ComponentFixture<KidsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
