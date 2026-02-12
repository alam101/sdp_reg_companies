"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_wblood-pressure-guage_wblood-pressure-guage_module_ts"],{

/***/ 22361:
/*!*******************************************************************************!*\
  !*** ./src/app/wblood-pressure-guage/wblood-pressure-guage-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodPressureGuagePageRoutingModule": () => (/* binding */ WbloodPressureGuagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _wblood_pressure_guage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wblood-pressure-guage.page */ 43175);




const routes = [
    {
        path: '',
        component: _wblood_pressure_guage_page__WEBPACK_IMPORTED_MODULE_0__.WbloodPressureGuagePage
    }
];
let WbloodPressureGuagePageRoutingModule = class WbloodPressureGuagePageRoutingModule {
};
WbloodPressureGuagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WbloodPressureGuagePageRoutingModule);



/***/ }),

/***/ 44476:
/*!***********************************************************************!*\
  !*** ./src/app/wblood-pressure-guage/wblood-pressure-guage.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodPressureGuagePageModule": () => (/* binding */ WbloodPressureGuagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _wblood_pressure_guage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wblood-pressure-guage-routing.module */ 22361);
/* harmony import */ var _wblood_pressure_guage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wblood-pressure-guage.page */ 43175);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 45642);








let WbloodPressureGuagePageModule = class WbloodPressureGuagePageModule {
};
WbloodPressureGuagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _wblood_pressure_guage_routing_module__WEBPACK_IMPORTED_MODULE_0__.WbloodPressureGuagePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_wblood_pressure_guage_page__WEBPACK_IMPORTED_MODULE_1__.WbloodPressureGuagePage]
    })
], WbloodPressureGuagePageModule);



/***/ }),

/***/ 43175:
/*!*********************************************************************!*\
  !*** ./src/app/wblood-pressure-guage/wblood-pressure-guage.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodPressureGuagePage": () => (/* binding */ WbloodPressureGuagePage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _wblood_pressure_guage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wblood-pressure-guage.page.html?ngResource */ 46566);
/* harmony import */ var _wblood_pressure_guage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wblood-pressure-guage.page.scss?ngResource */ 43929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 70900);
/* harmony import */ var _core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utility/utilities */ 29276);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _wblood_pressure_log_wblood_pressure_log_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wblood-pressure-log/wblood-pressure-log.page */ 55360);












let WbloodPressureGuagePage = class WbloodPressureGuagePage {
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
          //  this.utilities.hideLoader();
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

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _wblood_pressure_log_wblood_pressure_log_page__WEBPACK_IMPORTED_MODULE_7__.WbloodPressureLogPage,
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

WbloodPressureGuagePage.ctorParameters = () => [{
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

WbloodPressureGuagePage.propDecorators = {
  weightCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["weightCanvas"]
  }],
  weightCanvasNew: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["weightCanvasNew"]
  }]
};
WbloodPressureGuagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-wblood-pressure-guage',
  template: _wblood_pressure_guage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_wblood_pressure_guage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], WbloodPressureGuagePage);


/***/ }),

/***/ 55360:
/*!*****************************************************************!*\
  !*** ./src/app/wblood-pressure-log/wblood-pressure-log.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WbloodPressureLogPage": () => (/* binding */ WbloodPressureLogPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _wblood_pressure_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wblood-pressure-log.page.html?ngResource */ 64704);
/* harmony import */ var _wblood_pressure_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wblood-pressure-log.page.scss?ngResource */ 11383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);










let WbloodPressureLogPage = class WbloodPressureLogPage {
  constructor(appService, utilities, modalController) {
    this.appService = appService;
    this.utilities = utilities;
    this.modalController = modalController;
    this.currentDate = new Date();
  }

  ngOnInit() {
    console.log('logDate: ', this.logDate);
    console.log('profileData: ', this.profileData);
    this.logDate = new Date().toISOString(); // this.minPressure=0;
    // this.maxPressure=0;
  }

  addHealthData(sys, dia) {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.minPressure || !_this.maxPressure) {
        return;
      }

      let obj = {
        "date": new Date(_this.logDate),
        "userId": _this.profileData.profile.email,
        "createdBy": _this.profileData.profile.name,
        "bp_systolic": _this.minPressure,
        "bp_diastolic": _this.maxPressure
      };

      _this.appService.addHealthData(obj).then(res => {
        _this.utilities.hideLoader();

        _this.utilities.showSuccessToast('blood pressure logged successfully');

        console.log('getHealthData response: ', res);
        _this.minPressure = 0;
        _this.maxPressure = 0; // this.logDate = "";

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

WbloodPressureLogPage.ctorParameters = () => [{
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

WbloodPressureLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-wblood-pressure-log',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
  template: _wblood_pressure_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_wblood_pressure_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], WbloodPressureLogPage);


/***/ }),

/***/ 43929:
/*!**********************************************************************************!*\
  !*** ./src/app/wblood-pressure-guage/wblood-pressure-guage.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".target {\n  padding-left: 10%;\n  font-size: 16px;\n}\n.target p {\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  padding-left: 4px;\n}\n.current p {\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  padding-left: 4px;\n}\n.text-weight {\n  color: #2A9CFF;\n}\n.barContainer {\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n}\n.barContainer .bar {\n  height: 15px;\n  overflow: hidden;\n}\n.barContainer .bar div {\n  height: 100%;\n  float: left;\n}\n.barContainer .bar .light-yellow {\n  background-color: #c2ef67;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .green {\n  background-color: #27d7a1;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .yellow {\n  background-color: #ffd717;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .orange {\n  background-color: #ffa73b;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .red {\n  background-color: #ff595a;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .value div {\n  height: 100%;\n  float: left;\n  position: relative;\n  right: 8px;\n  font-size: 12px;\n  line-height: 20px;\n}\n.barContainer .slider {\n  height: 22px;\n}\n.barContainer .slider div {\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  position: absolute;\n}\n.barContainer .slider ion-icon {\n  float: right;\n  font-size: 2em;\n}\n.barContainer .slider-bottom {\n  position: relative;\n  top: 11px;\n}\n.barContainer .slider-bottom div {\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  position: absolute;\n}\n.barContainer .slider-bottom ion-icon {\n  float: right;\n  font-size: 2em;\n}\nion-item.weight-daily {\n  --background: transparent;\n}\nion-item.weight-daily img {\n  height: 25px;\n  width: auto;\n}\nion-item.weight-daily ion-input {\n  text-align: center;\n  border: 1px solid #b3b3b3;\n  font-size: 16px;\n  color: #6b6767;\n  border-radius: 10px;\n}\n.save {\n  --background: #01A3A4;\n  --color: #fff;\n  margin-top: 5px;\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  --border-radius: 5px !important;\n}\n.last-div {\n  position: absolute !important;\n  right: 0px;\n}\n.bmi-text {\n  position: relative;\n  text-align: center;\n  font-size: 16px;\n  color: #6b6767;\n}\n.bmi-text span {\n  font-size: 15px;\n  font-weight: normal;\n}\n.target-text {\n  text-align: center;\n  font-size: 16px;\n  color: #6b6767;\n  padding-top: 10px;\n}\n.target-text span {\n  font-size: 15px;\n  font-weight: normal;\n}\n.add {\n  color: #01A3A4;\n  font-size: 1.8rem;\n}\n.minus {\n  color: #01A3A4;\n  font-size: 1.8rem;\n}\n.headers {\n  margin-left: 10px;\n  font-weight: 600;\n  font-size: 1rem;\n}\nion-card-header {\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n}\nion-content {\n  --background: #F6F7FC !important;\n}\nion-card {\n  margin: 16px;\n  border-radius: 30px;\n  box-shadow: none;\n}\n.border-bottom {\n  border-bottom: 0.5px solid gray;\n}\n.border-bottom:last-child {\n  border-bottom: none;\n}\n.content {\n  padding: 10px 0;\n  font-size: 14px;\n}\n.list-header {\n  padding: 10px 0;\n  font-size: 0.9rem;\n}\n.weight-log-btn {\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #01A3A4;\n  width: 100%;\n  font-weight: 700;\n}\n.weight-header-text {\n  display: flex;\n  justify-content: space-between;\n}\n.log-data {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n.log-data span {\n  font-size: 0.8rem;\n  color: #000;\n  margin-left: 0.5rem;\n  border: 1px solid #000;\n  border-radius: 5px;\n  padding: 2px 5px;\n  font-weight: 400;\n}\n.weight-data {\n  height: 30vh;\n  overflow: hidden;\n}\n.full-height {\n  height: auto;\n  overflow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndibG9vZC1wcmVzc3VyZS1ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQXNCLGlCQUFBO0FBQTlCO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBREo7QUFFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFOO0FBQ007RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQUFSO0FBRU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFSO0FBR007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQURSO0FBSU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBSU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBSU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBTU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpSO0FBYUk7RUFDSSxZQUFBO0FBWFI7QUFZTTtFQUVFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhSO0FBY1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVpaO0FBZU07RUFDQyxrQkFBQTtFQUNDLFNBQUE7QUFiUjtBQWNNO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYlI7QUFnQlE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQWRaO0FBbUJFO0VBQ0UseUJBQUE7QUFoQko7QUFrQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWhCTjtBQWtCSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBaEJOO0FBb0JFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwrRUFBQTtFQUNBLCtCQUFBO0FBakJKO0FBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBaEJKO0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZko7QUFnQkk7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWtCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWZKO0FBZ0JJO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZEo7QUFvQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFqQko7QUFvQkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFqQkY7QUFxQkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQW9CQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFqQkY7QUFvQkE7RUFDRSxnQ0FBQTtBQWpCRjtBQXNCQTtFQUVFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsK0JBQUE7QUFwQkY7QUF1QkE7RUFDRSxtQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLCtFQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXBCRjtBQXVCQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBcUJFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXVCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQXBCRjtBQXVCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBcEJGIiwiZmlsZSI6IndibG9vZC1wcmVzc3VyZS1ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyZ2V0XG57XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7ICAgIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbn1cbi5jdXJyZW50XG57XG4gICAgcHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O3BhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbn1cblxuLnRleHQtd2VpZ2h0e1xuICAgIGNvbG9yOiMyQTlDRkY7XG59XG5cbi5iYXJDb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgLmJhcntcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBkaXZ7XG4gICAgICAgLy8gd2lkdGg6IDIwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgfVxuICAgICAgLmxpZ2h0LXllbGxvd3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZWY2NztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6MjAlICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmdyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdkN2ExO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDoyMCVcblxuICAgICAgfVxuICAgICAgLnllbGxvd3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDcxNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6MjAlXG4gICAgICB9XG4gICAgICAub3Jhbmdle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzNiOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgICBcbiAgICAgICAgd2lkdGg6MjAlICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5yZWR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU5NWE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOjIwJSAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZXtcbiAgICAgIGRpdntcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHB7XG4gICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgLnNsaWRlcntcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgZGl2e1xuICAgICAgICAvLyB3aWR0aDogNDUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgjMDAwLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zbGlkZXItYm90dG9te1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgZGl2e1xuICAgICAgICAvLyB3aWR0aDogNDUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgjMDAwLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtLndlaWdodC1kYWlseSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gIHBhZGRpbmc6IDJyZW0gM3JlbSAwIDNyZW07XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNmI2NzY3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICBcbiAgfVxuICAuc2F2ZXtcbiAgICAtLWJhY2tncm91bmQ6ICMwMUEzQTQ7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcImd0LWFtZXJpY2Etc3RhbmRhcmQtcmVndWxhclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxhc3QtZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4uYm1pLXRleHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2YjY3Njc7XG4gICAgc3BhbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBcbiAgICB9XG59XG4udGFyZ2V0LXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzZiNjc2NztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIFxuICAgIH1cblxufVxuXG4uYWRke1xuICAgIGNvbG9yOiAjMDFBM0E0O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuLm1pbnVze1xuICBjb2xvcjogIzAxQTNBNDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIFxufVxuXG4uaGVhZGVyc3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGN0ZDICFpbXBvcnRhbnQ7XG4gIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMDFBM0E0IDUwJSwgI0Y2RjdGQyA1MCUpIWltcG9ydGFudDtcblxufVxuXG5pb24tY2FyZHtcbiAgLy8gbWFyZ2luOiAzMHB4OyBcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4OyBcbiAgYm94LXNoYWRvdzogbm9uZVxufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGdyYXk7XG59XG5cbi5ib3JkZXItYm90dG9tOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi53ZWlnaHQtbG9nLWJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiZ3QtYW1lcmljYS1zdGFuZGFyZC1yZWd1bGFyXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDFBM0E0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLndlaWdodC1oZWFkZXItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZy1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5cbi53ZWlnaHQtZGF0YSB7XG4gIGhlaWdodDogMzB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59Il19 */";

/***/ }),

/***/ 11383:
/*!******************************************************************************!*\
  !*** ./src/app/wblood-pressure-log/wblood-pressure-log.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".weight-log-btn {\n  --background: #01A3A4;\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  --border-radius: 5px !important;\n}\n\n.close-icon {\n  --inner-padding-end: 0;\n  color: #01A3A4;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndibG9vZC1wcmVzc3VyZS1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0VBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6IndibG9vZC1wcmVzc3VyZS1sb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlaWdodC1sb2ctYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMUEzQTQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcImd0LWFtZXJpY2Etc3RhbmRhcmQtcmVndWxhclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIGNvbG9yOiAjMDFBM0E0O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */";

/***/ }),

/***/ 46566:
/*!**********************************************************************************!*\
  !*** ./src/app/wblood-pressure-guage/wblood-pressure-guage.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content >\n  <div style=\"padding-top: 1.5rem; border-radius: 1rem;background: #f3f3f3;\">\n  <ion-row>\n    <ion-col class=\"ion-text-right\">\n      <ion-icon (click)=\"close()\" style=\"font-size: 2rem; color:#01a3a4;font-weight: 600;margin-right:1rem\" name=\"close-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px; \n    border-bottom: 1px solid #01a3a4;\n    color:#01a3a4;\n    padding-bottom: 15px;\">\n      Analysis\n    </ion-card-header>\n    <!-- <ion-card-content>\n      <canvas #weightCanvas></canvas>\n    </ion-card-content> -->\n    <ion-card-content>\n      <!-- <canvas height=\"200\" #weightCanvasNew></canvas> -->\n      <app-wblood-pressure [isShowButton]=\"false\" >\n\n      </app-wblood-pressure>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px 0; \n      border-bottom: 1px solid #01a3a4;\n      color:#01a3a4;\n      padding-bottom: 15px;\">\n      <div class=\"weight-header-text\">\n        \n        <span style=\"padding-top: 5px;\">Blood Pressure Log</span>\n        <!-- <div (click)=\"addHealthData()\" class=\"log-data\">\n          <span>Log</span>\n        </div> -->\n        <ion-icon (click)=\"addHealthData()\" class=\"log-data\" name=\"add-outline\" style=\"font-size: 2rem;\"></ion-icon>\n   \n      </div>\n      \n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf=\"healthData && healthData.length\">\n        <ion-row class=\"list-header border-bottom\">\n          <ion-col class=\"ion-no-padding\"><b>Date</b></ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\"><b>Min</b></ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\"><b>Max</b></ion-col>\n        </ion-row>\n        <span *ngFor=\"let dayData of healthData\">\n        <ion-row class=\"content border-bottom\" *ngIf=\"dayData?.healthData?.bloodPressure\">\n          <ion-col class=\"ion-no-padding\">{{formatedDate(dayData.updateDate)}}</ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\" > {{dayData?.healthData?.bloodPressure?.systolic}}</ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\" > {{dayData?.healthData?.bloodPressure?.diastolic}}</ion-col>\n        </ion-row>\n      </span>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-card-header style=\"margin: 15px 25px; \n    border-bottom: 1px solid #01a3a4;\n    color:#01a3a4;\n    padding-bottom: 15px;\">\n      BMI\n    </ion-card-header>\n    <ion-card-content>    \n      <div class=\"barContainer\">\n          <p class=\"bmi-text\">\n              {{currentBMI.value}}\n              <span [ngStyle]=\"getColor(currentBMI.value)\"[innerHTML]=\"setLabel(currentBMI.value)\"></span>\n              <span> (Current)</span>\n            \n            </p>\n        <div class=\"slider\">\n          <div [ngStyle]=\"getWidth(currentBMI.value)\">\n              <ion-icon name=\"caret-down-outline\"></ion-icon>\n         </div>\n        </div>\n        <div class=\"bar\">\n          <div class=\"green\"></div>\n          <div class=\"light-yellow\"></div>\n          <div class=\"yellow\"></div>\n          <div class=\"orange\"></div>\n          <div class=\"red\"></div>\n        </div>\n        <div class=\"value\">\n          <div style=\"width:20%\">\n            <p>18.5</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>25</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>30</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>35</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>40</p>\n          </div>\n          <div class=\"last-div\">\n              <p>45</p>\n            </div>\n        </div>\n        <div class=\"slider-bottom\">\n            <div [ngStyle]=\"getWidth(targetBMI.value)\">\n                <ion-icon name=\"caret-up-outline\"></ion-icon>\n           </div>\n           \n          </div>\n      </div>\n      <div>\n          <p class=\"target-text\">\n            {{targetBMI.value}}\n            <span [ngStyle]=\"getColor(targetBMI.value)\"[innerHTML]=\"setLabel(targetBMI.value)\"></span>\n            <span> (Target)</span>                 \n          </p>\n          </div>\n\n    </ion-card-content>\n  </ion-card> -->\n  \n</div>\n</ion-content>\n\n";

/***/ }),

/***/ 64704:
/*!******************************************************************************!*\
  !*** ./src/app/wblood-pressure-log/wblood-pressure-log.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"end\" name=\"close-circle-outline\" class=\"close-icon\" (click)=\"close()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\" no-Padding no-Margin>\n    <ion-label style=\"font-size: 1.2rem;color:#01a3a4\">Blood Pressure</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label style=\"width: 25%;\">Min <span style=\"color:red\">*</span></ion-label>\n    <ion-input class=\"border-bottom\"  type=\"number\" [(ngModel)]=\"minPressure\"  [ngClass]=\"{ 'error': !minPressure }\" placeholder=\"80\"\n    (ionInput)=\"minPressure = $event.target.value\"></ion-input>\n  </ion-item>\n  <ion-item  lines=\"none\">\n    <ion-label style=\"width: 25%;\">Max <span style=\"color:red\">*</span></ion-label>\n    <ion-input class=\"border-bottom\"  type=\"number\" [(ngModel)]=\"maxPressure\"  [ngClass]=\"{ 'error': !maxPressure }\" placeholder=\"120\"\n    (ionInput)=\"maxPressure = $event.target.value\"></ion-input>\n  </ion-item>\n  <ion-item  lines=\"none\">\n    <ion-label>Date</ion-label>\n    <ion-datetime class=\"border-bottom\" displayFormat=\"DD/MM/YYYY\" pickerFormat=\"DD/MM/YYYY\" \n    (ionChange)=\"logDate = $event.detail.value\"  [(ngModel)]=\"logDate\"></ion-datetime>\n  </ion-item>\n  <ion-button (click)=\"addHealthData(minPressure,maxPressure)\"  class=\"weight-log-btn ion-margin\" expand=\"block\">Log</ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_wblood-pressure-guage_wblood-pressure-guage_module_ts.js.map