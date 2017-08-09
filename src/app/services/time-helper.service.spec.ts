import { TestBed, inject } from '@angular/core/testing';

import { TimeHelperService } from './time-helper.service';

describe('TimeHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeHelperService]
    });
  });

  it('should be created', inject([TimeHelperService], (service: TimeHelperService) => {
    expect(service).toBeTruthy();
  }));
});
