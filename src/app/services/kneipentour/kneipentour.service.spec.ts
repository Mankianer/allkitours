import { TestBed } from '@angular/core/testing';

import { KneipentourService } from './kneipentour.service';

describe('KneipentourService', () => {
  let service: KneipentourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KneipentourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
