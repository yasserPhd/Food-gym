import { TestBed } from '@angular/core/testing';

import { NutrServService } from './nutr-serv.service';

describe('NutrServService', () => {
  let service: NutrServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
