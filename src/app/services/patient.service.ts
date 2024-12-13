import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _http:HttpClient) {}


  patientInfo(data:any):Observable<any>{
    return this._http.post('http://localhost:3004/patient-info', data);
  }
}
