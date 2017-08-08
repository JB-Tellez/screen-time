import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingListComponent } from './viewing-list.component';

describe('ViewingListComponent', () => {
  let component: ViewingListComponent;
  let fixture: ComponentFixture<ViewingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
