"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_boarding3_boarding3_module_ts"],{

/***/ 33219:
/*!*******************************************************************!*\
  !*** ./src/app/newBoarding/boarding3/boarding3-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding3PageRoutingModule": () => (/* binding */ Boarding3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _boarding3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding3.page */ 31732);




const routes = [
    {
        path: '',
        component: _boarding3_page__WEBPACK_IMPORTED_MODULE_0__.Boarding3Page
    }
];
let Boarding3PageRoutingModule = class Boarding3PageRoutingModule {
};
Boarding3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Boarding3PageRoutingModule);



/***/ }),

/***/ 55535:
/*!***********************************************************!*\
  !*** ./src/app/newBoarding/boarding3/boarding3.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding3PageModule": () => (/* binding */ Boarding3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _boarding3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding3-routing.module */ 33219);
/* harmony import */ var _boarding3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding3.page */ 31732);







let Boarding3PageModule = class Boarding3PageModule {
};
Boarding3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boarding3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Boarding3PageRoutingModule
        ],
        declarations: [_boarding3_page__WEBPACK_IMPORTED_MODULE_1__.Boarding3Page]
    })
], Boarding3PageModule);



/***/ }),

/***/ 31732:
/*!*********************************************************!*\
  !*** ./src/app/newBoarding/boarding3/boarding3.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding3Page": () => (/* binding */ Boarding3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boarding3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding3.page.html?ngResource */ 16258);
/* harmony import */ var _boarding3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding3.page.scss?ngResource */ 99060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);









let Boarding3Page = class Boarding3Page {
    constructor(navCtrl, storage, utilities, appService, router, activatedRoute) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.utilities = utilities;
        this.appService = appService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.from = "";
        this.isChild = false;
        this.selectedValue = {};
        this.newModal = "";
        this.activatedRoute.queryParams.subscribe(res => {
            this.from = res['from'];
        });
    }
    modalClose() {
        this.router.navigate(['new-profile']);
    }
    ngOnInit() {
        this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
        console.log("this.compConfig", this.compConfig);
        this.clientId = localStorage.getItem('clientId');
        this.storage.get("localData").then((val) => {
            this.localData = this.utilities.parseJSON(val);
            console.log("Local data ", this.localData);
            this.getProfile();
        });
    }
    getImage(type) {
        switch (type) {
            case "AC1":
                return this.isChild ? "child/child-3.jpeg" : "newImages/aviva-images/activity-new-1.png";
            case "AC2":
                return "newImages/aviva-images/activity-new-2.png";
            case "AC3":
                return this.isChild ? "child/child-4.jpeg" : "newImages/aviva-images/activity-new-3.png";
            case "AC4":
                return "newImages/aviva-images/activity-new-4.png";
            case "AC5":
                return this.isChild ? "child/child-3.jpeg" : "newImages/aviva-images/activity-new-5.png";
        }
    }
    goBack() {
        if (this.from) {
            this.router.navigate(['new-profile']);
        }
        else {
            this.storage.set("pendingPage", "/boarding2");
            this.navCtrl.navigateRoot(["/boarding2"]);
        }
    }
    getProfile() {
        this.appService.getProfile().then((res) => {
            console.log(res);
            if (res?.code === "0001") {
                this.utilities.showErrorToast("Please select Activity.");
                return false;
            }
            this.profileData = res;
            this.localData.otherMaster.bmi.bmi = this.profileData?.demographic?.bmi;
            if (!this.compConfig.isChild) {
                this.localData?.otherMaster?.activities.forEach((ele) => {
                    ele.val = ele.value.split("(")[0];
                    ele.sub_val = ele.value.split("(")[1].replace(")", "");
                    if (this.profileData?.lifeStyle?.activities?.code == ele.code) {
                        ele.isSelected = true;
                        this.newModal = ele.val;
                        localStorage.setItem("activities", JSON.stringify(ele));
                    }
                });
            }
            else {
                this.compConfig.activies.forEach((ele) => {
                    ele.val = ele.value.split("(")[0];
                    ele.sub_val = ele.value.split("(")[1].replace(")", "");
                    if (this.profileData?.lifeStyle?.activities?.code == ele.code) {
                        ele.isSelected = true;
                        this.newModal = ele.val;
                        localStorage.setItem("activities", JSON.stringify(ele));
                    }
                });
            }
        });
    }
    selectActivity(e) {
        console.log(e);
        if (this.clientId !== 'enkeltec') {
            this.localData?.otherMaster?.activities.forEach((ele) => {
                if (ele.val === e.detail.value) {
                    ele.isSelected = true;
                    this.selectedValue = ele;
                    localStorage.setItem("activities", JSON.stringify(this.selectedValue));
                }
                else {
                    ele.isSelected = false;
                }
            });
        }
        else {
            this.compConfig?.activies?.forEach((ele) => {
                if (ele.val === e.detail.value) {
                    ele.isSelected = true;
                    this.selectedValue = ele;
                    localStorage.setItem("activities", JSON.stringify(this.selectedValue));
                }
                else {
                    ele.isSelected = false;
                }
            });
        }
    }
    goNext() {
        let data;
        if (this.clientId !== 'enkeltec') {
            data = this.localData.otherMaster?.activities.find((s) => s.isSelected);
        }
        else {
            data = this.compConfig?.activies?.find((s) => s.isSelected);
        }
        if (!data) {
            this.utilities.presentToast("Please select your activity level.");
            return;
        }
        if (typeof this.localData.otherMaster !== undefined)
            this.storage.set("localData", JSON.stringify(this.localData));
        const reqBody = {
            activities: {
                code: this.selectedValue.code,
                data: this.selectedValue.data,
            },
            //diseases: this.profileData?.lifeStyle?.diseases,
            //communities: this.profileData?.lifeStyle?.communities,
            diseases: typeof this.profileData?.lifeStyle?.diseases === undefined ||
                this.profileData?.lifeStyle?.diseases === null
                ? []
                : this.profileData?.lifeStyle?.diseases,
            communities: typeof this.profileData?.lifeStyle?.communities === undefined ||
                this.profileData?.lifeStyle?.communities === null
                ? []
                : this.profileData?.lifeStyle?.communities,
            country: this.profileData?.lifeStyle?.country,
            // foodType: this.profileData?.lifeStyle?.foodType,
            //};
            firstConsult: localStorage.getItem("clientId") === "orthocure" ? (this.profileData?.lifeStyle?.firstConsult === undefined ? false : this.profileData?.lifeStyle?.firstConsult) : null,
            foodType: this.profileData?.lifeStyle?.foodType,
            dietPlanName: this.isChild ? localStorage.getItem("childDietPlan") : localStorage.getItem("goals"),
            consultQA: this.profileData?.lifeStyle?.consultQA === undefined ? [] : this.profileData?.lifeStyle?.consultQA,
            instructions: this.profileData?.lifeStyle?.instructions === undefined ? '' : this.profileData?.lifeStyle?.instructions
        };
        console.log(reqBody);
        this.appService.postLifeStyle(reqBody).then((success) => {
            if (this.from) {
                return this.modalClose();
            }
            this.storage.set("pendingPage", "/boarding4");
            this.navCtrl.navigateForward(["/boarding4"]);
        });
    }
};
Boarding3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
Boarding3Page.propDecorators = {
    from: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
Boarding3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-boarding3",
        template: _boarding3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boarding3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Boarding3Page);



/***/ }),

/***/ 99060:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding3/boarding3.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  height: 100%;\n  width: 100%;\n}\n\nion-content::part(background) {\n  --background: var(--theme-newHeader);\n}\n\n.slider_div {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.content_div {\n  min-height: 85%;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 0px;\n}\n\n.content_sub_div {\n  padding: 0px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--white);\n  font-family: var(--theme-newFont);\n}\n\n.lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 div {\n  width: 25%;\n  border: 1px solid var(--theme-milestone);\n}\n\n.card_div {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  margin: 5% 4%;\n}\n\n.card_div ion-radio {\n  --color-checked: var(--white);\n}\n\n.complete {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines2 div {\n  width: 25%;\n  border: 1px solid var(--theme-text-color);\n}\n\n.lines {\n  border: 1px solid var(--theme-milestone);\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines {\n  border: 1px solid var(--theme-text-color);\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-complete {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page-count-active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-newHeader);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-text-color);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 5%;\n}\n\n.title {\n  font-size: var(--large-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n}\n\n.fitness {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n  margin: 5px 0px;\n  width: 60%;\n}\n\n.section-card {\n  margin: 0%;\n  width: 100%;\n  padding: 15px;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  height: 105px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.card_Border {\n  border: 2px solid var(--theme-color);\n}\n\n.desc {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 300;\n  margin: 0%;\n  width: 60%;\n}\n\n.card_image {\n  width: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: 10px;\n  bottom: 10px;\n}\n\n.AC1 {\n  min-width: 30%;\n  position: absolute;\n  object-fit: cover;\n  right: 0;\n  max-width: 20%;\n}\n\n.AC2 {\n  min-width: 30%;\n  position: absolute;\n  object-fit: cover;\n  right: 0;\n  max-width: 20%;\n}\n\n.AC3 {\n  min-width: 30%;\n  position: absolute;\n  object-fit: cover;\n  right: 0;\n  max-width: 20%;\n}\n\n.AC4 {\n  min-width: 30%;\n  position: absolute;\n  object-fit: cover;\n  right: 0;\n  max-width: 20%;\n}\n\n.AC5 {\n  min-width: 30%;\n  position: absolute;\n  object-fit: cover;\n  right: 0;\n  max-width: 20%;\n}\n\n.go_btn_div {\n  margin-top: 30px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.back_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n\n.radio-button {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,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LHVCQUFBO0FBUko7O0FBV0E7RUFDSSxvQ0FBQTtBQVJKOztBQVdBO0VBQ0ksNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSSjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFVQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFQSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFOSjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQUpKOztBQUtJO0VBQ0ksNkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFFQSxpQ0FBQTtBQUpSOztBQVNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFOSjs7QUFPSTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUxSOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU5KIiwiZmlsZSI6ImJvYXJkaW5nMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50OjpwYXJ0KGJhY2tncm91bmQpe1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbn1cblxuLy8gaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKXtcbi8vICAgICBvdmVyZmxvdy15OiBoaWRkZW47ICAgXG4vLyB9XG5cbi5zbGlkZXJfZGl2e1xuICAgIGhlaWdodDogMTUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4uY29udGVudF9kaXZ7XG4gICAgbWluLWhlaWdodDo4NSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6MjBweCAwcHg7XG59XG5cbi5jb250ZW50X3N1Yl9kaXZ7XG4gICAgcGFkZGluZzowcHggNSU7XG59XG5cbi5zbGlkZXJfcGFnZXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZV9Db3VudHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtbWlsZXN0b25lKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTp2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4ucGFnZV9Db3VudF9hY3RpdmUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOnZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIH1cbiAgLmxpbmVzMiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgIGRpdiB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtbWlsZXN0b25lKTtcbiAgICB9XG4gIH1cbiAgLmNhcmRfZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogNSUgNCU7XG4gICAgaW9uLXJhZGlvIHtcbiAgICAgIC8vIC0tY29sb3I6dmFyKC0tdGhlbWUtY29sb3IpO1xuICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS13aGl0ZSk7XG4gICAgfVxuICB9XG4gIFxuXG4uY29tcGxldGV7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLmF2aXZhLWxpbmVzMiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICB9XG59XG5cbi5saW5lc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYXZpdmEtbGluZXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hdml2YS1jb21wbGV0ZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLmF2aXZhLXBhZ2UtY291bnQtYWN0aXZlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6dmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5hdml2YS1wYWdlX0NvdW50IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4udGl0bGUtdGV4dHtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgbWFyZ2luOjEwcHggNSU7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IHZhcigtLWxhcmdlLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5maXRuZXNze1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5zZWN0aW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmRfQm9yZGVye1xuICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpXG59XG5cbi5kZXNje1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDAlO1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5jYXJkX2ltYWdle1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbi5BQzF7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMjAlO1xufVxuLkFDMntcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG59XG4uQUMze1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbn1cbi5BQzR7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMjAlO1xufVxuLkFDNXtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG59XG5cbi5nb19idG5fZGl2e1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5nb19idG57XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgJjo6cGFydChuYXRpdmUpe1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWJ1dHRvbi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIFxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgfVxufVxuXG5cbi5iYWNrX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC1iYWNrKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgfVxufVxuXG4ucmFkaW8tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTVweDtcbn0iXX0= */";

/***/ }),

/***/ 16258:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding3/boarding3.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\">\n    <div class=\"slider_div\" *ngIf=\"!from\">\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines' : 'lines'\"></div>\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines2' : 'lines2'\">\n        <div></div>\n      </div>\n      <div class=\"slider_page\">\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\">✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page-count-active' : 'page_Count_active'\">3</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page_Count' : 'page_Count'\">4</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page_Count' : 'page_Count'\">5</p>\n      </div>\n    </div>\n    <div class=\"content_div\" [ngStyle]=\"from && {'border-radius':'0px','min-height':'100%'}\">\n      <div class=\"w_100 right\" *ngIf=\"from\" style=\"padding-right: 5%\">\n        <ion-icon class=\"close_modal_icon\" name=\"close-circle\" (click)=\"modalClose()\"></ion-icon>\n      </div>\n      <p class=\"title-text\">\n        How often do you exercise?\n      </p>\n      <ion-radio-group value=\"deasesValue\" [(ngModel)]=\"newModal\" (ionChange)=\"selectActivity($event)\">\n        <span *ngIf=\"compConfig?.activies===undefined\">\n          <div class=\"card_div\" (click)=\"newModal=activity?.val\"\n            *ngFor=\"let activity of localData?.otherMaster?.activities;let ind=index\">\n            <ion-radio class=\"radio-button\" [value]=\"activity?.val\" mode=\"ios\"></ion-radio>\n            <ion-card class=\"section-card\" *ngIf=\"!isChild || (ind!==1 && ind!==3)\"\n              [ngClass]=\"newModal === activity?.val && 'card_Border'\">\n              <p class=\"fitness\">{{activity?.val}}</p>\n              <p class=\"desc\">{{activity?.sub_val}}</p>\n              <img [ngClass]=\"activity?.code\" src=\"../../../assets/{{getImage(activity?.code)}}\">\n            </ion-card>\n          </div>\n        </span>\n        <span *ngIf=\"compConfig?.activies!==undefined\">\n          <div class=\"card_div\" (click)=\"newModal=activity?.val\" *ngFor=\"let activity of compConfig?.activies\">\n            <ion-radio class=\"radio-button\" [value]=\"activity?.val\" mode=\"ios\"></ion-radio>\n            <ion-card class=\"section-card\" [ngClass]=\"newModal === activity?.val && 'card_Border'\">\n              <p class=\"fitness\">{{activity?.val}}</p>\n              <p class=\"desc\">{{activity?.sub_val}}</p>\n              <img [ngClass]=\"activity?.code\" src=\"{{activity.image}}\">\n            </ion-card>\n          </div>\n        </span>\n      </ion-radio-group>\n      <div class=\"go_btn_div\" *ngIf=\"!from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"goBack()\">Back</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Next</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"go_btn_div\" *ngIf=\"from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"modalClose()\">Cancel</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Save</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_boarding3_boarding3_module_ts.js.map