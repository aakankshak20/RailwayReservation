import { TestBed } from '@angular/core/testing';

import { SearchreservationService } from './searchreservation.service';

describe('SearchreservationService', () => {
  let service: SearchreservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchreservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
