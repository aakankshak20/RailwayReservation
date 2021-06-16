import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchreservationService {

  
  constructor(private http:HttpClient) { }
  getReservation(id:any){
    return this.http.get('http://localhost:4000/reservation/'+id);
   }
}


