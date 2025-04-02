import { AfterViewInit, Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import moment from "moment";
import { AppService } from "../app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { PortionCountPage } from "../alternate-diet/portion-count/portion-count.page";
import { SelectslotPopupPage } from "../selectslot-popup/selectslot-popup.page";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.page.html",
  styleUrls: ["./view-product.page.scss"],
})
export class ViewProductPage implements OnInit, AfterViewInit {
  @Input() food: any = {};
  @Input() slot: any = "";
  @Input() from: any = "";
  @Input() mainCode: any = "";

  data: any = {};
  Math: any = Math;
  fromRoute: any = "";
  foodCode: any = "";
  isV: any = "";
  allFood: any = {};
  fromCalCounter: any = "";
  categoryType: any = "";

  portionX: any = "";
  alternativeData: any = [];
  videoUrl: any;
  streamVideo = false;
  mainFood = true;
  plandata: any;
  showIng = false;
  showMathod = false;
  loaded = false;
  gredientArray: any = [];
  instructionsArray: any = [];
  logunlog='Log Slot';
  @Output() getDietdata = new EventEmitter();

  constructor(
    private router: Router,
    private appServices: AppService,
    private _sanitizer: DomSanitizer,
    private modalCtrl: ModalController,
    private utilities: UTILITIES,
    private navCtrl: NavController,
    private storage: Storage,
    ) {}

  ngAfterViewInit(): void {
    this.fetchFood();
    this.checkPlan();
    setTimeout(() => {
      // this.data.steps = this.data?.steps?.replace(/\n/g,"<br>");
      // this.data.recipe = this.data?.recipe?.replace(/\n/g,"<br>");
      this.gredientArray = this.data?.recipe?.replace(/\:+/g, ":<br>")?.split("\n").filter(item => item.trim() !== '');
      for (let index = 0; index < this.gredientArray?.length; index++) {
        this.gredientArray[index] = this.wrapFirstWordWithBold(this.gredientArray[index]);
      }
      this.instructionsArray = this.data?.steps?.replace("\n\n", "\n")
        .replace("Step 1", "1.")
        .replace("Step 2", "2.")
        .replace("Step 3", "3.")
        .replace("Step 4", "4.")
        .replace("Step 5", "5.")
        .replace("Step 6", "6.")
        .replace("Step 7", "7.")
        .replace("Step 8", "8.")
        .replace("Step 9", "9.")
        .replace("Step 10", "10.")
        .replace("Step 11", "11.")
        .replace("Step 12", "12.")
        .replace("Step 13", "13.")
        .replace("Step 14", "14.")
        .replace("Step 15", "15.")
        .replace("Step 16", "16.")?.split(/\d+\./).filter(item => item.trim() !== '');
      console.log("DATA:---", this.data);
      if (this.data.Score === 9) {
        this.data.option = "Best";
      }
      if (this.data.Score === 6) {
        this.data.option = "Good";
      }
      if (this.data.Score === 3) {
        this.data.option = "Average";
      }
      if (this.data.Score === 1) {
        this.data.option = "Fair";
      }
      if (!this.data.Score || this.data.Score == "") {
        this.data.option = "Unverified";
      }
    }, 1000);
  }
  wrapFirstWordWithBold(text) {
    // Using regular expression to match the first word followed by ":"
    let replacedText = text.includes(':') ? text.replace(/^(.*?):\s*(.*)$/, "<span class='custom-style1'>$1</span> <span class='custom-style2'>$2</span>") : "<span class='custom-style1'>" + text + "</span><br>";
    return replacedText;
  }
  ngOnInit() {
    console.log("This is FOOD FROM LAST PAGE", this.food);
  }

  close() {
    if (this.fromRoute) {
      this.router.navigate([this.fromRoute, { refresh: new Date().getTime() }]);
    } else {
      this.modalCtrl.dismiss();
    }
  }

  checkPlan() {
    this.appServices.getOnePlan().then((res) => {
      this.plandata = res;
      let exp: any = new Date(this.plandata.planExpiryDate).getTime();
      let newDate: any = new Date().getTime();
    });
  }

  senitizedData(videoUrl) {
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  videoClick(data) {
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data);
    this.streamVideo = true;
  }

  closeVideo() {
    this.streamVideo = false;
  }
  updatedPortion=0;
  fetchFood() {
    let reqBody: any = {
      foodId: this.food._id,
      country: CONSTANTS.country,
      date: CONSTANTS.dietDate,
    };
    if (this.food?.foodSource?.toLowerCase() === "external") {
      reqBody.foodSource = "EXTERNAL";
    }
  
    this.appServices.fetchFood1(reqBody).subscribe(
      (res: any) => {
        
        console.log(res);
        this.mainFood = true;

        this.data = {
          ...res.dietItem,
       //   ...this.food,
        };
        this.data.portion = this.food.portion;
        this.data= {...this.data,itemCode:this.food.itemCode,_id:this.food._id};

        console.log("res.dietItem", this.data);
        console.log("this.food", this.food);
     
        if (!this.data.recipe && this.data?.video?.includes("http")) {
          this.data.recipe = "As per video";
        }
        if (!this.data.recipe && !this.data?.video?.includes("http")) {
          this.data.recipe = "--";
        }

        if (!this.data.steps && this.data?.video?.includes("http")) {
          this.data.steps = "As per video";
        }
        if (!this.data.steps && !this.data?.video?.includes("http")) {
          this.data.steps = "--";
        }
        this.senitizedData(this.data.video);
        console.log("1111", this.data);
        this.getOption();
        this.loaded = true;
      },
      (err) => {
        console.log("fetchFood error:", err);
        this.loaded = true;
        this.data = this.food;
      }
    );
  }

  addAlter(alter) {
    console.log(alter);
    alter.Score = Number(alter.Score);
    this.mainFood = false;
    this.data = alter;
    if (this.data.Score === 9) {
      this.data.option = "Best";
    }
    if (this.data.Score === 6) {
      this.data.option = "Good";
    }
    if (this.data.Score === 3) {
      this.data.option = "Average";
    }
    if (this.data.Score === 1) {
      this.data.option = "Fair";
    }
    if (!this.data.Score || this.data.Score == "") {
      this.data.option = "Unverified";
    }
    // if (!this.data.remark && this.data?.video.includes("http")) {
    //   this.data.remark = "As per the video";
    // }
    // if (!this.data.remark && !this.data?.video.includes("http")) {
    //   this.data.remark = "------------";
    // }
    this.senitizedData(this.data.video);
    console.log(this.data);
    this.getOption();
  }

  getOption() {
    if (this.slot) {
      this.appServices
        .getOptions(this.slot, "", "", this.data?.type)
        .then((res: any) => {
          console.log("get Option res", res);
          if (res.code === "0000") {
            this.alternativeData = res?.mealOptions[0]?.categories[0]?.food;
          }
        });
    }
  }

  async addCal(data, i) {
    debugger;
    console.log("data---", data);
    if (this.from === "search" || this.from === "recipe" || !this.slot) {
      const modal = await this.modalCtrl.create({
        component: SelectslotPopupPage,
        cssClass: "small-modal-slot",
        backdropDismiss: true,
        componentProps: {
          //data: this.couponList,
        },
      });
      await modal.present();
      const modald = await modal.onDidDismiss();
      this.slot = modald?.data?.slot;
      this.eatenStatusUpdate(data, 2, "Logged successfully");
      
    } 
  }
  gotoPremium() {
    this.modalCtrl.dismiss();
    this.navCtrl.navigateForward(["/premium-member"]);
  }

  async replaced(item) {
    const datas = {
      date: CONSTANTS.dietDate,
      slot: Number(this.slot),
      foodCodeList: [
        {
          code: item.itemCode,
          portion: item.portion,
          eaten:
            CONSTANTS.dietDate === moment(new Date()).format("DDMMYYYY")
              ? 2
              : -1,
        },
        {
          code: this.mainCode,
          portion: 0,
        },
      ],
      isUpdateDiet: true,
    };
    this.appServices.postOptionFoodList1(datas).then(
      (success: any) => {
        this.modalCtrl.dismiss("");
        this.utilities.showSuccessToast("Replaced successfully");
        console.log("Dite API called");

        // this.navCtrl.navigateForward(
        //   ["/tabs/new-diet", { refresh: new Date().getTime() }],
        //   { queryParams: { slot: Number(this.data?.slot) } }
        // );
      },
      (err) => {
        console.log("details error", err);
      }
    );
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
    
      for (let index = 0; index < item.data?.length; index++) {
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
      this.appServices.postOptionFoodList1(datas).then(
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
    //debugger;
    let datas: any = {};
    if (eaten > 0 && !this.mainFood) {//&& !this.mainFood
      datas = {
        date: CONSTANTS.dietDate,
        slot: Number(this.slot),
        foodCodeList: [
          {
            code: item?._id,
            portion: item.portion,
            eaten: 2,
          },
          {
            code: this.food?.itemCode || this.food?.code,
            portion: 0,
          },
        ],
        isUpdateDiet: true,
      };
    } else {
      datas = {
        date: CONSTANTS.dietDate,
        slot: Number(this.slot),
        foodCodeList: [
          {
            code: item?._id,
            portion: Number(item.portion),
            eaten: eaten,
          },
        ],
        isUpdateDiet: true,
      };
    }

 //   if (item.foodSource === "R" || item.foodSource === "P") {
      datas.foodCodeList[0].foodSource = item.foodSource===undefined? "internal":item.foodSource;
 //   }

    this.appServices.postOptionFoodList1(datas).then(
      (success: any) => {
        // this.todaysCalCount();
        this.utilities.showSuccessToast(status);
        console.log("247 called");
        this.data.eaten = eaten;
        this.food = this.data;
        if (this.from === "recipe") {
          localStorage.setItem(
            "eatenRecipe",
            moment(new Date()).format("MMDDYYYY")
          );
        }
         this.modalCtrl.dismiss();
        this.utilities.closeModal();
      setTimeout(()=>{
        this.navCtrl.navigateForward([
          "/new-diet",
          { refresh: new Date().getTime() },
        ]);
      },10) 
        
      
      },
      (err) => {
        console.log("details error", err);
      }
    );
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

  addRemove(type) {
    // this.isdisplayFooter.emit(true);
    let calCount = this.data?.Calories / this.data.portion;
    if (type === "add") {
      this.data.portion = Number(this.data?.portion || 0) + 0.5;
    } else {
      if (Number(this.data?.portion) !== 0.5) {
        this.data.portion = Number(this.data?.portion || 0) - 0.5;
        // this.data.portion = 0;
      }
    }
    this.data.Calories = calCount * this.data.portion;
  }
}
