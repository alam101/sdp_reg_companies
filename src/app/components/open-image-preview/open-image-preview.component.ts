import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { IonicModule, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/newBoarding/app.service';
import { UTILITIES } from 'src/app/newBoarding/utils/utilities';
import { NutritionComponent } from '../nutrition/nutrition.component';

@Component({
  selector: 'app-open-image-preview',
  templateUrl: './open-image-preview.component.html',
  styleUrls: ['./open-image-preview.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] 
})
export class OpenImagePreviewComponent implements OnInit {
   @Input() previewUrl: any = null;

  constructor(private appServices: AppService,private utilities: UTILITIES,private modalCtrl: ModalController) {

  }

 retakeImage() {
  this.loading=false;
    this.modalCtrl.dismiss({ confirmed: false });
  }
foodName;
noFoddMessage="Confirm your photo";
loading=false;
openHelp=false;
fullObjectfromImageScan:any;
  confirmImage() {
      this.loading=true;
    this.utilities.showLoading();
  //  this.stopCamera();
      const formData = new FormData();
    formData.append("image", this.previewUrl?.file);
    
    this.appServices.foodImageSend(formData).subscribe(
      (res: any) => {
        console.log("foodImageSend", res);
        
        this.foodName = res?.food_name?.text!==undefined?res?.food_name?.text:res?.food_name;
        if(this.foodName?.includes('no ') || this.foodName?.includes('not') || this.foodName?.includes('no food')){
          this.openHelp=true;
          this.utilities.hideLoader();
          this.loading=false;
          this.noFoddMessage = "No food item available";
          return;
        }
        this.fullObjectfromImageScan = res;
      
        if (res?.food_name?.text !== undefined) {
          this.foodDetailScanned(res?.food_name?.text);

     } else {
        this.loading=false;
       this.utilities.hideLoader();
          this.utilities.presentAlert("Something went wrong! Please try again.");
        }
      },
      (err) => {
          this.loading=false;
        this.utilities.hideLoader();
        this.utilities.presentAlert("Something went wrong! Please try again.");
      }
    );
   
  }
  foodDetail:any;
foodDetailScanned(foodName){
  this.appServices.nutritionValueScan(foodName).subscribe(
    (res: any) => {
      console.log("nutritionValueScan", res);
    //   this.isOpen = true;
     this.utilities.hideLoader();
        this.foodDetail = res;
        console.log("alam:-000",this.previewUrl.url,foodName, this.fullObjectfromImageScan,this.foodDetail);
      this.openNutritionModel(this.previewUrl.url,foodName,this.fullObjectfromImageScan,this.foodDetail);
    },
    (err) => {
       this.utilities.hideLoader();
      this.utilities.presentAlert("Something went wrong! Please try again.");
    }
  );
}
async openNutritionModel(image,foodName,imageDetail,foodDetail){
    const modal = await this.modalCtrl.create({
    component: NutritionComponent,
    componentProps: {
      items: {image,foodName,imageDetail,foodDetail,mode:'photo'}
    },
    cssClass: 'image-preview-modal'
  });

  await modal.present();
   this.loading=false;
     this.utilities.hideLoader();
     await modal.onDidDismiss();

}
    ngOnInit() {    
      console.log('Sanitized preview URL:', this.previewUrl);
    }

}
