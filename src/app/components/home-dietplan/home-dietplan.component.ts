import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dietplan',
  templateUrl: './home-dietplan.component.html',
  styleUrls: ['./home-dietplan.component.scss'],
})
export class HomeDietplanComponent implements OnInit {
@Input()isDetox=false;
@Input()suggestedCalories: any = {
  totalCalories: 0,
  recomended: 0,
  totalCarbs: 0,
  totalCarbsPer: 0,
  totalFat: 0,
  totalFatPer: 0,
  totalFiber: 0,
  totalFiberPer: 0,
  totalProtien: 0,
  totalProtienPer: 0,
  minus10: 0,
  plus10: 0,
  minus1010: 0
};
@Input() selectedDietPlan; 
@Input() isAnalysisPageVisited=false;
@Input() detoxMaxValue;
@Input() selectedThemeColor = '';
@Input() detoxThemeColor=this.selectedThemeColor;
  constructor() { }

  ngOnInit() {}
  roundingVal(val) {
    if (isNaN(val)) {
      return 0;
    }
    return Math.round(val);
  }
}
