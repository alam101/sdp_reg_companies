"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-suggestions_view-suggestions_module_ts"],{

/***/ 21301:
/*!*********************************************************************!*\
  !*** ./src/app/view-suggestions/view-suggestions-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSuggestionsPageRoutingModule": () => (/* binding */ ViewSuggestionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _view_suggestions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-suggestions.page */ 1802);




const routes = [
    {
        path: '',
        component: _view_suggestions_page__WEBPACK_IMPORTED_MODULE_0__.ViewSuggestionsPage
    }
];
let ViewSuggestionsPageRoutingModule = class ViewSuggestionsPageRoutingModule {
};
ViewSuggestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewSuggestionsPageRoutingModule);



/***/ }),

/***/ 68878:
/*!*************************************************************!*\
  !*** ./src/app/view-suggestions/view-suggestions.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSuggestionsPageModule": () => (/* binding */ ViewSuggestionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _view_suggestions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-suggestions-routing.module */ 21301);
/* harmony import */ var _view_suggestions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-suggestions.page */ 1802);
/* harmony import */ var _components_filter_card_filter_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filter-card/filter-card.module */ 1368);
/* harmony import */ var _components_restaurant_card_restaurant_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurant-card/restaurant-card.module */ 14719);
/* harmony import */ var _components_small_meal_card_small_meal_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/small-meal-card/small-meal-card.module */ 29662);










let ViewSuggestionsPageModule = class ViewSuggestionsPageModule {
};
ViewSuggestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _view_suggestions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewSuggestionsPageRoutingModule,
            _components_filter_card_filter_card_module__WEBPACK_IMPORTED_MODULE_2__.FilterCardPageModule,
            _components_restaurant_card_restaurant_card_module__WEBPACK_IMPORTED_MODULE_3__.RestaurantCardPageModule,
            _components_small_meal_card_small_meal_card_module__WEBPACK_IMPORTED_MODULE_4__.SmallMealCardPageModule,
        ],
        declarations: [_view_suggestions_page__WEBPACK_IMPORTED_MODULE_1__.ViewSuggestionsPage],
    })
], ViewSuggestionsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_view-suggestions_view-suggestions_module_ts.js.map