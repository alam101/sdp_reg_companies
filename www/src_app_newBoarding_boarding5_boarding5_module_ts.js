"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_boarding5_boarding5_module_ts"],{

/***/ 17089:
/*!*******************************************************************!*\
  !*** ./src/app/newBoarding/boarding5/boarding5-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding5PageRoutingModule": () => (/* binding */ Boarding5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _boarding5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding5.page */ 42921);




const routes = [
    {
        path: '',
        component: _boarding5_page__WEBPACK_IMPORTED_MODULE_0__.Boarding5Page
    }
];
let Boarding5PageRoutingModule = class Boarding5PageRoutingModule {
};
Boarding5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Boarding5PageRoutingModule);



/***/ }),

/***/ 1809:
/*!***********************************************************!*\
  !*** ./src/app/newBoarding/boarding5/boarding5.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding5PageModule": () => (/* binding */ Boarding5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _boarding5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding5-routing.module */ 17089);
/* harmony import */ var _boarding5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding5.page */ 42921);







let Boarding5PageModule = class Boarding5PageModule {
};
Boarding5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boarding5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Boarding5PageRoutingModule
        ],
        declarations: [_boarding5_page__WEBPACK_IMPORTED_MODULE_1__.Boarding5Page]
    })
], Boarding5PageModule);



/***/ }),

/***/ 42921:
/*!*********************************************************!*\
  !*** ./src/app/newBoarding/boarding5/boarding5.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding5Page": () => (/* binding */ Boarding5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boarding5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding5.page.html?ngResource */ 77315);
/* harmony import */ var _boarding5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding5.page.scss?ngResource */ 67985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let Boarding5Page = class Boarding5Page {
    constructor(navCtrl, location, storage, utilities, appService, router, activatedRoute) {
        this.navCtrl = navCtrl;
        this.location = location;
        this.storage = storage;
        this.utilities = utilities;
        this.appService = appService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.from = "";
        this.dietPreferences = "";
        this.country = {};
        this.openCountryDrop = false;
        this.regionalPreferences = [];
        this.countryArray = [];
        this.regionalPref = "";
        this.activatedRoute.queryParams.subscribe(res => {
            this.from = res['from'];
        });
        this.clientId = localStorage.getItem("clientId");
    }
    ngOnInit() {
        this.storage.get("localData").then((res) => {
            console.log(JSON.parse(res));
            this.localData = JSON.parse(res);
            this.localData.countries = this.clientId === 'enkeltec' ? this.localData.countries.filter(item => {
                return item._id !== 'IND' && item._id !== 'EGY' && item._id !== 'UAE';
            }) : this.localData.countries;
            this.countryArray = this.localData.countries;
            this.country = this.countryArray[0];
            this.localData?.otherMaster.foodPref.forEach((ele) => {
                if (ele.isSelected) {
                    this.dietPreferences = ele.value;
                }
            });
            // need to un comment this code when we have confirmation from puneet sir 
            // this.localData?.otherMaster?.community.forEach((ele) => {
            //   if (ele.isSelected) {
            //     this.regionalPref = ele.code;
            //   }
            // });
            this.localData?.countries.forEach((ele) => {
                if (ele.isSelected) {
                    this.country = ele;
                }
            });
            //
        });
        this.appService.getProfile().then((res) => {
            this.lifeStyle = res.lifeStyle;
            // if (this.localData && this.localData.otherMaster) {
            //   this.localData.otherMaster.community = this.localData.otherMaster.community.filter(
            //     (ele: any) => ele.code !== 'H' && ele.code !== 'A' && ele.code !== 'R');
            // }
            if (this.localData?.otherMaster?.community?.length && this.lifeStyle?.communities?.length) {
                const match = this.localData.otherMaster.community.find((ele) => {
                    return this.lifeStyle.communities.includes(ele.code);
                });
                if (match) {
                    match.isSelected = true;
                    this.regionalPref = match.code;
                }
                this.storage.set("localData", this.utilities.parseString(this.localData));
            }
        }, err => {
        });
    }
    modalClose() {
        this.router.navigate(['new-profile']);
    }
    goBack() {
        if (this.from) {
            this.router.navigate(['new-profile']);
        }
        else {
            this.storage.set("pendingPage", "/boarding4");
            this.router.navigate(["/boarding4"]);
        }
    }
    getImage(type) {
        switch (type) {
            case "V":
                return "broccoli@3x.png";
            case "NV":
                return "meat@3x.png";
            case "E":
                return "brocolly-egg.png";
            case "Ve":
                return "leaf@3x.png";
        }
    }
    selectFoodPre(e) {
        this.storage.get("localData").then((res) => {
            console.log(JSON.parse(res));
            this.localData = JSON.parse(res);
            this.localData?.otherMaster.foodPref.forEach((ele) => {
                if (ele.value === e.detail.value) {
                    ele.isSelected = true;
                }
                else {
                    ele.isSelected = false;
                }
                this.storage.set("localData", this.utilities.parseString(this.localData));
            });
        });
    }
    selectReginal(e, reginal) {
        console.log("regionalPref", this.regionalPref);
        reginal.isSelected = e.detail.checked;
        console.log(this.localData);
        if (typeof this.localData?.otherMaster !== undefined)
            this.storage.set("localData", this.utilities.parseString(this.localData));
    }
    getFlag(type) {
        console.log("ttttt:-", type);
        switch (type) {
            case "IND":
                return "india-flag.png";
            case "USA":
                return "USA-flag.png";
            case "CAN":
                return "canada-flag.png";
            case "AUS":
                return "Australia-flag.png";
            case "EGY":
                return "Egypt-flag.png";
            case "UAE":
                return "uae.jpeg";
        }
    }
    goNext() {
        if (!this.dietPreferences || (!this.regionalPref && this.country._id === "IND")) {
            this.utilities.presentToast("Please select your food and diet preferences.");
            return;
        }
        if (this.country._id === "IND") {
            this.storage.get("localData").then((res) => {
                console.log(JSON.parse(res));
                this.localData = JSON.parse(res);
                this.localData?.otherMaster?.community.filter(item => {
                    if (item.code == this.regionalPref) {
                        item.isSelected = true;
                    }
                    else {
                        item.isSelected = false;
                    }
                });
                this.storage.set("localData", this.utilities.parseString(this.localData));
                const isSelected = this.localData?.otherMaster?.community.find((f) => f.isSelected == true);
                if (!isSelected) {
                    this.utilities.presentToast("Please select your regional preferences.");
                    return false;
                }
            });
        }
        this.storage.get("localData").then((local) => {
            const data = this.utilities.parseJSON(local);
            this.storage
                .set("localData", this.utilities.parseString(data))
                .then(() => {
                const reqBodyLifeStyle = this.utilities.getLifeStyleRequest(data.otherMaster);
                reqBodyLifeStyle.dietPlanName = localStorage.getItem("goals");
                reqBodyLifeStyle.country = this.country?._id;
                const activitiesData = JSON.parse(localStorage.getItem("activities"));
                reqBodyLifeStyle.activities = { code: activitiesData.code, data: activitiesData.data };
                const communitiesItem = this.localData?.otherMaster?.community.filter(item => {
                    return item?.isSelected;
                });
                reqBodyLifeStyle.firstConsult = localStorage.getItem("clientId") === "orthocure" ? (this.lifeStyle?.firstConsult === undefined ? false : this.lifeStyle?.firstConsult) : null,
                    reqBodyLifeStyle.consultQA = this.lifeStyle?.consultQA === undefined ? [] : this.lifeStyle?.consultQA,
                    reqBodyLifeStyle.instructions = this.lifeStyle?.instructions === undefined ? {} : this.lifeStyle?.instructions;
                localStorage.setItem("communitiesItem", JSON.stringify(communitiesItem));
                reqBodyLifeStyle.communities = communitiesItem[0]?.code === undefined ? ['U'] : [communitiesItem[0]?.code, 'U'];
                this.appService.postLifeStyle(reqBodyLifeStyle).then((success) => {
                    const otherMasterData = this.utilities.parseJSON(this.utilities.parseString(success));
                    data.otherMaster.calories = {
                        calories: otherMasterData.calories,
                        carb: otherMasterData.carb,
                        fat: otherMasterData.fat,
                        fiber: otherMasterData.fiber,
                        protien: otherMasterData.protien,
                    };
                    console.log("otherMaster Response: ", data.otherMaster.calories);
                    this.storage
                        .set("localData", this.utilities.parseString(data))
                        .then(() => {
                        this.utilities.hideLoader();
                        this.utilities.logEvent("onboarding_complete_lifestyle", {});
                        if (this.from) {
                            return this.modalClose();
                        }
                        if (localStorage.getItem("clientId").toLowerCase() === "eatfit") {
                            this.storage.set("pendingPage", "/meal-pref");
                            this.navCtrl.navigateForward(["meal-pref"]);
                        }
                        else {
                            this.storage.set("pendingPage", "/final-boarding");
                            this.navCtrl.navigateForward(["final-boarding"]);
                        }
                        // this.updateProfile(data);
                    });
                }, (err) => {
                    this.utilities.hideLoader();
                    this.utilities.presentAlert(err);
                    console.log("Error:", err);
                });
            });
            // });
            // });
        });
    }
    selectCountry(c) {
        this.country = c;
        this.localData.countries.forEach((ele) => {
            if (ele._id === c._id) {
                ele.isSelected = true;
            }
            else {
                ele.isSelected = false;
            }
        });
        this.storage.set("localData", this.utilities.parseString(this.localData));
        this.openCountryDrop = !this.openCountryDrop;
    }
};
Boarding5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
Boarding5Page.propDecorators = {
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
Boarding5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-boarding5",
        template: _boarding5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boarding5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Boarding5Page);



/***/ }),

/***/ 67985:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding5/boarding5.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  height: 100%;\n  width: 100%;\n}\n\nion-content::part(background) {\n  --background: var(--theme-newHeader);\n}\n\n.slider_div {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.content_div {\n  min-height: 85%;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 0px;\n}\n\n.content_sub_div {\n  padding: 0px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: 0.651rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--white);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--white);\n  font-family: var(--theme-newFont);\n}\n\n.lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 div {\n  width: 25%;\n}\n\n.aviva-lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines2 div {\n  width: 25%;\n  border: 1px solid var(--theme-text-color);\n}\n\n.card_div {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n}\n\n.card_div ion-radio {\n  --color-checked: var(--white);\n}\n\n.complete {\n  border: 2px solid var(--white) !important;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.lines {\n  border: 1px solid var(--white);\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines {\n  border: 1px solid var(--theme-text-color);\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-complete {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page-count-active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-newHeader);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-text-color);\n  font-family: var(--theme-newFont);\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 5%;\n}\n\n.title {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n  margin: 40px 5% 20px;\n}\n\n.section-card {\n  margin: 0%;\n  padding: 0px 10px;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  height: 105px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n\n.card_Border {\n  border: 2px solid var(--theme-color);\n}\n\n.diet_image {\n  height: 64px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  margin-left: 20px;\n  top: -10px;\n  right: 10px;\n}\n\n.male_image {\n  height: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  bottom: 5px;\n}\n\n.label {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 0% 0% 10px 5px;\n  width: 100%;\n  font-weight: 500;\n  white-space: normal;\n}\n\n.country_pref_div {\n  margin: 0px 5%;\n}\n\n.country_dropdown {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0%;\n  padding: 15px;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  width: 100%;\n}\n\n.country_dropdown ion-icon {\n  color: var(--white);\n  background: var(--theme-newButton);\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.country_label_div {\n  display: flex;\n  align-items: center;\n}\n\n.flag_img::part(image) {\n  height: 30px;\n  width: 30px;\n}\n\n.flag_list_img::part(image) {\n  height: 25px;\n  width: 25px;\n}\n\n.country_name {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 0% 10px;\n  width: 100%;\n  font-weight: 700;\n}\n\n.country_list_name {\n  font-size: var(--xsmall-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 0% 10px;\n  width: 100%;\n  font-weight: 700;\n  white-space: normal;\n}\n\n.radio_div {\n  margin: 0px 15px;\n}\n\n.radio_btn_div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  background: var(--lightGrey);\n  border-bottom: 1px solid var(--card-border);\n}\n\n.radio_btn_div2 {\n  border: none;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.regional_card {\n  margin: 0%;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  background: var(--white);\n}\n\n.regional_card ion-iten {\n  --background: transparent;\n}\n\n.raginal_radio {\n  margin-inline-end: 0px !important;\n  --color-checked:var(--theme-color);\n}\n\n.go_btn_div {\n  margin-top: 50px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 80%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.check-box {\n  margin-inline-end: 0px;\n  --border-radius: 5px;\n  --border-width: 0px;\n  --border-color:var(--white);\n  --background:transparent;\n  --background-checked:transparent;\n  --border-color-checked: var(--white);\n  --checkmark-color: var(--theme-newButton);\n}\n\n.back_btn {\n  height: 50px;\n  width: 80%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtBQWhCSjs7QUFzQkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQW5CSjs7QUFvQkk7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFsQlIiLCJmaWxlIjoiYm9hcmRpbmc1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQ6OnBhcnQoYmFja2dyb3VuZCl7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xufVxuXG4vLyBpb24tY29udGVudDo6cGFydChzY3JvbGwpe1xuLy8gICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgICBcbi8vIH1cblxuLnNsaWRlcl9kaXZ7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXIgO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5jb250ZW50X2RpdntcbiAgICBtaW4taGVpZ2h0Ojg1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XG4gICAgcGFkZGluZzoyMHB4IDBweDtcbn1cblxuLmNvbnRlbnRfc3ViX2RpdntcbiAgICBwYWRkaW5nOjBweCA1JTtcbn1cblxuLnNsaWRlcl9wYWdle1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wYWdlX0NvdW50e1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOi42NTFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4ucGFnZV9Db3VudF9hY3RpdmUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG4gICAgLmxpbmVzMiB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXZpdmEtbGluZXMyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIFxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAuY2FyZF9kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICAgIGlvbi1yYWRpbyB7XG4gICAgICAvLyAtLWNvbG9yOnZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0td2hpdGUpO1xuICAgIH1cbiAgfVxuXG4uY29tcGxldGUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5saW5lc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYXZpdmEtbGluZXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYXZpdmEtY29tcGxldGUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG4uYXZpdmEtcGFnZS1jb3VudC1hY3RpdmUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTp2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLnRpdGxlLXRleHR7XG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWZvbnQpO1xuICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgIG1hcmdpbjoxMHB4IDUlO1xufVxuXG4udGl0bGV7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDQwcHggNSUgMjBweDtcbn1cblxuLnNlY3Rpb24tY2FyZHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmRfQm9yZGVye1xuICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpXG59XG5cbi5kaWV0X2ltYWdle1xuICAgIGhlaWdodDogNjRweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuXG4ubWFsZV9pbWFnZXtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvdHRvbTo1cHg7XG59XG5cbi5sYWJlbHtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luOiAwJSAwJSAxMHB4IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jb3VudHJ5X3ByZWZfZGl2e1xuICAgIG1hcmdpbjogMHB4IDUlO1xufVxuXG4uY291bnRyeV9kcm9wZG93bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCU7XG4gICAgcGFkZGluZzoxNXB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5jb3VudHJ5X2xhYmVsX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGFnX2ltZ3tcbiAgIFxuICAgICY6OnBhcnQoaW1hZ2Upe1xuICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG4uZmxhZ19saXN0X2ltZ3tcbiAgIFxuICAgICY6OnBhcnQoaW1hZ2Upe1xuICAgICAgICBoZWlnaHQ6MjVweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxufVxuXG5cbi5jb3VudHJ5X25hbWV7XG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbjogMCUgMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY291bnRyeV9saXN0X25hbWV7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luOiAwJSAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnJhZGlvX2RpdntcbiAgICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4ucmFkaW9fYnRuX2RpdntcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgd2lkdGg6IDEwMCU7XG4gICBwYWRkaW5nOjEwcHg7XG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyZXkpO1xuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbn1cblxuLnJhZGlvX2J0bl9kaXYye1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbn1cblxuLnJlZ2lvbmFsX2NhcmR7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgIGlvbi1pdGVue1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLnJhZ2luYWxfcmFkaW97XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3ItY2hlY2tlZDp2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5nb19idG5fZGl2e1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cblxuLmdvX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWJ1dHRvbi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIFxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgfVxufVxuXG5cblxuLmNoZWNrLWJveHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6dmFyKC0td2hpdGUpO1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDp0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIFxufVxuXG5cblxuLmJhY2tfYnRue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgICY6OnBhcnQobmF0aXZlKXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWJhY2spO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICB9XG59XG4iXX0= */";

/***/ }),

/***/ 77315:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding5/boarding5.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\">\n    <div class=\"slider_div\" *ngIf=\"!from\">\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines' : 'lines'\"></div>\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines2' : 'lines2'\">\n        <div></div>\n      </div>\n      <div class=\"slider_page\">\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page-count-active' : 'page_Count_active'\">5</p>\n      </div>\n    </div>\n    <div\n      class=\"content_div\"\n      [ngStyle]=\"from && {'border-radius':'0px','min-height':'100%'}\"\n    >\n      <div class=\"w_100 right\" *ngIf=\"from\" style=\"padding-right: 5%\">\n        <ion-icon\n          class=\"close_modal_icon\"\n          name=\"close-circle\"\n          (click)=\"modalClose()\"\n        ></ion-icon>\n      </div>\n      <p class=\"title-text\">\n        Finally, we'd like you to tell us about your food and diet preferences.\n      </p>\n      <p class=\"title\">Diet Preferences</p>\n      <div class=\"content_sub_div\">\n        <ion-radio-group\n          [value]=\"dietPreferences\"\n          [(ngModel)]=\"dietPreferences\"\n          (ionChange)=\"selectFoodPre($event)\"\n        >\n          <ion-grid class=\"pad_0\">\n            <ion-row>\n              <ion-col\n                size=\"6\"\n                style=\"margin: 8px 0px\"\n                [ngStyle]=\"(i % 2) != 1 ?{  'padding-right': '12px' }:{'padding-Left': '12px'}\"\n                *ngFor=\"let f of localData?.otherMaster.foodPref; let i = index\"\n              >\n                <div class=\"card_div\" (click)=\"dietPreferences=f?.value\">\n                  <ion-img\n                    [src]=\"'../../../assets/newImages/'+getImage(f?.code)\"\n                    class=\"diet_image\"\n                  ></ion-img>\n                  <ion-card\n                    class=\"section-card\"\n                    [ngClass]=\"dietPreferences === f?.value && 'card_Border'\"\n                  >\n                    <div class=\"h_100\">\n                      <ion-radio [value]=\"f?.value\" mode=\"ios\"></ion-radio>\n                    </div>\n                    <p class=\"label\">{{f?.value}}</p>\n                  </ion-card>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-radio-group>\n      </div>\n      <p class=\"title\">Country Preferences</p>\n      <div class=\"country_pref_div\">\n        <ion-card\n          class=\"country_dropdown\"\n          (click)=\"openCountryDrop=!openCountryDrop\"\n        >\n          <div class=\"country_label_div\">\n            <ion-img\n              class=\"flag_img\"\n              [src]=\"'assets/newImages/'+getFlag(country?._id)\"\n            ></ion-img>\n            <p class=\"country_name\">{{country?.name}}</p>\n          </div>\n          <ion-icon\n            [name]=\"openCountryDrop?'chevron-up-outline':'chevron-down-outline'\"\n          ></ion-icon>\n        </ion-card>\n        <div class=\"radio_div\" *ngIf=\"openCountryDrop\">\n          <ion-list style=\"padding: 0%\">\n            <div\n              class=\"radio_btn_div\"\n              *ngFor=\"let c of countryArray;let i = index\"\n              [ngClass]=\"i+1 === countryArray.length && 'radio_btn_div2'\"\n              (click)=\"selectCountry(c)\"\n            >\n              <div class=\"country_label_div\">\n                <ion-img\n                  class=\"flag_list_img\"\n                  [src]=\"'assets/newImages/'+getFlag(c?._id)\"\n                ></ion-img>\n                <p class=\"country_list_name\">{{c.name}}</p>\n              </div>\n            </div>\n          </ion-list>\n        </div>\n      </div>\n      <p class=\"title\" *ngIf=\"country?.name === 'India'\">\n        Major Regional Preference\n      </p>\n      <div class=\"country_pref_div\" *ngIf=\"country?.name === 'India'\">\n       <ion-radio-group mode=\"ios\" [(ngModel)]=\"regionalPref\">\n  <ion-grid class=\"pad_0\">\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        style=\"padding: 3px\"\n        *ngFor=\"let i of localData?.otherMaster?.community\"\n      >\n        <ion-card\n          class=\"regional_card\"\n          [ngClass]=\"regionalPref === i.code && 'card_Border'\"\n        >\n          <ion-item lines=\"none\">\n            <ion-label class=\"country_list_name\">{{ i.value }}</ion-label>\n            <ion-radio\n              slot=\"start\"\n              [value]=\"i.code\"\n              mode=\"ios\"\n              class=\"check-box\"\n            ></ion-radio>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-radio-group>\n      </div>\n\n      <div class=\"go_btn_div\" *ngIf=\"!from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button\n                class=\"back_btn\"\n                shape=\"round\"\n                fill=\"outline\"\n                (click)=\"goBack()\"\n                >Back</ion-button\n              >\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\"\n                >Good To Go</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div class=\"go_btn_div\" *ngIf=\"from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button\n                class=\"back_btn\"\n                shape=\"round\"\n                fill=\"outline\"\n                (click)=\"modalClose()\"\n                >Cancel</ion-button\n              >\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\"\n                >Save</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_boarding5_boarding5_module_ts.js.map