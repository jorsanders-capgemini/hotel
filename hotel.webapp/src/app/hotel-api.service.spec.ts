import { TestBed } from '@angular/core/testing';

import { HotelApiService } from './hotel-api.service';

describe('HotelApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelApiService = TestBed.get(HotelApiService);
    expect(service).toBeTruthy();
  });
});
