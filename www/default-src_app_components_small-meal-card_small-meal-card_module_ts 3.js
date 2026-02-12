"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_small-meal-card_small-meal-card_module_ts"],{

/***/ 48068:
/*!******************************************************************************!*\
  !*** ./src/app/components/small-meal-card/small-meal-card-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallMealCardPageRoutingModule": () => (/* binding */ SmallMealCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _small_meal_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./small-meal-card.page */ 87795);




const routes = [
    {
        path: '',
        component: _small_meal_card_page__WEBPACK_IMPORTED_MODULE_0__.SmallMealCardPage
    }
];
let SmallMealCardPageRoutingModule = class SmallMealCardPageRoutingModule {
};
SmallMealCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SmallMealCardPageRoutingModule);



/***/ }),

/***/ 29662:
/*!**********************************************************************!*\
  !*** ./src/app/components/small-meal-card/small-meal-card.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallMealCardPageModule": () => (/* binding */ SmallMealCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _small_meal_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./small-meal-card-routing.module */ 48068);
/* harmony import */ var _small_meal_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./small-meal-card.page */ 87795);







let SmallMealCardPageModule = class SmallMealCardPageModule {
};
SmallMealCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _small_meal_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmallMealCardPageRoutingModule,
        ],
        declarations: [_small_meal_card_page__WEBPACK_IMPORTED_MODULE_1__.SmallMealCardPage],
        exports: [_small_meal_card_page__WEBPACK_IMPORTED_MODULE_1__.SmallMealCardPage],
    })
], SmallMealCardPageModule);



/***/ }),

/***/ 87795:
/*!********************************************************************!*\
  !*** ./src/app/components/small-meal-card/small-meal-card.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallMealCardPage": () => (/* binding */ SmallMealCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _small_meal_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./small-meal-card.page.html?ngResource */ 6221);
/* harmony import */ var _small_meal_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./small-meal-card.page.scss?ngResource */ 55820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);








let SmallMealCardPage = class SmallMealCardPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.mealData = {};
        this.slot = {};
        this.replacedModal = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.gotoView = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.Math = Math;
        this.data = {};
        this.image_URL = "";
    }
    ngOnInit() {
        console.log("ALAALALALALALALLAA");
        this.image_URL = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_3__.CONSTANTS.image_URL;
        this.data = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this.mealData);
        // if (this.data?.foodSource?.toLowerCase() === "external") {
        // this.data.Calories = this.data.Calories * this.data.portion;
        this.data.Carbs = this.data.Carbs * this.data.portion;
        this.data.Fat = this.data.Fat * this.data.portion;
        this.data.Fiber = this.data.Fiber * this.data.portion;
        this.data.Protien = this.data.Protien * this.data.portion;
        if (this.data?.foodSource?.toLowerCase() === "external") {
            this.data.portion_unit = this.data.portion + "-" + this.data.portion_unit;
        }
        if (Number(this.data.Score) === 9) {
            this.data.option = "Best";
        }
        if (Number(this.data.Score) === 6) {
            this.data.option = "Good";
        }
        if (Number(this.data.Score) === 3) {
            this.data.option = "Average";
        }
        if (Number(this.data.Score) === 1) {
            this.data.option = "Below average";
        }
        if (Number(this.data.Score) === 0) {
            this.data.option = "Bad";
        }
        if (Number(this.data.Score) === -1) {
            this.data.option = "Not recommended";
        }
        if (!this.data.Score || this.data.Score == "") {
            this.data.option = "Unverified";
        }
        if (this.mealData?.foodSource?.toLowerCase() === "external") {
            this.data.portion = 1;
        }
        //}
        console.log("small-meal:--", this.data);
    }
    gotoViews(data) {
        // data.portion = this.mealData.portion;
        this.gotoView.emit(data);
    }
    ionViewWillEnter() { }
    replaced() {
        // this.data.portion = 1;
        this.replacedModal.emit(this.data);
    }
    caloryCount(d) {
        if (d.foodSource?.toLowerCase() === "external") {
            d.Calories = d.Calories * d.portion;
            return this.Math.round(d.Calories);
        }
        else {
            return this.Math.round(d.Calories);
        }
    }
};
SmallMealCardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SmallMealCardPage.propDecorators = {
    mealData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    replacedModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    gotoView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
SmallMealCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-small-meal-card",
        template: _small_meal_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_small_meal_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SmallMealCardPage);



/***/ }),

/***/ 55820:
/*!*********************************************************************************!*\
  !*** ./src/app/components/small-meal-card/small-meal-card.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".change_main_div {\n  padding: 10px;\n  min-height: 100%;\n}\n\n.change_content::part(background) {\n  background: var(--white) !important;\n}\n\n.change_content::part(scroll) {\n  min-height: max-content;\n}\n\n.border_line {\n  width: 60px;\n  border: 2px solid #6e6e6e;\n  border-radius: 25px;\n}\n\n.back_icon {\n  font-size: 25px;\n  color: var(--theme-color);\n}\n\n.change {\n  color: var(--black);\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  margin-left: 10px;\n}\n\n.close {\n  font-size: 30px;\n  color: var(--black);\n}\n\n.searchbar {\n  border: 1px solid var(--theme-color);\n  color: var(--black);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n}\n\n.card {\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  border-bottom: var(--boxshadow);\n  padding: 5px;\n  margin: 5px;\n  min-width: 150px;\n}\n\n.card_img {\n  object-fit: cover;\n}\n\n.card_img::part(image) {\n  border-radius: 5px;\n}\n\nion-thumbnail {\n  height: 72px;\n  width: 56px;\n  --border-radius: 7px;\n  position: relative;\n}\n\n.meal_pro_div {\n  width: 100%;\n  padding-left: 5px;\n}\n\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n  color: #666666;\n}\n\n.meal_pro {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: #666666;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n\n.Best {\n  --progress-background: #38a534;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Good {\n  --progress-background: #94ea0a;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Average {\n  --progress-background: #eadc18;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Fair {\n  --progress-background: #ffa500;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Unverified {\n  --progress-background: #7d7d7d5e;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.Bad {\n  --progress-background: red;\n  border-radius: 25px;\n  width: 50px;\n  margin: 2px 0px;\n}\n\n.plus_icon {\n  font-size: 25px;\n  z-index: 1;\n  border-radius: 100%;\n  background: white;\n  color: #999999;\n  margin-right: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 0;\n}\n\n.more_button_div {\n  margin-top: 10px;\n  z-index: 999;\n  width: 100%;\n}\n\n.more_button_div ion-button {\n  --border-color: #707070;\n  color: #707070;\n  font-size: var(--xsmall-font);\n  text-transform: none;\n  --background: var(--white);\n  --border-width: 1px;\n  height: 25px;\n  width: 140px;\n}\n\n.more_button_div .up_down_icon {\n  border: 1px solid var(--theme-color);\n  border-radius: 100px;\n  padding: 2px;\n  color: var(--theme-color);\n  background: var(--white);\n  box-shadow: var(--boxshadow);\n}\n\n.lock {\n  color: var(--black);\n  font-size: 25px;\n  margin: 0px 0px 0px 5px;\n}\n\n.lock_btn {\n  width: 75px !important;\n  --padding-start: 0px !important;\n  --padding-end: 5px !important;\n}\n\n.dot_boarder {\n  margin: 0%;\n  border: 2px solid var(--theme-color);\n  height: 15px;\n  width: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dot {\n  height: 5px;\n  width: 5px;\n  background: var(--theme-color);\n  border-radius: 100%;\n}\n\n.veg_div {\n  position: absolute;\n  top: 1px;\n  right: 2px;\n  background: white;\n  height: 18px;\n  width: 19px;\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.rest_logo {\n  position: absolute;\n  bottom: -20px;\n  height: 35px;\n  width: 35px;\n  box-shadow: var(--boxshadow);\n}\n\n.rest_logo ion-img {\n  height: 35px;\n  width: 35px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYWxsLW1lYWwtY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHSTtFQUNFLG1DQUFBO0FBQU47O0FBR0k7RUFDQyx1QkFBQTtBQURMOztBQUtFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFNRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFJSTtFQUNFLGtCQUFBO0FBRk47O0FBTUU7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Qsa0JBQUE7QUFKSDs7QUFRRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFTRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVFFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTEo7O0FBT0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhKOztBQUtFO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUU7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFESjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFLSTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFITjs7QUFNSTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBSk47O0FBUUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFFO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUxKOztBQU9JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUxOIiwiZmlsZSI6InNtYWxsLW1lYWwtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbmdlX21haW5fZGl2IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5jaGFuZ2VfY29udGVudCB7XG4gICAgJjo6cGFydChiYWNrZ3JvdW5kKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgICY6OnBhcnQoc2Nyb2xsKSB7XG4gICAgIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIH1cbiAgfVxuICBcbiAgLmJvcmRlcl9saW5lIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNmU2ZTZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLy8gbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICAuYmFja19pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgfVxuICBcbiAgLmNoYW5nZSB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAuY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB9XG4gIFxuICAuc2VhcmNoYmFyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm94c2hhZG93KTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWluLXdpZHRoOiAxNTBweFxuICB9XG4gIFxuICAuY2FyZF9pbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICY6OnBhcnQoaW1hZ2UpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi10aHVtYm5haWwge1xuICAgIC8vIC0tc2l6ZTogNjVweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgIFxuICB9XG4gIFxuICAubWVhbF9wcm9fZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICBcbiAgLm1lYWxfY2FsIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICB9XG4gIFxuICAubWVhbF9wcm8ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB3aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gIC5CZXN0IHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMzOGE1MzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLkdvb2Qge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzk0ZWEwYTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuQXZlcmFnZSB7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjZWFkYzE4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9XG4gIC5GYWlyIHtcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICNmZmE1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLlVudmVyaWZpZWQge1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzdkN2Q3ZDVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICB9XG4gIC5CYWR7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gIH1cbiAgLnBsdXNfaWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAvLyBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLm1vcmVfYnV0dG9uX2RpdiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGJvdHRvbTogLTEwcHg7XG4gIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1ib3JkZXItY29sb3I6ICM3MDcwNzA7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgfVxuICBcbiAgICAudXBfZG93bl9pY29uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gICAgfVxuICB9XG4gIFxuICAubG9jayB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG4gIH1cbiAgXG4gIC5sb2NrX2J0biB7XG4gICAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZG90X2JvYXJkZXIge1xuICAgIG1hcmdpbjogMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kb3Qge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbiAgXG4gIC52ZWdfZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFweDtcbiAgICByaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMTlweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnJlc3RfbG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94c2hhZG93KTtcblxuICAgIGlvbi1pbWd7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICB9XG4gICJdfQ== */";

/***/ }),

/***/ 6221:
/*!*********************************************************************************!*\
  !*** ./src/app/components/small-meal-card/small-meal-card.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"card\">\n  <div class=\"d_flex\">\n    <div style=\"width: 60px; position: relative\">\n      <ion-thumbnail (click)=\"gotoViews(data)\" class=\"center\">\n        <img\n        class=\"card_img\"\n        [src]=\"data?.imageUrl\"\n        onerror=\"this.src='./assets/newImages/null.jpg';this.style='object-fit: contain'\"\n      />\n        \n      \n      </ion-thumbnail>\n     \n    </div>\n\n    <div class=\"meal_pro_div\">\n      <p class=\"meal_pro\" style=\"height: 45px\">{{data?.Food}}</p>\n      <div class=\"meal_pro_div d_flex\" style=\"margin-top: 7px; padding: 0%\">\n        <div class=\"w_100\">\n          <p class=\"meal_pro\" style=\"font-weight: 500\">\n            {{Math.round(data.Calories * this.data.portion)}} Kcal\n            <!-- * data?.portion -->\n          </p>\n          <ion-progress-bar\n            [ngClass]=\"data?.option === 'Below average'?'Fair':data?.option === 'Not recommended'?'Bad':data?.option \"\n            value=\"1\"\n          ></ion-progress-bar>\n        </div>\n\n       \n        <ion-icon\n          class=\"plus_icon\"\n          (click)=\"replaced()\"\n          name=\"add-circle-outline\"\n        ></ion-icon>\n        <!--  <div\n            class=\"dot_boarder\"\n            [ngStyle]=\"{'border-color':data?.foodType==='Ve' || data?.foodType==='V' ? 'var(--green)' : data?.foodType==='E' ? 'var(--yellow)': 'var(--red)'}\"\n          >\n            <div\n              class=\"dot\"\n              [ngStyle]=\"{'background':data?.foodType==='Ve' || data?.foodType==='V' ? 'var(--green)' : data?.foodType==='E' ? 'var(--yellow)': 'var(--red)'}\"\n            ></div>\n          </div>-->\n        <!-- </div> -->\n      </div>\n\n      <!-- <div class=\"right\">\n        <ion-icon\n          class=\"plus_icon\"\n          (click)=\"replacedModal(d,true)\"\n          name=\"add-circle-outline\"\n        ></ion-icon>\n      </div> -->\n    </div>\n  </div>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_small-meal-card_small-meal-card_module_ts.js.map