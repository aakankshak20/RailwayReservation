import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cancelreservation',
  templateUrl: './cancelreservation.component.html',
  styleUrls: ['./cancelreservation.component.css']
})
export class CancelreservationComponent implements OnInit {

  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(reservation: NgForm){
    
    const id=reservation.value[''].id;
    

 const options ={
   headers: new HttpHeaders({
     'Authorization':'my-auth-token',
     'Content-Type':'application/json'
   }),
   body:{
     "_id":reservation.value[''].id
   }
 }

    
    //send http request
    console.log(reservation.value['']);
    this.http.delete('http://localhost:4000/reservations/'+id, options)
    .subscribe(res=> {
      
      //console.log(res);
      // alert('');
      alert(`Your reservation has been deleted
      `);
      // alert("Details are"+res[0]);
      this._router.navigate(['details'],{})
    },(error:HttpErrorResponse)=>{
 alert('Make Sure You enter right reservation ID or this Reservation Id is already deleted');
    });
  }

}
