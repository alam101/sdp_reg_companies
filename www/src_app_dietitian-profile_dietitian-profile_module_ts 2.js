"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dietitian-profile_dietitian-profile_module_ts"],{

/***/ 70444:
/*!***********************************************************************!*\
  !*** ./src/app/dietitian-profile/dietitian-profile-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietitianProfilePageRoutingModule": () => (/* binding */ DietitianProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dietitian_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dietitian-profile.page */ 80723);




const routes = [
    {
        path: '',
        component: _dietitian_profile_page__WEBPACK_IMPORTED_MODULE_0__.DietitianProfilePage
    }
];
let DietitianProfilePageRoutingModule = class DietitianProfilePageRoutingModule {
};
DietitianProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietitianProfilePageRoutingModule);



/***/ }),

/***/ 48583:
/*!***************************************************************!*\
  !*** ./src/app/dietitian-profile/dietitian-profile.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietitianProfilePageModule": () => (/* binding */ DietitianProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dietitian_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dietitian-profile-routing.module */ 70444);
/* harmony import */ var _dietitian_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dietitian-profile.page */ 80723);







let DietitianProfilePageModule = class DietitianProfilePageModule {
};
DietitianProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dietitian_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietitianProfilePageRoutingModule
        ],
        declarations: [_dietitian_profile_page__WEBPACK_IMPORTED_MODULE_1__.DietitianProfilePage]
    })
], DietitianProfilePageModule);



/***/ }),

/***/ 80723:
/*!*************************************************************!*\
  !*** ./src/app/dietitian-profile/dietitian-profile.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietitianProfilePage": () => (/* binding */ DietitianProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dietitian_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dietitian-profile.page.html?ngResource */ 95105);
/* harmony import */ var _dietitian_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dietitian-profile.page.scss?ngResource */ 71267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _newBoarding_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newBoarding/app.service */ 49535);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let DietitianProfilePage = class DietitianProfilePage {
    constructor(router, appServices) {
        this.router = router;
        this.appServices = appServices;
        this.randomNumber = Number(Date.now()) * Math.random();
        this.dietitianRecord = [];
        this.skills = [];
        this.gender = "";
    }
    ngOnInit() {
        this.getProfile();
    }
    goto() {
        if (this.profileData["lifeStyle"]?.communities?.length > 0
            && this.profileData["lifeStyle"]?.foodType !== null
            && this.profileData["lifeStyle"]?.carb !== null && this.profileData["lifeStyle"]?.carb !== 0) {
            this.router.navigate(["/new-diet"], { queryParams: { params: Math.floor(this.randomNumber) } });
        }
        else {
            this.router.navigate(["/boarding1"], { queryParams: { params: Math.floor(this.randomNumber) } });
        }
    }
    getProfile() {
        this.appServices.getProfile().then(profileData => {
            this.profileData = profileData;
            this.getDietitianDetail(this.profileData.profile.email);
        });
    }
    getDietitianDetail(email) {
        this.appServices.getDietitianRecord(email).subscribe((res) => {
            console.log("response dietitian", res);
            this.dietitianRecord = res;
            this.skills = res.speciality.split(', ');
            this.gender = res.gender.toLowerCase();
        }, err => {
        });
    }
};
DietitianProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _newBoarding_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
DietitianProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dietitian-profile',
        template: _dietitian_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dietitian_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DietitianProfilePage);



/***/ }),

/***/ 71267:
/*!**************************************************************************!*\
  !*** ./src/app/dietitian-profile/dietitian-profile.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".dietitian-profile {\n  padding-bottom: 2rem;\n}\n.dietitian-profile ion-card {\n  box-shadow: 3px 4px 12px 4px #b3b3b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZXRpdGlhbi1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLG9DQUFBO0FBQ1IiLCJmaWxlIjoiZGlldGl0aWFuLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZXRpdGlhbi1wcm9maWxle1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuXG4gICAgaW9uLWNhcmR7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTJweCA0cHggI2IzYjNiMztcbiAgICB9XG5cbn0iXX0= */";

/***/ }),

/***/ 95105:
/*!**************************************************************************!*\
  !*** ./src/app/dietitian-profile/dietitian-profile.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n<div class=\"dietitian-profile\">\n  <div style=\"height: 25px;\n  border-bottom-left-radius:2rem;\n  border-bottom-right-radius:2rem; text-align:center;background:var(--theme-background);\">\n <!-- <img style=\"    width: 9%;\n    height: auto;\" src=\"./assets/img/login-logo.png\"> -->\n</div>\n<div style=\"padding: 10px;\">\n  <ion-row>\n    <ion-col>\n      <div style=\"float: left;width:60%;\"><br><br>\n        <span style=\"font-size: 1.5rem; color:#000;\">\n          I am <br>\n         <span style=\"font-weight:600;\"> {{dietitianRecord?.dietitianName}}</span>, <br>\n         <span style=\"white-space: nowrap;\"> your <span>{{dietitianRecord?.role}}</span></span>\n        </span>\n        <div style=\"font-family: sans-serif;margin-top:.5rem;font-size: 1.01rem; font-weight:200;color:#000;padding-top:.5rem;padding-bottom:.5rem;\">\n          Will help you in your Health Journey.\n        </div>\n      </div>\n      <div style=\"float: right;width:40%;text-align:end;\">\n        <img src=\"./assets/img/leaf.png\" style=\"text-align: right;\n    vertical-align: middle;\n    align-items: end;\n    display: ruby-text;width:152px;height:169px;right: -5px;\n    position: relative;\">\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n<div style=\"background: var(--theme-background); \nborder-top-left-radius:1.5rem; border-top-right-radius:1.5rem;\nmin-height: 170px;height:auto;position:relative;content: '';\nwidth:100%; display: inline-block;\n    display: inline-block; margin-top:3rem;\">\n\n  <img style=\"    width: 189px;\n    height: 193px;\n    position: absolute;\n    top: -50px;\n    margin: 0 auto !important;\n    left: 24%;\n    border-radius: 50%;\n    border: 2px solid #b3b3b3;\" src=\"https://nodeapi.smartdietplanner.com/api/getResFromPath/{{dietitianRecord?.image}}\">\n</div>\n <div style=\"padding: 10px;margin-top:.8rem\">\n  <div style=\"font-size: 1.5rem;color:#000;font-weight:600;\">Bio:</div><br>\n<div style=\"font-size: 1rem;font-weight:200;color:#000;font-family: sans-serif;\">\n\n  {{dietitianRecord.dietitianAbout}}\n  \n</div>\n </div>\n\n <div style=\"padding: 10px;margin-top:1rem;\">\n  <div style=\"font-size: 1.3rem;color:#000;font-weight:600;\">Key Skills:</div><br>\n<div style=\"font-size: 1rem;color:#000;\">\n  <ion-row style=\"font-size: 1rem;\">\n    <ion-col >\n      <div *ngFor=\"let skill of skills; let index=index;\" style=\"    margin-bottom: 1rem;\n    padding: .4rem 2rem;\n    width: 45%;\n    height: 32px;\n    float: left;\n    font-weight: 200;\n    border-radius: 1rem;\n    border: .5px solid #b3b3b3;\n    margin-right: 1rem;\n    font-family: sans-serif;\n    text-align: center;\">\n       {{skill}}\n       </div>\n    </ion-col>\n  </ion-row>\n</div>\n </div>\n <div style=\"background: rgba(245,239,153,40%); padding:1rem;\nborder-top-left-radius:1.5rem; border-top-right-radius:1.5rem;\nmin-height: 133px;height:auto;position:relative;content: '';width:100%; display: inline-block;\n    display: inline-block;margin-top:.6rem;\">\n    <div>\n      <b style=\"font-size: 1.1rem; font-weight:600;\">What will you get:</b><br><br>\n      <div style=\"font-size: 1rem; color:#000;font-family: sans-serif; font-weight:200;\">\n        Smart Diet plan with good many alternatives along with Macros, Nutri score and recipe details\n    \n      </div>\n    </div>\n  </div>\n  <div style=\"margin-top: 1rem;\">\n    <ion-row>\n      <ion-col>\n        <ion-card style=\"text-align: center;\n    border-radius: 1rem;\n    padding: .5rem;\n    color: #000;min-height:190px;height: 190px;    margin-left: 1rem;\">\n           <img src=\"./assets/img/homebased.png\" style=\"width:70px;height:67px;margin-top:.2rem;\">\n          \n           <div style=\"margin-top:1rem;\">\n            <div style=\"font-size: 1rem;font-weight:600;margin-top:.3rem;\">Home based</div>\n            <div style=\"font-size: .8rem;font-weight:200;margin-top:.8rem;font-family: sans-serif;\">\n            Healthy options with Macros n recipes\n            </div>\n           </div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align: center;\n    border-radius: 1rem;\n    padding: .5rem;\n    color: #000;min-height:190px;    height: 190px;    margin-right: 1rem;\">\n          <img src=\"./assets/img/alternatives.png\" style=\"width:90px;height:67px;margin-top:.2rem;\">\n          <br>\n          <div style=\"margin-top:1rem;\">\n            <div style=\"font-size: 1rem;font-weight:600;margin-top:.3rem\">Alternatives</div>\n            <div style=\"font-size: .8rem;font-weight:200;margin-top:.8rem;font-family: sans-serif;\">\n              Flexi diet plan with 1000s of alternatives\n            </div>\n           </div>\n       </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: .1rem;\">\n      <ion-col>\n        <ion-card style=\"text-align: center;\n    border-radius: 1rem;\n    padding: .5rem;\n    color: #000;min-height:190px;    height: 190px;    margin-left: 1rem;\">\n           <img src=\"./assets/img/soda.png\" style=\"margin-top:.2rem;height:67px;\">\n           <img src=\"./assets/img/restorants.png\" style=\"margin-top:.2rem;height:67px;\">\n          \n           <div style=\"margin-top:1rem;\">\n            <div style=\"font-size: 1rem;font-weight:600;margin-top:.3rem\">Restaurant/<br>Packaged foods</div>\n            <div style=\"font-size: .8rem;font-weight:200;margin-top:.6rem;font-family: sans-serif;\">\n              Guidance for healthy options\n            </div>\n           </div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align: center;\n    border-radius: 1rem;\n   padding: .5rem;\n    color: #000;min-height:190px;    height: 190px;    margin-right: 1rem;\">\n          <img src=\"./assets/img/list.png\" style=\"margin-top:.2rem;height:67px;\">\n         \n          <div style=\"margin-top:1rem;\">\n            <div style=\"font-size: 1rem;font-weight:600;margin-top:.3rem\">Macros<br> tracking</div>\n            <div style=\"font-size: .8rem;font-weight:200;margin-top:.8rem;font-family: sans-serif;\">\n              Track the macros against the goals\n            </div>\n           </div>\n       </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div style=\"margin-top: 2rem;\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"goto()\" shape=\"round\" style=\"--background:var(--theme-background);width:60%;\">\n           Continue\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dietitian-profile_dietitian-profile_module_ts.js.map