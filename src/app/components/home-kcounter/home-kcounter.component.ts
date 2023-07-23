import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-kcounter',
  templateUrl: './home-kcounter.component.html',
  styleUrls: ['./home-kcounter.component.scss'],
})
export class HomeKcounterComponent implements OnInit {
@Input('currentDateIndex') currentDateIndex=0;
@Input('totalTodaysCaloriesPerc') totalTodaysCaloriesPerc=0;
@Input('tolalCalories') tolalCalories=0;
@Input('habitList') habitList=[];
@Input()totalTodaysCalories=0;
  constructor() { 
    console.log("currentDateIndex",this.currentDateIndex);
    
  }

  ngOnInit() {
   
  }
  roundingVal(val) {
    if (isNaN(val)) {
      return 0;
    }
    return Math.round(val);
  }
}
