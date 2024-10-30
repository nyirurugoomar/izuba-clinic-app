import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SuccessPageComponent } from './success-page.component';
import { AppointmentService } from '../../services/appointment.service';
import { of } from 'rxjs';

describe('SuccessPageComponent', () => {
  let component: SuccessPageComponent;
  let fixture: ComponentFixture<SuccessPageComponent>;
  let appointmentService: AppointmentService;
  const mockAppointments = [
    { doctors: 'Dr. John Doe', date: '2024-10-20' },
    { doctors: 'Dr. Jane Smith', date: '2024-10-21' },
  ];

  beforeEach(async () => {
    // Mock AppointmentService
    const appointmentServiceMock = {
      getAppointment: jasmine.createSpy('getAppointment').and.returnValue(of(mockAppointments)),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SuccessPageComponent],
      providers: [{ provide: AppointmentService, useValue: appointmentServiceMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessPageComponent);
    component = fixture.componentInstance;
    appointmentService = TestBed.inject(AppointmentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAppointment and populate appointments', () => {
    component.getAppointment();
    expect(appointmentService.getAppointment).toHaveBeenCalled();
    expect(component.appointments).toEqual(mockAppointments);
  });

  // it('should display the requested appointment details', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const appointmentDetails = compiled.querySelectorAll('.flex p');
  //   expect(appointmentDetails.length).toBe(2); // Assuming two appointments in the mock data
  //   expect(appointmentDetails[0].textContent).toContain('Dr. John Doe');
  //   expect(appointmentDetails[1].textContent).toContain('2024-10-20');
  // });
});
