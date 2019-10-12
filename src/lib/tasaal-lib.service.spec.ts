import { TestBed } from '@angular/core/testing';

import { TasaalLibService } from './tasaal-lib.service';

describe('TasaalLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasaalLibService = TestBed.get(TasaalLibService);
    expect(service).toBeTruthy();
  });
});
