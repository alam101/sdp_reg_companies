"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_alternate-diet_alternate-diet_module_ts"],{

/***/ 17677:
/*!*****************************************************************!*\
  !*** ./src/app/alternate-diet/alternate-diet-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateDietPageRoutingModule": () => (/* binding */ AlternateDietPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alternate_diet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alternate-diet.page */ 99759);




const routes = [
    {
        path: '',
        component: _alternate_diet_page__WEBPACK_IMPORTED_MODULE_0__.AlternateDietPage
    },
    {
        path: 'portion-count',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_small-meal-card_small-meal-card_module_ts"), __webpack_require__.e("src_app_alternate-diet_portion-count_portion-count_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./portion-count/portion-count.module */ 6000)).then(m => m.PortionCountPageModule)
    }
];
let AlternateDietPageRoutingModule = class AlternateDietPageRoutingModule {
};
AlternateDietPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlternateDietPageRoutingModule);



/***/ }),

/***/ 39680:
/*!*********************************************************!*\
  !*** ./src/app/alternate-diet/alternate-diet.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateDietPageModule": () => (/* binding */ AlternateDietPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _alternate_diet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alternate-diet-routing.module */ 17677);
/* harmony import */ var _alternate_diet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alternate-diet.page */ 99759);







let AlternateDietPageModule = class AlternateDietPageModule {
};
AlternateDietPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alternate_diet_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlternateDietPageRoutingModule
        ],
        declarations: [_alternate_diet_page__WEBPACK_IMPORTED_MODULE_1__.AlternateDietPage]
    })
], AlternateDietPageModule);



/***/ }),

/***/ 99759:
/*!*******************************************************!*\
  !*** ./src/app/alternate-diet/alternate-diet.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateDietPage": () => (/* binding */ AlternateDietPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _alternate_diet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alternate-diet.page.html?ngResource */ 96414);
/* harmony import */ var _alternate_diet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alternate-diet.page.scss?ngResource */ 70761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var _portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portion-count/portion-count.page */ 4637);












let AlternateDietPage = class AlternateDietPage {
  constructor(navCtrl, location, modalCtrl, popCtrl, appService, route, router) {
    this.navCtrl = navCtrl;
    this.location = location;
    this.modalCtrl = modalCtrl;
    this.popCtrl = popCtrl;
    this.appService = appService;
    this.route = route;
    this.router = router;
    this.data = {};
    this.plan = false;
    this.getCalData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.getDietdata = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.totalCal = 0;
    this.moment = (moment__WEBPACK_IMPORTED_MODULE_3___default());
    this.loaded = true;
    this.optionOpened = true;
    this.alternativeData = [];
    this.currentDateIndex = 0;
    this.route.queryParams.subscribe(params => {
      this.paramsData = params;
      this.paramsData = { ...params,
        portion: JSON.parse(params.portion)
      };
      console.log(this.paramsData);
    });
  }

  goBack() {
    console.log("this.paramsData?.router", this.paramsData?.router);
    this.navCtrl.navigateForward([this.paramsData?.router, {
      refresh: new Date().getTime()
    }]);
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
    if (this.paramsData) {
      this.getOption();
    }
  }

  filter(ele, type) {
    if (type) {
      return ele.addDiet = ele.food.filter(o => o?.eaten > 0 || this.paramsData?.foodCode.includes(o.itemCode) || this.paramsData?.eaten.includes(o.itemCode));
    } else {
      return ele.noneAddDiet = ele.food.filter(o => (!o.eaten || o?.eaten < 0) && !this.paramsData?.foodCode.includes(o.itemCode) && !this.paramsData?.eaten.includes(o.itemCode));
    }
  }

  getOption() {
    this.appService.getOptions1(this.paramsData?.slot, "", "").then(res => {
      this.alternativeData = res?.mealOptions[0]?.categories;
    });
  }

  addCal(data, fromMain) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //   //
      console.log("data", data);
      const modal = yield _this.modalCtrl.create({
        component: _portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_6__.PortionCountPage,
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

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const portionObject = this.paramsData?.portion.find(
      //   (p) => p.id === d.itemCode
      // );
      // d.portion = portionObject.portion;
      const popover = yield _this2.popCtrl.create({
        component: _portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_6__.PortionCountPage,
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


  gotoView(d) {}

};

AlternateDietPage.ctorParameters = () => [{
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
}];

AlternateDietPage.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  plan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  getCalData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  getDietdata: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }]
};
AlternateDietPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-alternate-diet",
  template: _alternate_diet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_alternate_diet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AlternateDietPage);


/***/ }),

/***/ 70761:
/*!********************************************************************!*\
  !*** ./src/app/alternate-diet/alternate-diet.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".back_icon_div {\n  background: var(--white);\n}\n.back_icon_div ion-icon {\n  color: var(--theme-color);\n  font-size: 25px;\n  margin: 10px 5px 10px 10px;\n}\n.back_icon_div p {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #333333;\n}\n.header_div {\n  width: 100%;\n  padding: 5px 10px;\n  position: relative;\n  border-bottom: 1px solid var(--card-border);\n}\n.header_div ion-img {\n  height: 15px !important;\n}\n.header_div p {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #333333;\n  margin-left: 20px;\n}\n.header_div span {\n  font-size: var(--xsmall-font);\n  margin-left: 10px;\n}\n.header_div ion-icon {\n  color: #333333;\n  font-size: var(--regular-font);\n  margin: 0px 5px -2px;\n}\n.scroll_y {\n  max-height: 250px;\n  padding-bottom: 30px;\n}\nion-card {\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n}\n.card_main_div {\n  padding: 10px;\n}\n.card_img {\n  object-fit: cover;\n}\n.card_img::part(image) {\n  border-radius: 5px;\n}\nion-thumbnail {\n  --size: 65px;\n  --border-radius: 14px;\n}\n.meal_pro_div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #666666;\n}\n.meal_title {\n  font-size: var(--regularM-font);\n  margin: 0px;\n  margin-bottom: 5px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #666666;\n}\n.dot_boarder {\n  margin: 0%;\n  border: 2px solid var(--theme-color);\n  height: 15px;\n  width: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.dot {\n  height: 5px;\n  width: 5px;\n  background: var(--theme-color);\n  border-radius: 100%;\n}\n.protien_progress {\n  --progress-background: #376c23;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.choice {\n  font-size: var(--xsmall-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #376c23;\n}\n.plus_icon {\n  font-size: 34px;\n  z-index: 1;\n  border-radius: 100%;\n  background: white;\n  color: var(--theme-newButton);\n  margin-right: -10px;\n}\n.card_logo {\n  border: 2px solid white;\n  height: 30px !important;\n  width: 30px;\n  border-radius: 100%;\n  padding: 5px;\n  position: absolute;\n  left: 0px;\n  top: -10px;\n  z-index: 999;\n  background: #febf47;\n}\n.no_data_title {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.no_data_subtitle {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 400;\n  color: var(--black);\n}\n.more_button_div {\n  margin-top: -24px;\n  z-index: 999;\n  width: 100%;\n  position: absolute;\n  bottom: -10px;\n}\n.more_button_div ion-button {\n  --border-color: #707070;\n  color: #707070;\n  font-size: var(--xsmall-font);\n  text-transform: none;\n  --background: var(--white);\n  --border-width: 1px;\n  height: 25px;\n  width: 110px;\n}\n.more_button_div .up_down_icon {\n  border: 1px solid var(--theme-color);\n  border-radius: 100px;\n  padding: 2px;\n  color: var(--theme-color);\n  background: var(--white);\n  box-shadow: var(--boxshadow);\n}\n.sketloan {\n  width: 100%;\n  height: 150px;\n  border-radius: 10px;\n}\n.logged_btn {\n  text-transform: none;\n  font-size: var(--xsmall-font);\n  font-weight: 300;\n  color: var(--black);\n  height: 25px;\n  width: 70px;\n  --border-color: var(--theme-newButton);\n  margin-right: -10px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --border-width: 0.5px;\n  --padding-bottom: 2px;\n}\n.logged_btn ion-icon {\n  color: var(--theme-newButton);\n  --ionicon-stroke-width:72px !important;\n  font-size: 14px;\n}\n.lock {\n  color: var(--black);\n  font-size: 25px;\n  margin: 0px 0px 0px 5px;\n}\n.lock_btn {\n  width: 75px !important;\n  --padding-start: 0px !important;\n  --padding-end: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdGVybmF0ZS1kaWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBRVI7QUFBSTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFFQTtFQUdJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFESjtBQUdJO0VBQ0UsdUJBQUE7QUFETjtBQUlJO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FBSE47QUFNSTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBSk47QUFRRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFMSjtBQVFFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBU0U7RUFDRSxhQUFBO0FBTko7QUFTRTtFQUtFLGlCQUFBO0FBVko7QUFXSTtFQUNFLGtCQUFBO0FBVE47QUFhRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBVko7QUFhRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVko7QUFjRTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFlRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWko7QUFlRTtFQUNFLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWko7QUFlRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVpKO0FBY0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFYSjtBQWFFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBVko7QUFZRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVRKO0FBV0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFSSjtBQVVFO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7QUFVRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVFO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVVFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFSSjtBQVVJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVJOO0FBV0k7RUFDSSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQVRSO0FBYUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVko7QUFhRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFWSjtBQVlJO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7QUFWTjtBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBYkY7QUFnQkE7RUFDRSxzQkFBQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUFiSiIsImZpbGUiOiJhbHRlcm5hdGUtZGlldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pY29uX2RpdntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luOjEwcHggNXB4IDEwcHggMTBweCA7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cbn1cblxuLmhlYWRlcl9kaXYge1xuICAgIC8vIGJhY2tncm91bmQ6ICNGRUJGNDc7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBcbiAgICBpb24taW1nIHtcbiAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWZvbnQpO1xuICAgICAgbWFyZ2luOiAwcHggNXB4IC0ycHg7XG4gICAgfVxuICB9XG4gIFxuICAuc2Nyb2xsX3kge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICBpb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94c2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuY2FyZF9tYWluX2RpdiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmNhcmRfaW1nIHtcbiAgICAvLyBoZWlnaHQ6IDEwNXB4O1xuICAgIC8vIHdpZHRoOiA4MHB4O1xuICAgIC8vIGhlaWdodDogODBweDtcbiAgICAvLyB3aWR0aDogNjVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAmOjpwYXJ0KGltYWdlKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG4gIFxuICBpb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDY1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICB9XG4gIFxuICAubWVhbF9wcm9fZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1lYWxfcHJvIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5tZWFsX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgfVxuICBcbiAgLm1lYWxfY2FsIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICB9XG4gIFxuICAuZG90X2JvYXJkZXIge1xuICAgIG1hcmdpbjogMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kb3Qge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbiAgXG4gIC5wcm90aWVuX3Byb2dyZXNzIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMzNzZjMjM7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkJlc3Qge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzM4YTUzNDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuR29vZCB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjOTRlYTBhO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9XG4gIC5BdmVyYWdlIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICNlYWRjMTg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkZhaXIge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI2ZmYTUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuVW52ZXJpZmllZCB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjN2Q3ZDdkNWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgXG4gIC5jaG9pY2Uge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMzc2YzIzO1xuICB9XG4gIFxuICAucGx1c19pY29uIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIH1cbiAgXG4gIC5jYXJkX2xvZ28ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAtMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYmFja2dyb3VuZDogI2ZlYmY0NztcbiAgfVxuICBcbiAgLm5vX2RhdGFfdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5vX2RhdGFfc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tb3JlX2J1dHRvbl9kaXYge1xuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogIzcwNzA3MDtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAxMTBweDtcbiAgICB9XG5cbiAgICAudXBfZG93bl9pY29ueyAgXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6dmFyKC0tdGhlbWUtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gICAgfVxuICB9XG4gIFxuICAuc2tldGxvYW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmxvZ2dlZF9idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMC41cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xuXG4gICAgaW9uLWljb257XG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6NzJweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuICB9XG5cblxuLmxvY2sge1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4ubG9ja19idG57XG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDsgXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiBcbiAgIl19 */";

/***/ }),

/***/ 96414:
/*!********************************************************************!*\
  !*** ./src/app/alternate-diet/alternate-diet.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar> </ion-toolbar>\n</ion-header> -->\n<div class=\"left back_icon_div paddingIos\">\n  <ion-icon name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n  <p (click)=\"goBack()\">Back</p>\n</div>\n<div style=\"padding: 5px 5%; background: var(--white)\">\n  <p class=\"meal_title\">Meal Alternatives</p>\n  <p class=\"meal_cal\">Best personalised alternatives for you</p>\n</div>\n<ion-content>\n  <div style=\"padding: 5%\">\n    <div *ngFor=\"let alter of alternativeData;let i = index\">\n      <div *ngIf=\"alter?.food?.length > 0\">\n        <div style=\"position: relative; margin-top: 30px\">\n          <ion-img class=\"card_logo\" src=\"../../../../assets/newImages/meal.png\"></ion-img>\n          <ion-skeleton-text *ngIf=\"!loaded\" animated class=\"sketloan\"></ion-skeleton-text>\n          <ion-card *ngIf=\"loaded\" style=\"margin-bottom: 0px; z-index: 8\">\n            <div class=\"header_div\">\n              <p>\n                {{alter?.name}}\n                <span>\n                  <ion-icon name=\"time-outline\"></ion-icon>\n                  <!-- {{moment(data?.time,'HH:mm').format('hh:mm a')}} -->\n                  12:00 pm\n                </span>\n              </p>\n            </div>\n\n            <div>\n              <div *ngFor=\"let d of filter(alter,true);let i = index; \">\n                <div class=\"d_flex card_main_div\"\n                  [ngStyle]=\"alter?.addDiet.length !== i+1 && {'border-bottom': '1px solid var(--card-border)'}\">\n                  <div class=\"center\" (click)=\"gotoView(d)\">\n                    <ion-thumbnail>\n                      <ion-img [src]=\"d?.imageUrl.replace('.png', '.jpg')\" class=\"card_img\"></ion-img>\n                    </ion-thumbnail>\n                  </div>\n                  <ion-grid class=\"w_100\">\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        <p class=\"meal_pro\">{{d?.Food}}</p>\n                        <p class=\"meal_cal\">\n                          {{getPortion(d)}} {{d?.portion_unit}}\n                        </p>\n                      </ion-col>\n\n                      <ion-col size=\"2\" class=\"right\" style=\"align-items: flex-start\">\n                        <!-- <div class=\"dot_boarder\"\n                          [ngStyle]=\"{'border-color':d?.foodType==='Ve' || d?.foodType==='V' ? 'var(--green)' : d?.foodType==='E' ? 'var(--yellow)': 'var(--red)'}\">\n                          <div class=\"dot\"\n                            [ngStyle]=\"{'background':d?.foodType==='Ve' || d?.foodType==='V' ? 'var(--green)' : d?.foodType==='E' ? 'var(--yellow)': 'var(--red)'}\">\n                          </div>\n                        </div> -->\n                      </ion-col>\n                    </ion-row>\n\n                    <div class=\"meal_pro_div\" style=\"margin-top: 10px\">\n                      <div>\n                        <p class=\"meal_cal\" style=\"font-weight: 500\">\n                          {{d?.Calories}} Kcal\n                        </p>\n                        <ion-progress-bar\n                          [ngClass]=\"d?.Score === '9' ? 'Best' : d?.Score === '6' ? 'Good' :d?.Score === '3' ? 'Average': d?.Score === '1' ? 'Fair' :'Unverified'\"\n                          value=\"1\"></ion-progress-bar>\n                        <p class=\"choice\">\n                          {{d?.Score === '9' ? 'Best' : d?.Score === '6' ?\n                          'Good' :d?.Score === '3' ? 'Average': d?.Score === '1'\n                          ? 'Fair' :'Unverified'}} Choice\n                        </p>\n                      </div>\n                      <ion-button *ngIf=\" d?.eaten > 0 || paramsData?.eaten.includes(d?.itemCode)\" fill=\"outline\"\n                        shape=\"round\" class=\"logged_btn\" (click)=\"loogeAction($event,d)\">\n                        <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n                        Logged\n                      </ion-button>\n                      <!-- [ngStyle]=\"{'color':!eat && 'lightgrey'}\" -->\n                      <ion-icon *ngIf=\" (!d.eaten || d?.eaten < 0) && !paramsData?.eaten.includes(d?.itemCode)\"\n                        class=\"plus_icon\" (click)=\"addCal(d,true)\" name=\"add-circle\"></ion-icon>\n                    </div>\n                  </ion-grid>\n                </div>\n              </div>\n            </div>\n\n            <div style=\"min-height: 60px; padding: 10px\" *ngIf=\"alter?.addDiet.length=== 0\">\n              <p class=\"no_data_subtitle\">\n                \"{{alter?.name}}\" are also good option at this time of day\n              </p>\n            </div>\n          </ion-card>\n\n          <div class=\"center more_button_div\" *ngIf=\"loaded\">\n            <ion-icon [name]=\"optionOpened ? 'chevron-up' : 'chevron-down'\" class=\"up_down_icon\"\n              (click)=\"upDown(alter)\"></ion-icon>\n          </div>\n        </div>\n\n        <div style=\"margin: 0px 5px\" *ngIf=\"!alter?.optionOpened\">\n          <div style=\"position: relative\">\n            <ion-card *ngIf=\"loaded\" style=\"margin-top: 0px; border-radius: 0px 0px 10px 10px\">\n              <div>\n                <!-- *ngFor=\"let d of alter?.food.slice(0,!alter.isOpen?2:alter?.food.length-1);let k = index\" -->\n                <div *ngFor=\"let d of filter(alter,false).slice(0,!alter.isOpen?2:alter?.food.length-1);let k = index\">\n                  <div class=\"d_flex card_main_div\"\n                    *ngIf=\"(!d.eaten || d?.eaten < 0) && !paramsData?.foodCode.includes(d.itemCode)\"\n                    [ngStyle]=\"alter?.noneAddDiet.length !== k+1 && {'border-bottom': '1px solid var(--card-border)'}\">\n                    <div class=\"center\" (click)=\"gotoView(d)\">\n                      <ion-thumbnail>\n                        <ion-img [src]=\"d?.imageUrl.replace('.png', '.jpg')\" class=\"card_img\"></ion-img>\n                      </ion-thumbnail>\n                    </div>\n                    <ion-grid class=\"w_100\">\n                      <ion-row>\n                        <ion-col size=\"10\">\n                          <p class=\"meal_pro\">{{d?.Food}}</p>\n                          <p class=\"meal_cal\">\n                            {{getPortion(d)}} {{d?.portion_unit}}\n                          </p>\n                        </ion-col>\n\n                        <ion-col size=\"2\" class=\"right\" style=\"align-items: flex-start\">\n                          <div class=\"dot_boarder\"\n                            [ngStyle]=\"{'border-color':d?.foodType==='Ve' || d?.foodType==='V' ? 'var(--green)' : d?.foodType==='E' ? 'var(--yellow)': 'var(--red)'}\">\n                            <div class=\"dot\"\n                              [ngStyle]=\"{'background':d?.foodType==='Ve' || d?.foodType==='V' ? 'var(--green)' : d?.foodType==='E' ? 'var(--yellow)': 'var(--red)'}\">\n                            </div>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n\n                      <div class=\"meal_pro_div\" style=\"margin-top: 10px\">\n                        <div>\n                          <p class=\"meal_cal\" style=\"font-weight: 500\">\n                            {{d?.Calories}} Kcal\n                          </p>\n                          <ion-progress-bar\n                            [ngClass]=\"d?.Score === '9' ? 'Best' : d?.Score === '6' ? 'Good' :d?.Score === '3' ? 'Average': d?.Score === '1'? 'Fair' :'Unverified'\"\n                            value=\"1\"></ion-progress-bar>\n                          <p class=\"choice\">\n                            {{d?.Score === '9' ? 'Best' : d?.Score === '6' ?\n                            'Good' :d?.Score === '3' ? 'Average': d?.Score ===\n                            '1' ? 'Fair' :'Unverified'}} Choice\n                          </p>\n                        </div>\n\n                        <!-- [ngStyle]=\"{'color':!eat && 'lightgrey'}\" -->\n                        <ion-icon *ngIf=\" !d.eaten || d?.eaten < 0\" class=\"plus_icon\" (click)=\"addCal(d,false)\"\n                          name=\"add-circle\"></ion-icon>\n                      </div>\n                    </ion-grid>\n                  </div>\n                </div>\n              </div>\n              <!-- <div *ngIf=\"data?.data?.length  === 0\">\n            <p class=\"no_data_title\">\"Eat Better Not Less\"</p>\n            <p class=\"no_data_subtitle\">Your slot is empty.</p>\n            <p class=\"no_data_subtitle\">Add something from the meal options.</p>\n            <ion-img src=\"../../../../assets/newImages/no-meal.png\"></ion-img>\n          </div> -->\n            </ion-card>\n\n            <div class=\"center more_button_div\" *ngIf=\"loaded\">\n              <ion-button *ngIf=\"paramsData?.plan === 'true'\" shape=\"round\" fill=\"outline\" (click)=\"gotoOption(alter)\">\n                {{alter?.noneAddDiet?.length-2}} More Options</ion-button>\n\n              <ion-button *ngIf=\"paramsData?.plan === 'false'\" shape=\"round\" fill=\"outline\" (click)=\"gotoOption(alter)\"\n                disabled class=\"lock_btn\">\n                <ion-icon class=\"lock\" *ngIf=\"!plan\" src=\"../../../../assets/newImages/Lock.svg\"></ion-icon>\n                {{alter?.noneAddDiet?.length-2}} More\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_alternate-diet_alternate-diet_module_ts.js.map