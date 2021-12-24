import { TestBed } from '@angular/core/testing';

import { AthleteServService } from './athlete-serv.service';

describe('AthleteServService', () => {
  let service: AthleteServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
