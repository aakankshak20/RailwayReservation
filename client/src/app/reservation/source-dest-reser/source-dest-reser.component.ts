import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-source-dest-reser',
  templateUrl: './source-dest-reser.component.html',
  styleUrls: ['./source-dest-reser.component.css']
})
export class SourceDestReserComponent implements OnInit {
alltrain:any;
  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(reservation: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
     
      "Reservation_Date":reservation.value[''].resdate,
       "Source":reservation.value[''].source,
       "Destination":reservation.value[''].destination,
      // "Train_Name":reservation.value[''].trainname,
      "Passenger":reservation.value[''].passenger,
      "Class":reservation.value[''].class
      // "Train_Number":reservation.value[''].trainnumber
    };
    
    //send http request
    console.log(reservation.value['']);
    this.http.post<any>('http://localhost:4000/reservationsd', body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res);
     
      
      alert(`Please make a note of reservation id for further operations
             Reservation ID=${res._id}  
             Total Fare  ${res.Fare}
             Date ${res.Reservation_Date}
      `);
     
     
    });
  }

  backpage(){
  this._router.navigate(['details'])
}
}
