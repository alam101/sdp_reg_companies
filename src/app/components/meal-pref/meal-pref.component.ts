import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-pref',
  templateUrl: './meal-pref.component.html',
  styleUrls: ['./meal-pref.component.scss'],
})
export class MealPrefComponent implements OnInit,AfterViewInit {
  selectedItem:any;
  @Input() documents=[];
  @Input() slots=1;
  choice:any;
  selectedIndex: any=new Array(1);
  @Input()foodPref='Veg';
  constructor(private router:Router) { }

  ngOnInit() {
    console.log("documents", this.documents);
  this.documents = this.documents.filter(item=>{
    return (item.slots === this.slots && item.Veg_nonveg === this.foodPref)

  });
    
  }
 ngAfterViewInit(){
  
 }
 selectedPref(item){
    this.selectedItem = this.documents[item];
    
    this.choice = item;
    console.log("index", item, this.choice);
  }
  goNext(){
    localStorage.setItem("selectedItem", JSON.stringify(this.selectedItem));
    this.router.navigate(["final-boarding"]);
  }
  back(){}
}
