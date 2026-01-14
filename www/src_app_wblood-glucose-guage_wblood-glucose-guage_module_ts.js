"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_wblood-glucose-guage_wblood-glucose-guage_module_ts"],{

/***/ 33472:
/*!*****************************************************************************!*\
  !*** ./src/app/wblood-glucose-guage/wblood-glucose-guage-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodGlucoseGuagePageRoutingModule": () => (/* binding */ WbloodGlucoseGuagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wblood_glucose_guage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wblood-glucose-guage.page */ 52062);




const routes = [
    {
        path: '',
        component: _wblood_glucose_guage_page__WEBPACK_IMPORTED_MODULE_0__.WbloodGlucoseGuagePage
    }
];
let WbloodGlucoseGuagePageRoutingModule = class WbloodGlucoseGuagePageRoutingModule {
};
WbloodGlucoseGuagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WbloodGlucoseGuagePageRoutingModule);



/***/ }),

/***/ 40027:
/*!*********************************************************************!*\
  !*** ./src/app/wblood-glucose-guage/wblood-glucose-guage.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodGlucoseGuagePageModule": () => (/* binding */ WbloodGlucoseGuagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _wblood_glucose_guage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wblood-glucose-guage-routing.module */ 33472);
/* harmony import */ var _wblood_glucose_guage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wblood-glucose-guage.page */ 52062);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 45642);








let WbloodGlucoseGuagePageModule = class WbloodGlucoseGuagePageModule {
};
WbloodGlucoseGuagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _wblood_glucose_guage_routing_module__WEBPACK_IMPORTED_MODULE_0__.WbloodGlucoseGuagePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_wblood_glucose_guage_page__WEBPACK_IMPORTED_MODULE_1__.WbloodGlucoseGuagePage]
    })
], WbloodGlucoseGuagePageModule);



/***/ }),

/***/ 52062:
/*!*******************************************************************!*\
  !*** ./src/app/wblood-glucose-guage/wblood-glucose-guage.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodGlucoseGuagePage": () => (/* binding */ WbloodGlucoseGuagePage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _wblood_glucose_guage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wblood-glucose-guage.page.html?ngResource */ 36534);
/* harmony import */ var _wblood_glucose_guage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wblood-glucose-guage.page.scss?ngResource */ 83611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 70900);
/* harmony import */ var _core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utility/utilities */ 29276);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _wblood_glucose_log_wblood_glucose_log_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wblood-glucose-log/wblood-glucose-log.page */ 70464);












let WbloodGlucoseGuagePage = class WbloodGlucoseGuagePage {
  constructor(router, storage, appService, utilities, modalController) {
    this.router = router;
    this.storage = storage;
    this.appService = appService;
    this.utilities = utilities;
    this.modalController = modalController;
    this.targetWeight = 0;
    this.currentWeight = 0;
    this.bmiMeter = [{
      text: 'Normal',
      min: 18.5,
      max: 25
    }, {
      text: 'Overweight',
      min: 25,
      max: 30
    }, {
      text: 'Obese Class I',
      min: 30.1,
      max: 35
    }, {
      text: 'Obese Class II',
      min: 35.1,
      max: 40
    }, {
      text: 'Obese Class III',
      min: 40.1
    }];
    this.currentBMI = {
      value: '0',
      bmi: ''
    };
    this.targetBMI = {
      value: '0',
      bmi: ''
    };
    this.weightDaily = 0;
    this.targetWeightDaily = 0;
    this.poundValue = 0.453592;
    this.targetButtonDisabled = true;
    this.currentButtonDisabled = true;
    this.healthData = [];
    this.currentDate = new Date();
    this.fullHeight = false;
  }

  close() {
    this.modalController.dismiss();
    this.router.navigate(["new-diet", {
      refresh: new Date().getTime()
    }]);
  }

  ionViewWillEnter() {
    // this.utilities.logEvent("view_weight_tracker", {})      
    this.utilities.logEvent("Tracker_04Weight", {});
    this.bloodPressureGraph();
  }

  ngOnInit() {
    this.bloodPressureGraph();
  }

  navigateToUpdrade() {}

  ngAfterViewInit() {
    this.bloodPressureGraph();
    this.logDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format("l");
    moment__WEBPACK_IMPORTED_MODULE_5___default().updateLocale('en', {
      week: {
        dow: 1
      }
    });
  }

  formatedDate(dt) {
    return moment__WEBPACK_IMPORTED_MODULE_5___default()(dt).format('D-MMM');
  }

  bloodPressureGraph() {
    //  this.utilities.presentLoading();
    let profile = JSON.parse(localStorage.getItem("profileData"));
    this.profileData = profile;
    this.appService.getHealthData(this.profileData.profile.email).then(res => {
      this.healthData = res.sort((a, b) => new Date(b.updateDate).getTime() - new Date(a.updateDate).getTime());
    }, err => {
      console.log("error", err);
    });
  }

  setLabel(value) {
    if (value >= 18.5 && value <= 25) {
      return 'Normal';
    }

    if (value > 25 && value <= 30) {
      return 'Overweight';
    }

    if (value > 30 && value <= 35) {
      return 'Obese Class I';
    }

    if (value > 35 && value <= 40) {
      return 'Obese Class II';
    }

    if (value > 40) {
      return 'Obese Class III';
    }
  }

  getColor(value) {
    if (value >= 18.5 && value <= 25) {
      return {
        'color': '#27d7a1'
      };
    }

    if (value > 25 && value <= 30) {
      return {
        'color': '#c2ef67'
      };
    }

    if (value > 30 && value <= 35) {
      return {
        'color': '#ffd717'
      };
    }

    if (value > 35 && value <= 40) {
      return {
        'color': '#ffa73b'
      };
    }

    if (value > 40.1) {
      return {
        'color': '#ff595a'
      };
    }
  }

  minusWeight() {
    this.weightDaily = (parseFloat(this.weightDaily) - 1).toFixed(1);
    this.currentToggle(false);
  }

  plusWeight() {
    this.weightDaily = (parseFloat(this.weightDaily) + 1).toFixed(1);
    this.currentToggle(false);
  }

  minusTargetWeight() {
    this.targetWeightDaily = (parseFloat(this.targetWeightDaily) - 1).toFixed(1);
    this.targetToggle(false);
  }

  plusTargetWeight() {
    this.targetWeightDaily = (parseFloat(this.targetWeightDaily) + 1).toFixed(1);
    this.targetToggle(false);
  }

  getWidth(bmiValue) {
    bmiValue = parseFloat(bmiValue);
    bmiValue = (bmiValue - 20) / (45 - 20) * 100;
    bmiValue = bmiValue + 2; // for set the pin correct position

    return {
      "width": bmiValue + "%"
    };
  }

  saveTarget() {
    this.storage.get("profileData").then(val => {
      let profile = this.utilities.parseJSON(val); //  BMI =Kg/m2

      let targetWeightDaily = profile.demographic.weight.unit == "pound" ? this.targetWeightDaily * this.poundValue : this.targetWeightDaily;
      let heightInMeter = 0;

      if (profile.demographic.height.unit == 'cm') {
        heightInMeter = profile.demographic.height.value * 0.01;
      } else {
        heightInMeter = profile.demographic.height.value * 2.54 * 0.01;
      }

      if (parseFloat(targetWeightDaily) / (heightInMeter * heightInMeter) < 22) {
        this.utilities.showErrorToast('We do not advise below 22 BMI');
        return;
      } else {
        this.appService.updateTargetWeight({
          'targetedWeight': parseFloat(targetWeightDaily)
        }).then(res => {
          this.utilities.showSuccessToast('Target weight updated');
          this.targetToggle(true);
          this.bloodPressureGraph();
        }, err => {
          //   this.utilities.hideLoader();
          this.utilities.presentAlert(JSON.stringify(err));
        });
      }
    });
  }

  saveCurrent() {
    this.storage.get("profileData").then(val => {
      let profile = this.utilities.parseJSON(val);
      let weightDaily = profile.demographic.weight.unit == "pound" ? this.weightDaily * this.poundValue : this.weightDaily;
      this.appService.updateCurrentWeight({
        'currentWeight': parseFloat(weightDaily)
      }).then(res => {
        this.utilities.showSuccessToast('Current weight updated');
        this.currentToggle(true);
        this.bloodPressureGraph();
      }, err => {
        this.utilities.presentAlert(JSON.stringify(err));
      });
    });
  }

  targetChange() {
    this.targetToggle(false);
  }

  currentChange() {
    this.currentToggle(false);
  }

  targetToggle(type) {
    this.targetButtonDisabled = type;
  }

  currentToggle(type) {
    this.currentButtonDisabled = type;
  }

  addHealthData() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _wblood_glucose_log_wblood_glucose_log_page__WEBPACK_IMPORTED_MODULE_7__.WbloodGlucoseLogPage,
        backdropDismiss: true,
        cssClass: 'weight-log-modal',
        componentProps: {
          logWeight: _this.logWeight,
          logDate: _this.logDate,
          profileData: _this.profileData
        }
      });
      modal.onDidDismiss().then(data => {
        if (data && data.data) {
          // this.bloodPressureGraph();
          window.location.reload();
        }
      });
      return yield modal.present();
    })();
  }

};

WbloodGlucoseGuagePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage
}, {
  type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: _core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

WbloodGlucoseGuagePage.propDecorators = {
  weightCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["weightCanvas"]
  }],
  weightCanvasNew: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["weightCanvasNew"]
  }]
};
WbloodGlucoseGuagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-wblood-glucose-guage',
  template: _wblood_glucose_guage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_wblood_glucose_guage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], WbloodGlucoseGuagePage);


/***/ }),

/***/ 70464:
/*!***************************************************************!*\
  !*** ./src/app/wblood-glucose-log/wblood-glucose-log.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodGlucoseLogPage": () => (/* binding */ WbloodGlucoseLogPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _wblood_glucose_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wblood-glucose-log.page.html?ngResource */ 60824);
/* harmony import */ var _wblood_glucose_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wblood-glucose-log.page.scss?ngResource */ 95581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);










let WbloodGlucoseLogPage = class WbloodGlucoseLogPage {
  constructor(appService, utilities, modalController) {
    this.appService = appService;
    this.utilities = utilities;
    this.modalController = modalController;
    this.currentDate = new Date();
  }

  ngOnInit() {
    console.log('logDate: ', this.logDate);
    console.log('profileData: ', this.profileData);
    this.logDate = new Date().toISOString();
  }

  addHealthData(sys, dia) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.fasting || !_this.random) {
        return;
      }

      let obj = {
        "date": new Date(_this.logDate),
        "userId": _this.profileData.profile.email,
        "createdBy": _this.profileData.profile.name,
        "bloodGlucose_fasting": _this.fasting,
        "bloodGlucose_random": _this.random
      };

      _this.appService.addHealthData(obj).then(res => {
        _this.utilities.hideLoader();

        _this.utilities.showSuccessToast('blood pressure logged successfully');

        console.log('getHealthData response: ', res); // this.logDate = "";

        _this.modalController.dismiss(true);
      }).catch(err => {
        _this.utilities.showErrorToast('Can not log weight data.');

        _this.utilities.hideLoader();
      });
    })();
  }

  close() {
    this.modalController.dismiss();
  }

};

WbloodGlucoseLogPage.ctorParameters = () => [{
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

WbloodGlucoseLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-wblood-glucose-log',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
  template: _wblood_glucose_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_wblood_glucose_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], WbloodGlucoseLogPage);


/***/ }),

/***/ 83611:
/*!********************************************************************************!*\
  !*** ./src/app/wblood-glucose-guage/wblood-glucose-guage.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".target {\n  padding-left: 10%;\n  font-size: 16px;\n}\n.target p {\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  padding-left: 4px;\n}\n.current p {\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  padding-left: 4px;\n}\n.text-weight {\n  color: #2A9CFF;\n}\n.barContainer {\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n}\n.barContainer .bar {\n  height: 15px;\n  overflow: hidden;\n}\n.barContainer .bar div {\n  height: 100%;\n  float: left;\n}\n.barContainer .bar .light-yellow {\n  background-color: #c2ef67;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .green {\n  background-color: #27d7a1;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .yellow {\n  background-color: #ffd717;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .orange {\n  background-color: #ffa73b;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .red {\n  background-color: #ff595a;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .value div {\n  height: 100%;\n  float: left;\n  position: relative;\n  right: 8px;\n  font-size: 12px;\n  line-height: 20px;\n}\n.barContainer .slider {\n  height: 22px;\n}\n.barContainer .slider div {\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  position: absolute;\n}\n.barContainer .slider ion-icon {\n  float: right;\n  font-size: 2em;\n}\n.barContainer .slider-bottom {\n  position: relative;\n  top: 11px;\n}\n.barContainer .slider-bottom div {\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  position: absolute;\n}\n.barContainer .slider-bottom ion-icon {\n  float: right;\n  font-size: 2em;\n}\nion-item.weight-daily {\n  --background: transparent;\n}\nion-item.weight-daily img {\n  height: 25px;\n  width: auto;\n}\nion-item.weight-daily ion-input {\n  text-align: center;\n  border: 1px solid #b3b3b3;\n  font-size: 16px;\n  color: #6b6767;\n  border-radius: 10px;\n}\n.save {\n  --background: #01A3A4;\n  --color: #fff;\n  margin-top: 5px;\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  --border-radius: 5px !important;\n}\n.last-div {\n  position: absolute !important;\n  right: 0px;\n}\n.bmi-text {\n  position: relative;\n  text-align: center;\n  font-size: 16px;\n  color: #6b6767;\n}\n.bmi-text span {\n  font-size: 15px;\n  font-weight: normal;\n}\n.target-text {\n  text-align: center;\n  font-size: 16px;\n  color: #6b6767;\n  padding-top: 10px;\n}\n.target-text span {\n  font-size: 15px;\n  font-weight: normal;\n}\n.add {\n  color: #01A3A4;\n  font-size: 1.8rem;\n}\n.minus {\n  color: #01A3A4;\n  font-size: 1.8rem;\n}\n.headers {\n  margin-left: 10px;\n  font-weight: 600;\n  font-size: 1rem;\n}\nion-card-header {\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n}\nion-content {\n  --background: #F6F7FC !important;\n}\nion-card {\n  margin: 16px;\n  border-radius: 30px;\n  box-shadow: none;\n}\n.border-bottom {\n  border-bottom: 0.5px solid gray;\n}\n.border-bottom:last-child {\n  border-bottom: none;\n}\n.content {\n  padding: 10px 0;\n  font-size: 14px;\n}\n.list-header {\n  padding: 10px 0;\n  font-size: 0.9rem;\n}\n.weight-log-btn {\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #01A3A4;\n  width: 100%;\n  font-weight: 700;\n}\n.weight-header-text {\n  display: flex;\n  justify-content: space-between;\n}\n.log-data {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n.log-data span {\n  font-size: 0.8rem;\n  color: #000;\n  margin-left: 0.5rem;\n  border: 1px solid #000;\n  border-radius: 5px;\n  padding: 2px 5px;\n  font-weight: 400;\n}\n.weight-data {\n  height: 30vh;\n  overflow: hidden;\n}\n.full-height {\n  height: auto;\n  overflow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndibG9vZC1nbHVjb3NlLWd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFBc0IsaUJBQUE7QUFBOUI7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQU47QUFDTTtFQUVFLFlBQUE7RUFDQSxXQUFBO0FBQVI7QUFFTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQVI7QUFHTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRFI7QUFJTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRlI7QUFJTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRlI7QUFJTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRlI7QUFNTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSlI7QUFhSTtFQUNJLFlBQUE7QUFYUjtBQVlNO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFjUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBWlo7QUFlTTtFQUNDLGtCQUFBO0VBQ0MsU0FBQTtBQWJSO0FBY007RUFFRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQWdCUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBZFo7QUFtQkU7RUFDRSx5QkFBQTtBQWhCSjtBQWtCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBaEJOO0FBa0JJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFoQk47QUFvQkU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLCtFQUFBO0VBQ0EsK0JBQUE7QUFqQko7QUFtQkU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFoQko7QUFrQkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFmSjtBQWdCSTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWRKO0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZko7QUFnQkk7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQW9CQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQWpCSjtBQW9CQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQWpCRjtBQXFCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbEJKO0FBb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWpCRjtBQW9CQTtFQUNFLGdDQUFBO0FBakJGO0FBc0JBO0VBRUUsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7QUF1QkE7RUFDRSwrQkFBQTtBQXBCRjtBQXVCQTtFQUNFLG1CQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFwQkY7QUF1QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFwQkY7QUF1QkE7RUFDRSxlQUFBO0VBQ0EsK0VBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFwQkY7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBdUJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFwQkYiLCJmaWxlIjoid2Jsb29kLWdsdWNvc2UtZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcmdldFxue1xuICAgIHBhZGRpbmctbGVmdDogMTAlOyAgICBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICB9XG59XG4uY3VycmVudFxue1xuICAgIHB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICB9XG59XG5cbi50ZXh0LXdlaWdodHtcbiAgICBjb2xvcjojMkE5Q0ZGO1xufVxuXG4uYmFyQ29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIC5iYXJ7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGl2e1xuICAgICAgIC8vIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgIH1cbiAgICAgIC5saWdodC15ZWxsb3d7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmVmNjc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOjIwJSAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC5ncmVlbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3ZDdhMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6MjAlXG5cbiAgICAgIH1cbiAgICAgIC55ZWxsb3d7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3MTc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOjIwJVxuICAgICAgfVxuICAgICAgLm9yYW5nZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTczYjsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXG4gICAgICAgIHdpZHRoOjIwJSAgICAgICAgXG4gICAgICB9XG4gICAgICAucmVke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1OTVhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDoyMCUgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWV7XG4gICAgICBkaXZ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwe1xuICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIC5zbGlkZXJ7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIGRpdntcbiAgICAgICAgLy8gd2lkdGg6IDQ1JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoIzAwMCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2xpZGVyLWJvdHRvbXtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTFweDtcbiAgICAgIGRpdntcbiAgICAgICAgLy8gd2lkdGg6IDQ1JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoIzAwMCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpb24taXRlbS53ZWlnaHQtZGFpbHkge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8vICBwYWRkaW5nOiAycmVtIDNyZW0gMCAzcmVtO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzZiNjc2NztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgXG4gIH1cbiAgLnNhdmV7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDFBM0E0O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogXCJndC1hbWVyaWNhLXN0YW5kYXJkLXJlZ3VsYXJcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5sYXN0LWRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICByaWdodDogMHB4O1xufVxuLmJtaS10ZXh0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNmI2NzY3O1xuICAgIHNwYW57XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgXG4gICAgfVxufVxuLnRhcmdldC10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2YjY3Njc7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgc3BhbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBcbiAgICB9XG5cbn1cblxuLmFkZHtcbiAgICBjb2xvcjogIzAxQTNBNDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG5cbi5taW51c3tcbiAgY29sb3I6ICMwMUEzQTQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBcbn1cblxuLmhlYWRlcnN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y2RjdGQyAhaW1wb3J0YW50O1xuICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzAxQTNBNCA1MCUsICNGNkY3RkMgNTAlKSFpbXBvcnRhbnQ7XG5cbn1cblxuaW9uLWNhcmR7XG4gIC8vIG1hcmdpbjogMzBweDsgXG4gIG1hcmdpbjogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDsgXG4gIGJveC1zaGFkb3c6IG5vbmVcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmF5O1xufVxuXG4uYm9yZGVyLWJvdHRvbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IC45cmVtO1xufVxuXG4ud2VpZ2h0LWxvZy1idG4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcImd0LWFtZXJpY2Etc3RhbmRhcmQtcmVndWxhclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAxQTNBNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi53ZWlnaHQtaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sb2ctZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuXG4ud2VpZ2h0LWRhdGEge1xuICBoZWlnaHQ6IDMwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufSJdfQ== */";

/***/ }),

/***/ 95581:
/*!****************************************************************************!*\
  !*** ./src/app/wblood-glucose-log/wblood-glucose-log.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".weight-log-btn {\n  --background: #01A3A4;\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  --border-radius: 5px !important;\n}\n\n.close-icon {\n  --inner-padding-end: 0;\n  color: #01A3A4;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndibG9vZC1nbHVjb3NlLWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwrRUFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoid2Jsb29kLWdsdWNvc2UtbG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWlnaHQtbG9nLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDFBM0E0O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogXCJndC1hbWVyaWNhLXN0YW5kYXJkLXJlZ3VsYXJcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICBjb2xvcjogIzAxQTNBNDtcbiAgICBmb250LXNpemU6IDJyZW07XG59Il19 */";

/***/ }),

/***/ 36534:
/*!********************************************************************************!*\
  !*** ./src/app/wblood-glucose-guage/wblood-glucose-guage.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content >\n  <div style=\"padding-top: 1.5rem; border-radius: 1rem;background: #f3f3f3;\">\n  <ion-row>\n    <ion-col class=\"ion-text-right\">\n      <ion-icon (click)=\"close()\" style=\"font-size: 2rem; color:#01a3a4;font-weight: 600;margin-right:1rem\" name=\"close-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px; \n    border-bottom: 1px solid #01a3a4;\n    color:#01a3a4;\n    padding-bottom: 15px;\">\n      Analysis\n    </ion-card-header>\n    <!-- <ion-card-content>\n      <canvas #weightCanvas></canvas>\n    </ion-card-content> -->\n    <ion-card-content>\n      <!-- <canvas height=\"200\" #weightCanvasNew></canvas> -->\n      <app-wblood-glucose [isShowButton]=\"false\" >\n\n      </app-wblood-glucose>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px 0; \n      border-bottom: 1px solid #01a3a4;\n      color:#01a3a4;\n      padding-bottom: 15px;\">\n      <div class=\"weight-header-text\">\n        \n        <span style=\"padding-top: 5px;\">Blood Glucose Log</span>\n        <!-- <div (click)=\"addHealthData()\" class=\"log-data\">\n          <span>Log</span>\n        </div> -->\n        <ion-icon (click)=\"addHealthData()\" class=\"log-data\" name=\"add-outline\" style=\"font-size: 2rem;\"></ion-icon>\n   \n      </div>\n      \n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf=\"healthData && healthData.length\">\n        <ion-row class=\"list-header border-bottom\">\n          <ion-col class=\"ion-no-padding\"><b>Date</b></ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\"><b>Fasting</b></ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\"><b>Random</b></ion-col>\n        </ion-row>\n        <span *ngFor=\"let dayData of healthData\">\n        <ion-row class=\"content border-bottom\" *ngIf=\"dayData?.healthData?.bloodGlucose\">\n          <ion-col class=\"ion-no-padding\">{{formatedDate(dayData.updateDate)}}</ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\" > {{dayData?.healthData?.bloodGlucose?.fasting}}</ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\" > {{dayData?.healthData?.bloodGlucose?.random}}</ion-col>\n        </ion-row>\n      </span>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-card-header style=\"margin: 15px 25px; \n    border-bottom: 1px solid #01a3a4;\n    color:#01a3a4;\n    padding-bottom: 15px;\">\n      BMI\n    </ion-card-header>\n    <ion-card-content>    \n      <div class=\"barContainer\">\n          <p class=\"bmi-text\">\n              {{currentBMI.value}}\n              <span [ngStyle]=\"getColor(currentBMI.value)\"[innerHTML]=\"setLabel(currentBMI.value)\"></span>\n              <span> (Current)</span>\n            \n            </p>\n        <div class=\"slider\">\n          <div [ngStyle]=\"getWidth(currentBMI.value)\">\n              <ion-icon name=\"caret-down-outline\"></ion-icon>\n         </div>\n        </div>\n        <div class=\"bar\">\n          <div class=\"green\"></div>\n          <div class=\"light-yellow\"></div>\n          <div class=\"yellow\"></div>\n          <div class=\"orange\"></div>\n          <div class=\"red\"></div>\n        </div>\n        <div class=\"value\">\n          <div style=\"width:20%\">\n            <p>18.5</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>25</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>30</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>35</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>40</p>\n          </div>\n          <div class=\"last-div\">\n              <p>45</p>\n            </div>\n        </div>\n        <div class=\"slider-bottom\">\n            <div [ngStyle]=\"getWidth(targetBMI.value)\">\n                <ion-icon name=\"caret-up-outline\"></ion-icon>\n           </div>\n           \n          </div>\n      </div>\n      <div>\n          <p class=\"target-text\">\n            {{targetBMI.value}}\n            <span [ngStyle]=\"getColor(targetBMI.value)\"[innerHTML]=\"setLabel(targetBMI.value)\"></span>\n            <span> (Target)</span>                 \n          </p>\n          </div>\n\n    </ion-card-content>\n  </ion-card> -->\n  \n</div>\n</ion-content>\n\n";

/***/ }),

/***/ 60824:
/*!****************************************************************************!*\
  !*** ./src/app/wblood-glucose-log/wblood-glucose-log.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"end\" name=\"close-circle-outline\" class=\"close-icon\" (click)=\"close()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\" no-Padding no-Margin>\n    <ion-label style=\"font-size: 1.2rem;color:#01a3a4\">Blood Glucose</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" >\n    <ion-label style=\"width: 25%;\">Fasting <span style=\"color:red\">*</span></ion-label>\n    <ion-input class=\"border-bottom\"  type=\"number\"  [ngClass]=\"{ 'error': !fasting }\" [(ngModel)]=\"fasting\" placeholder=\"100\"\n    (ionInput)=\"fasting = $event.target.value\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label style=\"width: 25%;\">Random <span style=\"color:red\">*</span></ion-label>\n    <ion-input class=\"border-bottom\"   [ngClass]=\"{ 'error': !random }\" [(ngModel)]=\"random\" placeholder=\"80\"\n    (ionInput)=\"random = $event.target.value\"></ion-input>\n  </ion-item>\n  <ion-item class=\"border-bottom\" >\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat=\"DD/MM/YYYY\" pickerFormat=\"DD/MM/YYYY\" \n    (ionChange)=\"logDate = $event.detail.value\" [(ngModel)]=\"logDate\"></ion-datetime>\n  </ion-item>\n  <ion-button (click)=\"addHealthData(fasting,random)\"  class=\"weight-log-btn ion-margin\" expand=\"block\">Log</ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_wblood-glucose-guage_wblood-glucose-guage_module_ts.js.map