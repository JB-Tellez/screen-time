import { TestBed, inject } from '@angular/core/testing';

import { KidsService } from './kids.service';

describe('KidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KidsService]
    });
  });

  it('should be created', inject([KidsService], (service: KidsService) => {
    expect(service).toBeTruthy();
  }));
});
