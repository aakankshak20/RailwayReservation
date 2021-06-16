import { Component, OnInit,Output } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent implements OnInit {

  alltrain:any;
  // dataSource:any;
  constructor(private _search:SearchService, private router:Router) { }

  ngOnInit(): void {
    
    this._search.getSourceTrain().subscribe((result)=>{
      console.log(result);
      this.alltrain=result
    })
   
  }

  makereserervation(){
  this.router.navigate(['login']);
  }
}
