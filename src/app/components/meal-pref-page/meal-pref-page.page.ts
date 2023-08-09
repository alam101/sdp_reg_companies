import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { MealPrefComponent } from '../meal-pref/meal-pref.component';
import { ModalController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { isEmpty } from 'rxjs/operators';
import { UTILITIES } from 'src/app/core/utility/utilities';
@Component({
  selector: 'app-meal-pref-page',
  templateUrl: './meal-pref-page.page.html',
  styleUrls: ['./meal-pref-page.page.scss'],
})
export class MealPrefPagePage implements OnInit {
  choice: any = "2";
  choices:any = [{index:"2",name:"Breakfast",time:"10:00"},{index:"4",name:"Lunch",time:"13:30"},{index:"6",name:"Snacks",time:"17:00"},{index:"7",name:"Dinner",time:"19:30"}];
  choiceSelection:any;
  selectedItem:any="Veg";
  selectedItemObj:any;
  fit:any;
  foodPref="Veg";
  totalItems:any;
  constructor(private router: Router, private appServ: AppService, private navCtrl: NavController,
    private storage: Storage,private utilities:UTILITIES) {
    
  }

  ngOnInit() {
    this.getEatFitCat();
    
  }
  selectedPref(item,fit){
    this.selectedItemObj = fit;
    this.choiceSelection = item;
    localStorage.setItem("selectedItem", JSON.stringify(this.selectedItemObj));
  }
  fiterItem(){
    console.log(this.choice,this.selectedItem);
    this.totalItems = this.fit.filter(item=>{
      return (
        item.slot_id.filter(slotItem=>{
          console.log("itest", slotItem, this.selectedItem, item.Veg_nonveg, this.choice);
          return Number(slotItem) === Number(this.choice)
        }).length>0 && item.Veg_nonveg === this.selectedItem
      )
    });
    console.log(this.totalItems);
    
  }
  selectFootPref(item){
    console.log("item",item);
   this.selectedItem = item;
   this.fiterItem();
  this.foodPref=item;
   }
  selectSlot(event){
    console.log(event.target.value,this.choice);
    this.fiterItem();
  }
  getEatFitCat(){
    this.appServ.eatFit().subscribe(res=>{
      console.log("tttttttttt:-", res);
      this.fit=res.documents;
      this.totalItems=res.documents;
      this.fiterItem();
    });
  }

  postMealPref(){
    const payload={
        "slotID":this.selectedItemObj?.slot_id,
        "categoryID":this.selectedItemObj?.category_id,
        "imageId":this.selectedItemObj?.image_id
    };
    this.appServ.eatFitUpdate(payload).subscribe(res=>{
      console.log("update:-", res);
      this.storage.set("pendingPage", "/final-boarding");
      this.navCtrl.navigateForward(["final-boarding"]);
    });
  }
  goNext(){
    if(this.choiceSelection!== null &&  this.choiceSelection!== undefined){
    const filteredChoices = this.choices.filter(item=>{
      return item.index === this.choice
    })
    localStorage.setItem("slotChoice", JSON.stringify(filteredChoices[0]));
    localStorage.setItem("likeFood", this.selectedItem?.toString());
    this.postMealPref();
  }
  else{
    this.utilities.presentAlert("Please select atleast one item");
  }
  }
  back(){
    localStorage.setItem("slotChoice", "");
    localStorage.setItem("likeFood", "");
    
    this.storage.set("pendingPage", "/boarding5");
    this.router.navigate(["/boarding5"]);
  }
}
