import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { FormFillGuard } from './guards/form-fill.guard';

const routes: Routes = [
  {path: '', component:OnboardingComponent},
  {path:'patient-form', component:PatientFormComponent,canActivate: [FormFillGuard]},
  {path:'dashboard', component:DashbordComponent},
  {path:'appointment', component:AppointmentFormComponent,canActivate: [FormFillGuard]},
  {path:'success', component:SuccessPageComponent,canActivate: [FormFillGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
