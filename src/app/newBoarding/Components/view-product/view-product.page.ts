import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import moment from "moment";
import { AppService } from "../../../home-service/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { PortionCountPage } from "../../Components/alternate-diet/portion-count/portion-count.page";
import { SelectslotPopupPage } from "../selectslot-popup/selectslot-popup.page";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.page.html",
  styleUrls: ["./view-product.page.scss"],
})
export class ViewProductPage implements OnInit {
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

  constructor(
    private router: Router,
    private appServices: AppService,
    private _sanitizer: DomSanitizer,
    private readonly modalCtrl: ModalController,
    private readonly modalCtrl1: ModalController,
    private utilities: UTILITIES,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.fetchFood();
    this.checkPlan();

    console.log("This is FOOD FROM LAST PAGE", this.food);
  }

   close() {
    
    if (this.fromRoute) {
      this.router.navigate([this.fromRoute, { refresh: new Date().getTime() }]);
    } else {
      this.modalCtrl1.dismiss({
        alterdata: {},
        type: "change",
        plan: "",
      });
      }
  }

  checkPlan() {
    this.appServices.getOnePlan().then((res) => {
      this.plandata = res;
      let exp: any = new Date(this.plandata.planExpiryDate).getTime();
      let newDate: any = new Date().getTime();
      // console.log(exp, newDate);

      // if (exp > newDate) {
      //   this.plandata.isPlanActive = true;
      // }
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

  fetchFood() {
    let reqBody: any = {
      foodId: this.food._id,
      country: CONSTANTS.country,
      date: CONSTANTS.dietDate,
    };
    if (this.food?.foodSource?.toLowerCase() === "external") {
      reqBody.foodSource = "EXTERNAL";
    }
    this.appServices.fetchFood(reqBody).subscribe(
      (res: any) => {
        console.log(res);
        this.mainFood = true;
        this.data = { ...res.dietItem, ...this.food };

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
        .getOptions(this.slot, "", "")//, this.data?.category
        .then((res: any) => {
          console.log("get Option res", res);
          if (res.code === "0000") {
            this.alternativeData = res?.mealOptions[0]?.categories[0]?.food;
          }
        });
    }
  }

  async addCal(data) {
    // console.log(this.slot);
    if (this.from === "search" || this.from === "recipe") {
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
      console.log(this.slot);
      const m = await this.modalCtrl.create({
        component: PortionCountPage,
        cssClass: "portion_count",
        backdropDismiss: true,
        componentProps: {
          alterdata: data,
          type: "add",
        },
      });
      await m.present();
      const modaldata = await m.onDidDismiss();
      const d = modaldata?.data;
      if (d) {
        console.log("i got this to add in data", d);
        this.eatenStatusUpdate(d, 2, "Logged successfully");
      }
    } else {
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
        console.log("i got this to add in data", d);
        if (this.from === "alter") {
          this.replaced(d);
        } else {
          this.eatenStatusUpdate(d, 2, "Logged successfully");
        }
      }
    }
  }
  gotoPremium() {
    this.modalCtrl1.dismiss();
    this.navCtrl.navigateForward(["/premium-member"]);
  }

  async replaced(item) {
    this.utilities.logEvent("onboarding_Counter_add_home", {});

    const datas = {
      date: CONSTANTS.dietDate,
      slot: Number(this.slot),
      foodCodeList: [
        {
          code: item.itemCode,
          portion: item.portion,
          eaten: 2,
        },
        {
          code: this.mainCode,
          portion: 0,
        },
      ],
      isUpdateDiet: true,
    };
    this.appServices.postOptionFoodList(datas).then(
      (success: any) => {
        this.modalCtrl.dismiss("");
        this.utilities.showSuccessToast("Replaced successfully");
        console.log("Dite API called");

        // this.navCtrl.navigateForward(
        //   ["/new-diet", { refresh: new Date().getTime() }],
        //   { queryParams: { slot: Number(this.data?.slot) } }
        // );
      },
      (err) => {
        console.log("details error", err);
      }
    );
  }

  async eatenStatusUpdate(item, eaten, status) {
    let datas = {};

    if (eaten > 0 && !this.mainFood) {
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

    this.appServices.postOptionFoodList(datas).then(
      (success: any) => {
        // this.todaysCalCount();
        this.utilities.showSuccessToast(success.message);
        console.log("247 called");
        this.data.eaten = eaten;
        this.food = this.data;
        if (this.from === "recipe") {
          localStorage.setItem(
            "eatenRecipe",
            moment(new Date()).format("MMDDYYYY")
          );
        }
      },
      (err) => {
        console.log("details error", err);
      }
    );
  }
}
