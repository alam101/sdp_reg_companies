"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward_upgrad-level_upgrad-level_module_ts"],{

/***/ 78161:
/*!********************************************************************!*\
  !*** ./src/app/reward/upgrad-level/upgrad-level-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradLevelPageRoutingModule": () => (/* binding */ UpgradLevelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _upgrad_level_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrad-level.page */ 54288);




const routes = [
    {
        path: '',
        component: _upgrad_level_page__WEBPACK_IMPORTED_MODULE_0__.UpgradLevelPage
    }
];
let UpgradLevelPageRoutingModule = class UpgradLevelPageRoutingModule {
};
UpgradLevelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpgradLevelPageRoutingModule);



/***/ }),

/***/ 67692:
/*!************************************************************!*\
  !*** ./src/app/reward/upgrad-level/upgrad-level.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradLevelPageModule": () => (/* binding */ UpgradLevelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _upgrad_level_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrad-level-routing.module */ 78161);
/* harmony import */ var _upgrad_level_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrad-level.page */ 54288);







let UpgradLevelPageModule = class UpgradLevelPageModule {
};
UpgradLevelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upgrad_level_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpgradLevelPageRoutingModule
        ],
        declarations: [_upgrad_level_page__WEBPACK_IMPORTED_MODULE_1__.UpgradLevelPage]
    })
], UpgradLevelPageModule);



/***/ }),

/***/ 54288:
/*!**********************************************************!*\
  !*** ./src/app/reward/upgrad-level/upgrad-level.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradLevelPage": () => (/* binding */ UpgradLevelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _upgrad_level_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrad-level.page.html?ngResource */ 7569);
/* harmony import */ var _upgrad_level_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrad-level.page.scss?ngResource */ 14124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let UpgradLevelPage = class UpgradLevelPage {
    constructor() { }
    ngOnInit() {
    }
};
UpgradLevelPage.ctorParameters = () => [];
UpgradLevelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-upgrad-level',
        template: _upgrad_level_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upgrad_level_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpgradLevelPage);



/***/ }),

/***/ 14124:
/*!***********************************************************************!*\
  !*** ./src/app/reward/upgrad-level/upgrad-level.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWQtbGV2ZWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7569:
/*!***********************************************************************!*\
  !*** ./src/app/reward/upgrad-level/upgrad-level.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n  <div style=\"height:100%; background: radial-gradient(circle, #301CAE 0%, #9A8DEC 94%);    text-align: center;\n    align-items: center;\n    display: flex\n;\n    flex-direction: column;\">\n    <img src=\"./assets/icon/hurrah.png\" style=\"    width: 88%;\n    margin-bottom: 15%;\">\n    <div>\n      <div style=\"border-radius:50%;border:2px solid #301CAE;\">\n      <div style=\"background: #301CAE;color:#fff;width:50vw;height:50vw; border-radius:50%;padding:2.5rem;margin:1rem;\">\n        <img src=\"./assets/icon/award.png\">\n        <h2 style=\"margin: .3rem; color:#fff;font-size:2rem;\">10</h2>\n      </div>\n    </div>\n    </div>\n    <div>\n      <p style=\"font-size: 2rem; color:#fff;margin-top:0\">\n        Upgraded to <br>Final Level 10\n      </p>\n    </div>\n    <div style=\"width: 90%;position:relative;display: flex;align-items: center;margin:1rem;background: #FFC224; color:#fff;padding:.5rem;border-radius:5px;height:90px;\">\n      <div style=\"float: left; width:95%\">\n        <h2 style=\"color:#fff;margin: 0; font-size:1rem;font-weight:600;\"> GET YOUR REWARDS NOW! </h2>\n        <p style=\"color:#414042;margin-top:.5rem;font-size:.75rem;\">\n          Use your points to get the most useful rewards. \n        </p>\n      </div>\n      <div style=\"float: right; width:5%\">\n        <img src=\"./assets/icon/Vector.png\">\n      </div>\n      <img src=\"./assets/icon/award.png\" style=\"    position: absolute;\n      right: -4%;\n      bottom: -38%;\">\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reward_upgrad-level_upgrad-level_module_ts.js.map