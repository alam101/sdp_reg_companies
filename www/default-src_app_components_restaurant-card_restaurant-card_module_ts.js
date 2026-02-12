"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_restaurant-card_restaurant-card_module_ts"],{

/***/ 12699:
/*!************************************************************!*\
  !*** ./src/app/components/filter-sort/filter-sort.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterSortPage": () => (/* binding */ FilterSortPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _filter_sort_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-sort.page.html?ngResource */ 43128);
/* harmony import */ var _filter_sort_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-sort.page.scss?ngResource */ 28577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let FilterSortPage = class FilterSortPage {
    constructor() { }
    ngOnInit() {
    }
};
FilterSortPage.ctorParameters = () => [];
FilterSortPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-filter-sort',
        template: _filter_sort_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_filter_sort_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilterSortPage);



/***/ }),

/***/ 14811:
/*!******************************************************************************!*\
  !*** ./src/app/components/restaurant-card/restaurant-card-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantCardPageRoutingModule": () => (/* binding */ RestaurantCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _restaurant_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-card.page */ 91044);




const routes = [
    {
        path: '',
        component: _restaurant_card_page__WEBPACK_IMPORTED_MODULE_0__.RestaurantCardPage
    }
];
let RestaurantCardPageRoutingModule = class RestaurantCardPageRoutingModule {
};
RestaurantCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestaurantCardPageRoutingModule);



/***/ }),

/***/ 14719:
/*!**********************************************************************!*\
  !*** ./src/app/components/restaurant-card/restaurant-card.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantCardPageModule": () => (/* binding */ RestaurantCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _restaurant_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-card-routing.module */ 14811);
/* harmony import */ var _restaurant_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-card.page */ 91044);







let RestaurantCardPageModule = class RestaurantCardPageModule {
};
RestaurantCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _restaurant_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestaurantCardPageRoutingModule,
        ],
        declarations: [_restaurant_card_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantCardPage],
        exports: [_restaurant_card_page__WEBPACK_IMPORTED_MODULE_1__.RestaurantCardPage],
    })
], RestaurantCardPageModule);



/***/ }),

/***/ 91044:
/*!********************************************************************!*\
  !*** ./src/app/components/restaurant-card/restaurant-card.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantCardPage": () => (/* binding */ RestaurantCardPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _restaurant_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-card.page.html?ngResource */ 24185);
/* harmony import */ var _restaurant_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-card.page.scss?ngResource */ 85855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _view_restaurant_view_restaurant_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../view-restaurant/view-restaurant.page */ 69749);










let RestaurantCardPage = class RestaurantCardPage {
  constructor(navCtrl, router, modalCtrl, utilities) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.utilities = utilities;
    this.data = {};
    this.slot = {};
    this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.image_URL = "";
  }

  ngOnInit() {
    this.image_URL = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_3__.CONSTANTS.image_URL;
    this.data.url = this.router.url;
  }

  viewRestaurant() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.goBack.emit();
      // this.navCtrl.navigateForward(["/view-restaurant"], {
      //   queryParams: { data: JSON.stringify(this.data) },
      // });
      const modal = yield _this.modalCtrl.create({
        component: _view_restaurant_view_restaurant_page__WEBPACK_IMPORTED_MODULE_5__.ViewRestaurantPage,
        id: "ViewRestaurantPage",
        componentProps: {
          data: _this.data,
          slot: _this.slot
        }
      });

      _this.utilities.storeModal(modal);

      modal.present();
      modal.onDidDismiss().then(res => {
        // setTimeout(() => {
        _this.modalCtrl.dismiss(); // }, 1000);

      });
    })();
  }

};

RestaurantCardPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES
}];

RestaurantCardPage.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  slot: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  goBack: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};
RestaurantCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: "app-restaurant-card",
  template: _restaurant_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_restaurant_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RestaurantCardPage);


/***/ }),

/***/ 69749:
/*!*********************************************************!*\
  !*** ./src/app/view-restaurant/view-restaurant.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRestaurantPage": () => (/* binding */ ViewRestaurantPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _view_restaurant_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-restaurant.page.html?ngResource */ 75658);
/* harmony import */ var _view_restaurant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-restaurant.page.scss?ngResource */ 84950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 70900);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _components_filter_sort_filter_sort_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/filter-sort/filter-sort.page */ 12699);











let ViewRestaurantPage = class ViewRestaurantPage {
  constructor(appServices, route, modalCtrl, utility, navCtrl) {
    this.appServices = appServices;
    this.route = route;
    this.modalCtrl = modalCtrl;
    this.utility = utility;
    this.navCtrl = navCtrl;
    this.data = {};
    this.slot = {};
    this.isDetox = false;
    this.allData = {};
    this.diets = [];
    this.defaultImg = `this.src=${src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.defaultImg};this.style='object-fit: contain'`; // data: any = {};

    this.categoryList = [];
    this.currentTimedata = {};
    this.allRestProduct = [];
    this.loaded = false;
    this.dataType = "";
    this.mainProductData = [];
    this.dataTypeList = [{
      name: "V",
      isChecked: false,
      title: "Veg"
    }, {
      name: "NV",
      isChecked: false,
      title: "Non Veg"
    }, {
      name: "VE",
      isChecked: false,
      title: "Vegan"
    }];
    this.platform = false; // this.route.queryParams.subscribe((res) => {
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
    this.getAllRstaurantByCategory("R", this.data?.brandCode?.split("/").toString()); //  this.getCatWiseProduct("name", this.data?.brandCode?.split("/").toString());
  }

  searchFood(e) {
    console.log(this.dataType, e);

    if (e) {
      this.allRestProduct = this.mainProductData.filter(f => f.Food?.toLowerCase().includes(e.toLowerCase()));
    } else {
      this.allRestProduct = this.mainProductData; // }
    }
  }

  filterDataType(e, data) {
    console.log(e);

    if (e) {
      this.dataTypeList.forEach(element => {
        if (element.name !== data.name) {
          element.isChecked = false;
        }
      });
      this.dataType = data.name;
      console.log("testt", this.dataType);

      if (data.name === "V") {
        this.allRestProduct = this.mainProductData.filter(f => f.foodType?.toLowerCase() === this.dataType?.toLowerCase() || f.foodType?.toLowerCase() === "ve");
      } else {
        this.allRestProduct = this.mainProductData.filter(f => f.foodType?.toLowerCase() === this.dataType?.toLowerCase());
      }
    } else {
      this.dataType = "";
      this.allRestProduct = this.mainProductData;
    }

    console.log(this.allRestProduct);
  }

  presentModal(type) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _components_filter_sort_filter_sort_page__WEBPACK_IMPORTED_MODULE_6__.FilterSortPage,
        // cssClass: this.isKeyBoardShows ? "small-modal-kb" : "small-modal",
        cssClass: "small-modal",
        backdropDismiss: true,
        componentProps: {
          type
        }
      });
      yield modal.present();
      yield modal.onDidDismiss().then(res => {});
    })();
  }

  getAllRstaurantByCategory(type, value) {
    this.allRestProduct = [];
    this.mainProductData = [];
    this.loaded = true;
    this.appServices.getAllRstaurantByCategory(type, value).then(res => {
      console.log(res);
      this.loaded = false;

      if (res.code === "0000") {
        this.allRestProduct = res?.dataList;
        this.mainProductData = res?.dataList;
        this.fiterDefault();
      }
    }, err => {
      this.loaded = false;
    });
  }

  fiterDefault() {
    if (this.dataType != "") {
      this.allRestProduct = this.mainProductData.filter(f => f.foodType?.toLowerCase() === this.dataType?.toLowerCase());
    }
  }

  getCatWiseProduct(type, value) {
    this.utility.showLoading();
    this.appServices.getAllRstaurant(false, type, value).then(res => {
      this.utility.hideLoader();
      console.log(res);

      if (res.code === "0000") {
        this.allRestProduct = res?.dataList;
      }
    }, err => {
      this.utility.hideLoader();
    });
  }

};

ViewRestaurantPage.ctorParameters = () => [{
  type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_5__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}];

ViewRestaurantPage.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  slot: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
ViewRestaurantPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-view-restaurant",
  template: _view_restaurant_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_view_restaurant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ViewRestaurantPage);


/***/ }),

/***/ 28577:
/*!*************************************************************************!*\
  !*** ./src/app/components/filter-sort/filter-sort.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1zb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImZpbHRlci1zb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";

/***/ }),

/***/ 85855:
/*!*********************************************************************************!*\
  !*** ./src/app/components/restaurant-card/restaurant-card.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".product_card {\n  margin: 5px;\n  margin-top: 10px;\n  padding: 5px;\n  box-shadow: var(--boxshadow);\n  width: 120px;\n  border-radius: 8px;\n}\n.product_card .img_div {\n  height: 100px;\n  border: 2px solid var(--card-border);\n  border-radius: 8px;\n  padding: 5px;\n}\n.product_card .img_div ion-img {\n  width: 95%;\n  height: 95%;\n  object-fit: contain;\n  border-radius: 10px;\n}\n.product_card .img_div img {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n  border-radius: 10px;\n}\n.product_card ion-icon {\n  color: var(--theme-newButton);\n  font-size: 25px;\n  background: var(--white);\n  border-radius: 100%;\n}\n.change {\n  color: var(--black);\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  margin-bottom: 2px;\n}\n.change2 {\n  color: #707070;\n  font-size: var(--xsmall-font);\n  font-family: var(--theme-newFont);\n  font-weight: 400;\n  margin: 0%;\n}\n.healthy {\n  color: #38a534;\n  font-size: var(--xsmall-font);\n  margin-top: 0%;\n}\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Bad {\n  --progress-background: red;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQtY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ssYUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ1Q7QUFDUztFQUNHLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDRixtQkFBQTtBQUNWO0FBRVM7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBVjtBQUlJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUZOO0FBTUU7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0FBSko7QUFPRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBSko7QUFRRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFMSjtBQVFFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTEo7QUFPRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUU7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjtBQUtFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRko7QUFJRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0U7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJyZXN0YXVyYW50LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RfY2FyZCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94c2hhZG93KTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBcbiAgICAuaW1nX2RpdntcbiAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgICAgaW9uLWltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgIH1cblxuICAgICAgICAgaW1ne1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jaGFuZ2Uge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgXG4gIC5jaGFuZ2UyIHtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDAlO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmhlYWx0aHl7XG4gICAgY29sb3I6ICMzOGE1MzQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gIH1cblxuICAuQmVzdCB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMzhhNTM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9XG4gIC5Hb29kIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICM5NGVhMGE7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkF2ZXJhZ2Uge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI2VhZGMxODtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuRmFpciB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjZmZhNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9XG4gIC5VbnZlcmlmaWVkIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICM3ZDdkN2Q1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuQmFke1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9Il19 */";

/***/ }),

/***/ 84950:
/*!**********************************************************************!*\
  !*** ./src/app/view-restaurant/view-restaurant.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".back_btn {\n  color: black;\n  font-family: var(--theme-newFont);\n  font-size: var(--regularM-font);\n  text-transform: none;\n}\n.back_btn ion-icon {\n  color: var(--theme-color);\n}\n.ion_content_div {\n  margin-top: 50px;\n}\n.close {\n  position: absolute;\n  right: 25px;\n  font-size: 35px;\n  color: var(--theme-color);\n  background: white;\n  border-radius: 100%;\n  z-index: 9999;\n}\n.main_div {\n  min-height: 100%;\n  background: var(--white);\n  border-radius: 40px 40px 0px 0px;\n  position: relative;\n  padding: 50px 10px 0px 10px;\n}\nion-header {\n  background: white;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1607843137) !important;\n  margin-top: 50px;\n}\nion-header ion-toolbar {\n  --background: white;\n  padding-top: 0 !important;\n  top: 1.5rem;\n}\nion-header ion-toolbar ion-title {\n  color: var(--black);\n  font-size: 22px;\n  font-family: var(--theme-newFont);\n  font-weight: 700;\n  padding: 0%;\n}\nion-header ion-toolbar img {\n  height: 80px;\n  object-fit: contain;\n}\nion-header ion-toolbar .searchbar {\n  border: 1px solid var(--theme-color);\n  color: var(--black);\n  font-size: var(--small-font);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nion-header ion-toolbar .filter_div {\n  margin: 10px 0px;\n}\nion-header ion-toolbar .filter_div ion-button::part(native) {\n  border-color: var(--theme-color);\n  text-transform: none;\n  color: var(--black);\n  font-size: var(--small-font);\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 30px;\n  border-width: 1px;\n}\n.change {\n  color: var(--black);\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  margin-bottom: 2px;\n}\n.change2 {\n  color: #707070;\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 400;\n  margin-top: 0%;\n  margin-bottom: 5px;\n}\n.healthy {\n  color: #38a534;\n  font-size: var(--xsmall-font);\n  margin-top: 0%;\n  font-weight: 700;\n}\n.no_data_title {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.no_data_subtitle {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.tgl_title {\n  font-size: var(--xsmall-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n.VE {\n  height: 10px;\n  width: 40px;\n  padding: 0px;\n  --handle-width: 15px;\n  --handle-height: 15px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  overflow: visible;\n  contain: none;\n}\n.VE::part(handle) {\n  background: var(--green);\n  border-radius: 4px;\n  box-shadow: none;\n}\n.VE::part(track) {\n  background: #ddd;\n}\n.VE.toggle-checked::part(track) {\n  background: var(--green);\n}\n.V {\n  height: 10px;\n  width: 40px;\n  padding: 0px;\n  --handle-width: 15px;\n  --handle-height: 15px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  overflow: visible;\n  contain: none;\n}\n.V::part(handle) {\n  background: #94ea0a;\n  border-radius: 4px;\n  box-shadow: none;\n}\n.V::part(track) {\n  background: #ddd;\n}\n.V.toggle-checked::part(track) {\n  background: #94ea0a;\n}\n.NV {\n  height: 10px;\n  width: 40px;\n  padding: 0px;\n  --handle-width: 15px;\n  --handle-height: 15px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  overflow: visible;\n  contain: none;\n}\n.NV::part(handle) {\n  background: var(--red);\n  border-radius: 4px;\n  box-shadow: none;\n}\n.NV::part(track) {\n  background: #ddd;\n}\n.NV.toggle-checked::part(track) {\n  background: var(--red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcmVzdGF1cmFudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFFQTtFQUdFLGdCQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRkY7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUVBLGtCQUFBO0VBQ0QsMkJBQUE7QUFIRDtBQU1BO0VBQ0ksaUJBQUE7RUFDQSw4REFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBSFI7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRlo7QUFNTztFQUNLLFlBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBUWdCO0VBQ0ksZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTnBCO0FBYUE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0FBWEo7QUFjRTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWVFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBWko7QUFlRTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWVFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWVFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWko7QUFlRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBWko7QUFjSTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVpOO0FBZUU7RUFDRSxnQkFBQTtBQVpKO0FBY0U7RUFDRSx3QkFBQTtBQVhKO0FBY0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQVhKO0FBWUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWTjtBQWFFO0VBQ0UsZ0JBQUE7QUFWSjtBQVlFO0VBQ0UsbUJBQUE7QUFUSjtBQVlFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFUSjtBQVVJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUk47QUFXRTtFQUNFLGdCQUFBO0FBUko7QUFXRTtFQUNFLHNCQUFBO0FBUkoiLCJmaWxlIjoidmlldy1yZXN0YXVyYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2J0bntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgfVxufVxuXG4uaW9uX2NvbnRlbnRfZGl2e1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xuICAvLyBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICAvLyB0b3A6IC0xNXB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubWFpbl9kaXYge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggNDBweCAwcHggMHB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIHBhZGRpbmc6IDUwcHggMTBweCAwcHggMTBweDtcbn1cblxuaW9uLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjMDAwMDAwMjkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDoxLjVyZW07XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCU7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoYmFyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgICAgICAgcGFkZGluZzogMCU7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlcl9kaXZ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICY6OnBhcnQobmF0aXZlKXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1ibGFjaykgO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7IFxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNoYW5nZSB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuICBcbiAgLmNoYW5nZTIge1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgXG4gIH1cblxuICAuaGVhbHRoeXtcbiAgICBjb2xvcjogIzM4YTUzNDtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLm5vX2RhdGFfdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5vX2RhdGFfc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGdsX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB9XG4gIFxuICAuVkUge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLS1oYW5kbGUtd2lkdGg6IDE1cHg7XG4gICAgLS1oYW5kbGUtaGVpZ2h0OiAxNXB4O1xuICAgIC0taGFuZGxlLW1heC1oZWlnaHQ6IGF1dG87XG4gICAgLS1oYW5kbGUtc3BhY2luZzogNnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNvbnRhaW46IG5vbmU7XG4gIFxuICAgICY6OnBhcnQoaGFuZGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuICAuVkU6OnBhcnQodHJhY2spIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB9XG4gIC5WRS50b2dnbGUtY2hlY2tlZDo6cGFydCh0cmFjaykge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgfVxuICBcbiAgLlYge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLS1oYW5kbGUtd2lkdGg6IDE1cHg7XG4gICAgLS1oYW5kbGUtaGVpZ2h0OiAxNXB4O1xuICAgIC0taGFuZGxlLW1heC1oZWlnaHQ6IGF1dG87XG4gICAgLS1oYW5kbGUtc3BhY2luZzogNnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNvbnRhaW46IG5vbmU7XG4gICAgJjo6cGFydChoYW5kbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6ICM5NGVhMGE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuICAuVjo6cGFydCh0cmFjaykge1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gIH1cbiAgLlYudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTRlYTBhO1xuICB9XG4gIFxuICAuTlYge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLS1oYW5kbGUtd2lkdGg6IDE1cHg7XG4gICAgLS1oYW5kbGUtaGVpZ2h0OiAxNXB4O1xuICAgIC0taGFuZGxlLW1heC1oZWlnaHQ6IGF1dG87XG4gICAgLS1oYW5kbGUtc3BhY2luZzogNnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNvbnRhaW46IG5vbmU7XG4gICAgJjo6cGFydChoYW5kbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuICAuTlY6OnBhcnQodHJhY2spIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB9XG4gIFxuICAuTlYudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xuICB9Il19 */";

/***/ }),

/***/ 43128:
/*!*************************************************************************!*\
  !*** ./src/app/components/filter-sort/filter-sort.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\"> <ion-title>Filter</ion-title></ion-col>\n        <ion-col size=\"6\" class=\"right\"\n          ><ion-icon name=\"close\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";

/***/ }),

/***/ 24185:
/*!*********************************************************************************!*\
  !*** ./src/app/components/restaurant-card/restaurant-card.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"product_card\" (click)=\" viewRestaurant()\">\n  <div class=\"img_div center\">\n    <img\n      src=\"{{data?.logo}}\"\n      onerror=\"this.src='./assets/images/externalImages/null.jpg';this.style='object-fit: contain'\"\n    />\n  </div>\n  <div style=\"height: 45px\">\n    <p class=\"change\">{{data?.brand}}</p>\n    <p class=\"change2\">Healthy food, salad...</p>\n  </div>\n\n  <p class=\"change healthy\" style=\"color: #38a534\">\n    {{data?.totalHealthyItems}} Better choices\n  </p>\n  <ion-progress-bar class=\"Best\" value=\"1\"></ion-progress-bar>\n</ion-card>\n";

/***/ }),

/***/ 75658:
/*!**********************************************************************!*\
  !*** ./src/app/view-restaurant/view-restaurant.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div\n    class=\"main_div\"\n    [ngStyle]=\"{'border-radius':platform ?'0px':'40px 40px 0px 0px'}\"\n  > -->\n<ion-icon\n  class=\"close\"\n  name=\"close-circle\"\n  (click)=\"goBack()\"\n  [ngStyle]=\"{'top':platform ?'2.5rem':'2.5rem'}\"\n></ion-icon>\n\n<ion-header>\n  <!-- <ion-button fill=\"clear\" class=\"back_btn\" (click)=\"goBack()\"\n      ><ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon\n      >Back</ion-button\n    > -->\n  <div style=\"margin: 1.5rem 5%\">\n    <ion-toolbar>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-title>{{data?.brand}}</ion-title>\n          <p class=\"change2\">Restaurant</p>\n          <!-- <p class=\"change healthy\">\n            {{data?.totalHealthyItems}} healthy items\n          </p> -->\n        </ion-col>\n        <ion-col size=\"4\" class=\"right\">\n          <img\n            [src]=\"data?.logo\"\n            onerror=\"this.src='./assets/images/externalImages/null.jpg';this.style='object-fit: contain'\"\n          />\n        </ion-col>\n      </ion-row>\n\n      <ion-searchbar\n      mode=\"md\" \n        class=\"searchbar\"\n        [(ngModel)]=\"search\"\n        (ngModelChange)=\"searchFood($event)\"\n      ></ion-searchbar>\n      <!-- <div class=\"left filter_div\">\n        <div *ngFor=\"let t of dataTypeList\" style=\"width: 60px\">\n          <ion-toggle\n            [ngClass]=\"t.name\"\n            [(ngModel)]=\"t.isChecked\"\n            (ngModelChange)=\"filterDataType($event,t)\"\n            [disabled]=\"allRestProduct.length === 0 && !this.dataType\"\n          ></ion-toggle>\n          <p class=\"tgl_title\">{{t.title}}</p>\n        </div>\n       \n      </div> -->\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div style=\"margin: 20px\">\n    <div *ngIf=\"loaded\">\n      <div style=\"padding: 5px 10px\" *ngFor=\"let t of [1,2,3,4,5]\">\n        <app-filter-card [loaded]=\"loaded\"></app-filter-card>\n      </div>\n    </div>\n    <div\n      *ngFor=\"let d of allRestProduct;let i = index\"\n      style=\"margin-bottom: 10px\"\n    >\n      <app-filter-card\n        [data]=\"d\"\n        [loaded]=\"loaded\"\n        [slot]=\"slot\"\n      ></app-filter-card>\n    </div>\n    <div *ngIf=\"allRestProduct?.length  === 0 && !loaded\">\n      <p class=\"no_data_title\">\"No data found\"</p>\n      <!-- <p class=\"no_data_subtitle\">Your slot is empty.</p>\n      <p class=\"no_data_subtitle\">\n        Add something from the meal options.\n      </p> -->\n      <ion-img src=\"../../../../assets/newImages/no-meal.png\"></ion-img>\n    </div>\n  </div>\n</ion-content>\n<!-- </div>\n</div> -->\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_restaurant-card_restaurant-card_module_ts.js.map