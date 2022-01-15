import { TestBed } from '@angular/core/testing';

import { DepEmpSharedService } from './dep-emp-shared.service';

describe('DepEmpSharedService', () => {
  let service: DepEmpSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepEmpSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
