import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-pref',
  templateUrl: './meal-pref.component.html',
  styleUrls: ['./meal-pref.component.scss'],
})
export class MealPrefComponent implements OnInit,AfterViewInit {
  selectedItem:any;
  @Input() documents=[];
  @Input() slots;
  selectedIndex: any=new Array(1000);
  constructor() { }

  ngOnInit() {
    
    
  }
 ngAfterViewInit(){
  console.log("documents", this.documents);
 }
  selectedPref(item){
    this.selectedIndex[item]=  this.selectedIndex[item]?false:true;
  }
  goNext(){}
  back(){}
}
