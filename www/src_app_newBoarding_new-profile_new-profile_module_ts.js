"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_new-profile_new-profile_module_ts"],{

/***/ 33983:
/*!***********************************************************************!*\
  !*** ./src/app/newBoarding/new-profile/new-profile-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProfilePageRoutingModule": () => (/* binding */ NewProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _new_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-profile.page */ 24735);




const routes = [
    {
        path: '',
        component: _new_profile_page__WEBPACK_IMPORTED_MODULE_0__.NewProfilePage
    }
];
let NewProfilePageRoutingModule = class NewProfilePageRoutingModule {
};
NewProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewProfilePageRoutingModule);



/***/ }),

/***/ 55519:
/*!***************************************************************!*\
  !*** ./src/app/newBoarding/new-profile/new-profile.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProfilePageModule": () => (/* binding */ NewProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-profile-routing.module */ 33983);
/* harmony import */ var _new_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-profile.page */ 24735);







let NewProfilePageModule = class NewProfilePageModule {
};
NewProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewProfilePageRoutingModule
        ],
        declarations: [_new_profile_page__WEBPACK_IMPORTED_MODULE_1__.NewProfilePage]
    })
], NewProfilePageModule);



/***/ }),

/***/ 24735:
/*!*************************************************************!*\
  !*** ./src/app/newBoarding/new-profile/new-profile.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProfilePage": () => (/* binding */ NewProfilePage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _new_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-profile.page.html?ngResource */ 48551);
/* harmony import */ var _new_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-profile.page.scss?ngResource */ 47382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utilities */ 15373);










let NewProfilePage = class NewProfilePage {
  constructor(modalCtrl, storage, appservice, router, utilities, route) {
    this.modalCtrl = modalCtrl;
    this.storage = storage;
    this.appservice = appservice;
    this.router = router;
    this.utilities = utilities;
    this.route = route;
    this.segment = "profile";
    this.profileData = {};
    this.localData = {};
    this.dietitianName = "";
    this.dietitianRole = "";
    this.defaultPlanCheck = false;
    this.expiryDate = "";
    this.goalName = [];
    this.isShow = false;
    this.suggestedWeightRange = 0;
    this.communitiesArr = [];
    route.queryParams.subscribe(res => {
      this.dietitianName = res["params"];
      this.dietitianRole = res["role"];
    });
  }

  ngOnInit() {
    this.utilities.logEvent("Tracker_profileUpdate", {});
    this.clientId = localStorage.getItem('clientId');
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    console.log("this.compConfig", this.compConfig);
    this.defaultPlanCheck = this.compConfig.defaultPlanCheck;
    this.expiryDate = localStorage.getItem("expiryDate");
    this.preferredMeal();
  }

  ngAfterViewInit() {
    this.getProfile();
    this.checkPlan();
    this.gotoDemographic(); // console.log(this.returnWeek());
  }

  preferredMeal() {
    this.preferedItem = JSON.parse(localStorage.getItem("selectedItem"));
    console.log("ALAM:_----", this.preferedItem);
  }

  returnWeek() {
    //let createdDate = new Date("9-25-2022"); // for month view
    let createdDate = new Date(this.profileData?.profile?.createdDate);
    const diff = new Date().valueOf() - createdDate?.valueOf();
    const seconds = Math.floor(diff / 1000);
    interval = seconds / 2592000;

    if (interval > 2) {
      return {
        type: "M",
        count: Math.floor(interval)
      };
    }

    var interval = seconds / 604800;

    if (interval > 1) {
      return {
        type: "W",
        count: Math.floor(interval)
      };
    } else {
      return {
        type: "W",
        count: 0
      };
    }
  }

  checkPlan() {
    this.appservice.getOnePlan().subscribe(res => {
      this.plandata = res;
      let exp = new Date(this.plandata.planExpiryDate).getTime();
      let newDate = new Date().getTime();
      console.log(exp, newDate); // if (exp > newDate) {
      //   this.plandata.isPlanActive = true;
      // }

      console.log("plan==========>", res);
    });
  }

  getFlag(type) {
    switch (type) {
      case "IND":
        return "india-flag.png";

      case "USA":
        return "USA-flag.png";

      case "CAN":
        return "canada-flag.png";

      case "AUS":
        return "Australia-flag.png";

      case "EGY":
        return "Egypt-flag.png";

      case "UAE":
        return "uae.jpeg";
    }
  }

  kgToLbs(kg) {
    const lbsPerKg = 2.20462;
    return Math.round(kg * lbsPerKg);
  }

  modalClose() {
    this.router.navigate(['new-diet']);
  }

  getImage(type) {
    switch (type) {
      case "AC1":
        return "sedentary.png";

      case "AC2":
        return "lightly-active.png";

      case "AC3":
        return "moderatly-active.png";

      case "AC4":
        return "super-active.png";

      case "AC5":
        return "extrimaly-active.png";

      case "weightLoss":
        return "weightmanagement.png";

      case "weightLoss_blubin":
        return "weightmanagement.png";

      case "maintenance":
        return "weightmanagement.png";

      case "maintenance_blubin":
        return "weightmanagement.png";

      case "muscleGain":
        return "fitness.png";

      case "musclebuildmorning_blubin":
        return "fitness.png";

      case "leanbodymorning_blubin":
        return "fitness.png";

      case "fatShredding":
        return "fitness.png";

      case "diseseManagement":
        return "deseasemanagement.png";

      case "V":
        return "broccoli@3x.png";

      case "NV":
        return "meat@3x.png";

      case "E":
        return "brocolly-egg.png";

      case "Ve":
        return "leaf@3x.png";

      default:
        return "weightmanagement.png";
    }
  }

  closePopup() {
    this.isShow = false;
  }

  openModel(component) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.dietitianName);

      if (_this.dietitianName === "" || _this.dietitianName === undefined || _this.clientId === 'lalpathlabs') {
        _this.router.navigate([component], {
          queryParams: {
            from: 'editProfile'
          }
        });

        _this.getProfile();
      } else {
        _this.isShow = true;
      }
    })();
  }

  gotoDemographic() {
    this.storage.get("localData").then(local => {
      const data = this.utilities.parseJSON(local);

      if (data.otherMaster.height[0]?.param == "in") {
        this.suggestedWeightRange = Math.ceil(parseInt(data.otherMaster.height[0].value) * 2.54 - 100);
      } else if (data.otherMaster.height[0].unit == "cm") {
        this.suggestedWeightRange = Math.ceil(parseInt(data.otherMaster.height[0].value) - 100);
      }
    });
  }

  getProfile() {
    this.profileData = [];
    this.appservice.getProfile().then(res => {
      this.profileData = res;
      debugger;
      this.goalName = this.compConfig.editGoalForDisplay.filter(item => {
        return item.value === this.profileData?.lifeStyle?.dietPlanName;
      });
      this.getCommunities(this.profileData.lifeStyle.communities);

      if (this.profileData?.profile?.subCategory === "weightloss") {
        this.profileData.profile.subCategory = "Weight Loss";
      }

      if (this.profileData?.profile?.subCategory === "weightmaintenance") {
        this.profileData.profile.subCategory = "Weight Maintenance";
      }

      if (this.profileData?.profile?.subCategory === "musclebuilding") {
        this.profileData.profile.subCategory = "Muscle Building";
      }

      if (this.profileData?.profile?.subCategory === "leanbody") {
        this.profileData.profile.subCategory = "Lean Body";
      }

      this.storage.get("localData").then(val => {
        this.localData = JSON.parse(val);
        console.log(this.localData);
        this.profileData.lifeStyle.foodType = this.localData?.otherMaster?.foodPref.find(f => f.code === this.profileData.lifeStyle.foodType);
        this.profileData.lifeStyle.country = this.localData?.countries.find(f => f._id === this.profileData.lifeStyle.country);

        if (this.clientId !== 'enkeltec') {
          this.profileData.lifeStyle.activities = this.localData?.otherMaster?.activities.find(item => this.profileData?.lifeStyle?.activities.code === item.code);
        } else {
          this.profileData.lifeStyle.activities = this.compConfig.activies.find(item => this.profileData?.lifeStyle?.activities.code === item.code);
        }

        const communitiesItem = JSON.parse(localStorage.getItem("communitiesItem"));

        if (communitiesItem != undefined && communitiesItem != "" && communitiesItem != null) {
          this.profileData.lifeStyle.communities = communitiesItem.filter(item => item.isSelected);
        }

        this.profileData.lifeStyle.diseases = this.localData?.otherMaster?.diseases.filter(item => this.profileData?.lifeStyle?.diseases?.includes(item.code));
      });
      let h = this.profileData?.demographic?.height?.unit === "in" ? this.profileData?.demographic?.height?.value / 12 : this.profileData?.demographic?.height?.value;

      if (this.profileData?.demographic?.height?.unit === "in") {
        console.log(h);
        h = h.toString().split(".");
        console.log(h);
        let h1 = (h[1] / 0.0833333).toString().split("0")[0];
        console.log(h1);

        if (isNaN(h1)) {
          h1 = 0;
        }

        this.profileData.demographic.height.value = `${h[0]}' ${h1}"`;
      } else {
        this.profileData.demographic.height.value = this.profileData.demographic.height.value + " cm";
      }

      console.log(this.profileData);
    });
  }

  getCommunities(communities) {
    for (let index = 0; index < communities.length; index++) {
      if (communities[index] === 'P') {
        this.communitiesArr.push('North India');
      } else if (communities[index] === 'M') {
        this.communitiesArr.push('Maharashtra');
      } else if (communities[index] === 'G') {
        this.communitiesArr.push('Gujarat');
      } else if (communities[index] === 'B') {
        this.communitiesArr.push('Bengali');
      } else if (communities[index] === 'S') {
        this.communitiesArr.push('South India');
      } else {// this.communitiesArr.push('Universal');
      }
    }
  }

};

NewProfilePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: _app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _utils_utilities__WEBPACK_IMPORTED_MODULE_5__.UTILITIES
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}];

NewProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-new-profile",
  template: _new_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewProfilePage);


/***/ }),

/***/ 47382:
/*!**************************************************************************!*\
  !*** ./src/app/newBoarding/new-profile/new-profile.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".main_div {\n  min-height: 100%;\n  background: var(--white);\n  border-radius: 40px 40px 0px 0px;\n  padding-bottom: 30px;\n}\n\n.profileBtn {\n  --background-checked:var(--white);\n  --background:var(--theme-newHeader);\n  --border-radius: 30px 30px 30px 0px;\n  text-transform: none;\n  font-size: var(--small-font);\n  color: var(--black);\n  font-family: var(--theme-newFont);\n}\n\n.profileBtn::part(indicator) {\n  display: none;\n}\n\n.profileBtn ion-icon {\n  font-size: 20px;\n}\n\n.insightBtn {\n  --background-checked:var(--white);\n  --background:var(--theme-newHeader);\n  --border-radius: 30px 30px 0px 30px;\n  text-transform: none;\n  font-size: var(--small-font);\n  color: var(--black);\n  font-family: var(--theme-newFont);\n}\n\n.insightBtn::part(indicator) {\n  display: none;\n}\n\n.insightBtn ion-icon {\n  font-size: 15px;\n}\n\nion-segment-button[aria-selected=true] {\n  border-radius: 30px 30px 0px 0px;\n  width: 50%;\n  font-size: var(--medium-font);\n}\n\nion-segment-button[aria-selected=true] ion-icon {\n  font-size: 25px;\n}\n\nion-segment {\n  height: 60px;\n  border-radius: 40px 40px 0px 0px;\n  --ripple-color:none !important;\n}\n\n.pre_nxt_btn {\n  color: var(--theme-color);\n}\n\n.date {\n  margin: 20px 30px;\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n}\n\n.avatar_div {\n  width: 45px;\n  z-index: 1;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n  border: 2px solid var(--theme-color);\n}\n\n.section-card {\n  margin: 20px;\n  padding: 15px 20px;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n\n.edit_icon {\n  font-size: 40px;\n  color: var(--close-edit-color);\n}\n\n.edit_icon_div {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n\n.username {\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  margin-bottom: 0%;\n}\n\n.logged_btn {\n  --background: var(--theme-newButton, #3880ff);\n  --color: var(--white);\n  height: 40px;\n  width: 70px;\n}\n\n.main_title {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--theme-titleProfile);\n  margin: 0%;\n}\n\n.commonText {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black-light);\n}\n\n.commonText span {\n  color: var(--black);\n  margin-left: 5px;\n}\n\n.fitness_image {\n  width: 90px;\n  object-fit: contain;\n  margin-right: 10px;\n}\n\n.calendar_icon {\n  color: var(--profile-color);\n  margin-right: 5px;\n}\n\n.--profile-img {\n  background: var(--profile-color);\n  color: #fff;\n}\n\n.--profile-img-outline {\n  color: var(--profile-color);\n  border: 1px solid var(--profile-color);\n  background: transparent !important;\n}\n\n.condition_card {\n  background: var(--new-background);\n  border: 1.5px solid var(--new-border-color);\n  border-radius: 10px;\n  padding: 20px;\n  flex-direction: column;\n}\n\n.slider_div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.slider_page {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding-bottom: 13px;\n}\n\n.lines {\n  border: 1px solid var(--theme-milestone);\n  width: 100%;\n  position: absolute;\n}\n\n.lines2 {\n  width: 100%;\n  position: absolute;\n}\n\n.lines2 div {\n  border: 1px solid var(--theme-milestone);\n}\n\n.page_Count {\n  height: 10px;\n  width: 10px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 10px;\n  width: 10px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone2);\n  font-weight: bold;\n  z-index: 10;\n  background: #F2903C;\n  font-family: var(--theme-newFont);\n}\n\n.complete {\n  border: 2px solid var(--black) !important;\n}\n\n.week {\n  font-size: var(--xsmall-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--theme-titleProfile);\n  margin: 0%;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.man_icon {\n  font-size: 25px;\n  margin-bottom: 5px;\n}\n\n.line_icon {\n  color: var(--theme-color);\n  stroke: var(--theme-color);\n  font-size: 25px;\n  margin-top: 5px;\n}\n\n.card_div {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  position: relative;\n}\n\n.card_image {\n  height: 30px;\n  position: absolute;\n  right: -15px;\n  top: -30px;\n}\n\n.title {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--theme-titleProfile);\n  font-weight: 700;\n  margin: 0px;\n}\n\n.sub_title {\n  font-size: var(--xsmall-font);\n  font-family: var(--theme-newFont);\n  color: var(--theme-titleProfile);\n  margin: 10px 0px 0px;\n  font-weight: 400;\n}\n\n.star_icon {\n  font-size: 30px;\n  margin-top: 10px;\n}\n\n.currunt_plan_div {\n  background: #FFF9F2;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.upperCase {\n  text-transform: capitalize;\n}\n\n.go_btn {\n  height: 40px;\n  margin-top: 10px;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n}\n\n.flag_img {\n  margin: 20px;\n}\n\n.flag_img::part(image) {\n  height: 40px;\n  width: 40px;\n}\n\n.Activity_image {\n  width: 65px;\n  object-fit: contain;\n  margin: 10px 20px 10px 10px;\n}\n\n.protien_progress {\n  position: absolute;\n  --progress-background:var(--black);\n  border-radius: 25px;\n  width: 100%;\n  margin: 2px 0px;\n}\n\n.cal_calculation_div {\n  width: 100%;\n}\n\n.cal_main_div {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.cal_col {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.card_cal_image {\n  height: 15px;\n  object-fit: contain;\n  left: 0.4rem;\n  position: relative;\n}\n\n.cal_title {\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n  color: var(--theme-titleProfile);\n  font-weight: 700;\n  margin: 0px;\n}\n\n.cal_sub_title {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--theme-titleProfile);\n  margin: 10px 0px 5px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBVUE7RUFJSSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQVZKOztBQUNJO0VBQ0ksYUFBQTtBQUNSOztBQVVJO0VBQ0ksZUFBQTtBQVJSOztBQWFBO0VBSUksaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFiSjs7QUFJSTtFQUNJLGFBQUE7QUFGUjs7QUFZSTtFQUNJLGVBQUE7QUFWUjs7QUFjQTtFQUNJLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBWEo7O0FBWUk7RUFDSSxlQUFBO0FBVlI7O0FBYUE7RUFDSSxZQUFBO0VBRUEsZ0NBQUE7RUFDQSw4QkFBQTtBQVhKOztBQWNBO0VBQ0kseUJBQUE7QUFYSjs7QUFjQTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBWEo7O0FBY0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBWEo7O0FBY0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FBWEo7O0FBY0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBWEo7O0FBY0E7RUFDSSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBWEo7O0FBYUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFWSjs7QUFZQTtFQUNJLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQVRKOztBQVlBO0VBQ0ksOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFUSjs7QUFXSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFUUjs7QUFhQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNELGtCQUFBO0FBVkg7O0FBYUE7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0FBVko7O0FBWUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7QUFUSjs7QUFXRTtFQUNFLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtBQVJKOztBQVVBO0VBQ0ksaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUEo7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtBQVRKOztBQVlFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFUSjs7QUFZRTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVEo7O0FBWUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFXSTtFQUNFLHdDQUFBO0FBVE47O0FBYUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBVko7O0FBYUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBVko7O0FBYUU7RUFDRSx5Q0FBQTtBQVZKOztBQWFFO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVko7O0FBZUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWVFO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFiSjs7QUFnQkE7RUFDSSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFnQkE7RUFDSSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBYko7O0FBaUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFkSjs7QUFpQkE7RUFDSSwwQkFBQTtBQWRKOztBQWlCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWVJO0VBQ0ssNkNBQUE7RUFDRCxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFFQSw0QkFBQTtFQUNBLGlDQUFBO0FBZFI7O0FBa0JBO0VBQ0csWUFBQTtBQWZIOztBQWdCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBZFI7O0FBa0JBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0QsMkJBQUE7QUFmSDs7QUFrQkE7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWZKOztBQXlCQTtFQUNJLFdBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdEJKOztBQXlCQTtFQUNJLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXRCSjs7QUF5QkE7RUFDSSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBdEJKIiwiZmlsZSI6Im5ldy1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2RpdntcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggMHB4IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgJjo6cGFydChiYWNrZ3JvdW5kKXtcbiAgICAgLy8gICAtLWJhY2tncm91bmQ6dmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgICB9XG59XG5cblxuXG4ucHJvZmlsZUJ0bntcbiAgICAmOjpwYXJ0KGluZGljYXRvcil7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0td2hpdGUpO1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG5cblxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG59XG5cbi5pbnNpZ2h0QnRue1xuICAgICY6OnBhcnQoaW5kaWNhdG9yKXtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDp2YXIoLS13aGl0ZSk7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG5pb24tc2VnbWVudC1idXR0b25bYXJpYS1zZWxlY3RlZD1cInRydWVcIl17XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbn1cbmlvbi1zZWdtZW50IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIC8vICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQodmFyKC0tdGhlbWUtbmV3SGVhZGVyKSx2YXIoLS10aGVtZS1uZXdIZWFkZXIpLCNmZmZmZmYsICNmZmZmZmYpOztcbiAgICBib3JkZXItcmFkaXVzOjQwcHggNDBweCAwcHggMHB4O1xuICAgIC0tcmlwcGxlLWNvbG9yOm5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByZV9ueHRfYnRue1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5kYXRle1xuICAgIG1hcmdpbjogMjBweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLmF2YXRhcl9kaXZ7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmF2YXRhcntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xufVxuXG4uc2VjdGlvbi1jYXJke1xuICAgIG1hcmdpbjoyMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVkaXRfaWNvbntcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IHZhcigtLWNsb3NlLWVkaXQtY29sb3IpO1xufVxuXG4uZWRpdF9pY29uX2RpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6NXB4XG59XG5cbi51c2VybmFtZXtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG4ubG9nZ2VkX2J0bntcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0J1dHRvbiwgIzM4ODBmZik7XG4gICAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuLm1haW5fdGl0bGV7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRpdGxlUHJvZmlsZSk7XG4gICAgbWFyZ2luOiAwJTtcbn1cblxuLmNvbW1vblRleHR7XG4gICAgZm9udC1zaXplOiB2YXIoLS1yZWd1bGFyLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1saWdodCk7XG5cbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyBcbiAgICB9XG59XG5cbi5maXRuZXNzX2ltYWdle1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jYWxlbmRhcl9pY29ue1xuICAgIGNvbG9yOiB2YXIoLS1wcm9maWxlLWNvbG9yKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi4tLXByb2ZpbGUtaW1ne1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC4tLXByb2ZpbGUtaW1nLW91dGxpbmV7XG4gICAgY29sb3I6IHZhcigtLXByb2ZpbGUtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByb2ZpbGUtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbi5jb25kaXRpb25fY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1uZXctYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59XG5cbi5zbGlkZXJfZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuc2xpZGVyX3BhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgfVxuXG4gIC5saW5lcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtbWlsZXN0b25lKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5saW5lczIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gICAgZGl2IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLW1pbGVzdG9uZSk7XG4gICAgfVxuICB9XG5cbiAgLnBhZ2VfQ291bnQge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICB9XG4gIFxuICAucGFnZV9Db3VudF9hY3RpdmUge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kOiAjRjI5MDNDO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgfVxuICBcbiAgLmNvbXBsZXRlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcbiAgfVxuXG4gIC53ZWVre1xuICAgIGZvbnQtc2l6ZTogdmFyKC0teHNtYWxsLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS10aXRsZVByb2ZpbGUpO1xuICAgIG1hcmdpbjogMCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuXG5cbiAgLm1hbl9pY29ue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAubGluZV9pY29ue1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgc3Ryb2tlOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5jYXJkX2RpdntcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmNhcmRfaW1hZ2V7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTE1cHg7XG4gICAgdG9wOiAtMzBweDtcbn1cblxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS10aXRsZVByb2ZpbGUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggIDtcbn1cblxuLnN1Yl90aXRsZXtcbiAgICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRpdGxlUHJvZmlsZSk7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBcbn1cblxuLnN0YXJfaWNvbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmN1cnJ1bnRfcGxhbl9kaXZ7XG4gICAgYmFja2dyb3VuZDogI0ZGRjlGMjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnVwcGVyQ2FzZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmdvX2J0bntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XG4gICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWJ1dHRvbi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgfVxufVxuXG4uZmxhZ19pbWd7XG4gICBtYXJnaW46IDIwcHg7XG4gICAgJjo6cGFydChpbWFnZSl7XG4gICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICB9XG59XG5cbi5BY3Rpdml0eV9pbWFnZXtcbiAgICB3aWR0aDogNjVweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAxMHB4O1xufVxuXG4ucHJvdGllbl9wcm9ncmVzc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOnZhcigtLWJsYWNrKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMnB4IDBweDtcbn1cblxuLy8gLmNhcmRfaW1hZ2V7XG4vLyAgICAgaGVpZ2h0OiA2NXB4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogLTEwcHg7XG4vLyAgICAgdG9wOiAtNDBweDtcbi8vIH1cblxuLmNhbF9jYWxjdWxhdGlvbl9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYWxfbWFpbl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhbF9jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FyZF9jYWxfaW1hZ2V7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbGVmdDogMC40cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhbF90aXRsZXtcbiAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGl0bGVQcm9maWxlKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4ICA7XG59XG5cbi5jYWxfc3ViX3RpdGxle1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS10aXRsZVByb2ZpbGUpO1xuICAgIG1hcmdpbjogMTBweCAwcHggNXB4IDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgXG59XG5cbiAgXG4gICJdfQ== */";

/***/ }),

/***/ 48551:
/*!**************************************************************************!*\
  !*** ./src/app/newBoarding/new-profile/new-profile.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>new-profile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"main_div\">\n\n    <div class=\"bottom_shadow\"></div>\n    <div>\n\n      <ion-segment [value]=\"segment\" [(ngModel)]=\"segment\">\n        <ion-segment-button value=\"profile\" class=\"profileBtn\" layout=\"icon-start\">\n          <ion-icon name=\"person-outline\" (click)=\"gotoProfile()\" class=\"--profile-img-outline\" style=\"    position: relative;\n          height: 15px;\n          width: 15px;\n          border-radius: 25px;\n          padding: 0.7rem;\n          background: transparent;margin-right: .5rem;\n          \"></ion-icon>\n          <ion-label>My Profile</ion-label>\n\n        </ion-segment-button>\n\n\n      </ion-segment>\n      <div style=\"display: flex;\n    flex-direction: column;\n    align-items: center;justify-content:center;\">\n        <p class=\"username\" style=\"font-size:.8rem;\">Profile ID: <b>{{profileData?.profile?.email}}</b></p>\n        <p class=\"username\" style=\"font-size:.8rem;\" *ngIf=\"expiryDate!==''\">\n          Expiry Date: <b>{{expiryDate}}\n          </b></p>\n      </div>\n      <div class=\"w_100 left\" style=\"top: 14px;\n    position: absolute;\n    left: 16px;\">\n        <ion-icon name=\"arrow-back-outline\" class=\"close_modal_icon\" (click)=\"modalClose()\"></ion-icon>\n        <!-- <ion-icon\n          class=\"close_modal_icon\"\n          name=\"close-circle\"\n          (click)=\"modalClose()\"\n        ></ion-icon> -->\n      </div>\n    </div>\n\n    <div *ngIf=\"segment === 'profile' \">\n      <div class=\"section-card\" style=\"margin-top: 40px\">\n        <div class=\"avatar_div\">\n          <ion-avatar class=\"avatar\" style=\"margin-top: -40px\">\n            <!-- <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\" /> -->\n            <ion-icon name=\"person-outline\" (click)=\"gotoProfile()\" class=\"--profile-img\" style=\"position: relative;\n            height: 24px;\n            width: 24px;\n            border-radius: 25px;\n            padding: 0.7rem;\"></ion-icon>\n          </ion-avatar>\n        </div>\n        <div class=\"edit_icon_div\">\n          <ion-icon (click)=\"openModel('boarding2')\" class=\"edit_icon\" src=\"../../../../assets/newImages/icon-edit.svg\">\n          </ion-icon>\n        </div>\n\n        <p class=\"username\">{{profileData?.profile?.name}}</p>\n\n        <ion-grid class=\"w_100\">\n          <ion-row>\n            <ion-col size=\"5\">\n              <p class=\"commonText\">\n                Age:<span>{{profileData?.demographic?.age?.avg_age}}</span>\n              </p>\n              <p class=\"commonText\">\n                Height:<span>{{profileData?.demographic?.height?.value}} </span>\n              </p>\n            </ion-col>\n            <ion-col size=\"7\">\n              <p class=\"commonText\">\n                Gender:<span>{{profileData?.demographic?.gender?.label===undefined?profileData?.demographic?.gender?.gender:profileData?.demographic?.gender?.label}}\n                </span>\n              </p>\n              <p class=\"commonText\">\n                Starting Weight:<span>{{profileData?.demographic?.weight?.value}}\n                  {{profileData?.demographic?.weight?.unit ===\n                  'pound'?'lbs':'kg'}}</span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div *ngIf=\"compConfig.goal && clientId!=='plixkids'\" class=\"section-card left\"\n        style=\"flex-direction: row; padding: 5px 15px\">\n        <div class=\"edit_icon_div\">\n          <ion-icon (click)=\"openModel('boarding')\" class=\"edit_icon\" src=\"../../../../assets/newImages/icon-edit.svg\">\n          </ion-icon>\n        </div>\n        <ion-img [src]=\"'../../../../assets/newImages/'+getImage(profileData?.profile?.category)\" class=\"fitness_image\">\n        </ion-img>\n        <p class=\"commonText upperCase\">\n          My Goal: <br /><span style=\"margin-left: 0%\">\n            {{goalName?.length>0?goalName[0]?.name:profileData?.lifeStyle?.dietPlanName}}</span>\n        </p>\n      </div>\n\n      <div class=\"section-card\">\n        <p class=\"commonText\" style=\"color: var(--black); margin-top: 0%\">\n          <ion-icon class=\"calendar_icon\" src=\"../../../../assets/newImages/caender_icon.svg\"></ion-icon>\n          Your Fitness Journey\n        </p>\n\n        <div class=\"condition_card\" style=\"padding: 10px 15px 0px\" *ngIf=\"returnWeek()\">\n          <div class=\"slider_div\">\n            <div class=\"lines\"></div>\n            <!-- <div class=\"lines2\">\n              <div [ngStyle]=\"{'width':returnWeek()*12.5  }\"></div>\n            </div> -->\n            <div class=\"slider_page\">\n              <div *ngFor=\"let w of [1,2,3,4,5,6,7,8]\" style=\"width: 12.5%\">\n                <div class=\"center flex_col\">\n                  <p class=\"mar_0 ion-text-center week\" *ngIf=\"returnWeek().count >= w\">\n                    ✓\n                  </p>\n                  <ion-icon *ngIf=\"returnWeek().count === w-1\" class=\"man_icon\"\n                    src=\"../../../../assets/newImages/man_icon.svg\"></ion-icon>\n                  <p class=\"mar_0\" [ngClass]=\"returnWeek().count >= 1 ? 'page_Count' : 'page_Count_active' \"></p>\n                  <p class=\"week\">{{returnWeek().type}}{{w}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"margin-top: 30px\">\n          <ion-grid class=\"pad_0\">\n            <ion-row>\n              <ion-col size=\"6\" style=\"padding-right: 5px\" *ngIf=\"clientId!=='plixkids'\">\n                <div class=\"condition_card center h_100\">\n                  <div class=\"card_div h_100\">\n                    <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/bmi.png\"\n                      class=\"card_image\"></ion-img>\n                    <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/bmi1.png\"\n                      class=\"card_image\"></ion-img>\n                    <span>\n                      <p class=\"title\">Current BMI:</p>\n                      <p class=\"main_title\">{{profileData?.demographic?.bmi}}</p>\n                      <p class=\"sub_title\" *ngIf=\"clientId!=='enkeltec'\">Range 18.5-25 (Recommended)</p>\n                    </span>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col [size]=\"clientId!=='plixkids'?12:6\" style=\"padding-left: 5px\">\n                <div class=\"condition_card h_100\">\n                  <div class=\"card_div\">\n                    <ion-img *ngIf=\"compConfig.isProfileIcons==false\"\n                      src=\"../../../../assets/newImages/sugg_cal_icon.png\" class=\"card_image\"></ion-img>\n                    <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/Group.png\"\n                      class=\"card_image\"></ion-img>\n                    <p class=\"title\" style=\"margin-top: 10px\">\n                      Suggested calories :<br />\n                    </p>\n                    <p class=\"main_title\">\n                      {{profileData?.lifeStyle?.calories}} Kcal/day\n                    </p>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div class=\"condition_card\" style=\"margin-top: 20px\" *ngIf=\"clientId!=='enkeltec'\">\n          <div class=\"card_div\">\n            <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/weight_machine.png\"\n              class=\"card_image\"></ion-img>\n            <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/weights1.png\"\n              class=\"card_image\"></ion-img>\n            <ion-grid class=\"w_100 pad_0\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <p class=\"title\" style=\"margin-top: 10px\">Current weight:</p>\n                  <p class=\"main_title\">\n                    {{profileData?.demographic?.weight?.value}}\n                    {{profileData?.demographic?.weight?.unit == \"pound\"?'lbs':'kg'}}\n                  </p>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <span *ngIf=\"clientId!=='plixkids'\">\n                    <p class=\"title\" style=\"margin-top: 10px\">Desired weight:</p>\n                    <p class=\"main_title\">\n                      {{profileData?.demographic?.suggestedWeight}}\n                      {{profileData?.demographic?.weight?.unit == \"pound\"?'lbs':'kg'}}\n                    </p>\n                  </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <!-- <p class=\"sub_title\">\n              {{ profileData?.demographic?.weight?.unit == 'pound' ? (kgToLbs(suggestedWeightRange - 2) + ' - ' + kgToLbs(suggestedWeightRange + 2) + ' lbs') :\n                      ((suggestedWeightRange - 2) + ' - ' + (suggestedWeightRange + 2) + ' kg') }}\n            </p> -->\n          </div>\n        </div>\n        <div class=\"condition_card\" style=\"margin-top: 20px\">\n          <div class=\"card_div\">\n            <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/nutritional.png\"\n              class=\"card_image\"></ion-img>\n            <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/healthy-food1.png\"\n              class=\"card_image\"></ion-img>\n            <p class=\"title\">\n              Nutritional <br />\n              Requirement <span class=\"sub_title\">(On daily basis)</span>\n            </p>\n            <div class=\"cal_calculation_div\">\n              <div class=\"cal_main_div\">\n                <div class=\"cal_col\">\n                  <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/calorie.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/wheat1.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <p class=\"cal_sub_title\">Fiber</p>\n                  <p class=\"cal_title\">{{profileData?.lifeStyle?.fiber}}g</p>\n                </div>\n                <div class=\"cal_col\">\n                  <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/carbs.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/cauliflower1.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <p class=\"cal_sub_title\">Carbs</p>\n                  <p class=\"cal_title\">{{profileData?.lifeStyle?.carb}}g</p>\n                </div>\n\n                <div class=\"cal_col\">\n                  <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/protein.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/Vector.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <p class=\"cal_sub_title\">Protein</p>\n                  <p class=\"cal_title\">{{profileData?.lifeStyle?.protien}}g</p>\n                </div>\n\n                <div class=\"cal_col\">\n                  <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/fats.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" src=\"../../../../assets/icons/pizza1.png\"\n                    class=\"card_cal_image\"></ion-img>\n                  <p class=\"cal_sub_title\">Fats</p>\n                  <p class=\"cal_title\">{{profileData?.lifeStyle?.fat}}g</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"section-card pad_0\">\n        <ion-grid class=\"w_100\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"center flex_col currunt_plan_div\">\n                <p class=\"main_title\">Current Plan</p>\n                <ion-icon class=\"star_icon\" src=\"../../../../assets/newImages/star_icon.svg\"></ion-icon>\n                <p class=\"main_title\">Free</p>\n                <p class=\"sub_title ion-text-center\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                </p>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"center flex_col h_100\">\n                <ion-icon class=\"star_icon\" src=\"../../../../assets/newImages/upgrade_plan_icon.svg\"></ion-icon>\n                <ion-button class=\"go_btn\" shape=\"round\">Upgrade plan</ion-button>\n                <p class=\"commonText\" style=\"color: var(--theme-color)\">\n                  See benefits\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div> -->\n\n      <div class=\"section-card left\" style=\"flex-direction: row; padding: 5px 15px\" *ngIf=\"compConfig.mealPref==true\">\n        <div class=\"edit_icon_div\">\n          <ion-icon (click)=\"openModel('meal-pref')\" class=\"edit_icon\" src=\"../../../../assets/newImages/icon-edit.svg\">\n          </ion-icon>\n        </div>\n        <div style=\"width: 50\">\n          <ion-img *ngIf=\"compConfig.isProfileIcons==false\"\n            [src]=\"'../../../../assets/newImages/'+getImage(profileData?.lifeStyle?.activities?.code)\"\n            class=\"Activity_image\"></ion-img>\n          <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" style=\"width: 50%;\"\n            src=\"../../../../assets/newImages/physical.svg\" class=\"Activity_image\"></ion-img>\n        </div>\n        <p class=\"commonText\">\n          Meal Preference: <br />\n          <span style=\"margin-left: 0%\">Slot : {{preferedItem?.slot_id?.join(',')}}</span><br>\n          <span style=\"margin-left: 0%\">Preferred Meal: {{preferedItem?.Veg_nonveg}}</span><br>\n          <span style=\"margin-left: 0%\">Meal Name: {{preferedItem?.category_name}}</span><br>\n          <span style=\"margin-left: 0%\">Image: <br><img style=\"width: 29%;\n            height: auto;\" src=\"{{preferedItem?.image_id}}\"></span>\n        </p>\n      </div>\n\n      <div class=\"section-card left\" style=\"flex-direction: row; padding: 5px 15px\">\n        <div class=\"edit_icon_div\">\n          <ion-icon (click)=\"openModel('boarding3')\" class=\"edit_icon\" src=\"../../../../assets/newImages/icon-edit.svg\">\n          </ion-icon>\n        </div>\n        <div style=\"width: 50\">\n          <ion-img *ngIf=\"compConfig.isProfileIcons==false\"\n            [src]=\"'../../../../assets/newImages/'+getImage(profileData?.lifeStyle?.activities?.code)\"\n            class=\"Activity_image\"></ion-img>\n          <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" style=\"width: 50%;\"\n            src=\"../../../../assets/newImages/physical.svg\" class=\"Activity_image\"></ion-img>\n        </div>\n        <p class=\"commonText\">\n          Physical Activity: <br /><span\n            style=\"margin-left: 0%\">{{profileData?.lifeStyle?.activities?.value?.split('(')[0]}}</span>\n        </p>\n      </div>\n\n      <div class=\"section-card left flex_col\" style=\"padding: 5px 15px\">\n        <div class=\"edit_icon_div\">\n          <ion-icon (click)=\"openModel('boarding4')\" class=\"edit_icon\" src=\"../../../../assets/newImages/icon-edit.svg\">\n          </ion-icon>\n        </div>\n        <div class=\"left w_100\">\n          <div style=\"width: 50\">\n            <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/healthCondition.png\"\n              class=\"Activity_image\"></ion-img>\n            <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" style=\"width: 50%;\"\n              src=\"../../../../assets/newImages/healthc.svg\" class=\"Activity_image\"></ion-img>\n          </div>\n          <p class=\"commonText\">\n            Health Conditions: <br />\n            <span style=\"margin-left: 0%\" *ngFor=\" let d of profileData?.lifeStyle?.diseases\">\n              <span style=\"margin-left: 0%\"\n                *ngIf=\"!d?.value?.includes('Allergy') && !d?.value?.includes('allergy') \">{{d.value}},{{' '}}</span>\n            </span>\n            <!-- <span>None</span> -->\n          </p>\n        </div>\n\n        <div class=\"left w_100\" *ngIf=\"compConfig.isAllergies==true\">\n          <div style=\"width: 50\">\n            <ion-img *ngIf=\"compConfig.isProfileIcons==false\" src=\"../../../../assets/newImages/alergies.png\"\n              class=\"Activity_image\"></ion-img>\n            <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" style=\"width: 50%;\"\n              src=\"../../../../assets/newImages/allergies.svg\" class=\"Activity_image\"></ion-img>\n          </div>\n          <p class=\"commonText\">\n            Allergies:<br /><span *ngFor=\" let d of profileData?.lifeStyle?.diseases\" style=\"margin-left: 0%\"><span\n                style=\"margin-left: 0%\"\n                *ngIf=\"d?.value?.includes('Allergy') || d?.value?.includes('allergy') \">{{d.value}},{{' '}}</span></span>\n          </p>\n        </div>\n      </div>\n\n      <!-- <div\n        class=\"section-card left\"\n        style=\"flex-direction: row; padding: 5px 15px\"\n      >\n        <div class=\"edit_icon_div\">\n          <ion-icon\n            (click)=\"openModel(Boarding4Page)\"\n            class=\"edit_icon\"\n            src=\"../../../../assets/newImages/icon-edit.svg\"\n          ></ion-icon>\n        </div>\n        <ion-img\n          src=\"../../../assets/newImages/alergies.png\"\n          class=\"Activity_image\"\n        ></ion-img>\n        <p class=\"commonText\">\n          Allergies:<br /><span\n            *ngFor=\" let d of profileData?.lifeStyle?.diseases\"\n            style=\"margin-left: 0%\"\n            ><span\n              style=\"margin-left: 0%\"\n              *ngIf=\"d?.value?.includes('Allergy') || d?.value?.includes('allergy') \"\n              >{{d.value}},{{' '}}</span\n            ></span\n          >\n        </p>\n      </div> -->\n\n      <div class=\"section-card left flex_col\" style=\"flex-direction: row; padding: 5px 15px\">\n        <div class=\"edit_icon_div\">\n          <ion-icon (click)=\"openModel('boarding5')\" class=\"edit_icon\" src=\"../../../../assets/newImages/icon-edit.svg\">\n          </ion-icon>\n        </div>\n        <div class=\"left w_100\">\n          <ion-img *ngIf=\"compConfig.isProfileIcons==false\"\n            [src]=\"'../../../../assets/newImages/'+getImage(profileData?.lifeStyle?.foodType?.code)\"\n            class=\"Activity_image\"></ion-img>\n          <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" style=\"width: 8.5%;\"\n            src=\"../../../../assets/newImages/dietpref.svg\" class=\"Activity_image\" style=\"width:auto;\"></ion-img>\n          <p class=\"commonText\">\n            Meal Preferences:<br /><span style=\"margin-left: 0%\">{{profileData?.lifeStyle?.foodType?.value}}</span>\n          </p>\n        </div>\n        <div class=\"left w_100\">\n          <div style=\"width: 50\">\n            <ion-img *ngIf=\"compConfig.isProfileIcons==false\"\n              [src]=\"'../../../../assets/newImages/'+getFlag(profileData?.lifeStyle?.country?._id)\"\n              class=\"Activity_image\"></ion-img>\n            <ion-img *ngIf=\"compConfig.isProfileIcons!=false\" style=\"width: 50%;\"\n              src=\"../../../../assets/newImages/cuisuine.svg\" class=\"Activity_image\"></ion-img>\n          </div>\n          <p class=\"commonText\">\n            Regional Preferences in Food: <br /><span\n              style=\"margin-left: 0%\">{{profileData?.lifeStyle?.country?.name}}</span>\n\n            <!-- <span\n              *ngFor=\"let c of profileData?.lifeStyle?.communities\"> \n              {{c?.value}}</span> -->\n            <br><br>\n            <span *ngIf=\"profileData?.lifeStyle?.country?.name==='India'\">\n              Communities: <br>\n              <span>\n                {{\n                  communitiesArr?.join(',')\n                }}\n              </span>\n            </span>\n          </p>\n\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"segment === 'insight' \">\n      <div class=\"center\">\n        <ion-icon class=\"pre_nxt_btn\" name=\"arrow-back-outline\"></ion-icon>\n        <p class=\"date\">Last Week</p>\n        <ion-icon class=\"pre_nxt_btn\" name=\"arrow-forward-outline\"></ion-icon>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"isShow\" style=\"width:100%;height:100%;position:fixed;z-index:10;opacity:.5;background:#000;top:0;\"></div>\n  <div *ngIf=\"isShow\" style=\"width:80%;height:30%;position:fixed;z-index:11;\nbackground: rgb(242, 229, 216);top:0;transform: translate(12%, 70%);border-radius:10px; text-align:center;\">\n    <div style=\"background: rgb(242, 229, 216);\n    height: 100%;\">\n      <ion-row style=\"height: 30px; background:#565656;color:#fff;padding:5px 10px;\">\n        <ion-col class=\"ion-text-left\">\n          Message\n        </ion-col>\n        <ion-col class=\"ion-text-right\">\n          <img src=\"./assets/img/close.png\" style=\"width: 20%;\n    position: relative;\n    top: -4px;\n    right: -10px;\" (click)=\"closePopup()\">\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"position: relative;top:10%;\">\n        <ion-col style=\"font-size: 1.1rem;padding:.8rem 1rem;\">\n          Hello, I'm {{dietitianName}}, your {{dietitianRole==='null'?'Dietitian':dietitianRole}}. You can connect me\n          for the modifications.\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row style=\"position: absolute; bottom:1rem;width: 100%;\">\n        <ion-col class=\"ion-text-center\">\n          <ion-button shape=\"round\" class=\"logged_btn\" (click)=\"closePopup()\">\n            Ok\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_new-profile_new-profile_module_ts.js.map