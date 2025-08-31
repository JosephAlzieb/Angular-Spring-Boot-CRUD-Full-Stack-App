import { TestBed } from '@angular/core/testing';

import { EmloyeeService } from './emloyee-service';

describe('Emloyee', () => {
  let service: EmloyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmloyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
