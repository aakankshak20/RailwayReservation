import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 
  loginUserD:any={};
  constructor( private http: HttpClient , private _router:Router) { }

  ngOnInit() {
    document.body.className = "selector3";
  }
  onSubmit(login: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
    const body = {
      //assign our form accepted values to our admin field
      "email":login.value[''].email,
      "password":login.value[''].password
    };
    
    //send http request
    console.log(login.value['']);
    this.http.post<any>('http://localhost:2000/login', body, {headers:headers})
    .subscribe(res=> {
      console.log(res);
     
        alert('Log in successfully');
        this._router.navigate(['trainchanges'])
     
     
      
    },(err:HttpErrorResponse)=>{
      alert('Make sure you Eneter right email and password');
    });
  }

  register(){
    this._router.navigate(['aregister'])
  }
  ngOnDestroy(){
    document.body.className="";
  }
}
