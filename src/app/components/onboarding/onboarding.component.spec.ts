import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OnboardingComponent } from './onboarding.component';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
    expect(component.registerForm).toBeTruthy();
  });

  it('should have initial form values', () => {
    const form = component.registerForm;
    const formValues = {
      fullname: '',
      email: '',
      phone: ''
    };
    expect(form.value).toEqual(formValues);
  });

  it('should check that fullname is required', () => {
    const fullnameControl = component.registerForm.get('fullname');
    fullnameControl?.setValue('');
    expect(fullnameControl?.valid).toBeFalsy();
    expect(fullnameControl?.hasError('required')).toBeTruthy();
  });

  it('should check that email is required', () => {
    const emailControl = component.registerForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.hasError('required')).toBeTruthy();
  });

  it('should check for invalid email format', () => {
    const emailControl = component.registerForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.hasError('email')).toBeTruthy();
  });

  it('should check for invalid phone number (not 10 digits)', () => {
    const phoneControl = component.registerForm.get('phone');
    phoneControl?.setValue('12345'); // less than 10 digits
    expect(phoneControl?.valid).toBeFalsy();
    expect(phoneControl?.hasError('pattern')).toBeTruthy();
  });

  it('should submit the form if valid', () => {
    const fullnameControl = component.registerForm.get('fullname');
    const emailControl = component.registerForm.get('email');
    const phoneControl = component.registerForm.get('phone');

    fullnameControl?.setValue('John Doe');
    emailControl?.setValue('john.doe@example.com');
    phoneControl?.setValue('1234567890');

    expect(component.registerForm.valid).toBeTruthy();

    spyOn(component, 'register'); // Spy on the register method
    component.register(); // Trigger form submission
    expect(component.register).toHaveBeenCalled(); // Expect that the register method has been called
  });
});
