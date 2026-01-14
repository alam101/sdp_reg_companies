"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_boarding2_boarding2_module_ts"],{

/***/ 10114:
/*!*******************************************************************!*\
  !*** ./src/app/newBoarding/boarding2/boarding2-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding2PageRoutingModule": () => (/* binding */ Boarding2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _boarding2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding2.page */ 36686);




const routes = [
    {
        path: '',
        component: _boarding2_page__WEBPACK_IMPORTED_MODULE_0__.Boarding2Page
    }
];
let Boarding2PageRoutingModule = class Boarding2PageRoutingModule {
};
Boarding2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Boarding2PageRoutingModule);



/***/ }),

/***/ 90984:
/*!***********************************************************!*\
  !*** ./src/app/newBoarding/boarding2/boarding2.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding2PageModule": () => (/* binding */ Boarding2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _boarding2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding2-routing.module */ 10114);
/* harmony import */ var _boarding2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding2.page */ 36686);







let Boarding2PageModule = class Boarding2PageModule {
};
Boarding2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boarding2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Boarding2PageRoutingModule
        ],
        declarations: [_boarding2_page__WEBPACK_IMPORTED_MODULE_1__.Boarding2Page]
    })
], Boarding2PageModule);



/***/ }),

/***/ 36686:
/*!*********************************************************!*\
  !*** ./src/app/newBoarding/boarding2/boarding2.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding2Page": () => (/* binding */ Boarding2Page)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boarding2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding2.page.html?ngResource */ 94390);
/* harmony import */ var _boarding2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boarding2.page.scss?ngResource */ 82855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);











let Boarding2Page = class Boarding2Page {
  constructor(navCtrl, cdr, location, appservice, pickerCtrl, storage, utilities, appService, modalCtrl, router, activatedRoute) {
    this.navCtrl = navCtrl;
    this.cdr = cdr;
    this.location = location;
    this.appservice = appservice;
    this.pickerCtrl = pickerCtrl;
    this.storage = storage;
    this.utilities = utilities;
    this.appService = appService;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.from = "";
    this.terms = true;
    this.targetYear = new Date().getFullYear() - 3;
    this.poundValue = 0.453592;
    this.gender = "";
    this.height = 30;
    this.minHight = 30;
    this.maxHight = 84;
    this.heightType = 'cm';
    this.heightTypeForAPI = "";
    this.startDigit = 0;
    this.endDigit = 10;
    this.weightType = "kg";
    this.maxWeight = 150.0;
    this.inputHeight = `2'6"`;
    this.weight = 20.0;
    this.minWeight = 20.0;
    this.targetweight = 20.0;
    this.targetminWeight = 20.0;
    this.targetmaxWeight = 150.0; // targetweightType: any = "kg";

    this.weightArray = [0, 1, 2, 3, 4, 5, 6];
    this.setWeightFromArray = 50;
    this.selectedWeight = this.setWeightFromArray + this.weightArray[3];
    this.bornYear = [0, 1, 2, 3, 4];
    this.setbornYear = 1990;
    this.selectedbornYear = this.setbornYear + this.bornYear[2];
    this.localData = {};
    this.selectedHeight = 30; // Default height in inches (5 feet 10 inches)

    this.displayHeight = '';
    this.weightMessage = false;
    this.targetWeightMessage = false;
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    console.log("this.compConfig", this.compConfig);

    if (!this.compConfig.isChild) {
      this.weight = 65.0;
      this.minWeight = 65.0;
      this.targetweight = 65.0;
      this.targetYear = new Date().getFullYear() - 18;
      this.inputHeight = `5'6"`;
      this.height = 66;
      this.minHight = 48;
      this.selectedHeight = 66;
    }

    this.clientId = localStorage.getItem('clientId');
    this.activatedRoute.queryParams.subscribe(res => {
      this.from = res['from'];
    });
    this.calculateHeight();
  }

  parseInt(arg0) {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    this.heightType = 'cm';
    this.baseHeight = this.profileData?.demographic?.height?.value || 170;
    this.setHeightType(this.heightType);
  }

  modalClose() {
    this.router.navigate(['new-profile']);
  }

  ngAfterViewInit() {
    this.utilities.logEvent("onboarding_Register_02BasicInfo", {});
    this.storage.get("localData").then(val => {
      this.localData = this.utilities.parseJSON(val);
      console.log(this.localData);

      if (this.localData?.otherMaster?.gender.length > 0) {
        const gender = this.localData?.otherMaster?.gender?.find(r => r.isSelected);

        if (gender) {
          this.gender = gender.code;
        }
      }

      if (this.localData?.age) {
        this.selectedbornYear = this.localData.age.year;
      }

      if (this.localData?.age) {
        this.targetYear = this.localData.age.year;
      }
    });
    this.getProfile();
  }

  getProfile() {
    this.appService.getProfile().then(res => {
      console.log(res);

      if (!this.compConfig.isChild) {
        this.selectedHeight = 66;
        this.inputHeight = `5'6"`;
        this.calculateDesiredWeight();
      } else {
        this.weight = 20;
        this.targetYear = new Date().getFullYear() - 3;
      }

      this.profileData = res;

      if (this.profileData?.demographic?.suggestedWeight != undefined) {
        this.targetweight = Math.round(this.profileData?.demographic?.suggestedWeight);
      }

      if (this.profileData?.demographic?.age?.avg_age) {
        this.targetYear = new Date().getFullYear() - this.profileData?.demographic?.age?.avg_age;
      }

      if (this.profileData?.demographic?.height) {
        this.heightType = this.profileData?.demographic?.height?.unit === "in" ? "feet" : "cm";
        let h = this.heightType === "feet" ? Math.floor(this.profileData?.demographic?.height?.value / 12) + "." + this.profileData?.demographic?.height?.value % 12 : this.profileData?.demographic?.height?.value;
        this.selectedHeight = this.profileData?.demographic?.height?.value;

        if (this.heightType === "feet") {
          this.minHight = 36;
          this.maxHight = 84;
          this.height = h;
          h = h.split(".");
          console.log(h);
          this.inputHeight = `${Math.floor(this.selectedHeight / 12)}'${this.selectedHeight % 12}"`;
          this.heightSplit = h.toString().split(".");
        } else {
          this.inputHeight = h;
          this.height = h;
          this.minHight = 91;
          this.maxHight = 213;
        }

        if (this.profileData?.demographic?.weight) {
          this.weightType = this.profileData?.demographic?.weight?.unit === "pound" ? "lbs" : "kg";
          this.weight = Math.round(this.profileData?.demographic?.weight?.value);
        }

        console.log(this.height, this.inputHeight);
      } else {
        if (!this.compConfig.isChild) {
          this.selectedHeight = 66;
          this.inputHeight = `5'6"`;
          this.minHight = 66;
        } else {
          this.inputHeight = `4'0"`;
          this.minHight = 36;
          this.selectedHeight = 48;
        }

        this.maxHight = 84;
        let h = Math.floor(this.selectedHeight / 12) + "." + this.selectedHeight % 12;
        this.height = h; //    this.inputHeight = `${Math.floor(this.selectedHeight / 12)}'${(this.selectedHeight % 12)}"`;

        this.heightSplit = h.toString().split(".");
        this.calculateDesiredWeight();
      }
    });
  }

  calculateHeight() {
    const feet = Math.floor(this.selectedHeight / 12);
    const inches = this.selectedHeight % 12;
    this.displayHeight = `${feet} ft ${inches} in`;
  }

  getHeight() {
    if (this.heightType === 'feet') {
      // convert inches back to cm and update baseHeight
      this.baseHeight = parseFloat((this.selectedHeight * 2.54).toFixed(1));
      const feet = Math.floor(this.selectedHeight / 12);
      const inches = this.selectedHeight % 12;
      this.inputHeight = `${feet}'${inches}"`;
      this.heightSplit = [feet.toString(), inches.toString()];
    } else {
      // direct cm input
      this.baseHeight = this.selectedHeight;
      this.inputHeight = `${this.selectedHeight} cm`;
      this.heightSplit = [];
    }

    this.height = this.baseHeight;
    this.profileData.demographic.height.value = this.baseHeight;
    this.calculateDesiredWeight();
  }

  calculateDesiredWeight() {
    console.log("calculateDesiredWeight called", this.selectedHeight); //   if(!this.compConfig.isChild){
    //   if (this.heightType === "cm" ) {
    //     debugger;
    //     this.targetweight = Math.ceil(this.selectedHeight - 100);
    //   } else {
    //     debugger;
    //     this.targetweight = Math.ceil(
    //       (this.selectedHeight * 2.54) - 100
    //     );
    //   }
    // }
  }

  goBack() {
    if (this.from) {
      this.router.navigate(['new-profile']);
    } else {
      this.storage.set("pendingPage", "/boarding");
      this.navCtrl.navigateRoot(["/boarding"]);
    }
  }

  goNext() {
    this.weightMessage = false;
    this.targetWeightMessage = false;

    if (!this.terms) {
      this.utilities.presentToast("Please accept terms & conditions!");
      return;
    }

    if (!this.weight) {
      this.utilities.presentToast("Please enter your weight.");
      return;
    }

    if (this.weight < 20 && this.weightType !== "lbs") {
      this.weightMessage = true;
      this.cdr.detectChanges();
      return;
    }

    if (this.weight < 44 && this.weightType === "lbs") {
      this.weightMessage = true;
      this.cdr.detectChanges();
      return;
    }

    if (!this.targetweight && this.clientId !== 'enkeltec') {
      this.utilities.presentToast("Please enter your target weight.");
      return;
    }

    if (this.targetweight < 20 && this.weightType !== "lbs" && this.clientId !== 'enkeltec') {
      this.targetWeightMessage = true;
      return;
    }

    if (this.targetweight < 44 && this.weightType === "lbs" && this.clientId !== 'enkeltec') {
      this.targetWeightMessage = true;
      return;
    }

    let age = new Date().getFullYear() - this.targetYear;
    const data = {
      age: {
        code: "A1",
        label: "15 to 18 years",
        avg_age: Math.ceil(age)
      },
      gender: {
        code: this.gender,
        label: this.gender === "G1" ? "Male" : "Female"
      },
      height: {
        value: this.convertToInFromCM(),
        unit: this.heightTypeForAPI,
        ischecked: true
      },
      weight: {
        unit: this.weightType === "lbs" ? "pound" : "kg",
        value: parseFloat(this.weight),
        ischecked: true
      },
      suggestedWeight: this.targetweight
    };

    if (this.localData?.otherMaster?.height) {
      this.localData.otherMaster.height = [{
        value: this.convertToInFromCM(),
        param: this.heightTypeForAPI,
        ischecked: true
      }];
      this.localData.otherMaster.weight = [{
        value: parseFloat(this.weight),
        param: this.weightType === "lbs" ? "pound" : "kg",
        ischecked: true
      }];
      this.localData.otherMaster.diet = { ...this.localData?.otherMaster?.diet,
        suggestedWeight: this.targetweight,
        param: this.weightType
      };
      this.localData.age = {
        age: Math.ceil(age),
        year: this.targetYear
      };
      if (typeof this.localData !== undefined) this.storage.set("localData", JSON.stringify(this.localData));
    }

    if (!this.gender) {
      this.utilities.presentToast("Please choose your gender.");
      return;
    }

    if (!this.height) {
      this.utilities.presentToast("Please enter your height.");
      return;
    }

    if (this.targetYear < new Date().getFullYear() - 80 || this.targetYear > new Date().getFullYear() - 3) {
      this.utilities.showErrorToast("Please enter correct year [ min:" + (new Date().getFullYear() - 80) + " , max:" + (new Date().getFullYear() - 3) + "]");
      return;
    }

    this.appservice.postDemographic(data).then(res => {
      //const data = this.utilities.parseJSON(local);
      console.log("response ++++", res);

      if (this.localData?.otherMaster?.bmi != undefined) {
        this.localData.otherMaster.bmi = {
          bmi: parseFloat(res.bmi),
          suggestedWeight: Math.round(res.suggestedWeight),
          category: res.category
        };
        console.log("response", res);
        this.storage.set("localData", JSON.stringify(this.localData));
      }

      this.appService.updateTargetWeight({
        targetedWeight: parseFloat(this.targetweight)
      }).then(res => {}, err => {
        this.utilities.hideLoader();
        this.utilities.presentAlert(JSON.stringify(err));
      });

      if (this.from) {
        return this.modalClose();
      }

      this.storage.set("pendingPage", "/boarding3");
      this.navCtrl.navigateForward(["/boarding3"]);
    });
  }

  convertToInFromCM() {
    if (this.heightType === "cm") {
      this.heightTypeForAPI = "cm";
      return this.selectedHeight;
    } else {
      this.heightTypeForAPI = "in";
      console.log(this.heightSplit);
      return this.selectedHeight;
    }
  }

  gotoDemographic() {
    if (this.weightType == "kg") {
      if (this.targetweight < 20 || this.targetweight > 150) {
        this.targetWeightMessage = true;
        return;
      } else {
        this.targetWeightMessage = false;
      }
    } else {
      if (this.targetweight < 44 || this.targetweight > 333) {
        this.targetWeightMessage = true;
        return;
      } else {
        this.targetWeightMessage = false;
      }
    }

    if (this.weightType == "kg") {
      if (this.weight < 20 || this.weight > 150) {
        this.weightMessage = true;
        return;
      } else {
        this.weightMessage = false;
      }
    } else {
      if (this.weight < 44 || this.weight > 333) {
        this.weightMessage = true;
        return;
      } else {
        this.weightMessage = false;
      }
    }
  }

  openPicker() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const picker = yield _this.pickerCtrl.create({
        animated: true,
        mode: "ios",
        columns: [{
          name: "bornYear",
          options: [{
            text: "1955",
            value: "1955"
          }, {
            text: "1956",
            value: "1956"
          }, {
            text: "1957",
            value: "1957"
          }, {
            text: "1958",
            value: "1958"
          }, {
            text: "1959",
            value: "1959"
          }, {
            text: "1960",
            value: "1960"
          }, {
            text: "1961",
            value: "1961"
          }, {
            text: "1962",
            value: "1962"
          }, {
            text: "1963",
            value: "1963"
          }, {
            text: "1964",
            value: "1964"
          }, {
            text: "1965",
            value: "1965"
          }, {
            text: "1966",
            value: "1966"
          }, {
            text: "1967",
            value: "1967"
          }, {
            text: "1968",
            value: "1968"
          }, {
            text: "1969",
            value: "1969"
          }, {
            text: "1970",
            value: "1970"
          }, {
            text: "1971",
            value: "1971"
          }, {
            text: "1972",
            value: "1972"
          }, {
            text: "1973",
            value: "1973"
          }, {
            text: "1974",
            value: "1974"
          }, {
            text: "1975",
            value: "1975"
          }, {
            text: "1976",
            value: "1976"
          }, {
            text: "1977",
            value: "1977"
          }, {
            text: "1978",
            value: "1978"
          }, {
            text: "1979",
            value: "1979"
          }, {
            text: "1980",
            value: "1980"
          }, {
            text: "1981",
            value: "1981"
          }, {
            text: "1982",
            value: "1982"
          }, {
            text: "1983",
            value: "1983"
          }, {
            text: "1984",
            value: "1984"
          }, {
            text: "1985",
            value: "1985"
          }, {
            text: "1986",
            value: "1986"
          }, {
            text: "1987",
            value: "1987"
          }, {
            text: "1988",
            value: "1988"
          }, {
            text: "1989",
            value: "1989"
          }, {
            text: "1990",
            value: "1990"
          }, {
            text: "1991",
            value: "1991"
          }, {
            text: "1992",
            value: "1992"
          }, {
            text: "1993",
            value: "1993"
          }, {
            text: "1994",
            value: "1994"
          }, {
            text: "1995",
            value: "1995"
          }, {
            text: "1996",
            value: "1996"
          }, {
            text: "1997",
            value: "1997"
          }, {
            text: "1998",
            value: "1998"
          }, {
            text: "1999",
            value: "1999"
          }, {
            text: "2000",
            value: "2000"
          }, {
            text: "2001",
            value: "2001"
          }, {
            text: "2002",
            value: "2002"
          }, {
            text: "2003",
            value: "2003"
          }, {
            text: "2004",
            value: "2004"
          }]
        }],
        buttons: [{
          text: "Confirm",
          handler: value => {
            console.log(`You selected: ${value.bornYear.value}`);
            _this.selectedbornYear = value.bornYear.value;
          }
        }]
      });
      yield picker.present();
    })();
  }

  selectGender(e) {
    console.log("e.detail.value", e.detail.value);
    this.storage.get("localData").then(val => {
      this.localData = JSON.parse(val);
      this.localData?.otherMaster?.gender?.forEach(element => {
        if (element.code === e.detail.value) {
          element.isSelected = true;
        } else {
          element.isSelected = false;
        }
      });
      if (typeof this.localData?.otherMaster !== undefined) this.storage.set("localData", JSON.stringify(this.localData));
    });
  }

  setHeightType(type) {
    this.heightType = type;

    if (type === 'cm') {
      this.minHight = 91;
      this.maxHight = 213;
      this.selectedHeight = Math.round(this.baseHeight);
    } else {
      this.minHight = 36;
      this.maxHight = 84;
      this.selectedHeight = Math.round(this.baseHeight * 0.393701); // convert to inches
    }

    this.getHeight();
  }

  updateDisplayedHeight() {
    if (this.heightType === 'cm') {
      this.minHight = 91;
      this.maxHight = 213;
      this.selectedHeight = Math.round(this.baseHeight); // keep in cm
    } else {
      this.minHight = 36;
      this.maxHight = 84;
      this.selectedHeight = Math.round(this.baseHeight * 0.393701); // convert to inches
    } // Update view and possibly profile data (if needed)


    this.height = this.selectedHeight;
    this.profileData.demographic.height.value = this.selectedHeight;
  }

  parseint() {
    this.minHight = 36;
    this.maxHight = 84;
    return this.heightType === "cm" ? parseInt(this.selectedHeight) : parseInt(this.selectedHeight);
  }

  setweightType(type) {
    let w;

    if (type === "kg") {
      this.minWeight = 20.0;
      this.maxWeight = 150.0;
      w = this.weightType === type ? this.weight : this.weight * 0.45;
      if (w > this.maxWeight) w = this.maxWeight;
    } else {
      this.minWeight = 20.0 / 0.45;
      this.maxWeight = 150.0 / 0.45;
      w = this.weightType === type ? this.weight : this.weight / 0.45;
      if (w > this.maxWeight) w = this.maxWeight;
    }

    this.weight = Math.round(w.toString());
    this.weightType = type;
    this.setTargetweightType(type);
  }

  setTargetweightType(type) {
    let tw = this.targetweight;

    if (type === 'kg') {
      this.targetminWeight = 20.0;
      this.targetmaxWeight = 150.0;
      tw = tw * 0.45;
      if (tw > this.targetmaxWeight) tw = this.targetmaxWeight;
    } else {
      this.targetminWeight = 20.0 / 0.45;
      this.targetmaxWeight = 150.0 / 0.45;
      tw = tw / 0.45;
      if (tw > this.targetmaxWeight) tw = this.targetmaxWeight;
    }

    this.targetweight = Math.round(tw.toString());
  }

  setWeight(type) {
    if (type === "add") {
      if (this.weight !== parseFloat(this.maxWeight).toFixed(1)) {
        const t = parseFloat(this.weight) + 0.1;
        this.weight = parseFloat(t).toFixed(1);
      }
    } else {
      if (this.weight !== parseFloat(this.minWeight).toFixed(1)) {
        const t = parseFloat(this.weight) - 0.1;
        this.weight = parseFloat(t).toFixed(1);
      }
    }
  }

  scroll(e) {
    console.log(e);
  }

  gotoTerm() {
    //window.open("https://fitrofy.com/terms-conditions/","_blank");
    if (this.from) {
      this.router.navigate(["termsandconditions"], {
        queryParams: {
          from: 'editProfile'
        }
      });
    } else {
      this.router.navigate(["termsandconditions"]);
    }
  }

  setRange(type) {
    console.log(type);

    if (type === "plus") {
      this.setWeightFromArray = this.setWeightFromArray + 1;
    } else {
      this.setWeightFromArray = this.setWeightFromArray - 1;
    }

    this.selectedWeight = this.setWeightFromArray + this.weightArray[3];
    this.cdr.detectChanges();
  }

  setBornRange(type) {
    console.log(type);

    if (type === "plus") {
      this.setbornYear = this.setbornYear + 1;
    } else {
      this.setbornYear = this.setbornYear - 1;
    }

    this.selectedbornYear = this.setbornYear + this.bornYear[2];
    this.cdr.detectChanges();
  }

  removeDecimals(event, field) {
    let value = event.target.value; // Remove decimal part

    value = value.split('.')[0];

    if (field === 'weight') {
      const weight = parseInt(value, 10) || 0;
      const max = this.weightType === 'kg' ? 150 : Math.floor(150 / 0.45);
      this.weight = Math.min(weight, max);
      event.target.value = this.weight;
    }

    if (field === 'targetweight') {
      const tWeight = parseInt(value, 10) || 0;
      const max = this.weightType === 'kg' ? 150 : Math.floor(150 / 0.45);
      this.targetweight = Math.min(tWeight, max);
      event.target.value = this.targetweight;
    }
  }

  blockDecimal(event) {
    const blockedKeys = ['.', ',', 'e', '+', '-'];

    if (blockedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  getValue(e) {
    console.log(e.detail.value);
  }

};

Boarding2Page.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
}, {
  type: _app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PickerController
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_5__.UTILITIES
}, {
  type: _app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}];

Boarding2Page.propDecorators = {
  from: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
Boarding2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-boarding2",
  template: _boarding2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_boarding2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Boarding2Page);


/***/ }),

/***/ 82855:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding2/boarding2.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  height: 100%;\n  width: 100%;\n}\n\nion-content::part(background) {\n  --background: var(--theme-newHeader);\n}\n\n.condition {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont) !important;\n  color: var(--theme-color);\n  cursor: pointer;\n}\n\n.slider_div {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.content_div {\n  min-height: 85%;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 0px;\n}\n\n.content_sub_div {\n  padding: 0px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--white);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-text-color);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--white);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-page-count-active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-newHeader);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-text-color);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-lines {\n  border: 1px solid var(--theme-text-color);\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 {\n  width: 90%;\n  position: absolute;\n}\n\n.lines2 div {\n  width: 25%;\n  border: 1px solid var(--white);\n}\n\n.card_div {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n}\n\n.card_div ion-radio {\n  --color-checked: var(--white);\n}\n\n.complete {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.aviva-complete {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-text-color);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--green);\n  font-family: var(--theme-newFont);\n}\n\n.lines {\n  border: 1px solid var(--white);\n  width: 90%;\n  position: absolute;\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 10px 5%;\n}\n\n.title {\n  font-size: var(--medium-font);\n  font-weight: 700;\n  margin-top: 30px;\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 30px 5% 15px 5%;\n  width: 50%;\n}\n\n.section-card {\n  margin: 0%;\n  padding: 0px 10px;\n  box-shadow: var(--boxshadow);\n  border-radius: 10px;\n  height: 105px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n\n.card_Border {\n  border: 2px solid var(--theme-color);\n}\n\n.female_image {\n  height: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  bottom: 5px;\n  margin-left: 20px;\n}\n\n.male_image {\n  height: 120px;\n  object-fit: contain;\n  position: absolute;\n  z-index: 10;\n  bottom: 5px;\n}\n\n.label {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin: 0% 0% 5px;\n  width: 100%;\n  font-weight: 500;\n}\n\n.header_btn_div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.content_sub_div2 {\n  background: var(--lightGrey);\n  padding: 20px;\n  margin-top: 30px;\n}\n\n.content_sub_div3 {\n  background: var(--lightGrey);\n  padding: 20px 0px;\n  margin-top: 30px;\n}\n\n.meter_box_div {\n  border-radius: 15px 15px 0px 0px;\n  height: 80px;\n  width: 70%;\n  border-top: 3px solid #ffb46c;\n  border-left: 3px solid #ffb46c;\n  border-right: 3px solid #ffb46c;\n}\n\n.main_meter_div {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 95%;\n  margin-left: 2.5%;\n  margin-top: 30px;\n}\n\n.range_div {\n  width: 75%;\n  margin-top: -21px;\n}\n\nion-range {\n  --bar-height: 3px;\n  --bar-border-radius: 8px;\n  --bar-background: grey;\n  --bar-background-active: var(--theme-color);\n  --knob-background: var(--theme-color);\n  --knob-size: 20px;\n  --knob-border-radius: 25%;\n}\n\n.height_value {\n  text-align: center;\n  font-size: var(--large-font);\n  font-weight: 700;\n  margin: 10px 0px;\n  font-family: var(--theme-newFont);\n}\n\n.scale_image {\n  position: absolute;\n  bottom: 25px;\n  width: 70%;\n}\n\n.cmfeet_btn_div {\n  display: flex;\n  border: 1px solid lightgrey;\n  border-radius: 20px;\n  background: var(--white);\n  height: 35px;\n}\n\n.cmfeet_btn {\n  margin: 0px;\n  background: var(--white);\n  padding: 8px;\n  border-radius: 16px;\n  width: 60px;\n  text-align: center;\n  color: var(--black);\n  font-family: var(--theme-newFont);\n  font-weight: 700;\n  font-size: var(--small-font);\n}\n\n.activ_cmfeet_btn {\n  background: var(--theme-newButton) !important;\n  color: var(--white) !important;\n  border: 1px solid var(--theme-newButton);\n}\n\n.main_scroll_Div {\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  min-height: 110px;\n}\n\n.scroll_div {\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, #ffffff, #ffeb95, #fdc02f, #ffa439, #ff9200, #e27001, #ffffff);\n  height: 40px;\n  width: 100%;\n  margin: 5px;\n}\n\n.scroll_div2 {\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, #ffffff, #ffdbb9, #ffc893, #ffdebe, #ffffff);\n  height: 40px;\n  width: 100%;\n  margin: 5px;\n}\n\n.finder_img {\n  position: absolute;\n  top: -5px;\n}\n\n.rouded_div {\n  position: relative;\n  width: 100px;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.rouded {\n  border: 2px solid var(--theme-color);\n  height: 60px;\n  width: 60px;\n  border-radius: 100%;\n  background: white;\n}\n\n.scroll-x {\n  overflow-x: scroll !important;\n  flex-wrap: nowrap;\n  overflow-y: hidden;\n}\n\n.scroll-x::-webkit-scrollbar {\n  display: none;\n}\n\n.slider_div2 {\n  display: flex;\n  align-items: center;\n}\n\n.slider_div2 p {\n  color: red;\n  font-size: 16px;\n  margin: 0px 10px;\n}\n\n.slider_div2 ion-icon {\n  font-size: 20px;\n  color: red;\n}\n\n.note {\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n  color: var(--normal-color);\n  font-weight: 300;\n  margin: 30px 5% 10px;\n}\n\n.terms {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--normal-color);\n}\n\nion-checkbox {\n  margin-inline-end: 10px;\n  --border-radius: 5px;\n  --border-width: 2px;\n  --border-color: var(--theme-newButton);\n  --background-checked: var(--theme-newButton);\n  --border-color-checked: var(--theme-newButton);\n  --checkmark-color: var(--white);\n}\n\n.go_btn_div {\n  margin-top: 10px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.born_btn {\n  background: var(--theme-newButton);\n  color: var(--white);\n  font-family: var(--theme-newFont);\n  width: 75px;\n  height: 38px;\n  border-radius: 25px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.back_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n\n.weight_div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.wight_ui_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 60%;\n}\n\n.square_img {\n  width: 100%;\n  object-fit: contain;\n}\n\n.squareRing_img {\n  height: 100px;\n  position: absolute;\n  top: 18px;\n}\n\n.plus_minus_div {\n  position: absolute;\n  bottom: 15px;\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.plus_minus_button {\n  background: var(--theme-newButton);\n  padding: 5px;\n  border-radius: 10px;\n  color: var(--white);\n  font-size: 25px;\n  font-weight: bolder;\n}\n\n.weight_value {\n  text-align: center;\n  font-size: var(--large-font);\n  font-weight: 700;\n  position: absolute;\n  z-index: 1;\n  font-family: var(--theme-newFont);\n  --padding-start: 0px;\n  color: var(--theme-color);\n}\n\n.selected_weight_value {\n  text-align: center;\n  font-size: var(--large-font);\n  font-weight: 700;\n  margin: 10px 0px;\n  position: absolute;\n  z-index: 1;\n  font-family: var(--theme-newFont);\n}\n\n.born_value {\n  margin: 0%;\n  font-size: var(--small-font);\n  font-family: var(--theme-newFont);\n}\n\n.weight_values {\n  margin: 0%;\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n}\n\n.native-input.sc-ion-input-ios {\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,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ZSI6ImJvYXJkaW5nMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50OjpwYXJ0KGJhY2tncm91bmQpIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xufVxuLmNvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhci1mb250KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8vIGlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCl7XG4vLyAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuLy8gfVxuXG4uc2xpZGVyX2RpdiB7XG4gIGhlaWdodDogMTUlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIHBhZGRpbmctbGVmdDogNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnRfZGl2IHtcbiAgbWluLWhlaWdodDogODUlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbi5jb250ZW50X3N1Yl9kaXYge1xuICBwYWRkaW5nOiAwcHggNSU7XG59XG5cbi5zbGlkZXJfcGFnZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhZ2VfQ291bnQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLmF2aXZhLXBhZ2VfQ291bnQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4ucGFnZV9Db3VudF9hY3RpdmUge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTp2YXIoLS14c21hbGwtZm9udCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5hdml2YS1wYWdlLWNvdW50LWFjdGl2ZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6dmFyKC0teHNtYWxsLWZvbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLmF2aXZhLWxpbmVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtdGV4dC1jb2xvcik7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5saW5lczIge1xuICB3aWR0aDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgZGl2IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgfVxufVxuLmNhcmRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaW9uLXJhZGlvIHtcbiAgICAvLyAtLWNvbG9yOnZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXdoaXRlKTtcbiAgfVxufVxuXG4uY29tcGxldGUge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICAvLyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAvLyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuXG4uYXZpdmEtY29tcGxldGUge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4ubGluZXMge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luOiAxMHB4IDUlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBtYXJnaW46IDMwcHggNSUgMTVweCA1JTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNlY3Rpb24tY2FyZCB7XG4gIG1hcmdpbjogMCU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3hzaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkX0JvcmRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuXG5cbi5mZW1hbGVfaW1hZ2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5tYWxlX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luOiAwJSAwJSA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaGVhZGVyX2J0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250ZW50X3N1Yl9kaXYyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmV5KTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbnRlbnRfc3ViX2RpdjMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyZXkpO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1tZXRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubWV0ZXJfYm94X2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZiNDZjO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZmI0NmM7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmI0NmM7XG59XG5cbi5tYWluX21ldGVyX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5yYW5nZV9kaXYge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tdG9wOiAtMjFweDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiAzcHg7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1iYXItYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgLS1rbm9iLXNpemU6IDIwcHg7XG4gIC0ta25vYi1ib3JkZXItcmFkaXVzOiAyNSU7XG59XG5cbi5oZWlnaHRfdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLnNjYWxlX2ltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tbWV0ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uY21mZWV0X2J0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY21mZWV0X2J0biB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xufVxuXG4uYWN0aXZfY21mZWV0X2J0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0J1dHRvbikgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1uZXdCdXR0b24pO1xufVxuXG4ubWFpbl9zY3JvbGxfRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtaW4taGVpZ2h0OiAxMTBweDtcbn1cblxuLnNjcm9sbF9kaXYge1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgI2ZmZmZmZixcbiAgICAgICNmZmViOTUsXG4gICAgICAjZmRjMDJmLFxuICAgICAgI2ZmYTQzOSxcbiAgICAgICNmZjkyMDAsXG4gICAgICAjZTI3MDAxLFxuICAgICAgI2ZmZmZmZlxuICAgICk7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGRkZGRiwgI0ZGRUI5NSwgI0ZEQzAyRiwgI0ZGQTQzOSwgI0ZGOTIwMCwjRTI3MDAxLCNGRkZGRkYpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnNjcm9sbF9kaXYyIHtcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3SGVhZGVyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXG4gICAgKSxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYsICNmZmRiYjksICNmZmM4OTMsICNmZmRlYmUsICNmZmZmZmYpO1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkZGRkYsICNGRkVCOTUsICNGREMwMkYsICNGRkE0MzksICNGRjkyMDAsI0UyNzAwMSwjRkZGRkZGKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5maW5kZXJfaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG59XG5cbi5yb3VkZWRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3VkZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc2Nyb2xsLXgge1xuICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC14Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXJfZGl2MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuXG4ubm90ZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgY29sb3I6IHZhcigtLW5vcm1hbC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMzBweCA1JSAxMHB4O1xufVxuXG4udGVybXMge1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgY29sb3I6IHZhcigtLW5vcm1hbC1jb2xvcik7XG59XG5cblxuaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5nb19idG5fZGl2IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmdvX2J0biB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcm9maWxlLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjp2YXIoLS1idXR0b24tdGV4dCkgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICBcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gIH1cbn1cblxuLmJvcm5fYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmFja19idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA3MCU7XG4gICY6OnBhcnQobmF0aXZlKSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWJhY2spO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gIH1cbn1cblxuLndlaWdodF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi53aWdodF91aV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xufVxuXG4uc3F1YXJlX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc3F1YXJlUmluZ19pbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbn1cblxuLnBsdXNfbWludXNfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnBsdXNfbWludXNfYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtbmV3QnV0dG9uKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ud2VpZ2h0X3ZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWxhcmdlLWZvbnQpO1xuICBmb250LXdlaWdodDogNzAwO1xuICAvLyBtYXJnaW46IDEwcHggMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIC8vIHRvcDogLTIwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5zZWxlY3RlZF93ZWlnaHRfdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xufVxuXG4uYm9ybl92YWx1ZSB7XG4gIG1hcmdpbjogMCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLndlaWdodF92YWx1ZXMge1xuICBtYXJnaW46IDAlO1xuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9zIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 94390:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding2/boarding2.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\">\n    <div class=\"slider_div\" *ngIf=\"!from\">\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-lines' : 'lines'\" ></div>\n      <div [ngClass]=\"clientId && (clientId == 'aviva') ? '' : 'lines2'\">\n        <div></div>\n      </div>\n      <div class=\"slider_page\">\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-complete' : 'page_Count_active complete'\" >✓</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page-count-active' : 'page_Count_active'\" >2</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page_Count' : 'page_Count'\" >3</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page_Count' : 'page_Count'\" >4</p>\n        <p [ngClass]=\"clientId && (clientId == 'aviva') ? 'aviva-page_Count' : 'page_Count'\">5</p>\n      </div>\n    </div>\n    <div class=\"content_div\" [ngStyle]=\"from && {'border-radius':'0px','min-height':'100%'}\">\n      <div class=\"w_100 right\" *ngIf=\"from\" style=\"padding-right: 5%\">\n        <ion-icon class=\"close_modal_icon\" name=\"close-circle\" (click)=\"modalClose()\"></ion-icon>\n      </div>\n      <p class=\"title-text\">\n        We need some of your basic information to provide you correct analysis\n      </p>\n      <p class=\"title\">Gender</p>\n      <div class=\"content_sub_div\">\n      <ion-radio-group [value]=\"gender\" [(ngModel)]=\"gender\" (ionChange)=\"selectGender($event)\">\n  <ion-grid class=\"pad_0\">\n    <ion-row>\n      <!-- FEMALE -->\n      <ion-col size=\"6\" style=\"padding-right: 7px\">\n        <div class=\"card_div\" (click)=\"gender = 'G2'\">\n          <ion-img src=\"../../../assets/newImages/female.png\" class=\"female_image\"></ion-img>\n          <p class=\"label\">Female</p>\n          <ion-card class=\"section-card\" [ngClass]=\"gender === 'G2' && 'card_Border'\">\n            <div class=\"h_100\">\n              <ion-radio\n                value=\"G2\"\n                mode=\"ios\"\n                style=\"--color-checked: var(--theme-color);\"\n              ></ion-radio>\n            </div>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <!-- MALE -->\n      <ion-col size=\"6\" style=\"padding-left: 7px\">\n        <div\n          class=\"card_div\"\n          [class.disabled]=\"profileData?.profile?.category === 'pcos'\"\n          (click)=\"profileData?.profile?.category !== 'pcos' && (gender = 'G1')\"\n        >\n          <ion-img src=\"../../../assets/newImages/male.png\" class=\"male_image\"></ion-img>\n          <p class=\"label\">Male</p>\n          <ion-card\n            class=\"section-card\"\n            [ngClass]=\"gender === 'G1' && 'card_Border'\"\n          >\n            <div class=\"h_100\">\n              <ion-radio\n                value=\"G1\"\n                [disabled]=\"profileData?.profile?.category === 'pcos'\"\n                mode=\"ios\"\n                style=\"--color-checked: var(--theme-color);\"\n              ></ion-radio>\n            </div>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-radio-group>\n\n      </div>\n\n      <div class=\"content_sub_div2\">\n        <div class=\"header_btn_div\">\n          <p class=\"title mar_0\">How tall are you?</p>\n          <div class=\"cmfeet_btn_div\">\n           <p class=\"cmfeet_btn\" [ngClass]=\"heightType === 'cm' ? 'activ_cmfeet_btn' : ''\" (click)=\"setHeightType('cm')\">Cm</p>\n            <p class=\"cmfeet_btn\" [ngClass]=\"heightType === 'feet' ? 'activ_cmfeet_btn' : ''\" (click)=\"setHeightType('feet')\">Feet</p>\n\n          </div>\n        </div>\n        <div class=\"main_meter_div\" *ngIf=\"heightType==='feet'\">\n          <div class=\"meter_box_div\">\n                <p class=\"height_value\">{{inputHeight}}</p>\n            <ion-img src=\"../../../assets/newImages/scale.png\" class=\"scale_image\"></ion-img>\n          </div>\n          <div class=\"range_div\"> \n           <ion-range\n              [min]=\"minHight\"\n              [max]=\"maxHight\"\n              [(ngModel)]=\"selectedHeight\"\n              [step]=\"1\"\n              mode=\"ios\"\n              class=\"pad_0\"\n              (ionChange)=\"getHeight()\">\n            </ion-range>\n            <!--  -->\n          </div>\n        </div>\n        <div class=\"main_meter_div\" *ngIf=\"heightType==='cm'\">\n          <div class=\"meter_box_div\">\n                <p class=\"height_value\">{{inputHeight}}</p>\n            <ion-img src=\"../../../assets/newImages/scale.png\" class=\"scale_image\"></ion-img>\n          </div>\n          <div class=\"range_div\">\n            <ion-range min=\"122\" max=\"213\" [value]=\"parseint()\" [(ngModel)]=\"selectedHeight\"  mode=\"ios\" class=\"pad_0\"\n              [step]=\"1\"  (ionChange)=\"getHeight()\">\n            </ion-range>\n            <!--  -->\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"content_sub_div2\" style=\"background: none\">\n        <div class=\"header_btn_div\">\n          <p class=\"title mar_0\">What is your weight?</p>\n          <div class=\"cmfeet_btn_div\">\n            <p class=\"cmfeet_btn\" [ngClass]=\"weightType==='kg'&& 'activ_cmfeet_btn'\" (click)=\"setweightType('kg')\">\n              Kg\n            </p>\n            <p class=\"cmfeet_btn\" [ngClass]=\"weightType==='lbs'&& 'activ_cmfeet_btn'\" (click)=\"setweightType('lbs')\">\n              Lbs\n            </p>\n          </div>\n        </div>\n        <div class=\"weight_div\">\n          <div class=\"wight_ui_div\">\n            <!-- <ion-img src=\"../../../assets/newImages/squareRing.svg\" class=\"squareRing_img\">\n            </ion-img> -->\n            <ion-img src=\"../../../assets/newImages/squareRing.svg\" class=\"square_img\">\n            </ion-img>\n            <ion-input\n              class=\"weight_value\"\n              name=\"w\"\n              (ionBlur)=\"gotoDemographic()\"\n              [(ngModel)]=\"weight\"\n              type=\"number\"\n              inputmode=\"numeric\"\n              pattern=\"[0-9]*\"\n              (keydown)=\"blockDecimal($event)\"\n              (ionInput)=\"removeDecimals($event,'weight')\"\n            ></ion-input>\n          </div>\n         \n        </div>\n        <div style=\"text-align: center;color:red;\" *ngIf=\"weightMessage && weightType==='kg'\">\n          Please select weight more than 19kg.\n        </div>\n         <div style=\"text-align: center;color:red;\" *ngIf=\"weightMessage && weightType==='lbs'\">\n          Please select weight more than 43 lbs.\n        </div>\n      </div>\n\n      <div class=\"content_sub_div2\" *ngIf=\"clientId!=='enkeltec'\">\n        <div class=\"header_btn_div\">\n          <p class=\"title mar_0\">Desired weight?</p>\n          <!-- <div class=\"cmfeet_btn_div\">\n            <p class=\"cmfeet_btn\" [ngClass]=\"targetweightType==='kg'&& 'activ_cmfeet_btn'\"\n              (click)=\"setTargetweightType('kg')\">\n              Kg\n            </p>\n            <p class=\"cmfeet_btn\" [ngClass]=\"targetweightType==='lbs'&& 'activ_cmfeet_btn'\"\n              (click)=\"setTargetweightType('lbs')\">\n              Lbs\n            </p>\n          </div>-->\n        </div> \n        <div class=\"weight_div\">\n          <div class=\"wight_ui_div\">\n            <!-- <ion-img src=\"../../../assets/newImages/squareRing.svg\" class=\"squareRing_img\">\n            </ion-img> -->\n            <ion-img src=\"../../../assets/newImages/squareRing.svg\" class=\"square_img\">\n            </ion-img>\n           <ion-input\n                class=\"weight_value\"\n                name=\"w\"\n                [(ngModel)]=\"targetweight\"\n                debounce=\"100\"\n                (ionBlur)=\"gotoDemographic()\"\n                type=\"number\"\n                inputmode=\"numeric\"\n                pattern=\"[0-9]*\"\n                (keydown)=\"blockDecimal($event)\"\n                (ionInput)=\"removeDecimals($event,'targetweight')\"\n              ></ion-input>\n          </div>\n         \n        </div>\n         <div style=\"text-align: center;color:red;\" *ngIf=\"targetweight<20 && weightType==='kg'\">\n          Please select weight more than 19kg.\n        </div>\n         <div style=\"text-align: center;color:red;\" *ngIf=\"targetweight<44 && weightType==='lbs'\">\n          Please select weight more than 43 lbs.\n        </div>\n      </div>\n\n      <div class=\"content_sub_div3\" style=\"background: none\">\n        <div class=\"header_btn_div\" style=\"margin: 0% 5%\">\n          <p class=\"title mar_0\" style=\"width: Auto\">\n            Which year were you born in (e.g. 2022)?\n          </p>\n        </div>\n        <div class=\"main_scroll_Div\">\n          <div class=\"scroll_div2 center\" style=\"height: 30px\">\n            <ion-grid class=\"\">\n              <ion-row class=\"scroll-x\">\n              </ion-row>\n            </ion-grid>\n          </div>\n          <div class=\"born_btn\">\n              <ion-input\n                class=\"weight_value\"\n                style=\"color:var(--theme-newButton) !important;\n                      background: #fff;\n                      width: 105px;\n                      border: 5px solid #ffc893;\n                      border-radius: 1rem;\"\n                name=\"w\"\n                [(ngModel)]=\"targetYear\"\n                debounce=\"1000\"\n                type=\"number\"\n                inputmode=\"numeric\"\n                pattern=\"[0-9]*\"\n  (keydown)=\"blockDecimal($event)\"\n                (ionInput)=\"removeDecimals('targetYear')\"\n              ></ion-input>\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <p class=\"note\">\n          *Your Information is confidential and secured safely with us.\n        </p>\n        \n        <ion-row style=\"margin: 0 1rem;\">\n          <ion-col>\n            <ion-checkbox [(ngModel)]=\"terms\"></ion-checkbox>\n          <ion-label style=\"    top: -7px;\n          position: relative; color:#b3b3b3\">I agree to accept the <span class=\"condition\" (click)=\"gotoTerm()\" >Terms and Conditions</span>.</ion-label>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col class=\"ion-text-right\">\n            <ion-item lines=\"none\" style=\"display: inline-block;\n            float: left;\">\n              <ion-checkbox checked=\"true\" slot=\"start\"></ion-checkbox>\n              <ion-label class=\"terms\">I agree to accept the\n            </ion-label></ion-item>\n          <ion-row style=\"position: relative;\n          top: 12px;\n          left: 2px;bottom: 12px;\">\n            <ion-col (click)=\"gotoTerm()\" class=\"ion-text-left\" >\n              <span class=\"condition\" >Terms and Conditions</span>.\n            </ion-col>\n          </ion-row>\n            </ion-col>\n          \n        </ion-row> -->\n      \n        <div class=\"go_btn_div\" *ngIf=\"!from\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\" class=\"center\">\n                <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"goBack()\">Back</ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"center\">\n                <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Next</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div class=\"go_btn_div\" *ngIf=\"from\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\" class=\"center\">\n                <ion-button class=\"back_btn\" shape=\"round\" fill=\"outline\" (click)=\"modalClose()\">Cancel</ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"center\">\n                <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">Save</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_boarding2_boarding2_module_ts.js.map