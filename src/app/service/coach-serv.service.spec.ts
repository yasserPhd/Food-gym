import { TestBed } from '@angular/core/testing';

import { CoachServService } from './coach-serv.service';

describe('CoachServService', () => {
  let service: CoachServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
