"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_meal-pref-page_meal-pref-page_module_ts"],{

/***/ 3396:
/*!****************************************************************************!*\
  !*** ./src/app/components/meal-pref-page/meal-pref-page-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPrefPagePageRoutingModule": () => (/* binding */ MealPrefPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _meal_pref_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-pref-page.page */ 52870);




const routes = [
    {
        path: '',
        component: _meal_pref_page_page__WEBPACK_IMPORTED_MODULE_0__.MealPrefPagePage
    }
];
let MealPrefPagePageRoutingModule = class MealPrefPagePageRoutingModule {
};
MealPrefPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MealPrefPagePageRoutingModule);



/***/ }),

/***/ 31793:
/*!********************************************************************!*\
  !*** ./src/app/components/meal-pref-page/meal-pref-page.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPrefPagePageModule": () => (/* binding */ MealPrefPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _meal_pref_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-pref-page-routing.module */ 3396);
/* harmony import */ var _meal_pref_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-pref-page.page */ 52870);
/* harmony import */ var _meal_pref_meal_pref_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meal-pref/meal-pref.component */ 5946);







// import { ComponentsModule } from '../components.module';

let MealPrefPagePageModule = class MealPrefPagePageModule {
};
MealPrefPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _meal_pref_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealPrefPagePageRoutingModule
        ],
        declarations: [_meal_pref_page_page__WEBPACK_IMPORTED_MODULE_1__.MealPrefPagePage, _meal_pref_meal_pref_component__WEBPACK_IMPORTED_MODULE_2__.MealPrefComponent],
        exports: [_meal_pref_meal_pref_component__WEBPACK_IMPORTED_MODULE_2__.MealPrefComponent]
    })
], MealPrefPagePageModule);



/***/ }),

/***/ 52870:
/*!******************************************************************!*\
  !*** ./src/app/components/meal-pref-page/meal-pref-page.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPrefPagePage": () => (/* binding */ MealPrefPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _meal_pref_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-pref-page.page.html?ngResource */ 49107);
/* harmony import */ var _meal_pref_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-pref-page.page.scss?ngResource */ 70792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ 66475);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);









let MealPrefPagePage = class MealPrefPagePage {
    constructor(router, appServ, navCtrl, storage, utilities) {
        this.router = router;
        this.appServ = appServ;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.utilities = utilities;
        this.choice = "2";
        this.choices = [{ index: "2", name: "Breakfast", time: "10:00" }, { index: "4", name: "Lunch", time: "13:30" }, { index: "6", name: "Snacks", time: "17:00" }, { index: "7", name: "Dinner", time: "19:30" }];
        this.selectedItem = "Veg";
        this.foodPref = "Veg";
    }
    ngOnInit() {
        this.getEatFitCat();
    }
    selectedPref(item, fit) {
        this.selectedItemObj = fit;
        this.choiceSelection = item;
        localStorage.setItem("selectedItem", JSON.stringify(this.selectedItemObj));
    }
    fiterItem() {
        console.log(this.choice, this.selectedItem);
        this.totalItems = this.fit.filter(item => {
            return (item.slot_id.filter(slotItem => {
                console.log("itest", slotItem, this.selectedItem, item.Veg_nonveg, this.choice);
                return Number(slotItem) === Number(this.choice);
            }).length > 0 && item.Veg_nonveg === this.selectedItem);
        });
        console.log(this.totalItems);
    }
    selectFootPref(item) {
        console.log("item", item);
        this.selectedItem = item;
        this.fiterItem();
        this.foodPref = item;
    }
    selectSlot(event) {
        console.log(event.target.value, this.choice);
        this.fiterItem();
    }
    getEatFitCat() {
        this.appServ.eatFit().subscribe(res => {
            console.log("tttttttttt:-", res);
            this.fit = res.documents;
            this.totalItems = res.documents;
            this.fiterItem();
        });
    }
    postMealPref() {
        const payload = {
            "slotID": this.selectedItemObj?.slot_id,
            "categoryID": this.selectedItemObj?.category_id,
            "imageId": this.selectedItemObj?.image_id
        };
        this.appServ.eatFitUpdate(payload).subscribe(res => {
            console.log("update:-", res);
            this.storage.set("pendingPage", "/final-boarding");
            this.navCtrl.navigateForward(["final-boarding"]);
        });
    }
    goNext() {
        if (this.choiceSelection !== null && this.choiceSelection !== undefined) {
            const filteredChoices = this.choices.filter(item => {
                return item.index === this.choice;
            });
            localStorage.setItem("slotChoice", JSON.stringify(filteredChoices[0]));
            localStorage.setItem("likeFood", this.selectedItem?.toString());
            this.postMealPref();
        }
        else {
            this.utilities.presentAlert("Please select atleast one item");
        }
    }
    back() {
        localStorage.setItem("slotChoice", "");
        localStorage.setItem("likeFood", "");
        this.storage.set("pendingPage", "/boarding5");
        this.router.navigate(["/boarding5"]);
    }
};
MealPrefPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES }
];
MealPrefPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-meal-pref-page',
        template: _meal_pref_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_meal_pref_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MealPrefPagePage);



/***/ }),

/***/ 5946:
/*!*************************************************************!*\
  !*** ./src/app/components/meal-pref/meal-pref.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPrefComponent": () => (/* binding */ MealPrefComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _meal_pref_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-pref.component.html?ngResource */ 6053);
/* harmony import */ var _meal_pref_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-pref.component.scss?ngResource */ 8638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let MealPrefComponent = class MealPrefComponent {
    constructor(router) {
        this.router = router;
        this.documents = [];
        this.slots = 1;
        this.selectedIndex = new Array(1);
        this.foodPref = 'Veg';
    }
    ngOnInit() {
        console.log("documents", this.documents);
        this.documents = this.documents.filter(item => {
            return (item.slots === this.slots && item.Veg_nonveg === this.foodPref);
        });
    }
    ngAfterViewInit() {
    }
    selectedPref(item) {
        this.selectedItem = this.documents[item];
        this.choice = item;
        console.log("index", item, this.choice);
    }
    goNext() {
        localStorage.setItem("selectedItem", JSON.stringify(this.selectedItem));
        this.router.navigate(["final-boarding"]);
    }
    back() { }
};
MealPrefComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MealPrefComponent.propDecorators = {
    documents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    foodPref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MealPrefComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-meal-pref',
        template: _meal_pref_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_meal_pref_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MealPrefComponent);



/***/ }),

/***/ 70792:
/*!*******************************************************************************!*\
  !*** ./src/app/components/meal-pref-page/meal-pref-page.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --offset-bottom: -5.5rem !important;\n}\nion-content .meal-pref-component .-box-area {\n  content: \"\";\n  height: 100%;\n  background: #fff;\n  position: relative;\n  width: 48%;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n}\nion-content .meal-pref-component .-box-area .calori {\n  position: absolute;\n  left: 0;\n  bottom: -0.2rem;\n  color: #333333;\n  font-size: 0.751rem;\n  font-weight: 500;\n}\nion-content .meal-pref-component .-box {\n  width: 97%;\n  border-radius: 10px;\n  background: #fff;\n  position: relative;\n}\nion-content .meal-pref-component .-box .name {\n  position: absolute;\n  left: 1rem;\n  top: 0.5rem;\n}\nion-content .meal-pref-component .-box img {\n  border-radius: 10px;\n}\nion-content .meal-pref-component .-border {\n  border: 3px solid var(--theme-color);\n}\nion-content .meal-pref-component .-left {\n  float: left;\n  clear: both;\n}\nion-content .meal-pref-component .-right {\n  float: right;\n}\nion-content .meal-pref-component ion-radio {\n  position: absolute;\n  right: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 5px;\n}\nion-content .meal-pref-component ion-radio[aria-checked=true] {\n  --color-checked:var(--white);\n  --background-checked: var(--theme-newButton);\n  border: 2px solid var(--theme-newButton);\n  height: 30px;\n  width: 30px;\n  border-radius: 5px;\n  background: var(--theme-newButton);\n}\n.meal-pref {\n  margin-top: 2rem;\n}\n.meal-pref ion-label {\n  font-size: 0.875rem;\n  font-family: var(--theme-newFont);\n}\n.meal-pref .q-font {\n  font-size: 0.851rem;\n  font-family: var(--theme-newFont);\n}\n.meal-pref ion-card {\n  box-shadow: none;\n  margin: 0;\n  padding: 1rem;\n  border-top-left-radius: 1.8rem;\n  border-top-right-radius: 1.8rem;\n}\n.meal-pref .go_btn_div {\n  position: relative;\n  width: 100%;\n}\n.meal-pref .go_btn_div ion-button {\n  height: 50px;\n  padding: 10px;\n}\n.meal-pref .go_btn {\n  height: 50px;\n  width: 70%;\n}\n.meal-pref .go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n.meal-pref .back_btn {\n  height: 50px;\n  width: 70%;\n}\n.meal-pref .back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--theme-newButton);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n.meal-pref .radio_div {\n  margin: 0px 20px;\n}\n.meal-pref .radio_div ion-radio-group {\n  background: #FAFAFA;\n}\n.meal-pref .radio_div ion-item {\n  --background: #FAFAFA;\n}\n.meal-pref .radio_btn_div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.meal-pref .radio_btn_div ion-radio {\n  --color:transparent;\n  border: 2px solid var(--theme-newButton);\n  height: 20px;\n  width: 20px;\n  border-radius: 10px;\n  margin-right: 10px;\n}\n.meal-pref .radio_btn_div ion-radio[aria-checked=true] {\n  --color-checked:var(--white);\n  border: 2px solid var(--theme-newButton);\n  height: 20px;\n  width: 20px;\n  border-radius: 10px;\n  background: var(--theme-newButton);\n}\n.meal-pref .footer {\n  position: fixed;\n  width: 100%;\n  bottom: 1.5rem;\n}\n.meal-pref .footer .go_btn_div1 {\n  margin-top: 50px;\n}\n.meal-pref .footer .go_btn1 {\n  height: 50px;\n  width: 80%;\n}\n.meal-pref .footer .go_btn1::part(native) {\n  --background: var(--theme-newButton);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--white);\n  font-family: var(--theme-newFont);\n}\n.meal-pref .footer .back_btn1 {\n  height: 50px;\n  width: 80%;\n}\n.meal-pref .footer .back_btn1::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--theme-newButton);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtcHJlZi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7QUFFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQVo7QUFDWTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNoQjtBQUVRO0VBRUksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURaO0FBR1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRGhCO0FBSVk7RUFDSSxtQkFBQTtBQUZoQjtBQU1RO0VBQ0ksb0NBQUE7QUFKWjtBQU1RO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFKWjtBQU1RO0VBQ0ksWUFBQTtBQUpaO0FBUVE7RUFDQyxrQkFBQTtFQUNDLFFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTlo7QUFTVztFQUNDLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVBaO0FBWUE7RUFDSSxnQkFBQTtBQVRKO0FBVUk7RUFDSSxtQkFBQTtFQUNBLGlDQUFBO0FBUlI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EsaUNBQUE7QUFSUjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0osK0JBQUE7QUFUSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBVEo7QUFXSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBVE47QUFhQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBWEo7QUFZSTtFQUNJLDZDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBRUEsaUNBQUE7QUFYUjtBQWVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFiSjtBQWNJO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBWlI7QUFnQkE7RUFDSSxnQkFBQTtBQWRKO0FBZUk7RUFDSSxtQkFBQTtBQWJSO0FBZUk7RUFDSSxxQkFBQTtBQWJSO0FBbUJBO0VBQ0csYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0MsNkJBQUE7QUFqQko7QUFvQkc7RUFDQyxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbEJKO0FBc0JHO0VBQ0MsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQXBCSjtBQXlCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXZCSjtBQXdCQTtFQUNJLGdCQUFBO0FBdEJKO0FBeUJBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUF2Qko7QUF3Qkk7RUFDSSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBdEJSO0FBNEJBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUExQko7QUEyQkk7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUF6QlIiLCJmaWxlIjoibWVhbC1wcmVmLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1vZmZzZXQtYm90dG9tOiAtNS41cmVtICFpbXBvcnRhbnQ7XG5cbiAgICAubWVhbC1wcmVmLWNvbXBvbmVudHtcbiAgICAgICAgLi1ib3gtYXJlYXtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7IFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgLmNhbG9yaXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0uMnJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1MXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC4tYm94e1xuICAgICAgICAgICAgLy8gYm9yZGVyOjNweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuLWJvcmRlcntcbiAgICAgICAgICAgIGJvcmRlcjozcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC4tbGVmdHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyBcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgICAgIC4tcmlnaHR7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7IFxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpb24tcmFkaW97XG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgaW9uLXJhZGlvW2FyaWEtY2hlY2tlZD1cInRydWVcIl17XG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6dmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLm1lYWwtcHJlZntcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgfVxuICAgIC5xLWZvbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg1MXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuXG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuOHJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS44cmVtO1xuICAgICAgIH1cbi5nb19idG5fZGl2e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGlvbi1idXR0b257XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbn1cblxuLmdvX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHJvZmlsZS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6dmFyKC0tYnV0dG9uLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICB9XG59XG5cbi5iYWNrX2J0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pOztcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgfVxufVxuXG4ucmFkaW9fZGl2e1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIH1cbn1cblxuXG5cbi5yYWRpb19idG5fZGl2e1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xuXG4gIFxuICAgaW9uLXJhZGlve1xuICAgIC0tY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgfVxuXG4gICBpb24tcmFkaW9bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXXtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6dmFyKC0td2hpdGUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgIH1cblxufVxuXG4uZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDEuNXJlbTtcbi5nb19idG5fZGl2MXtcbiAgICBtYXJnaW4tdG9wOjUwcHg7XG59XG5cbi5nb19idG4xe1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgICY6OnBhcnQobmF0aXZlKXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICB9XG59XG5cblxuXG4uYmFja19idG4xe1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgICY6OnBhcnQobmF0aXZlKXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgICB9XG59XG59XG5cblxufSJdfQ== */";

/***/ }),

/***/ 8638:
/*!**************************************************************************!*\
  !*** ./src/app/components/meal-pref/meal-pref.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".meal-pref-component .-box-area {\n  content: \"\";\n  height: 100%;\n  background: #fff;\n  position: relative;\n  width: 48%;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n}\n.meal-pref-component .-box-area .calori {\n  position: absolute;\n  left: 0;\n  bottom: -0.2rem;\n  color: #333333;\n  font-size: 0.751rem;\n  font-weight: 500;\n}\n.meal-pref-component .-box {\n  width: 97%;\n  border-radius: 10px;\n  background: #fff;\n  position: relative;\n}\n.meal-pref-component .-box .name {\n  position: absolute;\n  left: 1rem;\n  top: 0.5rem;\n}\n.meal-pref-component .-box img {\n  border-radius: 10px;\n}\n.meal-pref-component .-border {\n  border: 3px solid var(--theme-color);\n}\n.meal-pref-component .-left {\n  float: left;\n  clear: both;\n}\n.meal-pref-component .-right {\n  float: right;\n}\n.meal-pref-component ion-radio {\n  position: absolute;\n  right: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 5px;\n}\n.meal-pref-component ion-radio[aria-checked=true] {\n  --color-checked:var(--white);\n  --background-checked: var(--theme-newButton);\n  border: 2px solid var(--theme-newButton);\n  height: 30px;\n  width: 30px;\n  border-radius: 5px;\n  background: var(--theme-newButton);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtcHJlZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBRUk7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFEWjtBQUlRO0VBQ0ksbUJBQUE7QUFGWjtBQU1JO0VBQ0ksb0NBQUE7QUFKUjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFKUjtBQU1JO0VBQ0ksWUFBQTtBQUpSO0FBUUk7RUFDQyxrQkFBQTtFQUNDLFFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTlI7QUFTTztFQUNDLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVBSIiwiZmlsZSI6Im1lYWwtcHJlZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWFsLXByZWYtY29tcG9uZW50e1xuICAgIC4tYm94LWFyZWF7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBoZWlnaHQ6MTAwJTsgXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAuY2Fsb3Jpe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogLS4ycmVtO1xuICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1MXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLi1ib3h7XG4gICAgICAgIC8vIGJvcmRlcjozcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIC4tYm9yZGVye1xuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICB9XG4gICAgLi1sZWZ0e1xuICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgICAuLXJpZ2h0e1xuICAgICAgICBmbG9hdDogcmlnaHQ7IFxuICAgICAgIFxuICAgIH1cblxuICAgIGlvbi1yYWRpb3tcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICB9XG4gICAgXG4gICAgICAgaW9uLXJhZGlvW2FyaWEtY2hlY2tlZD1cInRydWVcIl17XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDp2YXIoLS13aGl0ZSk7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgICAgfVxufVxuIl19 */";

/***/ }),

/***/ 49107:
/*!*******************************************************************************!*\
  !*** ./src/app/components/meal-pref-page/meal-pref-page.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>meal-pref-page</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content style=\"--background:#0A1F5B;\">\n  <div class=\"meal-pref\">\n    <ion-card style=\"padding-bottom: 6rem;\">\n      <ion-card-component>\n        <br>\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <span class=\"q-font\">\n              For which of the slots you’ll prefer Eat Fit?\n            </span>\n          </ion-col>\n        </ion-row><br>\n        <ion-row>\n          <ion-col class=\"ion-text-left radio_btn_div\" size=\"12\" style=\"padding: 0;\">\n            <ion-radio-group mode=\"md\" style=\"    width: 90%;\"\n            [(ngModel)]=\"choice\" (ionChange)=\"selectSlot($event)\">\n            <ion-row>\n              <ion-col class=\"ion-text-left\" size=\"6\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-radio value=\"2\" checked=\"true\"></ion-radio>\n                  <ion-label>Breakfat</ion-label>\n              </ion-item>\n              </ion-col>\n              <ion-col class=\"ion-text-left\" size=\"6\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\" >\n                  <ion-radio value=\"4\" ></ion-radio>\n                  <ion-label>Lunch</ion-label>\n              </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-text-left\" size=\"6\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\" >\n                  <ion-radio value=\"6\" ></ion-radio>\n                  <ion-label>Snacks</ion-label>\n              </ion-item>\n              </ion-col >\n              <ion-col class=\"ion-text-left\" size=\"6\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-radio value=\"7\" ></ion-radio>\n                  <ion-label>Dinner</ion-label>\n              </ion-item>\n              </ion-col>\n            </ion-row>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row><br>\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <span class=\"q-font\">\n              Please select the preferred meal for lunch\n            </span>\n          </ion-col>\n        </ion-row><br>\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <div class=\"go_btn_div\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"3\" class=\"ion-text-left\">\n                    <ion-button\n                    style=\"    width: 80px;\n                    padding-left: 0;\"\n                      class=\"back_btn\"\n                      fill=\"outline\"\n                      [ngClass]=\"{'go_btn':selectedItem==='Veg'}\"\n                      (click)=\"selectFootPref('Veg')\"\n                      >Veg</ion-button\n                    >\n                  </ion-col>\n                  <ion-col size=\"7\" class=\"ion-text-left\">\n                    <ion-button class=\"back_btn\" fill=\"outline\" [ngClass]=\"{'go_btn':selectedItem==='Non Veg'}\" (click)=\"selectFootPref('Non Veg')\"\n                      >Non Veg</ion-button\n                    >\n                  </ion-col>\n                  <ion-col size=\"2\"></ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div style=\"position: relative;\">\n          <!-- <app-meal-pref [documents]=\"fit?.documents\" [slots]=\"choice\" [foodPref]=\"foodPref\"></app-meal-pref> -->\n          <div class=\"meal-pref-component\">\n            <br>\n            <ion-radio-group mode=\"ios\" (click)=\"selectedPref(index,fit)\" value=\"{{choiceSelection}}\"\n             *ngFor=\"let fit of totalItems; let index = index;\" >\n            <div class=\"-box-area -left\"  \n            [ngClass]=\"{'-left':(index+1)%2!==0, '-right':(index+1)%2===0}\">\n              <div class=\"-box\">\n                <ion-radio value=\"{{index}}\"></ion-radio>\n             <img src=\"{{fit?.image_id}}\" [ngClass]=\"{'-border':choiceSelection===index}\">\n             </div>\n             <span class=\"calori\">{{fit?.calories_range}}</span>\n            </div>\n          </ion-radio-group>\n          </div> \n          \n        </div>\n      </ion-card-component>\n    </ion-card>\n   \n    <div class=\"footer\">\n      <div class=\"go_btn_div1\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button\n                class=\"back_btn1\"\n                shape=\"round\"\n                fill=\"outline\"\n                (click)=\"back()\"\n                >Cancel</ion-button\n              >\n            </ion-col>\n            <ion-col size=\"6\" class=\"center\">\n              <ion-button class=\"go_btn1\" shape=\"round\" (click)=\"goNext()\"\n                >Good to go</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n";

/***/ }),

/***/ 6053:
/*!**************************************************************************!*\
  !*** ./src/app/components/meal-pref/meal-pref.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"meal-pref-component\">\n  <br>\n  <ion-radio-group mode=\"ios\" (click)=\"selectedPref(index)\" value=\"{{choice}}\"\n   *ngFor=\"let fit of documents; let index = index;\" >\n  <div class=\"-box-area -left\"  \n  [ngClass]=\"{'-left':(index+1)%2!==0, '-right':(index+1)%2===0}\">\n    <div class=\"-box\">\n      <ion-radio value=\"{{index}}\"></ion-radio>\n   <img src=\"{{fit?.image_id}}\" [ngClass]=\"{'-border':choice===index}\">\n   </div>\n   <span class=\"calori\">{{fit?.calories_range}}</span>\n  </div>\n</ion-radio-group>\n</div> \n";

/***/ })

}]);
//# sourceMappingURL=src_app_components_meal-pref-page_meal-pref-page_module_ts.js.map