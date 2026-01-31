"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_final-boarding_final-boarding_module_ts"],{

/***/ 60864:
/*!*****************************************************************************!*\
  !*** ./src/app/newBoarding/final-boarding/final-boarding-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalBoardingPageRoutingModule": () => (/* binding */ FinalBoardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _final_boarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-boarding.page */ 86572);




const routes = [
    {
        path: '',
        component: _final_boarding_page__WEBPACK_IMPORTED_MODULE_0__.FinalBoardingPage
    }
];
let FinalBoardingPageRoutingModule = class FinalBoardingPageRoutingModule {
};
FinalBoardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FinalBoardingPageRoutingModule);



/***/ }),

/***/ 23682:
/*!*********************************************************************!*\
  !*** ./src/app/newBoarding/final-boarding/final-boarding.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalBoardingPageModule": () => (/* binding */ FinalBoardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _final_boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-boarding-routing.module */ 60864);
/* harmony import */ var _final_boarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-boarding.page */ 86572);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let FinalBoardingPageModule = class FinalBoardingPageModule {
};
FinalBoardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _final_boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinalBoardingPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_final_boarding_page__WEBPACK_IMPORTED_MODULE_1__.FinalBoardingPage]
    })
], FinalBoardingPageModule);



/***/ }),

/***/ 86572:
/*!*******************************************************************!*\
  !*** ./src/app/newBoarding/final-boarding/final-boarding.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalBoardingPage": () => (/* binding */ FinalBoardingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _final_boarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-boarding.page.html?ngResource */ 51343);
/* harmony import */ var _final_boarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-boarding.page.scss?ngResource */ 94916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);











let FinalBoardingPage = class FinalBoardingPage {
    constructor(navCtrl, storage, utilities, appService, location) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.utilities = utilities;
        this.appService = appService;
        this.location = location;
        this.moment = (moment__WEBPACK_IMPORTED_MODULE_2___default());
        this.isChild = false;
        this.date = new Date();
        this.randomNumber = Number(Date.now()) * Math.random();
        this.next3 = new Date().setMonth(new Date().getMonth() + 3);
        this.poundValue = 0.453592;
        this.plan = { suggestedWeight: 0, dateBy: "" };
        this.dateBy = [];
        this.couponCode = "CU0000";
        this.clientId = "";
        console.log("cccccc:-", localStorage.getItem("clientId"));
        if (localStorage.getItem("clientId").toLowerCase() === "eatfit") {
            this.clientId = "eatfit";
        }
    }
    ngOnInit() {
        this.clientId = localStorage.getItem("clientId");
        this.selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
        this.slot = JSON.parse(localStorage.getItem("slotChoice"));
        this.likeFood = localStorage.getItem("likeFood");
        console.log("clientId", this.clientId);
        this.clientId = localStorage.getItem('clientId');
        this.storage.get("health-journey").then((res) => {
            if (res) {
                this.plans = JSON.parse(res);
                console.log("res...", res);
            }
        });
        this.storage.get("localData").then((res) => {
            if (res) {
                //this.plan = JSON.parse(res);
                console.log("localData...", JSON.parse(res));
                this.localData = JSON.parse(res);
            }
        });
        this.gotoDemographic();
        this.termsandCond();
        //this.ditePlanAPIcall();
    }
    goNext() {
        //  this.appService.getOnePlan().subscribe(res=>{
        //    console.log("getoneplan()",res);
        /** enable for other company */
        let clientId = localStorage.getItem("clientId");
        if (!clientId) {
            //  this.location.replaceState('/','',{});
            //  this.navCtrl.navigateForward(["new-diet"]).then(() => {});
            this.navCtrl.navigateForward(["/new-diet"], { queryParams: { params: Math.floor(this.randomNumber) } });
        }
        else {
            this.location.replaceState(`${location.origin}/read?token=${localStorage.getItem("tkn")}&clientId=${localStorage.getItem("clientId")}&type=1`, '', {});
            this.location.replaceState('/new-diet', 'params=' + Math.floor(this.randomNumber).toString(), {});
            this.navCtrl.navigateForward(["/new-diet"], { queryParams: { params: Math.floor(this.randomNumber) } });
        }
    }
    goBack() {
        if (localStorage.getItem("clientId").toLowerCase() === "eatfit") {
            this.storage.set("pendingPage", "/meal-pref");
            this.navCtrl.navigateRoot(["/meal-pref"]);
        }
        else {
            this.storage.set("pendingPage", "/boarding5");
            this.navCtrl.navigateForward(["boarding5"]);
        }
    }
    gotoDemographic() {
        this.utilities.showLoading();
        let selectedCountryID;
        this.storage.get("localData").then((local) => {
            const data = this.utilities.parseJSON(local);
            console.log("local:::", data);
            let countri = this.utilities.getSelectedData(data.countries);
            if (countri.length > 0) {
                let selectedCountryID = countri[0]?._id;
                src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.CONSTANTS.country = countri[0].name;
            }
            this.appService.getDefaultDataDiet(selectedCountryID).then((res) => {
                data.Master = res["Master"];
                const reqBody = this.utilities.getDietRequest(data, selectedCountryID);
                this.appService.postDiet(reqBody).then((success) => {
                    const dietData = this.utilities.parseJSON(this.utilities.parseString(success));
                    data.otherMaster.diet = {
                        suggestedWeight: dietData.suggestedWeight,
                        dateBy: dietData.dateBy,
                    };
                    //this.dateBy = dietData.dateBy;
                    //
                    this.plan = data.otherMaster.diet;
                    if (data.otherMaster.height[0]?.param == "in" || data.otherMaster.height[0]?.unit == "in") {
                        this.suggestedWeightRange = Math.ceil((parseInt(data.otherMaster.height[0].value) * 2.54) - 100);
                    }
                    else if (data.otherMaster.height[0]?.param == "cm" || data.otherMaster.height[0]?.unit == "cm") {
                        this.suggestedWeightRange = Math.ceil(parseInt(data.otherMaster.height[0].value) - 100);
                    }
                    console.log("data.otherMaster.height[0].value", data.otherMaster.height[0].value, this.suggestedWeightRange);
                    if (this.plan.dateBy != undefined) {
                        console.log(this.plan.dateBy);
                        this.dateBy = this.plan.dateBy.split("-");
                        console.log(this.dateBy);
                    }
                    if (data.otherMaster.weight[0]?.param == "pound") {
                        this.unit = "lbs";
                    }
                    else {
                        this.unit = "Kg";
                    }
                    console.log("this.unit", this.unit);
                    console.log("Diet Response: ", dietData);
                    if (typeof this.localData.otherMaster !== undefined)
                        this.storage
                            .set("localData", this.utilities.parseString(data))
                            .then(() => {
                            this.utilities.hideLoader();
                            //this.navCtrl.navigateForward(["/diet"]);
                        });
                });
            });
        });
    }
    termsandCond() {
        let reqData = { tnc: "accepted" };
        this.appService.terms(reqData).then((res) => {
            //this.openTerms=false;
            this.appService
                .payment({ amount: 0, couponCode: this.couponCode, free: true })
                .then((success) => {
                this.payForFree();
            }, (err) => {
                this.utilities.hideLoader();
                console.log(err);
            });
        }, (err) => {
            console.log("error", err);
            this.utilities.hideLoader();
        });
        //  });
    }
    payForFree() {
        this.appService
            .paymentConfirm({
            free: true,
        })
            .then((payconfirm) => {
            this.utilities.hideLoader();
            ///this.router.navigate(["jurney"]);
            console.log("payconfirm", payconfirm);
        }, (err) => {
            this.utilities.hideLoader();
            //  this.router.navigate(["consume"]);
            console.log("err", err);
        });
    }
    kgToLbs(kg) {
        const lbsPerKg = 2.20462;
        return Math.round(kg * lbsPerKg);
    }
};
FinalBoardingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_6__.AppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location }
];
FinalBoardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-final-boarding",
        template: _final_boarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_final_boarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FinalBoardingPage);



/***/ }),

/***/ 94916:
/*!********************************************************************************!*\
  !*** ./src/app/newBoarding/final-boarding/final-boarding.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  height: 100%;\n  width: 100%;\n  background: var(--theme-color);\n}\n\nion-content::part(background) {\n  --background: var(--theme-newHeader);\n}\n\n.slider_div {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.content_div {\n  min-height: 85%;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 0px;\n}\n\n.content_sub_div {\n  padding: 0px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.heading_title {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--white);\n  /* margin: 10px 5%; */\n  font-weight: 500;\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 5%;\n}\n\n.title {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n  margin: 0px;\n}\n\n.sub_title {\n  width: 70%;\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 0px 0px;\n  font-weight: 400;\n}\n\n.condition_card {\n  background: var(--lightGrey);\n  border: 1.5px solid var(--card-border);\n  border-radius: 10px;\n  padding: 20px;\n  margin: 30px 5%;\n}\n\n.card_div {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  position: relative;\n}\n\n.card_div ion-radio {\n  --color-checked:var(--theme-color);\n}\n\n.card_image {\n  height: 65px;\n  position: absolute;\n  right: -10px;\n  top: -40px;\n}\n\n.cal_calculation_div {\n  width: 100%;\n}\n\n.cal_main_div {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.cal_col {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.card_cal_image {\n  height: 15px;\n  object-fit: contain;\n}\n\n.cal_title {\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n  margin: 0px;\n}\n\n.cal_sub_title {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 0px 5px;\n  font-weight: 400;\n}\n\n.muscle_image {\n  width: 80%;\n  object-fit: contain;\n  margin-left: 10%;\n}\n\n.between_time {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border-Top: 3px solid var(--card-border);\n}\n\n.note_div {\n  background: #F2F2F2;\n  width: 100%;\n  padding: 5px 20px;\n  margin-bottom: 10px;\n}\n\n.note_div p {\n  font-size: var(--xsmall-font);\n}\n\n.footer_div {\n  margin: 50px 5% 20px;\n}\n\n.terms {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--normal-color);\n}\n\nion-checkbox {\n  margin-inline-end: 10px;\n  --border-radius: 5px;\n  --border-width: 2px;\n  --border-color:var(--theme-newButton);\n  --background: var(--radio-background);\n  --background-checked:var(--theme-newButton);\n  --border-color-checked: var(--theme-newButton);\n  --checkmark-color: var(--white);\n}\n\n.ion_item {\n  --padding-start:0px;\n}\n\n.go_btn_div {\n  margin-top: 50px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 100%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.back_btn {\n  height: 50px;\n  width: 80%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n\n.desease_div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0px;\n}\n\n.Fat_image {\n  height: 80px;\n}\n\n.arrow_image {\n  width: 8px;\n}\n\n.aviva-header-image {\n  height: 8vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFsLWJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFKSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBTEo7O0FBU0E7RUFDSSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0E7RUFDSSw4QkFBQTtFQUNELGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkg7O0FBU0E7RUFDSSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBV0E7RUFDSSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVJKOztBQWFBO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBZUk7RUFFSSxrQ0FBQTtBQWRSOztBQWtCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBZko7O0FBa0JBO0VBQ0ksV0FBQTtBQWZKOztBQWtCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBa0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFmSjs7QUFrQkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFrQkE7RUFDSSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFmSjs7QUFrQkE7RUFDSSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBbUJBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFoQko7O0FBb0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBakJKOztBQW9CQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFqQko7O0FBbUJJO0VBQ0ksNkJBQUE7QUFqQlI7O0FBcUJBO0VBQ0ksb0JBQUE7QUFsQko7O0FBcUJBO0VBQ0ksOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0FBbEJKOztBQXNCQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsK0JBQUE7QUFuQko7O0FBc0JBO0VBQ0ksbUJBQUE7QUFuQko7O0FBc0NBO0VBQ0ksZ0JBQUE7QUFuQ0o7O0FBc0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFuQ0o7O0FBb0NJO0VBQ0ssNkNBQUE7RUFDRCxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFFQSxpQ0FBQTtBQW5DUjs7QUF5Q0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQXRDSjs7QUF1Q0k7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFyQ1I7O0FBeUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdENKOztBQXlDQTtFQUNJLFlBQUE7QUF0Q0o7O0FBeUNBO0VBQ0ksVUFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxXQUFBO0FBdENKIiwiZmlsZSI6ImZpbmFsLWJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbmlvbi1jb250ZW50OjpwYXJ0KGJhY2tncm91bmQpe1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbn1cblxuLy8gaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKXtcbi8vICAgICBvdmVyZmxvdy15OiBoaWRkZW47ICAgXG4vLyB9XG5cbi5zbGlkZXJfZGl2e1xuICAgIGhlaWdodDogMTUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4uY29udGVudF9kaXZ7XG4gICAgbWluLWhlaWdodDo4NSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6MjBweCAwcHg7XG59XG5cbi5jb250ZW50X3N1Yl9kaXZ7XG4gICAgcGFkZGluZzowcHggNSU7XG59XG5cbi5zbGlkZXJfcGFnZXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi5oZWFkaW5nX3RpdGxle1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC8qIG1hcmdpbjogMTBweCA1JTsgKi9cbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGl0bGUtdGV4dHtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgbWFyZ2luOjEwcHggNSU7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4ICA7XG59XG5cbi5zdWJfdGl0bGV7XG4gICAgd2lkdGg6NzAlIDtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgXG59XG5cblxuLmNvbmRpdGlvbl9jYXJke1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JleSk7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDtcbiAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgXG59XG5cblxuLmNhcmRfZGl2e1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbWFyZ2luOiAzMHB4IDUlIDBweDtcblxuXG4gICAgaW9uLXJhZGlve1xuICAgICAgICAvLyAtLWNvbG9yOnZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOnZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgICB9XG59XG5cbi5jYXJkX2ltYWdle1xuICAgIGhlaWdodDogNjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIHRvcDogLTQwcHg7XG59XG5cbi5jYWxfY2FsY3VsYXRpb25fZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FsX21haW5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jYWxfY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNhcmRfY2FsX2ltYWdle1xuICAgIGhlaWdodDogMTVweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uY2FsX3RpdGxle1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDBweCAgO1xufVxuXG4uY2FsX3N1Yl90aXRsZXtcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbjogMTBweCAwcHggNXB4IDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgXG59XG5cbi5tdXNjbGVfaW1hZ2V7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gXG59XG5cbi5iZXR3ZWVuX3RpbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLVRvcDozcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xufVxuXG4ubm90ZV9kaXZ7XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgfVxufVxuXG4uZm9vdGVyX2RpdntcbiAgICBtYXJnaW46IDUwcHggNSUgMjBweDtcbn1cblxuLnRlcm1ze1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgY29sb3I6IHZhcigtLW5vcm1hbC1jb2xvcik7XG59XG5cblxuaW9uLWNoZWNrYm94e1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItY29sb3I6dmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLWJhY2tncm91bmQpO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOnZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uaW9uX2l0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcbn1cblxuLy8gLmdvX2J0bl9kaXZ7XG4vLyAgICAgbWFyZ2luLXRvcDoyMHB4O1xuLy8gfVxuXG4vLyAuZ29fYnRue1xuLy8gICAgIGhlaWdodDogNTBweDtcbi8vICAgICB3aWR0aDogODAlO1xuLy8gICAgICY6OnBhcnQobmF0aXZlKXtcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuLy8gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbi8vICAgICB9XG4vLyB9XG5cbi5nb19idG5fZGl2e1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cblxuLmdvX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjo6cGFydChuYXRpdmUpe1xuICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcm9maWxlLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjp2YXIoLS1idXR0b24tdGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJ0blNoYWRkb3cpO1xuICAgICAgICBcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIH1cbn1cblxuXG5cbi5iYWNrX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC1iYWNrKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgfVxufVxuXG4uZGVzZWFzZV9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLkZhdF9pbWFnZXtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5hcnJvd19pbWFnZXtcbiAgICB3aWR0aDogOHB4O1xufVxuXG4uYXZpdmEtaGVhZGVyLWltYWdlIHtcbiAgICBoZWlnaHQ6IDh2aDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 51343:
/*!********************************************************************************!*\
  !*** ./src/app/newBoarding/final-boarding/final-boarding.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\" [ngStyle]=\"{'background-color':clientId==='enkeltec'?'#000':null}\">\n    <div class=\"slider_div\">\n      <div class=\"slider_page\">\n        <p class=\"heading_title\">\n          Thank You! <br />We appreciate your dedication.\n        </p>\n        <ion-img *ngIf=\"clientId == 'aviva'\" src=\"../../../../assets/newImages/nutritional.png\"\n          class=\"aviva-header-image\"></ion-img>\n      </div>\n    </div>\n    <div class=\"content_div\">\n      <p class=\"title-text\">\n        From the information provided, that is our basic analysis.\n      </p>\n      <div class=\"condition_card\" *ngIf=\"!isChild\">\n        <div class=\"card_div\">\n          <ion-img *ngIf=\"clientId != 'aviva'\" src=\"../../../../assets/newImages/bmi.png\" class=\"card_image\"></ion-img>\n          <p class=\"title\">Your BMI: {{localData?.otherMaster?.bmi?.bmi}}</p>\n          <p class=\"sub_title\" *ngIf=\"clientId!=='enkeltec'\">\n            BMI range of men & women for your age: 18.5 - 25\n          </p>\n        </div>\n      </div>\n\n      <div class=\"condition_card\" *ngIf=\"clientId!=='enkeltec' && !isChild\">\n        <div class=\"card_div\">\n          <ion-img *ngIf=\"clientId != 'aviva'\" src=\"../../../../assets/newImages/weight_machine.png\" class=\"card_image\">\n          </ion-img>\n          <p class=\"title\">\n            Current Weight: {{localData?.otherMaster?.weight[0]?.value}}\n            {{unit}}\n          </p>\n          <p class=\"title\">Desired Weight: {{plan.suggestedWeight}} {{unit}}</p>\n          <p class=\"sub_title\">\n            Target/Ideal weight recommended:\n            {{ unit === 'lbs' ? (kgToLbs(suggestedWeightRange - 2) + ' - ' + kgToLbs(suggestedWeightRange + 2) + ' lbs') :\n                      ((suggestedWeightRange - 2) + ' - ' + (suggestedWeightRange + 2) + ' kg') }}\n          </p>\n        </div>\n      </div>\n\n      <!-- <div class=\"condition_card\" *ngIf=\"clientId!=='enkeltec'\">\n        <div class=\"card_div\">\n          <ion-img *ngIf=\"clientId != 'aviva'\"\n            src=\"../../../../assets/newImages/weight_machine.png\"\n            class=\"card_image\"\n          ></ion-img>\n          <p class=\"title\">\n            Current Weight: {{localData?.otherMaster?.weight[0]?.value}}\n            {{unit}}\n          </p>\n          <p class=\"title\" >Desired Weight: {{plan.suggestedWeight}}</p>\n          <p class=\"sub_title\">\n            Target/Ideal weight recommended: : {{suggestedWeightRange-2}}kg - :\n            {{suggestedWeightRange+2}}kg\n          </p>\n        </div>\n      </div> -->\n\n      <div class=\"condition_card\">\n        <div class=\"card_div\">\n          <ion-img *ngIf=\"clientId != 'aviva'\" src=\"../../../../assets/newImages/nutritional.png\" class=\"card_image\">\n          </ion-img>\n          <p class=\"title\">\n            Nutritional <br />\n            Requirement <span class=\"sub_title\">(On daily basis)</span>\n          </p>\n          <div class=\"cal_calculation_div\">\n            <div class=\"cal_main_div\">\n              <div class=\"cal_col\">\n                <ion-img src=\"../../../../assets/newImages/calorie.png\" class=\"card_cal_image\"></ion-img>\n                <p class=\"cal_sub_title\">Daily calorie target</p>\n                <p class=\"cal_title\">\n                  {{localData?.otherMaster?.calories?.calories}} Kcal\n                </p>\n              </div>\n              <div class=\"cal_col\">\n                <ion-img src=\"../../../../assets/newImages/carbs.png\" class=\"card_cal_image\"></ion-img>\n                <p class=\"cal_sub_title\">Carbs</p>\n                <p class=\"cal_title\">\n                  {{localData?.otherMaster?.calories?.carb}}g\n                </p>\n              </div>\n\n              <div class=\"cal_col\">\n                <ion-img src=\"../../../../assets/newImages/protein.png\" class=\"card_cal_image\"></ion-img>\n                <p class=\"cal_sub_title\">Protein</p>\n                <p class=\"cal_title\">\n                  {{localData?.otherMaster?.calories?.protien}}g\n                </p>\n              </div>\n\n              <div class=\"cal_col\">\n                <ion-img src=\"../../../../assets/newImages/fats.png\" class=\"card_cal_image\"></ion-img>\n                <p class=\"cal_sub_title\">Fats</p>\n                <p class=\"cal_title\">\n                  {{localData?.otherMaster?.calories?.fat}}g\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"condition_card pad_0\" *ngIf='plans?.fitnessValue && plans?.fitnessValue === \"MuscleBuilding\"'>\n        <div class=\"card_div\" style=\"margin: 20px 20px 10px\">\n          <ion-img src=\"../../../../assets/newImages/timing.png\" class=\"card_image\"></ion-img>\n          <p class=\"title\">Timeline for Muscle <br />Gain</p>\n          <ion-img src=\"../../../../assets/newImages/muscle-building.png\" class=\"muscle_image\"></ion-img>\n          <div class=\"between_time\">\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(date).format(\"Do MMM YYYY\")}}\n            </p>\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(next3).format(\"Do MMM YYYY\")}}\n            </p>\n          </div>\n          <!-- <p class=\"cal_sub_title\">\n            3-4 weeks to reach your desired target goal\n          </p> -->\n        </div>\n        <div class=\"note_div\">\n          <p>\n            Please note that it also depends on your discipline with regard to\n            your nutrition plan.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"condition_card pad_0\" *ngIf=\"plans?.deasesValue\">\n        <div class=\"card_div\" style=\"margin: 20px 20px 10px\">\n          <ion-img src=\"../../../../assets/newImages/timing.png\" class=\"card_image\"></ion-img>\n          <!-- <p class=\"title\">Disease Management<br />({{plans?.deasesValue}})</p> -->\n          <p class=\"title\">Transformation</p>\n          <div class=\"desease_div\">\n            <ion-img src=\"../../../../assets/newImages/very_bad.png\" class=\"Disease_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/arrow.png\" class=\"Disease_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/bad.png\" class=\"Disease_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/arrow.png\" class=\"Disease_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/mediumpng.png\" class=\"Disease_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/arrow.png\" class=\"Disease_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/goodpng.png\" class=\"Disease_image\"></ion-img>\n          </div>\n\n          <div class=\"between_time\">\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(date).format(\"Do MMM YYYY\")}}\n            </p>\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(next3).format(\"Do MMM YYYY\")}}\n            </p>\n          </div>\n          <!-- <p class=\"cal_sub_title\">\n            3-4 weeks to reach your desired target goal\n          </p> -->\n        </div>\n        <div class=\"note_div\">\n          <p>\n            Please note that it also depends on your discipline with regard to\n            your nutrition plan.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"condition_card pad_0\" *ngIf='plans?.fitnessValue && plans?.fitnessValue === \"LeanBody\"'>\n        <div class=\"card_div\" style=\"margin: 20px 20px 10px\">\n          <ion-img src=\"../../../../assets/newImages/timing.png\" class=\"card_image\"></ion-img>\n          <p class=\"title\">Timeline for Fat<br />Shredding</p>\n          <div class=\"desease_div\">\n            <ion-img src=\"../../../../assets/newImages/fat1.png\" class=\"Fat_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/arrow.png\" class=\"arrow_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/fat2.png\" class=\"Fat_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/arrow.png\" class=\"arrow_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/fat3.png\" class=\"Fat_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/arrow.png\" class=\"arrow_image\"></ion-img>\n            <ion-img src=\"../../../../assets/newImages/fat5.png\" class=\"Fat_image\"></ion-img>\n          </div>\n\n          <div class=\"between_time\">\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(date).format(\"Do MMM YYYY\")}}\n            </p>\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(next3).format(\"Do MMM YYYY\")}}\n            </p>\n          </div>\n          <!-- <p class=\"cal_sub_title\">\n            3-4 weeks to reach your desired target goal\n          </p> -->\n        </div>\n        <div class=\"note_div\">\n          <p>\n            Please note that it also depends on your discipline with regard to\n            your nutrition plan.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"condition_card pad_0\" *ngIf='plans?.weightValue && plans?.weightValue === \"WeightLoss\"'>\n        <div class=\"card_div\" style=\"margin: 20px 20px 10px\">\n          <ion-img src=\"../../../../assets/newImages/timing.png\" class=\"card_image\"></ion-img>\n          <p class=\"title\">Timeline for Weight Loss</p>\n          <ion-img src=\"../../../../assets/newImages/weightloss.svg\" class=\"muscle_image\"></ion-img>\n          <div class=\"between_time\">\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(date).format(\"Do MMM YYYY\")}}\n            </p>\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(this.plan?.dateBy,'DD-MMM-YYYY').format(\"Do MMM YYYY\")}}\n              <!-- {{dateBy[0]}}{{dateBy[1]}} {{dateBy[2]!=\"\"?dateBy[2]:''}} -->\n            </p>\n          </div>\n          <!-- <p class=\"cal_sub_title\">\n            3-4 weeks to reach your desired target goal\n          </p> -->\n        </div>\n        <div class=\"note_div\">\n          <p>\n            Please note that it also depends on your discipline with regard to\n            your nutrition plan.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"condition_card pad_0\" *ngIf='plans?.weightValue && plans?.weightValue === \"WeightMaintenance\"'>\n        <div class=\"card_div\" style=\"margin: 20px 20px 10px\">\n          <ion-img src=\"../../../../assets/newImages/timing.png\" class=\"card_image\"></ion-img>\n          <p class=\"title\">Timeline for Weight<br />Maintenance</p>\n          <ion-img src=\"../../../../assets/newImages/weightmgmnt.svg\" class=\"muscle_image\"></ion-img>\n          <div class=\"between_time\">\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              {{moment(date).format(\"Do MMM YYYY\")}}\n            </p>\n            <p class=\"cal_sub_title\" style=\"margin-top: 5px; font-weight: 500\">\n              <!-- 9th Oct 2022 -->\n            </p>\n          </div>\n          <!-- <p class=\"cal_sub_title\">\n            3-4 weeks to reach your desired target goal\n          </p> -->\n        </div>\n        <div class=\"note_div\">\n          <p>\n            Please note that it also depends on your discipline with regard to\n            your nutrition plan.\n          </p>\n        </div>\n      </div>\n\n      <div *ngIf=\"clientId==='eatfit'\">\n        <app-meal-selected [selectedItem]=\"selectedItem\" [slot]=\"slot?.name\" [time]=\"slot?.time\" [likeFood]=\"likeFood\">\n        </app-meal-selected>\n      </div>\n      <div class=\"footer_div\">\n        <p class=\"title\">Lets get you started with our journey</p>\n\n        <!-- <ion-item lines=\"none\" class=\"ion_item\">\n          <ion-checkbox slot=\"start\"></ion-checkbox>\n          <ion-label class=\"terms\">Get reminders on watsapp </ion-label>\n        </ion-item> -->\n\n        <div class=\"go_btn_div\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\" class=\"left\">\n                <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"goBack()\">Back</ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right\">\n                <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Start Journey</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_final-boarding_final-boarding_module_ts.js.map