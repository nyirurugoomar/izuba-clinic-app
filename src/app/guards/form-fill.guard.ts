import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Injectable({
  providedIn: 'root'
})
export class FormFillGuard implements CanActivate {

  constructor(private registerService: RegisterService, 
              private router: Router
              
              ) {}

  canActivate(): boolean {
    // Check if the user has successfully filled the form
    if (this.registerService.isFormFilled()) {
      return true;  // Allow route access
    } else {
      // Redirect to onboarding if the form isn't filled
      this.router.navigate(['/']);
      return false;
    }
  }
}
