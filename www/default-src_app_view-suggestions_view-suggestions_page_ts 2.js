"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_view-suggestions_view-suggestions_page_ts"],{

/***/ 1802:
/*!***********************************************************!*\
  !*** ./src/app/view-suggestions/view-suggestions.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSuggestionsPage": () => (/* binding */ ViewSuggestionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _view_suggestions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-suggestions.page.html?ngResource */ 88080);
/* harmony import */ var _view_suggestions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-suggestions.page.scss?ngResource */ 23651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);








let ViewSuggestionsPage = class ViewSuggestionsPage {
    constructor(appServices, route, utility, modalCtrl) {
        this.appServices = appServices;
        this.route = route;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.isDetox = false;
        this.allData = {};
        this.diets = [];
        this.categoryList = [];
        this.currentTimedata = {};
        this.image_URL = "";
        this.allproducts = [];
        this.selectedCat = {};
        this.catWiseProduct = [];
        this.allRestaurant = [];
        this.allRestProduct = [];
        this.type = "";
        this.value = "";
        this.slot = "";
        this.dataType = "";
        this.mainProductData = [];
        this.loaded = true;
        this.dataTypeList = [
            { name: "V", isChecked: false, title: "Veg" },
            { name: "NV", isChecked: false, title: "Non Veg" },
            { name: "VE", isChecked: false, title: "Vegan" },
        ];
        this.platform = false;
        this.page = 1;
        this.currentdata = [];
    }
    ionViewWillEnter() {
        // this.route.queryParams.subscribe((res: any) => {
        if (this.type) {
            this.getAllProduct({ type: this.type, value: this.value });
            this.allRestaurant = [];
            if (this.type === "R") {
                this.getAllRestaurant();
            }
        }
        // });
    }
    ngOnInit() { }
    goBack() {
        this.modalCtrl.dismiss();
    }
    searchFood(e) {
        if (e) {
            if (this.type === "R") {
                this.allRestaurant = this.mainProductData.filter((f) => f.brand?.toLowerCase().includes(e.toLowerCase()) &&
                    f.foodType === (this.dataType !== "" ? this.dataType : f.foodType));
            }
            else if (this.type !== "R") {
                this.allRestaurant = this.mainProductData.filter((f) => f.Food?.toLowerCase().includes(e.toLowerCase()) &&
                    f.foodType === (this.dataType !== "" ? this.dataType : f.foodType));
            }
            else {
                if (this.dataType != "") {
                    this.allRestaurant = this.mainProductData.filter((f) => f.foodType === (this.dataType !== "" ? this.dataType : f.foodType));
                }
                else {
                    this.allRestaurant = this.mainProductData;
                }
            }
        }
    }
    filterDataType(e, data) {
        console.log(e);
        if (e) {
            this.dataTypeList.forEach((element) => {
                if (element.name !== data.name) {
                    element.isChecked = false;
                }
            });
            this.dataType = data.name;
            console.log(this.dataType);
            if (data.name === "V") {
                this.allRestaurant = this.mainProductData.filter((f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase() ||
                    f.foodType?.toLowerCase() === "ve");
            }
            else {
                this.allRestaurant = this.mainProductData.filter((f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase());
            }
        }
        else {
            this.dataType = "";
            this.allRestaurant = this.mainProductData;
        }
        console.log(this.allRestaurant);
    }
    getAllProduct(val) {
        this.appServices.getFoodSugesstions(val?.type).then((res) => {
            console.log("allproducts", res);
            if (res.code === "0000") {
                this.allproducts =
                    val?.type === "H"
                        ? res?.data?.homeBased
                        : val?.type === "P"
                            ? res?.data?.packaged
                            : res?.data?.restaurant;
                console.log(val);
                if (val?.type === "P") {
                    this.allproducts = this.allproducts.filter((f) => f.name === val.value);
                    console.log(this.allproducts);
                    this.selectedCat = this.allproducts[0]?.subCategory
                        ? this.allproducts[0]?.subCategory[0]
                        : this.allproducts[0];
                    console.log(this.selectedCat);
                    this.getAllRstaurantByCategory(val?.type, this.selectedCat?.category?.split("/").toString(), this.page);
                }
                if (val?.type === "H") {
                    this.selectedCat = this.allproducts.find((f) => f.name === val.value);
                    this.getAllRstaurantByCategory(val?.type, this.selectedCat?.category?.split("/").toString(), this.page);
                }
                console.log(this.allproducts);
            }
        });
    }
    getAllRestaurant() {
        this.loaded = true;
        this.appServices.getAllRstaurant(false).then((res) => {
            this.loaded = false;
            console.log(res);
            if (res.code === "0000") {
                this.allRestaurant = res?.dataList;
                this.mainProductData = res?.dataList;
                this.fiterDefault();
            }
        }, (err) => {
            this.loaded = false;
        });
    }
    fiterDefault() {
        if (this.dataType != "") {
            this.allRestaurant = this.mainProductData.filter((f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase());
        }
    }
    getCatWiseProduct(type, value) {
        this.loaded = true;
        this.appServices.getAllRstaurant(false, type, value).then((res) => {
            this.loaded = false;
            console.log(res);
            if (res.code === "0000") {
                this.allRestaurant = res?.dataList;
                this.mainProductData = res?.dataList;
            }
        }, (err) => {
            this.loaded = false;
        });
    }
    selectCat(cat) {
        this.search = "";
        this.selectedCat = cat;
        console.log(this.selectedCat);
        this.page = 1;
        this.allRestaurant = [];
        this.mainProductData = [];
        this.dataTypeList.forEach((f) => {
            f.isChecked = false;
        });
        if (this.selectedCat.type === "R") {
            this.getCatWiseProduct("restrCategory", this.selectedCat.category);
        }
        else {
            this.getAllRstaurantByCategory(this.type, this.selectedCat?.category?.split("/").toString(), this.page);
        }
    }
    getAllRstaurantByCategory(type, value, page) {
        if (page === 1) {
            this.allRestaurant = [];
            this.mainProductData = [];
        }
        this.loaded = true;
        this.appServices.getAllRstaurantByCategory(type, value, page).then((res) => {
            console.log(type, value, page);
            this.loaded = false;
            console.log(res);
            if (res.code === "0000") {
                res?.dataList?.forEach((element) => {
                    element.imgType = "H";
                });
                this.currentdata = res?.dataList;
                if (type != "H") {
                    this.mainProductData = this.mainProductData.concat(this.currentdata);
                }
                else {
                    this.mainProductData = this.currentdata;
                }
                this.allRestaurant = this.mainProductData;
                // this.mainProductData = res?.dataList;
                console.log(this.allRestaurant);
            }
        }, (err) => {
            this.loaded = false;
        });
    }
    onIonInfinite(event) {
        console.log("event", event, this.search);
        if (this.search === "") {
            this.page = this.page + 1;
            this.getAllRstaurantByCategory(this.type, this.selectedCat?.category?.split("/").toString(), this.page);
            console.log(event);
            setTimeout(() => {
                event.target.complete();
            }, 500);
        }
    }
};
ViewSuggestionsPage.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_3__.UTILITIES },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ViewSuggestionsPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ViewSuggestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-view-suggestions",
        template: _view_suggestions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_suggestions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewSuggestionsPage);



/***/ }),

/***/ 23651:
/*!************************************************************************!*\
  !*** ./src/app/view-suggestions/view-suggestions.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".back_btn {\n  color: black;\n  font-family: var(--theme-newFont);\n  font-size: var(--regularM-font);\n  text-transform: none;\n}\n.back_btn ion-icon {\n  color: var(--theme-color);\n}\n.ion_content_div {\n  background: var(--theme-newHeader);\n  min-height: 100%;\n}\n.close {\n  position: absolute;\n  right: 25px;\n  font-size: 35px;\n  color: var(--theme-color);\n  background: white;\n  border-radius: 100%;\n  z-index: 9999;\n}\n.main_div {\n  min-height: 100%;\n  background: var(--white);\n  border-radius: 40px 40px 0px 0px;\n  padding-Top: 30px;\n  position: relative;\n}\nion-header {\n  background: white;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1607843137) !important;\n  margin-top: 50px;\n}\nion-header ion-toolbar {\n  --background: white;\n  padding-top: 0 !important;\n  top: 1.5rem;\n}\nion-header ion-toolbar ion-title {\n  color: var(--black);\n  font-size: 22px;\n  font-family: var(--theme-newFont);\n  font-weight: 700;\n  padding: 0%;\n}\nion-header ion-toolbar .searchbar {\n  border: 1px solid var(--theme-color);\n  color: var(--black);\n  font-size: var(--small-font);\n  padding: 0%;\n  --border-radius: 25px;\n  border-radius: 25px;\n  --box-shadow: none;\n  margin-top: 10px;\n}\nion-header ion-toolbar .filter_div {\n  margin: 10px 0px;\n}\nion-header ion-toolbar .filter_div ion-button::part(native) {\n  border-color: var(--theme-color);\n  text-transform: none;\n  color: var(--black);\n  font-size: var(--small-font);\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 30px;\n  border-width: 1px;\n}\n.index_card {\n  height: 100%;\n  width: 100%;\n  margin: 0%;\n}\n.main_col {\n  height: 100%;\n}\n.avtar_div {\n  padding-top: 10px;\n}\n.avtar_div2 {\n  width: 100%;\n  margin-right: 20px;\n}\n.avtar {\n  width: 50px;\n  height: 50px;\n  z-index: 1;\n}\n.meal_cal {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 300;\n}\n.alter_name {\n  width: 70px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0px 20px;\n}\n.main_avtar_div {\n  width: 100%;\n  position: relative;\n}\n.activeCat {\n  position: absolute;\n  background: #b4e3e3;\n  height: 60px;\n  border-radius: 0px 100px 100px 0px;\n  width: 80%;\n  left: 0px;\n}\n.tgl_title {\n  font-size: var(--xsmall-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n.VE {\n  height: 10px;\n  width: 40px;\n  padding: 0px;\n  --handle-width: 15px;\n  --handle-height: 15px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  overflow: visible;\n  contain: none;\n}\n.VE::part(handle) {\n  background: var(--green);\n  border-radius: 4px;\n  box-shadow: none;\n}\n.VE::part(track) {\n  background: #ddd;\n}\n.VE.toggle-checked::part(track) {\n  background: var(--green);\n}\n.V {\n  height: 10px;\n  width: 40px;\n  padding: 0px;\n  --handle-width: 15px;\n  --handle-height: 15px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  overflow: visible;\n  contain: none;\n}\n.V::part(handle) {\n  background: #94ea0a;\n  border-radius: 4px;\n  box-shadow: none;\n}\n.V::part(track) {\n  background: #ddd;\n}\n.V.toggle-checked::part(track) {\n  background: #94ea0a;\n}\n.NV {\n  height: 10px;\n  width: 40px;\n  padding: 0px;\n  --handle-width: 15px;\n  --handle-height: 15px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  overflow: visible;\n  contain: none;\n}\n.NV::part(handle) {\n  background: var(--red);\n  border-radius: 4px;\n  box-shadow: none;\n}\n.NV::part(track) {\n  background: #ddd;\n}\n.NV.toggle-checked::part(track) {\n  background: var(--red);\n}\n.change2 {\n  color: #707070;\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  font-weight: 400;\n  margin-top: 0%;\n  margin-bottom: 5px;\n}\n.no_data_title {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n.no_data_subtitle {\n  font-size: var(--small-font);\n  margin: 0px;\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctc3VnZ2VzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtBQUVKO0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUlBO0VBQ0UsaUJBQUE7RUFDQSw4REFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQU47QUFFSTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFOO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBR1E7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFEVjtBQVFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7QUFMRjtBQVFBO0VBQ0UsaUJBQUE7QUFMRjtBQVVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBUEY7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQVBGO0FBVUE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBUEY7QUFXQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVJGO0FBV0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBUkY7QUFXQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJGO0FBV0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQVJGO0FBVUU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVdBO0VBQ0UsZ0JBQUE7QUFSRjtBQVVBO0VBQ0Usd0JBQUE7QUFQRjtBQVVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFQRjtBQVFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNFLGdCQUFBO0FBTkY7QUFRQTtFQUNFLG1CQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBTEY7QUFNRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpKO0FBT0E7RUFDRSxnQkFBQTtBQUpGO0FBT0E7RUFDRSxzQkFBQTtBQUpGO0FBT0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkY7QUFPQTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJ2aWV3LXN1Z2dlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2J0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIH1cbn1cblxuLmlvbl9jb250ZW50X2RpdntcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgLy8gdG9wOiAtMTVweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLm1haW5fZGl2IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggMHB4IDBweDtcbiAgcGFkZGluZy1Ub3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICBwYWRkaW5nOiA1MHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggIzAwMDAwMDI5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICB0b3A6MS41cmVtO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDAlO1xuICAgIH1cbiAgICAuc2VhcmNoYmFyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgcGFkZGluZzogMCU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmZpbHRlcl9kaXYge1xuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW5kZXhfY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCU7XG59XG5cbi5tYWluX2NvbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF2dGFyX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gIC8vIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hdnRhcl9kaXYyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmF2dGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLm1lYWxfY2FsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLy8gY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLmFsdGVyX25hbWUge1xuICB3aWR0aDogNzBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHg7XG59XG5cbi5tYWluX2F2dGFyX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3RpdmVDYXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNiNGUzZTM7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogMHB4O1xufVxuXG4udGdsX3RpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbi5WRSB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS1oYW5kbGUtd2lkdGg6IDE1cHg7XG4gIC0taGFuZGxlLWhlaWdodDogMTVweDtcbiAgLS1oYW5kbGUtbWF4LWhlaWdodDogYXV0bztcbiAgLS1oYW5kbGUtc3BhY2luZzogNnB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY29udGFpbjogbm9uZTtcblxuICAmOjpwYXJ0KGhhbmRsZSkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuLlZFOjpwYXJ0KHRyYWNrKSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG4uVkUudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xufVxuXG4uViB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS1oYW5kbGUtd2lkdGg6IDE1cHg7XG4gIC0taGFuZGxlLWhlaWdodDogMTVweDtcbiAgLS1oYW5kbGUtbWF4LWhlaWdodDogYXV0bztcbiAgLS1oYW5kbGUtc3BhY2luZzogNnB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY29udGFpbjogbm9uZTtcbiAgJjo6cGFydChoYW5kbGUpIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTRlYTBhO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4uVjo6cGFydCh0cmFjaykge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuLlYudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgYmFja2dyb3VuZDogIzk0ZWEwYTtcbn1cblxuLk5WIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWhhbmRsZS13aWR0aDogMTVweDtcbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNXB4O1xuICAtLWhhbmRsZS1tYXgtaGVpZ2h0OiBhdXRvO1xuICAtLWhhbmRsZS1zcGFjaW5nOiA2cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjb250YWluOiBub25lO1xuICAmOjpwYXJ0KGhhbmRsZSkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbi5OVjo6cGFydCh0cmFjaykge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4uTlYudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbn1cblxuLmNoYW5nZTIge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubm9fZGF0YV90aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub19kYXRhX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";

/***/ }),

/***/ 88080:
/*!************************************************************************!*\
  !*** ./src/app/view-suggestions/view-suggestions.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div class=\"ion_content_div\">\n  <div\n    class=\"main_div\"\n    [ngStyle]=\"{'border-radius':platform ?'0px':'40px 40px 0px 0px'}\"\n  > -->\n<ion-icon\n  class=\"close\"\n  name=\"close-circle\"\n  (click)=\"goBack()\"\n  [ngStyle]=\"{'top':platform ?'3rem':'3rem'}\"\n></ion-icon>\n<ion-header>\n  <!-- <ion-button fill=\"clear\" class=\"back_btn\" (click)=\"goBack()\"\n    ><ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon\n    >Back</ion-button\n  > -->\n  <div style=\"margin: 1rem 5%\">\n    <ion-toolbar>\n      <ion-title style=\"position: relative;text-align: left;\">{{selectedCat?.name}}</ion-title>\n      <p class=\"change2\">\n        {{type === 'H'? 'Home based':type === 'P'?'Groceries':'Restaurant'}}\n      </p>\n      <ion-searchbar\n      mode=\"md\" \n        class=\"searchbar\"\n        [(ngModel)]=\"search\"\n        (ngModelChange)=\"searchFood($event)\"\n      ></ion-searchbar>\n      <div class=\"left filter_div\">\n        <!-- <div *ngFor=\"let t of dataTypeList\" style=\"width: 60px\">\n          <ion-toggle\n            [ngClass]=\"t.name\"\n            [(ngModel)]=\"t.isChecked\"\n            (ngModelChange)=\"filterDataType($event,t)\"\n            [disabled]=\"allRestaurant.length === 0 && !this.dataType\"\n          ></ion-toggle>\n          <p class=\"tgl_title\">{{t.title}}</p>\n        </div> -->\n\n        <!-- <ion-button fill=\"outline\" shape=\"round\"\n          ><ion-icon\n            slot=\"end\"\n            src=\"../../../../assets/newImages/filter.svg\"\n          ></ion-icon\n          >Filter</ion-button\n        >\n\n        <ion-button fill=\"outline\" shape=\"round\"\n          ><ion-icon\n            slot=\"end\"\n            src=\"../../../../assets/newImages/sort.svg\"\n          ></ion-icon\n          >Sort by</ion-button\n        > -->\n      </div>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"h_100\">\n    <ion-grid class=\"pad_0 h_100\">\n      <ion-row class=\"h_100\">\n        <ion-col size=\"3\" class=\"pad_0 h_100\">\n          <ion-card class=\"index_card\">\n            <div class=\"avtar_div scroll_y h_100\">\n              <div\n                class=\"left flex_col avtar_div2\"\n                *ngFor=\"let hb of allproducts\"\n              >\n                <div\n                  class=\"main_avtar_div center\"\n                  *ngIf=\"!hb?.subCategory\"\n                  (click)=\"selectCat(hb)\"\n                >\n                  <div class=\"activeCat\" *ngIf=\"selectedCat === hb\"></div>\n                  <ion-avatar class=\"avtar\">\n                    <img\n                      src=\"{{hb?.imageId}}\"\n                      onerror=\"this.src='./assets/newImages/null.jpg';this.style='object-fit: contain'\"\n                    />\n                  </ion-avatar>\n                </div>\n\n                <p\n                  (click)=\"selectCat(hb)\"\n                  *ngIf=\"!hb?.subCategory\"\n                  class=\"meal_cal alter_name\"\n                  [ngStyle]=\"{'color':selectedCat === hb?'var(--theme-color)':'var(--black)'}\"\n                >\n                  {{hb?.name}}\n                </p>\n\n                <div\n                  class=\"center flex_col w_100\"\n                  *ngFor=\"let h of hb?.subCategory\"\n                  (click)=\"selectCat(h)\"\n                >\n                  <div class=\"main_avtar_div center\">\n                    <div class=\"activeCat\" *ngIf=\"selectedCat === h\"></div>\n                    <ion-avatar class=\"avtar\">\n                      <img\n                        src=\"{{h?.imageId}}\"\n                        onerror=\"this.src='./assets/newImages/null.jpg';this.style='object-fit: contain'\"\n                      />\n                    </ion-avatar>\n                  </div>\n\n                  <p\n                    class=\"meal_cal alter_name\"\n                    [ngStyle]=\"{'color':selectedCat === h?'var(--theme-color)':'var(--black)'}\"\n                  >\n                    {{h?.name}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"9\" class=\"h_100\">\n          <div class=\"index_card\">\n            <ion-content>\n              <!-- <div class=\"scroll_y h_100\"> -->\n              <div *ngIf=\"type !== 'R'\">\n                <div *ngIf=\"loaded\">\n                  <div style=\"padding: 5px 10px\" *ngFor=\"let t of [1,2,3,4,5]\">\n                    <app-filter-card [loaded]=\"loaded\"></app-filter-card>\n                  </div>\n                </div>\n\n                <div\n                  *ngFor=\"let d of allRestaurant;let i = index\"\n                  style=\"padding: 5px 10px\"\n                >\n                  <app-filter-card\n                    [data]=\"d\"\n                    [loaded]=\"loaded\"\n                    [slot]=\"slot\"\n                  ></app-filter-card>\n                </div>\n              </div>\n\n              <div *ngIf=\"allRestaurant?.length  === 0 && !loaded\">\n                <p class=\"no_data_title\">\"No data found\"</p>\n                <!-- <p class=\"no_data_subtitle\">Your slot is empty.</p>\n                <p class=\"no_data_subtitle\">\n                  Add something from the meal options.\n                </p> -->\n                <ion-img\n                  src=\"../../../../assets/newImages/no-meal.png\"\n                ></ion-img>\n              </div>\n\n              <ion-grid class=\"pad_0\" *ngIf=\"type==='R'\">\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let d of allRestaurant\">\n                    <app-restaurant-card\n                      [data]=\"d\"\n                      [slot]=\"slot\"\n                    ></app-restaurant-card>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- </div> -->\n              <!-- <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\n                <ion-infinite-scroll-content\n                  loadingText=\"Please wait...\"\n                  loadingSpinner=\"bubbles\"\n                ></ion-infinite-scroll-content>\n              </ion-infinite-scroll> -->\n            </ion-content>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<!-- </div>\n</div> -->\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_view-suggestions_view-suggestions_page_ts.js.map