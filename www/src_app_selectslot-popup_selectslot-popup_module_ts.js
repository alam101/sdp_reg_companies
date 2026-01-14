"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_selectslot-popup_selectslot-popup_module_ts"],{

/***/ 72166:
/*!*********************************************************************!*\
  !*** ./src/app/selectslot-popup/selectslot-popup-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectslotPopupPageRoutingModule": () => (/* binding */ SelectslotPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _selectslot_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectslot-popup.page */ 25426);




const routes = [
    {
        path: '',
        component: _selectslot_popup_page__WEBPACK_IMPORTED_MODULE_0__.SelectslotPopupPage
    }
];
let SelectslotPopupPageRoutingModule = class SelectslotPopupPageRoutingModule {
};
SelectslotPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectslotPopupPageRoutingModule);



/***/ }),

/***/ 7851:
/*!*************************************************************!*\
  !*** ./src/app/selectslot-popup/selectslot-popup.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectslotPopupPageModule": () => (/* binding */ SelectslotPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _selectslot_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectslot-popup-routing.module */ 72166);
/* harmony import */ var _selectslot_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectslot-popup.page */ 25426);







let SelectslotPopupPageModule = class SelectslotPopupPageModule {
};
SelectslotPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _selectslot_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectslotPopupPageRoutingModule,
        ],
        declarations: [_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_1__.SelectslotPopupPage],
    })
], SelectslotPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_selectslot-popup_selectslot-popup_module_ts.js.map