import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  MaterialModule} from './material/material.module';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
 import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
// import { ReservComponent } from './reserv/reserv.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { LoginComponent } from './components/login/login.component';
// import { CreateComponent } from './components/create/create.component';
// import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    HomeComponent,
    ReservationComponent,
    // LoginComponent,
    // CreateComponent,
    
    //  ReservComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, 
    MatInputModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [
  //   {
  //     // provide: HTTP_INTERCEPTORS,
  //     // useClass: HttpConfigInterceptor,
  //     // multi: true
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
