import { TestBed } from '@angular/core/testing';

import { StudentsRecordsService } from './students-records-service';

describe('StudentsRecordsService', () => {
  let service: StudentsRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
