import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveWrapperComponent } from './interactive-wrapper.component';

describe('InteractiveWrapperComponent', () => {
  let component: InteractiveWrapperComponent;
  let fixture: ComponentFixture<InteractiveWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
