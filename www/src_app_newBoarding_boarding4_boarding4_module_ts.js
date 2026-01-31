"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_boarding4_boarding4_module_ts"],{

/***/ 5765:
/*!*******************************************************************!*\
  !*** ./src/app/newBoarding/boarding4/boarding4-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding4PageRoutingModule": () => (/* binding */ Boarding4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _boarding4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding4.page */ 82375);




const routes = [
    {
        path: '',
        component: _boarding4_page__WEBPACK_IMPORTED_MODULE_0__.Boarding4Page
    }
];
let Boarding4PageRoutingModule = class Boarding4PageRoutingModule {
};
Boarding4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Boarding4PageRoutingModule);



/***/ }),

/***/ 73326:
/*!***********************************************************!*\
  !*** ./src/app/newBoarding/boarding4/boarding4.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding4PageModule": () => (/* binding */ Boarding4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _boarding4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding4-routing.module */ 5765);
/* harmony import */ var _boarding4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding4.page */ 82375);







let Boarding4PageModule = class Boarding4PageModule {
};
Boarding4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boarding4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Boarding4PageRoutingModule
        ],
        declarations: [_boarding4_page__WEBPACK_IMPORTED_MODULE_1__.Boarding4Page]
    })
], Boarding4PageModule);



/***/ }),

/***/ 82375:
/*!*********************************************************!*\
  !*** ./src/app/newBoarding/boarding4/boarding4.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding4Page": () => (/* binding */ Boarding4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boarding4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding4.page.html?ngResource */ 5802);
/* harmony import */ var _boarding4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding4.page.scss?ngResource */ 98471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);










let Boarding4Page = class Boarding4Page {
    constructor(appservice, location, navCtrl, storage, utilities, cdr, modalCtrl, router, activatedRoute) {
        this.appservice = appservice;
        this.location = location;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.utilities = utilities;
        this.cdr = cdr;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.from = "";
        this.clientId = "";
        this.isChild = false;
        this.healths = [];
        this.showData = false;
        this.showDataAl = false;
        this.allergies = [];
        this.healthDisabled = false;
        this.alergyDisabled = false;
        this.mainHealthArray = [];
        this.profileData = {};
        this.trayaAllergies = [];
        this.reqBodyDiet = {
            dietPlanName: 'trayaHealth'
        };
        this.clientId = localStorage.getItem("clientId");
        this.activatedRoute.queryParams.subscribe(res => {
            this.from = res['from'];
        });
    }
    goBack() {
        if (this.from) {
            this.router.navigate(['new-profile']);
        }
        else {
            this.storage.set("pendingPage", "/boarding3");
            this.navCtrl.navigateRoot(["/boarding3"]);
        }
    }
    ngOnInit() {
        this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
        console.log("this.compConfig", this.compConfig);
        this.storage.get("localData").then((val) => {
            let data = this.utilities.parseJSON(val);
            console.log(data);
            this.localData = data;
            this.getProfile();
        });
    }
    getProfile() {
        this.appservice.getProfile().then((res) => {
            console.log(res);
            this.profileData = res;
            const loc = this.localData.otherMaster.diseases.filter((f) => this.profileData?.lifeStyle?.diseases?.includes(f.code));
            loc?.forEach((ele) => (ele.isSelected = true));
            console.log("loc=============================>", loc);
            if (this.localData.otherMaster.diseases.length > 0) {
                let gender = this.localData.otherMaster.gender.filter((ele) => {
                    return ele.isSelected == true;
                });
                let a = [];
                let h = [];
                if (gender &&
                    gender.length > 0 &&
                    gender[0]["value"].toLowerCase() == "male") {
                    this.healths = this.localData.otherMaster.diseases.filter((ele) => {
                        if (ele.code.toLowerCase() != "pd" &&
                            ele.code.toLowerCase() != "k" &&
                            ele.code.toLowerCase() != "p" &&
                            ele.code.toLowerCase() != "m" &&
                            ele.code.toLowerCase() != "l" &&
                            this.clientId === 'lalpathlabs' ?
                            (ele.code.toLowerCase() != "ir" &&
                                ele.code.toLowerCase() != "vb" &&
                                ele.code.toLowerCase() != "vd" &&
                                ele.code.toLowerCase() != "hp" &&
                                ele.code.toLowerCase() != "cr") : true) {
                            if (ele.value.includes("Allergy") ||
                                ele.value.includes("allergy")) {
                                if (this.clientId === 'traya') {
                                    if (ele.code.toLowerCase() != "f"
                                        && ele.code.toLowerCase() != "so"
                                        && ele.code.toLowerCase() != "sf") {
                                        this.allergies.push(ele);
                                    }
                                    else {
                                        this.trayaAllergies.push(ele);
                                    }
                                }
                                else {
                                    this.allergies.push(ele);
                                }
                                if (ele.isSelected) {
                                    a.push(ele);
                                }
                            }
                            else {
                                if (ele.isSelected) {
                                    h.push(ele);
                                }
                                return ele;
                            }
                        }
                    });
                    if (a.length === 0) {
                        this.alergyDisabled = true;
                    }
                    if (h.length === 0) {
                        this.healthDisabled = true;
                    }
                    console.log(this.healths);
                    console.log(this.allergies);
                }
                else {
                    this.healths = this.localData.otherMaster.diseases.filter((ele) => {
                        if (ele.value.includes("Allergy") ||
                            ele.value.includes("allergy")) {
                            this.allergies.push(ele);
                            if (ele.isSelected) {
                                a.push(ele);
                            }
                        }
                        else {
                            if (ele.isSelected) {
                                h.push(ele);
                            }
                            return ele;
                        }
                    });
                    if (a.length === 0) {
                        this.alergyDisabled = true;
                    }
                    if (h.length === 0) {
                        this.healthDisabled = true;
                    }
                }
            }
            if (this.clientId === 'enkeltec') {
                this.healths = this.healths.filter(item => {
                    return (item.code === "AN" ||
                        item.code === "CR" ||
                        item.code === "HP" ||
                        item.code === "VD" ||
                        item.code === "VB" ||
                        item.code === "A");
                });
            }
            if (this.clientId === 'lalpathlabs') {
                this.healths = this.healths.filter(item => {
                    return (item.code.toLowerCase() != "ir" &&
                        item.code.toLowerCase() != "vb" &&
                        item.code.toLowerCase() != "vd" &&
                        item.code.toLowerCase() != "hp" &&
                        item.code.toLowerCase() != "cr");
                });
            }
        });
    }
    modalClose() {
        this.router.navigate(['new-profile']);
    }
    healthSelection(e, health, diseasesName) {
        console.log("e--->>", e);
        console.log("e--->>", e.detail);
        if (health.code == "K" || health.code == "L" || health.code == "M") {
            console.log("came in if case");
            this.utilities.presentAlert(`Our solution is currently not optimised for ${diseasesName}, hence we regret to stop the further journey of weight loss by Smart Diet Planner.`);
            // e.detail.checked = false;
            health.isSelected = false;
            // this.healths.forEach((elm) => {
            //   if (elm.code == health.code) {
            //     elm.isSelected = false;
            //   }
            // });
            this.cdr.detectChanges();
            console.log(this.healths);
            // this.navCtrl.navigateForward([
            //   "/boarding4",
            //   { refresh: new Date().getTime() },
            // ]);
        }
        else {
            console.log("came in else case");
            health.isSelected = e.detail.checked;
            const t = this.localData.otherMaster.diseases.find((d) => d === health);
            t.isSelected = e.detail.checked;
            console.log("DATA+++", this.healths, this.localData.otherMaster.diseases);
        }
    }
    popupShow(health) {
        console.log("health=======>", health);
        if (health.code == "K" || health.code == "L" || health.code == "M") {
            console.log("came in if case");
            this.utilities.presentAlert(`Our solution is currently not optimised for ${health.value}, hence we regret to stop the further journey of weight loss by Smart Diet Planner.`);
        }
        else {
            return;
        }
    }
    allergySelection(e, alergy) {
        alergy.isSelected = e.detail.checked;
        const t = this.localData.otherMaster.diseases.find((d) => d === alergy);
        t.isSelected = e.detail.checked;
        console.log(this.allergies, this.localData.otherMaster.diseases);
    }
    noneSelection(type, disabletype, e) {
        this[disabletype] = e.detail.checked;
        this[type].forEach((element) => {
            element.isSelected = false;
        });
        // console.log(this.localData.otherMaster.diseases);
        this.localData.otherMaster.diseases.forEach((element) => {
            if (type === "allergies") {
                if (element.value.includes("Allergy") ||
                    element.value.includes("allergy")) {
                    element.isSelected = false;
                }
            }
            else {
                if (!element.value.includes("Allergy") ||
                    !element.value.includes("allergy")) {
                    element.isSelected = false;
                }
            }
        });
    }
    goNext() {
        for (let index = 0; index < this.localData.otherMaster.diseases.length; index++) {
            for (let b = 0; b < this.trayaAllergies.length; b++) {
                if (this.localData.otherMaster.diseases[index].code === this.trayaAllergies[b].code) {
                    this.localData.otherMaster.diseases[index].isSelected = true;
                }
            }
        }
        if (typeof this.localData.otherMaster !== undefined)
            this.storage.set("localData", JSON.stringify(this.localData));
        let data = [];
        this.localData.otherMaster.diseases.forEach((element) => {
            if (element.isSelected) {
                data.push(element.code);
            }
        });
        const reqBody = {
            activities: this.profileData?.lifeStyle?.activities,
            diseases: data,
            communities: typeof this.profileData?.lifeStyle?.communities === undefined ||
                this.profileData?.lifeStyle?.communities === null
                ? []
                : this.profileData?.lifeStyle?.communities,
            country: this.profileData?.lifeStyle?.country,
            foodType: this.profileData?.lifeStyle?.foodType,
            firstConsult: localStorage.getItem("clientId") === "orthocure" ? (this.profileData?.lifeStyle?.firstConsult === undefined ? false : this.profileData?.lifeStyle?.firstConsult) : null,
            consultQA: this.profileData?.lifeStyle?.consultQA === undefined ? [] : this.profileData?.lifeStyle?.consultQA,
            instructions: this.profileData?.lifeStyle?.instructions === undefined ? '' : this.profileData?.lifeStyle?.instructions,
            dietPlanName: this.profileData?.lifeStyle?.dietPlanName
        };
        console.log(reqBody);
        this.appservice.postLifeStyle(reqBody).then((success) => {
            if (localStorage.getItem("clientId") == 'traya') {
                this.appservice.dietPlan(this.reqBodyDiet).then((res) => { });
            }
        });
        if (this.from) {
            return this.modalClose();
        }
        this.storage.set("pendingPage", "/boarding5");
        this.navCtrl.navigateForward(["boarding5"]);
    }
};
Boarding4Page.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
Boarding4Page.propDecorators = {
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
Boarding4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-boarding4",
        template: _boarding4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boarding4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Boarding4Page);



/***/ }),

/***/ 98471:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding4/boarding4.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  height: 100%;\n  width: 100%;\n}\n\nion-content::part(background) {\n  --background: var(--theme-newHeader);\n}\n\n.slider_div {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.content_div {\n  min-height: 85%;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 0px;\n}\n\n.content_sub_div {\n  padding: 0px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--white);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page-count-active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-newHeader);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-text-color);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 div {\n  width: 25%;\n}\n\n.card_div {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n}\n\n.card_div ion-radio {\n  --color-checked: var(--white);\n}\n\n.complete {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-complete {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-lines {\n  border: 1px solid var(--theme-text-color);\n  width: 90%;\n  position: absolute;\n}\n\n.lines {\n  border: 1px solid var(--white);\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines2 div {\n  width: 25%;\n  border: 1px solid var(--theme-text-color);\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 5%;\n}\n\n.title {\n  font-size: var(--large-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n}\n\n.condition_card {\n  background: var(--lightGrey);\n  border: 1.5px solid var(--card-border);\n  border-radius: 10px;\n  padding: 10px;\n  margin: 30px 5%;\n}\n\n.fitness {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n  margin: 5px 0px;\n}\n\n.section-card {\n  margin: 0%;\n  width: 100%;\n  box-shadow: none;\n  /* border-radius: 10px; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 60px;\n  border-bottom: 1px solid var(--card-border);\n}\n\n.card_Border {\n  border: 2px solid var(--theme-color);\n}\n\n.desc {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 300;\n  margin: 0%;\n  width: 60%;\n}\n\n.card_image {\n  height: 80px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: -10px;\n  bottom: 10px;\n}\n\n.i {\n  background: var(--theme-newButton);\n  padding: 3px 7px;\n  border-radius: 5px;\n  color: var(--white);\n  font-size: 10px;\n  margin-left: 10px;\n}\n\n.label_checkbox {\n  font-size: 0.7rem;\n  font-family: var(--theme-newFont);\n  color: var(--normal-color);\n  width: 100%;\n  flex-wrap: wrap;\n  white-space: normal;\n}\n\n.condition {\n  color: var(--theme-color);\n}\n\nion-checkbox {\n  margin-inline-end: 10px;\n  --border-radius: 5px;\n  --border-width: 2px;\n  --border-color:var(--theme-newButton);\n  --background:var(--radio-background);\n  --background-checked:var(--theme-newButton);\n  --border-color-checked: var(--theme-newButton);\n  --checkmark-color: var(--white);\n  font-size: var(--small-font);\n}\n\n.check_item {\n  --background: transparent;\n  --padding-start:0px !important;\n}\n\n.more_btn {\n  height: 40px;\n  width: 40%;\n  margin-left: 30%;\n  margin-bottom: -30px;\n}\n\n.more_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: none;\n  color: var(--theme-newButton);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n\n.go_btn_div {\n  margin-top: 50px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 80%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.back_btn {\n  height: 50px;\n  width: 80%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n/*# sourceMappingURL=data:application/json;base64,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bGUiOiJib2FyZGluZzQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXZ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudDo6cGFydChiYWNrZ3JvdW5kKXtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG59XG5cbi8vIGlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCl7XG4vLyAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyAgIFxuLy8gfVxuXG4uc2xpZGVyX2RpdntcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlciA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmNvbnRlbnRfZGl2e1xuICAgIG1pbi1oZWlnaHQ6ODUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOjIwcHggMHB4O1xufVxuXG4uY29udGVudF9zdWJfZGl2e1xuICAgIHBhZGRpbmc6MHB4IDUlO1xufVxuXG4uc2xpZGVyX3BhZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhZ2VfQ291bnR7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLW1pbGVzdG9uZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLW1pbGVzdG9uZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5wYWdlX0NvdW50X2FjdGl2ZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLW1pbGVzdG9uZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5hdml2YS1wYWdlLWNvdW50LWFjdGl2ZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOnZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuLmF2aXZhLXBhZ2VfQ291bnQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5saW5lczIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xuICAgIH1cbn1cbiAgLmNhcmRfZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgICBpb24tcmFkaW8ge1xuICAgICAgLy8gLS1jb2xvcjp2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXdoaXRlKTtcbiAgICB9XG4gIH1cblxuLmNvbXBsZXRlIHtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4uYXZpdmEtY29tcGxldGUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5hdml2YS1saW5lc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxpbmVze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmF2aXZhLWxpbmVzMiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICB9XG59XG5cbi50aXRsZS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICBtYXJnaW46MTBweCA1JTtcbn1cblxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbmRpdGlvbl9jYXJke1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JleSk7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMzBweCA1JTtcbiAgICBcbn1cblxuXG5cbi5maXRuZXNze1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uc2VjdGlvbi1jYXJke1xuICAgIG1hcmdpbjogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICBcbn1cblxuLmNhcmRfQm9yZGVye1xuICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpXG59XG5cbi5kZXNje1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDAlO1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5jYXJkX2ltYWdle1xuICAgIGhlaWdodDogODBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xufVxuXG4uaXtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubGFiZWxfY2hlY2tib3h7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgY29sb3I6IHZhcigtLW5vcm1hbC1jb2xvcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uY29uZGl0aW9ue1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbmlvbi1jaGVja2JveHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOnZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLXJhZGlvLWJhY2tncm91bmQpO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOnZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG59XG5cbi5jaGVja19pdGVte1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9yZV9idG57XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICB9XG59XG5cbi5nb19idG5fZGl2e1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cblxuLmdvX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWJ1dHRvbi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIFxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgfVxufVxuXG5cblxuLmJhY2tfYnRue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgICY6OnBhcnQobmF0aXZlKXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWJhY2spO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 5802:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding4/boarding4.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\">\n    <div class=\"slider_div\" *ngIf=\"!from\">\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines' : 'lines'\"></div>\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines2' : 'lines2'\">\n        <div></div>\n      </div>\n      <div class=\"slider_page\">\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page-count-active' : 'page_Count_active'\">4</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page_Count' : 'page_Count'\">5</p>\n      </div>\n    </div>\n    <div class=\"content_div\" [ngStyle]=\"from && {'border-radius':'0px','min-height':'100%'}\">\n      <div class=\"w_100 right\" *ngIf=\"from\" style=\"padding-right: 5%\">\n        <ion-icon class=\"close_modal_icon\" name=\"close-circle\" (click)=\"modalClose()\"></ion-icon>\n      </div>\n      <p class=\"title-text\">\n        Do you have any health conditions or allergies?\n      </p>\n      <div class=\"condition_card\" *ngIf=\"!isChild\">\n        <div class=\"card_div\">\n          <ion-img src=\"../../../assets/newImages/healthCondition.png\" class=\"card_image\"></ion-img>\n          <div class=\"section-card\">\n            <p class=\"fitness\">\n              Health condition\n\n            </p>\n          </div>\n        </div>\n        <ion-grid>\n          <ion-row>\n\n            <ion-col size=\"6\" *ngFor=\"let health of healths.slice(0,this.showData? healths.length:6)\"\n              (click)=\"popupShow(health)\">\n              <ion-item lines=\"none\" class=\"check_item\"\n                *ngIf=\"health.code !== 'K' && health.code !== 'L' && health.code !== 'M'\">\n                <ion-checkbox [checked]=\"health.isSelected\" [value]=\"health.value\"\n                  (ionChange)=\"healthSelection($event,health,health.value)\"\n                  [disabled]=\"health.code === 'K' || health.code === 'L' || health.code === 'M'\" slot=\"start\">\n                </ion-checkbox>\n                <ion-label class=\"label_checkbox\">{{health.value}} </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-button *ngIf=\"!compConfig.isChild\" class=\"more_btn\" shape=\"round\" fill=\"outline\"\n          (click)=\"showData=!showData\">{{(showData) ?'Show Less' :'Show More'}}</ion-button>\n      </div>\n\n      <div class=\"condition_card\" style=\"margin-top: 70px\">\n        <div class=\"card_div\">\n          <ion-img *ngIf=\"!isChild\" src=\"../../../assets/newImages/alergies.png\" class=\"card_image\"></ion-img>\n          <ion-img *ngIf=\"isChild\" src=\"../../../assets/child/child-1.jpeg\" class=\"card_image\"></ion-img>\n          <div class=\"section-card\">\n            <p class=\"fitness\">\n              Allergies\n              <!-- <span class=\"i\">i</span> -->\n            </p>\n          </div>\n        </div>\n        <ion-grid>\n          <ion-row>\n\n            <ion-col size=\"6\" *ngFor=\"let a of allergies.slice(0,showDataAl? allergies.length:7)\">\n              <ion-item lines=\"none\" class=\"check_item\">\n                <ion-checkbox slot=\"start\" [checked]=\"a?.isSelected\" [value]=\"a?.code\"\n                  (ionChange)=\"allergySelection($event,a)\"></ion-checkbox>\n                <ion-label class=\"label_checkbox\">{{a?.value}} </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- <ion-button\n          class=\"more_btn\"\n          shape=\"round\"\n          fill=\"outline\"\n          (click)=\"showDataAl=!showDataAl\"\n          >{{showDataAl?'Show Less':'Show More'}}</ion-button -->\n\n      </div>\n\n      <div class=\"go_btn_div\" *ngIf=\"!from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"goBack()\">Back</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Almost There</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div class=\"go_btn_div\" *ngIf=\"from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"modalClose()\">Cancel</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Save</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_boarding4_boarding4_module_ts.js.map