import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {

  registerForm: FormGroup

  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private _router: Router
    ){
      this.registerForm = this.fb.group({
        fullname: ['',[Validators.required, Validators.minLength(3)]],
        email:['',[Validators.required, Validators.email]],
        phone:['',[Validators.required, Validators.pattern('^[0-9]{10}$')]]
      });
    
}
register(){
  if(this.registerForm.valid){
    this.registerService.registerPatient(this.registerForm.value).subscribe({
      next:(val:any)=>{
        alert("Patient registration")
        this.registerForm.reset();
        this.registerService.setFormFilled(true);
        this._router.navigate(['patient-form']);

      }
    })
  }
}
}
