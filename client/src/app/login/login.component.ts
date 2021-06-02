import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // passengerModel = new Passenger('', 0,'','','','');
  
  loginUserD:any={};
  constructor( private http: HttpClient , private _router:Router) { }

  ngOnInit() {
    document.body.className = "selector2";
  }
  onSubmit(login: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
     
      "email":login.value[''].email,
      "password":login.value[''].password
    };
    
    //send http request
    console.log(login.value['']);
    this.http.post<any>('http://localhost:3000/login', body, {headers:headers})
    .subscribe(res=> {
      console.log(res);
      // if(res==401){
      //   console.log('error');
      // }
      this._router.navigate(['reservation'])
    });
  }

  register(){
    this._router.navigate(['register'])
  }
  ngOnDestroy(){
    document.body.className="";
  }
}