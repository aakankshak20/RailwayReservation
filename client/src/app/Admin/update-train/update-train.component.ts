import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-train',
  templateUrl: './update-train.component.html',
  styleUrls: ['./update-train.component.css']
})
export class UpdateTrainComponent implements OnInit {
  alltrain:any;
  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(train: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
          
    const body = {
     
     //assign form values to our train fields
      "Source":train.value[''].source,
      "Destination":train.value[''].destination,
      "Train_Name":train.value[''].trainname,
      "Train_Number":train.value[''].trainnnumber,
      "Passenger":train.value[''].passenger,
      "Fair":train.value[''].fare
      // "Train_Number":reservation.value[''].trainnumber
    };
    
     
    const id=train.value[''].trainnumber;
    //send http request for updating train details 
    console.log(train.value['']);
    this.http.put<any>('http://localhost:2000/trainupdate/'+id, body, {headers:headers})
    .subscribe(res=> {
      
      console.log(res);

       alert(` Train Successfully Updated`);
       this._router.navigate(['trainchanges']);
      // alert("Details are"+res[0]);
      
    });
  }

}
