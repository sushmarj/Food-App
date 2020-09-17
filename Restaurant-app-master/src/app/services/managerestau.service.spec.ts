import { TestBed } from '@angular/core/testing';

import { ManagerestauService } from './managerestau.service';

describe('ManagerestauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerestauService = TestBed.get(ManagerestauService);
    expect(service).toBeTruthy();
  });
});
