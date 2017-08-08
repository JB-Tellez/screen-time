import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedtimeListComponent } from './bedtime-list.component';

describe('BedtimeListComponent', () => {
  let component: BedtimeListComponent;
  let fixture: ComponentFixture<BedtimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedtimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedtimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
