import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deatails',
  templateUrl: './deatails.component.html',
  styleUrls: ['./deatails.component.css']
})
export class DeatailsComponent implements OnInit {

  
  constructor(private router:Router) {
   
  
  }
  
  
  cancel(){
    this.router.navigate(['cancelreservation'])
   
  }

  update(){
    this.router.navigate(['updatereservation'])
  }

  sourcedest(){
    this.router.navigate(['source-dest-reser'])
  }

  trainname(){
    this.router.navigate(['reservation'])
  }

  view(){
    this.router.navigate(['viewres'])
  }

  ngOnInit(): void {
  }
  
  logout() {
    
    this.router.navigate([ '/login' ]);
  }
}
