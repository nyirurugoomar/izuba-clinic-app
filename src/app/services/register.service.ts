import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private formFilled: boolean = false;

  constructor(private http: HttpClient) {}

  registerPatient(formData: any) {
    return this.http.post('http://localhost:3000/register', formData);
  }

  setFormFilled(status: boolean) {
    this.formFilled = status;
  }

  isFormFilled(): boolean {
    return this.formFilled;
  }
}
