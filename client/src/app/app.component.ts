import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { UserService } from './services/user/user.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor( private router: Router) {}

ngOnInit() {
    
}

}
