import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-meal-pref-page',
  templateUrl: './meal-pref-page.page.html',
  styleUrls: ['./meal-pref-page.page.scss'],
})
export class MealPrefPagePage implements OnInit {
  choice: any;
  selectedItem:any;
  fit:any;
  constructor(private appServ: AppService) { }

  ngOnInit() {
    this.getEatFitCat();
  }
  selectFootPref(item){
  this.selectedItem = item;
  }
  getEatFitCat(){
    this.appServ.eatFit().subscribe(res=>{
      console.log(res);
      this.fit=res;
    });
  }
}
