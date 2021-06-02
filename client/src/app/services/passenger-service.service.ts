import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router
 } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {

  private _registerUrl = 'http://localhost:3000/register';
  private _loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient,private _router:Router) { }
  registerPassenger(passenger:any){
    return this.http.post<any>(this._registerUrl,passenger)
  }

  loginPassenger(passenger:any){
    return this.http.post<any>(this._loginUrl,passenger)
  }
}



