import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.css'
})
export class SuccessPageComponent implements OnInit {

  appointments: any[] = [];

  

  constructor(private _appointmentService: AppointmentService,){}

  ngOnInit(): void {
    this.getAppointment()
  }

  getAppointment() {
    this._appointmentService.getAppointment().subscribe({
      next:(res) =>{
        this.appointments = res;
        console.log(this.appointments);
      },
      error:(err) => console.log(err)
    })
    
  
  }
   
}
