"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward_reward-deal-confirmed_reward-deal-confirmed_module_ts"],{

/***/ 33026:
/*!**************************************************************************************!*\
  !*** ./src/app/reward/reward-deal-confirmed/reward-deal-confirmed-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDealConfirmedPageRoutingModule": () => (/* binding */ RewardDealConfirmedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _reward_deal_confirmed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-deal-confirmed.page */ 42856);




const routes = [
    {
        path: '',
        component: _reward_deal_confirmed_page__WEBPACK_IMPORTED_MODULE_0__.RewardDealConfirmedPage
    }
];
let RewardDealConfirmedPageRoutingModule = class RewardDealConfirmedPageRoutingModule {
};
RewardDealConfirmedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RewardDealConfirmedPageRoutingModule);



/***/ }),

/***/ 47153:
/*!******************************************************************************!*\
  !*** ./src/app/reward/reward-deal-confirmed/reward-deal-confirmed.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDealConfirmedPageModule": () => (/* binding */ RewardDealConfirmedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reward_deal_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-deal-confirmed-routing.module */ 33026);
/* harmony import */ var _reward_deal_confirmed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-deal-confirmed.page */ 42856);







let RewardDealConfirmedPageModule = class RewardDealConfirmedPageModule {
};
RewardDealConfirmedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reward_deal_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__.RewardDealConfirmedPageRoutingModule
        ],
        declarations: [_reward_deal_confirmed_page__WEBPACK_IMPORTED_MODULE_1__.RewardDealConfirmedPage]
    })
], RewardDealConfirmedPageModule);



/***/ }),

/***/ 42856:
/*!****************************************************************************!*\
  !*** ./src/app/reward/reward-deal-confirmed/reward-deal-confirmed.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDealConfirmedPage": () => (/* binding */ RewardDealConfirmedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reward_deal_confirmed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-deal-confirmed.page.html?ngResource */ 46015);
/* harmony import */ var _reward_deal_confirmed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-deal-confirmed.page.scss?ngResource */ 4086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let RewardDealConfirmedPage = class RewardDealConfirmedPage {
    constructor() {
        this.itemIndex = localStorage.setItem("intemIndex", "4");
    }
    ngOnInit() {
    }
};
RewardDealConfirmedPage.ctorParameters = () => [];
RewardDealConfirmedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reward-deal-confirmed',
        template: _reward_deal_confirmed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reward_deal_confirmed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RewardDealConfirmedPage);



/***/ }),

/***/ 4086:
/*!*****************************************************************************************!*\
  !*** ./src/app/reward/reward-deal-confirmed/reward-deal-confirmed.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".coins-card {\n  padding: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(194, 130, 66);\n  margin: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\n\n.level1 {\n  background: #CD7F32 !important;\n}\n\n.level2 {\n  background: #f3f3f3 !important;\n}\n\n.level3 {\n  background: #FFD700 !important;\n}\n\n.level4 {\n  background: #301CAE !important;\n}\n\n.my-coins-title {\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #000;\n}\n\n.coins-value {\n  text-align: end;\n  font-weight: bold;\n  color: var(--ion-color-warning);\n}\n\n.level-info {\n  margin-top: 2rem;\n  background: #fff;\n  border-radius: 10px;\n  padding: 2rem 1rem;\n}\n\n.level-title {\n  font-size: 1.5em;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n}\n\n.level-progress {\n  margin-top: 1rem;\n  clear: both;\n}\n\n.progress-text {\n  text-align: center;\n  font-size: 0.9em;\n}\n\n.levels-section {\n  text-align: left;\n  margin: 16px 1rem;\n}\n\n.levels-title {\n  font-weight: bold;\n  font-size: 1.2em;\n  margin-bottom: 8px;\n}\n\n.levels {\n  margin: 4px;\n  width: 100%;\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  scrollbar-width: thin; /* For Firefox */\n  scrollbar-color: grey grey;\n}\n\n.levels .level-item {\n  float: left;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: grid;\n  place-items: center;\n}\n\n.levels .sub-level {\n  overflow: auto;\n  flex-direction: row;\n  display: flex;\n  white-space: nowrap;\n  width: 500px;\n  overflow-x: scroll;\n  align-items: center;\n  cursor: pointer;\n}\n\n.levels .sub-level .active-level1 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #CD7F32;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level2 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #f3f3f3;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level3 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #FFD700;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level4 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #301CAE;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels div {\n  margin: 4px;\n  flex-direction: row;\n}\n\n.how-it-works {\n  margin-top: 16px;\n  float: left;\n}\n\n.how-it-works div {\n  margin-bottom: 12px;\n}\n\n.rewards-section {\n  margin-top: 16px;\n  text-align: center;\n}\n\n.rewards-description {\n  margin-top: 8px;\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZC1kZWFsLWNvbmZpcm1lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFJRTtFQUNFLDhCQUFBO0FBREo7O0FBS0U7RUFDRSw4QkFBQTtBQUZKOztBQU1FO0VBQ0UsOEJBQUE7QUFISjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBSko7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBVUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVRTtFQUNFLFdBQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBLEVBQUEsZ0JBQUE7RUFDQSwwQkFBQTtBQVBMOztBQVNJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDRCxhQUFBO0VBQ0MsbUJBQUE7QUFQTjs7QUFXRztFQUNDLGNBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFYTjs7QUFlSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBYk47O0FBZ0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFkTjs7QUFpQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWZOOztBQXNDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQW5DSjs7QUF1Q0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFwQ0o7O0FBdUNFO0VBQ0UsbUJBQUE7QUFwQ0o7O0FBdUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQXBDSjs7QUF1Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQ0oiLCJmaWxlIjoicmV3YXJkLWRlYWwtY29uZmlybWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2lucy1jYXJkIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwxMzAsNjYpO1xuICAgIG1hcmdpbjowO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcbiAgfVxuICBcbiAgLmxldmVsMXtcbiAgICBiYWNrZ3JvdW5kOiAjQ0Q3RjMyICFpbXBvcnRhbnQ7XG4gLy8gICBjb2xvcjogIzAwMDtcbiAgfVxuIFxuXG4gIC5sZXZlbDJ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMyFpbXBvcnRhbnQ7XG4gLy8gICBjb2xvcjogIzAwMDtcbiAgfVxuIFxuICAubGV2ZWwze1xuICAgIGJhY2tncm91bmQ6ICNGRkQ3MDAhaW1wb3J0YW50O1xuIC8vICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5sZXZlbDR7XG4gICAgYmFja2dyb3VuZDogIzMwMUNBRSFpbXBvcnRhbnQ7XG4gLy8gICBjb2xvcjogI2ZmZjtcbiAgfVxuIFxuICAubXktY29pbnMtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IzAwMDtcbiAgfVxuICBcbiAgLmNvaW5zLXZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgfVxuICBcbiAgLmxldmVsLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxuICBcbiAgLmxldmVsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuICBcbiAgLmxldmVsLXByb2dyZXNzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGNsZWFyOmJvdGg7XG5cbiAgfVxuICBcbiAgLnByb2dyZXNzLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIFxuICAubGV2ZWxzLXNlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAxNnB4IDFyZW07XG5cbiAgIFxuICB9XG4gIFxuICAubGV2ZWxzLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgLmxldmVscyB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIEZvciBGaXJlZm94ICovXG4gICAgIHNjcm9sbGJhci1jb2xvcjogZ3JleSBncmV5O1xuICAgIFxuICAgIC5sZXZlbC1pdGVte1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgXG4gICAgfVxuICAgIFxuICAgLnN1Yi1sZXZlbHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuXG4gICBcbiAgICAuYWN0aXZlLWxldmVsMXtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICNDRDdGMzI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgXG4gICAgLmFjdGl2ZS1sZXZlbDJ7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICBcbiAgICAuYWN0aXZlLWxldmVsM3tcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICNGRkQ3MDA7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgIFxuICAgIC5hY3RpdmUtbGV2ZWw0e1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgIzMwMUNBRTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgfVxuXG4gIH1cbiAgLy8gLmxldmVsczpob3ZlciB7XG4gIC8vICAgc2Nyb2xsYmFyLWNvbG9yOiBibGFjayBibGFjazsgLyogVmlzaWJsZSBzY3JvbGxiYXIgb24gaG92ZXIgKi9cbiAgLy8gfVxuICBcbiAgLy8gLyogRm9yIFdlYmtpdCBCcm93c2VycyAoQ2hyb21lLCBFZGdlLCBTYWZhcmkpICovXG4gIC8vIC5sZXZlbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLy8gICB3aWR0aDogOHB4OyAvKiBXaWR0aCBvZiBzY3JvbGxiYXIgKi9cbiAgLy8gfVxuICBcbiAgLy8gLmxldmVsczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvLyAgIGJhY2tncm91bmQ6IGJsYWNrOyAvKiBIaWRlIHNjcm9sbGJhciB0aHVtYiBieSBkZWZhdWx0ICovXG4gIC8vIH1cbiAgXG4gIC8vIC8qIFNob3cgc2Nyb2xsYmFyIHdoZW4gaG92ZXJlZCAqL1xuICAvLyAubGV2ZWxzOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIC8vICAgYmFja2dyb3VuZDogYmxhY2s7IC8qIFNob3cgc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXG4gIC8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvLyB9XG4gIC5sZXZlbHMgZGl2IHtcbiAgICBtYXJnaW46IDRweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgXG4gIH1cbiAgXG4gIC5ob3ctaXQtd29ya3Mge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC5ob3ctaXQtd29ya3MgZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4gIFxuICAucmV3YXJkcy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnJld2FyZHMtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9Il19 */";

/***/ }),

/***/ 46015:
/*!*****************************************************************************************!*\
  !*** ./src/app/reward/reward-deal-confirmed/reward-deal-confirmed.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"coins-card\" [ngClass]=\"{'level1':itemIndex===1,'level2':itemIndex===2,'level3':itemIndex===3,'level4':itemIndex===4}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\" class=\"my-coins-title\">My Coins</ion-col>\n        <ion-col size=\"4\" class=\"coins-value\">\n         <div style=\"color: #fff;\n    padding: .5rem;\n    width: 85px;\n    border-radius: 19px;\n    background: #e0ac08;\n    height: 34px;    position: absolute;\n    right: 0;\">\n    <span style=\"position: relative;\n    top: -10px;\n    left: -5px;\">234 </span>\n          <img src=\"./assets/reward/doller.png\" style=\"    position: relative;top: -3px;\">\n        </div> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card style=\"box-shadow: none;margin:0;margin:1rem;\">\n   \n    <ion-row style=\"margin: 1rem;\">\n      <ion-col class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food-xl.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: left;\n    display: contents; margin:1rem;\">\n    <ion-row >\n      <ion-col class=\"ion-text-left\">\n        <h2 style=\"color:#ED9004;font-size:1.2rem;margin:0 1rem;\">\n          CONGRATULATIONS!\n        </h2>\n      </ion-col>\n    </ion-row>\n    <h2 style=\"font-size: .8rem; font-weight:500;color:#565656;margin-left:1rem;\">Get Flat 40% on tickets on Bookmyshow</h2>\n    <p style=\"font-size: .7rem;padding:1rem;margin-top:0;padding-top:0;\">Just buy the coupon and use it on any bookmyshow webiste or \n      app you will get the discount instantly. Just put in the code and\n      redeem your points there itsel</p>\n    <div style=\"display: flex;flex-direction:column; width:100%;align-items: center;justify-content:center;\"> \n    <ion-button style=\"font-size: .75rem; font-weight:500;height:30px;--background:#126A18;margin:.5rem 0;\">Purchased for 49 coins</ion-button>\n    \n    <ion-button style=\"font-size: .75rem; font-weight:500;height:30px;--background:#126A18;margin:.5rem 0;\">CODE - DFX1231AFASD2025</ion-button>\n  </div>     \n  </div>\n        </div>\n      </ion-col>\n  </ion-row>\n  <ion-card style=\"box-shadow: none; background:#F2E5D8;color:#000;padding:1rem;\">\n   <h2 style=\"margin:0\">Instructions</h2>\n   <p>\n    Just buy the coupon and use it on any \nbookmyshow webiste \napp you will get the discount instantly. Just put in the \nand redeem your points there itsel\n   </p>\n  </ion-card>\n  <ion-row style=\"margin: 1rem 0;\">\n    <ion-col class=\"ion-text-center\">\n      <ion-button style=\"font-size: .75rem; font-weight:500;height:45px;--background:#126A18;\">Use Code</ion-button>\n    </ion-col>\n  </ion-row>\n  </ion-card>\n<br><br><br><br><br><br><br><br>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reward_reward-deal-confirmed_reward-deal-confirmed_module_ts.js.map