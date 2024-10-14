import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

constructor(private _fb:FormBuilder
  ){
    this.patientForm = this._fb.group({
      fullname: '',
      email: '',
      number: '',
      dob: '',
      gender: '',
      address: '',
      occupation: '',
      emergencyContactName: '',
      emergencyPhoneNumber: '',
      doctor:'',
      insuranceProvider:'',
      insurancePolicyNumber:'',
      allergies:'',
      currentMedications:'',
      medicalHistory:'',
      pastMedical:'',
      birthCertificate:'',
      
    })
  }

  patient(){
    console.log('patient submitted successfully');
  }

}
