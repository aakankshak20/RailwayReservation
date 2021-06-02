import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { Console } from 'console';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  
  constructor( private http: HttpClient , private _router:Router) { }

  ngOnInit() {
    document.body.className = "selector2";
  }
  onSubmit(reservation: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
     
      "Reservation_Date":reservation.value[''].resdate,
      // "Source":reservation.value[''].source,
      // "Destination":reservation.value[''].destination,
      "Train_Name":reservation.value[''].trainname,
      "Passenger":reservation.value[''].passenger,
      "Class":reservation.value[''].class
      // "Train_Number":reservation.value[''].trainnumber
    };
    
    //send http request
    console.log(reservation.value['']);
    this.http.post<any>('http://localhost:4000/reservation', body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res);
      // alert('');
      alert(`Please make a note of reservation id for further operations
             Reservation ID=${res._id}  
             Total Fare  ${res.Fare}
             Date ${res.Reservation_Date}
      `);
      // alert("Details are"+res[0]);
      this._router.navigate(['home'],{})
    });
  }

  
  ngOnDestroy(){
    document.body.className="";
  }
}
