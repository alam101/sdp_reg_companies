"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward_reward-product_reward-product_module_ts"],{

/***/ 96551:
/*!************************************************************************!*\
  !*** ./src/app/reward/reward-product/reward-product-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardProductPageRoutingModule": () => (/* binding */ RewardProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _reward_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-product.page */ 93270);




const routes = [
    {
        path: '',
        component: _reward_product_page__WEBPACK_IMPORTED_MODULE_0__.RewardProductPage
    }
];
let RewardProductPageRoutingModule = class RewardProductPageRoutingModule {
};
RewardProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RewardProductPageRoutingModule);



/***/ }),

/***/ 14737:
/*!****************************************************************!*\
  !*** ./src/app/reward/reward-product/reward-product.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardProductPageModule": () => (/* binding */ RewardProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reward_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-product-routing.module */ 96551);
/* harmony import */ var _reward_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-product.page */ 93270);







let RewardProductPageModule = class RewardProductPageModule {
};
RewardProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reward_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.RewardProductPageRoutingModule
        ],
        declarations: [_reward_product_page__WEBPACK_IMPORTED_MODULE_1__.RewardProductPage]
    })
], RewardProductPageModule);



/***/ }),

/***/ 93270:
/*!**************************************************************!*\
  !*** ./src/app/reward/reward-product/reward-product.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardProductPage": () => (/* binding */ RewardProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reward_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-product.page.html?ngResource */ 35531);
/* harmony import */ var _reward_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-product.page.scss?ngResource */ 21965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let RewardProductPage = class RewardProductPage {
    constructor() {
        this.itemIndex = localStorage.setItem("intemIndex", "4");
    }
    ngOnInit() {
    }
};
RewardProductPage.ctorParameters = () => [];
RewardProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reward-product',
        template: _reward_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reward_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RewardProductPage);



/***/ }),

/***/ 21965:
/*!***************************************************************************!*\
  !*** ./src/app/reward/reward-product/reward-product.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".coins-card {\n  padding: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(194, 130, 66);\n  margin: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\n\n.level1 {\n  background: #CD7F32 !important;\n}\n\n.level2 {\n  background: #f3f3f3 !important;\n}\n\n.level3 {\n  background: #FFD700 !important;\n}\n\n.level4 {\n  background: #301CAE !important;\n}\n\n.my-coins-title {\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #000;\n}\n\n.coins-value {\n  text-align: end;\n  font-weight: bold;\n  color: var(--ion-color-warning);\n}\n\n.level-info {\n  margin-top: 2rem;\n  background: #fff;\n  border-radius: 10px;\n  padding: 2rem 1rem;\n}\n\n.level-title {\n  font-size: 1.5em;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n}\n\n.level-progress {\n  margin-top: 1rem;\n  clear: both;\n}\n\n.progress-text {\n  text-align: center;\n  font-size: 0.9em;\n}\n\n.levels-section {\n  text-align: left;\n  margin: 16px 1rem;\n}\n\n.levels-title {\n  font-weight: bold;\n  font-size: 1.2em;\n  margin-bottom: 8px;\n}\n\n.levels {\n  margin: 4px;\n  width: 100%;\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  scrollbar-width: thin; /* For Firefox */\n  scrollbar-color: grey grey;\n}\n\n.levels .level-item {\n  float: left;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: grid;\n  place-items: center;\n}\n\n.levels .sub-level {\n  overflow: auto;\n  flex-direction: row;\n  display: flex;\n  white-space: nowrap;\n  width: 500px;\n  overflow-x: scroll;\n  align-items: center;\n  cursor: pointer;\n}\n\n.levels .sub-level .active-level1 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #CD7F32;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level2 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #f3f3f3;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level3 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #FFD700;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level4 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #301CAE;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels div {\n  margin: 4px;\n  flex-direction: row;\n}\n\n.how-it-works {\n  margin-top: 16px;\n  float: left;\n}\n\n.how-it-works div {\n  margin-bottom: 12px;\n}\n\n.rewards-section {\n  margin-top: 16px;\n  text-align: center;\n}\n\n.rewards-description {\n  margin-top: 8px;\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtBQUNKOztBQUlFO0VBQ0UsOEJBQUE7QUFESjs7QUFLRTtFQUNFLDhCQUFBO0FBRko7O0FBTUU7RUFDRSw4QkFBQTtBQUhKOztBQU9FO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFKSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVVFO0VBQ0UsV0FBQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUEsRUFBQSxnQkFBQTtFQUNBLDBCQUFBO0FBUEw7O0FBU0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNELGFBQUE7RUFDQyxtQkFBQTtBQVBOOztBQVdHO0VBQ0MsY0FBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVko7O0FBYUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVhOOztBQWVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFiTjs7QUFnQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWROOztBQWlCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBZk47O0FBc0NFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBbkNKOztBQXVDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQXBDSjs7QUF1Q0U7RUFDRSxtQkFBQTtBQXBDSjs7QUF1Q0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBcENKOztBQXVDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXBDSiIsImZpbGUiOiJyZXdhcmQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29pbnMtY2FyZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsMTMwLDY2KTtcbiAgICBtYXJnaW46MDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJyZW07XG4gIH1cbiAgXG4gIC5sZXZlbDF7XG4gICAgYmFja2dyb3VuZDogI0NEN0YzMiAhaW1wb3J0YW50O1xuIC8vICAgY29sb3I6ICMwMDA7XG4gIH1cbiBcblxuICAubGV2ZWwye1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjMhaW1wb3J0YW50O1xuIC8vICAgY29sb3I6ICMwMDA7XG4gIH1cbiBcbiAgLmxldmVsM3tcbiAgICBiYWNrZ3JvdW5kOiAjRkZENzAwIWltcG9ydGFudDtcbiAvLyAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIFxuICAubGV2ZWw0e1xuICAgIGJhY2tncm91bmQ6ICMzMDFDQUUhaW1wb3J0YW50O1xuIC8vICAgY29sb3I6ICNmZmY7XG4gIH1cbiBcbiAgLm15LWNvaW5zLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiMwMDA7XG4gIH1cbiAgXG4gIC5jb2lucy12YWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIH1cbiAgXG4gIC5sZXZlbC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIH1cbiAgXG4gIC5sZXZlbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5sZXZlbC1wcm9ncmVzcyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBjbGVhcjpib3RoO1xuXG4gIH1cbiAgXG4gIC5wcm9ncmVzcy10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgLmxldmVscy1zZWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMTZweCAxcmVtO1xuXG4gICBcbiAgfVxuICBcbiAgLmxldmVscy10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIC5sZXZlbHMge1xuICAgIG1hcmdpbjogNHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBGb3IgRmlyZWZveCAqL1xuICAgICBzY3JvbGxiYXItY29sb3I6IGdyZXkgZ3JleTtcbiAgICBcbiAgICAubGV2ZWwtaXRlbXtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgIFxuICAgIH1cbiAgICBcbiAgIC5zdWItbGV2ZWx7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLy8gYmFja2dyb3VuZDogcmVkO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6cG9pbnRlcjtcblxuICAgXG4gICAgLmFjdGl2ZS1sZXZlbDF7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjQ0Q3RjMyO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgIFxuICAgIC5hY3RpdmUtbGV2ZWwye1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgXG4gICAgLmFjdGl2ZS1sZXZlbDN7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjRkZENzAwO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICBcbiAgICAuYWN0aXZlLWxldmVsNHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICMzMDFDQUU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgIH1cblxuICB9XG4gIC8vIC5sZXZlbHM6aG92ZXIge1xuICAvLyAgIHNjcm9sbGJhci1jb2xvcjogYmxhY2sgYmxhY2s7IC8qIFZpc2libGUgc2Nyb2xsYmFyIG9uIGhvdmVyICovXG4gIC8vIH1cbiAgXG4gIC8vIC8qIEZvciBXZWJraXQgQnJvd3NlcnMgKENocm9tZSwgRWRnZSwgU2FmYXJpKSAqL1xuICAvLyAubGV2ZWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8vICAgd2lkdGg6IDhweDsgLyogV2lkdGggb2Ygc2Nyb2xsYmFyICovXG4gIC8vIH1cbiAgXG4gIC8vIC5sZXZlbHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLy8gICBiYWNrZ3JvdW5kOiBibGFjazsgLyogSGlkZSBzY3JvbGxiYXIgdGh1bWIgYnkgZGVmYXVsdCAqL1xuICAvLyB9XG4gIFxuICAvLyAvKiBTaG93IHNjcm9sbGJhciB3aGVuIGhvdmVyZWQgKi9cbiAgLy8gLmxldmVsczpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvLyAgIGJhY2tncm91bmQ6IGJsYWNrOyAvKiBTaG93IHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xuICAvLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLy8gfVxuICAubGV2ZWxzIGRpdiB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIFxuICB9XG4gIFxuICAuaG93LWl0LXdvcmtzIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAuaG93LWl0LXdvcmtzIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuICBcbiAgLnJld2FyZHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5yZXdhcmRzLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 35531:
/*!***************************************************************************!*\
  !*** ./src/app/reward/reward-product/reward-product.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"coins-card\" [ngClass]=\"{'level1':itemIndex===1,'level2':itemIndex===2,'level3':itemIndex===3,'level4':itemIndex===4}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\" class=\"my-coins-title\">My Coins</ion-col>\n        <ion-col size=\"4\" class=\"coins-value\">\n         <div style=\"color: #fff;\n    padding: .5rem;\n    width: 85px;\n    border-radius: 19px;\n    background: #e0ac08;\n    height: 34px;    position: absolute;\n    right: 0;\">\n    <span style=\"position: relative;\n    top: -10px;\n    left: -5px;\">234 </span>\n          <img src=\"./assets/reward/doller.png\" style=\"    position: relative;top: -3px;\">\n        </div> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"level-info\">\n      <div class=\"level-title\" style=\"float: left;\">Level 2</div>\n      <div style=\"float: right;    margin-top: .2rem;\">Your Daily Target <ion-icon name=\"bullseye-outline\"></ion-icon></div>\n      <div class=\"level-progress\">\n        <div style=\"color:#000;float:left;\n                font-size: 1rem;\n                font-weight: 600;\">Coins</div>\n        <div class=\"progress-text\" style=\"float: right;\">34 / 100</div>\n        <div style=\"margin-top:.5rem;\">\n          <ion-progress-bar style=\"height: 10px;border-radius:15px;\" value=\"0.34\" color=\"warning\"></ion-progress-bar>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n  <div style=\"width: 100%;padding:1rem;font-size:1rem;color:#000;font-weight:600;\">\n    Rewards  <img src=\"./assets/reward/doller.png\" style=\"    position: relative;top: 5px;\">\n  </div>\n  <ion-card style=\"box-shadow: none;;\">\n    <ion-row>\n      <ion-col size=\"5.75\" class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: center;\n    display: contents;\">\n    <h2 style=\"font-size: .8rem; font-weight:500;\">BookMyShow</h2>\n    <p style=\"font-size: .7rem;\">50% off on next ticket</p>\n    <ion-button style=\"font-size: .75rem; font-weight:500;--height:40px\">Buy @49 coins</ion-button>\n        </div>\n        </div>\n      </ion-col>\n      <ion-col size=\".5\"></ion-col>\n      <ion-col size=\"5.75\" class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: center;\n    display: contents;\">\n          <h2 style=\"font-size: .8rem; font-weight:500;\">BookMyShow</h2>\n          <p style=\"font-size: .7rem;\">50% off on next ticket</p>\n          <ion-button style=\"font-size: .75rem; font-weight:500;--height:40px;\">Buy @49 coins</ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card style=\"box-shadow: none;;\">\n    <ion-row>\n      <ion-col size=\"5.75\" class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: center;\n    display: contents;\">\n    <h2 style=\"font-size: .8rem; font-weight:500;\">BookMyShow</h2>\n    <p style=\"font-size: .7rem;\">50% off on next ticket</p>\n    <ion-button style=\"font-size: .75rem; font-weight:500;--height:40px\">Buy @49 coins</ion-button>\n        </div>\n        </div>\n      </ion-col>\n      <ion-col size=\".5\"></ion-col>\n      <ion-col size=\"5.75\" class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: center;\n    display: contents;\">\n          <h2 style=\"font-size: .8rem; font-weight:500;\">BookMyShow</h2>\n          <p style=\"font-size: .7rem;\">50% off on next ticket</p>\n          <ion-button style=\"font-size: .75rem; font-weight:500;--height:40px;\">Buy @49 coins</ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card style=\"box-shadow: none;\">\n    <ion-row>\n      <ion-col size=\"5.75\" class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: center;\n    display: contents;\">\n    <h2 style=\"font-size: .8rem; font-weight:500;\">BookMyShow</h2>\n    <p style=\"font-size: .7rem;\">50% off on next ticket</p>\n    <ion-button style=\"font-size: .75rem; font-weight:500;--height:40px\">Buy @49 coins</ion-button>\n        </div>\n        </div>\n      </ion-col>\n      <ion-col size=\".5\"></ion-col>\n      <ion-col size=\"5.75\" class=\"ion-text-center\">\n        <div style=\"background: #F2E5D8;\n    border: 1px solid #b3b3b3;\n    padding-bottom: 1rem;\n    border-radius: 12px;\">\n          <img src=\"./assets/icon/food.png\" style=\"    width: 100%;\">\n          <div style=\"    padding: 1rem;\n    text-align: center;\n    display: contents;\">\n          <h2 style=\"font-size: .8rem; font-weight:500;\">BookMyShow</h2>\n          <p style=\"font-size: .7rem;\">50% off on next ticket</p>\n          <ion-button style=\"font-size: .75rem; font-weight:500;--height:40px;\">Buy @49 coins</ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <br><br><br><br><br><br><br><br><br><br>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reward_reward-product_reward-product_module_ts.js.map