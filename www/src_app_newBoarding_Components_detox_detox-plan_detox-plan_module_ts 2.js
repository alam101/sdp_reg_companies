"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_Components_detox_detox-plan_detox-plan_module_ts"],{

/***/ 73153:
/*!**************************************************************************************!*\
  !*** ./src/app/newBoarding/Components/detox/detox-plan/detox-plan-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetoxPlanPageRoutingModule": () => (/* binding */ DetoxPlanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _detox_plan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detox-plan.page */ 69960);




const routes = [
    {
        path: '',
        component: _detox_plan_page__WEBPACK_IMPORTED_MODULE_0__.DetoxPlanPage
    }
];
let DetoxPlanPageRoutingModule = class DetoxPlanPageRoutingModule {
};
DetoxPlanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetoxPlanPageRoutingModule);



/***/ }),

/***/ 60801:
/*!******************************************************************************!*\
  !*** ./src/app/newBoarding/Components/detox/detox-plan/detox-plan.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetoxPlanPageModule": () => (/* binding */ DetoxPlanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _detox_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detox-plan-routing.module */ 73153);
/* harmony import */ var _detox_plan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detox-plan.page */ 69960);







let DetoxPlanPageModule = class DetoxPlanPageModule {
};
DetoxPlanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detox_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetoxPlanPageRoutingModule
        ],
        declarations: [_detox_plan_page__WEBPACK_IMPORTED_MODULE_1__.DetoxPlanPage]
    })
], DetoxPlanPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_Components_detox_detox-plan_detox-plan_module_ts.js.map