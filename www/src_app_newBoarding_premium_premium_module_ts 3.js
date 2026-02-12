"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_premium_premium_module_ts"],{

/***/ 31971:
/*!***************************************************************!*\
  !*** ./src/app/newBoarding/premium/premium-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumPageRoutingModule": () => (/* binding */ PremiumPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _premium_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./premium.page */ 7055);




const routes = [
    {
        path: '',
        component: _premium_page__WEBPACK_IMPORTED_MODULE_0__.PremiumPage
    }
];
let PremiumPageRoutingModule = class PremiumPageRoutingModule {
};
PremiumPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PremiumPageRoutingModule);



/***/ }),

/***/ 61718:
/*!*******************************************************!*\
  !*** ./src/app/newBoarding/premium/premium.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumPageModule": () => (/* binding */ PremiumPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _premium_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./premium-routing.module */ 31971);
/* harmony import */ var _premium_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium.page */ 7055);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let PremiumPageModule = class PremiumPageModule {
};
PremiumPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _premium_routing_module__WEBPACK_IMPORTED_MODULE_0__.PremiumPageRoutingModule
        ],
        declarations: [_premium_page__WEBPACK_IMPORTED_MODULE_1__.PremiumPage,],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], PremiumPageModule);



/***/ }),

/***/ 7055:
/*!*****************************************************!*\
  !*** ./src/app/newBoarding/premium/premium.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumPage": () => (/* binding */ PremiumPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _premium_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./premium.page.html?ngResource */ 34669);
/* harmony import */ var _premium_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium.page.scss?ngResource */ 4092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PremiumPage = class PremiumPage {
    constructor() { }
    ngOnInit() {
    }
};
PremiumPage.ctorParameters = () => [];
PremiumPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-premium',
        template: _premium_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_premium_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PremiumPage);



/***/ }),

/***/ 4092:
/*!******************************************************************!*\
  !*** ./src/app/newBoarding/premium/premium.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVtaXVtLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 34669:
/*!******************************************************************!*\
  !*** ./src/app/newBoarding/premium/premium.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n<app-premium-component></app-premium-component>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_premium_premium_module_ts.js.map