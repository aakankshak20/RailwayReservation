// import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { DeatailsComponent } from './reservation/deatails/deatails.component';
import { HelpComponent } from './help/help.component';
import { UpdatereservationComponent } from './reservation/updatereservation/updatereservation.component';
import { SourceDestReserComponent } from './reservation/source-dest-reser/source-dest-reser.component';
import { CancelreservationComponent } from './reservation/cancelreservation/cancelreservation.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './Admin/adminregister/adminregister.component';
import { TrainchangesComponent } from './Admin/trainchanges/trainchanges.component';
import { TrainsearchComponent } from './Admin/trainsearch/trainsearch.component';
import { DeleteTrainComponent } from './Admin/delete-train/delete-train.component';
import { UpdateTrainComponent } from './Admin/update-train/update-train.component';
import { AddTrainComponent } from './Admin/add-train/add-train.component';
import { ReservationdetailsComponent } from './reservation/reservationdetails/reservationdetails.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'searchTrain',component:SearchTrainComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'reservation/:id',component:ReservationdetailsComponent},
  {path:'details',component:DeatailsComponent},
  {path:'help',component:HelpComponent},
  {path:'updatereservation',component:UpdatereservationComponent},
  {path:'source-dest-reser',component:SourceDestReserComponent},
  {path:'cancelreservation',component:CancelreservationComponent},
  {path:'alogin',component:AdminloginComponent},
  {path:'aregister',component:AdminregisterComponent},
  {path:'trainchanges',component:TrainchangesComponent},
  {path:'SearchTrains',component:TrainsearchComponent},
  {path:'DeleteTrain',component:DeleteTrainComponent},
  {path:'UpdateTrain',component:UpdateTrainComponent},
  {path:'AddTrain',component:AddTrainComponent},
  {path:'payment',component:PaymentComponent},
  {path:"**", component:PagenotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
                RegisterComponent,LoginComponent,SearchTrainComponent,DeatailsComponent,
                PagenotfoundComponent,HomeComponent,ReservationComponent,HelpComponent,
                CancelreservationComponent,UpdatereservationComponent,SourceDestReserComponent,
                AdminregisterComponent,AdminloginComponent,TrainchangesComponent,AddTrainComponent,
                DeleteTrainComponent,UpdateTrainComponent,TrainsearchComponent,ReservationdetailsComponent,
                PaymentComponent
]