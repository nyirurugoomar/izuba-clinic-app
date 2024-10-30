import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientFormComponent } from './patient-form.component';

describe('PatientFormComponent', () => {
  let component: PatientFormComponent;
  let fixture: ComponentFixture<PatientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // Ensure ReactiveFormsModule is imported for form tests
      declarations: [PatientFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with 18 controls', () => {
    const formControls = [
      'fullname', 'email', 'number', 'dob', 'gender', 'address', 'occupation',
      'emergencyContactName', 'emergencyPhoneNumber', 'doctor', 'insuranceProvider',
      'insurancePolicyNumber', 'allergies', 'currentMedications', 'medicalHistory',
      'pastMedical', 'birthCertificate', 'identificationNumber'
    ];

    formControls.forEach(control => {
      expect(component.patientForm.contains(control)).toBeTruthy();
    });
  });

  it('should mark the fullname field as required', () => {
    const fullname = component.patientForm.get('fullname');
    fullname?.setValue('');
    expect(fullname?.valid).toBeFalsy();
    expect(fullname?.hasError('required')).toBeTruthy();
  });

  it('should mark the email field as required and validate email format', () => {
    const email = component.patientForm.get('email');
    
    // Check for required
    email?.setValue('');
    expect(email?.valid).toBeFalsy();
    expect(email?.hasError('required')).toBeTruthy();

    // Check for email format
    email?.setValue('invalid-email');
    expect(email?.valid).toBeFalsy();
    expect(email?.hasError('email')).toBeTruthy();

    email?.setValue('valid@example.com');
    expect(email?.valid).toBeTruthy();
  });

  it('should validate the number field correctly', () => {
    const number = component.patientForm.get('number');

    // Empty value should be invalid
    number?.setValue('');
    expect(number?.valid).toBeFalsy();
    expect(number?.hasError('required')).toBeTruthy();

    // Valid phone number
    number?.setValue('1234567890');
    expect(number?.valid).toBeTruthy();
  });

  it('should validate the form as invalid when required fields are empty', () => {
    component.patientForm.patchValue({
      fullname: '',
      email: '',
      number: ''
    });

    expect(component.patientForm.valid).toBeFalsy();
  });

  it('should validate the form as valid when all fields are correctly filled', () => {
    component.patientForm.patchValue({
      fullname: 'John Doe',
      email: 'john.doe@example.com',
      number: '1234567890',
      dob: '1990-01-01',
      gender: 'Male',
      address: '123 Street',
      occupation: 'Engineer',
      emergencyContactName: 'Jane Doe',
      emergencyPhoneNumber: '0987654321',
      doctor: 'Dr. Smith',
      insuranceProvider: 'HealthCare Co.',
      insurancePolicyNumber: 'ABC123456',
      allergies: 'None',
      currentMedications: 'None',
      medicalHistory: 'Healthy',
      pastMedical: 'None',
      birthCertificate: '1234567890',
      identificationNumber: 'ID123456'
    });

    expect(component.patientForm.valid).toBeTruthy();
  });
});
