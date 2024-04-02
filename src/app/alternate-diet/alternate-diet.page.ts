import { Location } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import moment from "moment";
import { empty } from "rxjs";
import { AppService } from "src/app/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { PortionCountPage } from "./portion-count/portion-count.page";

@Component({
  selector: "app-alternate-diet",
  templateUrl: "./alternate-diet.page.html",
  styleUrls: ["./alternate-diet.page.scss"],
})
export class AlternateDietPage implements OnInit {
  @Input() data: any = {};
  @Input() plan: Boolean = false;
  customerId: any;
  @Output() getCalData = new EventEmitter();
  @Output() getDietdata = new EventEmitter();
  totalCal: number = 0;
  moment: any = moment;
  loaded = true;
  optionOpened = true;

  paramsData: any;
  alternativeData: any = [];

  currentDateIndex: any = 0;

  constructor(
    private navCtrl: NavController,
    private location: Location,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.paramsData = params;
      this.paramsData = {
        ...params,
        portion: JSON.parse(params.portion),
      };
      console.log(this.paramsData);
    });
  }

  goBack() {
    console.log("this.paramsData?.router", this.paramsData?.router);
    this.navCtrl.navigateForward([
      this.paramsData?.router,
      { refresh: new Date().getTime() },
    ]);
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
    if (this.paramsData) {
      this.getOption();
    }
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
    this.appService
      .getOptions1(this.paramsData?.slot, "", "")
      .then((res: any) => {
        this.alternativeData = res?.mealOptions[0]?.categories;
      });
  }

  async addCal(data, fromMain) {
 //   debugger;
    console.log("data",data);
    
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
}
