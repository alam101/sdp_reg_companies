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
  constructor(private appServices: AppService, private utilities: UTILITIES, private modalCtrl: ModalController) {

  }

  retakeImage() {
    this.loading = false;
    debugger;
    this.modalCtrl.dismiss({ confirmed: false });
  }

  foodName;
  noFoddMessage = "Confirm your photo";
  loading = false;
  openHelp = false;
  fullObjectfromImageScan: any;
  confirmImage() {

    if (this.previewUrl.mode === 'photo') {
      this.loading = true;
      this.utilities.showLoading();
      //  this.stopCamera();
      const formData = new FormData();
      formData.append("image", this.previewUrl ?.file);
      this.appServices.foodImageSend(formData).subscribe(
        (res: any) => {
          console.log("foodImageSend", res);
          this.foodName = res ?.food_name ?.text !== undefined ? res ?.food_name ?.text : res ?.food_name;
          if (this.foodName ?.includes('no ') || this.foodName ?.includes('not') || this.foodName ?.includes('no food') || this.foodName ?.includes('Unknown') || (this.foodName ?.includes('Not_Found'))) {
            this.openHelp = true;
            this.utilities.hideLoader();
            this.loading = false;
            this.noFoddMessage = "No food item available";
            return;
          }
          this.fullObjectfromImageScan = res;

          if (res ?.food_name ?.text !== undefined) {
            this.foodDetailScanned(res ?.food_name ?.text);

          } else {
            this.loading = false;
            this.utilities.hideLoader();
            this.utilities.presentAlert("Something went wrong! Please try again.");
          }
        },
        (err) => {
          this.loading = false;
          this.utilities.hideLoader();
          this.utilities.presentAlert("Something went wrong! Please try again.");
        }
      );
    }
    else if (this.previewUrl.mode !== 'photo' && this.previewUrl ?.file === '') {
      this.loading = true;
      this.barcodeFootnoteImageSend(this.previewUrl ?.url);
    }
    else {
      this.loading = true;
      // this.modalCtrl.dismiss({ confirmed: true });
      const formData = new FormData();
      formData.append("image", this.previewUrl ?.file);
      this.appServices.barcodeImageSend(formData).subscribe(
        (res: any) => {
          console.log("asdada", this.previewUrl ?.file);

          this.utilities.showLoading();
          if (res ?.barcode !== undefined) {
            this.barcodeFootnoteImageSend(res ?.barcode);
          } else {
            this.openHelp = true;
          }
        },
        (err) => {
          this.openHelp = true;
        }
      );
    }
  }


  async openNutritionModelBarCode(previewUrl, foodName, foodDetail) {
    console.log("previewUrl,foodName,foodDetail", previewUrl, foodName, foodDetail);
    // this.openNutritionModel(this.previewUrl.url,foodName,this.barcodeFoodDetail,this.foodDetail);
    this.foodDetailScannedBarcode(foodName);
  }
  barcodeFoodDetail: any;
  barCodeNumber;
  barcodeFootnoteImageSend(itemNumber) {
    this.appServices.barcodeFootnoteImageSend(itemNumber).subscribe(
      (res: any) => {

        console.log("barcodeFootnoteImageSend", res);
        if (res ?.product_name !== undefined) {
          // this.isOpen = true;
          this.barcodeFoodDetail = res;

          // this.stopCamera();
          this.openNutritionModelBarCode(this.previewUrl.url, res ?.product_name, this.barcodeFoodDetail);
        } else {
          this.utilities.hideLoader();
          this.openHelp = true;
        }
      },
      (err) => {
        this.utilities.hideLoader();
        this.openHelp = true;
      }
    );
  }
  foodDetail: any;
  foodDetailScannedBarcode(foodName) {
    // this.appServices.nutritionValueScan(foodName).subscribe(
    //   (res: any) => {
    //     console.log("nutritionValueScan", res);
    //   //   this.isOpen = true;
    //    this.utilities.hideLoader();
    //       this.foodDetail = res;
    console.log("alam barcode:-000", this.previewUrl.url, foodName, this.barcodeFoodDetail, this.foodDetail);
    this.openNutritionModel(this.previewUrl.url, this.barcodeFoodDetail ?.product_name, this.barcodeFoodDetail, this.barcodeFoodDetail);
    //   },
    //   (err) => {
    //      this.utilities.hideLoader();
    //      this.openHelp=true;
    //   }
    // );
  }
  foodDetailScanned(foodName) {
    this.appServices.nutritionValueScan(foodName).subscribe(
      (res: any) => {
        console.log("nutritionValueScan", res);
        //   this.isOpen = true;
        this.utilities.hideLoader();
        this.foodDetail = res;
        console.log("alam:-000", this.previewUrl.url, foodName, this.fullObjectfromImageScan, this.foodDetail);
        this.openNutritionModel(this.previewUrl.url, foodName, this.fullObjectfromImageScan, this.foodDetail);
      },
      (err) => {
        this.utilities.hideLoader();
        this.openHelp = true;
      }
    );
  }
  async openNutritionModel(image, foodName, imageDetail, foodDetail) {
    const modal = await this.modalCtrl.create({
      component: NutritionComponent,
      componentProps: {
        items: { image, foodName, imageDetail, foodDetail, mode: this.previewUrl.mode }
      },
      cssClass: 'nutritional-modal'
    });

    await modal.present();
    this.loading = false;
    this.utilities.hideLoader();
    await modal.onDidDismiss();

  }
  ngOnInit() {

    console.log('Sanitized preview URL:', this.previewUrl);
  }

}
