"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_termsandconditions_termsandconditions_module_ts"],{

/***/ 40565:
/*!*************************************************************************!*\
  !*** ./src/app/termsandconditions/termsandconditions-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandconditionsPageRoutingModule": () => (/* binding */ TermsandconditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _termsandconditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsandconditions.page */ 71837);




const routes = [
    {
        path: '',
        component: _termsandconditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsandconditionsPage
    }
];
let TermsandconditionsPageRoutingModule = class TermsandconditionsPageRoutingModule {
};
TermsandconditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsandconditionsPageRoutingModule);



/***/ }),

/***/ 25421:
/*!*****************************************************************!*\
  !*** ./src/app/termsandconditions/termsandconditions.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandconditionsPageModule": () => (/* binding */ TermsandconditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _termsandconditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsandconditions-routing.module */ 40565);
/* harmony import */ var _termsandconditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsandconditions.page */ 71837);







let TermsandconditionsPageModule = class TermsandconditionsPageModule {
};
TermsandconditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _termsandconditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsandconditionsPageRoutingModule
        ],
        declarations: [_termsandconditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsandconditionsPage]
    })
], TermsandconditionsPageModule);



/***/ }),

/***/ 71837:
/*!***************************************************************!*\
  !*** ./src/app/termsandconditions/termsandconditions.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandconditionsPage": () => (/* binding */ TermsandconditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _termsandconditions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsandconditions.page.html?ngResource */ 23157);
/* harmony import */ var _termsandconditions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsandconditions.page.scss?ngResource */ 66661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let TermsandconditionsPage = class TermsandconditionsPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(res => {
            this.from = res['from'];
        });
    }
    ngOnInit() {
    }
    goNext() {
        if (this.from) {
            this.router.navigate(["boarding2"], { queryParams: { from: 'editProfile' } });
        }
        else {
            this.router.navigate(["boarding2"]);
        }
    }
};
TermsandconditionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
TermsandconditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-termsandconditions',
        template: _termsandconditions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_termsandconditions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsandconditionsPage);



/***/ }),

/***/ 66661:
/*!****************************************************************************!*\
  !*** ./src/app/termsandconditions/termsandconditions.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #f8f8f8;\n}\n\nion-card {\n  margin: 16px;\n}\n\nion-card-title {\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\nion-card-content h2 {\n  color: #000;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\nion-card-content p {\n  margin-bottom: 16px;\n  line-height: 1.6;\n}\n\n.go_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.go_btn::part(native) {\n  --background: var(--profile-color) !important;\n  color: var(--button-text) !important;\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  font-family: var(--theme-newFont);\n}\n\n.back_btn {\n  height: 50px;\n  width: 70%;\n}\n\n.back_btn::part(native) {\n  --background: var(--white);\n  text-transform: none;\n  box-shadow: var(--btnShaddow);\n  color: var(--button-text-back);\n  font-family: var(--theme-newFont);\n  border-color: var(--theme-newButton);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zYW5kY29uZGl0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBR0o7O0FBRkk7RUFDRyw2Q0FBQTtFQUNDLG9DQUFBO0VBQ0Ysb0JBQUE7RUFDQSw2QkFBQTtFQUVBLGlDQUFBO0FBR047O0FBQUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUZJO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBSU4iLCJmaWxlIjoidGVybXNhbmRjb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIH1cbiAgXG4gIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQgaDJ7XG4gICAgY29sb3I6IzAwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICB9XG5cbiAgLmdvX2J0biB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByb2ZpbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWJ1dHRvbi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1idG5TaGFkZG93KTtcbiAgICAgIFxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRoZW1lLW5ld0ZvbnQpO1xuICAgIH1cbiAgfVxuICAuYmFja19idG4ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnRuU2hhZGRvdyk7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtYmFjayk7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tdGhlbWUtbmV3Rm9udCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLW5ld0J1dHRvbik7XG4gICAgfVxuICB9Il19 */";

/***/ }),

/***/ 23157:
/*!****************************************************************************!*\
  !*** ./src/app/termsandconditions/termsandconditions.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"height: 2rem;\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"goNext()\" style=\"--color:#fff\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Terms and Conditions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Terms and Conditions</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        The content of this app is provided as an information source and is not intended as, nor should it be considered a substitute for, professional medical advice.\n        Literature reporting on metabolism, weight loss, and related topics is complicated and vast, with the continuous expansion of insight into the phenotypic and genotypic presentation. The translation of this knowledge and data into the current app required simplification and therefore inconsistencies may have occurred.\n      </p>\n      <h2>1.Terms of Use</h2>\n      <p>\n        This Appneurons technologies private Liimted app offers complimentary information as an interactive community service. With the express condition that the use of this Appneurons technologies private Liimted app implies your acceptance of all terms and conditions. “App neuron LLP (Smart Diet Planner)”reserves the right to modify these terms and conditions at any time, without notice.\n      </p>\n      <h2>2. Usage of Content</h2>\n      <p>\n        Unless noted otherwise, all information contained in this app, such as text, graphics, logos, icons, and images is copyrighted by and property of smartdietplanner.com, and may not be copied, altered, stored, or otherwise used commercially in whole or part without the express consent of Smart Diet Planner\n      </p>\n      <h2>3. Disclaimer of Warranty</h2>\n      <p>\n        Appneurons technologies private Liimted makes no warranties of any kind regarding, the accuracy, completeness, timeliness, or reliability of this website's content.\n      </p>\n      <h2>4. Limitation of Liability</h2>\n      <p>\n        You agree to hold harmlessAppneurons technologies private Liimted, its affiliates and their officers, directors, employees, and volunteers from all claims relating to this app and any website to which it is linked.\n      </p>\n      <h2>5. ACCESS</h2>\n      <!-- <p> -->\n        <ul>\n          <li>Appneurons technologies private Liimted grants you permission to use the Services as set forth in this Agreement, provided that: You will not copy or distribute, any part of the Services in any medium or in any manner whatsoever without “Smart Diet Planner\"'s explicit authorization in this regard.</li>\n          <li>By using the Services and completing the registration process, you warrant that:<br>\n            <span>\n              (a) all the data provided by you is accurate and complete;\n            </span><br>\n            <span>\n              (b) you shall maintain the accuracy of such information, and any changes thereto by regular updation of any such information;\n            </span><br>\n            <span>\n              (c) you affirm that you are over 18 (eighteen) years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in this Agreement, and to abide by and comply with this Agreement;\n            </span><br>\n            <span>\n              (d)We shall not be liable for any injury, damage, or other consequence, health-related or otherwise arising out of any inaccuracy in the information on the Website/App.\n            </span>\n\n          </li>  \n          <li>\n            The information provided by you may be shared by us with any third party for providing the Services, record-keeping purposes, internal procedures or for any other purposes and by using this Website/ App you expressly consent to such sharing of the information provided by you.\n          </li>\n          <li>\n            Upon completing the registration process, you will be provided with access to the information and you must treat such information as confidential, and you must not disclose it to any third party.\n          </li>\n          <li>\n            You agree that your ability to log into your account is dependent upon external factors such as internet service providers and internet network connectivity and we shall not be liable to you for any damages arising from your inability to log into your account.\n          </li>\n        </ul>\n       \n      <!-- </p> -->\n      <h2>6. Electronic Communications And Data Protection</h2>\n      <p>\n        When you visit the Website or the application or send any emails to us, you will be communicating electronically with us. By such electronic communication, you agree to receive such communications from us electronically. You acknowledge that your electronic submissions constitute your agreement and your acceptance to be bound by and to pay for such agreements and transactions. Your agreement and intent to be bound by electronic submissions applies to all transactions you enter into on the Website, and all records including notices of cancellation, policies, contracts, and applications.\n       <br>\nAppneurons technologies private Liimted is bound to comply with the principles of good practice in the processing of personal data. The personal data collected by us from you, maybe utilized by us to\n<br>\n(i) create the diet plan for you\n<br>\n(ii) pass information about you to our agents, advisors, and employees to carry out services for us,\n<br>\n(iii) notify you about enhancements to our services such as functionality changes to the website, new services, and special features, and offers or competitions we think you will find interesting,\n<br>\n(iv) market our goods and services and those of any third parties and\n<br>\n(v) contact you by mail, telephone, email, text message, or any other reasonable method. If you wish not to be contacted in regards to the marketing of our goods and services and those of any third parties, you can contact us by using the contact information set out above.\n<br>\nWe have implemented reasonable technical and organizational measures designed to secure your personal information and User Content from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information and User Content for improper purposes. You acknowledge that you provide your personal information at your own risk.\n</p>\n     <h2>7. MEMBERSHIP/REGISTRATION FOR THE SERVICES</h2> \n     <p> \n      By providing Appneurons technologies private Liimted your email address/ phone number you consent to:\n    </p>\n      <ul>\n        <li>Our using your email address or mobile number to send you Service-related notices, including any notices required by law, in lieu of communication by postal mail. You may use your settings to opt-out of Service-related communications videemail/mobile number or entirely.</li>\n        <li>Our using the phone numbers provided by you, to contact you from time to time, in order to provide you updates and advice relating to your progress on the App and the usage of our Services.</li>\n        <li>Our using your email address or phone number to send you other messages, including changes to features of the Service and special offers.</li>\n      </ul>\n     <!-- </p> -->\n    <h2>8. RIGHTS RESERVED BY SMART DIET PLANNER</h2> \n    <!-- <p> -->\n      <ul>\n        <li>We have the right to immediately terminate your access or usage rights and remove non-compliant information or material, in case of non-compliance with these terms and conditions, this Agreement or the Privacy Policy.</li>\n        <li>We reserve the right to introduce or change the prices of Services without any notice but this will not impact the current plan availed by you</li>\n      </ul>\n    <!-- </p> -->\n    <h2>9. BILLING AND PAYMENT</h2> \n    <!-- <p> -->\n      <ul>\n        <li>Certain aspects of the Services may be provided for a fee or other charge. If you elect to use paid aspects of the Services, you agree to the terms of sale, pricing, payment, and billing policies applicable to such fees and charges. Appneurons technologies private Liimted may add new services for additional fees and charges, or amend fees and charges for existing services, at any time in its sole discretion.</li>\n        <li>Should you choose to upgrade any of the Services provided, through in-app purchases, payment will be charged to your credit/debit card and net banking through your account at confirmation of purchase.</li>\n      <li>You must notify Appneurons technologies private Liimted about any billing problems or discrepancies within 30 (thirty) days after charges first appear on their account statement. If it is not brought to Fiightitawy attention within 30 (thirty) days, You agree to waive your right to dispute such problems or discrepancies.</li>\n     <li>In respect of purchases made on the “Smart Diet Planner”, you hereby acknowledge and agree that no refund requests will be entertained in any manner whatsoever and no refunds will be initiated, therefore.</li> \n     <li>You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if we have been advised of the possibility of such damages), resulting from your use of the Mobile App and Desktop App;</li> \n     <li>You will not use the Mobile App or the Desktop App to create software that sends unsolicited communications (whether commercial or otherwise) to any third party;</li> \n     <li>We reserve the right at any time to modify or discontinue, temporarily or permanently the Desktop App and Mobile App by providing a notice of 48 (forty-eight) hours with or without notice;</li> \n    </ul>\n    <!-- </p> -->\n    <h2>10. OWNERSHIP OF INTELLECTUAL PROPERTY INCLUDING TRADEMARKS /SERVICE MARKS</h2> \n    <!-- <p> -->\n      <ul>\n        <li>All right, title, and interest in the usage of the terms Smartdietplanner.com, “Appneurons technologies private Liimted including but not limited to all texts, graphics, user interfaces, visual interfaces, computer code, and any other information associated therewith are reserved by us.</li>\n        <li>All rights, title, and interest in and to the Services (excluding your Content) are and will remain the exclusive property of “Smart Diet Planner”</li>\n        <li>Except as expressly provided in these terms of use, no part of Appneurons technologies private Liimted and no content or marks, data, statistics, independent research conducted and posted by “App neuron LLP (Smart Diet Planner)”may be copied reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, or distributed in any way including (“mirroring”) to any other computer, server, website, or another medium for publication or distribution of any for any commercial enterprise, without prior written consent.</li>\n      </ul>\n    <!-- </p> -->\n    <h2>11. GOVERNING LAW</h2> \n    <!-- <p> -->\n<ul>\n  <li>The laws of India govern this Agreement and these terms and conditions of use of the Services.</li>\n  <li>Appneurons technologies private Limited accepts no liability whatsoever, direct or indirect, for noncompliance with the laws of any country other than that of India, the mere fact that Website/ App/Marketplace can be accessed or used or any facility can be availed of in a country other than India will not imply that we accede to the laws of such country..</li>\n</ul>\n<div class=\"go_btn_div\">\n  <ion-grid>\n    <ion-row>\n      <ion-col  class=\"center\">\n        <ion-button class=\"go_btn\" shape=\"round\" (click)=\"goNext()\">OK</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <br>\n  <br>\n  <br>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_termsandconditions_termsandconditions_module_ts.js.map