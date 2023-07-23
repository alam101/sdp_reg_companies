import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-water',
  templateUrl: './home-water.component.html',
  styleUrls: ['./home-water.component.scss'],
})
export class HomeWaterComponent implements OnInit {
@Input('currentDateIndex')currentDateIndex=0;
@Input('drankwater')drankwater=0;
@Input('totalTodaysCalories')totalTodaysCalories=0;
@Input('tolalCalories')tolalCalories=0;
@Input('habitList')habitList=[];
@Input('difference')difference="";
  constructor() { }

  ngOnInit() {}
  roundingVal(val) {
    if (isNaN(val)) {
      return 0;
    }
    return Math.round(val);
  }
  minus(){
    if(this.drankwater>0){
      this.drankwater =this.drankwater-1;
    }
  }
  plus(){
      this.drankwater =this.drankwater+1;
   }

}
