import { TestBed } from '@angular/core/testing';

import { FirmadigitalService } from './firmadigital.service';

describe('FirmadigitalService', () => {
  let service: FirmadigitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirmadigitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
