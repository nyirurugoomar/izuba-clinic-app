import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {
  doctors = [
    { key: "Dr. Sarah Thompson", label: "Dr. Sarah Thompson" },
    { key: "Dr. Michael Reynolds", label: "Dr. Michael Reynolds" },
    { key: "Dr. Emily Carter", label: "Dr. Emily Carter" },
    { key: "Dr. James Whitman", label: "Dr. James Whitman" },
    
  ];

  identifications=[
    { key: "nationalID", label: "National ID" },
    { key: "passport", label: "Passport" },
    { key: "driversLicense", label: "Driver's License" },
    { key: "votersID", label: "Voter's ID" },
    { key: "socialSecurityNumber", label: "Social Security Number (SSN)" },
    { key: "taxID", label: "Tax Identification Number (TIN)" },
    { key: "studentID", label: "Student ID" },
    { key: "residentCard", label: "Resident Card" },
    { key: "militaryID", label: "Military ID" },
  ]

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      // Handle the selected file
      console.log('File selected:', file);
    }
  }

patientForm: FormGroup;

constructor(private _fb:FormBuilder,
            private _patientService: PatientService,
            private _router: Router
  ){
    this.patientForm = this._fb.group({
      fullname: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      number: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      address: ['',[Validators.required]],
      occupation: ['',[Validators.required]],
      emergencyContactName:['',[Validators.required]],
      emergencyPhoneNumber: ['',[Validators.pattern('^[0-9]{10}$')]],
      doctor:['',[Validators.required]],
      insuranceProvider:['',[Validators.required]],
      insurancePolicyNumber:['',[Validators.required]],
      allergies:['',[Validators.required]],
      currentMedications:['',[Validators.required]],
      medicalHistory:['',[Validators.required]],
      pastMedical:['',[Validators.required]],
      birthCertificate:['',[Validators.required]],
      identificationNumber:['',[Validators.required]],
      
    })
  }

  patient(){
    if(this.patientForm.value){
      this._patientService.patientInfo(this.patientForm.value).subscribe({
        next:(val:any)=>{
          alert("Patient added successfully")
          this.patientForm.reset();
          this._router.navigate(['/appointment']);
        }
      })
    }
  }

}
