"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search-auto_search-auto_module_ts"],{

/***/ 6034:
/*!***********************************************************!*\
  !*** ./src/app/search-auto/search-auto-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAutoPageRoutingModule": () => (/* binding */ SearchAutoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _search_auto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-auto.page */ 17897);




const routes = [
    {
        path: '',
        component: _search_auto_page__WEBPACK_IMPORTED_MODULE_0__.SearchAutoPage
    }
];
let SearchAutoPageRoutingModule = class SearchAutoPageRoutingModule {
};
SearchAutoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchAutoPageRoutingModule);



/***/ }),

/***/ 2528:
/*!***************************************************!*\
  !*** ./src/app/search-auto/search-auto.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAutoPageModule": () => (/* binding */ SearchAutoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _search_auto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-auto-routing.module */ 6034);
/* harmony import */ var _search_auto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-auto.page */ 17897);







let SearchAutoPageModule = class SearchAutoPageModule {
};
SearchAutoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_auto_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchAutoPageRoutingModule
        ],
        declarations: [_search_auto_page__WEBPACK_IMPORTED_MODULE_1__.SearchAutoPage]
    })
], SearchAutoPageModule);



/***/ }),

/***/ 17897:
/*!*************************************************!*\
  !*** ./src/app/search-auto/search-auto.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAutoPage": () => (/* binding */ SearchAutoPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _search_auto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-auto.page.html?ngResource */ 58275);
/* harmony import */ var _search_auto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-auto.page.scss?ngResource */ 20023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 70900);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/constants/constants */ 78073);
/* harmony import */ var _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alternate-diet/portion-count/portion-count.page */ 4637);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_utility_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility/utilities */ 29276);
/* harmony import */ var _broadcast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../broadcast.service */ 80097);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _selectslot_popup_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectslot-popup/selectslot-popup.page */ 25426);













let SearchAutoPage = class SearchAutoPage {
  constructor(appService, utilities, modalCtrl, navCtrl, broadcastService) {
    this.appService = appService;
    this.utilities = utilities;
    this.modalCtrl = modalCtrl;
    this.navCtrl = navCtrl;
    this.broadcastService = broadcastService;
    this.searchValue = "chilli";
    this.searchData = [];
    this.data = {};
    this.loaded = false;
    this.slot = false;
    this.totalCal = 0;
    this.moment = (moment__WEBPACK_IMPORTED_MODULE_8___default());
    this.parseFloat = parseFloat;
    this.Math = Math;
    this.image_URL = "";
    this.currentDateIndex = 0;
  }

  ngOnInit() {// this.searchAllApiData("",1);
  }

  searchAllApiData(searchValue, index) {
    setTimeout(() => {
      this.appService.searchAuto(searchValue).subscribe(res => {
        this.searchData = res["data"].foodItems;
        console.log("this.searchData", this.searchData);
      }, err => {
        console.log("err", err);
      });
    }, 3000);
  }

  addCal(d) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.slot) {
        const modal = yield _this.modalCtrl.create({
          component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_5__.PortionCountPage,
          cssClass: "portion_count",
          componentProps: {
            alterdata: _this.data,
            type: "add"
          },
          backdropDismiss: true,
          swipeToClose: true
        });
        yield modal.present();
        const modaldata = yield modal.onDidDismiss();
        const d = modaldata?.data;
        console.log(d);

        if (d) {
          const datas = {
            date: _core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.dietDate,
            foodCodeList: [{
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,
              foodSource: d.foodSource
            }],
            slot: Number(_this.slot),
            isUpdateDiet: true
          };
          console.log("datas", datas);

          _this.appService.postOptionFoodList1(datas).then(res => {
            console.log("food code update", res); // this.modalCtrl.dismiss({});
            // if (d?.imgType === "H") {

            _this.utilities.logEvent("onboarding_Click_search_whats_on_your_mind", {}); // } else


            _this.utilities.closeModal(); // this.messageSubject.next('reload');


            _this.broadcastService.boradcast("reload");

            _this.navCtrl.navigateForward(["/new-diet", {
              refresh: new Date().getTime()
            }]);
          }, err => {
            console.log(err);
          });
        }

        console.log("slot", _this.slot);
        return;
      }

      _this.data = d;
      console.log("TEST---", d);
      const modal = yield _this.modalCtrl.create({
        component: _selectslot_popup_selectslot_popup_page__WEBPACK_IMPORTED_MODULE_9__.SelectslotPopupPage,
        cssClass: "small-modal-slot",
        backdropDismiss: true,
        swipeToClose: true
      });
      yield modal.present();
      const modaldata = yield modal.onDidDismiss();
      const slot = modaldata?.data;
      _this.data.slot = slot.slot;

      if (slot) {
        const modal = yield _this.modalCtrl.create({
          component: _alternate_diet_portion_count_portion_count_page__WEBPACK_IMPORTED_MODULE_5__.PortionCountPage,
          cssClass: "portion_count",
          backdropDismiss: true,
          swipeToClose: true,
          componentProps: {
            alterdata: _this.data,
            type: "add"
          }
        });
        yield modal.present();
        const modaldata = yield modal.onDidDismiss();
        const d = modaldata?.data;

        if (d) {
          const datas = {
            date: _core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS.dietDate,
            foodCodeList: [{
              code: d._id,
              portion: Number(d.portion),
              eaten: 2,
              foodSource: d.foodSource
            }],
            slot: Number(slot.slot),
            isUpdateDiet: true
          };
          console.log("datas", datas);

          _this.appService.postOptionFoodList1(datas).then(res => {
            console.log("food code update", res); // this.modalCtrl.dismiss({});

            _this.utilities.closeModal();

            _this.broadcastService.boradcast("reload");

            _this.navCtrl.navigateForward(["/new-diet", {
              refresh: new Date().getTime()
            }]);
          }, err => {
            console.log(err);
          });
        }

        console.log("slot", slot);
      }
    })();
  }

};

SearchAutoPage.ctorParameters = () => [{
  type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: _core_utility_utilities__WEBPACK_IMPORTED_MODULE_6__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _broadcast_service__WEBPACK_IMPORTED_MODULE_7__.BroadcastService
}];

SearchAutoPage.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  loaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  slot: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }]
};
SearchAutoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-search-auto',
  template: _search_auto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_search_auto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SearchAutoPage);


/***/ }),

/***/ 20023:
/*!**************************************************************!*\
  !*** ./src/app/search-auto/search-auto.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".search-auto {\n  border-radius: 10px;\n  background: #f3f3f3;\n  display: flex;\n  align-items: center;\n  padding: 0.2rem 1rem;\n}\n\n.item-inner:ng-deep {\n  border-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1hdXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2gtYXV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWF1dG97XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBwYWRkaW5nOi4ycmVtIDFyZW07XG59XG5cbi5pdGVtLWlubmVyOm5nLWRlZXB7XG4gICAgYm9yZGVyLWNvbG9yOiNmZmY7XG59Il19 */";

/***/ }),

/***/ 58275:
/*!**************************************************************!*\
  !*** ./src/app/search-auto/search-auto.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>search-auto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-row style=\"margin:3rem 1rem;\">\n      <ion-col size=\"12\" class=\"ion-text-left\">\n      <div  class=\"search-auto\"> \n        <ion-icon name=\"search\" style=\"margin-right:1rem;\"></ion-icon>\n       <ion-input  [(ngModel)]=\"searchValue\"  placeholder=\"Search for Food\" style=\"font-size: .8rem;\"\n       (input)=\"searchAllApiData(searchValue,1)\"></ion-input>\n      </div> \n      </ion-col>\n    </ion-row>\n  </div>\n <ion-card style=\"margin: 0; box-shadow:none;\">\n  <ion-item *ngFor=\"let item of searchData; let ind=index;\" no-padding no-lines style=\"--border-color:#fff; height: 56px;\">\n    <ion-label slot=\"start\" style=\"font-size:.8rem;font-weight:400;line-height: 1.8;\">\n      <span>{{item.name}}</span><br>\n      <span style=\"color:#b4b4b4;\">{{item.portion}} {{item.measuring_unit}}</span>\n    </ion-label>\n    <div slot=\"end\" style=\"    vertical-align: middle;\n    display: inherit;\">\n  <ion-button class=\"btn\" style=\"--background: #FFC224;\n    color: #fff;\n    width: 120px;\n    padding: 0 .1rem;\" shape=\"round\">\n    <span style=\"font-size:1rem;\">{{item.Cal}} Kcal</span>\n  </ion-button>\n    <ion-icon name=\"add\" style=\"color:var(--theme-color);margin-left:.5rem;font-size:1.1rem;\"\n    (click)=\"addCal(item)\"></ion-icon>\n  </div>\n  </ion-item>\n\n </ion-card> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_search-auto_search-auto_module_ts.js.map