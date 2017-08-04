import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHomeComponent } from './family-home.component';

describe('FamilyHomeComponent', () => {
  let component: FamilyHomeComponent;
  let fixture: ComponentFixture<FamilyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
