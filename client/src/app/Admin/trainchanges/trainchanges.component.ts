import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainchanges',
  templateUrl: './trainchanges.component.html',
  styleUrls: ['./trainchanges.component.css']
})
export class TrainchangesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    document.body.className = "selector3";
  }

  
  AddTrain(){
    this.router.navigate(['AddTrain'])
   
  }

  UpdateTrain(){
    this.router.navigate(['UpdateTrain'])
  }

  DeleteTrain(){
    this.router.navigate(['DeleteTrain'])
  }

  SearchTrain(){
    this.router.navigate(['SearchTrains'])
  }

  
  
  logout() {
    
    this.router.navigate([ '/login' ]);
  }

  ngOnDestroy(){
    document.body.className="";
  }
}
