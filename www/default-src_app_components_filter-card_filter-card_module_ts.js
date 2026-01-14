"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_filter-card_filter-card_module_ts"],{

/***/ 45259:
/*!**********************************************************************!*\
  !*** ./src/app/components/filter-card/filter-card-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterCardPageRoutingModule": () => (/* binding */ FilterCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _filter_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-card.page */ 59297);




const routes = [
    {
        path: '',
        component: _filter_card_page__WEBPACK_IMPORTED_MODULE_0__.FilterCardPage
    }
];
let FilterCardPageRoutingModule = class FilterCardPageRoutingModule {
};
FilterCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterCardPageRoutingModule);



/***/ }),

/***/ 1368:
/*!**************************************************************!*\
  !*** ./src/app/components/filter-card/filter-card.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterCardPageModule": () => (/* binding */ FilterCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _filter_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-card-routing.module */ 45259);
/* harmony import */ var _filter_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-card.page */ 59297);







let FilterCardPageModule = class FilterCardPageModule {
};
FilterCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterCardPageRoutingModule,
        ],
        declarations: [_filter_card_page__WEBPACK_IMPORTED_MODULE_1__.FilterCardPage],
        exports: [_filter_card_page__WEBPACK_IMPORTED_MODULE_1__.FilterCardPage],
    })
], FilterCardPageModule);



/***/ }),

/***/ 59297:
/*!************************************************************!*\
  !*** ./src/app/components/filter-card/filter-card.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterCardPage": () => (/* binding */ FilterCardPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _filter_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-card.page.html?ngResource */ 37692);
/* harmony import */ var _filter_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-card.page.scss?ngResource */ 9684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../alternate-diet/portion-count/portion-count.page */ 4637);
/* harmony import */ var _selectslot_popup_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectslot-popup/selectslot-popup.page */ 25426);
/* harmony import */ var _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../view-product/view-product.page */ 8494);
/* harmony import */ var src_app_broadcast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/broadcast.service */ 80097);














let FilterCardPage = class FilterCardPage {
  constructor(utilities, appServices, modalCtrl, navCtrl, broadcastService) {
    this.utilities = utilities;
    this.appServices = appServices;
    this.modalCtrl = modalCtrl;
    this.navCtrl = navCtrl;
    this.broadcastService = broadcastService;
    this.data = {};
    this.loaded = false;
    this.slot = false;
    this.totalCal = 0;
    this.moment = (moment__WEBPACK_IMPORTED_MODULE_3___default());
    this.parseFloat = parseFloat;
    this.Math = Math;
    this.image_URL = "";
    this.currentDateIndex = 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.image_URL = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.image_URL;
      _this.customerId = yield _this.utilities.getUserData("id");

      if (_this.data.Score === 9) {
        _this.data.option = "Best";
      }

      if (_this.data.Score === 6) {
        _this.data.option = "Good";
      }

      if (_this.data.Score === 3) {
        _this.data.option = "Average";
      }

      if (_this.data.Score === 1) {
        _this.data.option = "Below average";
      }

      if (_this.data.Score === 0) {
        _this.data.option = "Bad";
      }

      if (_this.data.Score === -1) {
        _this.data.option = "Not recommended";
      }

      if (!_this.data.Score || _this.data.Score == "") {
        _this.data.option = "Unverified";
      } // console.log(this.slot);

    })();
  }

  addCal(d) {
    var _this2 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.slot) {
        const modal = yield _this2.modalCtrl.create({
          component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_7__.PortionCountPage,
          cssClass: "portion_count",
          componentProps: {
            alterdata: _this2.data,
            type: "add"
          },
          backdropDismiss: true,
          swipeToClose: true
        });
        yield modal.present();
        const modaldata = yield modal.onDidDismiss();
        const d = modaldata?.data;
        console.log(d);

        if (d) {
          const datas = {
            date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.dietDate,
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

          _this2.appServices.postOptionFoodList1(datas).then(res => {
            console.log("food code update", res); // this.modalCtrl.dismiss({});
            // if (d?.imgType === "H") {

            _this2.utilities.logEvent("onboarding_Click_search_whats_on_your_mind", {}); // } else


            _this2.utilities.closeModal(); // this.messageSubject.next('reload');


            _this2.broadcastService.boradcast("reload");

            _this2.navCtrl.navigateForward(["/new-diet", {
              refresh: new Date().getTime()
            }]);
          }, err => {
            console.log(err);
          });
        }

        console.log("slot", _this2.slot);
        return;
      }

      _this2.data = d;
      console.log("TEST---", d);
      const modal = yield _this2.modalCtrl.create({
        component: _selectslot_popup_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_8__.SelectslotPopupPage,
        cssClass: "small-modal-slot",
        backdropDismiss: true,
        swipeToClose: true
      });
      yield modal.present();
      const modaldata = yield modal.onDidDismiss();
      const slot = modaldata?.data;

      if (slot) {
        const modal = yield _this2.modalCtrl.create({
          component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_7__.PortionCountPage,
          cssClass: "portion_count",
          backdropDismiss: true,
          swipeToClose: true,
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
            date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.dietDate,
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

          _this2.appServices.postOptionFoodList1(datas).then(res => {
            console.log("food code update", res); // this.modalCtrl.dismiss({});

            _this2.utilities.closeModal();

            _this2.broadcastService.boradcast("reload");

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
  }

  gotoView(d) {
    var _this3 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.modalCtrl.dismiss();
      d.imageUrl = d.imageId;
      const modal = yield _this3.modalCtrl.create({
        component: _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_9__.ViewProductPage,
        componentProps: {
          food: d,
          // from: "search",
          slot: _this3.slot
        },
        backdropDismiss: true
      });

      _this3.utilities.storeModal(modal);

      modal.present();
    })();
  }

};

FilterCardPage.ctorParameters = () => [{
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_6__.UTILITIES
}, {
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}, {
  type: src_app_broadcast_service__WEBPACK_IMPORTED_MODULE_10__.BroadcastService
}];

FilterCardPage.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }],
  loaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }],
  slot: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }]
};
FilterCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-filter-card",
  template: _filter_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_filter_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FilterCardPage);


/***/ }),

/***/ 9684:
/*!*************************************************************************!*\
  !*** ./src/app/components/filter-card/filter-card.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".header_div {\n  width: 100%;\n  padding: 10px;\n  position: relative;\n}\n.header_div ion-img {\n  height: 15px !important;\n}\n.header_div p {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #333333;\n  margin-left: 20px;\n}\n.header_div span {\n  font-size: var(--xsmall-font);\n  margin-left: 10px;\n}\n.header_div ion-icon {\n  color: #333333;\n  font-size: var(--regular-font);\n  margin: 0px 5px -2px;\n}\n.scroll_y {\n  max-height: 200px;\n  padding-bottom: 30px;\n}\nion-card {\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  margin: 0%;\n}\n.rest_logo {\n  position: absolute;\n  bottom: -20px;\n  height: 45px;\n  width: 45px;\n  box-shadow: var(--boxshadow);\n}\n.rest_logo img {\n  height: 45px;\n  width: 45px;\n  object-fit: contain;\n}\n.card_main_div {\n  padding: 10px;\n}\n.card_img {\n  object-fit: cover;\n}\n.card_img::part(image) {\n  border-radius: 5px;\n}\nion-thumbnail {\n  --size: 65px;\n  --border-radius: 14px;\n}\n.meal_pro_div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #666666;\n}\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #666666;\n}\n.dot_boarder {\n  margin: 0%;\n  border: 2px solid var(--theme-color);\n  height: 15px;\n  width: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.dot {\n  height: 5px;\n  width: 5px;\n  background: var(--theme-color);\n  border-radius: 100%;\n}\n.protien_progress {\n  --progress-background: #376c23;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.Bad {\n  --progress-background: red;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n.choice {\n  font-size: var(--xsmall-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: bold;\n  color: #376c23;\n}\n.plus_icon {\n  font-size: 30px;\n  z-index: 1;\n  border-radius: 100%;\n  background: white;\n  color: var(--theme-newButton);\n  margin-right: -8px;\n}\n.card_logo {\n  border: 2px solid white;\n  height: 30px !important;\n  width: 30px;\n  border-radius: 100%;\n  padding: 5px;\n  position: absolute;\n  left: 0px;\n  top: -10px;\n  z-index: 8;\n  background: #febf47;\n}\n.no_data_title {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.no_data_subtitle {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.more_button_div {\n  margin-top: -30px;\n}\n.more_button_div ion-button {\n  --border-color: var(--theme-newButton);\n  color: var(--theme-newButton);\n  font-size: var(--small-font);\n  text-transform: none;\n  --background: var(--white);\n}\n.sketloan {\n  width: 100%;\n  height: 150px;\n  border-radius: 10px;\n}\n.logged_btn {\n  text-transform: none;\n  font-size: var(--xsmall-font);\n  font-weight: 300;\n  color: var(--black);\n  height: 25px;\n  width: 70px;\n  --border-color: var(--theme-newButton);\n  margin-right: -10px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --border-width: 0.5px;\n  --padding-bottom: 2px;\n  font-weight: 500;\n}\n.logged_btn ion-icon {\n  color: var(--theme-newButton);\n  --ionicon-stroke-width:72px !important;\n  font-size: 14px;\n}\n.aditional_div {\n  background: #6e6e6e;\n  width: max-content;\n  padding: 2px 5px;\n  border-radius: 10px 0px 10px 0px;\n}\n.aditional_div p {\n  color: var(--white);\n  font-size: var(--xsmall-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,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LFdBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJKO0FBVUk7RUFDRSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQVJOO0FBZUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQVpKO0FBY0k7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFaTiIsImZpbGUiOiJmaWx0ZXItY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2RpdiB7XG4gICAgLy8gYmFja2dyb3VuZDogI0ZFQkY0NztcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgIGlvbi1pbWcge1xuICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gICAgICBtYXJnaW46IDBweCA1cHggLTJweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5zY3JvbGxfeSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1jYXJkIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAwJTtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5yZXN0X2xvZ297XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG5cbiAgICBpbWd7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICB9XG4gIFxuICAuY2FyZF9tYWluX2RpdiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmNhcmRfaW1nIHtcbiAgICAvLyBoZWlnaHQ6IDEwNXB4O1xuICAgIC8vIHdpZHRoOiA4MHB4O1xuICAgIC8vIGhlaWdodDogODBweDtcbiAgICAvLyB3aWR0aDogNjVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAmOjpwYXJ0KGltYWdlKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG4gIFxuICBpb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDY1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICB9XG4gIFxuICAubWVhbF9wcm9fZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1lYWxfcHJvIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgfVxuICBcbiAgLm1lYWxfY2FsIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICB9XG4gIFxuICAuZG90X2JvYXJkZXIge1xuICAgIG1hcmdpbjogMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kb3Qge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbiAgXG4gIC5wcm90aWVuX3Byb2dyZXNzIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMzNzZjMjM7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkJlc3Qge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzM4YTUzNDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuR29vZCB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjOTRlYTBhO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9XG4gIC5BdmVyYWdlIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICNlYWRjMTg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkZhaXIge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI2ZmYTUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuVW52ZXJpZmllZCB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjN2Q3ZDdkNWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkJhZHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICBcbiAgLmNob2ljZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzc2YzIzO1xuICB9XG4gIFxuICAucGx1c19pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgIG1hcmdpbi1yaWdodDogLThweDtcbiAgICAvLyAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOjcycHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNhcmRfbG9nbyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHotaW5kZXg6IDg7XG4gICAgYmFja2dyb3VuZDogI2ZlYmY0NztcbiAgfVxuICBcbiAgLm5vX2RhdGFfdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5vX2RhdGFfc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tb3JlX2J1dHRvbl9kaXYge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5za2V0bG9hbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC5sb2dnZWRfYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAuNXB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICBcbiAgICBpb24taWNvbntcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDo3MnB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIFxuICAgIH1cbiAgXG4gIH1cbiAgXG4gIFxuICAuYWRpdGlvbmFsX2RpdntcbiAgICBiYWNrZ3JvdW5kOiAjNmU2ZTZlO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDsgXG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgXG4gICAgcHtcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAiXX0= */";

/***/ }),

/***/ 37692:
/*!*************************************************************************!*\
  !*** ./src/app/components/filter-card/filter-card.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div style=\"position: relative\">\n  <ion-skeleton-text\n    *ngIf=\"loaded\"\n    animated\n    class=\"sketloan\"\n  ></ion-skeleton-text>\n  <ion-card *ngIf=\"!loaded\">\n    <div>\n      <div\n        class=\"aditional_div\"\n        *ngIf=\"data?.foodStatus === 'A'\n      \"\n      >\n        <p>Additional</p>\n      </div>\n      <div class=\"d_flex card_main_div\">\n        <div class=\"center\">\n          <ion-thumbnail\n            style=\"position: relative\"\n            class=\"center\"\n            (click)=\"gotoView(data)\"\n          >\n            <img\n              class=\"card_img\"\n              src=\"{{data?.imageId}}\"\n              onerror=\"this.src='./assets/images/externalImages/null.jpg';this.style='object-fit: contain'\"\n            />\n            <!-- <ion-avatar class=\"rest_logo\">\n              <img\n                *ngIf=\"data?.foodSource === 'P'\"\n                src=\"{{data?.brandLogo}}\"\n                onerror=\"this.src='./assets/images/externalImages/null.jpg';this.style='object-fit: contain'\"\n              />\n            </ion-avatar> -->\n          </ion-thumbnail>\n        </div>\n        <ion-grid class=\"w_100\">\n          <ion-row>\n            <ion-col size=\"10\">\n              <p class=\"meal_pro\">{{data?.Food}}</p>\n              <!-- <p class=\"meal_cal\">{{data?.portion}} {{data?.portion_unit}}</p> -->\n              <p class=\"meal_cal\" *ngIf=\"data.foodSource=='R' || data.foodSource=='P'\">\n                {{data?.portion}} {{data?.portion_unit || data?.portionUnit}} ({{data?.portion_gms}} {{data?.measuring_unit}})\n              </p>\n              <p class=\"meal_cal\" *ngIf=\"data.foodSource!=='R' && data.foodSource!=='P'\">\n                {{data?.portion}} {{data?.portion_unit || data?.portionUnit}}\n              </p>\n            </ion-col>\n\n            <ion-col size=\"2\" class=\"right\" style=\"align-items: flex-start\">\n              <!-- <div\n                class=\"dot_boarder\"\n                [ngStyle]=\"{'border-color':data?.foodType==='Ve' || data?.foodType==='V' ? 'var(--green)' : data?.foodType==='E' ? 'var(--yellow)': data?.foodType==='NV' ?'var(--red)':'lightgrey'}\"\n              >\n                <div\n                  class=\"dot\"\n                  [ngStyle]=\"{'background':data?.foodType==='Ve' || data?.foodType==='V' ? 'var(--green)' : data?.foodType==='E' ? 'var(--yellow)':  data?.foodType==='NV' ?'var(--red)':'lightgrey'}\"\n                ></div>\n              </div> -->\n            </ion-col>\n          </ion-row>\n\n          <div class=\"meal_pro_div\" style=\"margin-top: 10px\">\n            <div>\n              <p class=\"meal_cal\" style=\"font-weight: 500\">\n                {{Math.round(data?.Calories * data?.portion)}} Kcal\n              </p>\n              <ion-progress-bar\n                [ngClass]=\"data?.option === 'Below average'?'Fair':data?.option === 'Not recommended'?'Bad':data?.option \"\n                value=\"1\"\n              ></ion-progress-bar>\n              <p class=\"choice\">{{data?.option}} Choice</p>\n            </div>\n            <ion-button\n              *ngIf=\"data?.eaten > 0 \"\n              fill=\"outline\"\n              shape=\"round\"\n              class=\"logged_btn\"\n              (click)=\"addCal(data)\"\n            >\n              <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n              Logged\n            </ion-button>\n            <ion-icon\n              *ngIf=\"!data?.eaten || data?.eaten < 0\"\n              class=\"plus_icon\"\n              (click)=\"addCal(data)\"\n              name=\"add-circle\"\n            ></ion-icon>\n          </div>\n        </ion-grid>\n      </div>\n    </div>\n    <div *ngIf=\"data?.data?.length  === 0 && !loaded\">\n      <p class=\"no_data_title\">\"Eat Better Not Less\"</p>\n      <p class=\"no_data_subtitle\">Your slot is empty.</p>\n      <p class=\"no_data_subtitle\">Add something from the meal options.</p>\n      <ion-img src=\"../../../../assets/newImages/no-meal.png\"></ion-img>\n    </div>\n  </ion-card>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_filter-card_filter-card_module_ts.js.map