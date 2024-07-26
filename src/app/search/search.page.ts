import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import { UTILITIES } from "src/app/core/utility/utilities";
import { Storage } from "@ionic/storage";
import { CONSTANTS } from "src/app/core/constants/constants";
import moment from "moment";
import { AppService } from "src/app/app.service";
import { SelectslotPopupPage } from "../selectslot-popup/selectslot-popup.page";
import { Router } from "@angular/router";
import { ViewProductPage } from "../view-product/view-product.page";
import { PortionCountPage } from "../alternate-diet/portion-count/portion-count.page";
import { ViewSuggestionsPage } from "../view-suggestions/view-suggestions.page";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
  alternativeData: any;
  isDetox = false;
  dietPlan;
  slot;
  selectedSlotFoods;
  isSearchedItems = false;
  allCaloriesData = [];
  recommendedData = [];
  tempRecommendedData = [];
  isActivePartVisible = false;

  isAlreadyCalled = false;
  dietData = [];
  fromFoodOptions = false;
  toMainPage = false;
  itembyFilter = 0;
  historyMaxLength = 5;
  allPackages: any = [];
  allHomeBased: any = [];
  allRestaurant: any = [];
  allSearchData: any = {};
  loaded = false;

  searchExpand = "";

  image_URL = "";

  type = "all";
  data: any;
  platform = false;
  page = 1;
  searchText: any = "";
  expandH = false;
  expandP = false;
  expandR = false;

  constructor(
    private modalCtrl: ModalController,
    private popCtrl: PopoverController,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.dataInitList();
  }

  ngOnInit() {
    this.utilities.logEvent("onboarding_Tracker_search", {});
  }
  plandata:any;
  checkPlan() {
    this.appService.getOnePlan().then((res) => {
      this.plandata = res;
      let exp: any = new Date(this.plandata.planExpiryDate).getTime();
      let newDate: any = new Date().getTime();
      console.log(exp, newDate);

      // if (exp > newDate && this.plandata.trail === -1) {
      //   this.plandata.isPlanActive = true;
      // }
      console.log("plan==========>", res);
    });
  }
  ionViewWillEnter() {
    this.checkPlan();
    this.image_URL = CONSTANTS.image_URL;
    this.getAllProduct();
    this.getAllrestaurant();
    console.log(this.slot);
  }

  async viewSuggestions(type: any, value?: any) {
    // this.modalCtrl.dismiss();
    // this.navCtrl.navigateForward(["/view-suggestions"], {
    //   queryParams: { type, value },
    // });
      const modal = await this.modalCtrl.create({
      component: ViewSuggestionsPage,
      id: "FlowEmployee",
      componentProps: {
        type,
        value,
        slot: this.slot,
      },
    });
    this.utilities.storeModal(modal);
    modal.present();
  }

  getAllProduct() {
    this.appService.getFoodSugesstions("H,P").then((res: any) => {
      console.log(res);
      if (res.code === "0000") {
        this.allPackages = res?.data?.packaged;
        this.allHomeBased = res?.data?.homeBased;
      }
    });
  }

  getAllrestaurant() {
    this.appService.getAllRstaurant(true).then((res: any) => {
      console.log(res);
      if (res.code === "0000") {
        this.allRestaurant = res?.dataList;
      }
    });
  }

  goBack() {
    this.modalCtrl.dismiss();
    this.modalCtrl.dismiss({});
  }

  onIonInfinite(event, type) {
    console.log("event", event, type);
    
    if (!event) {
      this[type] = !event;
      return;
    }
    this.page = this.page + 1;
    this.searchAllApiData(this.searchText,this.page);
    // console.log(event);
    // setTimeout(() => {
    //   event.target.complete();
    // }, 500);
  }

  dataInitList() {
    console.log("data init called");
    // this.slot = 1;
    // slot visible for non premium user
    // this.checkPremiumUser();
    // this.utilities.showLoading();

    this.appService
      .getDietPlans(
        CONSTANTS.isDetox,
        CONSTANTS.dietDate,
        CONSTANTS.country,
        CONSTANTS.defaultCalories
      )
      .then(
        (res) => {
          this.loaded = true;
          this.utilities.hideLoader();
          // this.storage.get("dietData").then((res) => {
          console.log("res", res);
          let dietPlan = CONSTANTS.isDetox
            ? "detox"
            : CONSTANTS.selectedDietPlan;
          //this.dietPlan = res[moment(new Date()).format("DDMMYYYY")][dietPlan];
          this.dietPlan = res;
          // this.selectedSlotFoods = this.dietPlan["diets"][this.slot]["data"];
          this.appService.getFoodPrefHistory(this.slot).then((res) => {
            let internalData = res["internalCustPref"];
            let externalData = res["externalCustPref"];
            let personalData = res["personalCustPref"];
            internalData.map((ele) => {
              ele.foodSource = "internal";
              return ele;
            });
            externalData.map((ele) => {
              ele.foodSource = "external";
              return ele;
            });
            personalData.map((ele) => {
              ele.foodSource = "personal";
              return ele;
            });
            this.isSearchedItems = false;
            let allCaloriesData = [
              ...internalData,
              ...externalData,
              ...personalData,
            ];
            this.allCaloriesData = allCaloriesData.sort((a, b) => {
              return (
                new Date(b.updatedDate).valueOf() -
                new Date(a.updatedDate).valueOf()
              );
            });

            // this.allCaloriesData.forEach((elm) => {
            //   if (elm.Score === 9) {
            //     elm.option = "Best";
            //   }
            //   if (elm.Score === 6) {
            //     elm.option = "Good";
            //   }
            //   if (elm.Score === 3) {
            //     elm.option = "Average";
            //   }
            //   if (elm.Score === 1) {
            //     elm.option = "Fair";
            //   }
            //   if (!elm.Score || elm.Score == "") {
            //     elm.option = "Unverified";
            //   }
            // });

            console.log("===>>", this.allCaloriesData);
            this.checkFoodItemEatenStatus("all");
            this.recommendedData = this.tempRecommendedData = [];
            //   this.appService
            //     .getOptions(this.slot, CONSTANTS.isDetox, CONSTANTS.country)
            //     .then((success) => {
            //       if (
            //         success["mealOptions"] &&
            //         success["mealOptions"][0] &&
            //         success["mealOptions"][0]["categories"] &&
            //         success["mealOptions"][0]["categories"].length > 0
            //       ) {
            //         success["mealOptions"][0]["categories"].forEach((element) => {
            //           this.recommendedData = [
            //             ...this.recommendedData,
            //             ...element["food"],
            //           ];
            //         });
            //         this.checkFoodItemEatenStatus("recommended");
            //       }
            //       this.tempRecommendedData = this.recommendedData;
            //       this.utilities.hideLoader();
            //     });
          });
        },
        (err) => {
          this.utilities.hideLoader();
        }
      );
  }

  checkFoodItemEatenStatus(type) {
    if (type == "all") {
      this.allCaloriesData.filter((ele) => {
        this.dietPlan["diets"][this.slot]?.data.forEach((element) => {
          if (
            element.eaten &&
            element.eaten > 0 &&
            ele["_id"] == element["_id"]
          ) {
            ele.eaten = element.eaten;
            return ele;
          }
        });
      });
    } else if (type == "recommended") {
      this.recommendedData.filter((ele) => {
        this.dietPlan["diets"][this.slot]["data"].forEach((element) => {
          if (
            element.eaten &&
            element.eaten > 0 &&
            ele["_id"] == element["_id"]
          ) {
            ele.eaten = element.eaten;
            return ele;
          }
        });
      });
    }
  }
tempData1=[];
show1=true;
tempData2=[];
show2=true;
tempData3=[];
show3=true;
  searchAllApiData(evt: any, pag: number) {
    if ( pag === 1) {
      this.expandH = false;
      this.expandP = false;
      this.expandR = false;
      this.show1=true;
      this.show2=true;
      this.show3=true;
      this.tempData1 = [];
      this.tempData2 = [];
      this.tempData3 = [];
     // this.allSearchData = {};
      
    }
    
   console.log("evt",evt);
   if(evt===undefined || evt===''){
    return;
   }
   else{
    this.allSearchData = {};
    this.searchText = evt;
    this.appService.getAllRestaurantbyName(evt, pag).then((res: any) => {
      console.log("res",res);
      
      if (res.code === "0000") {
        this.isSearchedItems = true;
        if (
          this.allSearchData?.packaged?.length ||
          this.allSearchData?.restaurant?.length ||
          this.allSearchData?.homeBased?.length
        ) {
          this.allSearchData.packaged = this.allSearchData.packaged.concat(
            res.packaged
          )
          this.allSearchData.restaurant = this.allSearchData.restaurant.concat(
            res.restaurant
          );
          this.allSearchData.homeBased = this.allSearchData.homeBased.concat(
            res.homeBased
          );
        } else {
          this.allSearchData = res;
        }

      }
      if(this.tempData1?.length===this.allSearchData.packaged?.length){
          this.show1=false;
      }
      if(this.tempData2?.length===this.allSearchData.restaurant?.length){
        this.show2=false;
    }
    if(this.tempData3?.length===this.allSearchData.homeBased?.length){
      this.show3=false;
  }
      this.tempData1 = this.allSearchData.packaged;
      this.tempData2 = this.allSearchData.restaurant;
      this.tempData3 = this.allSearchData.homeBased;

  
      console.log(this.allSearchData);
    });
  }
  }

  filterList(evt) {
    this.loaded = false;
    console.log("evt", evt);
    // this.utilities.showLoadingForASecond();
    const searchTerm = evt;
    if (searchTerm != "") {
      if (this.type == "all") {
        this.appService.searchFoodItemByName1(searchTerm).then((resp) => {
          this.loaded = true;
          let internalData = resp["internalFoods"];
          let externalData = resp["externalFoods"];
          internalData = internalData.sort((a, b) => {
            return a.Score < b.Score ? 1 : -1;
          });
          internalData.map((ele) => {
            ele.foodSource = "internal";
            return ele;
          });
          externalData.map((ele) => {
            ele.foodSource = "external";
            return ele;
          });

          this.isSearchedItems = true;
          // if (this.isActivePartVisible) {
          this.allCaloriesData = [...internalData, ...externalData];
          console.log("this.allCaloriesData", this.allCaloriesData);
          // } else {
          //   this.allCaloriesData = [...externalData];
          //   console.log("this.allCaloriesData", this.allCaloriesData);
          // }

          if (this.fromFoodOptions) {
            this.historyMaxLength = this.allCaloriesData.length;
            this.selectedItemByFiter(0);
          }

          this.allCaloriesData.forEach((elm) => {
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
            if (!elm.Score || elm.Score == "") {
              elm.option = "Unverified";
            }
          });
        });
      } else if (this.type == "recommended") {
        this.isSearchedItems = true;
        let data = this.tempRecommendedData;
        this.recommendedData = data.filter((item) => {
          if (item.Food.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
          }
        });
        this.utilities.hideLoader();
      }
    } else {
      this.dataInitList();
    }
  }

  selectedItemByFiter(ind) {
    this.itembyFilter = ind;
    if (ind == 0) {
      this.allCaloriesData.sort(function (a, b) {
        return b.Score - a.Score;
      });
    } else if (ind == 1) {
      this.allCaloriesData.sort(function (a, b) {
        return a.Calories - b.Calories;
      });
    } else if (ind == 2) {
      this.allCaloriesData.sort(function (a, b) {
        return b.Protien - a.Protien;
      });
    } else if (ind == 3) {
      this.allCaloriesData.sort(function (a, b) {
        return b.Fat - a.Fat;
      });
    }
  }

  clearSearch() {
    console.log("Clear search called");
    this.dataInitList();
  }

  // imageLoad() {
  //   this.loaded = true;
  // }
  // imageError() {
  //   this.loaded = true;
  // }

  async addCal(d, flag) {
    console.log("d", d);

    this.data = d;
    console.log("TEST---", d);
    if (this.slot) {
      const modal = await this.modalCtrl.create({
        component: PortionCountPage,
        cssClass: "portion_count",
        backdropDismiss: true,
        componentProps: {
          alterdata: this.data,
          type: "add",
        },
      });
      await modal.present();
      const modaldata = await modal.onDidDismiss();
      const d = modaldata?.data;
      if (d) {
        const datas = {
          date: CONSTANTS.dietDate,
          foodCodeList: [
            {
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,

              foodSource: d.foodSource,
            },
          ],
          slot: Number(this.slot),
          isUpdateDiet: true,
        };
        console.log("datas", datas);
        datas["foodSource"] =
          datas["foodSource"] === "external" ? "P" : datas["foodSource"];
        // this.appService.updateDietPlan(datas).then(
    //    //
        this.appService.postOptionFoodList1(datas).then(
          // this.appService.updateEatenFoodItems(datas).then(
          (res) => {
            console.log("food code update", res);
            // data.eaten = 2;
            // this.modalCtrl.dismiss({});
            this.utilities.closeModal();
            this.navCtrl.navigateForward([
              "/new-diet",
              { refresh: new Date().getTime() },
            ]);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      return;
    }
    // d.portion = 1;

    const modal = await this.modalCtrl.create({
      component: SelectslotPopupPage,
      cssClass: "small-modal-slot",
      backdropDismiss: true,
      componentProps: {
        //data: this.couponList,
      },
    });

    await modal.present();
    const modaldata = await modal.onDidDismiss();
    const slot = modaldata?.data;
    if (slot) {
      const modal = await this.modalCtrl.create({
        component: PortionCountPage,
        cssClass: "portion_count",
        backdropDismiss: true,
        componentProps: {
          alterdata: this.data,
          type: "add",
        },
      });
      await modal.present();
      const modaldata = await modal.onDidDismiss();
      const d = modaldata?.data;
      if (d) {
        const datas = {
          date: CONSTANTS.dietDate,
          foodCodeList: [
            {
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,

              foodSource: d.foodSource,
            },
          ],
          slot: Number(slot.slot),
          isUpdateDiet: true,
        };
        console.log("datas", datas);
        datas.foodCodeList[0].foodSource =
          datas.foodCodeList[0].foodSource === "external"
            ? "P"
            : datas.foodCodeList[0].foodSource;

        this.appService.postOptionFoodList1(datas).then(
          (res) => {
            console.log("food code update", res);
            // data.eaten = 2;
            this.modalCtrl.dismiss({});
            this.navCtrl.navigateForward([
              "/new-diet",
              { refresh: new Date().getTime() },
            ]);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      console.log("slot", slot);
    }
  }

  // async addCal(data, i) {

  // }

  async gotoView(d) {
    console.log(this.slot, d);
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: ViewProductPage,
      componentProps: {
        food: d,
        // from: "search",
        slot: this.slot,
      },
    });
    this.utilities.storeModal(modal);
    modal.present();
  }
}
