import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
  styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {

  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(reservation: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
          const id=reservation.value[''].id;
    const body = {
     
      "Reservation_Date":reservation.value[''].resdate,
      //  "Source":reservation.value[''].source,
      //  "Destination":reservation.value[''].destination,
      // "Train_Name":reservation.value[''].trainname,
      "Passenger":reservation.value[''].passenger,
      "Class":reservation.value[''].class
      // "Train_Number":reservation.value[''].trainnumber
    };
    
    //send http request
    console.log(reservation.value['']);
    this.http.put<any>('http://localhost:4000/reservation/'+id, body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res.reserved);
      // alert('');
      alert(`Please make a note of reservation id for further operations
             Reservation ID=${res.reserved._id}  
             Total Fare  ${res.reserved.Fare}
             Date ${res.reserved.Reservation_Date}
      `);
      // alert("Details are"+res[0]);
      this._router.navigate(['details'],{})
    });
  }


}
