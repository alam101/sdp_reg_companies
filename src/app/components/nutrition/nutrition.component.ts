import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import moment from 'moment';
import { IonicModule, ModalController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { AppService } from "../../newBoarding/app.service";
import { UTILITIES } from 'src/app/core/utility/utilities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent implements OnInit {
  randomNumber = Number(Date.now()) * Math.random();
  @Input() items: any | null = null;
  
  portion = "1";
  unit = "pc";
  isOpen = false;
  constructor( private router:Router, private navCtrl: NavController,private appServices: AppService, private utilities: UTILITIES, private sanitizer: DomSanitizer, private navController: NavController, private modalCtrl: ModalController) {

  }
  slot: string = '';
  slots = [
    { value: '2', label: 'Breakfast' },
    { value: '3', label: 'Mid Day Snack' },
    { value: '4', label: 'Lunch' },
    { value: '6', label: 'Evening Snack' },
    { value: '7', label: 'Dinner' },
  ];
  
  mealChanged(event: any) {
    this.slot = event.detail.value;
    console.log(this.slot);

  }
  portionChanged(event: any) {
    this.portion = event.detail.value;
  }
  unitChanged(event: any) {
    this.unit = event.detail.value;
  }
  ngOnInit() {
   this.setSlotByTime();
   setInterval(() => this.setSlotByTime(), 60 * 1000);
    console.log("foodDetail", this.items);
    this.scoreRate(this.items?.foodDetail?.score === undefined ? 3 : Number(this.items?.foodDetail?.score));
  }
  closeModal() {
   // this.modalCtrl.dismiss({ close: true })
    this.navController.navigateForward(['/new-diet']).then(res=>{
          location.reload();
       },err=>{});      
  }

  logData(code) {
    const payload = { "date": moment().format("DDMMYYYY"), "slot": this.slot, "foodCodeList": 
      [{ "code": "154", "portion": this.portion, "eaten": 2, "foodSource": "EXTERNAL" }], 
      "isUpdateDiet": true, "customerId": "" };
     this.appServices.postOptionFoodList(payload).then(res=>{
      console.log("response",res);
      this.navCtrl.navigateForward([
              "/new-diet",
              { refresh: new Date().getTime() },
            ]);
     },(err)=>{
         console.log("error",err);
         this.navCtrl.navigateForward([
              "/new-diet",
              { refresh: new Date().getTime() },
            ]);
     });
  }

   setSlotByTime() {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 10) this.slot = '2';             // Till 10 am — Breakfast
    else if (hour < 13) this.slot = '3';        // 10 am – 1 pm — Mid Day Snack
    else if (hour < 15) this.slot = '4';        // 1 pm – 3 pm — Lunch
    else if (hour < 19) this.slot = '6';        // 3 pm – 7 pm — Evening Snack
    else this.slot = '7';                       // After 7 pm — Dinner
  }

  scoreLegth='10%';
  scoreRate(score){
     let index = '0%';
    switch (score) {
      case -1:
        index = '10%'; // Bad
        break;
      case 1:
        index = '30%'; // Poor
        break;
      case 3:
        index = '50%'; // Good
        break;
      case 6:
        index = '70%'; // Great
        break;
      case 9:
        index = '90%'; // Excellent
        break;
      default:
        index = '0%';
    }
    this.scoreLegth = index;
  }

  submit() {
    if (this.items?.mode === 'photo') {
      const data = {
        "food": this.items?.foodName,
        "type": "V",
        "calories": this.items?.foodDetail?.macros?.calories === undefined ? 0 : this.items?.foodDetail.macros?.calories,
        "protein": this.items?.foodDetail?.macros?.protein === undefined ? 0 : this.items?.foodDetail.macros?.protein,
        "fat": this.items?.foodDetail?.macros?.fats === undefined ? 0 : this.items?.foodDetail.macros?.fats,
        "carbs": this.items?.foodDetail?.macros?.carbs === undefined ? 0 : this.items?.foodDetail.macros?.carbs,
        "fiber": this.items?.foodDetail?.macros?.fiber === undefined ? 0 : this.items?.foodDetail.macros?.fiber,
        "slot": Number(this.slot),
        "portionUnit": this.unit,
        "portionQuantity": this.portion,
        "score": this.items?.foodDetail?.score === undefined ? 3 : Number(this.items?.foodDetail?.score),
        "date": moment().format('DDMMYYYY'),
        "id": this.items.imageDetail?._id,
        "imagePath": this.items.imageDetail?.imageUrl
      }
      this.updateFoodDetailPraveenapi(data);
    }
    else if (this.items?.mode === 'barcode') {
      const data = {
        "food": this.items?.foodName?.text,
        "type": "V",
        "calories": this.items?.foodDetail?.barcodeFoodDetail?.calories_kcal === undefined ? 0 : this.items?.foodDetail?.barcodeFoodDetail?.calories_kcal,
        "protein": this.items?.foodDetail?.barcodeFoodDetail?.protein_g === undefined ? 0 : this.items?.foodDetail?.barcodeFoodDetail?.protein_g,
        "fat": this.items?.foodDetail?.barcodeFoodDetail?.fat_g === undefined ? 0 : this.items?.foodDetail?.barcodeFoodDetail?.fat_g,
        "carbs": this.items?.foodDetail?.barcodeFoodDetail?.carbs_g === undefined ? 0 : this.items?.foodDetail?.barcodeFoodDetail?.carbs_g,
        "fiber": this.items?.foodDetail?.barcodeFoodDetail?.fiber_g === undefined ? 0 : this.items?.foodDetail?.barcodeFoodDetail?.fiber_g,
        "slot": this.slot,
        "portionUnit": this.unit,
        "portionQuantity": this.portion,
        "score": this.items?.foodDetail?.barcodeFoodDetail?.score === "" ? 3 : this.items?.foodDetail?.barcodeFoodDetail?.score,
        "date": moment().format('DDMMYYYY'),
      }
      this.updateFoodDetailPraveenapi(data);
    }
  }
  updateFoodDetailPraveenapi(data) {
    this.appServices.updateFoodDetailPraveenApi(data).then(
      (res: any) => {
        this.isOpen = false;
        console.log("updateFoodDetailPraveenApi", res);
       this.navController.navigateForward(['/new-diet']).then(res=>{
          location.reload();
       },err=>{

       });
      },
      (err) => {
        this.utilities.presentAlert("Something went wrong! Please try again.");
      }
    );
  }

  
}
