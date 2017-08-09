import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidSettingsComponent } from './kid-settings.component';

describe('KidSettingsComponent', () => {
  let component: KidSettingsComponent;
  let fixture: ComponentFixture<KidSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
