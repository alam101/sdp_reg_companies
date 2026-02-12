"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_boarding_boarding_module_ts"],{

/***/ 37104:
/*!*****************************************************************!*\
  !*** ./src/app/newBoarding/boarding/boarding-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardingPageRoutingModule": () => (/* binding */ BoardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _boarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding.page */ 21946);




const routes = [
    {
        path: '',
        component: _boarding_page__WEBPACK_IMPORTED_MODULE_0__.BoardingPage
    }
];
let BoardingPageRoutingModule = class BoardingPageRoutingModule {
};
BoardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BoardingPageRoutingModule);



/***/ }),

/***/ 54518:
/*!*********************************************************!*\
  !*** ./src/app/newBoarding/boarding/boarding.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardingPageModule": () => (/* binding */ BoardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding-routing.module */ 37104);






let BoardingPageModule = class BoardingPageModule {
};
BoardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoardingPageRoutingModule
        ],
        declarations: []
    })
], BoardingPageModule);



/***/ }),

/***/ 21946:
/*!*******************************************************!*\
  !*** ./src/app/newBoarding/boarding/boarding.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardingPage": () => (/* binding */ BoardingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding.page.html?ngResource */ 50028);
/* harmony import */ var _boarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding.page.scss?ngResource */ 76107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var _assets_comp_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/comp_config.json */ 15638);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);













let BoardingPage = class BoardingPage {
    constructor(iab, navCtrl, router, utilities, appservice, storage, activatedRoute) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.router = router;
        this.utilities = utilities;
        this.appservice = appservice;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.from = "";
        this.clientId = "";
        this.newModal = 'undefined';
        this.activatedRoute.queryParams.subscribe(res => {
            this.from = res['from'];
        });
        console.log("localStorage.getItem('clientId')", localStorage.getItem('clientId'));
        this.clientId = localStorage.getItem('clientId');
        this.newModal = localStorage.getItem("goals");
    }
    ngOnInit() {
        console.log("clientConfig:-", _assets_comp_config_json__WEBPACK_IMPORTED_MODULE_4__);
        const dt = _assets_comp_config_json__WEBPACK_IMPORTED_MODULE_4__.filter((item, index) => {
            console.log("clientConfig:-", _assets_comp_config_json__WEBPACK_IMPORTED_MODULE_4__);
            return Object.keys(item)[0].toLowerCase() === localStorage.getItem("clientId").toLowerCase();
        });
        this.data = dt[0][`${localStorage.getItem("clientId").toLowerCase()}`]["goals"];
        console.log(" this.data", this.data);
    }
    goBack() {
        if (this.from) {
            this.router.navigate(['new-profile']);
        }
        else {
            this.storage.remove("pendingPage");
            this.navCtrl.navigateRoot(["/boarding1"]);
        }
    }
    ngAfterViewInit() {
    }
    goNext() {
        let reqBody = {};
        let reqBodyDiet = {};
        if (this.newModal === "undefined") {
            this.utilities.showErrorToast("Please select goal.");
            return false;
        }
        reqBody.dietPlanType = this.newModal;
        reqBodyDiet.dietPlanName = this.newModal;
        reqBody.category = this.newModal;
        reqBody.subCategory = this.newModal;
        localStorage.setItem("goals", reqBody.dietPlanType);
        console.log(reqBody);
        this.appservice.updateProfile(reqBody).then((success) => {
            this.appservice.dietPlan(reqBodyDiet).then((res) => {
                if (this.from) {
                    this.router.navigate(["/new-profile"]);
                }
                else {
                    this.storage.set("pendingPage", "/boarding2");
                    this.router.navigate(["/boarding2"]);
                }
            });
        });
    }
    modalClose() {
        this.router.navigate(["/new-profile"]);
    }
};
BoardingPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_6__.UTILITIES },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
BoardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-boarding",
        template: _boarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule],
        styles: [_boarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoardingPage);



/***/ }),

/***/ 76107:
/*!********************************************************************!*\
  !*** ./src/app/newBoarding/boarding/boarding.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  height: 100%;\n  width: 100%;\n}\n\nion-content::part(background) {\n  --background: var(--theme-newHeader);\n}\n\n.slider_div {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.content_div {\n  min-height: 85%;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 0px;\n}\n\n.content_sub_div {\n  padding: 0px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.aviva_page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--white);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-newHeader);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--white);\n  font-family: var(--theme-newFont);\n}\n\n.aviva_page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-newHeader);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-text-color);\n  font-family: var(--theme-newFont);\n}\n\n.complete {\n  border: 2px solid var(--black) !important;\n}\n\n.lines {\n  border: 1px solid var(--theme-milestone);\n  width: 90%;\n  position: absolute;\n}\n\n.aviva-lines {\n  border: 1px solid var(--theme-text-color);\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 div {\n  width: 50%;\n  border: 1px solid var(--theme-milestone);\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 5%;\n}\n\n.title {\n  font-size: var(--large-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n}\n\n.card_div {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  margin: 30px 5% 0px;\n}\n\n.card_div ion-radio {\n  --color-checked:var(--white);\n}\n\n.fitness {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 700;\n  margin: 5px 0px;\n}\n\n.section-card {\n  margin: 0%;\n  width: 100%;\n  padding: 15px;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  height: 105px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.card_Border {\n  border: 2px solid var(--theme-color);\n}\n\n.desc {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  font-weight: 300;\n  margin: 0%;\n}\n\n.card_image {\n  width: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: 10px;\n  bottom: 10px;\n}\n\n.AC1 {\n  width: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: 10px;\n  bottom: 10px;\n}\n\n.AC2 {\n  width: 100px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: 10px;\n  bottom: 10px;\n}\n\n.AC3 {\n  width: 110px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: 10px;\n  bottom: 10px;\n}\n\n.AC4 {\n  width: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: 0px;\n  bottom: 10px;\n}\n\n.AC5 {\n  width: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  right: -8px;\n  bottom: 10px;\n}\n\n.go_btn_div {\n  margin-top: 30px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.back_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n\n.radio-button {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,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WUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2Qko7O0FBeUJBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUF0Qko7O0FBd0JBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFyQko7O0FBd0JBO0VBQ0ksZ0JBQUE7QUFyQko7O0FBd0JBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFyQko7O0FBc0JJO0VBQ0ksNkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFFQSxpQ0FBQTtBQXJCUjs7QUEwQkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQXZCSjs7QUF3Qkk7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUF0QlI7O0FBMEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXZCSiIsImZpbGUiOiJib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50OjpwYXJ0KGJhY2tncm91bmQpe1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbn1cblxuLy8gaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKXtcbi8vICAgICBvdmVyZmxvdy15OiBoaWRkZW47ICAgXG4vLyB9XG5cbi5zbGlkZXJfZGl2e1xuICAgIGhlaWdodDogMTUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4uY29udGVudF9kaXZ7XG4gICAgbWluLWhlaWdodDo4NSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6MjBweCAwcHg7XG59XG5cbi5jb250ZW50X3N1Yl9kaXZ7XG4gICAgcGFkZGluZzowcHggNSU7XG59XG5cbi5zbGlkZXJfcGFnZXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZV9Db3VudHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtbWlsZXN0b25lKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTp2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4uYXZpdmFfcGFnZV9Db3VudHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBmb250LXNpemU6dmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5wYWdlX0NvdW50X2FjdGl2ZXtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOnZhcigtLXhzbWFsbC1mb250KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLmF2aXZhX3BhZ2VfQ291bnRfYWN0aXZle1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cblxuLmNvbXBsZXRle1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xufVxuXG4ubGluZXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtbWlsZXN0b25lKTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmF2aXZhLWxpbmVze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGluZXMye1xuICAgXG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBkaXZ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLW1pbGVzdG9uZSk7XG4gICAgfVxufVxuXG4udGl0bGUtdGV4dHtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgbWFyZ2luOjEwcHggNSU7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IHZhcigtLWxhcmdlLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXJkX2RpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMzBweCA1JSAwcHg7XG5cblxuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgLy8gLS1jb2xvcjp2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDp2YXIoLS13aGl0ZSk7XG4gICAgICAgfVxufVxuXG5cbi5maXRuZXNze1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIC8vIHdpZHRoOiA2MCU7XG59XG5cbi5zZWN0aW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDExLjV2aDtcbiAgICAvLyBtYXJnaW46IDAlO1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAvLyBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRfQm9yZGVye1xuICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpXG59XG5cbi5kZXNje1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDAlO1xuICAgIC8vIHdpZHRoOiA2MCU7XG59XG5cbi5jYXJkX2ltYWdle1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG59XG5cblxuXG4uQUMxe1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG59XG4uQUMye1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG59XG4uQUMze1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG59XG4uQUM0e1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbn1cbi5BQzV7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHJpZ2h0OiAtOHB4O1xuICAgIGJvdHRvbTogMTBweDtcbn1cblxuLmdvX2J0bl9kaXZ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmdvX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHJvZmlsZS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6dmFyKC0tYnV0dG9uLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICAgICBcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIH1cbn1cblxuXG4uYmFja19idG57XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgJjo6cGFydChuYXRpdmUpe1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJ0blNoYWRkb3cpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtYmFjayk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgIH1cbn1cblxuLnJhZGlvLWJ1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 50028:
/*!********************************************************************!*\
  !*** ./src/app/newBoarding/boarding/boarding.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\">\n    <div class=\"slider_div\" *ngIf=\"!from\"><!-- clientId -->\n      <div *ngIf=\"clientId == 'aviva'\" class=\"aviva-lines\"></div>\n      <div *ngIf=\"clientId == 'aviva'\" class=\"slider_page\">\n        <p class=\"aviva_page_Count_active\">1</p>\n        <p class=\"aviva_page_Count\">2</p>\n        <p class=\"aviva_page_Count\">3</p>\n        <p class=\"aviva_page_Count\">4</p>\n        <p class=\"aviva_page_Count\">5</p>\n      </div>\n      <div *ngIf=\"clientId != 'aviva'\" class=\"lines\"></div>\n      <div *ngIf=\"clientId != 'aviva'\" class=\"slider_page\">\n        <p class=\"page_Count_active\">1</p>\n        <p class=\"page_Count\">2</p>\n        <p class=\"page_Count\">3</p>\n        <p class=\"page_Count\">4</p>\n        <p class=\"page_Count\">5</p>\n      </div>\n    </div>\n    <div\n      class=\"content_div\"\n      [ngStyle]=\"from && {'border-radius':'0px','min-height':'100%'}\"\n    >\n      <div class=\"w_100 right\" *ngIf=\"from\" style=\"padding-right: 5%\">\n        <ion-icon\n          class=\"close_modal_icon\"\n          name=\"close-circle\"\n          (click)=\"modalClose()\"\n        ></ion-icon>\n      </div>\n      <p class=\"title-text\">\n        Please select your primary Health Goal/concern from the following \n        <!-- <b>Your Goal</b> -->\n      </p>\n      <ion-radio-group\n        value=\"deasesValue\"\n        [(ngModel)]=\"newModal\"\n      >\n        <div\n          class=\"card_div\"\n          (click)=\"newModal=dt?.value\"\n          *ngFor=\"let dt of data[0]?.options;\"\n        >\n          <ion-radio\n            class=\"radio-button\"\n            [value]=\"dt?.value\"\n            mode=\"ios\"\n          ></ion-radio>\n          <div\n            class=\"section-card\"\n            [ngClass]=\"newModal === dt?.value && 'card_Border' \"\n          >\n            <div>\n              <p class=\"fitness\">{{dt?.name}}</p>\n              <p class=\"desc\">{{dt?.label}}</p>\n            </div>\n            \n            <img style=\"min-width: 146px; position: absolute; right: -25px; bottom: -10px; max-width: 25%;\" [src]=\"dt?.imgUrl\">\n          </div>\n        </div>\n        <div\n          class=\"card_div\"\n          (click)=\"newModal=dt1?.value\"\n          *ngFor=\"let dt1 of data[1]?.options;\"\n        >\n          <ion-radio\n            class=\"radio-button\"\n            [value]=\"dt1?.value\"\n            mode=\"ios\"\n          ></ion-radio>\n          <div\n            class=\"section-card\"\n            [ngClass]=\"newModal === dt1?.value && 'card_Border' \"\n          >\n            <div>\n              <p class=\"fitness\">{{dt1?.name}}</p>\n              <p class=\"desc\">{{dt1?.label}}</p>\n            </div>\n            <img style=\"min-width: 146px; position: absolute; right: -25px; bottom: -10px; max-width: 25%;\"[src]=\"dt1.imgUrl\"\n          >\n          </div>\n        </div>\n        <div\n          class=\"card_div\"\n          (click)=\"newModal=dt2?.value\"\n          *ngFor=\"let dt2 of data[2]?.options;\"\n        >\n          <ion-radio\n            class=\"radio-button\"\n            [value]=\"dt2?.value\"\n            mode=\"ios\"\n          ></ion-radio>\n          <div\n            class=\"section-card\"\n            [ngClass]=\"newModal === dt2?.value && 'card_Border' \"\n          >\n            <div>\n              <p class=\"fitness\">{{dt2?.name}}</p>\n              <p class=\"desc\">{{dt2?.label}}</p>\n            </div>\n            <img style=\"min-width: 146px; position: absolute; right: -25px; bottom: -10px; max-width: 25%;\" [src]=\"dt2.imgUrl\">\n          </div>\n        </div>\n     </ion-radio-group>\n\n      <div class=\"go_btn_div\" *ngIf=\"!from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button\n                class=\"back_btn\"\n                shape=\"round\"\n                fill=\"outline\"\n                (click)=\"goBack()\"\n                >Back</ion-button\n              >\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\"\n                >Next</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div class=\"go_btn_div\" *ngIf=\"from\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button\n                class=\"back_btn\"\n                shape=\"round\"\n                fill=\"outline\"\n                (click)=\"modalClose()\"\n                >Cancel</ion-button\n              >\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\"\n                >Save</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_boarding_boarding_module_ts.js.map