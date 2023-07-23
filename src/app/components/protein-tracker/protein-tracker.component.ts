import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-protein-tracker',
  templateUrl: './protein-tracker.component.html',
  styleUrls: ['./protein-tracker.component.scss'],
})
export class ProteinTrackerComponent implements OnInit {
@Input() protienConsumedPer=0;
@Input('currentDateIndex') currentDateIndex=0;
@Input('totalTodaysCalories')totalTodaysCalories=0;
@Input('tolalCalories')tolalCalories=0;
@Input('habitList')habitList=[];
  constructor() { }

  ngOnInit() {}
  roundingVal(val) {
    if (isNaN(val)) {
      return 0;
    }
    return Math.round(val);
  }
}
