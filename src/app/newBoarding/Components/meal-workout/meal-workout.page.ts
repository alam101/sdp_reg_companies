import { Location } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { times } from "lodash";
import moment from "moment";
import { empty } from "rxjs";
import { AppService } from "../../../home-service/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { PortionCountPage } from "../../Components/alternate-diet/portion-count/portion-count.page";
import { ViewProductPage } from "../../Components/view-product/view-product.page";
import { BroadcastService } from "src/app/broadcast.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-meal-workout",
  templateUrl: "./meal-workout.page.html",
  styleUrls: ["./meal-workout.page.scss"],
})
export class MealWorkoutPage implements OnInit {
  @Input() data: any={};
  @Input() end_time: any = {};
  @Input() diets: any = [];
  @Input() index: any = [];
  @Input() selecteddate;
  @Input() fullShow: Boolean = false;
  @Input() eat: Boolean = false;
  @Input() plan: Boolean = false;
  @Input() showAddPopup: Boolean = false;
  @Input() from: string = "";
  @Input() disabled: Boolean = false;
  customerId: any;
  @Output() getCalData = new EventEmitter();
  @Output() getDietdata = new EventEmitter();
  @Output() isdisplayFooter=new EventEmitter<boolean>();
  totalCal: number = 0;
  moment: any = moment;
  loaded = false;
  parseFloat: any = parseFloat;
  Math: any = Math;
  image_URL = "";
  logunlog='Log Slot';
  currentDateIndex: any = 0;
  videoUrl: any;
  streamVideo = false;
  constructor(
    private utilities: UTILITIES,
    private storage: Storage,
    private appServices: AppService,
    private navCtrl: NavController,
    private router: Router,
    private _sanitizer: DomSanitizer,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private broadcastService: BroadcastService
  ) {

    if(!this.data){
    this.data= JSON.parse(localStorage.getItem("diett"));
    }
    else{
      localStorage.setItem("diett",JSON.stringify(this.data)) ;
    }
     
  }
  isFuture:any;
  compConfig:any;
  async ngOnInit() {
  
    if(Number(localStorage.getItem("currentDate"))> new Date().getTime()){
        this.isFuture=true;
    }
    
this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    this.image_URL = CONSTANTS.image_URL;
    this.customerId = await this.utilities.getUserData("id");
    this.data.data.forEach((elm) => {
      if (elm.Score === 9) {
        elm.option = "Best";
      }
      if (elm.Score === 6) {
        elm.option = "Good";
      }
      if (elm.Score === 3) {
        elm.option = "Average";
      }
      if (elm.Score === 1) {
        elm.option = "Fair";
      }
      if (elm.Score === 0 || elm.Score === -1) {
        elm.option = "Bad";
      }
      if (!elm.Score || elm.Score == "") {
        elm.option = "Unverified";
      }
      this.data.slot = this.index;
    });
    setTimeout(() => {
      this.loaded = true;
    }, 50);
  }
  senitizedData(videoUrl) {
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
   
  }
  videoClick(data) {
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data);
    this.streamVideo = true;
    this.isShow = false;
    
  }
  closeVideo(){
     this.isShow = true;
    this.streamVideo = false;
   
  }
  close(){
    this.isdisplayFooter.emit(true);
    this.isShow = false;
  }
  returnIsEaten(dataItem){
   const dt = dataItem.filter(item=>{
      return item.eaten<=0;
     })
     if(dt?.length>0){
       this.logunlog="Log Slot";
     }
     else{
       this.logunlog="Logged";
     }
     return this.logunlog;
   }
  async changed(data) {
    console.log("data111111", data);
   
    data.slot = this.index;
   
    const modal = await this.modalCtrl.create({
      component: PortionCountPage,
      cssClass: "change_item",
      backdropDismiss: true,
      componentProps: {
        alterdata: data,
        type: "change",
        plan: this.plan,
      },
    });
    await modal.present();
    const modaldata = await modal.onDidDismiss();
    const d = modaldata?.data;
    
   // this.getDietdata.emit(CONSTANTS.dietDate);
   this.broadcastService.boradcast("reload");
    // if (d) {
    //   this.eatenStatusUpdate(d, 2, "Updated successfully");
    // }
  }
logged(d){
  this.isdisplayFooter.emit(true);
  this.remove(d, -1, "Removed successfully");
}
alternatives(data){
  //this.changed(data?.data?.updatedData);
  //this.gotoView(data?.data?.updatedData);
}
addRemove(type) {
  this.isdisplayFooter.emit(true);
  let calCount = this.popup?.Calories / this.popup.portion;
  if (type === "add") {
    this.popup.portion = Number(this.popup?.portion || 0) + 0.5;
  } else {
    if (Number(this.popup?.portion) !== 0.5) {
      this.popup.portion = Number(this.popup?.portion || 0) - 0.5;
      // this.data.portion = 0;
    }
  }
  this.popup.Calories = calCount * this.popup.portion;
}
  async addCal(data, i) {
    if(this.isFuture){
      this.utilities.showErrorToast("Can not log for future dates!");
      return;
      }
    this.isdisplayFooter.emit(true);
    // const modal = await this.modalCtrl.create({
    //   component: PortionCountPage,
    //   cssClass: "portion_count",
    //   backdropDismiss: true,
    //   componentProps: {
    //     alterdata: data,
    //     type: "add",
    //   },
    // });
    // await modal.present();
    // const modaldata = await modal.onDidDismiss();
    // const d = modaldata?.data;
    console.log("xxx:--",data,i);
    
    if (data) {
      this.eatenStatusUpdate(data, 2, "Logged successfully");
    }
  }

  async loogeAction(event, d, i) {

    if (this.disabled) {
      return;
    }
    if (this.from && this.from === "alter") {
      if (d?.eaten) {
        if (d?.eaten < 0) {
          this.addCal(d, "");
        } else {
          if (d?.foodStatus === "A") {
            this.remove(d, -1, "Removed successfully");
          } else {
            this.eatenStatusUpdate(d, -1, "Un logged successfully");
          }
        }
      } else {
        this.addCal(d, "");
      }
      return;
    }

    const popover = await this.popCtrl.create({
      component: PortionCountPage,
      cssClass: "logged_popover",
      event,
      mode: "ios",
      backdropDismiss: true,
      componentProps: {
        type: "logged",
        alterdata: d,
      },
    });
    await popover.present();
    const data = await popover.onDidDismiss();
    console.log("data check:",data);
    
    if (data?.data) {
      if (data?.data?.type === "track") {
        this.addCal(data?.data?.updatedData, i);
      } else if (data?.data?.type === "unlog") {
        this.eatenStatusUpdate(
          data?.data?.updatedData,
          -1,
          "Un logged successfully"
        );
      } else if (data?.data?.type === "info") {
        this.gotoView(data?.data?.updatedData);
      } else if (data?.data?.type === "alter") {
        this.changed(data?.data?.updatedData);
      } else if (data?.data?.type === "edit") {
        this.addCal(data?.data?.updatedData, i);
      } else if (data?.data?.type === "remove") {
        data.data.updatedData.portion = 0;
        this.eatenStatusUpdate(
          data?.data?.updatedData,
          -1,
          "Removed successfully"
        );
      }
    }
  }

  gotoOption() {
    this.navCtrl.navigateForward(["/new-diet"]);
    // let code = [];
    // let portion = [];
    // let eaten = [];

    // this.data.data.forEach((element) => {
    //   code.push(element.itemCode);
    //   portion.push({
    //     id: element.itemCode,
    //     portion: element.portion,
    //     Calories: element.Calories,
    //   });
    //   if (element.eaten > 0) {
    //     eaten.push(element.itemCode);
    //   }
    // });

    // this.navCtrl.navigateForward(["alternate-diet"], {
    //   queryParams: {
    //     param: this.data.message,
    //     slot: this.index,
    //     foodCode: code,
    //     portion: JSON.stringify(portion),
    //     router: this.router.url.split(";")[0],
    //     plan: this.plan,
    //     eaten,
    //   },
    // });

    // this.navCtrl.navigateForward(["options"], {
    //   queryParams: {
    //     param: this.data.message,
    //     slot: this.index,
    //     foodCode: code,
    //     portion: portion,
    //     isV: true,
    //     router: this.router.url.split(";")[0],
    //   },
    // });
  }
  isShow=false;
  popup:any; 
  instructionsArray=[];
  gredientArray=[];
  wrapFirstWordWithBold(text) {
    // Using regular expression to match the first word followed by ":"
    let replacedText = text.includes(':')?text.replace(/^(.*?):\s*(.*)$/, "<span class='custom-style1'>$1</span> <span class='custom-style2'>$2</span>"):"<span class='custom-style1'>"+text+"</span><br>";
    return replacedText;
}
  async gotoView(d) {
    if (this.disabled) {
      return;
    }
    console.log("d",d);
    this.isdisplayFooter.emit(false);
    if (!d.recipe && d?.video?.includes("http")) {
      d.recipe = "As per video";
    }
    if (!d.recipe && !d?.video?.includes("http")) {
      d.recipe = "--";
    }

    if (!d.steps && d?.video?.includes("http")) {
      d.steps = "As per video";
    }
    if (!d.steps && !d?.video?.includes("http")) {
      d.steps = "--";
    }
   this.popup = d; 
   this.senitizedData(d.video);
   this.gredientArray = this.popup.recipe.replace(/\:+/g, ":<br>").split("\n").filter(item => item.trim() !== '');

   for (let index = 0; index < this.gredientArray.length; index++) {
    this.gredientArray[index] = this.wrapFirstWordWithBold(this.gredientArray[index]);
    
   }
   console.log("this.gredientArray",this.gredientArray);

   this.instructionsArray = this.popup.steps.replace("\n\n","\n")
   .replace("Step 1","1.")
   .replace("Step 2","2.")
   .replace("Step 3","3.")
   .replace("Step 4","4.")
   .replace("Step 5","5.")
   .replace("Step 6","6.")
   .replace("Step 7","7.")
   .replace("Step 8","8.")
   .replace("Step 9","9.")
   .replace("Step 10","10.")
   .replace("Step 11","11.")
   .replace("Step 12","12.")
   .replace("Step 13","13.")
   .replace("Step 14","14.")
   .replace("Step 15","15.")
   .replace("Step 16","16.").split(/\d+\./).filter(item => item.trim() !== '');
    this.isShow=true;
    
  }

  logSlot(d,index){ 
    if(this.isFuture){
      this.utilities.showErrorToast("Can not Log for future dates!");
    return;
    }
    this.eatenStatusUpdate1(d,index);
  }
  async remove(item, eaten, status) {
    if (this.currentDateIndex == 0) {
      let foodCodeList = [];
      this.utilities.logEvent("onboarding_Counter_add_home", {});

      const datas = {
        date: CONSTANTS.dietDate,
        slot: Number(this.data?.slot),
        foodCodeList: [
          {
            code: item.itemCode,
            portion: item.portion,
            eaten: eaten,
          },
        ],
        isUpdateDiet: true,
      };
      this.utilities.logEvent("onboarding_update_food_details", datas);
      // this.appServices.updateEatenFoodItems(data).then(
      this.appServices.postOptionFoodList(datas).then(
        (success: any) => {
          this.getDietdata.emit(CONSTANTS.dietDate);
          this.utilities.showSuccessToast(status);
          // this.todaysCalCount();
          console.log("247 called");
        },
        (err) => {
          console.log("details error", err);
        }
      );
    }
  }

  async eatenStatusUpdate1(item,slot) {
   
    console.log("fffdd:-----",CONSTANTS.dietDate,moment(new Date()).format("DDMMYYYY"));
    
     if(CONSTANTS.dietDate !== moment(new Date()).format("DDMMYYYY")){
     setTimeout(()=>{ this.utilities.showErrorToast("Can not Log for future dates!");
    },0);
    }
    else{ 
      let foodCodeList = [];
        let dataTotal = [];
      this.utilities.logEvent("onboarding_Counter_add_home", {});
    
      for (let index = 0; index < item.data.length; index++) {
        dataTotal.push(
          {
            code: item.data[index].itemCode,
            portion: Number(item.data[index].portion),
            eaten: this.logunlog ==='Log Slot'? 2: -1,
            foodSource: "internal"
          }
        )
      }
      const datas = {
        date: CONSTANTS.dietDate,
        slot: Number(slot),
        foodCodeList: dataTotal,
        isUpdateDiet: true,
      };
      this.utilities.logEvent("onboarding_update_food_details", datas);
      // this.appServices.updateEatenFoodItems(data).then(
      this.appServices.postOptionFoodList(datas).then(
        (success: any) => {
          this.getDietdata.emit(CONSTANTS.dietDate);
          this.utilities.showSuccessToast(status);
           this.todaysCalCount();
           this.logunlog = this.logunlog==='Log Slot'? "Logged": "Log Slot";
         // this.getDietdata(CONSTANTS.dietDate);
        //  console.log("");
        },
        (err) => {
          console.log("details error", err);
        }
      );
   
    }
  }
  async eatenStatusUpdate(item, eaten, status) {
   
    console.log("fffdd:-----",CONSTANTS.dietDate,moment(new Date()).format("DDMMYYYY"));
    
     if(CONSTANTS.dietDate !== moment(new Date()).format("DDMMYYYY")){
     setTimeout(()=>{ this.utilities.showErrorToast("Can not Log for future dates!");
    },0);
    }
    else{ 
    if (this.currentDateIndex == 0) {
      let foodCodeList = [];
      this.utilities.logEvent("onboarding_Counter_add_home", {});

      const datas = {
        date: CONSTANTS.dietDate,
        slot: Number(this.data?.slot),
        foodCodeList: [
          {
            code: item.itemCode,
            portion: Number(item.portion),
            eaten: eaten,
            foodSource: "internal"
          },
        ],
        isUpdateDiet: true,
      };
      this.utilities.logEvent("onboarding_update_food_details", datas);
      // this.appServices.updateEatenFoodItems(data).then(
      this.appServices.postOptionFoodList(datas).then(
        (success: any) => {
         // this.getDietdata.emit(CONSTANTS.dietDate);
         // this.utilities.showSuccessToast(status);
         // this.broadcastService.boradcast("reload");
         this.getDietdata.emit(CONSTANTS.dietDate);
          // this.todaysCalCount();
          console.log("247 called");
        },
        (err) => {
          console.log("details error", err);
        }
      );
    }
    }
  }

  todaysCalCount() {
    // this.totalTodaysCalories = 0;
    let totalTodaysCalories = 0;
    this.storage.get("dietData").then((res) => {
      let dietPlan = CONSTANTS.isDetox ? "detox" : CONSTANTS.selectedDietPlan;
      if (
        res &&
        res[moment(new Date()).format("DDMMYYYY")] &&
        res[moment(new Date()).format("DDMMYYYY")][dietPlan]
      ) {
        let dietData = res[moment(new Date()).format("DDMMYYYY")][dietPlan];
        dietData.diets.forEach((ele) => {
          let slotCalories = 0;
          ele.data.forEach((ele1) => {
            if (ele1.eaten > 0) {
              totalTodaysCalories = totalTodaysCalories + ele1["Calories"];
            }
          });
        });
        // this.totalTodaysCalories = Math.round(totalTodaysCalories);
        // this.totalTodaysCaloriesPerc = Math.round(
        //   (totalTodaysCalories * 100) / dietData["recomended"]
        // );
        // this.totalCaloriesPer = dietData["totalCaloriesPer"];
        // this.tolalCalories = dietData["tolalCalories"];
      }
    });
  }
}
