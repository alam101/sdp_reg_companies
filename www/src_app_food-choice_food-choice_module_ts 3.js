"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_food-choice_food-choice_module_ts"],{

/***/ 23093:
/*!***********************************************************!*\
  !*** ./src/app/food-choice/food-choice-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodChoicePageRoutingModule": () => (/* binding */ FoodChoicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _food_choice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-choice.page */ 641);




const routes = [
    {
        path: '',
        component: _food_choice_page__WEBPACK_IMPORTED_MODULE_0__.FoodChoicePage
    }
];
let FoodChoicePageRoutingModule = class FoodChoicePageRoutingModule {
};
FoodChoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoodChoicePageRoutingModule);



/***/ }),

/***/ 41659:
/*!***************************************************!*\
  !*** ./src/app/food-choice/food-choice.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodChoicePageModule": () => (/* binding */ FoodChoicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _food_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-choice-routing.module */ 23093);
/* harmony import */ var _food_choice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-choice.page */ 641);







let FoodChoicePageModule = class FoodChoicePageModule {
};
FoodChoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _food_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodChoicePageRoutingModule
        ],
        declarations: [_food_choice_page__WEBPACK_IMPORTED_MODULE_1__.FoodChoicePage]
    })
], FoodChoicePageModule);



/***/ }),

/***/ 641:
/*!*************************************************!*\
  !*** ./src/app/food-choice/food-choice.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodChoicePage": () => (/* binding */ FoodChoicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _food_choice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-choice.page.html?ngResource */ 73219);
/* harmony import */ var _food_choice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-choice.page.scss?ngResource */ 28114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ 70900);





let FoodChoicePage = class FoodChoicePage {
    constructor(appService) {
        this.appService = appService;
        this.itemsPerPage = 15;
        this.currentPage = 1;
        this.foodItems = [
            { name: 'Brown Rice', cal: 109, selected: false },
            { name: 'Palak Dal', cal: 83, selected: false },
            { name: 'Beetroot Raita', cal: 66, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Brown Rice', cal: 109, selected: false },
            { name: 'Palak Dal', cal: 83, selected: false },
            { name: 'Beetroot Raita', cal: 66, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Brown Rice', cal: 109, selected: false },
            { name: 'Palak Dal', cal: 83, selected: false },
            { name: 'Beetroot Raita', cal: 66, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false },
            { name: 'Rajma Curry', cal: 116, selected: false },
            { name: 'Quinoa', cal: 222, selected: false },
            { name: 'Cucumber Tomato Salad', cal: 34, selected: false }
        ];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.appService
            .getDietPreference({ userId: 'tes101' })
            .then((res) => {
            this.personalise = JSON.parse(JSON.stringify(res)).personalise.sort(function (a, b) {
                return a.slots - b.slots;
            });
            console.log("this.personalise", this.personalise);
            // this.tempData = JSON.parse(JSON.stringify(this.personalise));
            // this.tempData.sort(function (a, b) {
            //   return a.slots - b.slots;
            // });
            // this.personaliseKeys = Object.keys(this.personalise);
            // this.progressData.in = 1;
            // this.progressData["length"] = this.personaliseKeys.length;
            // this.setCurrentPersonalise(this.currentPersonaliseIndex);
            // for (let index = 0; index < this.personalise.length; index++) {
            //   this.personaliseName.push(this.personalise[index].name);
            // }
        }, err => {
            console.log("error", err);
        });
    }
    get paginatedItems() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        return this.foodItems.slice(start, start + this.itemsPerPage);
    }
    toggleSelection(item) {
        item.selected = !item.selected;
    }
    get selectedItems() {
        return this.foodItems.filter(item => item.selected);
    }
    get totalPages() {
        return Math.ceil(this.foodItems.length / this.itemsPerPage);
    }
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
    goToNextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
};
FoodChoicePage.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
FoodChoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-food-choice',
        template: _food_choice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_food_choice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FoodChoicePage);



/***/ }),

/***/ 28114:
/*!**************************************************************!*\
  !*** ./src/app/food-choice/food-choice.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n\n.selected ion-card {\n  border: 2px solid #3880ff;\n}\n\n.item ion-card {\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));\n  gap: 10px;\n}\n\n.square-wrapper {\n  position: relative;\n  width: 100%;\n  padding-top: 100%; /* Makes it a square */\n}\n\n.square-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #f0f0f0;\n  border-radius: 10px;\n  text-align: center;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n}\n\n.square-content img {\n  width: 50%;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n\nh4 {\n  margin: 0;\n  font-size: 0.75rem;\n  position: absolute;\n  bottom: 1.5rem;\n}\n\nion-checkbox {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\np {\n  margin: 0.3rem;\n  position: absolute;\n  bottom: 0;\n}\n\nimg {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtY2hvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsMERBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQSxFQUFBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QUFIRjs7QUFXQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBVUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFTQTtFQUNRLGtCQUFBO0VBQ0osTUFBQTtFQUNBLFFBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFOSjs7QUFTQTtFQUNRLGtCQUFBO0VBQ0osTUFBQTtBQU5KIiwiZmlsZSI6ImZvb2QtY2hvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2VsZWN0ZWQgaW9uLWNhcmQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzg4MGZmO1xufVxuXG4uaXRlbSBpb24tY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8vIC5zZWxlY3RlZCB7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwJSwgMWZyKSk7XG4gIGdhcDogMTBweDtcbn1cblxuLnNxdWFyZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMCU7IC8qIE1ha2VzIGl0IGEgc3F1YXJlICovXG59XG5cbi5zcXVhcmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi8vIC5zcXVhcmUtY29udGVudC5zZWxlY3RlZCB7XG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkICMzODgwZmY7XG4vLyAgIGJhY2tncm91bmQ6ICNlMGYwZmY7XG4vLyB9XG5cbi5zcXVhcmUtY29udGVudCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5oNHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMS41cmVtO1xufVxuaW9uLWNoZWNrYm94e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG5we1xuICAgIG1hcmdpbjogLjNyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcblxufVxuaW1ne1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xufSJdfQ== */";

/***/ }),

/***/ 73219:
/*!**************************************************************!*\
  !*** ./src/app/food-choice/food-choice.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Food Selector</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n  <div class=\"grid-container\">\n    <div class=\"square-wrapper\" *ngFor=\"let item of paginatedItems\" (click)=\"toggleSelection(item)\">\n      <div class=\"square-content\" [class.selected]=\"item.selected\">\n        <img src=\"./assets/img/aim.png\" alt=\"{{item.name}}\" />\n        <h4>{{ item.name }}</h4>\n        <p>({{ item.cal }} Cal)</p>\n        <ion-checkbox [(ngModel)]=\"item.selected\" slot=\"end\"></ion-checkbox>\n      </div>\n    </div>\n  </div>\n</ion-grid>\n <div class=\"pagination\">\n  <ion-button [disabled]=\"currentPage === 1\" (click)=\"goToPreviousPage()\">Prev</ion-button>\n  <ion-button [disabled]=\"currentPage >= totalPages\" (click)=\"goToNextPage()\">Next</ion-button>\n</div>\n  <div class=\"selected\">\n    <h3>Selected Items:</h3>\n    <ul>\n      <li *ngFor=\"let item of selectedItems\">{{ item.name }} - {{ item.cal }} Cal</li>\n    </ul>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_food-choice_food-choice_module_ts.js.map