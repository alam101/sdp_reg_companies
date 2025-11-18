import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';
import { BarcodeFormat, DecodeHintType } from '@zxing/library';
import { AppService } from "../../newBoarding/app.service";
import { UTILITIES } from 'src/app/core/utility/utilities';
import moment from 'moment';
import { OpenImagePreviewComponent } from '../open-image-preview/open-image-preview.component';
import { ModalController, NavController } from '@ionic/angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NutritionComponent } from '../nutrition/nutrition.component';

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
  private codeReader!: BrowserMultiFormatReader;
  scannedBarcode: string | null = null;
  isOpen = false;
  mode: 'photo' | 'barcode' = 'photo';
  isSupported = 'BarcodeDetector' in window;
  barcodeDetector: any;
  constructor(private navController:NavController,private router:Router,private sanitizer: DomSanitizer,private modalCtrl: ModalController, private appServices: AppService, private utilities: UTILITIES) {
    
  }  
  async ngAfterViewInit() {
    if (this.isSupported) {
    this.barcodeDetector = new (window as any).BarcodeDetector({
      formats: ['qr_code', 'ean_13', 'code_128', 'upc_a', 'code_39', 'ean_8']
    });

  }
   
     await this.stopCamera();
     await this.startCamera();
    
  }
scanning = false;
lastDetectedTime = Date.now();
NO_DETECTION_TIMEOUT = 5000;
async startHighAccuracyScan(video: HTMLVideoElement) {
  if (this.scanning) return; // prevent double start
  this.scanning = true;

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: { ideal: "environment" },
      width: { ideal: 1920 },
      height: { ideal: 1080 }
    }
  });

  video.srcObject = stream;
try {
  await video.play();
} catch (err) {
  console.warn("Video play interrupted:", err);
}

  const scanLoop = async () => {
    if (!this.scanning || !this.isSupported) return;

    try {
      const barcodes = await this.barcodeDetector.detect(video);

      if (barcodes.length > 0) {
        console.log("Detected:", barcodes[0].rawValue);
        this.scannedBarcode = barcodes[0].rawValue;
        this.loading1=true;
          const modal = await this.modalCtrl.create({
    component: OpenImagePreviewComponent,
    componentProps: {
      previewUrl: {url:this.scannedBarcode, file:'',mode:this.mode}
    },
    cssClass: 'image-preview-modal'
  });
  await modal.present();
  // this.stopCamera();
  const { data } = await modal.onDidDismiss();

  if (data?.confirmed) {  
   //  this.openNutritionModel();
  }
  else{ 
    //scanLoop();
  }
        // 🔥 Instead of returning, we continue scanning
        // If you want to debounce detections, add delay:
        await new Promise(res => setTimeout(res, 300)); 
      }
      else{
        
      //    const now = Date.now();
      // const diff = now - this.lastDetectedTime;

      // if (diff >= this.NO_DETECTION_TIMEOUT) {
      //   console.log("❌ No barcode detected for 5 seconds — sending image…");

      //   this.startBarcodeScannerImageSend();

      //   // Reset timer after sending
      //   this.lastDetectedTime = Date.now();
      // }
        
      }

    } catch (e) {
      console.error("Detection error:", e);
    }

    requestAnimationFrame(scanLoop);
  };

  scanLoop();
}

  ngOnDestroy() {
 }
private stream: MediaStream | null = null; 
  startCamera() {
   this.scanning=false;
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        this.stream = stream;
        this.video.nativeElement.srcObject = stream;
      })
      .catch(err => console.error('Camera error:', err));
  }

  stopCamera() {
  if (this.stream) {
    this.stream.getTracks().forEach(track => track.stop());
    this.stream = null;
   this.goBack();
  }
  if (this.video?.nativeElement) {
    this.video.nativeElement.srcObject = null;
  }
}
  async toggleMode() {
    if (this.mode === 'photo') {
      // await this.stopCamera();
      this.mode = 'barcode';   
     // await this.startBarcodeScanner();
      this.startHighAccuracyScan(this.video.nativeElement);
    } else {
       this.startCamera();  
      this.mode = 'photo';
    }
   
  }

  onCaptureClick() {
    if (this.mode === 'photo') {
      this.capturePhoto();
    }
    else{
      this.startBarcodeScannerImageSend();
    }
    
    // in barcode mode, scanning happens automatically
  }
foodName="";
fullObjectfromImageScan:any;
previewUrl:any;

  async capturePhoto() {
  const video = this.video.nativeElement;
  const canvas = this.canvas.nativeElement;
  const ctx = canvas.getContext('2d')!;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to Blob
canvas.toBlob(async(blob) => {
  if (blob) {
    const file = new File([blob], "food.jpg", { type: "image/jpeg" });
   const url = URL.createObjectURL(file);
   this.previewUrl = url;

  const modal = await this.modalCtrl.create({
    component: OpenImagePreviewComponent,
    componentProps: {
      previewUrl: {url:this.previewUrl, file:file,mode:this.mode}
    },
    cssClass: 'image-preview-modal'
  });
  await modal.present();
  // this.stopCamera();
  const { data } = await modal.onDidDismiss();

  if (data?.confirmed) {  
   //  this.openNutritionModel();
  }
  else{
    console.log("this.mode",this.mode);
    
    if(this.mode==='photo'){
     this.startCamera();  
    }
    else{

    }
    
  }
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
        
     this.fromBarcodeUpdateFoodDetail(this.foodName,this.foodDetail);
    
      // this.router.navigate(["nutrition"], { queryParams: { foodName: this.foodName,foodDetail:this.foodDetail }});
    },
    (err) => {
      this.utilities.hideLoader();
      this.utilities.presentAlert("Something went wrong! Please try again.");
    }
  );
}
async openNutritionModel(){
  this.stopCamera();
}
async openNutritionModelBarCode(previewUrl,foodName,foodDetail){
  console.log("previewUrl,foodName,foodDetail", previewUrl,foodName,foodDetail);
  this.foodDetailScanned(foodName);
}

async openForBarcode(previewUrl,foodName,foodDetail){
   const modal = await this.modalCtrl.create({
    component: NutritionComponent,
    componentProps: {
      items: {previewUrl,foodName,foodDetail,mode:'barcode'}
    },
    cssClass: 'image-preview-modal'
  });

  await modal.present();
     this.utilities.hideLoader();
     await modal.onDidDismiss();
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
    
}

foodDetailForBarcode:any;
fromBarcodeUpdateFoodDetail(foodName,foodDetail){
  this.foodDetailForBarcode = foodDetail;
   const data ={
          "food":foodDetail.food,
          "type":"V",
          "calories":foodDetail?.macros?.calories===undefined?0:foodDetail.macros?.calories,
          "protein": foodDetail?.macros?.protein===undefined?0:foodDetail.macros?.protein,
          "fat":foodDetail?.macros?.fats===undefined?0:foodDetail.macros?.fats,
          "carbs":foodDetail?.macros?.carbs===undefined?0:foodDetail.macros?.carbs,
          "fiber":foodDetail?.macros?.fiber===undefined?0:foodDetail.macros?.fiber,
          "slot":this.slot,
          "portionUnit":this.unit,
          "portionQuantity": this.portion,
          "score": !foodDetail.score?0:foodDetail.score,
          "date":moment().format('DDMMYYYY'),
      }
        this.updateFoodDetailPraveenapi(data);
}

updateFoodDetailPraveenapi(data){
 this.appServices.updateFoodDetailPraveenApi(data).then(
    (res: any) => {
       this.stopScanner();
        this.loading=false;
      this.isOpen=false;
      this.utilities.hideLoader();
      this.openForBarcode(this.previewUrl,this.foodDetailForBarcode?.food,this.foodDetailForBarcode);
      console.log("updateFoodDetailPraveenApi", res);
    },
    (err) => {
       this.loading=false;
      this.utilities.hideLoader();
      this.utilities.presentAlert("Something went wrong! Please try again.");
    }
  );
}
loading=false;
async startBarcodeScanner() {
    try {
       console.log("bar code started scannig");
      // 1️⃣ Configure hints to detect multiple barcode formats
      const hints = new Map();
      const formats = [
        BarcodeFormat.CODE_128,
        BarcodeFormat.CODE_39,
        BarcodeFormat.EAN_13,
        BarcodeFormat.EAN_8,
        BarcodeFormat.UPC_A,
        BarcodeFormat.UPC_E,
        BarcodeFormat.QR_CODE,
      ];
      

      hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

      // 2️⃣ Create reader with hints
      this.codeReader = new BrowserMultiFormatReader(hints);

      // 3️⃣ Start video scanning
      const videoElement = this.video.nativeElement;
      this.controls = await this.codeReader.decodeFromVideoDevice(
        undefined,
        videoElement,
        (result, error, controls) => {
          if (result) {
            this.scannedBarcode = result.getText();
            console.log('✅ Scanned Barcode:', this.scannedBarcode);
           // controls.stop(); // stop scanning after first success
            this.loading1=true;
          }
          if (error && error.name !== 'NotFoundException') {
            console.warn('Scanning error:', error);
          }
        }
      );
      
    } catch (err) {
      console.error('Camera error:', err);
    }
  }

  stopScanner() {
    this.controls?.stop();
  }
 loading1=false;
continue(){
  this.stopScanner();
  this.loading=true;
  this.barcodeFootnoteImageSend(this.scannedBarcode);
}
async startBarcodeScannerImageSend() {
    const video = this.video.nativeElement;
  const canvas = this.canvas.nativeElement;
  const ctx = canvas.getContext('2d')!;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to Blob
  canvas.toBlob(async(blob) => {
  if (blob) {
    const file = new File([blob], "barcode.jpeg", { type: "image/jpeg" });
    const url = URL.createObjectURL(file);
    this.previewUrl = url;

  const modal = await this.modalCtrl.create({
    component: OpenImagePreviewComponent,
    componentProps: {
      previewUrl: {url:this.previewUrl, file:file,mode:this.mode}
    },
    cssClass: 'image-preview-modal'
  });
  await modal.present();
  // this.stopCamera();
  const { data } = await modal.onDidDismiss();
  if (data?.confirmed) {  
   
  }
  else{
   // this.startCamera();  
  }

  }
}, "image/jpeg", 0.9);
}
barcodeFoodDetail:any;
barCodeNumber;
barcodeFootnoteImageSend(itemNumber){ 
    this.appServices.barcodeFootnoteImageSend(itemNumber).subscribe(
      (res: any) => {
       
        console.log("barcodeFootnoteImageSend", res);      
        if(res?.product_name !== undefined){
          this.isOpen = true;
           this.barcodeFoodDetail = res;

            // this.stopCamera();
             this.openNutritionModelBarCode(this.previewUrl,res?.product_name,this.barcodeFoodDetail);          
        }else{
          this.utilities.hideLoader();
          this.utilities.presentAlert("Something went wrong! Please try again.");
        }
      },
      (err) => {
        this.utilities.hideLoader();
        this.utilities.presentAlert("Something went wrong! Please try again.");
      }
    );  
}
closePopup(){
  this.loading1=false;
 // this.startCamera();
}
  goBack() {
    // navigate back or dismiss modal
    this.stopCamera();
     this.backButton.emit(false);    
  }
}