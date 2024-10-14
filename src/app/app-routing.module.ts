import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

const routes: Routes = [
  {path: '', component:OnboardingComponent},
  {path:'patient-form', component:PatientFormComponent},
  {path:'dashboard', component:DashbordComponent},
  {path:'appointment', component:AppointmentFormComponent},
  {path:'success', component:SuccessPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
