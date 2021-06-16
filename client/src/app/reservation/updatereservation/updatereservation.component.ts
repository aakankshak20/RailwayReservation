import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
  styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {
  public id:any;
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
      "Passenger":reservation.value[''].passenger,
      "Class":reservation.value[''].class
    
    };
    
    //send http request
    console.log(reservation.value['']);
    this.http.put<any>('http://localhost:4000/reservation/'+id, body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res);
      this.id=res._id;
      // alert('');
      alert(`Please make a note of reservation id for further operations
             Reservation ID=${res._id}  
             Total Fare  ${res.Fare}
             Date ${res.Reservation_Date}
      `);
      // alert("Details are"+res[0]);
      // this._router.navigate(['details'],)
      this.getid(this.id);
    },(error:HttpErrorResponse)=>{
      if(error.status===404){
        alert('Please Make Sure You Enter Right Reservation ID')
      }else if(error.status===500){
        alert('This Reservation Id not exists');
      }
    });
    
  }

  getid(id:any){
    this._router.navigate(['reservation/',this.id]);
  }

}
