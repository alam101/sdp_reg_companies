"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_alternate-diet_portion-count_portion-count_page_ts"],{

/***/ 4637:
/*!********************************************************************!*\
  !*** ./src/app/alternate-diet/portion-count/portion-count.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortionCountPage": () => (/* binding */ PortionCountPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _portion_count_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portion-count.page.html?ngResource */ 86261);
/* harmony import */ var _portion_count_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portion-count.page.scss?ngResource */ 14992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../view-product/view-product.page */ 8494);













let PortionCountPage = class PortionCountPage {
  constructor(modalCtrl, popCtrl, cdr, appService, utilities, navCtrl, router) {
    this.modalCtrl = modalCtrl;
    this.popCtrl = popCtrl;
    this.cdr = cdr;
    this.appService = appService;
    this.utilities = utilities;
    this.navCtrl = navCtrl;
    this.router = router;
    this.data = {};
    this.alterdata = {};
    this.type = "add";
    this.plan = false;
    this.getDietdata = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.itemCode = "";
    this.alternativeData = [];
    this.currentDateIndex = 0;
    this.Math = Math;
    this.searchData = "";
    this.filterDataArr = [];
    this.loaded = false;
    this.calCount = 0;
  }

  ngOnInit() {
    console.log("PPPPPPPPPPPPPPP", this.type);
    this.data = lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep(this.alterdata);
    console.log("Portion Count Page line no 38", this.data);
    console.log("Portion Count Page line no 38", this.data.slot);

    if (this.data?.slot !== undefined) {
      this.getOption(this.data);
    }

    console.log("data", this.data);
  }

  closeModal() {
    this.modalCtrl.dismiss("");
  }

  addCal(data, i) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("DATA----------->>", data);
      const modal = yield _this.modalCtrl.create({
        component: PortionCountPage,
        cssClass: "portion_count",
        backdropDismiss: true,
        componentProps: {
          alterdata: data,
          type: "add",
          alterDataCode: _this.data?.itemCode === undefined ? _this.data?._id : _this.data?.itemCode
        }
      });
      yield modal.present();
      const modaldata = yield modal.onDidDismiss();
      const d = modaldata?.data;

      if (d) {
        console.log("i got this data on porton page", d);

        _this.eatenStatusUpdate(d, 2);
      }
    })();
  }

  replacedModal(data) {
    var _this2 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("DATA----------->>", data);
      const modal = yield _this2.modalCtrl.create({
        component: PortionCountPage,
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
        console.log("i got this data on porton page", d);
        console.log("i got this data on porton page", _this2.data);

        _this2.replaced(d);
      }
    })();
  }

  replaced(item) {
    var _this3 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("alam:----", _this3.data);

      if (_this3.currentDateIndex == 0) {
        const datas = {
          date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_6__.CONSTANTS.dietDate,
          slot: Number(_this3.data?.slot),
          foodCodeList: [{
            code: item?.itemCode === undefined ? item?._id : item?.itemCode,
            portion: item.portion,
            eaten: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_6__.CONSTANTS.dietDate === moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format("DDMMYYYY") ? 2 : -1
          }, {
            code: _this3.data?.itemCode === undefined ? _this3.data?._id : _this3.data?.itemCode,
            portion: 0
          }],
          isUpdateDiet: true
        };

        _this3.utilities.showSuccessToast("Replaced successfully"); // this.appService.postOptionFoodList1(datas).then(
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
    })();
  }

  gotoView(d) {
    var _this4 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("alam:--", _this4.data);
      const modal = yield _this4.modalCtrl.create({
        component: _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_8__.ViewProductPage,
        componentProps: {
          food: d,
          slot: _this4.data?.slot,
          mainCode: _this4.data?.itemCode === undefined ? _this4.data?._id : _this4.data?.itemCode,
          from: "alter"
        }
      });
      modal.present();
      modal.onDidDismiss().then(res => {
        _this4.modalCtrl.dismiss("");
      });
    })();
  }

  eatenStatusUpdate(item, eaten) {
    var _this5 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("alam:---", _this5.data);

      if (_this5.currentDateIndex == 0) {
        const datas = {
          date: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_6__.CONSTANTS.dietDate,
          slot: Number(_this5.data?.slot),
          foodCodeList: [{
            code: item?.itemCode === undefined ? item?._id : item?.itemCode,
            portion: Number(item.portion),
            eaten: eaten
          }],
          isUpdateDiet: true
        };

        _this5.utilities.showSuccessToast("Food added successfully."); // this.appServices.updateEatenFoodItems(data).then(
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
    })();
  }

  addRemove(type) {
    this.calCount = this.data?.Calories / this.data.portion;

    if (type === "add") {
      this.data.portion = Number(this.data?.portion || 0) + 0.5;
    } else {
      if (Number(this.data?.portion) !== 0.5) {
        this.data.portion = Number(this.data?.portion || 0) - 0.5; // this.data.portion = 0;
      }
    } // this.data.Calories = calCount * this.data.portion;


    this.cdr.detectChanges();
  }

  log() {
    console.log("Porton page line no 130", this.data);
    this.eatenStatusUpdate(this.data, 2);
    this.modalCtrl.dismiss(this.data);
  }

  closePopover() {
    this.popCtrl.dismiss();
  }

  loggedAction(type) {
    if (moment__WEBPACK_IMPORTED_MODULE_4___default()(src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_6__.CONSTANTS.dietDate, "DDMMYYYY").format("DD/MM/YYYY") > moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format("DD/MM/YYYY") && (type === "track" || type === "unlog")) {
      this.utilities.showErrorToast("You can not log in future date.");
      return;
    }

    this.popCtrl.dismiss({
      type,
      updatedData: this.data
    });
  }

  getOption(data) {
    this.appService.getOptions(this.data?.slot, "", "", this.data?.category).then(res => {
      this.loaded = true;
      console.log("get Option res", res);
      console.log("get Option res", this.data);
      this.alternativeData = res?.mealOptions[0]?.categories[0]?.food;
      this.alternativeData.splice(this.alternativeData.findIndex(function (i) {
        return i.itemCode === data?.itemCode;
      }), 1); // this.alternativeData.forEach((elm) => {
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
    this.filterDataArr = this.alternativeData.filter(f => f.Food.toLowerCase().includes(e.toLowerCase()));
    console.log(this.filterDataArr);
  }

  gotoPremium() {
    this.modalCtrl.dismiss();
    this.navCtrl.navigateForward(["/premium-member"]);
  }

};

PortionCountPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
}, {
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_7__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}];

PortionCountPage.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  alterdata: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  plan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  getDietdata: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
  }]
};
PortionCountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-portion-count",
  template: _portion_count_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_portion_count_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PortionCountPage);


/***/ }),

/***/ 14992:
/*!*********************************************************************************!*\
  !*** ./src/app/alternate-diet/portion-count/portion-count.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".portion_count_maindiv {\n  padding: 30px 10px 10px;\n  position: relative;\n}\n\n.close_icon {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  color: var(--theme-newButton);\n  font-size: 30px;\n}\n\n.add_remove_btn {\n  background: var(--theme-newButton);\n  border-radius: 25px;\n  min-width: 80px;\n  height: 25px;\n}\n\n.add_remove_btn ion-icon {\n  color: var(--white);\n  font-size: 20px;\n  margin: 5px;\n  font-weight: bold !important;\n  --ionicon-stroke-width: 45px !important;\n}\n\n.add_remove_btn p {\n  margin: 0% 5px;\n  color: var(--white);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  font-size: var(--regularM-font);\n}\n\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n\n.log_btn_div {\n  border-top: 1px solid var(--card-border);\n  padding-top: 10px;\n  margin-top: 10px;\n}\n\n.log_btn {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--theme-newButton);\n  margin: 0%;\n}\n\n.portion {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: var(--black);\n  margin-left: 10px;\n}\n\n.buttons {\n  --background: var(--white);\n  color: var(--black);\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  text-transform: none;\n  margin-bottom: 5px;\n  margin-right: 20px;\n}\n\n.buttons ion-icon {\n  color: var(--theme-newButton);\n  --ionicon-stroke-width: 72px !important;\n  font-size: 14px;\n}\n\n.buttons_cancel {\n  --background: var(--white);\n  color: var(--black);\n  font-size: var(--xsmall-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  text-transform: none;\n  margin-bottom: 5px;\n  margin-left: 34px;\n  margin-right: 55px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --border-radius: 50px;\n}\n\n.buttons_cancel ion-icon {\n  color: var(--theme-newButton);\n  --ionicon-stroke-width: 72px !important;\n  font-size: 14px;\n}\n\n.close_circle {\n  color: var(--theme-newButton);\n  font-size: 30px;\n  background: white;\n  border-radius: 100%;\n  margin-right: 20px;\n}\n\n.content::part(background) {\n  background: transparent;\n}\n\n.change_main_div {\n  padding: 10px;\n  min-height: 100%;\n}\n\n.change_content::part(background) {\n  background: var(--white);\n}\n\n.change_content::part(scroll) {\n  min-height: max-content;\n  height: 70%;\n}\n\n.border_line {\n  width: 60px;\n  border: 2px solid #6e6e6e;\n  border-radius: 25px;\n}\n\n.back_icon {\n  font-size: 25px;\n  color: var(--theme-color);\n}\n\n.change {\n  color: var(--black);\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  margin-left: 10px;\n}\n\n.close {\n  font-size: 30px;\n  color: var(--black);\n}\n\n.searchbar {\n  border: 1px solid var(--theme-color);\n  color: var(--black);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n}\n\n.card {\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  border-bottom: var(--boxshadow);\n  padding: 5px;\n  margin: 5px;\n}\n\n.card_img {\n  object-fit: cover;\n}\n\n.card_img::part(image) {\n  border-radius: 5px;\n}\n\nion-thumbnail {\n  height: 85px;\n  width: 60px;\n  --border-radius: 12px;\n}\n\n.meal_pro_div {\n  width: 100%;\n  padding-left: 5px;\n}\n\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #666666;\n}\n\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #666666;\n}\n\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 45px;\n  margin: 2px 0px;\n}\n\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 45px;\n  margin: 2px 0px;\n}\n\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 45px;\n  margin: 2px 0px;\n}\n\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 45px;\n  margin: 2px 0px;\n}\n\n.plus_icon {\n  font-size: 25px;\n  z-index: 1;\n  border-radius: 100%;\n  background: white;\n  color: #999999;\n  margin-right: 0px;\n}\n\n.more_button_div {\n  margin-top: 10px;\n  z-index: 999;\n  width: 100%;\n}\n\n.more_button_div ion-button {\n  --border-color: #707070;\n  color: #707070;\n  font-size: var(--small-font);\n  text-transform: none;\n  --background: var(--white);\n  --border-width: 1px;\n  height: 25px;\n}\n\n.more_button_div .up_down_icon {\n  border: 1px solid var(--theme-color);\n  border-radius: 100px;\n  padding: 2px;\n  color: var(--theme-color);\n  background: var(--white);\n  box-shadow: var(--boxshadow);\n}\n\n.lock {\n  color: var(--black);\n  font-size: 30px;\n  margin: 0px 0px 0px 5px;\n}\n\n.lock_btn {\n  --padding-start: 0px !important;\n  --padding-end: 5px !important;\n}\n\n.dot_boarder {\n  margin: 0%;\n  border: 2px solid var(--theme-color);\n  height: 15px;\n  width: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dot {\n  height: 5px;\n  width: 5px;\n  background: var(--theme-color);\n  border-radius: 100%;\n}\n\n.veg_div {\n  position: absolute;\n  top: 1px;\n  right: 2px;\n  background: white;\n  height: 18px;\n  width: 19px;\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sketloan {\n  width: 100%;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRpb24tY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFLQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBT0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBTUU7RUFDRSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBT0U7RUFDRSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0UsNkJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBV0U7RUFDRSx1QkFBQTtBQVJKOztBQWFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBY0U7RUFDRSx3QkFBQTtBQVhKOztBQWNFO0VBQ0MsdUJBQUE7RUFDRCxXQUFBO0FBWkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZEY7O0FBaUJBO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWRGOztBQWlCQTtFQUNFLGlCQUFBO0FBZEY7O0FBZUU7RUFDRSxrQkFBQTtBQWJKOztBQWlCQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjs7QUFrQkE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWZGOztBQWtCQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZkY7O0FBbUJBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaEJGOztBQWtCQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWZGOztBQWlCQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWRGOztBQWdCQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWVBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWkY7O0FBZUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBRUEsaUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBYkY7O0FBaUJFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBZko7O0FBbUJFO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFqQko7O0FBcUJBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFsQkY7O0FBcUJBO0VBRUUsK0JBQUE7RUFDQSw2QkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbkJGOztBQXNCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFuQkY7O0FBc0JBO0VBRUcsV0FBQTtFQUNBLFlBQUE7QUFwQkgiLCJmaWxlIjoicG9ydGlvbi1jb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGlvbl9jb3VudF9tYWluZGl2IHtcbiAgcGFkZGluZzogMzBweCAxMHB4IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsb3NlX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYWRkX3JlbW92ZV9idG4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjVweDtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAlIDVweDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gIH1cbn1cblxuLm1lYWxfcHJvIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgLy8gd2lkdGg6IDIwMHB4O1xufVxuXG4ubG9nX2J0bl9kaXYge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvZ19idG4ge1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIG1hcmdpbjogMCU7XG59XG5cbi5wb3J0aW9uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWZvbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1sb2dnZWQgcG9wb3Zlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ1dHRvbnMge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDcycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmJ1dHRvbnNfY2FuY2VsIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNzJweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uY2xvc2VfY2lyY2xle1xuICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgLy8gLS1pb25pY29uLXN0cm9rZS13aWR0aDogNzJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgJjo6cGFydChiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2hhbmdlIG1vZGFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5jaGFuZ2VfbWFpbl9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hhbmdlX2NvbnRlbnQge1xuICAmOjpwYXJ0KGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIH1cblxuICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogNzAlO1xuICB9XG59XG5cbi5ib3JkZXJfbGluZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNmU2ZTZlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAvLyBtYXJnaW46IDEwcHg7XG59XG5cbi5iYWNrX2ljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5jaGFuZ2Uge1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2xvc2Uge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbi5zZWFyY2hiYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHBhZGRpbmc6IDAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3hzaGFkb3cpO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2FyZF9pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgJjo6cGFydChpbWFnZSkge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLy8gLS1zaXplOiA2NXB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5tZWFsX3Byb19kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5tZWFsX2NhbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG4ubWVhbF9wcm8ge1xuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgLy8gd2lkdGg6IDIwMHB4O1xufVxuXG4uQmVzdCB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzM4YTUzNDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cbi5Hb29kIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjOTRlYTBhO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogNDVweDtcbiAgbWFyZ2luOiAycHggMHB4O1xufVxuLkF2ZXJhZ2Uge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICNlYWRjMTg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW46IDJweCAwcHg7XG59XG4uRmFpciB7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI2ZmYTUwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIG1hcmdpbjogMnB4IDBweDtcbn1cbi5VbnZlcmlmaWVkIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjN2Q3ZDdkNWU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW46IDJweCAwcHg7XG59XG5cbi5wbHVzX2ljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgLy8gY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5tb3JlX2J1dHRvbl9kaXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGJvdHRvbTogLTEwcHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItY29sb3I6ICM3MDcwNzA7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICAvLyB3aWR0aDogMTQwcHg7XG4gIH1cblxuICAudXBfZG93bl9pY29uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gIH1cbn1cblxuLmxvY2sge1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuXG4ubG9ja19idG4ge1xuICAvLyB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmRvdF9ib2FyZGVyIHtcbiAgbWFyZ2luOiAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi52ZWdfZGl2e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICByaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMTlweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNrZXRsb2Fue1xuICBcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4iXX0= */";

/***/ }),

/***/ 86261:
/*!*********************************************************************************!*\
  !*** ./src/app/alternate-diet/portion-count/portion-count.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- --------------------------add modal------------------------------------- -->\n   <!-- --{{type}}-- -->\n<ion-content *ngIf=\"type == 'add'\">\n  <div class=\"center flex_col portion_count_maindiv\">\n    <ion-icon\n      class=\"close_icon\"\n      name=\"close-circle\"\n      (click)=\"closeModal()\"\n    ></ion-icon>\n    <p class=\"meal_pro\">{{data?.Food===undefined?data?.name:data?.Food}}</p>\n    <div class=\"center\" style=\"margin-left: 55px\">\n      <div class=\"add_remove_btn center\">\n        <ion-icon name=\"remove\" (click)=\"addRemove('remove')\"></ion-icon>\n        <p>{{data?.portion}}</p>\n        <ion-icon name=\"add\" (click)=\"addRemove('add')\"></ion-icon>\n      </div>\n      <p class=\"portion\" *ngIf=\"data.foodSource=='R' || data.foodSource=='P'\">\n        {{data?.portion_unit}} {{data.portion_gms}} {{data.measuring_unit}}\n      </p>\n      <p class=\"portion\" *ngIf=\"data.foodSource!=='R' && data.foodSource!=='P'\">\n        {{data?.portion_unit}}\n      </p>\n    </div>\n    <p class=\"meal_pro\">{{(data?.Calories * data?.portion)?.toFixed(2) }} Kcal</p>\n    <div class=\"w_100 center log_btn_div\">\n      <p class=\"log_btn\" (click)=\"log()\">Log food item</p>\n    </div>\n  </div>\n</ion-content>\n\n<!-- -----------------------------------logged popover---------------------------------------- -->\n\n<ion-content *ngIf=\"type==='logged'\" class=\"content\">\n  <div class=\"d_flex flex_col\" *ngIf=\"data?.foodStatus !== 'A'\">\n    <ion-button\n      shape=\"round\"\n      class=\"buttons\"\n      *ngIf=\"!data.eaten || data.eaten < 0\"\n      (click)=\"loggedAction('track')\"\n    >\n      Log</ion-button>\n\n    <ion-button\n      shape=\"round\"\n      class=\"buttons\"\n      *ngIf=\"data.eaten && data.eaten > 0\"\n      (click)=\"loggedAction('unlog')\"\n    >\n      <!-- <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon> -->\n      Un-log\n    </ion-button>\n\n    <ion-button\n      shape=\"round\"\n      class=\"buttons\"\n      *ngIf=\"!data.eaten || data.eaten < 0\"\n      (click)=\"loggedAction('alter')\"\n    >\n      Alternatives</ion-button\n    >\n\n    <ion-button\n      shape=\"round\"\n      class=\"buttons\"\n      *ngIf=\"data.eaten && data.eaten > 0\"\n      (click)=\"loggedAction('edit')\"\n      >Edit Qty\n    </ion-button>\n\n    <ion-button shape=\"round\" class=\"buttons\" (click)=\"loggedAction('info')\"\n      >Food Info</ion-button\n    >\n    <!-- <ion-button shape=\"round\" class=\"buttons\" (click)=\"loggedAction('remove')\">Remove</ion-button> -->\n  </div>\n  <div class=\"d_flex flex_col\" *ngIf=\"data?.foodStatus === 'A'\">\n    <ion-button shape=\"round\" class=\"buttons\" (click)=\"loggedAction('edit')\"\n      >Edit Qty\n    </ion-button>\n    <ion-button shape=\"round\" class=\"buttons\" (click)=\"loggedAction('remove')\"\n      >Remove</ion-button\n    >\n  </div>\n\n  <div class=\"w_100 center\">\n    <!-- <ion-button shape=\"round\" class=\"buttons_cancel\" (click)=\"closePopover()\"> -->\n    <ion-icon\n      name=\"close-circle-outline\"\n      (click)=\"closePopover()\"\n      class=\"close_circle\"\n    ></ion-icon>\n    <!-- </ion-button> -->\n  </div>\n</ion-content>\n\n<!-- -----------------------------change modal----------------------------------------- -->\n\n<div *ngIf=\"type === 'change' \" class=\"change_main_div\">\n  <div class=\"center\">\n    <span class=\"border_line\"></span>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\" class=\"left\">\n        <ion-icon\n          class=\"back_icon\"\n          name=\"arrow-back-sharp\"\n          (click)=\"closeModal()\"\n        ></ion-icon>\n        <p class=\"change\">Alternatives for \"{{data?.Food}}\"</p>\n      </ion-col>\n      <ion-col size=\"2\" class=\"right\">\n        <ion-icon\n          class=\"close\"\n          name=\"close-sharp\"\n          (click)=\"closeModal()\"\n        ></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-searchbar\n  mode=\"md\" \n    class=\"searchbar\"\n    placeholder=\"Search in Alternatives\"\n    [(ngModel)]=\"searchData\"\n    (ngModelChange)=\"filterData($event)\"\n  ></ion-searchbar>\n  <p class=\"change\">\n    {{filterDataArr?.length ===0 ? '': filterDataArr?.length}} Alternatives\n    available\n  </p>\n  <div class=\"h_100\">\n    <ion-content class=\"change_content\" style=\"overflow-y: scroll;--padding-bottom: 50%;\">\n      <div style=\"height: 120px;\">\n        <ion-grid class=\"pad_0\">\n          <ion-row>\n            <ion-col size=\"6\" *ngIf=\"!loaded\">\n              <ion-skeleton-text animated class=\"sketloan\"></ion-skeleton-text>\n            </ion-col>\n            <!-- <ion-col\n              size=\"6\"\n              *ngFor=\"let d of filterDataArr.slice(0,plan?filterDataArr.length+1:2)\"\n            > -->\n            <ion-col size=\"6\" *ngFor=\"let d of filterDataArr\">\n              <app-small-meal-card\n                (replacedModal)=\"replacedModal($event)\"\n                [mealData]=\"d\"\n                [slot]=\"this.data?.slot\"\n                (gotoView)=\"gotoView($event)\"\n              >\n              </app-small-meal-card>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row *ngIf=\"!plan&&filterDataArr.length > 0\">\n            <div class=\"center more_button_div\">\n              <ion-button\n                shape=\"round\"\n                fill=\"outline\"\n                class=\"lock_btn\"\n                (click)=\"gotoPremium()\"\n              >\n                <ion-icon\n                  class=\"lock\"\n                  src=\"../../../../assets/newImages/Lock.svg\"\n                ></ion-icon>\n                {{filterDataArr.length-2}} More\n              </ion-button>\n            </div>\n          </ion-row> -->\n        </ion-grid>\n      </div>\n    </ion-content>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_alternate-diet_portion-count_portion-count_page_ts.js.map