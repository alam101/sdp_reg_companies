import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import moment from 'moment';
import { IonicModule, ModalController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { AppService } from "../../newBoarding/app.service";
import { UTILITIES } from 'src/app/core/utility/utilities';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent implements OnInit {
  randomNumber = Number(Date.now()) * Math.random();
  @Input() items: any | null = null;
  slot = "5";
  portion = "1";
  unit = "pc";
  isOpen = false;
  constructor( private navCtrl: NavController,private appServices: AppService, private utilities: UTILITIES, private sanitizer: DomSanitizer, private navController: NavController, private modalCtrl: ModalController) {

  }
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
    if(this.items?.image){
    localStorage.setItem('photoImage',this.items?.image);
    }
    console.log("foodDetail", this.items);

  }
  closeModal() {
    this.modalCtrl.dismiss({ close: true });

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

  submit() {
    if (this.items?.mode === 'photo') {
      const data = {
        "food": this.items?.foodName?.text,
        "type": "V",
        "calories": this.items?.foodDetail?.macros?.calories === undefined ? 0 : this.items?.foodDetail.macros?.calories,
        "protein": this.items?.foodDetail?.macros?.protein === undefined ? 0 : this.items?.foodDetail.macros?.protein,
        "fat": this.items?.foodDetail?.macros?.fats === undefined ? 0 : this.items?.foodDetail.macros?.fats,
        "carbs": this.items?.foodDetail?.macros?.carbs === undefined ? 0 : this.items?.foodDetail.macros?.carbs,
        "fiber": this.items?.foodDetail?.macros?.fiber === undefined ? 0 : this.items?.foodDetail.macros?.fiber,
        "slot": Number(this.slot),
        "portionUnit": this.unit,
        "portionQuantity": this.portion,
        "score": this.items?.foodDetail?.macros?.nutri_score === undefined ? 3 : this.items?.foodDetail?.macros?.nutri_score,
        "date": moment().format('DDMMYYYY'),
       // "id": new Date().getTime(),
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
        "score": this.items?.foodDetail?.barcodeFoodDetail?.nutriscore_score === "" ? 3 : this.items?.foodDetail?.barcodeFoodDetail?.nutriscore_score,
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
