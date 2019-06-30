import { TestBed } from '@angular/core/testing';

import { ParliamentMembersService } from './parliament-members.service';

describe('ParliamentMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParliamentMembersService = TestBed.get(ParliamentMembersService);
    expect(service).toBeTruthy();
  });
});
