import { TestBed } from '@angular/core/testing';

import { ObjserviceService } from './objservice.service';

describe('ObjserviceService', () => {
  let service: ObjserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
