"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_corporate-otp_corporate-otp_module_ts"],{

/***/ 25292:
/*!*********************************************************************!*\
  !*** ./src/app/pages/corporate-otp/corporate-otp-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorporateOtpPageRoutingModule": () => (/* binding */ CorporateOtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _corporate_otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corporate-otp.page */ 94047);




const routes = [
    {
        path: '',
        component: _corporate_otp_page__WEBPACK_IMPORTED_MODULE_0__.CorporateOtpPage
    }
];
let CorporateOtpPageRoutingModule = class CorporateOtpPageRoutingModule {
};
CorporateOtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorporateOtpPageRoutingModule);



/***/ }),

/***/ 75549:
/*!*************************************************************!*\
  !*** ./src/app/pages/corporate-otp/corporate-otp.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorporateOtpPageModule": () => (/* binding */ CorporateOtpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _corporate_otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corporate-otp-routing.module */ 25292);
/* harmony import */ var _corporate_otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corporate-otp.page */ 94047);







let CorporateOtpPageModule = class CorporateOtpPageModule {
};
CorporateOtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _corporate_otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorporateOtpPageRoutingModule
        ],
        declarations: [_corporate_otp_page__WEBPACK_IMPORTED_MODULE_1__.CorporateOtpPage]
    })
], CorporateOtpPageModule);



/***/ }),

/***/ 94047:
/*!***********************************************************!*\
  !*** ./src/app/pages/corporate-otp/corporate-otp.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorporateOtpPage": () => (/* binding */ CorporateOtpPage)
/* harmony export */ });
/* harmony import */ var _Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _corporate_otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corporate-otp.page.html?ngResource */ 4841);
/* harmony import */ var _corporate_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corporate-otp.page.scss?ngResource */ 99861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/constants/constants */ 78073);











let CorporateOtpPage = class CorporateOtpPage {
  constructor(router, appService, route, utiltites, storage, navCtrl) {
    this.router = router;
    this.appService = appService;
    this.route = route;
    this.utiltites = utiltites;
    this.storage = storage;
    this.navCtrl = navCtrl;
    this.email = "fakhre.alam101@gmail.com";
    this.timeLeft = 30;
    this.countDown = "00";
    this.isActive = true;
    this.firebaseOTP = false;
    this.width = window.screen.width - 82;
    this.config = {};
    let self = this;
    self.route.queryParams.subscribe(res => {
      self.email = res.email;
      self.phoneDetails = JSON.parse(res.phoneDetails);
      self.customerID = res.customerID;
      self.clientKey = res.clientKey;
      self.utiltites.hideLoader();
      this.orderId = localStorage.getItem('orderId');
      localStorage.setItem("email", res.email);
    });
    self.utiltites.hideLoader();
  }

  ngOnInit() {
    this.setTimer();
    this.config["app_source"] = "web";
    this.config["device"] = "web_browser";
    this.utiltites.hideLoader();
  }

  setTimer() {
    this.timerId = setInterval(() => {
      if (this.timeLeft == 0) {
        this.countDown = "00";
        clearTimeout(this.timerId);
      } else {
        this.countDown = this.timeLeft + "";
        this.timeLeft--;
      }
    }, 1000);
  }

  clearOTP() {
    this.otp1 = "";
    this.otp2 = "";
  }

  checkInput() {
    if (this.otp1.length == 6) {
      this.otp2 = this.otp1;
      this.otp1 = "";
      console.log(this.otp2);
      this.verifyOTP();
    }
  }

  verifyOTP() {
    var _this = this;

    return (0,_Users_fakharealam_Documents_sdp_reg_companies_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.utiltites.showLoading();
      let inputOtp = _this.otp2;

      _this.appService.verifyOTP({
        customerId: _this.email,
        otp: inputOtp
      }).then(succ => {
        _this.clearOTP();

        _this.utiltites.logEvent("signin_with_coporate_complete", {});

        if (JSON.parse(JSON.stringify(succ)).code === "0000") {
          let userData = {
            authToken: null,
            email: _this.email,
            firstName: "",
            id: null,
            idToken: null,
            lastName: "",
            name: "",
            photoUrl: null,
            provider: "mobile"
          };

          _this.storage.set("newProfilePic", JSON.stringify(userData));

          console.log("logggg:", userData);

          _this.utiltites.logEvent("Register_01Authenticate", {});

          _this.loadDataAfterPhoneNumberLogin(userData);
        } else {
          _this.utiltites.hideLoader();

          _this.utiltites.showErrorToast(JSON.parse(JSON.stringify(succ)).message);
        }
      }).catch(err => {
        _this.utiltites.hideLoader();

        console.log("error: ", err);

        _this.clearOTP();
      });
    })();
  }

  loadDataAfterPhoneNumberLogin(user) {
    this.utiltites.logEvent("sigin_with_phone_number", {});
    this.storage.get("profile").then(val => {
      this.storage.set("Token", "");
      this.storage.set("profileData", "");
      this.storage.set("profile", "");
      console.log("user", user);
      this.appService.externalToken(this.clientKey, this.orderId).subscribe(getExternalTokenResponse => {
        if (getExternalTokenResponse && getExternalTokenResponse.accessToken && getExternalTokenResponse.code == "0000") {
          localStorage.setItem('tkn', getExternalTokenResponse.accessToken);
          this.goNext(user, getExternalTokenResponse.accessToken);
        } else {
          let clientData = _core_constants_constants__WEBPACK_IMPORTED_MODULE_6__.constantsJson.VerifyClient.filter(ele => {
            return ele.clientId == `${localStorage.getItem("clientId")}`;
          });
          console.log('clientData: ', clientData);
          let obj = {
            profile: {
              "email": this.orderId
            }
          };
          this.appService.externalRegistration(this.clientKey, obj).subscribe(externalRegistrationResponse => {
            if (externalRegistrationResponse && externalRegistrationResponse.access_token && externalRegistrationResponse.code == "0000") {
              localStorage.setItem('tkn', externalRegistrationResponse.access_token);
              this.goNext(user, externalRegistrationResponse.access_token);
            } else {
              this.router.navigate(['login']);
              return false;
            }
          }, err => {
            alert("externalRegistration error: " + JSON.stringify(err));
          });
        }
      }, err => {
        alert("getExternalToken error: " + JSON.stringify(err));
      });
    });
  }

  goNext(user, tkn) {
    this.appService.getDefaultData(tkn).then(res => {
      console.log("default Data", res);
      this.defaultData = JSON.parse(JSON.stringify(res));
      this.storage.set("graph", "");
      this.storage.set("defaultData", this.defaultData);
      this.storage.set("profile", this.utiltites.parseString(user));
      this.appService.getProfileData(tkn).then(profileData => {
        console.log("profileData,", profileData);
        this.bindProfileDatainDefaultData(profileData);

        if (profileData && profileData["profile"]) {
          if (!profileData["profile"]["firstName"] || profileData["profile"]["firstName"] == "") {
            profileData["profile"]["firstName"] = profileData["profile"]["given_name"];
          }

          if (!profileData["profile"]["lastName"] || profileData["profile"]["lastName"] == "") {
            profileData["profile"]["lastName"] = profileData["profile"]["family_name"];
          }
        }

        this.storage.set("newProfilePic", JSON.stringify(profileData["profile"]));
        const data = Object.assign({}, this.defaultData);
        const prof = Object.assign({}, profileData);
        const profile = JSON.parse(JSON.stringify(profileData));
        console.log("profile:-", prof);
        this.storage.set("profileData", this.utiltites.parseString(prof));
        localStorage.setItem("isPlanSubscribe", profile.isPlanSubsCribe);
        localStorage.setItem("isCorporateUser", "true");
        this.utiltites.hideLoader();

        if (profile.demographic == undefined || profile.lifeStyle == undefined || profile.diet == undefined) {
          this.storage.get("pendingPage").then(res => {
            console.log("pending page res", res);

            if (res) {
              this.navCtrl.navigateRoot([res]);
            } else {
              this.router.navigate(["boarding1"], {
                queryParams: {
                  token: `${localStorage.getItem("tkn")}`,
                  clientId: `${localStorage.getItem("clientId")}`,
                  type: 1
                }
              }); // const navigationExtras: NavigationExtras = {
              //   queryParams: {
              //     token: `${localStorage.getItem("accesstoken")}`, clientId: 'birla', type: 1 
              //   }
              // };
              // this.navCtrl.navigateRoot(["/boarding1"], navigationExtras );
            }
          });
        } else {
          this.utiltites.hideLoader(); // this.navCtrl.navigateRoot(["new-diet"]);
          // this.router.navigate([`read?token=${localStorage.getItem("tkn")}&clientId=${localStorage.getItem("clientId")}&type=1`]);

          if (localStorage.getItem("clientId")) {
            location.href = `${location.origin}/read?token=${localStorage.getItem("tkn")}&clientId=${localStorage.getItem("clientId")}&type=1`;
          } // if (localStorage.getItem("accesstoken") != "") {
          // const navigationExtras: NavigationExtras = {
          //   queryParams: {
          //     token: `${localStorage.getItem("accesstoken")}`, clientId: 'birapla', type: 1 
          //   }
          // };
          // this.router.navigate(["/read"], navigationExtras);
          // this.router.navigate(["read"], {
          //   queryParams: {
          //     token: `${localStorage.getItem("tkn")}`, clientId: `${localStorage.getItem("clientId")}`, type: 1
          //   },
          // });
          // }

        } // }

      }, profileError => {
        this.utiltites.hideLoader();
        this.utiltites.presentAlert(profileError);
        console.log("profileError,", profileError.status);
      });
    }, err => {
      this.utiltites.hideLoader();
      this.utiltites.presentAlert(err);
      console.log("errrrrr:-", err);
    });
  }

  bindProfileDatainDefaultData(resData) {
    console.log("UNIQE CONSOLE");
    const gender = resData?.demographic?.gender;
    const height = resData?.demographic?.height;
    const suggestedweight = resData?.demographic?.suggestedWeight;
    const weight = resData?.demographic?.weight;
    const age = resData?.demographic?.age;
    const activities = resData?.lifeStyle?.activities;
    const diseases = resData?.lifeStyle?.diseases;
    const communities = resData?.lifeStyle?.communities;
    const foodPref = resData?.lifeStyle?.foodType;
    this.storage.get("defaultData").then(res => {
      if (gender) {
        res.otherMaster.gender.filter(item => {
          return item.code === gender["code"];
        })[0].isSelected = true;
      }

      if (age) {
        age.year = (new Date().getFullYear() - age.avg_age).toString();
        res.age = age;
      }

      if (height) {
        res.otherMaster.height.push(height);
        console.log("res.otherMaster.gender", res.otherMaster.gender);
      }

      if (suggestedweight) {
        res.otherMaster.diet = {
          suggestedWeight: suggestedweight,
          param: ""
        };
      }

      if (weight) {
        res.otherMaster.weight.push(weight);
      }

      if (activities) {
        res.otherMaster.activities.filter(item => {
          return item.code === activities["code"];
        })[0].isSelected = true;
      }

      if (diseases) {
        for (let index = 0; index < diseases.length; index++) {
          res.otherMaster.diseases.filter(item => {
            if (item.code === diseases[index]) {
              item.isSelected = true;
            }
          });
        }
      }

      if (communities) {
        for (let index = 0; index < communities.length; index++) {
          res.otherMaster.community.filter(item => {
            if (item.code === communities[index]) {
              item.isSelected = true;
            }
          });
        }
      }

      if (foodPref) {
        res.otherMaster.foodPref.filter(item => {
          if (item.code === foodPref) {
            item.isSelected = true;
          }
        });
      }

      this.storage.set("localData", JSON.stringify(res));

      if (resData.code == "0001") {
        // this.router.navigate(["boarding1"]);
        alert('Success 1');
        return;
      } else {
        localStorage.setItem("userid", resData?.profile?.email);
      }
    });
  }

  resendOtp() {
    this.clearOTP();
    this.utiltites.showLoading();
    this.appService.sendOTP({
      customerId: this.email
    }).then(succ => {
      this.timeLeft = 30;
      this.setTimer();
      this.utiltites.hideLoader();
    }).catch(err => {
      this.utiltites.hideLoader();
      console.log("rrr", err);
    });
  }

};

CorporateOtpPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_5__.UTILITIES
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}];

CorporateOtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-corporate-otp',
  template: _corporate_otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_corporate_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CorporateOtpPage);


/***/ }),

/***/ 99861:
/*!************************************************************************!*\
  !*** ./src/app/pages/corporate-otp/corporate-otp.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".--parent {\n  display: inline-block;\n  padding: 70px 15px 15px 15px;\n  width: 100%;\n}\n.--parent .verify {\n  color: #707070;\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n}\n.--parent .email {\n  color: #263143;\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  font-weight: bold;\n}\n.--parent .expire {\n  color: #707070;\n  font-size: var(--regularM-font);\n  font-family: var(--theme-newFont);\n}\n.--parent .input-box {\n  border: 1px solid lightgray;\n  border-radius: 100%;\n  padding: 10px;\n  height: 50px;\n}\n.--parent .shadow-active {\n  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.05);\n}\n.timer {\n  color: #263143 !important;\n}\n.otp-catch {\n  padding-left: 20px;\n  padding-right: 20px;\n  border: 0;\n  background-image: linear-gradient(to left, black 70%, rgba(155, 155, 225, 0) 0%);\n  background-position: bottom;\n  background-size: 16.66% 1px;\n  background-repeat: repeat-x;\n  background-position-x: 16.66%;\n  width: 100%;\n  outline: none;\n  position: absolute;\n  top: 10%;\n  height: 40px;\n  z-index: 11;\n  background: transparent;\n}\n.header {\n  height: 20px;\n  background: var(--theme-newHeader);\n  border-radius: 0px 0px 25px 25px;\n}\n.close_icon {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  font-size: 25px;\n  color: var(--theme-button);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnBvcmF0ZS1vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFESjtBQUdJO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7QUFEUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtBQUhSO0FBTUk7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFKUjtBQU9JO0VBQ0ksK0NBQUE7QUFMUjtBQVNBO0VBQ0kseUJBQUE7QUFOSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnRkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBTko7QUFTQTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0FBTko7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFOSiIsImZpbGUiOiJjb3Jwb3JhdGUtb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgXCIuLi8uLi90aGVtZS9mb250cy5zY3NzXCI7XG5cbi4tLXBhcmVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDcwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAudmVyaWZ5IHtcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcmVndWxhck0tZm9udCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICB9XG5cbiAgICAuZW1haWwge1xuICAgICAgICBjb2xvcjogIzI2MzE0MztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmV4cGlyZSB7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXJNLWZvbnQpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgfVxuXG4gICAgLmlucHV0LWJveCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIC5zaGFkb3ctYWN0aXZlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMnB4IHJnYigwIDAgMCAvIDUlKTtcbiAgICB9XG59XG5cbi50aW1lciB7XG4gICAgY29sb3I6ICMyNjMxNDMgIWltcG9ydGFudDtcbn1cblxuLm90cC1jYXRjaCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibGFjayA3MCUsIHJnYmEoMTU1LCAxNTUsIDIyNSwgMCkgMCUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2LjY2JSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTYuNjYlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG59XG5cbi5jbG9zZV9pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtYnV0dG9uKTtcbn0iXX0= */";

/***/ }),

/***/ 4841:
/*!************************************************************************!*\
  !*** ./src/app/pages/corporate-otp/corporate-otp.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"header\"></div>\n  <ion-icon name=\"close-sharp\" class=\"close_icon\" routerLink=\"/login\"></ion-icon>\n  <div class=\"--parent\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <span class=\"verify\">We have sent a verification code to</span>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <span class=\"email\">{{email}}</span>\n      </ion-col>\n    </ion-row>\n\n    <div style=\"position: relative; margin-top: 3rem\">\n      <input type=\"tel\" class=\"otp-catch\" [ngStyle]=\"{'letter-spacing':width/6+'px'}\" maxlength=\"6\" [(ngModel)]=\"otp1\"\n        (input)=\"checkInput()\" />\n      <ion-row>\n        <ion-col size=\"1.8\" class=\"ion-text-center\">\n          <div class=\"input-box\" [ngClass]=\"{'shadow-active':isActive}\"></div>\n        </ion-col>\n        <ion-col size=\".2\"></ion-col>\n        <ion-col size=\"1.8\" class=\"ion-text-center\">\n          <div class=\"input-box\" [ngClass]=\"{'shadow-active':isActive}\"></div>\n        </ion-col>\n        <ion-col size=\".2\"></ion-col>\n        <ion-col size=\"1.8\" class=\"ion-text-center\">\n          <div class=\"input-box\" [ngClass]=\"{'shadow-active':isActive}\"></div>\n        </ion-col>\n        <ion-col size=\".2\"></ion-col>\n        <ion-col size=\"1.8\" class=\"ion-text-center\">\n          <div class=\"input-box\" [ngClass]=\"{'shadow-active':isActive}\"></div>\n        </ion-col>\n        <ion-col size=\".2\"></ion-col>\n        <ion-col size=\"1.8\" class=\"ion-text-center\">\n          <div class=\"input-box\" [ngClass]=\"{'shadow-active':isActive}\"></div>\n        </ion-col>\n        <ion-col size=\".2\"></ion-col>\n        <ion-col size=\"1.8\" class=\"ion-text-center\">\n          <div class=\"input-box\" [ngClass]=\"{'shadow-active':isActive}\"></div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <br />\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <span class=\"expire\"> OTP will expire in\n          <span class=\"timer\"> <b>00:{{countDown}}</b> </span> Sec\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 5rem\">\n      <ion-col class=\"ion-text-center\">\n        <span class=\"verify\">Didn’t receive the code?\n          <span *ngIf=\"countDown!='00'\">Resend Now</span>\n          <a style=\"color: #263143; font-weight: 500\" *ngIf=\"countDown=='00'\" (click)=\"resendOtp()\">Resend Now</a>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_corporate-otp_corporate-otp_module_ts.js.map