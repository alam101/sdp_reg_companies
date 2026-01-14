"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chat-bot_chat-bot_module_ts"],{

/***/ 81892:
/*!***********************************************************!*\
  !*** ./src/app/pages/chat-bot/chat-bot-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBotPageRoutingModule": () => (/* binding */ ChatBotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _chat_bot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-bot.page */ 6980);




const routes = [
    {
        path: '',
        component: _chat_bot_page__WEBPACK_IMPORTED_MODULE_0__.ChatBotPage
    }
];
let ChatBotPageRoutingModule = class ChatBotPageRoutingModule {
};
ChatBotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatBotPageRoutingModule);



/***/ }),

/***/ 43254:
/*!***************************************************!*\
  !*** ./src/app/pages/chat-bot/chat-bot.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBotPageModule": () => (/* binding */ ChatBotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _chat_bot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-bot-routing.module */ 81892);
/* harmony import */ var _chat_bot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-bot.page */ 6980);







let ChatBotPageModule = class ChatBotPageModule {
};
ChatBotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_bot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatBotPageRoutingModule
        ],
        declarations: [_chat_bot_page__WEBPACK_IMPORTED_MODULE_1__.ChatBotPage]
    })
], ChatBotPageModule);



/***/ }),

/***/ 6980:
/*!*************************************************!*\
  !*** ./src/app/pages/chat-bot/chat-bot.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBotPage": () => (/* binding */ ChatBotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _chat_bot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-bot.page.html?ngResource */ 23403);
/* harmony import */ var _chat_bot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-bot.page.scss?ngResource */ 65040);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-socket.service */ 54509);
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ 15383);







let ChatBotPage = class ChatBotPage {
    constructor(http, wsService, socketService) {
        this.http = http;
        this.wsService = wsService;
        this.socketService = socketService;
        this.isShow = true;
        this.newMessage = '';
        this.startMessages = [];
        this.myMessage = [];
        this.botMessage = [];
        this.clientId = "Fitrofy";
        this.isActiveInput = false;
        this.clientId = localStorage.getItem("clientId");
    }
    ngOnInit() {
        console.log("gggg", localStorage.getItem("userId"));
        const message = 'adarsh';
        this.socketService.emit('initialize', { userId: localStorage.getItem("userId") });
        this.socketService.on('bot_reply', (msg) => {
            this.isActiveInput = false;
            console.log("received:-", msg);
            if (msg.message?.options?.length > 0) {
                this.complteObject = msg;
                this.messages = msg.message;
            }
            else {
                this.complteObject = msg;
                if (msg.message) {
                    if (msg.message?.options) {
                        this.messages = msg.message;
                    }
                    if (msg?.message?.label.split(' ')?.includes('Invalid')) {
                        this.botMessage.push(msg.message.label);
                    }
                    if (msg?.message?.hint) {
                        this.isActiveInput = true;
                        this.botMessage.push(msg.message.hint);
                    }
                    else {
                        this.isActiveInput = false;
                        this.botMessage.push(msg.message.label);
                    }
                }
            }
        });
        // this.getWelcomeMessage();
    }
    goBack() {
        console.log("this.myMessage[0]", this.myMessage[0]);
        this.socketService.emit("send_message", { message: this.myMessage[0] });
    }
    sendMessage() {
        console.log({ ...this.complteObject, input: this.newMessage });
        this.socketService.emit("send_message", { ...this.complteObject, input: this.newMessage });
        this.myMessage.push(this.newMessage);
        this.newMessage = "";
    }
    optionClickListener(option) {
        this.myMessage.push(option.label);
        this.socketService.emit("send_message", { message: option.label });
        // this.socketService.on('bot_message', (msg) => {
        //   console.log('bot_message:', msg);
        // });
    }
    menuOppener() {
        this.messages.push({
            sender: 'bot',
            text: `Choose on of Below`,
            options: [{ label: '1. Go Back' }, { label: '2. Start Again' }, { label: '3. No Queries' }]
        });
    }
};
ChatBotPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__.WebSocketService },
    { type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService }
];
ChatBotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-chat-bot',
        template: _chat_bot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_bot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatBotPage);



/***/ }),

/***/ 65040:
/*!**************************************************************!*\
  !*** ./src/app/pages/chat-bot/chat-bot.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".menu-container {\n  background: #f7f7f7;\n  border-radius: 12px;\n  padding: 1rem;\n}\n\nh2 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.menu-list {\n  background: #ffffff;\n  border-radius: 12px;\n}\n\n.menu-list ion-item {\n  --background: #fff;\n  --padding-start: 1rem;\n  --inner-padding-end: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.menu-list ion-item:last-child {\n  border-bottom: none;\n}\n\n.menu-list ion-item ion-icon {\n  font-size: 18px;\n  color: #8c8c8c;\n}\n\n.user-bubble {\n  background-color: #7b2c86;\n  color: white;\n  border-radius: 16px;\n  padding: 12px;\n  max-width: 95%;\n  margin: 8px 0 8px auto;\n  float: right;\n  min-width: 270px;\n  border-radius: 15px 15px 0px 15px;\n}\n\n.bot-bubble {\n  background-color: #f7ebe5;\n  color: #7b2c86;\n  border-radius: 16px;\n  padding: 16px;\n  max-width: 95%;\n  margin: 8px auto 8px 0;\n  float: left;\n  min-width: 300px;\n  border-radius: 15px 15px 15px 0px;\n}\n\n.timestamp {\n  font-size: 0.75rem;\n  color: #fff;\n  margin-top: 4px;\n  display: block;\n  text-align: right;\n}\n\n.timestamp1 {\n  font-size: 0.75rem;\n  color: #666;\n  margin-top: 4px;\n  display: block;\n  text-align: left;\n}\n\n.button-group {\n  margin-top: 8px;\n}\n\n.option-item {\n  background-color: white;\n  margin: 10px;\n  border-radius: 12px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYm90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUVFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBR0k7RUFDRSxtQkFBQTtBQUROOztBQUlJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGTjs7QUFNRTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDSSxnQkFBQTtFQUNHLGlDQUFBO0FBSFQ7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFIRiIsImZpbGUiOiJjaGF0LWJvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuXG5cbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1lbnUtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGlvbi1pdGVtIHtcbiAgICAgIFxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIH1cbiAgfVxufVxuICAudXNlci1idWJibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IyYzg2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXJnaW46IDhweCAwIDhweCBhdXRvO1xuICBmbG9hdDpyaWdodDtcbiAgICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDE1cHg7XG59XG5cbi5ib3QtYnViYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZWJlNTtcbiAgY29sb3I6ICM3YjJjODY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXJnaW46IDhweCBhdXRvIDhweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xufVxuXG5cbi50aW1lc3RhbXAge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50aW1lc3RhbXAxIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm9wdGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cblxuXG4iXX0= */";

/***/ }),

/***/ 23403:
/*!**************************************************************!*\
  !*** ./src/app/pages/chat-bot/chat-bot.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"goBack()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{clientId}} Bot\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" class=\"ion-padding\" style=\"height: 900px;\">\n \n  <div class=\"menu-container\" *ngIf=\"messages?.options?.length>0\">\n    <div >\n   \n    <h2>HELP WITH OTHER QUERIES</h2>\n      <div>\n        {{ messages.label }}\n    </div>\n\n  <div>\n     <ion-list class=\"menu-list\">\n      <ion-item  *ngFor=\"let btn of messages?.options\"  (click)=\"optionClickListener(btn)\" style=\"font-size: 1rem;\n    font-weight: 500;\"> \n       <ion-label> {{ btn?.label }}</ion-label>\n        <img src=\"./assets/icon/forward-arrow.png\" slot=\"end\" style=\"width: 6%;\n    height: auto;\"/>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</div>\n</div>\n<div *ngIf=\"messages?.options?.length===0\">\n        <div class=\"user-bubble\" *ngFor=\"let muMsg of myMessage\">\n          <p>{{ muMsg }}</p>\n          <!-- <small class=\"timestamp\">09:46 AM</small> -->\n        </div>\n     \n<div class=\"bot-bubble\" *ngFor=\"let botMsg of botMessage\">\n    <span>Thanks</span>\n   <div>\n      {{botMsg}}\n   </div>\n     <!-- <small class=\"timestamp1\">09:46 AM</small> -->\n  </div>\n\n    </div>\n\n \n <ion-footer *ngIf=\"isActiveInput\" style=\"position: fixed;\n    bottom: 7px;\n    width: 94%;\n    border-bottom: 1px solid #b3b3b3;\">\n  <ion-toolbar>\n    <ion-input\n      placeholder=\"Type a message...\"\n      [(ngModel)]=\"newMessage\"\n      (keyup.enter)=\"sendMessage()\"\n      class=\"chat-input\"\n    ></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sendMessage()\">Send</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-content>\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat-bot_chat-bot_module_ts.js.map