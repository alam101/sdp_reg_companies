"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_alternate-diet_portion-count_portion-count_module_ts"],{

/***/ 2712:
/*!******************************************************************************!*\
  !*** ./src/app/alternate-diet/portion-count/portion-count-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortionCountPageRoutingModule": () => (/* binding */ PortionCountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _portion_count_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portion-count.page */ 4637);




const routes = [
    {
        path: '',
        component: _portion_count_page__WEBPACK_IMPORTED_MODULE_0__.PortionCountPage
    }
];
let PortionCountPageRoutingModule = class PortionCountPageRoutingModule {
};
PortionCountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PortionCountPageRoutingModule);



/***/ }),

/***/ 6000:
/*!**********************************************************************!*\
  !*** ./src/app/alternate-diet/portion-count/portion-count.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortionCountPageModule": () => (/* binding */ PortionCountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _portion_count_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portion-count-routing.module */ 2712);
/* harmony import */ var _portion_count_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portion-count.page */ 4637);
/* harmony import */ var _components_small_meal_card_small_meal_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/small-meal-card/small-meal-card.module */ 29662);








let PortionCountPageModule = class PortionCountPageModule {
};
PortionCountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _portion_count_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortionCountPageRoutingModule,
            _components_small_meal_card_small_meal_card_module__WEBPACK_IMPORTED_MODULE_2__.SmallMealCardPageModule,
        ],
        declarations: [_portion_count_page__WEBPACK_IMPORTED_MODULE_1__.PortionCountPage],
    })
], PortionCountPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_alternate-diet_portion-count_portion-count_module_ts.js.map