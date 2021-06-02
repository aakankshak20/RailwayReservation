import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor( private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(train: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
     
     
       "Source":train.value[''].source,
      "Destination":train.value[''].destination,
      "Train_Name":train.value[''].trainname,
      "Train_Number":train.value[''].trainnumber,
      "Passenger":train.value[''].passenger,
      "Fair":train.value[''].fare
      // "Train_Number":reservation.value[''].trainnumber
    };
    
    //send http request
    console.log(train.value['']);
    this.http.post<any>('http://localhost:2000/trainadd', body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res);
      // alert('');
      alert(`New Train Successfully Added`);
      // alert("Details are"+res[0]);
      this._router.navigate(['trainchanges']);
    });
  }

}
