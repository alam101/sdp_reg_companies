"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_alternate-search_alternate-search_module_ts"],{

/***/ 62893:
/*!*********************************************************************!*\
  !*** ./src/app/alternate-search/alternate-search-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateSearchPageRoutingModule": () => (/* binding */ AlternateSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alternate_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alternate-search.page */ 55938);




const routes = [
    {
        path: '',
        component: _alternate_search_page__WEBPACK_IMPORTED_MODULE_0__.AlternateSearchPage
    }
];
let AlternateSearchPageRoutingModule = class AlternateSearchPageRoutingModule {
};
AlternateSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlternateSearchPageRoutingModule);



/***/ }),

/***/ 29854:
/*!*************************************************************!*\
  !*** ./src/app/alternate-search/alternate-search.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateSearchPageModule": () => (/* binding */ AlternateSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _alternate_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alternate-search-routing.module */ 62893);
/* harmony import */ var _alternate_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alternate-search.page */ 55938);
/* harmony import */ var _newBoarding_Components_meal_workout_meal_workout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newBoarding/Components/meal-workout/meal-workout.module */ 83270);







 ////meal-workout/meal-workout.module
let AlternateSearchPageModule = class AlternateSearchPageModule {
};
AlternateSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _alternate_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlternateSearchPageRoutingModule,
            _newBoarding_Components_meal_workout_meal_workout_module__WEBPACK_IMPORTED_MODULE_2__.MealWorkoutPageModule,
        ],
        declarations: [_alternate_search_page__WEBPACK_IMPORTED_MODULE_1__.AlternateSearchPage],
    })
], AlternateSearchPageModule);



/***/ }),

/***/ 55938:
/*!***********************************************************!*\
  !*** ./src/app/alternate-search/alternate-search.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateSearchPage": () => (/* binding */ AlternateSearchPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _alternate_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alternate-search.page.html?ngResource */ 97905);
/* harmony import */ var _alternate_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alternate-search.page.scss?ngResource */ 44158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alternate-diet/portion-count/portion-count.page */ 4637);
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.page */ 75105);













let AlternateSearchPage = class AlternateSearchPage {
  constructor(navCtrl, location, modalCtrl, popCtrl, appService, route, router, cdr) {
    this.navCtrl = navCtrl;
    this.location = location;
    this.modalCtrl = modalCtrl;
    this.popCtrl = popCtrl;
    this.appService = appService;
    this.route = route;
    this.router = router;
    this.cdr = cdr; // @Input() data: any = {};
    // @Input() plan: Boolean = false;
    // customerId: any;
    // @Output() getCalData = new EventEmitter();
    //@Output() getDietdata = new EventEmitter();

    this.totalCal = 0;
    this.moment = (moment__WEBPACK_IMPORTED_MODULE_3___default());
    this.loaded = true;
    this.optionOpened = true;
    this.alternativeData = [];
    this.currentDateIndex = 0;
    this.diets = [];
    this.selecteddate = new Date();
    this.activeSlotIndex = 0;
    this.today = new Date();
    this.tommorow = new Date(new Date().setDate(new Date().getDate() + 1));
    this.isDetox = false;
    this.route.queryParams.subscribe(params => {//   this.paramsData = params;
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
      calConsumed: 0
    };
    this.getDietdata(moment__WEBPACK_IMPORTED_MODULE_3___default()(this.selecteddate).format("DDMMYYYY"));
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
    const portionObject = this.paramsData?.portion.find(p => p.id === d.itemCode);

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
    console.log("came on alternative seach page "); // this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
  }

  filter(ele, type) {
    if (type) {
      return ele.addDiet = ele.food.filter(o => o?.eaten > 0 || this.paramsData?.foodCode.includes(o.itemCode) || this.paramsData?.eaten.includes(o.itemCode));
    } else {
      return ele.noneAddDiet = ele.food.filter(o => (!o.eaten || o?.eaten < 0) && !this.paramsData?.foodCode.includes(o.itemCode) && !this.paramsData?.eaten.includes(o.itemCode));
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

  addCal(data, fromMain) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_6__.PortionCountPage,
        cssClass: "portion_count",
        backdropDismiss: true,
        componentProps: {
          alterdata: data,
          type: "add"
        }
      });
      yield modal.present();
      const modaldata = yield modal.onDidDismiss();
      const d = modaldata?.data;

      if (d) {
        if (fromMain) {
          _this.updateEatenFoodItems(d, data);
        } else {
          _this.postOptionFoodList(d, data);
        }
      } else {
        data = data;
      }
    })();
  }

  postOptionFoodList(d, data) {
    const datas = {
      date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.dietDate,
      slot: Number(this.paramsData?.slot),
      foodCodeList: [{
        code: d.itemCode,
        portion: Number(d.portion),
        eaten: 2
      }],
      isUpdateDiet: true
    };
    this.appService.postOptionFoodList1(datas).then(res => {
      console.log(res);
      data.eaten = 2;
      data.portion = d.portion;
      data.Calories = d.Calories;
    }, err => {
      console.log(err);
    });
  }

  updateEatenFoodItems(d, data) {
    const datas = {
      date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.dietDate,
      foodCodeList: [{
        code: d.itemCode,
        portion: Number(d.portion),
        eaten: 2,
        slot: Number(this.paramsData?.slot)
      }]
    };
    this.appService.updateEatenFoodItems(datas).then(res => {
      console.log(res);
      data.eaten = 2;
    }, err => {
      console.log(err);
    });
  }

  loogeAction(event, d) {
    var _this2 = this;

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const portionObject = this.paramsData?.portion.find(
      //   (p) => p.id === d.itemCode
      // );
      // d.portion = portionObject.portion;
      const popover = yield _this2.popCtrl.create({
        component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_6__.PortionCountPage,
        cssClass: "logged_popover",
        event,
        mode: "ios",
        backdropDismiss: true,
        componentProps: {
          type: "logged",
          alterdata: d
        }
      });
      yield popover.present();
      const data = yield popover.onDidDismiss();
      console.log(data);

      if (data?.data) {
        if (data?.data?.type === "edit") {
          _this2.addCal(d, true);
        } else if (data?.data?.type === "remove") {
          _this2.remove(d);
        }
      }
    })();
  }

  remove(d) {
    const datas = {
      date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.dietDate,
      foodCodeList: [{
        code: d.itemCode,
        portion: Number(d.portion),
        eaten: -1,
        slot: Number(this.paramsData?.slot)
      }]
    };
    this.appService.updateEatenFoodItems(datas).then(res => {
      console.log(res);
      d.eaten = -1;
      console.log(this.paramsData?.eaten);

      if (this.paramsData?.eaten.includes(d?.itemCode)) {
        this.paramsData?.eaten.splice(this.paramsData?.eaten.findIndex(o => o === d?.itemCode), 1);
      }
    }, err => {
      console.log(err);
    });
  }

  gotoOption(alter) {
    if (alter?.isOpen) {
      alter.isOpen = false;
    } else {
      alter.isOpen = true;
    }
  } // addCal(d, i) {}


  gotoView(d) {} /// new APi call//


  getDietdata(date) {
    console.log("get dite data called");
    this.allData = {
      Carbs: 0,
      Fat: 0,
      Fiber: 0,
      Protien: 0,
      totalCal: 0,
      targetCal: {},
      calConsumed: 0
    };
    this.appService.getDietPlans(src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.isDetox, date, src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.country, src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.defaultCalories).then(res => {
      console.log("res", res);
      this.diets = res;
      console.log("data came ", this.diets);
      this.allData.targetCal = res;
      this.diets.diets.forEach(ele => {
        ele.data.forEach(element => {
          if (element.eaten > 0) {
            this.allData.totalCal = Math.ceil(Number(this.allData.totalCal + element.Calories));
            this.allData.Carbs = Math.ceil(Number(this.allData.Carbs + element.Carbs));
            this.allData.Fat = Math.ceil(Number(this.allData.Fat + element.Fat));
            this.allData.Fiber = Math.ceil(Number(this.allData.Fiber + element.Fiber));
            this.allData.Protien = Math.ceil(Number(this.allData.Protien + element.Protien));
          }
        });
      });
      this.cdr.detectChanges();
    });
  }

  checkPlan() {
    this.appService.getOnePlan().then(res => {
      this.plandata = res;
      let exp = new Date(this.plandata.planExpiryDate).getTime();
      let newDate = new Date().getTime();
      console.log(exp, newDate); // if (this.plandata.planType?.toLowerCase()==='premium') {
      //   this.plandata.isPlanActive = true;
      // }

      console.log("plan==========>", res);
    });
  }

  gotoSearch() {
    var _this3 = this;

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.modalCtrl.dismiss();

      console.log("Go to search called");
      const modal = yield _this3.modalCtrl.create({
        component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__.SearchPage,
        //cssClass: "change_item",
        backdropDismiss: true,
        componentProps: {//alterdata: data,
          //type: "change",
        }
      });
      yield modal.present();
      const modaldata = yield modal.onDidDismiss();
      const d = modaldata?.data;

      if (d) {
        _this3.getDietdata(moment__WEBPACK_IMPORTED_MODULE_3___default()(_this3.selecteddate).format("DDMMYYYY"));
      }
    })();
  }

  goToAnalysis() {}

  getCalData(event, i) {}

};

AlternateSearchPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
}, {
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
}];

AlternateSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-alternate-search",
  template: _alternate_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_alternate_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AlternateSearchPage);


/***/ }),

/***/ 44158:
/*!************************************************************************!*\
  !*** ./src/app/alternate-search/alternate-search.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".back_icon_div {\n  background: var(--white);\n}\n.back_icon_div ion-icon {\n  color: var(--theme-color);\n  font-size: 25px;\n  margin: 10px 5px 10px 10px;\n}\n.back_icon_div p {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #333333;\n}\n.header_div {\n  width: 100%;\n  padding: 5px 10px;\n  position: relative;\n  border-bottom: 1px solid var(--card-border);\n}\n.header_div ion-img {\n  height: 15px !important;\n}\n.header_div p {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #333333;\n  margin-left: 20px;\n}\n.header_div span {\n  font-size: var(--xsmall-font);\n  margin-left: 10px;\n}\n.header_div ion-icon {\n  color: #333333;\n  font-size: var(--regular-font);\n  margin: 0px 5px -2px;\n}\n.scroll_y {\n  max-height: 250px;\n  padding-bottom: 30px;\n}\nion-card {\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n}\n.card_main_div {\n  padding: 10px;\n}\n.card_img {\n  object-fit: cover;\n}\n.card_img::part(image) {\n  border-radius: 5px;\n}\nion-thumbnail {\n  --size: 65px;\n  --border-radius: 14px;\n}\n.meal_pro_div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #666666;\n}\n.meal_title {\n  font-size: var(--regularM-font);\n  margin: 0px;\n  margin-bottom: 5px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #666666;\n}\n.dot_boarder {\n  margin: 0%;\n  border: 2px solid var(--theme-color);\n  height: 15px;\n  width: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.dot {\n  height: 5px;\n  width: 5px;\n  background: var(--theme-color);\n  border-radius: 100%;\n}\n.protien_progress {\n  --progress-background: #376c23;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.choice {\n  font-size: var(--xsmall-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #376c23;\n}\n.plus_icon {\n  font-size: 34px;\n  z-index: 1;\n  border-radius: 100%;\n  background: white;\n  color: var(--theme-newButton);\n  margin-right: -10px;\n}\n.card_logo {\n  border: 2px solid white;\n  height: 30px !important;\n  width: 30px;\n  border-radius: 100%;\n  padding: 5px;\n  position: absolute;\n  left: 0px;\n  top: -10px;\n  z-index: 999;\n  background: #febf47;\n}\n.no_data_title {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.no_data_subtitle {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 400;\n  color: var(--black);\n}\n.more_button_div {\n  margin-top: -24px;\n  z-index: 999;\n  width: 100%;\n  position: absolute;\n  bottom: -10px;\n}\n.more_button_div ion-button {\n  --border-color: #707070;\n  color: #707070;\n  font-size: var(--xsmall-font);\n  text-transform: none;\n  --background: var(--white);\n  --border-width: 1px;\n  height: 25px;\n  width: 110px;\n}\n.more_button_div .up_down_icon {\n  border: 1px solid var(--theme-color);\n  border-radius: 100px;\n  padding: 2px;\n  color: var(--theme-color);\n  background: var(--white);\n  box-shadow: var(--boxshadow);\n}\n.sketloan {\n  width: 100%;\n  height: 150px;\n  border-radius: 10px;\n}\n.logged_btn {\n  text-transform: none;\n  font-size: var(--xsmall-font);\n  font-weight: 300;\n  color: var(--black);\n  height: 25px;\n  width: 70px;\n  --border-color: var(--theme-newButton);\n  margin-right: -10px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --border-width: 0.5px;\n  --padding-bottom: 2px;\n}\n.logged_btn ion-icon {\n  color: var(--theme-newButton);\n  --ionicon-stroke-width: 72px !important;\n  font-size: 14px;\n}\n.lock {\n  color: var(--black);\n  font-size: 25px;\n  margin: 0px 0px 0px 5px;\n}\n.lock_btn {\n  width: 75px !important;\n  --padding-start: 0px !important;\n  --padding-end: 5px !important;\n}\n.main_div {\n  min-height: 100%;\n  background: var(--white);\n  border-radius: 40px 40px 0px 0px;\n  padding-bottom: 30px;\n}\n.month {\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n  margin: 5px;\n}\n.week_array {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n.week_array p {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n  margin: 0%;\n  background: var(--white);\n  padding: 5px;\n  border-radius: 5px;\n  height: 40px;\n  min-width: 40px;\n}\n.isSelectedDate {\n  color: var(--theme-color) !important;\n  border-bottom: 3px solid var(--theme-color);\n  border-radius: 0px !important;\n}\n.meal_workout_div {\n  padding: 10px;\n}\n.meal_workout_title_div {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 20px 0px;\n}\n.meal_workout_title {\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n  margin: 0px;\n}\n.meal_workout_button {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--theme-color);\n  text-align: center;\n  margin: 0px;\n}\n.date {\n  margin: 20px 30px;\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n.pre_nxt_btn {\n  color: var(--theme-color);\n}\n.search_heading {\n  text-align: center;\n  font-size: var(--regular-font);\n  color: #575454;\n  font-family: var(--theme-newFont);\n  padding: 17px;\n  margin: 0px !important;\n}\n.search_footer {\n  height: 184px;\n  background-color: #f4f4f4;\n}\n.searchbar {\n  border: 1px solid #6e6e6e;\n  color: var(--black);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.search_subheading {\n  text-align: center;\n  font-size: var(--small-font);\n  color: #6e6e6e;\n  font-family: var(--theme-newFont);\n  padding: 17px;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdGVybmF0ZS1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFFSjtBQUFFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUVBO0VBR0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQURGO0FBR0U7RUFDRSx1QkFBQTtBQURKO0FBSUU7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQVFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUxGO0FBUUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFTQTtFQUNFLGFBQUE7QUFORjtBQVNBO0VBS0UsaUJBQUE7QUFWRjtBQVdFO0VBQ0Usa0JBQUE7QUFUSjtBQWFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBVkY7QUFhQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFWRjtBQWFBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFWRjtBQWNBO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWVBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFaRjtBQWVBO0VBQ0UsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFB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RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFyQkY7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBckJGO0FBd0JBO0VBQ0UseUJBQUE7QUFyQkY7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBckJGO0FBd0JBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBckJGO0FBd0JBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXJCRjtBQXdCQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFyQkYiLCJmaWxlIjoiYWx0ZXJuYXRlLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pY29uX2RpdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbn1cblxuLmhlYWRlcl9kaXYge1xuICAvLyBiYWNrZ3JvdW5kOiAjRkVCRjQ3O1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuXG4gIGlvbi1pbWcge1xuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgICBtYXJnaW46IDBweCA1cHggLTJweDtcbiAgfVxufVxuXG4uc2Nyb2xsX3kge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94c2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkX21haW5fZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmRfaW1nIHtcbiAgLy8gaGVpZ2h0OiAxMDVweDtcbiAgLy8gd2lkdGg6IDgwcHg7XG4gIC8vIGhlaWdodDogODBweDtcbiAgLy8gd2lkdGg6IDY1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAmOjpwYXJ0KGltYWdlKSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAtLXNpemU6IDY1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1lYWxfcHJvX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZWFsX3BybyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICAvLyB3aWR0aDogMjAwcHg7XG59XG5cbi5tZWFsX3RpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyTS1mb250KTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAvLyB3aWR0aDogMjAwcHg7XG59XG5cbi5tZWFsX2NhbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG4uZG90X2JvYXJkZXIge1xuICBtYXJnaW46IDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZG90IHtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnByb3RpZW5fcHJvZ3Jlc3Mge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMzNzZjMjM7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDJweCAwcHg7XG59XG4uQmVzdCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzM4YTUzNDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cbi5Hb29kIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjOTRlYTBhO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luOiAycHggMHB4O1xufVxuLkF2ZXJhZ2Uge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICNlYWRjMTg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDJweCAwcHg7XG59XG4uRmFpciB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI2ZmYTUwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cbi5VbnZlcmlmaWVkIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjN2Q3ZDdkNWU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDJweCAwcHg7XG59XG5cbi5jaG9pY2Uge1xuICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMzNzZjMjM7XG59XG5cbi5wbHVzX2ljb24ge1xuICBmb250LXNpemU6IDM0cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLmNhcmRfbG9nbyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogLTEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogI2ZlYmY0Nztcbn1cblxuLm5vX2RhdGFfdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9fZGF0YV9zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vcmVfYnV0dG9uX2RpdiB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItY29sb3I6ICM3MDcwNzA7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICB9XG5cbiAgLnVwX2Rvd25faWNvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICB9XG59XG5cbi5za2V0bG9hbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubG9nZ2VkX2J0biB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogNzBweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwLjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA3MnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5sb2NrIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbn1cblxuLmxvY2tfYnRuIHtcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluX2RpdiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDBweCAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICY6OnBhcnQoYmFja2dyb3VuZCkge1xuLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbi8vICAgfVxuLy8gfVxuXG4ubW9udGgge1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi53ZWVrX2FycmF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICB9XG59XG5cbi5pc1NlbGVjdGVkRGF0ZSB7XG4gIC8vIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpICFpbXBvcnRhbnQ7XG5cbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudCA7XG59XG5cbi5tZWFsX3dvcmtvdXRfZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lYWxfd29ya291dF90aXRsZV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMjBweCAyMHB4IDBweDtcbn1cblxuLm1lYWxfd29ya291dF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbn1cblxuLm1lYWxfd29ya291dF9idXR0b24ge1xuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5kYXRlIHtcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLnByZV9ueHRfYnRuIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnNlYXJjaF9oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gIGNvbG9yOiAjNTc1NDU0O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hfZm9vdGVyIHtcbiAgaGVpZ2h0OiAxODRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZTZlNmU7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHBhZGRpbmc6IDAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5zZWFyY2hfc3ViaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgY29sb3I6ICM2ZTZlNmU7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgcGFkZGluZzogMTdweDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 97905:
/*!************************************************************************!*\
  !*** ./src/app/alternate-search/alternate-search.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar> </ion-toolbar>\n</ion-header> -->\n<div class=\"left back_icon_div paddingIos\">\n  <ion-icon name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n  <p (click)=\"goBack()\">Back</p>\n</div>\n<div style=\"padding: 5px 5%; background: var(--white)\">\n  <p class=\"meal_title\">Track calories from recommended items</p>\n  <!-- <p class=\"meal_cal\">Best personalised alternatives for you</p> -->\n</div>\n<ion-content>\n  <!-- <div class=\"meal_workout_title_div\">\n    <p class=\"meal_workout_title\">Diet for today</p>\n    <p class=\"meal_workout_button\" (click)=\"goToAnalysis()\">Diet info</p>\n  </div> -->\n  <div class=\"meal_workout_div\" *ngFor=\"let d of diets.diets;let i = index\">\n    <app-meal-workout [data]=\"d\" [diets]=\"diets.diets\" [index]=\"i\" [selecteddate]=\"selecteddate\"\n      [end_time]=\"diets?.diets.length !== i+1 ? diets?.diets[i+1]?.time: diets?.diets[0]?.time\"\n      (getCalData)=\"getCalData($event,i)\" [fullShow]=\"true\"\n      [eat]=\"moment(selecteddate).format('DD-MM-YYYY') === moment(today).format('DD-MM-YYYY')\"\n      [plan]=\"plandata?.isPlanActive\" (getDietdata)=\"getDietdata($event)\" [showAddPopup]=\"true\" from=\"alter\">\n    </app-meal-workout>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"search_footer\">\n    <p class=\"search_heading\">Planning to eat something else?</p>\n    <div class=\"seach_div\">\n      <ion-searchbar mode=\"md\" class=\"searchbar\" placeholder=\"Search for Food\" (click)=\"gotoSearch()\"></ion-searchbar>\n    </div>\n    <p class=\"search_subheading\">\n      You can search from our database of 84+ thousand food items\n    </p>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_alternate-search_alternate-search_module_ts.js.map