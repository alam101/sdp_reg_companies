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
import { PortionCountPage } from "../alternate-diet/portion-count/portion-count.page";
import { ViewProductPage } from "../view-product/view-product.page";

@Component({
  selector: "app-meal-workout-c",
  templateUrl: "./meal-workout-c.page.html",
  styleUrls: ["./meal-workout-c.page.scss"],
})
export class MealWorkoutCPage implements OnInit {
  @Input() data: any = {};
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
  totalCal: number = 0;
  moment: any = moment;
  loaded = false;
  parseFloat: any = parseFloat;
  Math: any = Math;
  image_URL = "";

  currentDateIndex: any = 0;

  constructor(
    private utilities: UTILITIES,
    private storage: Storage,
    private appServices: AppService,
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController
  ) {}

  compConfig:any;
  async ngOnInit() {
this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    this.image_URL = CONSTANTS.image_URL;
    this.customerId = await this.utilities.getUserData("id");
    console.log("data::--", this.data);
    
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
    }, 500);
  }

  // addCal(data, i) {
  //   if (!this.eat) {
  //     return;
  //   }
  //   console.log("add cal called", data);
  //   this.eatenStatusUpdate(data, this.data, this.index, i);
  // }

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
    this.getDietdata.emit(CONSTANTS.dietDate);
    // if (d) {
    //   this.eatenStatusUpdate(d, 2, "Updated successfully");
    // }
  }
logged(d){
  this.remove(d, -1, "Removed successfully");
}
alternatives(data){
  //this.changed(data?.data?.updatedData);
  //this.gotoView(data?.data?.updatedData);
}
  async addCal(data, i) {
    const modal = await this.modalCtrl.create({
      component: PortionCountPage,
      cssClass: "portion_count",
      backdropDismiss: true,
      componentProps: {
        alterdata: data,
        type: "add",
      },
    });
    await modal.present();
    const modaldata = await modal.onDidDismiss();
    const d = modaldata?.data;
    if (d) {
      this.eatenStatusUpdate(d, 2, "Logged successfully");
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

  async gotoView(d) {
    if (this.disabled) {
      return;
    }
    // food-detail
    // this.navCtrl.navigateForward(["/food-detail"], {
    //   // this.navCtrl.navigateForward(["/view-product"], {
    //   queryParams: {
    //     foodCode: JSON.stringify([d]),
    //     mainCode: d._id,
    //     param: this.data?.message,
    //     portion: d.portion,
    //     slot: this.index,
    //     isV: true,
    //     category: d.category,
    //     router: this.router.url.split(";")[0],
    //   },
    // });

    const modal = await this.modalCtrl.create({
      component: ViewProductPage,
      componentProps: {
        food: d,
        router: this.router.url.split(";")[0],
        slot: this.index,
      },
    });

    modal.present();
    modal.onDidDismiss().then((res) => {
      this.getDietdata.emit(CONSTANTS.dietDate);
    });
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
            portion: 0,
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

  async eatenStatusUpdate(item, eaten, status) {
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
