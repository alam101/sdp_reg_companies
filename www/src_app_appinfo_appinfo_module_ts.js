"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_appinfo_appinfo_module_ts"],{

/***/ 17660:
/*!***************************************************!*\
  !*** ./src/app/appinfo/appinfo-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppinfoPageRoutingModule": () => (/* binding */ AppinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _appinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appinfo.page */ 92389);




const routes = [
    {
        path: '',
        component: _appinfo_page__WEBPACK_IMPORTED_MODULE_0__.AppinfoPage
    }
];
let AppinfoPageRoutingModule = class AppinfoPageRoutingModule {
};
AppinfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppinfoPageRoutingModule);



/***/ }),

/***/ 19686:
/*!*******************************************!*\
  !*** ./src/app/appinfo/appinfo.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppinfoPageModule": () => (/* binding */ AppinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _appinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appinfo-routing.module */ 17660);
/* harmony import */ var _appinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appinfo.page */ 92389);







let AppinfoPageModule = class AppinfoPageModule {
};
AppinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _appinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppinfoPageRoutingModule
        ],
        declarations: [_appinfo_page__WEBPACK_IMPORTED_MODULE_1__.AppinfoPage]
    })
], AppinfoPageModule);



/***/ }),

/***/ 92389:
/*!*****************************************!*\
  !*** ./src/app/appinfo/appinfo.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppinfoPage": () => (/* binding */ AppinfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _appinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appinfo.page.html?ngResource */ 96794);
/* harmony import */ var _appinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appinfo.page.scss?ngResource */ 15836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AppinfoPage = class AppinfoPage {
    constructor() { }
    ngOnInit() {
    }
};
AppinfoPage.ctorParameters = () => [];
AppinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-appinfo',
        template: _appinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppinfoPage);



/***/ }),

/***/ 15836:
/*!******************************************************!*\
  !*** ./src/app/appinfo/appinfo.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBpbmZvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 96794:
/*!******************************************************!*\
  !*** ./src/app/appinfo/appinfo.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/new-diet\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: 500; color:#fff; font-size:2rem;\">Appinfo</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-card style=\"font-size: 1rem;\">\n  <ion-card-content>\n   <ion-row><ion-col style=\"color:#000; font-size:1rem;\"><b> Recommended Calories Calculations:</b> </ion-col></ion-row>\n   <ion-row><ion-col style=\"color:#000; font-size:1rem;\"><b>Step 1 :</b> </ion-col></ion-row>\n   <ion-row><ion-col>BMR calculation:</ion-col></ion-row>\n   <ion-row><ion-col>\n    <p>\n      The Harris–Benedict equations revised by Mifflin and St Jeor in 1990:[4]<br>\nMen <br>\nBMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years) +5 <br>\nWomen<br>\nBMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years) -161\n    </p>\n   </ion-col></ion-row>\n   <ion-row><ion-col style=\"color:#000; font-size:1rem;\"><b>Step 2 :</b></ion-col></ion-row>\n   <ion-row><ion-col>\n    <p>\n      Calculate calories need as per Activity level <br>\n      calories = bmr * Activity Multiplier <br>\n      Sedentary (No Exercise), “Multiplier” : 1.2, <br>\n      Lightly Active (Walking, Yoga, etc), ” Multiplier ” : 1.375, <br>\n      Moderately Active (Train around 3 times a week), “Multiplier” : 1.55, <br>\n      Super Active (Train more than 3 times a week) “Multiplier” : 1.7,\n    </p>\n   </ion-col></ion-row>\n\n   <ion-row><ion-col style=\"color:#000; font-size:1rem;\"><b>Step 3 :</b></ion-col></ion-row>\n   <ion-row><ion-col>\n    <p>\n      We reduce by 500 calories in case of weight loss\n<br>\n   <!-- <b style=\"color:#000; font-size:1rem;\"> Calories Burnt Calculations/ Steps taken :</b> <br> -->\n\n   Our source of this information is Google Fit in apple and apple Health Kit in ios\n    </p>\n   </ion-col></ion-row>\n   <ion-row><ion-col style=\"color:#000; font-size:1rem;\"><b>Nutrition value of Foods:</b></ion-col></ion-row>\n   <ion-row><ion-col>\n   <ul>\n    <li>\n      Our source of information is based on National Institute of Nutrition from follwing links https://www.nin.res.in/downloads/DietaryGuidelinesforNINwebsite.pdf\n      https://www.nin.res.in/bookrecommendations.html\n    </li>\n    <li>\n      Our dietitians have used this as the foundation to compute Macros for the food items\n    </li>\n    <li>\n      for the restaurants and packaged foods we have taken the information from their websited and packaging\n    </li>\n   </ul>\n   </ion-col></ion-row>\n   <br><br>\n  </ion-card-content>\n</ion-card>\n<br><br><br>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_appinfo_appinfo_module_ts.js.map