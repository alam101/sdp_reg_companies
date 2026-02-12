"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward_upgrad-level1_upgrad-level1_module_ts"],{

/***/ 32624:
/*!**********************************************************************!*\
  !*** ./src/app/reward/upgrad-level1/upgrad-level1-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradLevel1PageRoutingModule": () => (/* binding */ UpgradLevel1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _upgrad_level1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrad-level1.page */ 95993);




const routes = [
    {
        path: '',
        component: _upgrad_level1_page__WEBPACK_IMPORTED_MODULE_0__.UpgradLevel1Page
    }
];
let UpgradLevel1PageRoutingModule = class UpgradLevel1PageRoutingModule {
};
UpgradLevel1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpgradLevel1PageRoutingModule);



/***/ }),

/***/ 47664:
/*!**************************************************************!*\
  !*** ./src/app/reward/upgrad-level1/upgrad-level1.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradLevel1PageModule": () => (/* binding */ UpgradLevel1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _upgrad_level1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrad-level1-routing.module */ 32624);
/* harmony import */ var _upgrad_level1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrad-level1.page */ 95993);







let UpgradLevel1PageModule = class UpgradLevel1PageModule {
};
UpgradLevel1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upgrad_level1_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpgradLevel1PageRoutingModule
        ],
        declarations: [_upgrad_level1_page__WEBPACK_IMPORTED_MODULE_1__.UpgradLevel1Page]
    })
], UpgradLevel1PageModule);



/***/ }),

/***/ 95993:
/*!************************************************************!*\
  !*** ./src/app/reward/upgrad-level1/upgrad-level1.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradLevel1Page": () => (/* binding */ UpgradLevel1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _upgrad_level1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrad-level1.page.html?ngResource */ 22029);
/* harmony import */ var _upgrad_level1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrad-level1.page.scss?ngResource */ 17327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let UpgradLevel1Page = class UpgradLevel1Page {
    constructor() { }
    ngOnInit() {
    }
};
UpgradLevel1Page.ctorParameters = () => [];
UpgradLevel1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-upgrad-level1',
        template: _upgrad_level1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upgrad_level1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpgradLevel1Page);



/***/ }),

/***/ 17327:
/*!*************************************************************************!*\
  !*** ./src/app/reward/upgrad-level1/upgrad-level1.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWQtbGV2ZWwxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 22029:
/*!*************************************************************************!*\
  !*** ./src/app/reward/upgrad-level1/upgrad-level1.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n  <div style=\"height:100%; background: linear-gradient(to top, #9A8DEC 35%, #ffffff 100%);\n     text-align: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\">\n    <img src=\"./assets/icon/hurrah.png\" style=\"    width: 88%;\n    margin-bottom: 15%;\">\n    <div>\n      <div >\n      <div style=\"background: #D49000;color:#fff;width:50vw;height:50vw; border-radius:50%;padding:2.5rem;margin:1rem;\n         border:1rem solid #FFC843;\">\n        <!-- <img src=\"./assets/icon/award.png\"> -->\n        <h2 style=\"margin: .3rem; color:#fff;font-size:3rem;display: flow;font-weight:600\">10</h2>\n      </div>\n    </div>\n    </div>\n    <div>\n      <p style=\"font-size: 2rem; color:#fff;margin-top:0\">\n        Upgraded to <br>Final Level 10\n      </p>\n    </div>\n    <div style=\"width: 90%;position:relative;display: flex;align-items: center;margin:1rem;background: #FFC224; color:#fff;padding:.5rem;border-radius:5px;height:90px;\">\n      <div style=\"float: left; width:95%\">\n        <h2 style=\"color:#000;margin: 0; font-size:1rem;font-weight:600;\"> GET YOUR REWARDS NOW! </h2>\n        <p style=\"color:#414042;margin-top:.5rem;font-size:.75rem;\">\n          Use your points to get the most useful rewards. \n        </p>\n      </div>\n     \n      <!-- <img src=\"./assets/icon/award.png\" style=\"    position: absolute;\n      right: -4%;\n      bottom: -38%;\"> -->\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reward_upgrad-level1_upgrad-level1_module_ts.js.map