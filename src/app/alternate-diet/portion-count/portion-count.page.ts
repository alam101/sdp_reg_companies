import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import * as _ from "lodash";
import moment from "moment";
import { AppService } from "src/app/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { ViewProductPage } from "../../view-product/view-product.page";

@Component({
  selector: "app-portion-count",
  templateUrl: "./portion-count.page.html",
  styleUrls: ["./portion-count.page.scss"],
})
export class PortionCountPage implements OnInit {
  @Input() data: any = {};
  @Input() alterdata: any = {};
  @Input() type = "";
  @Input() plan = false;
  @Output() getDietdata = new EventEmitter();
  itemCode: any = "";
  alternativeData: any = [];
  currentDateIndex: any = 0;
  Math: any = Math;
  searchData = "";
  filterDataArr = [];
  loaded = false;

  constructor(
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private cdr: ChangeDetectorRef,
    private appService: AppService,
    private utilities: UTILITIES,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("PPPPPPPPPPPPPPP");
    this.data = _.cloneDeep(this.alterdata);
    console.log("Portion Count Page line no 38", this.data);
    console.log("Portion Count Page line no 38", this.data.slot);
    if (this.data?.slot !== undefined) {
      this.getOption(this.data);
    }

    console.log("data",this.data);
    
  }

  closeModal() {
    this.modalCtrl.dismiss("");
  }

  async addCal(data, i) {
    console.log("DATA----------->>", data);

    const modal = await this.modalCtrl.create({
      component: PortionCountPage,
      cssClass: "portion_count",
      backdropDismiss: true,
      componentProps: {
        alterdata: data,
        type: "add",
        alterDataCode: this.data?.itemCode === undefined?this.data?._id:this.data?.itemCode,
      },
    });
    await modal.present();
    const modaldata = await modal.onDidDismiss();
    const d = modaldata?.data;
    if (d) {
      console.log("i got this data on porton page", d);

      this.eatenStatusUpdate(d, 2);
    }
  }

  async replacedModal(data) {
    console.log("DATA----------->>", data);

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
      console.log("i got this data on porton page", d);
      console.log("i got this data on porton page", this.data);
      this.replaced(d);
    }
  }

  async replaced(item) {  
    console.log("alam:----",this.data);
    if (this.currentDateIndex == 0) {
      const datas = {
        date: CONSTANTS.dietDate,
        slot: Number(this.data?.slot),
        foodCodeList: [
          {
            code: item?.itemCode === undefined?item?._id:item?.itemCode,
            portion: item.portion,
            eaten:
              CONSTANTS.dietDate === moment(new Date()).format("DDMMYYYY")
                ? 2
                : -1,
          },
          {
            code: this.data?.itemCode === undefined?this.data?._id:this.data?.itemCode,
            portion: 0,
          },
        ],
        isUpdateDiet: true,
      };
      this.utilities.showSuccessToast("Replaced successfully");
      // this.appService.postOptionFoodList1(datas).then(
      //   (success: any) => {
      //     this.getDietdata.emit(CONSTANTS.dietDate);
      //     this.utilities.showSuccessToast("Replaced successfully");
      //     console.log("Dite API called");
      //     this.modalCtrl.dismiss("");
      //     // this.navCtrl.navigateForward(
      //     //   ["/new-diet", { refresh: new Date().getTime() }],
      //     //   { queryParams: { slot: Number(this.data?.slot) } }
      //     // );
      //   },
      //   (err) => {
      //     console.log("details error", err);
      //   }
      // );
    }
  }

  async gotoView(d) {
 
    console.log("alam:--",this.data);
    const modal = await this.modalCtrl.create({
      component: ViewProductPage,
      componentProps: {
        food: d,
        slot: this.data?.slot,
        mainCode: this.data?.itemCode === undefined?this.data?._id:this.data?.itemCode,
        from: "alter",
      },
    });

    modal.present();
    modal.onDidDismiss().then((res) => {
      this.modalCtrl.dismiss("");
    });
  }

  async eatenStatusUpdate(item, eaten) {
    console.log("alam:---",this.data);
    if (this.currentDateIndex == 0) {
      const datas = {
        date: CONSTANTS.dietDate,
        slot: Number(this.data?.slot),
        foodCodeList: [
          {
            code: item?.itemCode === undefined?item?._id:item?.itemCode,
            portion: Number(item.portion),
            eaten: eaten,
          },
        ],
        isUpdateDiet: true,
      };
      this.utilities.showSuccessToast("Food added successfully.");
      // this.appServices.updateEatenFoodItems(data).then(
      // this.appService.postOptionFoodList1(datas).then(
      //   (success: any) => {
      //     this.getDietdata.emit(CONSTANTS.dietDate);
      //     this.utilities.showSuccessToast(success.message);
      //     console.log("Dite API called");
      //     this.modalCtrl.dismiss("");
      //     this.navCtrl.navigateForward([
      //       "/new-diet",
      //       { refresh: new Date().getTime() },
      //     ]);
      //   },
      //   (err) => {
      //     console.log("details error", err);
      //   }
      // );

    }
  }
calCount=0;
  addRemove(type) {
    this.calCount = this.data?.Calories / this.data.portion;
    if (type === "add") {
      this.data.portion = Number(this.data?.portion || 0) + 0.5;
    } else {
      if (Number(this.data?.portion) !== 0.5) {
        this.data.portion = Number(this.data?.portion || 0) - 0.5;
        // this.data.portion = 0;
      }
    }
   // this.data.Calories = calCount * this.data.portion;
    this.cdr.detectChanges();
  }

  log() {
    console.log("Porton page line no 130", this.data);
    this.eatenStatusUpdate(this.data,2);
    this.modalCtrl.dismiss(this.data);
  }

  closePopover() {
    this.popCtrl.dismiss();
  }

  loggedAction(type) {
    if (
      moment(CONSTANTS.dietDate, "DDMMYYYY").format("DD/MM/YYYY") >
        moment(new Date()).format("DD/MM/YYYY") &&
      (type === "track" || type === "unlog")
    ) {
      this.utilities.showErrorToast("You can not log in future date.");
      return;
    }
    this.popCtrl.dismiss({ type, updatedData: this.data });
  }

  getOption(data) {
    this.appService
      .getOptions(this.data?.slot, "", "", this.data?.category)
      .then((res: any) => {
        this.loaded = true;
        console.log("get Option res", res);
        console.log("get Option res", this.data);
        this.alternativeData = res?.mealOptions[0]?.categories[0]?.food;
        this.alternativeData.splice(
          this.alternativeData.findIndex(function (i) {
            return i.itemCode === data?.itemCode;
          }),
          1
        );

        // this.alternativeData.forEach((elm) => {
        //   if (elm.Score === "9") {
        //     elm.option = "Best";
        //   }
        //   if (elm.Score === "6") {
        //     elm.option = "Good";
        //   }
        //   if (elm.Score === "3") {
        //     elm.option = "Average";
        //   }
        //   if (elm.Score === "1") {
        //     elm.option = "Fair";
        //   }
        //   if (!elm.Score || elm.Score == "") {
        //     elm.option = "Unverified";
        //   }
        // });
        this.filterDataArr = this.alternativeData;
      });
  }

  filterData(e) {
    console.log(e);
    this.filterDataArr = this.alternativeData.filter((f) =>
      f.Food.toLowerCase().includes(e.toLowerCase())
    );
    console.log(this.filterDataArr);
  }

  gotoPremium() {
    this.modalCtrl.dismiss();
    this.navCtrl.navigateForward(["/premium-member"]);
  }
}
