import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { formFillGuard } from './form-fill.guard';

describe('formFillGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formFillGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
