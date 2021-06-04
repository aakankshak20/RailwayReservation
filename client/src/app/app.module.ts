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
import { DeatailsComponent } from './reservation/deatails/deatails.component';
import { HelpComponent } from './help/help.component';
import { CancelreservationComponent } from './reservation/cancelreservation/cancelreservation.component';
import { UpdatereservationComponent } from './reservation/updatereservation/updatereservation.component';
import { SourceDestReserComponent } from './reservation/source-dest-reser/source-dest-reser.component';
// import { RegisterComponent } from './admin/register/register.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './Admin/adminregister/adminregister.component';
import { TrainchangesComponent } from './Admin/trainchanges/trainchanges.component';
import { AddTrainComponent } from './Admin/add-train/add-train.component';
import { UpdateTrainComponent } from './Admin/update-train/update-train.component';
import { DeleteTrainComponent } from './Admin/delete-train/delete-train.component';
import { TrainsearchComponent } from './Admin/trainsearch/trainsearch.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationdetailsComponent } from './reservation/reservationdetails/reservationdetails.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    HomeComponent,
    ReservationComponent,
    DeatailsComponent,
    HelpComponent,
    CancelreservationComponent,
    UpdatereservationComponent,
    SourceDestReserComponent,
    
    // CreateComponent,
    // RegisterComponent,
    AdminloginComponent,
    AdminregisterComponent,
    TrainchangesComponent,
    AddTrainComponent,
    UpdateTrainComponent,
    DeleteTrainComponent,
    TrainsearchComponent,
    FooterComponent,
    ReservationdetailsComponent,
    PaymentComponent,
    
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
