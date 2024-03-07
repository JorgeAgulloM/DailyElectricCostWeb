import { TestBed } from '@angular/core/testing';

import { CommonActionsService } from './common-actions.service';

describe('CommonActionsService', () => {
  let service: CommonActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
