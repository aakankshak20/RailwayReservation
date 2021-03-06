import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  constructor(private http: HttpClient , private _router:Router) { }

  ngOnInit() {
    document.body.className = "selector";
  }


  onSubmit(register: NgForm){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    
   //assign our form accepted values to our admin field
    const body = {
      "fname":register.value[''].name,
      "lname":register.value[''].lname,
      "email":register.value[''].email,
      "password":register.value[''].password
    };
    
     //send http request and passing header and body
    // console.log(register.value['']);
    this.http.post<any>('http://localhost:2000/register', body, {headers:headers})
    .subscribe(res=> {
      // console.log(res);
      if(res._id!==''){
        alert('Register successffully');
        this._router.navigate(['alogin'])
      }else{
        alert('Please make sure your details are correct')
      }
      
    },(err:HttpErrorResponse)=>{
      alert('Make sure you are enetring Email which havent used')
    });
    
  }
  ngOnDestroy(){
    document.body.className="";
  }
}