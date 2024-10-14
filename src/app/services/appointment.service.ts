import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private _http:HttpClient) {}


  appointmentAdd(data:any) {
    return this._http.post('http://localhost:3000/appointmentInfo', data);
  }
  getAppointment():Observable<any> {
    return this._http.get('http://localhost:3000/appointmentInfo');
  }
}
