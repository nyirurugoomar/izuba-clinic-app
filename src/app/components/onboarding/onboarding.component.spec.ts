import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OnboardingComponent } from './onboarding.component';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

// Mock services
class MockRegisterService {
  registerPatient() {
    return of({}); // Mock an observable response
  }
  setFormFilled(status: boolean) {}
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let registerService: RegisterService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnboardingComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: RegisterService, useClass: MockRegisterService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    registerService = TestBed.inject(RegisterService);
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with three controls', () => {
    expect(component.registerForm.contains('fullname')).toBeTruthy();
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('phone')).toBeTruthy();
  });

  it('should mark the fullname field as required', () => {
    const fullname = component.registerForm.get('fullname');
    fullname?.setValue('');
    expect(fullname?.valid).toBeFalsy();
    expect(fullname?.hasError('required')).toBeTruthy();
  });

  it('should require email to be a valid format', () => {
    const email = component.registerForm.get('email');
    email?.setValue('invalid-email');
    expect(email?.valid).toBeFalsy();
    expect(email?.hasError('email')).toBeTruthy();
  });

  it('should validate phone number to be 10 digits', () => {
    const phone = component.registerForm.get('phone');
    phone?.setValue('123456'); // Invalid phone number
    expect(phone?.valid).toBeFalsy();
    expect(phone?.hasError('pattern')).toBeTruthy();

    phone?.setValue('1234567890'); // Valid phone number
    expect(phone?.valid).toBeTruthy();
  });

  it('should call register service when form is valid and submitted', () => {
    const registerSpy = spyOn(registerService, 'registerPatient').and.callThrough();
    component.registerForm.setValue({
      fullname: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890'
    });

    component.register();
    expect(registerSpy).toHaveBeenCalledWith({
      fullname: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890'
    });
    expect(router.navigate).toHaveBeenCalledWith(['/patient-form']);
  });

  it('should not submit form if invalid', () => {
    const registerSpy = spyOn(registerService, 'registerPatient').and.callThrough();
    component.registerForm.setValue({
      fullname: '',
      email: 'john@example.com',
      phone: '1234567890'
    });

    component.register();
    expect(registerSpy).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
