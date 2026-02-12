"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward_icon-level_icon-level_module_ts"],{

/***/ 9341:
/*!****************************************************************!*\
  !*** ./src/app/reward/icon-level/icon-level-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLevelPageRoutingModule": () => (/* binding */ IconLevelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _icon_level_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-level.page */ 49100);




const routes = [
    {
        path: '',
        component: _icon_level_page__WEBPACK_IMPORTED_MODULE_0__.IconLevelPage
    }
];
let IconLevelPageRoutingModule = class IconLevelPageRoutingModule {
};
IconLevelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IconLevelPageRoutingModule);



/***/ }),

/***/ 77813:
/*!********************************************************!*\
  !*** ./src/app/reward/icon-level/icon-level.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLevelPageModule": () => (/* binding */ IconLevelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _icon_level_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-level-routing.module */ 9341);
/* harmony import */ var _icon_level_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-level.page */ 49100);







let IconLevelPageModule = class IconLevelPageModule {
};
IconLevelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _icon_level_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconLevelPageRoutingModule
        ],
        declarations: [_icon_level_page__WEBPACK_IMPORTED_MODULE_1__.IconLevelPage]
    })
], IconLevelPageModule);



/***/ }),

/***/ 49100:
/*!******************************************************!*\
  !*** ./src/app/reward/icon-level/icon-level.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLevelPage": () => (/* binding */ IconLevelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _icon_level_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-level.page.html?ngResource */ 44159);
/* harmony import */ var _icon_level_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-level.page.scss?ngResource */ 12860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let IconLevelPage = class IconLevelPage {
    constructor(appService) {
        this.appService = appService;
        this.itemIndex = 1;
        this.activeHeaderIndex = 1;
    }
    ngOnInit() {
        this.getLevel();
        this.getActionTransactions();
        this.itemIndex = this.levelData.level;
        if (this.levelData.level === 1 || this.levelData.level === 2 || this.levelData.level === 3) {
            this.activeHeaderIndex = 1;
        }
        else if (this.levelData.level === 14 || this.levelData.level === 5 || this.levelData.level === 6) {
            this.activeHeaderIndex = 2;
        }
        else if (this.levelData.level === 7 || this.levelData.level === 8 || this.levelData.level === 9) {
            this.activeHeaderIndex = 3;
        }
        else {
            this.activeHeaderIndex = 4;
        }
    }
    itemClicked(index) {
        this.itemIndex = index;
    }
    getActionTransactions() {
        this.appService.game_GetLevel('9945419159').then((res) => {
            this.transactionData = res.data;
        }, err => {
        });
    }
    getLevel() {
        this.appService.game_GetLevel('metropolis@2025').then((res) => {
            this.levelData = res.data[0];
        }, err => {
        });
    }
};
IconLevelPage.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
IconLevelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-icon-level',
        template: _icon_level_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_icon_level_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IconLevelPage);



/***/ }),

/***/ 12860:
/*!*******************************************************************!*\
  !*** ./src/app/reward/icon-level/icon-level.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".coins-card {\n  padding: 16px;\n  margin-bottom: 16px;\n  background-color: rgb(194, 130, 66);\n  margin: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\n\n.level1 {\n  background: #CD7F32 !important;\n}\n\n.level2 {\n  background: #f3f3f3 !important;\n}\n\n.level3 {\n  background: #FFD700 !important;\n}\n\n.level4 {\n  background: #301CAE !important;\n}\n\n.my-coins-title {\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #000;\n}\n\n.coins-value {\n  text-align: end;\n  font-weight: bold;\n  color: var(--ion-color-warning);\n}\n\n.level-info {\n  margin-top: 2rem;\n  background: #fff;\n  border-radius: 10px;\n  padding: 2rem 1rem;\n}\n\n.level-title {\n  font-size: 1.5em;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n}\n\n.level-progress {\n  margin-top: 1rem;\n  clear: both;\n}\n\n.progress-text {\n  text-align: center;\n  font-size: 0.9em;\n}\n\n.levels-section {\n  text-align: left;\n  margin: 16px 1rem;\n}\n\n.levels-title {\n  font-weight: bold;\n  font-size: 1.2em;\n  margin-bottom: 8px;\n}\n\n.levels {\n  margin: 4px;\n  width: 100%;\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  scrollbar-width: thin; /* For Firefox */\n  scrollbar-color: grey grey;\n}\n\n.levels .level-item {\n  float: left;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  vertical-align: middle;\n  display: grid;\n  place-items: center;\n}\n\n.levels .sub-level {\n  overflow: auto;\n  flex-direction: row;\n  display: flex;\n  white-space: nowrap;\n  width: 500px;\n  overflow-x: scroll;\n  align-items: center;\n  cursor: pointer;\n}\n\n.levels .sub-level .active-level1 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #CD7F32;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level2 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #f3f3f3;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level3 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #FFD700;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels .sub-level .active-level4 {\n  width: 50px;\n  height: 50px;\n  outline: 2px solid #301CAE;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n\n.levels div {\n  margin: 4px;\n  flex-direction: row;\n}\n\n.how-it-works {\n  margin-top: 16px;\n  float: left;\n}\n\n.how-it-works div {\n  margin-bottom: 12px;\n}\n\n.rewards-section {\n  margin-top: 16px;\n  text-align: center;\n}\n\n.rewards-description {\n  margin-top: 8px;\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tbGV2ZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBSUU7RUFDRSw4QkFBQTtBQURKOztBQUtFO0VBQ0UsOEJBQUE7QUFGSjs7QUFNRTtFQUNFLDhCQUFBO0FBSEo7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSxXQUFBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQSxFQUFBLGdCQUFBO0VBQ0EsMEJBQUE7QUFQTDs7QUFTSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0QsYUFBQTtFQUNDLG1CQUFBO0FBUE47O0FBV0c7RUFDQyxjQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFhSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBWE47O0FBZUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWJOOztBQWdCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBZE47O0FBaUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFmTjs7QUFzQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFuQ0o7O0FBdUNFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBcENKOztBQXVDRTtFQUNFLG1CQUFBO0FBcENKOztBQXVDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFwQ0o7O0FBdUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcENKIiwiZmlsZSI6Imljb24tbGV2ZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvaW5zLWNhcmQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LDEzMCw2Nik7XG4gICAgbWFyZ2luOjA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycmVtO1xuICB9XG4gIFxuICAubGV2ZWwxe1xuICAgIGJhY2tncm91bmQ6ICNDRDdGMzIgIWltcG9ydGFudDtcbiAvLyAgIGNvbG9yOiAjMDAwO1xuICB9XG4gXG5cbiAgLmxldmVsMntcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzIWltcG9ydGFudDtcbiAvLyAgIGNvbG9yOiAjMDAwO1xuICB9XG4gXG4gIC5sZXZlbDN7XG4gICAgYmFja2dyb3VuZDogI0ZGRDcwMCFpbXBvcnRhbnQ7XG4gLy8gICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLmxldmVsNHtcbiAgICBiYWNrZ3JvdW5kOiAjMzAxQ0FFIWltcG9ydGFudDtcbiAvLyAgIGNvbG9yOiAjZmZmO1xuICB9XG4gXG4gIC5teS1jb2lucy10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjojMDAwO1xuICB9XG4gIFxuICAuY29pbnMtdmFsdWUge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICB9XG4gIFxuICAubGV2ZWwtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG4gIFxuICAubGV2ZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG4gIFxuICAubGV2ZWwtcHJvZ3Jlc3Mge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgY2xlYXI6Ym90aDtcblxuICB9XG4gIFxuICAucHJvZ3Jlc3MtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbiAgXG4gIC5sZXZlbHMtc2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDE2cHggMXJlbTtcblxuICAgXG4gIH1cbiAgXG4gIC5sZXZlbHMtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICAubGV2ZWxzIHtcbiAgICBtYXJnaW46IDRweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICAgc2Nyb2xsYmFyLWNvbG9yOiBncmV5IGdyZXk7XG4gICAgXG4gICAgLmxldmVsLWl0ZW17XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICBcbiAgICB9XG4gICAgXG4gICAuc3ViLWxldmVse1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG5cbiAgIFxuICAgIC5hY3RpdmUtbGV2ZWwxe1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgI0NEN0YzMjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICBcbiAgICAuYWN0aXZlLWxldmVsMntcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgIFxuICAgIC5hY3RpdmUtbGV2ZWwze1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgI0ZGRDcwMDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgXG4gICAgLmFjdGl2ZS1sZXZlbDR7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjMzAxQ0FFO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICB9XG5cbiAgfVxuICAvLyAubGV2ZWxzOmhvdmVyIHtcbiAgLy8gICBzY3JvbGxiYXItY29sb3I6IGJsYWNrIGJsYWNrOyAvKiBWaXNpYmxlIHNjcm9sbGJhciBvbiBob3ZlciAqL1xuICAvLyB9XG4gIFxuICAvLyAvKiBGb3IgV2Via2l0IEJyb3dzZXJzIChDaHJvbWUsIEVkZ2UsIFNhZmFyaSkgKi9cbiAgLy8gLmxldmVsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvLyAgIHdpZHRoOiA4cHg7IC8qIFdpZHRoIG9mIHNjcm9sbGJhciAqL1xuICAvLyB9XG4gIFxuICAvLyAubGV2ZWxzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIC8vICAgYmFja2dyb3VuZDogYmxhY2s7IC8qIEhpZGUgc2Nyb2xsYmFyIHRodW1iIGJ5IGRlZmF1bHQgKi9cbiAgLy8gfVxuICBcbiAgLy8gLyogU2hvdyBzY3JvbGxiYXIgd2hlbiBob3ZlcmVkICovXG4gIC8vIC5sZXZlbHM6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLy8gICBiYWNrZ3JvdW5kOiBibGFjazsgLyogU2hvdyBzY3JvbGxiYXIgdGh1bWIgb24gaG92ZXIgKi9cbiAgLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8vIH1cbiAgLmxldmVscyBkaXYge1xuICAgIG1hcmdpbjogNHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBcbiAgfVxuICBcbiAgLmhvdy1pdC13b3JrcyB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLmhvdy1pdC13b3JrcyBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbiAgXG4gIC5yZXdhcmRzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAucmV3YXJkcy1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH0iXX0= */";

/***/ }),

/***/ 44159:
/*!*******************************************************************!*\
  !*** ./src/app/reward/icon-level/icon-level.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"coins-card\" [ngClass]=\"{'level1':activeHeaderIndex===1,'level2':activeHeaderIndex===2,'level3':activeHeaderIndex===3,'level4':activeHeaderIndex===4}\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\" class=\"my-coins-title\">My Coins</ion-col>\n        <ion-col size=\"4\" class=\"coins-value\">\n         <div style=\"color: #fff;\n    padding: .5rem;\n    width: 85px;\n    border-radius: 19px;\n    background: #e0ac08;\n    height: 34px;    position: absolute;\n    right: 0;\">\n    <span style=\"position: relative;\n    top: -10px;\n    left: -5px;\">{{transactionData?.points}} </span>\n          <img src=\"./assets/reward/doller.png\" style=\"    position: relative;top: -3px;\">\n        </div> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"level-info\">\n      <div class=\"level-title\" style=\"float: left;\">Level {{levelData?.level}}</div>\n      <div style=\"float: right;    margin-top: .2rem;\">Your Daily Target <ion-icon name=\"bullseye-outline\"></ion-icon></div>\n      <div class=\"level-progress\">\n        <div style=\"color:#000;float:left;\n                font-size: 1rem;\n                font-weight: 600;\">Coins</div>\n        <div class=\"progress-text\" style=\"float: right;\">34 / 100</div>\n        <div style=\"margin-top:.5rem;\">\n          <ion-progress-bar style=\"height: 10px;border-radius:15px;\" value=\"0.34\" color=\"warning\"></ion-progress-bar>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n\n  <div class=\"levels-section\">\n    <div class=\"levels-title\">Levels</div>\n    <div class=\"levels\">\n      <div class=\"sub-level\">\n      <div class=\"level-item level1\" [ngClass]=\"{'active-level1':itemIndex===1}\" >1</div>\n      <div class=\"level-item level1\" [ngClass]=\"{'active-level1':itemIndex===2}\">2</div>\n      <div class=\"level-item level1\" [ngClass]=\"{'active-level1':itemIndex===3}\" >3</div>\n      <div class=\"level-item level2\" [ngClass]=\"{'active-level2':itemIndex===4}\">4</div>\n      <div class=\"level-item level2\" [ngClass]=\"{'active-level2':itemIndex===5}\" >5</div>\n      <div class=\"level-item level2\"  [ngClass]=\"{'active-level2':itemIndex===6}\" >6</div>\n      <div class=\"level-item level3\" [ngClass]=\"{'active-level3':itemIndex===7}\" >7</div>\n      <div class=\"level-item level3\" [ngClass]=\"{'active-level3':itemIndex===8}\" >8</div>\n      <div class=\"level-item level3\" [ngClass]=\"{'active-level3':itemIndex===9}\" >9</div>\n      <div class=\"level-item level4\" [ngClass]=\"{'active-level4':itemIndex===10}\">10</div>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"width: 100%;padding:1rem;font-size:1rem;color:#000;font-weight:600;\">\n    How it works?  <img src=\"./assets/reward/doller.png\" style=\"    position: relative;top: 5px;\">\n  </div>\n  <div style=\"width: 90%;margin:0 1rem;background: #DDDDDD; color:#000;padding:.5rem;border-radius:5px; margin-bottom:2rem;min-height:86px;\">\n     <h2 style=\"margin: 0; font-size:1rem;font-weight:600;color:#414042;\">Daily Limit</h2>\n    <p style=\"color:#414042;margin-top:.5rem;font-size:.75rem\">\n      There is going to be a daily limit of 20 coins\n    </p>\n\n  </div>\n\n \n  <div style=\"width: 90%;display: flex;align-items: center;margin:1rem;background: rgb(65, 201, 51); color:#000;padding:.5rem;border-radius:5px;height:86px;\">\n    <div style=\"float: left; width:20%\">\n      <img src=\"./assets/icon/upgrad.png\">\n    </div>\n    <div style=\"float: left; width:80%\">\n      <h2 style=\"color:#414042;margin: 0; font-size:1rem;font-weight:600;\">Level Upgrade</h2>\n      <p style=\"color:#414042;margin-top:.5rem;\">\n        Log full diet for 3 days\n      </p>\n    </div>\n  </div>\n  \n  <div style=\"width: 90%;display: flex;align-items: center;margin:1rem;background: #FF7A7D; color:#000;padding:.5rem;border-radius:5px;height:86px;\">\n    <div style=\"float: left; width:20%\">\n      <img src=\"./assets/icon/downgrad.png\">\n    </div>\n    <div style=\"float: left; width:80%\">\n      <h2 style=\"color:#414042;margin: 0; font-size:1rem;font-weight:600;\">Level Downgrade</h2>\n      <p style=\"color:#414042;margin-top:.5rem;\">\n        Log full diet for 3 days\n      </p>\n    </div>\n  </div>\n  <div style=\"width: 90%;position:relative;display: flex;align-items: center;margin:1rem;background: #FFC224; color:#fff;padding:.5rem;border-radius:5px;height:90px;\">\n    <div style=\"float: left; width:95%\">\n      <h2 style=\"color:#fff;margin: 0; font-size:1rem;font-weight:600;\"> GET YOUR REWARDS NOW! </h2>\n      <p style=\"color:#414042;margin-top:.5rem;font-size:.75rem;\">\n        Use your points to get the most useful rewards. \n      </p>\n    </div>\n    <!-- <div style=\"float: right; width:5%\">\n      <img src=\"./assets/icon/Vector.png\">\n    </div> -->\n    <img src=\"./assets/icon/award.png\" style=\"    position: absolute;\n    right: -4%;\n    bottom: -38%;\">\n  </div>\n  <br><br><br><br><br><br><br><br>\n\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_reward_icon-level_icon-level_module_ts.js.map