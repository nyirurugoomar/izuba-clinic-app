import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  doctors = [
    { key: "Dr. Sarah Thompson", label: "Dr. Sarah Thompson" },
    { key: "Dr. Michael Reynolds", label: "Dr. Michael Reynolds" },
    { key: "Dr. Emily Carter", label: "Dr. Emily Carter" },
    { key: "Dr. James Whitman", label: "Dr. James Whitman" },
  ];

  appointmentForm :FormGroup

  constructor(private _fb: FormBuilder,
              private _appointmentService: AppointmentService,
              private _router:Router,
    ){
      this.appointmentForm = this._fb.group({
        doctors: ['',[Validators.required]],
        reasonAppointment:['',[Validators.required]],
        additionComment:[''],
        date:''
      })
    }


    appointment(){
     if(this.appointmentForm.value){
      this._appointmentService.appointmentAdd(this.appointmentForm.value).subscribe({
        next:(val:any)=>{
          alert("Appointment scheduled successfully")
          this.appointmentForm.reset();
          this._router.navigate(['/success']);
        }
      })
     }
    }
}
