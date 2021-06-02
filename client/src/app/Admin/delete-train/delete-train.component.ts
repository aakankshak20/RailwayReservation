import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-train',
  templateUrl: './delete-train.component.html',
  styleUrls: ['./delete-train.component.css']
})
export class DeleteTrainComponent implements OnInit {

  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(train: NgForm){
    // const headers = new HttpHeaders()
    //       .set('Authorization', 'my-auth-token')
    //       .set('Content-Type', 'application/json');
    
    const id=train.value[''].trainname;
    // const body = {
     
    //   "Reservation_Date":reservation.value[''].resdate,
      
    // };

 const options ={
   headers: new HttpHeaders({
     'Authorization':'my-auth-token',
     'Content-Type':'application/json'
   }),
   body:{
     "Train_Name":train.value[''].trainname
   }
 }

 const name=train.value[''].trainname;
    
    //send http request
    console.log(train.value['']);
    this.http.delete('http://localhost:2000/traindelete/'+id, options)
    .subscribe(res=> {
      
      console.log(res);
      // alert('');
      alert(`Train ${name} Successfully deleted`);
      // alert("Details are"+res[0]);
      this._router.navigate(['trainchanges'])
    });
  }

}

