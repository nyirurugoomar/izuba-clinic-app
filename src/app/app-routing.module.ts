import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';

const routes: Routes = [
  {path: '', component:OnboardingComponent},
  {path:'patient-form', component:PatientFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
