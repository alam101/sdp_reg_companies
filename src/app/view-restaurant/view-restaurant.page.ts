import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import moment from "moment";
import { AppService } from "../app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
import { FilterSortPage } from "../components/filter-sort/filter-sort.page";

@Component({
  selector: "app-view-restaurant",
  templateUrl: "./view-restaurant.page.html",
  styleUrls: ["./view-restaurant.page.scss"],
})
export class ViewRestaurantPage implements OnInit {
  @Input() data: any = {};
  @Input() slot: any = {};
  isDetox: any = false;
  allData: any = {};
  diets: any = [];
  defaultImg = `this.src=${CONSTANTS.defaultImg};this.style='object-fit: contain'`;
  // data: any = {};
  categoryList: any = [];
  currentTimedata: any = {};
  allRestProduct: any = [];
  loaded = false;
  search: any;
  dataType: any = "";
  mainProductData: any = [];
  dataTypeList = [
    { name: "V", isChecked: false, title: "Veg" },
    { name: "NV", isChecked: false, title: "Non Veg" },
    { name: "VE", isChecked: false, title: "Vegan" },
  ];
  platform = false;
  constructor(
    private appServices: AppService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private utility: UTILITIES,
    private navCtrl: NavController
  ) {
    // this.route.queryParams.subscribe((res) => {
    //   this.data = JSON.parse(res.data);
    // });
  }

  goBack() {
    // this.modalCtrl.dismiss();

    this.modalCtrl.dismiss(null, null, "ViewRestaurantPage");

   
  }

  ngOnInit() {
    console.log(this.slot);
  }

  ionViewWillEnter() {
   console.log(this.data);
    this.getAllRstaurantByCategory(
      "R",
      this.data?.brandCode?.split("/").toString()
    );
    //  this.getCatWiseProduct("name", this.data?.brandCode?.split("/").toString());
  }

  searchFood(e: any) {
    console.log(this.dataType, e);
    if (e) {
      this.allRestProduct = this.mainProductData.filter((f) =>
        f.Food?.toLowerCase().includes(e.toLowerCase())
      );
    } else {
      this.allRestProduct = this.mainProductData;
      // }
    }
  }

  filterDataType(e: any, data: any) {
    console.log(e);
    if (e) {
      this.dataTypeList.forEach((element) => {
        if (element.name !== data.name) {
          element.isChecked = false;
        }
      });
      this.dataType = data.name;
      console.log("testt", this.dataType);
      if (data.name === "V") {
        this.allRestProduct = this.mainProductData.filter(
          (f) =>
            f.foodType?.toLowerCase() === this.dataType?.toLowerCase() ||
            f.foodType?.toLowerCase() === "ve"
        );
      } else {
        this.allRestProduct = this.mainProductData.filter(
          (f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase()
        );
      }
    } else {
      this.dataType = "";
      this.allRestProduct = this.mainProductData;
    }
    console.log(this.allRestProduct);
  }

  async presentModal(type: any) {
    const modal = await this.modalCtrl.create({
      component: FilterSortPage,
      // cssClass: this.isKeyBoardShows ? "small-modal-kb" : "small-modal",
      cssClass: "small-modal",
      backdropDismiss: true,
      componentProps: {
        type,
      },
    });
    await modal.present();
    await modal.onDidDismiss().then((res) => {});
  }

  getAllRstaurantByCategory(type?: any, value?: any) {
    this.allRestProduct = [];
    this.mainProductData = [];
    this.loaded = true;
    this.appServices.getAllRstaurantByCategory(type, value).then(
      (res: any) => {
        console.log(res);
        this.loaded = false;
        if (res.code === "0000") {
          this.allRestProduct = res?.dataList;
          this.mainProductData = res?.dataList;
          this.fiterDefault();
        }
      },
      (err) => {
        this.loaded = false;
      }
    );
  }

  fiterDefault() {
    if (this.dataType != "") {
      this.allRestProduct = this.mainProductData.filter(
        (f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase()
      );
    }
  }
  getCatWiseProduct(type?: any, value?: any) {
    this.utility.showLoading();
    this.appServices.getAllRstaurant(false, type, value).then(
      (res: any) => {
        this.utility.hideLoader();
        console.log(res);
        if (res.code === "0000") {
          this.allRestProduct = res?.dataList;
        }
      },
      (err) => {
        this.utility.hideLoader();
      }
    );
  }
}
