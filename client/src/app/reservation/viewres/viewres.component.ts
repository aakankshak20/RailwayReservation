import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-viewres',
  templateUrl: './viewres.component.html',
  styleUrls: ['./viewres.component.css']
})
export class ViewresComponent implements OnInit {

  lreservation:any;
  constructor(private http:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(reservation: NgForm){
    // const headers = new HttpHeaders()
    //       .set('Authorization', 'my-auth-token')
    //       .set('Content-Type', 'application/json');
    
    const id=reservation.value[''].id;
    // const body = {
     
    //   "Reservation_Date":reservation.value[''].resdate,
      
    // };

 const options ={
   headers: new HttpHeaders({
     'Authorization':'my-auth-token',
     'Content-Type':'application/json'
   }),
   body:{
     "Reservation_Date":reservation.value[''].id
   }
 }

    
    //send http request
    console.log(reservation.value['']);
    this.http.get('http://localhost:4000/reservation/'+id, options)
    .subscribe(res=> {
      
      console.log(res);
      // alert('');
      this.lreservation=res;
      // alert("Details are"+res[0]);
      // this._router.navigate(['details'],{})
    });
  }
  gonext(){
    this._router.navigate(['details']);
  }
}
