import { TestBed } from '@angular/core/testing';

import { Current.UserService } from './current.user.service';

describe('Current.UserService', () => {
  let service: Current.UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Current.UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
