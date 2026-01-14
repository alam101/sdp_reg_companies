"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward_how-it-works_how-it-works_module_ts"],{

/***/ 63798:
/*!********************************************************************!*\
  !*** ./src/app/reward/how-it-works/how-it-works-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorksPageRoutingModule": () => (/* binding */ HowItWorksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _how_it_works_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-it-works.page */ 2994);




const routes = [
    {
        path: '',
        component: _how_it_works_page__WEBPACK_IMPORTED_MODULE_0__.HowItWorksPage
    }
];
let HowItWorksPageRoutingModule = class HowItWorksPageRoutingModule {
};
HowItWorksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HowItWorksPageRoutingModule);



/***/ }),

/***/ 35890:
/*!************************************************************!*\
  !*** ./src/app/reward/how-it-works/how-it-works.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorksPageModule": () => (/* binding */ HowItWorksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _how_it_works_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-it-works-routing.module */ 63798);
/* harmony import */ var _how_it_works_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-it-works.page */ 2994);







let HowItWorksPageModule = class HowItWorksPageModule {
};
HowItWorksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _how_it_works_routing_module__WEBPACK_IMPORTED_MODULE_0__.HowItWorksPageRoutingModule
        ],
        declarations: [_how_it_works_page__WEBPACK_IMPORTED_MODULE_1__.HowItWorksPage]
    })
], HowItWorksPageModule);



/***/ }),

/***/ 2994:
/*!**********************************************************!*\
  !*** ./src/app/reward/how-it-works/how-it-works.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorksPage": () => (/* binding */ HowItWorksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _how_it_works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-it-works.page.html?ngResource */ 23775);
/* harmony import */ var _how_it_works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-it-works.page.scss?ngResource */ 85947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HowItWorksPage = class HowItWorksPage {
    constructor() { }
    ngOnInit() {
    }
};
HowItWorksPage.ctorParameters = () => [];
HowItWorksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-how-it-works',
        template: _how_it_works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_how_it_works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HowItWorksPage);



/***/ }),

/***/ 85947:
/*!***********************************************************************!*\
  !*** ./src/app/reward/how-it-works/how-it-works.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ul li {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdy1pdC13b3Jrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtBQUFSIiwiZmlsZSI6Imhvdy1pdC13b3Jrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcbiAgICBsaXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 23775:
/*!***********************************************************************!*\
  !*** ./src/app/reward/how-it-works/how-it-works.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <div style=\"height:100%; background: linear-gradient(to left, #301CAE 35%, #9A8DEC 100%);\n  text-align: left;\n align-items: left;\n display: flex;\n flex-direction: column;\">\n \n <div style=\"width: 100%;padding:1rem;font-size:1rem;color:#fff;font-weight:600;\">\n  How it works?  <img src=\"./assets/reward/doller.png\" style=\"    position: relative;top: 5px;\">\n</div>\n <div style=\"width: 100%; position:relative;\">\n  <img src=\"./assets/icon/award.png\" style=\"position: absolute;\n    right: 3px;\n    top: -23px;\">\n </div>\n<div style=\"margin: 1rem auto;border-radius:5px;width: 90%; background:#FFC224; color:#000; font-size:1rem;\">\n   <ul>\n    <li>\n      Log each item to get 1 point \n    </li>\n    <li>\nLog daily diet max 10 points\n</li>\n<li>\nLog complete daily diet to get 4 points extra\n</li>\n<li>\nIf reached Level 10 you stay there till end of season.\n</li>\n<li>\nView recipe once in a day to get 3 points \n</li>\n<li>\nSearch food once in a day to get 3 points \n</li>\n<li>\nNot doing any activity will reduce 10 points in a day\n    </li>\n   </ul>\n</div>\n  </div>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reward_how-it-works_how-it-works_module_ts.js.map