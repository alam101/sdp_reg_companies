"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_weight-guage_weight-guage_module_ts"],{

/***/ 65129:
/*!*************************************************************!*\
  !*** ./src/app/weight-guage/weight-guage-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightGuagePageRoutingModule": () => (/* binding */ WeightGuagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _weight_guage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weight-guage.page */ 83752);




const routes = [
    {
        path: '',
        component: _weight_guage_page__WEBPACK_IMPORTED_MODULE_0__.WeightGuagePage
    }
];
let WeightGuagePageRoutingModule = class WeightGuagePageRoutingModule {
};
WeightGuagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WeightGuagePageRoutingModule);



/***/ }),

/***/ 88460:
/*!*****************************************************!*\
  !*** ./src/app/weight-guage/weight-guage.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightGuagePageModule": () => (/* binding */ WeightGuagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _weight_guage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weight-guage-routing.module */ 65129);
/* harmony import */ var _weight_guage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weight-guage.page */ 83752);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 45642);








let WeightGuagePageModule = class WeightGuagePageModule {
};
WeightGuagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _weight_guage_routing_module__WEBPACK_IMPORTED_MODULE_0__.WeightGuagePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_weight_guage_page__WEBPACK_IMPORTED_MODULE_1__.WeightGuagePage]
    })
], WeightGuagePageModule);



/***/ }),

/***/ 83752:
/*!***************************************************!*\
  !*** ./src/app/weight-guage/weight-guage.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightGuagePage": () => (/* binding */ WeightGuagePage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _weight_guage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weight-guage.page.html?ngResource */ 78085);
/* harmony import */ var _weight_guage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weight-guage.page.scss?ngResource */ 37843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 70900);
/* harmony import */ var _core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utility/utilities */ 29276);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _weight_log_weight_log_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../weight-log/weight-log.page */ 4468);













let WeightGuagePage = class WeightGuagePage {
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
    this.weightGraph();
    this.getHealthData();
  }

  ngOnInit() {
    this.weightGraph();
    this.getHealthData(); //  this.navigateToUpdrade()
  } // async paymentSubscribeModel(content) {
  //   const modal = await this.modalController.create({
  //     component: PaymentSubscribePopupComponent,
  //     backdropDismiss: true,
  //     cssClass: 'app-offer-popup',
  //     componentProps: { 'content': content, 'onClose': 'consume' }
  //   });
  //   return await modal.present();
  // }


  navigateToUpdrade() {// if (!CONSTANTS.isPlanActiveParent) setTimeout(() => this.paymentSubscribeModel('weightloss'), 1000);//this.router.navigate(["upgrade-plan"]), 1000);
    // this.storage.get("profileData").then(val => {
    //   let profile = this.utilities.parseJSON(val).profile;
    //   if (profile && !(profile.planType == 'trial'
    //     || profile.planType == 'trialEnd'
    //     || profile.planType == 'premiumEnd')) {
    //     setTimeout(() => this.router.navigate(["upgrade-plan"]), 3000)
    //   }
    // });
  }

  ngAfterViewInit() {
    this.logDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format("l");
    moment__WEBPACK_IMPORTED_MODULE_5___default().updateLocale('en', {
      week: {
        dow: 1
      }
    }); // this.weightChart = new Chart(this.weightCanvas.nativeElement, {
    //   type: "line",
    //   data: {
    //     labels: [],
    //     datasets: [
    //       {
    //         data: [],
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     animation: {
    //       duration: 0
    //     },
    //     hover: {
    //       animationDuration: 0
    //     },
    //     responsiveAnimationDuration: 0,
    //     scales: {
    //       xAxes: [{
    //         type: 'time',
    //         time: {
    //           unit: 'day',
    //           unitStepSize: 1,
    //           displayFormats: {
    //             day: 'MMM D'
    //           }
    //         },
    //         gridLines: {
    //           display: false
    //         }
    //       }],
    //       yAxes: [{
    //         ticks: {
    //           maxTicksLimit: 8,
    //         },
    //         gridLines: {
    //           display: false
    //         }
    //       }]
    //     }
    //   }
    // });
  }

  createChart() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // let DATA_COUNT = 7;
      // let labels = [];
      // for (let i = 0; i < DATA_COUNT; ++i) {
      //   labels.push((i+1).toString());
      // }
      let datapoints = [];
      let labels = [];

      _this.healthData.forEach(ele => {
        datapoints.push(ele.healthData.weightKg);
        labels.push(ele.formatedDate);
      }); // let datapoints = [90, 60, 100, 40, 110, 80, 90];


      _this.weightChartNew = yield new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(_this.weightCanvasNew.nativeElement, {
        type: "line",
        data: {
          // labels: labels,
          labels: labels,
          datasets: [{
            // label: 'Cubic interpolation (monotone)',
            //   data: datapoints,
            //   borderColor: "red",
            //   fill: false,
            //   cubicInterpolationMode: 'monotone',
            //   tension: 0.4
            // }, {
            //   // label: 'Cubic interpolation',
            //   data: datapoints,
            //   borderColor: "blue",
            //   fill: false,
            //   tension: 0.4
            // }, {
            // label: false,
            data: datapoints,
            borderColor: "#01a3a4",
            fill: false
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: 'top'
            },
            title: {
              display: false
            }
          },
          interaction: {
            intersect: false
          },
          scales: {
            x: {
              display: false,
              title: {
                display: false
              }
            },
            y: {
              display: true,
              title: {
                display: false
              } // suggestedMin: 80,
              // suggestedMax: 90

            }
          }
        }
      });

      _this.healthData.sort(function (a, b) {
        return new Date(b.updateDate).getTime() - new Date(a.updateDate).getTime();
      });
    })();
  }

  weightGraph() {
    //this.utilities.presentLoading();
    let profile = JSON.parse(localStorage.getItem("profileData"));
    this.profileData = profile; // let profile = this.utilities.parseJSON(profile);

    this.appService.getWeightGraph().then(res => {
      //this.utilities.hideLoader();
      profile["demographic"]["weight"]["value"] = res["currentWeight"];
      this.storage.set("profileData", this.utilities.parseString(profile));
      this.weightGraphData = JSON.parse(JSON.stringify(res));
      let points = [];
      let labels = [];
      this.targetWeight = this.weightGraphData.suggstedWeight.toFixed(1); // if(!this.weightGraphData.currentWeight){
      //   if (profile.demographic.weight.unit == 'kg') {
      //     this.weightGraphData.currentWeight = profile.demographic.weight.value;
      //   } else {
      //     this.weightGraphData.currentWeight = (profile.demographic.weight.value * 0.453592);
      //   }
      // }

      this.currrentValueInKG = res["currentWeight"];
      let currentWeight = profile.demographic.weight.unit == 'kg' ? res["currentWeight"] : res["currentWeight"] / this.poundValue;
      this.weightGraphData.currentWeight = currentWeight;
      this.weightGraphData.dailyWeightArray = profile.demographic.weight.unit == 'kg' ? this.weightGraphData.dailyWeightArray : this.weightGraphData.dailyWeightArray / this.poundValue;
      this.currentWeight = this.weightGraphData.currentWeight.toFixed(1);

      if (this.weightGraphData.dailyWeightArray) {
        this.weightGraphData.dailyWeightArray.forEach(element => {
          labels.push(new Date(element.createdTime));
          points.push(element.weight);
        });
      } else {
        labels.push(new Date(this.weightGraphData.startDate));
        points.push(this.currentWeight);
      } //  this.caloriesChart.data.labels = labels;
      // this.weightChart.data = {
      //   labels: labels,
      //   datasets: [
      //     {
      //       data: points,
      //       label: 'weight',
      //       fill: false,
      //       backgroundColor: "#2A9CFF",
      //       borderColor: "#2A9CFF",
      //       borderWidth: 1
      //     }
      //   ]
      // };
      // this.weightChart.update();
      //  BMI =Kg/m2


      let heightInMeter = 0;

      if (profile.demographic.height.unit == 'cm') {
        heightInMeter = profile.demographic.height.value * 0.01;
      } else {
        heightInMeter = profile.demographic.height.value * 2.54 * 0.01;
      }

      this.weightDaily = parseFloat(this.weightGraphData.currentWeight).toFixed(1);
      this.targetWeightDaily = (profile.demographic.weight.unit == "pound" ? this.weightGraphData.suggstedWeight / this.poundValue : this.weightGraphData.suggstedWeight).toFixed(1);
      this.currentBMI.value = (parseFloat(this.currrentValueInKG) / (heightInMeter * heightInMeter)).toFixed(1);
      this.targetBMI.value = (parseFloat(this.weightGraphData.suggstedWeight) / (heightInMeter * heightInMeter)).toFixed(1);
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

  formatedDate(dt) {
    return moment__WEBPACK_IMPORTED_MODULE_5___default()(dt).format('D-MMM');
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
          this.weightGraph();
        }, err => {
          //this.utilities.hideLoader();
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
        this.weightGraph();
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

  getHealthData() {
    // this.storage.get("profileData").then(val => {
    this.profileData = this.utilities.parseJSON(localStorage.getItem("profileData"));
    this.appService.getHealthData(this.profileData.profile.email).then(res => {
      console.log('getHealthData response: ', res);
      this.healthData = [];

      if (res && res.length) {
        res.sort((a, b) => new Date(b.updateDate).getTime() - new Date(a.updateDate).getTime());
        res.forEach(element => {
          element['formatedDate'] = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date(element.updateDate)).format("MMM D, YYYY"); // this.profileData.demographic.weight.value - element?.healthData?.weightKg

          if (element?.healthData?.weightKg && this.profileData.demographic.weight.value > element?.healthData?.weightKg) {
            element['displayWeight'] = element?.healthData?.weightKg ? "+ " + (this.profileData.demographic.weight.value - element?.healthData?.weightKg) : null;
            this.healthData.push(element);
          } else if (element?.healthData?.weightKg) {
            element['displayWeight'] = element?.healthData?.weightKg ? "- " + (element?.healthData?.weightKg - this.profileData.demographic.weight.value) : null;
            this.healthData.push(element);
          }
        });
        this.createChart();
      } else {
        let obj = {
          'formatedDate': moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date(this.profileData.profile.updatedDateTime)).format("MMM D, YYYY"),
          'healthData': {
            weightKg: this.profileData.demographic.weight.value
          }
        };
        this.healthData.push(obj);
        this.createChart();
      }
    }); // })
  }

  addHealthData() {
    var _this2 = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _weight_log_weight_log_page__WEBPACK_IMPORTED_MODULE_7__.WeightLogPage,
        backdropDismiss: true,
        cssClass: 'weight-log-modal',
        componentProps: {
          logWeight: _this2.logWeight,
          logDate: _this2.logDate,
          profileData: _this2.profileData
        }
      });
      modal.onDidDismiss().then(data => {
        if (data && data.data) {
          window.location.reload();
        }
      });
      return yield modal.present();
    })();
  }

};

WeightGuagePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage
}, {
  type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: _core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}];

WeightGuagePage.propDecorators = {
  weightCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ["weightCanvas"]
  }],
  weightCanvasNew: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ["weightCanvasNew"]
  }]
};
WeightGuagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-weight-guage',
  template: _weight_guage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_weight_guage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], WeightGuagePage);


/***/ }),

/***/ 4468:
/*!***********************************************!*\
  !*** ./src/app/weight-log/weight-log.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightLogPage": () => (/* binding */ WeightLogPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _weight_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weight-log.page.html?ngResource */ 73851);
/* harmony import */ var _weight_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weight-log.page.scss?ngResource */ 68727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











let WeightLogPage = class WeightLogPage {
  constructor(appService, utilities, modalController, cdr, activatedRoute) {
    this.appService = appService;
    this.utilities = utilities;
    this.modalController = modalController;
    this.cdr = cdr;
    this.activatedRoute = activatedRoute;
    this.logDate = "";
    this.logWeight = '';
    this.isShow = false;
    this.validateWeight = 0;
    this.activatedRoute.data;
  }

  ionViewWillEnter() {
    this.logDate = new Date().toISOString();
    this.logWeight = undefined;
    this.validateWeight = 0;
  }

  ngOnInit() {
    console.log('Weight:', this.logWeight);
    this.logDate = new Date().toISOString();
    this.logWeight = undefined;
    this.validateWeight = 0;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  formatDate(date) {
    return date.toLocaleDateString('en-GB');
  }

  onDateChange(event) {
    this.logDate = event.detail.value;
    console.log(this.logDate);
  }

  addHealthData() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("this.logWeight", _this.logWeight);
      let obj = {
        "date": _this.logDate,
        "userId": _this.profileData.profile.email,
        "createdBy": null,
        "weightKg": _this.logWeight
      };
      console.log("this.logWeight", _this.logWeight);

      if (_this.logWeight?.toString()?.trim() === undefined) {
        _this.isShow = true;
        return;
      }

      _this.appService.addHealthData(obj).then(res => {
        _this.utilities.showSuccessToast('Weight logged successfully');

        console.log('getHealthData response: ', res);
        _this.logWeight = ''; // this.logDate = "";

        _this.modalController.dismiss(true);
      }).catch(err => {
        _this.utilities.showErrorToast('Can not log weight data.');
      });
    })();
  }

  close() {
    this.modalController.dismiss();
  }

};

WeightLogPage.ctorParameters = () => [{
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}];

WeightLogPage.propDecorators = {
  logDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  logWeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
WeightLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-weight-log',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule],
  template: _weight_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_weight_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], WeightLogPage);


/***/ }),

/***/ 37843:
/*!****************************************************************!*\
  !*** ./src/app/weight-guage/weight-guage.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".target {\n  padding-left: 10%;\n  font-size: 16px;\n}\n.target p {\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  padding-left: 4px;\n}\n.current p {\n  font-weight: 700;\n  font-size: 18px;\n  margin: 0px;\n  letter-spacing: 0.5px;\n  padding-left: 4px;\n}\n.text-weight {\n  color: #2A9CFF;\n}\n.barContainer {\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n}\n.barContainer .bar {\n  height: 15px;\n  overflow: hidden;\n}\n.barContainer .bar div {\n  height: 100%;\n  float: left;\n}\n.barContainer .bar .light-yellow {\n  background-color: #c2ef67;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .green {\n  background-color: #27d7a1;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .yellow {\n  background-color: #ffd717;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .orange {\n  background-color: #ffa73b;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .bar .red {\n  background-color: #ff595a;\n  border-radius: 10px;\n  width: 20%;\n}\n.barContainer .value div {\n  height: 100%;\n  float: left;\n  position: relative;\n  right: 8px;\n  font-size: 12px;\n  line-height: 20px;\n}\n.barContainer .slider {\n  height: 22px;\n}\n.barContainer .slider div {\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  position: absolute;\n}\n.barContainer .slider ion-icon {\n  float: right;\n  font-size: 2em;\n}\n.barContainer .slider-bottom {\n  position: relative;\n  top: 11px;\n}\n.barContainer .slider-bottom div {\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  position: absolute;\n}\n.barContainer .slider-bottom ion-icon {\n  float: right;\n  font-size: 2em;\n}\nion-item.weight-daily {\n  --background: transparent;\n}\nion-item.weight-daily img {\n  height: 25px;\n  width: auto;\n}\nion-item.weight-daily ion-input {\n  text-align: center;\n  border: 1px solid #b3b3b3;\n  font-size: 16px;\n  color: #6b6767;\n  border-radius: 10px;\n}\n.save {\n  --background: #01A3A4;\n  --color: #fff;\n  margin-top: 5px;\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  --border-radius: 5px !important;\n}\n.last-div {\n  position: absolute !important;\n  right: 0px;\n}\n.bmi-text {\n  position: relative;\n  text-align: center;\n  font-size: 16px;\n  color: #6b6767;\n}\n.bmi-text span {\n  font-size: 15px;\n  font-weight: normal;\n}\n.target-text {\n  text-align: center;\n  font-size: 16px;\n  color: #6b6767;\n  padding-top: 10px;\n}\n.target-text span {\n  font-size: 15px;\n  font-weight: normal;\n}\n.add {\n  color: #01A3A4;\n  font-size: 1.8rem;\n}\n.minus {\n  color: #01A3A4;\n  font-size: 1.8rem;\n}\n.headers {\n  margin-left: 10px;\n  font-weight: 600;\n  font-size: 1rem;\n}\nion-card-header {\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n}\nion-content {\n  --background: #F6F7FC !important;\n}\nion-card {\n  margin: 16px;\n  border-radius: 30px;\n  box-shadow: none;\n}\n.border-bottom {\n  border-bottom: 0.5px solid gray;\n}\n.border-bottom:last-child {\n  border-bottom: none;\n}\n.content {\n  padding: 10px 0;\n  font-size: 14px;\n}\n.list-header {\n  padding: 10px 0;\n  font-size: 0.9rem;\n}\n.weight-log-btn {\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #01A3A4;\n  width: 100%;\n  font-weight: 700;\n}\n.weight-header-text {\n  display: flex;\n  justify-content: space-between;\n}\n.log-data {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n.log-data span {\n  font-size: 0.8rem;\n  color: #000;\n  margin-left: 0.5rem;\n  border: 1px solid #000;\n  border-radius: 5px;\n  padding: 2px 5px;\n  font-weight: 400;\n}\n.weight-data {\n  height: 30vh;\n  overflow: hidden;\n}\n.full-height {\n  height: auto;\n  overflow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlaWdodC1ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQXNCLGlCQUFBO0FBQTlCO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBREo7QUFFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFOO0FBQ007RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQUFSO0FBRU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFSO0FBR007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQURSO0FBSU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBSU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBSU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSO0FBTU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpSO0FBYUk7RUFDSSxZQUFBO0FBWFI7QUFZTTtFQUVFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhSO0FBY1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVpaO0FBZU07RUFDQyxrQkFBQTtFQUNDLFNBQUE7QUFiUjtBQWNNO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYlI7QUFnQlE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQWRaO0FBbUJFO0VBQ0UseUJBQUE7QUFoQko7QUFrQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWhCTjtBQWtCSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBaEJOO0FBb0JFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwrRUFBQTtFQUNBLCtCQUFBO0FBakJKO0FBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBaEJKO0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZko7QUFnQkk7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWtCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWZKO0FBZ0JJO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZEo7QUFvQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFqQko7QUFvQkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFqQkY7QUFxQkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQW9CQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFqQkY7QUFvQkE7RUFDRSxnQ0FBQTtBQWpCRjtBQXNCQTtFQUVFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsK0JBQUE7QUFwQkY7QUF1QkE7RUFDRSxtQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLCtFQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXBCRjtBQXVCQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBcUJFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXVCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQXBCRjtBQXVCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBcEJGIiwiZmlsZSI6IndlaWdodC1ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyZ2V0XG57XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7ICAgIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbn1cbi5jdXJyZW50XG57XG4gICAgcHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O3BhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbn1cblxuLnRleHQtd2VpZ2h0e1xuICAgIGNvbG9yOiMyQTlDRkY7XG59XG5cbi5iYXJDb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgLmJhcntcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBkaXZ7XG4gICAgICAgLy8gd2lkdGg6IDIwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgfVxuICAgICAgLmxpZ2h0LXllbGxvd3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZWY2NztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6MjAlICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmdyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdkN2ExO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDoyMCVcblxuICAgICAgfVxuICAgICAgLnllbGxvd3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDcxNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6MjAlXG4gICAgICB9XG4gICAgICAub3Jhbmdle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzNiOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgICBcbiAgICAgICAgd2lkdGg6MjAlICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5yZWR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU5NWE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOjIwJSAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZXtcbiAgICAgIGRpdntcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHB7XG4gICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgLnNsaWRlcntcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgZGl2e1xuICAgICAgICAvLyB3aWR0aDogNDUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgjMDAwLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zbGlkZXItYm90dG9te1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgZGl2e1xuICAgICAgICAvLyB3aWR0aDogNDUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgjMDAwLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtLndlaWdodC1kYWlseSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gIHBhZGRpbmc6IDJyZW0gM3JlbSAwIDNyZW07XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNmI2NzY3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICBcbiAgfVxuICAuc2F2ZXtcbiAgICAtLWJhY2tncm91bmQ6ICMwMUEzQTQ7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcImd0LWFtZXJpY2Etc3RhbmRhcmQtcmVndWxhclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxhc3QtZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4uYm1pLXRleHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2YjY3Njc7XG4gICAgc3BhbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBcbiAgICB9XG59XG4udGFyZ2V0LXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzZiNjc2NztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIFxuICAgIH1cblxufVxuXG4uYWRke1xuICAgIGNvbG9yOiAjMDFBM0E0O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuLm1pbnVze1xuICBjb2xvcjogIzAxQTNBNDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIFxufVxuXG4uaGVhZGVyc3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjZGN0ZDICFpbXBvcnRhbnQ7XG4gIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMDFBM0E0IDUwJSwgI0Y2RjdGQyA1MCUpIWltcG9ydGFudDtcblxufVxuXG5pb24tY2FyZHtcbiAgLy8gbWFyZ2luOiAzMHB4OyBcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4OyBcbiAgYm94LXNoYWRvdzogbm9uZVxufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGdyYXk7XG59XG5cbi5ib3JkZXItYm90dG9tOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi53ZWlnaHQtbG9nLWJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiZ3QtYW1lcmljYS1zdGFuZGFyZC1yZWd1bGFyXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDFBM0E0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLndlaWdodC1oZWFkZXItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZy1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5cbi53ZWlnaHQtZGF0YSB7XG4gIGhlaWdodDogMzB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59Il19 */";

/***/ }),

/***/ 68727:
/*!************************************************************!*\
  !*** ./src/app/weight-log/weight-log.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".weight-log-btn {\n  --background: #01A3A4;\n  font-size: 1rem;\n  font-family: \"gt-america-standard-regular\", \"Helvetica Neue\", Arial, sans-serif;\n  --border-radius: 5px !important;\n}\n\n.close-icon {\n  --inner-padding-end: 0;\n  color: #01A3A4;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlaWdodC1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0VBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6IndlaWdodC1sb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlaWdodC1sb2ctYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMUEzQTQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcImd0LWFtZXJpY2Etc3RhbmRhcmQtcmVndWxhclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIGNvbG9yOiAjMDFBM0E0O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuXG4vLyBpb24taW5wdXQuZXJyb3Ige1xuLy8gICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiByZWQ7XG4vLyAgIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG4vLyB9Il19 */";

/***/ }),

/***/ 78085:
/*!****************************************************************!*\
  !*** ./src/app/weight-guage/weight-guage.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content >\n  <div style=\"padding-top: 1.5rem; border-radius: 1rem;background: #f3f3f3;\">\n  <ion-row>\n    <ion-col class=\"ion-text-right\">\n      <ion-icon (click)=\"close()\" style=\"font-size: 2rem; color:#01a3a4;font-weight: 600;margin-right:1rem\" name=\"close-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px; \n    border-bottom: 1px solid #01a3a4;\n    color:#01a3a4;\n    padding-bottom: 15px;\">\n      Analysis\n    </ion-card-header>\n    <!-- <ion-card-content>\n      <canvas #weightCanvas></canvas>\n    </ion-card-content> -->\n    <ion-card-content>\n      <!-- <canvas height=\"200\" #weightCanvasNew></canvas> -->\n      <app-weight-show [suggestedWeight]=\"profileData?.demographic?.suggestedWeight\" [current]=\"profileData?.demographic?.currentWeight\" [totalWeight]=\"profileData?.demographic?.weightInKg\"></app-weight-show>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px 0; \n      border-bottom: 1px solid #01a3a4;\n      color:#01a3a4;\n      padding-bottom: 15px;\">\n      <div class=\"weight-header-text\" >\n       <span style=\"padding-top: 5px;\"> Weight Log</span>\n        <!-- <div (click)=\"addHealthData()\" class=\"log-data\">\n          <span>Log</span>\n        </div> -->\n        <ion-icon (click)=\"addHealthData()\" class=\"log-data\" name=\"add-outline\" style=\"font-size: 2rem;\"></ion-icon>\n      </div>\n      \n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf=\"healthData && healthData.length\">\n        <ion-row class=\"list-header border-bottom\">\n          <ion-col class=\"ion-no-padding\"><b>Date</b></ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\"><b>Since last</b></ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\"><b>Weight(Kg)</b></ion-col>\n        </ion-row>\n        <ion-row class=\"content border-bottom\" *ngFor=\"let dayData of healthData\">\n          <ion-col class=\"ion-no-padding\">{{formatedDate(dayData.formatedDate)}}</ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\" *ngIf=\"dayData.displayWeight\">{{dayData.displayWeight}} Kg</ion-col>\n          <ion-col class=\"ion-text-center ion-no-padding\" size=\"3.5\" *ngIf=\"dayData.healthData.weightKg\">{{dayData.healthData.weightKg}} Kg</ion-col>\n        </ion-row>\n      </div>\n  \n  \n      <div>\n      \n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header style=\"margin: 15px 25px; \n    border-bottom: 1px solid #01a3a4;\n    color:#01a3a4;\n    padding-bottom: 15px;\">\n      BMI\n    </ion-card-header>\n    <ion-card-content>    \n      <div class=\"barContainer\">\n          <p class=\"bmi-text\">\n              {{currentBMI.value}}\n              <span [ngStyle]=\"getColor(currentBMI.value)\"[innerHTML]=\"setLabel(currentBMI.value)\"></span>\n              <span> (Current)</span>\n            \n            </p>\n        <div class=\"slider\">\n          <div [ngStyle]=\"getWidth(currentBMI.value)\">\n              <ion-icon name=\"caret-down-outline\"></ion-icon>\n         </div>\n        </div>\n        <div class=\"bar\">\n          <div class=\"green\"></div>\n          <div class=\"light-yellow\"></div>\n          <div class=\"yellow\"></div>\n          <div class=\"orange\"></div>\n          <div class=\"red\"></div>\n        </div>\n        <div class=\"value\">\n          <div style=\"width:20%\">\n            <p>18.5</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>25</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>30</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>35</p>\n          </div>\n          <div style=\"width:20%\">\n            <p>40</p>\n          </div>\n          <div class=\"last-div\">\n              <p>45</p>\n            </div>\n        </div>\n        <div class=\"slider-bottom\">\n            <div [ngStyle]=\"getWidth(targetBMI.value)\">\n                <ion-icon name=\"caret-up-outline\"></ion-icon>\n           </div>\n           \n          </div>\n      </div>\n      <div>\n          <p class=\"target-text\">\n            {{targetBMI.value}}\n            <span [ngStyle]=\"getColor(targetBMI.value)\"[innerHTML]=\"setLabel(targetBMI.value)\"></span>\n            <span> (Target)</span>                 \n          </p>\n          </div>\n\n    </ion-card-content>\n  </ion-card>\n </div>\n</ion-content>\n\n<!--  -->";

/***/ }),

/***/ 73851:
/*!************************************************************!*\
  !*** ./src/app/weight-log/weight-log.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <!-- Close Icon -->\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"end\" name=\"close-circle-outline\" class=\"close-icon\" (click)=\"close()\"></ion-icon>\n  </ion-item>\n\n  <!-- Weight Input -->\n  <ion-item lines=\"none\">\n    <ion-label position=\"fixed\" style=\"width: 25%;\">Weight <span style=\"color:red\">*</span></ion-label>\n    <ion-input\n      type=\"number\"\n       class=\"border-bottom\"\n      [(ngModel)]=\"logWeight\"\n      [ngClass]=\"{ 'error': !logWeight }\"\n      placeholder=\"50\">\n    </ion-input>\n  </ion-item>\n\n  <!-- Date Picker -->\n  <ion-item class=\"border-bottom\">\n    <ion-label position=\"stacked\">Date</ion-label>\n    <ion-datetime\n      style=\"width: 100%;\"\n      presentation=\"date\"\n      [(ngModel)]=\"logDate\"\n      (ionChange)=\"onDateChange($event)\">\n    </ion-datetime>\n  </ion-item>\n\n  <!-- Submit Button -->\n  <ion-button\n    expand=\"block\"\n    class=\"weight-log-btn ion-margin\"\n    (click)=\"addHealthData()\"\n    [disabled]=\"!logDate || !logWeight\">\n    Log\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_weight-guage_weight-guage_module_ts.js.map