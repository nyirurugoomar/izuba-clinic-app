import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import this
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    PatientFormComponent,
    DashbordComponent,
    AppointmentFormComponent,
    SuccessPageComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule, 
    MatInputModule, 
    FormsModule,
    MatFormFieldModule
    
    
    
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
