"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newBoarding_boarding1_boarding1_module_ts"],{

/***/ 81434:
/*!*******************************************************************!*\
  !*** ./src/app/newBoarding/boarding1/boarding1-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding1PageRoutingModule": () => (/* binding */ Boarding1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _boarding1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding1.page */ 23869);




const routes = [
    {
        path: '',
        component: _boarding1_page__WEBPACK_IMPORTED_MODULE_0__.Boarding1Page
    }
];
let Boarding1PageRoutingModule = class Boarding1PageRoutingModule {
};
Boarding1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Boarding1PageRoutingModule);



/***/ }),

/***/ 86267:
/*!***********************************************************!*\
  !*** ./src/app/newBoarding/boarding1/boarding1.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding1PageModule": () => (/* binding */ Boarding1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _boarding1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding1-routing.module */ 81434);






let Boarding1PageModule = class Boarding1PageModule {
};
Boarding1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _boarding1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Boarding1PageRoutingModule,
        ],
        declarations: []
    })
], Boarding1PageModule);



/***/ }),

/***/ 23869:
/*!*********************************************************!*\
  !*** ./src/app/newBoarding/boarding1/boarding1.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boarding1Page": () => (/* binding */ Boarding1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boarding1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boarding1.page.html?ngResource */ 27461);
/* harmony import */ var _boarding1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarding1.page.scss?ngResource */ 64963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 49535);
/* harmony import */ var src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/utilities */ 29276);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











let Boarding1Page = class Boarding1Page {
    constructor(router, storage, utilities, appService, loading) {
        this.router = router;
        this.storage = storage;
        this.utilities = utilities;
        this.appService = appService;
        this.loading = loading;
        this.name = "";
        this.isChild = false;
        this.regex = /^[A-Za-z0-9 ]+$/;
        this.isNameValid = true;
        this.client = "";
        this.inputValue = '';
        this.client = localStorage.getItem("clientId");
        setTimeout(() => {
            this.dismissLoader();
        }, 1000);
    }
    onInputChange(event) {
        const value = event.target.value;
        // Ensure only letters are allowed (optional: include spaces, punctuation, etc.)
        this.inputValue = value.replace(/[0-9]/g, ''); // Removes all numeric characters
        // Update the value in the input
        event.target.value = this.inputValue;
    }
    ngOnInit() {
        this.storage.get("profileData").then((profileData) => {
            this.prof = this.utilities.parseJSON(profileData);
            this.name =
                this.prof && this.prof["profile"] && this.prof["profile"]["name"]
                    ? this.prof["profile"]["name"]
                    : "";
            this.name = this.name.replace("' '", "").replace(/[^A-Za-z0-9 ]/g, "");
            this.isNameValid = true;
        });
    }
    ngAfterViewInit() {
        // this.storage.get("profileData").then((profileData) => {
        //   this.prof = this.utilities.parseJSON(profileData);
        //   this.name =
        //     this.prof && this.prof["profile"] && this.prof["profile"]["name"]
        //       ? this.prof["profile"]["name"]
        //       : "";
        //   this.name = this.name.replace("' '", "").replace(/[^A-Za-z0-9 ]/g, "");
        //   this.isNameValid = true;
        // });
    }
    dismissLoader() {
        this.loading.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
    goNext() {
        console.log(this.name);
        if (this.name?.trim() === "") {
            if (!this.regex.test(this.name)) {
                this.name.replace(this.regex, "");
                this.isNameValid = false;
                this.utilities.showErrorToast("Please enter valid chatacters.");
                return false;
            }
        }
        console.log("Name ", this.name);
        let name = this.name.split(/ (.+)/);
        let data = {
            FirstName: name[0],
            LastName: name[1] ? name[1] : "",
        };
        // this.storage.get("profileData").then((profileData)=>{
        //   let prof = this.utilities.parseJSON(profileData);
        if (this.prof["profile"]) {
            this.prof["profile"]["name"] =
                data.LastName != ""
                    ? data.FirstName + " " + data.LastName
                    : data.FirstName;
            this.prof["profile"]["given_name"] = data.FirstName;
            this.prof["profile"]["family_name"] = data.LastName;
            this.prof["profile"]["firstName"] = data.FirstName;
            this.prof["profile"]["lastName"] = data.LastName;
        }
        else {
            this.prof["profile"] = {};
            this.prof["profile"]["name"] =
                data.LastName != ""
                    ? data.FirstName + " " + data.LastName
                    : data.FirstName;
            this.prof["profile"]["given_name"] = "for testing:---";
            this.prof["profile"]["family_name"] = data.LastName;
            this.prof["profile"]["firstName"] = data.FirstName;
            this.prof["profile"]["lastName"] = data.LastName;
        }
        this.storage.set("newProfilePic", JSON.stringify(this.prof["profile"]));
        this.appService.updateProfile(this.prof["profile"]).then((res) => {
            // this.storage.get("localData").then((local) => {
            console.log("profile:-", this.prof);
            this.storage.set("profileData", this.utilities.parseString(this.prof));
            if (this.isChild) {
                this.storage.set("pendingPage", "/boarding2");
                this.router.navigate(["/boarding2"]);
            }
            else {
                this.storage.set("pendingPage", "/boarding");
                this.router.navigate(["/boarding"]);
            }
            // if(this.isEdit != ""){
            //   this.router.navigate(["gender"], { queryParams: {prop: 'edit'} });
            // }else{
            //   this.router.navigate(["gender"]);
            // }
        });
    }
};
Boarding1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: src_app_core_utility_utilities__WEBPACK_IMPORTED_MODULE_4__.UTILITIES },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
Boarding1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-boarding1",
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule],
        template: _boarding1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boarding1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Boarding1Page);



/***/ }),

/***/ 64963:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding1/boarding1.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  width: 100%;\n}\n\nion-content::part(background) {\n  --background: var(--white);\n}\n\n.slider_div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.header_div {\n  height: 250px;\n  width: 100%;\n  background: var(--theme-newHeader);\n}\n\n.content_div {\n  margin-top: -40px;\n  width: 100%;\n  background: var(--white);\n  border-radius: 30px 30px 0px 0px;\n  padding: 20px 5%;\n}\n\n.slider_page {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page_Count {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--theme-newHeader);\n  font-family: var(--theme-newFont);\n}\n\n.page_Count_active {\n  height: 20px;\n  width: 20px;\n  border: 2px solid var(--theme-milestone);\n  border-radius: 100%;\n  font-size: var(--xsmall-font);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--theme-milestone2);\n  font-weight: bold;\n  z-index: 10;\n  background: var(--black);\n  font-family: var(--theme-newFont);\n}\n\n.lines {\n  border: 1px solid var(--theme-milestone);\n  width: 90%;\n  position: absolute;\n}\n\n.title-text {\n  font-size: var(--regular-font);\n  font-family: var(--theme-newFont);\n  color: var(--black);\n  margin-top: 30px;\n}\n\n.title {\n  font-size: var(--medium-font);\n  font-family: var(--theme-newFont);\n  color: var(--theme-theme-headerText);\n  font-weight: 700;\n  padding-top: 50px;\n  margin: 0;\n}\n\n.reg_img {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: -134px;\n}\n\n.reg_img_child {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: -134px;\n}\n\n.reg_img_child img {\n  border-radius: 12rem;\n}\n\n.input {\n  border-bottom: 3px solid var(--card-border);\n  font-size: var(--large-font);\n  font-family: var(--theme-newFont);\n  font-weight: 500;\n  color: var(--black);\n  margin-top: 50px;\n}\n\n.go_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.go_btn_div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n  background: var(--white);\n  width: 100%;\n  margin-top: 35%;\n}\n\n.header-container {\n  width: 100%;\n  height: 100%;\n}\n\n.aviva-logo {\n  width: 24%;\n  border-radius: 1rem;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  max-width: 165px;\n  display: block;\n}\n\n.elderfly-logo {\n  width: 40%;\n  border-radius: 1rem;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  max-width: 165px;\n  display: block;\n}\n\n.yellowsquash-logo {\n  width: 40%;\n  border-radius: 1rem;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  max-width: 165px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkaW5nMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSwwQkFBQTtBQUFGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFJRTtFQUNBLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBRkY7O0FBR0U7RUFDRSw2Q0FBQTtFQUNJLG9DQUFBO0VBQ0osb0JBQUE7RUFDQSw2QkFBQTtFQUVBLGlDQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSRiIsImZpbGUiOiJib2FyZGluZzEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xuICAvLyBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudDo6cGFydChiYWNrZ3JvdW5kKSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuXG4vLyBpb24tY29udGVudDo6cGFydChzY3JvbGwpe1xuLy8gICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbi8vIH1cblxuLnNsaWRlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX2RpdiB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1uZXdIZWFkZXIpO1xufVxuXG4uY29udGVudF9kaXYge1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDIwcHggNSU7XG59XG5cbi5zbGlkZXJfcGFnZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhZ2VfQ291bnQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IHZhcigtLXhzbWFsbC1mb250KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1taWxlc3RvbmUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLW5ld0hlYWRlcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbn1cblxuLnBhZ2VfQ291bnRfYWN0aXZlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtbWlsZXN0b25lKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiB2YXIoLS14c21hbGwtZm9udCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtbWlsZXN0b25lMik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG59XG5cbi5saW5lcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLW1pbGVzdG9uZSk7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LXNpemU6IHZhcigtLXJlZ3VsYXItZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgY29sb3I6IHZhcigtLXRoZW1lLXRoZW1lLWhlYWRlclRleHQpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmVnX2ltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IC0xMzRweDtcbn1cbi5yZWdfaW1nX2NoaWxke1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiAtMTM0cHg7XG4gIGltZ3tcbiAgYm9yZGVyLXJhZGl1czogMTJyZW07XG4gIH1cbn1cbi5pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtZm9udCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmdvX2J0biB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWJ1dHRvbi10ZXh0KSAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ0blNoYWRkb3cpO1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aGVtZS1uZXdGb250KTtcbiAgfVxufVxuXG4uZ29fYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzUlO1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGJvdHRvbTogMjBweDtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAxMDBweDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXZpdmEtbG9nbyB7XG4gIHdpZHRoOiAyNCU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5lbGRlcmZseS1sb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDE2NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnllbGxvd3NxdWFzaC1sb2dvIHtcbiAgd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDE2NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */";

/***/ }),

/***/ 27461:
/*!**********************************************************************!*\
  !*** ./src/app/newBoarding/boarding1/boarding1.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"mainDiv\">\n    <div class=\"header_div\">\n\n      <!-- <ion-row *ngIf=\"isChild\" class=\"header-container\">\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <img class=\"aviva-logo\" src=\"./assets/child/child-6.jpeg\">\n        </ion-col>\n      </ion-row> -->\n      <div *ngIf=\"!isChild\">\n        <ion-row *ngIf=\"client==='aviva'\" class=\"header-container\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"aviva-logo\" src=\"./assets/newImages/aviva-logo.png\">\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"client==='yellowsquash'\" class=\"header-container\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"yellowsquash-logo\" src=\"./assets/companyLogo/YellowSquash.png\">\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"client==='elderfly'\" class=\"header-container\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"elderfly-logo\" src=\"./assets/companyLogo/elderfly.png\">\n          </ion-col>\n        </ion-row>\n      </div>\n      <h3 class=\"title ion-text-center\"></h3>\n\n    </div>\n\n    <div class=\"content_div\">\n      <ion-img\n        *ngIf=\"client!='plix' && client!='orthocure' && client!='aviva' && client!='yellowsquash' && client!='elderfly' && !isChild\"\n        src=\"../../../assets/newImages/registration.svg\" class=\"reg_img\"></ion-img>\n      <ion-img *ngIf=\"isChild\" src=\"../../../assets/child/child-6.jpeg\" class=\"reg_img_child\">\n      </ion-img>\n      <img *ngIf=\"client==='plix'\" src=\"./assets/newImages/plixlogo.jpeg\" style=\"    width: 24%;\n        position: absolute;\n        left: 38%;\n        top: 5rem;\n        border-radius: 1rem;\">\n      <img *ngIf=\"client==='orthocure'\" src=\"./assets/newImages/orthocure.png\" style=\"width: 50%;\n         position: absolute;\n         left: 24%;\n         top: 5rem;\n         border-radius: 1rem;\">\n\n      <h3 class=\"title-text ion-text-center\">Hey, answer a few questions to help us get your personalised plan</h3>\n\n      <ion-input type=\"text\" (ionInput)=\"onInputChange($event)\" class=\"input\" placeholder=\"Your Name\"\n        [(ngModel)]=\"name\"></ion-input>\n      <ion-note color=\"danger\" *ngIf=\"form?.get('textInput')?.hasError('pattern')\">\n        Numbers are not allowed!\n      </ion-note>\n    </div>\n    <div class=\"go_btn_div\">\n      <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\"\n        style=\"z-index: 10; touch-action: manipulation; -webkit-transform: translate3d(0, 0, 0);\">\n        Let's Start\n      </ion-button>\n    </div>\n  </div>\n  <br><br><br>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newBoarding_boarding1_boarding1_module_ts.js.map