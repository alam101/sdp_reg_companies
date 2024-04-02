import { Location } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";

import moment from "moment";
import { empty } from "rxjs";
import { AppService } from "src/app/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { PortionCountPage } from "../alternate-diet/portion-count/portion-count.page";
import { SearchPage } from "../search/search.page";

@Component({
  selector: "app-alternate-search",
  templateUrl: "./alternate-search.page.html",
  styleUrls: ["./alternate-search.page.scss"],
})
export class AlternateSearchPage implements OnInit {
  // @Input() data: any = {};
  // @Input() plan: Boolean = false;
  // customerId: any;
  // @Output() getCalData = new EventEmitter();
  //@Output() getDietdata = new EventEmitter();
  totalCal: number = 0;
  moment: any = moment;
  loaded = true;
  optionOpened = true;

  paramsData: any;
  alternativeData: any = [];

  currentDateIndex: any = 0;

  diets: any = [];
  selecteddate: any = new Date();
  activeSlotIndex = 0;
  today: any = new Date();
  allData: {
    Carbs: Number;
    Fat: Number;
    Fiber: Number;
    Protien: Number;
    totalCal: Number;
    targetCal: Object;
    calConsumed: Number;
  };

  plandata: any;
  tommorow = new Date(new Date().setDate(new Date().getDate() + 1));
  profileData: any;
  isDetox = false;

  constructor(
    private navCtrl: NavController,
    private location: Location,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.route.queryParams.subscribe((params) => {
      //   this.paramsData = params;
      //   this.paramsData = {
      //     ...params,
      //     portion: JSON.parse(params.portion),
      //   };
      //   console.log(this.paramsData);
      //this.getOption();
    });

    this.allData = {
      Carbs: 0,
      Fat: 0,
      Fiber: 0,
      Protien: 0,
      totalCal: 0,
      targetCal: {},
      calConsumed: 0,
    };

    this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
    this.checkPlan();
  }

  goBack() {
    // console.log("this.paramsData?.router", this.paramsData?.router);
    // // this.navCtrl.navigateForward([
    // //   this.paramsData?.router,
    // //   { refresh: new Date().getTime() },
    // // ]);
    // this.navCtrl.back();
    // this.location.back();

    this.modalCtrl.dismiss();
  }

  getPortion(d) {
    const portionObject = this.paramsData?.portion.find(
      (p) => p.id === d.itemCode
    );
    if (portionObject) {
      d.portion = portionObject?.portion;
      d.Calories = portionObject?.Calories;
    }
    return d.portion;
  }

  upDown(alter) {
    alter.optionOpened = !alter.optionOpened;
  }

  ngOnInit() {
    //  if (this.paramsData) {
    //this.getOption();
    //}
    console.log("came on alternative seach page ");
    // this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
  }

  filter(ele, type) {
    if (type) {
      return (ele.addDiet = ele.food.filter(
        (o) =>
          o?.eaten > 0 ||
          this.paramsData?.foodCode.includes(o.itemCode) ||
          this.paramsData?.eaten.includes(o.itemCode)
      ));
    } else {
      return (ele.noneAddDiet = ele.food.filter(
        (o) =>
          (!o.eaten || o?.eaten < 0) &&
          !this.paramsData?.foodCode.includes(o.itemCode) &&
          !this.paramsData?.eaten.includes(o.itemCode)
      ));
    }
  }

  getOption() {
    // this.appService
    //   .getOptions(this.paramsData?.slot, "", "")
    //   .then((res: any) => {
    //     this.alternativeData = res?.mealOptions[0]?.categories;
    //   });

    this.alternativeData = [];

    console.log("this.alternativeData", this.alternativeData);
  }

  async addCal(data, fromMain) {
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
      if (fromMain) {
        this.updateEatenFoodItems(d, data);
      } else {
        this.postOptionFoodList(d, data);
      }
    } else {
      data = data;
    }
  }

  postOptionFoodList(d, data) {
    const datas = {
      date: CONSTANTS.dietDate,
      slot: Number(this.paramsData?.slot),
      foodCodeList: [
        {
          code: d.itemCode,
          portion: Number(d.portion),
          eaten: 2,
        },
      ],
      isUpdateDiet: true,
    };
    this.appService.postOptionFoodList1(datas).then(
      (res) => {
        console.log(res);
        data.eaten = 2;
        data.portion = d.portion;
        data.Calories = d.Calories;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateEatenFoodItems(d, data) {
    const datas = {
      date: CONSTANTS.dietDate,

      foodCodeList: [
        {
          code: d.itemCode,
          portion: Number(d.portion),
          eaten: 2,
          slot: Number(this.paramsData?.slot),
        },
      ],
    };
    this.appService.updateEatenFoodItems(datas).then(
      (res) => {
        console.log(res);
        data.eaten = 2;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async loogeAction(event, d) {
    // const portionObject = this.paramsData?.portion.find(
    //   (p) => p.id === d.itemCode
    // );
    // d.portion = portionObject.portion;
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
    console.log(data);
    if (data?.data) {
      if (data?.data?.type === "edit") {
        this.addCal(d, true);
      } else if (data?.data?.type === "remove") {
        this.remove(d);
      }
    }
  }

  remove(d) {
    const datas = {
      date: CONSTANTS.dietDate,
      foodCodeList: [
        {
          code: d.itemCode,
          portion: Number(d.portion),
          eaten: -1,
          slot: Number(this.paramsData?.slot),
        },
      ],
    };
    this.appService.updateEatenFoodItems(datas).then(
      (res) => {
        console.log(res);
        d.eaten = -1;
        console.log(this.paramsData?.eaten);
        if (this.paramsData?.eaten.includes(d?.itemCode)) {
          this.paramsData?.eaten.splice(
            this.paramsData?.eaten.findIndex((o) => o === d?.itemCode),
            1
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  gotoOption(alter) {
    if (alter?.isOpen) {
      alter.isOpen = false;
    } else {
      alter.isOpen = true;
    }
  }

  // addCal(d, i) {}

  gotoView(d) {}

  /// new APi call//

  getDietdata(date) {
    console.log("get dite data called");
    this.allData = {
      Carbs: 0,
      Fat: 0,
      Fiber: 0,
      Protien: 0,
      totalCal: 0,
      targetCal: {},
      calConsumed: 0,
    };
    this.appService
      .getDietPlans(
        CONSTANTS.isDetox,
        date,
        CONSTANTS.country,
        CONSTANTS.defaultCalories
      )
      .then((res) => {
        console.log("res", res);
        this.diets = res;
        console.log("data came ", this.diets);
        this.allData.targetCal = res;
        this.diets.diets.forEach((ele) => {
          ele.data.forEach((element) => {
            if (element.eaten > 0) {
              this.allData.totalCal = Math.ceil(
                Number(this.allData.totalCal + element.Calories)
              );
              this.allData.Carbs = Math.ceil(
                Number(this.allData.Carbs + element.Carbs)
              );
              this.allData.Fat = Math.ceil(
                Number(this.allData.Fat + element.Fat)
              );
              this.allData.Fiber = Math.ceil(
                Number(this.allData.Fiber + element.Fiber)
              );
              this.allData.Protien = Math.ceil(
                Number(this.allData.Protien + element.Protien)
              );
            }
          });
        });

        this.cdr.detectChanges();
      });
  }

  checkPlan() {
    this.appService.getOnePlan().then((res) => {
      this.plandata = res;
      let exp: any = new Date(this.plandata.planExpiryDate).getTime();
      let newDate: any = new Date().getTime();
      console.log(exp, newDate);

      // if (this.plandata.planType?.toLowerCase()==='premium') {
      //   this.plandata.isPlanActive = true;
      // }
      console.log("plan==========>", res);
    });
  }

  async gotoSearch() {
    this.modalCtrl.dismiss();
    console.log("Go to search called");
    const modal = await this.modalCtrl.create({
      component: SearchPage,
      //cssClass: "change_item",
      backdropDismiss: true,
      componentProps: {
        //alterdata: data,
        //type: "change",
      },
    });
    await modal.present();
    const modaldata = await modal.onDidDismiss();

    const d = modaldata?.data;
    if (d) {
      this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
    }
  }

  goToAnalysis() {}

  getCalData(event, i) {}
}
