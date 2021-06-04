import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { ReservationComponent } from '../reservation.component';
import { SearchreservationService } from 'src/app/services/searchreservation.service';

@Component({
  selector: 'app-reservationdetails',
  templateUrl: './reservationdetails.component.html',
  styleUrls: ['./reservationdetails.component.css']
})
export class ReservationdetailsComponent implements OnInit {

 public reservationID:any;
 public lreservation:any;
  constructor(private route:ActivatedRoute,private router:Router,private _search:SearchreservationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.reservationID=params.get('id');
    });
    this.reservationID=this.route.snapshot.paramMap.get('id')
  }

  more(){
    this._search.getReservation(this.reservationID).subscribe((result)=>{
      console.log(result);
      this.lreservation=result;
    })
  }

  payment(){
    this.router.navigate(['/payment']);
    console.log("Go for payment");
  }
}
