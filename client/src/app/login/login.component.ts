import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Passenger } from '../passenger';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passengerModel = new Passenger('', 0,'','','','');
  
  constructor() { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    console.log(form);
  }
}
