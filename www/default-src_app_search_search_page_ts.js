"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_search_search_page_ts"],{

/***/ 75105:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.html?ngResource */ 20463);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 99090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var _selectslot_popup_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectslot-popup/selectslot-popup.page */ 25426);
/* harmony import */ var _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view-product/view-product.page */ 8494);
/* harmony import */ var _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alternate-diet/portion-count/portion-count.page */ 4637);
/* harmony import */ var _view_suggestions_view_suggestions_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view-suggestions/view-suggestions.page */ 1802);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 80823);















let SearchPage = class SearchPage {
  constructor(modalCtrl, utilities, appService, navCtrl, cdr) {
    this.modalCtrl = modalCtrl;
    this.utilities = utilities;
    this.appService = appService;
    this.navCtrl = navCtrl;
    this.cdr = cdr;
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.isDetox = false;
    this.isSearchedItems = false;
    this.allCaloriesData = [];
    this.recommendedData = [];
    this.tempRecommendedData = [];
    this.isActivePartVisible = false;
    this.isAlreadyCalled = false;
    this.dietData = [];
    this.fromFoodOptions = false;
    this.toMainPage = false;
    this.itembyFilter = 0;
    this.historyMaxLength = 5;
    this.allPackages = [];
    this.allHomeBased = [];
    this.allRestaurant = [];
    this.allSearchData = {};
    this.loaded = false;
    this.searchExpand = "";
    this.image_URL = "";
    this.type = "all";
    this.platform = false;
    this.page = 1;
    this.searchText = "";
    this.expandH = false;
    this.expandP = false;
    this.expandR = false;
    this.dietplanName = "";
    this.tempData1 = [];
    this.show1 = true;
    this.tempData2 = [];
    this.show2 = true;
    this.tempData3 = [];
    this.show3 = true;
    this.searchData = [];
    this.isSearch = false;
    this.dataInitList();
    this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(3000)) // Wait 3 seconds after last input
    .subscribe(searchText => {
      this.searchAutoAllApiData(searchText);
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  highlightText(text, search) {
    if (!text || !search) return text;
    const pattern = new RegExp(`(${search})`, 'gi'); // case-insensitive

    return text.replace(pattern, '<b>$1</b>');
  }

  onSearch(event) {
    const inputValue = event.target.value;
    this.searchSubject.next(inputValue); // Emit the latest value
  }

  ngOnInit() {
    this.cdr.detectChanges();
    this.utilities.logEvent("onboarding_Tracker_search", {});
  }

  checkPlan() {
    this.appService.getOnePlan().then(res => {
      this.plandata = res;
      let exp = new Date(this.plandata.planExpiryDate).getTime();
      let newDate = new Date().getTime();
      console.log(exp, newDate); // if (exp > newDate && this.plandata.trail === -1) {
      //   this.plandata.isPlanActive = true;
      // }

      console.log("plan==========>", res);
    });
  }

  ionViewWillEnter() {
    this.checkPlan();
    this.image_URL = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.image_URL;
    this.getAllProduct();
    this.getAllrestaurant();
    console.log(this.slot);
    this.cdr.detectChanges();
  }

  viewSuggestions(type, value) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.modalCtrl.dismiss();
      // this.navCtrl.navigateForward(["/view-suggestions"], {
      //   queryParams: { type, value },
      // });
      const modal = yield _this.modalCtrl.create({
        component: _view_suggestions_view_suggestions_page__WEBPACK_IMPORTED_MODULE_9__.ViewSuggestionsPage,
        id: "FlowEmployee",
        componentProps: {
          type,
          value,
          slot: _this.slot
        }
      });

      _this.utilities.storeModal(modal);

      modal.present();
    })();
  }

  getAllProduct() {
    this.appService.getFoodSugesstions("H,P").then(res => {
      console.log(res);

      if (res.code === "0000") {
        this.allPackages = res?.data?.packaged;
        this.allHomeBased = res?.data?.homeBased;
      }
    });
  }

  getAllrestaurant() {
    this.appService.getAllRstaurant(true).then(res => {
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
    this.searchAllApiData(this.searchText, this.page); // console.log(event);
    // setTimeout(() => {
    //   event.target.complete();
    // }, 500);
  }

  getScoreClass(item) {
    let score;
    console.log("this.dietplanName:->>>>>>", localStorage.getItem("dietplanname"), item?._source?.obesityScore); // Select the correct score field based on diet plan

    switch (localStorage.getItem("dietplanname")?.toLowerCase()) {
      case 'weightloss':
        score = item?._source?.obesityScore;
        break;

      case 'diabetes':
        score = item?._source?.Diabetes_score;
        break;

      case 'pcos':
        score = item?._source?.PCOS_score;
        break;

      case 'cholesterol':
        score = item?._source?.Cholestrol_score;
        break;

      default:
        score = undefined;
        break;
    }

    console.log("score:", score); // Ensure score is a number for consistent switch logic

    const numericScore = Number(score);

    switch (numericScore) {
      case 9:
        return 'Best';

      case 6:
        return 'Good';

      case 3:
        return 'Average';

      case 1:
        return 'Fair';

      default:
        return 'Unverified';
    }
  }

  dataInitList() {
    console.log("data init called"); //  this.dietplanName = CONSTANTS.selectedDietPlan;
    // this.slot = 1;
    // slot visible for non premium user
    // this.checkPremiumUser();
    // this.utilities.showLoading();

    this.appService.getDietPlans(src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.isDetox, src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.dietDate, src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.country, src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.defaultCalories).then(res => {
      this.loaded = true;
      this.utilities.hideLoader(); // this.storage.get("dietData").then((res) => {

      console.log("res", res);
      let dietPlan = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.isDetox ? "detox" : src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.selectedDietPlan; //this.dietPlan = res[moment(new Date()).format("DDMMYYYY")][dietPlan];

      this.dietPlan = res; // this.selectedSlotFoods = this.dietPlan["diets"][this.slot]["data"];

      this.appService.getFoodPrefHistory(this.slot).then(res => {
        let internalData = res["internalCustPref"];
        let externalData = res["externalCustPref"];
        let personalData = res["personalCustPref"];
        internalData.map(ele => {
          ele.foodSource = "internal";
          return ele;
        });
        externalData.map(ele => {
          ele.foodSource = "external";
          return ele;
        });
        personalData.map(ele => {
          ele.foodSource = "personal";
          return ele;
        });
        this.isSearchedItems = false;
        let allCaloriesData = [...internalData, ...externalData, ...personalData];
        this.allCaloriesData = allCaloriesData.sort((a, b) => {
          return new Date(b.updatedDate).valueOf() - new Date(a.updatedDate).valueOf();
        }); // this.allCaloriesData.forEach((elm) => {
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
        this.recommendedData = this.tempRecommendedData = []; //   this.appService
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
    }, err => {
      this.utilities.hideLoader();
    });
  }

  checkFoodItemEatenStatus(type) {
    if (type == "all") {
      this.allCaloriesData.filter(ele => {
        this.dietPlan["diets"][this.slot]?.data.forEach(element => {
          if (element.eaten && element.eaten > 0 && ele["_id"] == element["_id"]) {
            ele.eaten = element.eaten;
            return ele;
          }
        });
      });
    } else if (type == "recommended") {
      this.recommendedData.filter(ele => {
        this.dietPlan["diets"][this.slot]["data"].forEach(element => {
          if (element.eaten && element.eaten > 0 && ele["_id"] == element["_id"]) {
            ele.eaten = element.eaten;
            return ele;
          }
        });
      });
    }
  }

  searchAutoAllApiData(searchValue) {
    this.loaded = false;
    const inputValue = searchValue.target.value;
    console.log(inputValue, inputValue);

    if (inputValue?.length > 2) {
      this.appService.searchAuto(inputValue).subscribe(res => {
        this.searchData = res["data"];

        if (this.searchData?.length > 0) {
          this.loaded = true;
          this.isSearchedItems = true;
        }

        console.log("this.searchData", this.searchData);
      }, err => {
        console.log("err", err);
      });
    }

    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }

  searchAutoAllApidataOptional2(searchValue) {
    this.loaded = false;
    const inputValue = searchValue.target.value;
    console.log(inputValue, inputValue);

    if (inputValue?.length > 2) {
      this.appService.searchAuto2(inputValue).subscribe(res => {
        this.searchData = res["data"]["hits"];
        this.isSearch = true;

        if (this.searchData?.length > 0) {
          this.loaded = true;
          this.isSearchedItems = true;
        }

        console.log("this.searchData", this.searchData);
      }, err => {
        console.log("err", err);
      });
    }

    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }

  searchAutoAllApiDataOptional(searchValue) {
    this.loaded = false;
    const inputValue = searchValue.target.value;
    console.log(inputValue, inputValue);

    if (inputValue?.length > 2) {
      // this.appService.searchAuto(inputValue).subscribe((res:any)=>{
      //   this.searchData=res["data"];
      //   if(this.searchData?.length>0){
      //     this.loaded=true;
      //   this.isSearchedItems = true;
      //   }
      //   console.log("this.searchData",this.searchData);
      //{
      this.appService.getAllRestaurantbyName(inputValue, 1).then(res => {
        console.log("res", res);

        if (res.code === "0000") {
          this.isSearchedItems = true;

          if (this.allSearchData?.packaged?.length || this.allSearchData?.restaurant?.length || this.allSearchData?.homeBased?.length) {
            this.allSearchData.packaged = this.allSearchData.packaged.concat(res.packaged);
            this.allSearchData.restaurant = this.allSearchData.restaurant.concat(res.restaurant);
            this.allSearchData.homeBased = this.allSearchData.homeBased.concat(res.homeBased);
          } else {
            this.allSearchData = res;
          }

          this.searchData = res["homeBased"].concat(res["restaurant"]).concat(res["packaged"]);
          console.log("this.allSearchData", this.searchData);
        }
      });
    }

    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }

  searchAllApiData(evt, pag) {
    this.isSearchedItems = false;

    if (pag === 1) {
      this.expandH = false;
      this.expandP = false;
      this.expandR = false;
      this.show1 = true;
      this.show2 = true;
      this.show3 = true;
      this.tempData1 = [];
      this.tempData2 = [];
      this.tempData3 = []; // this.allSearchData = {};
    }

    console.log("evt", evt);

    if (evt === undefined || evt === '') {
      return;
    } else {
      this.allSearchData = {};
      this.searchText = evt;
      this.appService.getAllRestaurantbyName(evt, pag).then(res => {
        console.log("res", res);

        if (res.code === "0000") {
          this.isSearchedItems = true;

          if (this.allSearchData?.packaged?.length || this.allSearchData?.restaurant?.length || this.allSearchData?.homeBased?.length) {
            this.allSearchData.packaged = this.allSearchData.packaged.concat(res.packaged);
            this.allSearchData.restaurant = this.allSearchData.restaurant.concat(res.restaurant);
            this.allSearchData.homeBased = this.allSearchData.homeBased.concat(res.homeBased);
          } else {
            this.allSearchData = res;
          }
        }

        if (this.tempData1?.length === this.allSearchData.packaged?.length) {
          this.show1 = false;
        }

        if (this.tempData2?.length === this.allSearchData.restaurant?.length) {
          this.show2 = false;
        }

        if (this.tempData3?.length === this.allSearchData.homeBased?.length) {
          this.show3 = false;
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
    console.log("evt", evt); // this.utilities.showLoadingForASecond();

    const searchTerm = evt;

    if (searchTerm != "") {
      if (this.type == "all") {
        this.appService.searchFoodItemByName1(searchTerm).then(resp => {
          this.loaded = true;
          let internalData = resp["internalFoods"];
          let externalData = resp["externalFoods"];
          internalData = internalData.sort((a, b) => {
            return a.Score < b.Score ? 1 : -1;
          });
          internalData.map(ele => {
            ele.foodSource = "internal";
            return ele;
          });
          externalData.map(ele => {
            ele.foodSource = "external";
            return ele;
          });
          this.isSearchedItems = true; // if (this.isActivePartVisible) {

          this.allCaloriesData = [...internalData, ...externalData];
          console.log("this.allCaloriesData", this.allCaloriesData); // } else {
          //   this.allCaloriesData = [...externalData];
          //   console.log("this.allCaloriesData", this.allCaloriesData);
          // }

          if (this.fromFoodOptions) {
            this.historyMaxLength = this.allCaloriesData.length;
            this.selectedItemByFiter(0);
          }

          this.allCaloriesData.forEach(elm => {
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
        this.recommendedData = data.filter(item => {
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
  } // imageLoad() {
  //   this.loaded = true;
  // }
  // imageError() {
  //   this.loaded = true;
  // }


  addCal(d, flag) {
    var _this2 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("d", d);
      const itemData = JSON.parse(JSON.stringify(d));
      let dt = itemData["_source"];
      delete itemData._source;
      delete itemData.sort;
      _this2.data = { ...itemData,
        ...dt
      };
      console.log("TEST---", _this2.data);

      if (_this2.slot) {
        const modal = yield _this2.modalCtrl.create({
          component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_8__.PortionCountPage,
          cssClass: "portion_count",
          backdropDismiss: true,
          componentProps: {
            alterdata: _this2.data,
            type: "add"
          }
        });
        yield modal.present();
        const modaldata = yield modal.onDidDismiss();
        const d = modaldata?.data;

        if (d) {
          const datas = {
            date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.dietDate,
            foodCodeList: [{
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,
              foodSource: d.foodSource
            }],
            slot: Number(_this2.slot),
            isUpdateDiet: true
          };
          console.log("datas", datas);
          datas["foodSource"] = datas["foodSource"] === "external" ? "P" : datas["foodSource"];

          if (datas.foodCodeList[0].foodSource != 'P' && datas.foodCodeList[0].foodSource != 'R') {
            delete datas.foodCodeList[0].foodSource;
          } // this.appService.updateDietPlan(datas).then(
          //    //


          _this2.appService.postOptionFoodList1(datas).then( // this.appService.updateEatenFoodItems(datas).then(
          res => {
            console.log("food code update", res); // data.eaten = 2;
            // this.modalCtrl.dismiss({});

            _this2.utilities.closeModal();

            _this2.navCtrl.navigateForward(["/new-diet", {
              refresh: new Date().getTime()
            }]);
          }, err => {
            console.log(err);
          });
        }

        return;
      } // d.portion = 1;


      const modal = yield _this2.modalCtrl.create({
        component: _selectslot_popup_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_6__.SelectslotPopupPage,
        cssClass: "small-modal-slot",
        backdropDismiss: true,
        componentProps: {//data: this.couponList,
        }
      });
      yield modal.present();
      const modaldata = yield modal.onDidDismiss();
      const slot = modaldata?.data;

      if (slot) {
        const modal = yield _this2.modalCtrl.create({
          component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_8__.PortionCountPage,
          cssClass: "portion_count",
          backdropDismiss: true,
          componentProps: {
            alterdata: _this2.data,
            type: "add"
          }
        });
        yield modal.present();
        const modaldata = yield modal.onDidDismiss();
        const d = modaldata?.data;

        if (d) {
          const datas = {
            date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.dietDate,
            foodCodeList: [{
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,
              foodSource: d.foodSource
            }],
            slot: Number(slot.slot),
            isUpdateDiet: true
          };
          console.log("datas", datas);
          datas.foodCodeList[0].foodSource = datas.foodCodeList[0].foodSource === "external" ? "P" : datas.foodCodeList[0].foodSource;

          if (datas.foodCodeList[0].foodSource != 'P' && datas.foodCodeList[0].foodSource != 'R') {
            delete datas.foodCodeList[0].foodSource;
          }

          _this2.appService.postOptionFoodList1(datas).then(res => {
            console.log("food code update", res); // data.eaten = 2;

            _this2.modalCtrl.dismiss({});

            _this2.navCtrl.navigateForward(["/new-diet", {
              refresh: new Date().getTime()
            }]);
          }, err => {
            console.log(err);
          });
        }

        console.log("slot", slot);
      }
    })();
  } // async addCal(data, i) {
  // }


  gotoView(d) {
    var _this3 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this3.slot, d);

      _this3.modalCtrl.dismiss();

      const modal = yield _this3.modalCtrl.create({
        component: _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_7__.ViewProductPage,
        componentProps: {
          food: d,
          // from: "search",
          slot: _this3.slot
        }
      });

      _this3.utilities.storeModal(modal);

      modal.present();
    })();
  }

};

SearchPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_3__.UTILITIES
}, {
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
}];

SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-search",
  template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SearchPage);


/***/ }),

/***/ 80823:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 60014);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  return source => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}

class DebounceTimeOperator {
  constructor(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }

  call(subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  }

}

class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
  constructor(destination, dueTime, scheduler) {
    super(destination);
    this.dueTime = dueTime;
    this.scheduler = scheduler;
    this.debouncedSubscription = null;
    this.lastValue = null;
    this.hasValue = false;
  }

  _next(value) {
    this.clearDebounce();
    this.lastValue = value;
    this.hasValue = true;
    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
  }

  _complete() {
    this.debouncedNext();
    this.destination.complete();
  }

  debouncedNext() {
    this.clearDebounce();

    if (this.hasValue) {
      const {
        lastValue
      } = this;
      this.lastValue = null;
      this.hasValue = false;
      this.destination.next(lastValue);
    }
  }

  clearDebounce() {
    const debouncedSubscription = this.debouncedSubscription;

    if (debouncedSubscription !== null) {
      this.remove(debouncedSubscription);
      debouncedSubscription.unsubscribe();
      this.debouncedSubscription = null;
    }
  }

}

function dispatchNext(subscriber) {
  subscriber.debouncedNext();
}

/***/ }),

/***/ 99090:
/*!****************************************************!*\
  !*** ./src/app/search/search.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".searchbar {\n  border: 1px solid var(--theme-color);\n  color: var(--black);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 65px;\n}\n\n.main_div {\n  min-height: 100%;\n  background: var(--white);\n  border-radius: 40px 40px 0px 0px;\n  position: relative;\n  padding: 50px 10px 0px 10px;\n}\n\n.more {\n  --border-color: var(--theme-newButton);\n  color: var(--theme-newButton);\n  font-size: var(--small-font);\n  text-transform: none;\n  --background: var(--white);\n}\n\nion-content::part(background) {\n  --background: var(--white);\n}\n\nion-content::part(scroll) {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\n.change_main_div {\n  padding: 10px;\n  min-height: 100%;\n}\n\n.change_content::part(background) {\n  background: var(--white);\n}\n\n.change_content::part(scroll) {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\n.border_line {\n  width: 60px;\n  border: 2px solid #6e6e6e;\n  border-radius: 25px;\n}\n\n.back_icon {\n  font-size: 25px;\n  color: var(--theme-color);\n}\n\n.change {\n  color: var(--black);\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 700;\n  margin-left: 10px;\n  margin-bottom: 5px;\n}\n\n.change2 {\n  color: #707070;\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 400;\n  margin: 0%;\n  margin-left: 10px;\n}\n\n.close {\n  position: absolute;\n  right: 13px;\n  top: 0.2rem !important;\n  font-size: 35px;\n  color: var(--theme-color);\n  background: white;\n  border-radius: 100%;\n  z-index: 9999;\n}\n\n.searchbar {\n  border: 1px solid var(--theme-color);\n  color: var(--black);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n}\n\n.card {\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  border-bottom: var(--boxshadow);\n  padding: 5px;\n  margin: 5px;\n}\n\n.card_img {\n  object-fit: cover;\n}\n\n.card_img::part(image) {\n  border-radius: 5px;\n}\n\nion-thumbnail {\n  height: 80px;\n  width: 65px;\n  --border-radius: 14px;\n}\n\n.meal_pro_div {\n  width: 100%;\n  padding-left: 5px;\n}\n\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #666666;\n}\n\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #666666;\n}\n\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.plus_icon {\n  font-size: 30px;\n  z-index: 1;\n  border-radius: 100%;\n  background: white;\n  color: var(--theme-newButton);\n  margin-right: 0px;\n}\n\n.more_button_div {\n  margin-top: -24px;\n  z-index: 999;\n  width: 100%;\n  position: absolute;\n  bottom: -10px;\n}\n\n.more_button_div ion-button {\n  --border-color: #707070;\n  color: #707070;\n  font-size: var(--xsmall-font);\n  text-transform: none;\n  --background: var(--white);\n  --border-width: 1px;\n  height: 25px;\n  width: 110px;\n}\n\n.more_button_div .up_down_icon {\n  border: 1px solid var(--theme-color);\n  border-radius: 100px;\n  padding: 2px;\n  color: var(--theme-color);\n  background: var(--white);\n  box-shadow: var(--boxshadow);\n}\n\n.lock {\n  color: var(--black);\n  font-size: 25px;\n  margin: 0px 0px 0px 5px;\n}\n\n.lock_btn {\n  width: 75px !important;\n  --padding-start: 0px !important;\n  --padding-end: 5px !important;\n}\n\n.sketloan {\n  width: 100%;\n  height: 80px;\n}\n\n.avtar_div {\n  display: flex;\n}\n\n.avtar_div2 {\n  width: 70px;\n}\n\n.avtar {\n  height: 90px;\n  width: 80px;\n  --border-radius: 4px;\n}\n\n.avtars {\n  height: 50px;\n  width: 50px;\n}\n\n.alter_name {\n  width: 70px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 5px;\n  min-height: 30px;\n}\n\n.search-auto .search-auto {\n  border-radius: 10px;\n  background: #f3f3f3;\n  display: flex;\n  align-items: center;\n  padding: 0.2rem 1rem;\n}\n\n.search-auto .Best {\n  background: #38a534;\n}\n\n.search-auto .Good {\n  background: #94ea0a;\n}\n\n.search-auto .Average {\n  background: #f1c231;\n}\n\n.search-auto .Fair {\n  background: #e59137;\n}\n\n.search-auto .Unverified {\n  background: rgb(211, 24, 24);\n}\n\n.search-auto .sketloan {\n  width: 100%;\n  height: 50px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUFwQ0Y7O0FBdUNBO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUFyQ0Y7O0FBd0NDO0VBRUMsYUFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxXQUFBO0FBdENGOztBQTBDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUF2Q0Y7O0FBeUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXRDRjs7QUEwQ0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUF2Q0o7O0FBNkNBO0VBQ0UsbUJBQUE7QUEzQ0Y7O0FBOENBO0VBQ0UsbUJBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UsbUJBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsbUJBQUE7QUE5Q0Y7O0FBaURBO0VBQ0UsNEJBQUE7QUEvQ0Y7O0FBbURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWpERiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaGJhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgcGFkZGluZzogMCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNjVweDtcbn1cbi5tYWluX2RpdiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDBweCAwcHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gcGFkZGluZzogNTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4ubW9yZXtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgJjo6cGFydChiYWNrZ3JvdW5kKSB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xuLy8gICB9XG4vLyAgIC8vICY6OnBhcnQoc2Nyb2xsKSB7XG4vLyAgIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICAvLyAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4vLyAgIC8vIH1cbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICBcbiAgJjo6cGFydChiYWNrZ3JvdW5kKSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICBcbiAgfVxuXG4gICY6OnBhcnQoc2Nyb2xsKSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIH1cbn1cblxuLy8gLmNsb3NlIHtcbi8vICAgd2lkdGg6IDI1cHg7XG4vLyAgIGhlaWdodDogMjVweDtcbi8vICAgY29sb3I6ICM3MDcwNzA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBwYWRkaW5nLXRvcDogMTVweDtcbi8vICAgcGFkZGluZy1yaWdodDogNSU7XG4vLyB9XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoYW5nZSBtb2RhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uY2hhbmdlX21haW5fZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNoYW5nZV9jb250ZW50IHtcbiAgJjo6cGFydChiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBcbiAgfVxuXG4gICY6OnBhcnQoc2Nyb2xsKSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIH1cbn1cblxuLmJvcmRlcl9saW5lIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2ZTZlNmU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC8vIG1hcmdpbjogMTBweDtcbn1cblxuLmJhY2tfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLmNoYW5nZSB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNoYW5nZTIge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLy8gLmNsb3NlIHtcbi8vICAgZm9udC1zaXplOiAzMHB4O1xuLy8gICBjb2xvcjogdmFyKC0tYmxhY2spO1xuLy8gfVxuXG4uY2xvc2Uge1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogLjJyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgcGFkZGluZzogMCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJveHNoYWRvdyk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jYXJkX2ltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAmOjpwYXJ0KGltYWdlKSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAvLyAtLXNpemU6IDY1cHg7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDY1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1lYWxfcHJvX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm1lYWxfY2FsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5tZWFsX3BybyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICAvLyB3aWR0aDogMjAwcHg7XG59XG5cbi5CZXN0IHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMzhhNTM0O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luOiAycHggMHB4O1xufVxuLkdvb2Qge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICM5NGVhMGE7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDJweCAwcHg7XG59XG4uQXZlcmFnZSB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI2VhZGMxODtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cbi5GYWlyIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjZmZhNTAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luOiAycHggMHB4O1xufVxuLlVudmVyaWZpZWQge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICM3ZDdkN2Q1ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cblxuLnBsdXNfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLm1vcmVfYnV0dG9uX2RpdiB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItY29sb3I6ICM3MDcwNzA7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICB9XG5cbiAgLnVwX2Rvd25faWNvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICB9XG59XG5cbi5sb2NrIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmxvY2tfYnRuIHtcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5za2V0bG9hbntcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gfVxuXG4gLmF2dGFyX2RpdiB7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hdnRhcl9kaXYyIHtcbiAgd2lkdGg6IDcwcHg7XG4gIFxufVxuXG4uYXZ0YXJ7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmF2dGFyc3tcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmFsdGVyX25hbWUge1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbi5zZWFyY2gtYXV0b3tcbiAgLnNlYXJjaC1hdXRve1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgcGFkZGluZzouMnJlbSAxcmVtO1xufVxuXG4vLyAuaXRlbS1pbm5lcjpuZy1kZWVwe1xuLy8gICAgIGJvcmRlci1jb2xvcjojZmZmO1xuLy8gfVxuLkJlc3Qge1xuICBiYWNrZ3JvdW5kOiAjMzhhNTM0O1xuIFxufVxuLkdvb2Qge1xuICBiYWNrZ3JvdW5kOiAjOTRlYTBhO1xuIFxufVxuLkF2ZXJhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjFjMjMxO1xuIFxufVxuLkZhaXIge1xuICBiYWNrZ3JvdW5kOiAjZTU5MTM3O1xuIFxufVxuLlVudmVyaWZpZWQge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyNCwgMjQpO1xuICBcbn1cblxuLnNrZXRsb2FuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbn1cbiJdfQ== */";

/***/ }),

/***/ 20463:
/*!****************************************************!*\
  !*** ./src/app/search/search.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-icon class=\"close\" name=\"close-circle\" (click)=\"goBack()\" [ngStyle]=\"{'top':platform ?'15px':'15px'}\">\n</ion-icon>\n<ion-content>\n\n  <div>\n    <ion-row style=\"margin-top: 3rem;\">\n      <ion-col size=\"11\" class=\"ion-text-left\" style=\"border: 1px solid #b3b3b3;padding-left: .5rem;\n      border-radius: 1rem;\">\n        <ion-input class=\"sc-ion-input-ios\" [(ngModel)]=\"searchValue\" (input)=\"searchAutoAllApidataOptional2($event)\"\n          placeholder=\"Search for Food\" style=\"font-size: .8rem;\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-text-left\">\n        <!-- <ion-icon name=\"search\" (click)=\"searchAllApiData(searchValue,1)\" style=\"position: absolute;\n        top: 15%;\n        left: .5rem;\n        font-size: 2rem;\n        color: var(--theme-color);\"></ion-icon> -->\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isSearch\">\n      <ion-col>\n        <div style=\"margin-top:.2rem\">\n          <ion-row>\n            <ion-col class=\"ion-text-left\">\n              <div style=\"width:100%;font-size:1rem; color:#565656;\"><span\n                  style=\"font-weight: 500;color:#000;\">{{searchData?.length}}</span> results found.</div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <p class=\"change\" *ngIf=\"!isSearchedItems\">Recent Dishes</p>\n  <div class=\"change_content\" *ngIf=\"!isSearchedItems\">\n    <div class=\"left scroll_x\">\n      <app-small-meal-card *ngFor=\"let d of allCaloriesData\" [mealData]=\"d\" (replacedModal)=\"addCal($event,'')\"\n        (gotoView)=\"gotoView($event)\">\n      </app-small-meal-card>\n    </div>\n  </div>\n  <div>\n    <div style=\"margin-top: 30px\">\n      <ion-grid class=\"pad_0\" *ngIf=\"!isSearchedItems \">\n        <ion-row>\n          <ion-col size=\"8\">\n            <p class=\"change\">Whats's on your mind?</p>\n          </ion-col>\n          <ion-col size=\"4\" class=\"right\" *ngIf=\"isSearchedItems && allSearchData?.homeBased.length > 3\">\n          </ion-col>\n        </ion-row>\n        <p class=\"change2\">Best Home based suggestions</p>\n      </ion-grid>\n\n      <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n        <div *ngIf=\"!loaded\">\n          <ion-row *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]\">\n            <ion-col size=\"5.5\">\n              <ion-skeleton-text *ngIf=\"!loaded\" animated class=\"sketloan\" style=\"height: 40px;\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"5.5\">\n              <ion-skeleton-text *ngIf=\"!loaded\" animated class=\"sketloan\" style=\"height: 40px;\"></ion-skeleton-text>\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n\n        <div class=\"search-auto\" style=\"margin-top:-1rem;\" *ngIf=\"searchData?.length>0\">\n          <ion-card style=\"margin: 0; box-shadow:none;width:98%;\">\n            <ion-item *ngFor=\"let item of searchData; let ind=index;\" no-lines\n              style=\"--border-color:#fff; height: 90px;\">\n              <ion-label slot=\"start\"\n                style=\"font-size:.8rem;font-weight:400;line-height: 1.2;white-space:normal;flex: 0 0 60%;\">\n                <span style=\"font-size: var(--small-font);\n                            font-family: var(--font-medium);\n                            font-weight: 500;\n                            color: #666666;\">{{item?._source?.Food}}</span><br>\n                <span style=\"    font-size: var(--small-font);\n    font-family: var(--theme-newFont);\n    font-weight: 300;\n    color: #666666;\">{{item?._source?.portion}} {{item?._source?.portion_unit}}</span><br>\n                <span style=\"font-size:var(--small-font); color:#707070;\"\n                  [innerHTML]=\"highlightText(item?._source?.SynonymsName, searchValue)\">\n                </span>\n              </ion-label>\n              <div slot=\"end\" style=\"vertical-align: middle;display: inherit;\">\n                <!-- score logic -->\n\n                <div style=\"\n            color: #fff;\n            curson:none;\n            width: 80px;\n            text-align:center;\n            height:23px;margin-right: 1.5rem;--box-shadow: none;\" [ngClass]=\"getScoreClass(item)\" shape=\"round\">\n                  <span\n                    style=\"font-size:.7rem;text-transform:capitalize;\">{{ (item?._source?.Calories * item?._source?.portion) | number:'1.0-0' }}\n                    Kcal</span>\n                </div>\n\n\n                <!-- <div  style=\"\n            color: #fff;\n            curson:none;\n            width: 80px;\n            text-align:center;\n            height:23px;margin-right: 1.5rem;--box-shadow: none;\" \n            [ngClass]=\"item?._source?.PCOS_score == '9' ? 'Best' : item?._source?.PCOS_score == '6' ? 'Good' :item?._source?.PCOS_score == '3' ? 'Average': item?._source?.PCOS_score == '1' ? 'Fair' :'Unverified'\"\n            shape=\"round\">\n            <span style=\"font-size:.7rem;text-transform:capitalize;\">{{item?._source?.Calories | number:'1.0-0'}} Kcal</span>\n          </div> -->\n\n\n\n                <!-- end score logic -->\n\n                <ion-icon name=\"add-outline\" style=\"color:var(--theme-color);margin-left:1rem;font-size:1.1rem;right: 0;\n            position: absolute;border: 1px solid;\n            border-radius: 5px;border:1px solid; border-radius:5px;\" (click)=\"addCal(item)\"></ion-icon>\n              </div>\n            </ion-item>\n\n          </ion-card>\n        </div>\n\n      </ion-grid>\n\n      <!-- <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"change\">Home based Items:</p>\n        </ion-col>\n      </ion-row>\n      <p class=\"change2\">Best for the health</p>\n    </ion-grid>\n\n    <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n      <ion-row>\n        <ion-col\n          size=\"12\"\n          style=\"padding: 5px 10px\"\n          *ngFor=\"let d of allSearchData?.homeBased?.slice(0,expandH?allSearchData?.homeBased.length+1:3)\"\n        >\n          <app-filter-card\n            [data]=\"d\"\n            [loaded]=\"false\"\n            [slot]=\"slot\"\n          ></app-filter-card>\n        </ion-col>\n        <ion-col *ngIf=\"allSearchData?.homeBased?.length > 3 && show3===true\">\n          <div class=\"center\" style=\"margin-top: -20px\">\n            <ion-button\n              class=\"more\"\n              shape=\"round\"\n              fill=\"outline\"\n              (click)=\"onIonInfinite(expandH,'expandH')\"\n              >More</ion-button\n            >\n          </div>\n        </ion-col>\n        <ion-col *ngIf=\"allSearchData?.homeBased?.length === 0\">\n          <div class=\"center flex_col\" style=\"height: 150px\">\n            <ion-img\n              src=\"../../../../assets/newImages/search-icon.png\"\n            ></ion-img>\n            <p class=\"change2\" style=\"margin-top: 10px\">No item found</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n     -->\n      <div class=\"scroll_x\" style=\"padding: 10px\" *ngIf=\"!isSearchedItems\">\n        <div class=\"avtar_div\">\n          <div class=\"left flex_col avtar_div2\" *ngFor=\"let hb of allHomeBased;let i=index\"\n            (click)=\"viewSuggestions('H',hb?.name)\" [ngStyle]=\"{'margin-right':i%2 === 0?'5px':'0px'}\">\n            <ion-avatar class=\"avtars\" *ngIf=\"i%2 === 0\">\n              <img src=\"{{hb?.imageId}}\"\n                onerror=\"this.src='./assets/newImages/null.jpg';this.style='object-fit: contain'\" />\n            </ion-avatar>\n            <p *ngIf=\"i%2 === 0\" class=\"meal_cal alter_name\">{{hb?.name}}</p>\n          </div>\n        </div>\n        <div class=\"avtar_div\">\n          <div *ngFor=\"let hb of allHomeBased;let i=index\" (click)=\"viewSuggestions('H',hb?.name)\"\n            class=\"left flex_col avtar_div2\" [ngStyle]=\"{'margin-right':i%2 !== 0?'5px':'0px'}\">\n            <ion-avatar class=\"avtars\" *ngIf=\"i%2 !== 0\">\n              <img src=\"{{hb?.imageId}}\"\n                onerror=\"this.src='./assets/newImages/null.jpg';this.style='object-fit: contain'\" />\n            </ion-avatar>\n            <p *ngIf=\"i%2 !== 0\" class=\"meal_cal alter_name\">{{hb?.name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"margin-top: 20px\">\n      <ion-grid class=\"pad_0\" *ngIf=\"!isSearchedItems\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"change\" style=\"white-space: nowrap;\">Popular Restaurants</p>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <p *ngIf=\"!isSearchedItems\" class=\"change\" style=\"color: var(--theme-color); font-weight: 400\"\n              (click)=\"viewSuggestions('R')\">\n              View All\n            </p>\n          </ion-col>\n        </ion-row>\n        <p class=\"change2\">Let us help you to find the bad from the worst</p>\n      </ion-grid>\n\n      <!-- <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"change\">Restaurant items:</p>\n        </ion-col>\n      </ion-row>\n      <p class=\"change2\">We help you to choose better</p>\n    </ion-grid>\n    <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n      <ion-row>\n        <ion-col\n          size=\"12\"\n          style=\"padding: 5px 10px\"\n          *ngFor=\"let d of allSearchData?.restaurant?.slice(0,expandR?allSearchData?.restaurant.length+1:3)\"\n        >\n          <app-filter-card\n            [data]=\"d\"\n            [loaded]=\"false\"\n            [slot]=\"slot\"\n          ></app-filter-card>\n        </ion-col>\n        <ion-col *ngIf=\"allSearchData?.restaurant?.length > 3 && show2===true\">\n          <div class=\"center\" style=\"margin-top: -20px\">\n            <ion-button\n              class=\"more\"\n              shape=\"round\"\n              fill=\"outline\"\n              (click)=\"onIonInfinite(expandR,'expandR')\"\n              >More</ion-button\n            >\n          </div>\n        </ion-col>\n        <ion-col *ngIf=\"allSearchData?.restaurant?.length === 0\">\n          <div class=\"center flex_col\" style=\"height: 150px\">\n            <ion-img\n              src=\"../../../../assets/newImages/search-icon.png\"\n            ></ion-img>\n            <p class=\"change2\" style=\"margin-top: 10px\">No item found</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n      <div class=\"scroll_x left\" *ngIf=\"!isSearchedItems\">\n        <app-restaurant-card *ngFor=\"let d of allRestaurant\" [data]=\"d\" (goBack)=\"goBack()\" [slot]=\"slot\">\n        </app-restaurant-card>\n      </div>\n    </div>\n\n    <div style=\"margin-top: 30px\">\n      <ion-grid class=\"pad_0\" *ngIf=\"!isSearchedItems\">\n        <ion-row>\n          <ion-col>\n            <p class=\"change\">Go - To items from Groceries</p>\n          </ion-col>\n        </ion-row>\n        <p class=\"change2\">Let us help you to find the best of the lot</p>\n      </ion-grid>\n\n      <!-- <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n      <ion-row>\n        <ion-col size=\"8\">\n          <p class=\"change\">Packaged items:</p>\n        </ion-col>\n      </ion-row>\n      <p class=\"change2\">We help you to choose better</p>\n    </ion-grid>\n    <ion-grid class=\"pad_0\" *ngIf=\"isSearchedItems\">\n      <ion-row>\n        <ion-col\n          size=\"12\"\n          style=\"padding: 5px 10px\"\n          *ngFor=\"let d of allSearchData?.packaged?.slice(0,expandP?allSearchData?.packaged.length+1:3)\"\n        >\n          <app-filter-card\n            [data]=\"d\"\n            [loaded]=\"false\"\n            [slot]=\"slot\"\n          ></app-filter-card>\n        </ion-col>\n        <ion-col *ngIf=\"allSearchData?.packaged?.length > 3 && show1===true\">\n          <div class=\"center\" style=\"margin-top: -20px\">\n            <ion-button\n              class=\"more\"\n              shape=\"round\"\n              fill=\"outline\"\n              (click)=\"onIonInfinite(expandP,'expandP')\"\n              >More</ion-button\n            >\n          </div>\n        </ion-col>\n        <ion-col *ngIf=\"allSearchData?.packaged?.length === 0\">\n          <div class=\"center flex_col\" style=\"height: 150px\">\n            <ion-img\n              src=\"../../../../assets/newImages/search-icon.png\"\n            ></ion-img>\n            <p class=\"change2\" style=\"margin-top: 10px\">No item found</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n      <div *ngIf=\"!isSearchedItems\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\" *ngFor=\"let pkg of allPackages\" class=\"center flex-col\" style=\"padding: 10px 0px\"\n              (click)=\"viewSuggestions('P',pkg?.name)\">\n              <div class=\"left flex_col\">\n                <ion-avatar class=\"avtar\">\n                  <img src=\"{{pkg?.imageId}}\"\n                    onerror=\"this.src='./assets/newImages/null.jpg';this.style='object-fit: contain'\" />\n                </ion-avatar>\n                <p class=\"meal_cal alter_name\">{{pkg?.name}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_search_search_page_ts.js.map