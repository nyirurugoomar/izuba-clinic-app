import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { FormFillGuard } from './form-fill.guard';
import { RegisterService } from '../services/register.service';
import { of } from 'rxjs';

describe('FormFillGuard', () => {
  let guard: FormFillGuard;
  let registerServiceSpy: jasmine.SpyObj<RegisterService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create spies for RegisterService and Router
    const spyRegisterService = jasmine.createSpyObj('RegisterService', ['isFormFilled']);
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        FormFillGuard,
        { provide: RegisterService, useValue: spyRegisterService },
        { provide: Router, useValue: spyRouter }
      ]
    });

    guard = TestBed.inject(FormFillGuard);
    registerServiceSpy = TestBed.inject(RegisterService) as jasmine.SpyObj<RegisterService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should allow activation if the form is filled', () => {
    registerServiceSpy.isFormFilled.and.returnValue(true);

    expect(guard.canActivate()).toBe(true);
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should block activation and redirect if the form is not filled', () => {
    registerServiceSpy.isFormFilled.and.returnValue(false);

    expect(guard.canActivate()).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
