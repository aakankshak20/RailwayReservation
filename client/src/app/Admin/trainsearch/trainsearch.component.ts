import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trainsearch',
  templateUrl: './trainsearch.component.html',
  styleUrls: ['./trainsearch.component.css']
})
export class TrainsearchComponent implements OnInit {
alltrain:any;
  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(reservation: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
  
    const name=reservation.value[''].trainname
    //send http request for getting train with train name
     console.log(reservation.value['']);
  this.http.get<any>('http://localhost:2000/trainname/'+name,  {headers:headers})
    .subscribe(res=> {
      
      console.log(res[0]._id);
      this.alltrain= res;
    
    });
   
}

gonext(){
  this._router.navigate(['trainchanges'])
}
}