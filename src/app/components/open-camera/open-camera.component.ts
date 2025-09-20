import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';
import { BarcodeFormat, DecodeHintType } from '@zxing/library';
import { AppService } from "../../newBoarding/app.service";
import { UTILITIES } from 'src/app/core/utility/utilities';
import moment from 'moment';
@Component({
  selector: 'app-open-camera',
  templateUrl: './open-camera.component.html',
  styleUrls: ['./open-camera.component.scss'],
})
export class OpenCameraComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  @Output() backButton = new EventEmitter<boolean>();
  private scanner: BrowserMultiFormatReader | null = null;
  private controls: IScannerControls | null = null;
  isOpen = false;
  mode: 'photo' | 'barcode' = 'photo';
  
  constructor(private appServices: AppService, private utilities: UTILITIES) {
    
  }  
  ngAfterViewInit() {
    this.startCamera();
  }

  ngOnDestroy() {
 }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
      })
      .catch(err => console.error('Camera error:', err));
  }

  toggleMode() {
    if (this.mode === 'photo') {
      this.mode = 'barcode';   
    } else {
      this.mode = 'photo';
    }
    this.startCamera();  
  }

  onCaptureClick() {
    if (this.mode === 'photo') {
      this.capturePhoto();
    }
    else{
      this.startBarcodeScanner();
    }
    
    // in barcode mode, scanning happens automatically
  }
foodName="";
  capturePhoto() {
  const video = this.video.nativeElement;
  const canvas = this.canvas.nativeElement;
  const ctx = canvas.getContext('2d')!;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to Blob
canvas.toBlob((blob) => {
  if (blob) {
    const file = new File([blob], "food.jpg", { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("image", file);
    
    this.appServices.foodImageSend(formData).subscribe(
      (res: any) => {
        console.log("foodImageSend", res);
        this.foodName=res?.food_name;
        if (res?.food_name !== undefined) {
          
          this.foodDetailScanned(res?.food_name) ;
        } else {
          this.utilities.presentAlert("Something went wrong! Please try again.");
        }
      },
      (err) => {
        this.utilities.presentAlert("Something went wrong! Please try again.");
      }
    );
  }
}, "image/jpeg", 0.9);
}
foodDetail:any;
foodDetailScanned(foodName){
  this.appServices.nutritionValueScan(foodName).subscribe(
    (res: any) => {
      console.log("nutritionValueScan", res);
        this.isOpen = true;
        this.foodDetail = res;
    },
    (err) => {
      this.utilities.presentAlert("Something went wrong! Please try again.");
    }
  );
}
slot=0;
portion=0;
unit="";
submitFoodDetailForUpdate(){
  if(this.mode === 'photo'){
   const data ={
          "food":this.foodName,
          "type":"V",
          "calories":this.foodDetail?.macros?.calories===undefined?0:this.foodDetail.macros?.calories,
          "protein": this.foodDetail?.macros?.protein===undefined?0:this.foodDetail.macros?.protein,
          "fat":this.foodDetail?.macros?.fats===undefined?0:this.foodDetail.macros?.fats,
          "carbs":this.foodDetail?.macros?.carbs===undefined?0:this.foodDetail.macros?.carbs,
          "fiber":this.foodDetail?.macros?.fiber===undefined?0:this.foodDetail.macros?.fiber,
          "slot":this.slot,
          "portionUnit":this.unit,
          "portionQuantity": this.portion,
          "score": this.foodDetail?.macros?.nutri_score===undefined?0:this.foodDetail?.macros?.nutri_score,
          "date":moment().format('DDMMYYYY'),
      }
    
        this.updateFoodDetailPraveenapi(data);
    }
    else if(this.mode === 'barcode'){
        const data ={
          "food":this.foodName,
          "type":"V",
          "calories":this.barcodeFoodDetail?.calories_kcal ===undefined?0:this.barcodeFoodDetail?.calories_kcal,
          "protein": this.barcodeFoodDetail?.protein_g ===undefined?0:this.barcodeFoodDetail?.protein_g,
          "fat":this.barcodeFoodDetail?.fat_g ===undefined?0:this.barcodeFoodDetail?.fat_g,
          "carbs":this.barcodeFoodDetail?.carbs_g ===undefined?0:this.barcodeFoodDetail?.carbs_g,
          "fiber":this.barcodeFoodDetail?.fiber_g ===undefined?0:this.barcodeFoodDetail?.fiber_g,
          "slot":this.slot,
          "portionUnit":this.unit,
          "portionQuantity": this.portion,
          "score": this.barcodeFoodDetail?.nutriscore_score ===""?0:this.barcodeFoodDetail?.nutriscore_score,
          "date":moment().format('DDMMYYYY'),
      }
        this.updateFoodDetailPraveenapi(data);
    }
}
updateFoodDetailPraveenapi(data){
 this.appServices.updateFoodDetailPraveenApi(data).then(
    (res: any) => {
      console.log("updateFoodDetailPraveenApi", res);
    },
    (err) => {
      this.utilities.presentAlert("Something went wrong! Please try again.");
    }
  );
}


async startBarcodeScanner() {
    const video = this.video.nativeElement;
  const canvas = this.canvas.nativeElement;
  const ctx = canvas.getContext('2d')!;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to Blob
  canvas.toBlob((blob) => {
  if (blob) {
    const file = new File([blob], "barcode.jpeg", { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("image", file);

    this.appServices.barcodeImageSend(formData).subscribe(
      (res: any) => {
        if (res?.barcode !== undefined) {
           this.barcodeFootnoteImageSend(res?.barcode);
         
      //    this.utilities.presentAlert("barcode Image: "+ res?.barcode);
        } else {
          this.utilities.presentAlert("Error:-"+JSON.stringify(res));

        }
      },
      (err) => {
        this.utilities.presentAlert(JSON.stringify(err.error?.detail));
      }
    );
  }
}, "image/jpeg", 0.9);
}
barcodeFoodDetail:any;
barcodeFootnoteImageSend(itemNumber){ 
    this.appServices.barcodeFootnoteImageSend(itemNumber).subscribe(
      (res: any) => {
        console.log("barcodeFootnoteImageSend", res);      
        if(res?.product_name !== undefined){
          this.isOpen = true;
           this.barcodeFoodDetail = res;
          
        }else{
          this.utilities.presentAlert("Something went wrong! Please try again.");
        }
      },
      (err) => {
        this.utilities.presentAlert("Something went wrong! Please try again.");
      }
    );  
}

  goBack() {
    // navigate back or dismiss modal
     this.backButton.emit(false); 
    
  }
}