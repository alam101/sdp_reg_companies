"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_calory-chart_calory-chart_module_ts"],{

/***/ 90805:
/*!*******************************************************************!*\
  !*** ./src/app/pages/calory-chart/calory-chart-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaloryChartPageRoutingModule": () => (/* binding */ CaloryChartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _calory_chart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calory-chart.page */ 10267);




const routes = [
    {
        path: '',
        component: _calory_chart_page__WEBPACK_IMPORTED_MODULE_0__.CaloryChartPage
    }
];
let CaloryChartPageRoutingModule = class CaloryChartPageRoutingModule {
};
CaloryChartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CaloryChartPageRoutingModule);



/***/ }),

/***/ 44178:
/*!***********************************************************!*\
  !*** ./src/app/pages/calory-chart/calory-chart.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaloryChartPageModule": () => (/* binding */ CaloryChartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _calory_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calory-chart-routing.module */ 90805);
/* harmony import */ var _calory_chart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calory-chart.page */ 10267);







let CaloryChartPageModule = class CaloryChartPageModule {
};
CaloryChartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calory_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CaloryChartPageRoutingModule
        ],
        declarations: [_calory_chart_page__WEBPACK_IMPORTED_MODULE_1__.CaloryChartPage]
    })
], CaloryChartPageModule);



/***/ }),

/***/ 10267:
/*!*********************************************************!*\
  !*** ./src/app/pages/calory-chart/calory-chart.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaloryChartPage": () => (/* binding */ CaloryChartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _calory_chart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calory-chart.page.html?ngResource */ 74726);
/* harmony import */ var _calory_chart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calory-chart.page.scss?ngResource */ 33926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _newBoarding_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../newBoarding/app.service */ 49535);








let CaloryChartPage = class CaloryChartPage {
    constructor(router, appServices, route) {
        this.router = router;
        this.appServices = appServices;
        this.route = route;
        this.custDailyDiets = [];
        this.isValidDate = false;
        this.Math = Math;
        this.averageCal = 0;
        chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_4__.registerables);
        let dateRange = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).day() + 1;
        let fromDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format("DDMMYYYY");
        this.setDateRange(dateRange);
        this.isValidDate = false;
        this.getProfile(() => {
            this.customDailyDiets(fromDate, dateRange);
        });
        this.route.queryParams.subscribe(res => {
            this.profileName = res.profileName;
            this.compConfig = JSON.parse(res.compConfig);
            this.profileData = JSON.parse(res.profileData);
        });
    }
    setDateRange(dateRange) {
        let now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
        let sunday = now.clone().weekday(0);
        let lastDay = now.clone().weekday(dateRange - 1);
        this.defaultDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('ll');
        let lastDateMonth = `${new Date().toLocaleString('default', { month: 'long' })}` != `${new Date(lastDay).toLocaleString('default', { month: 'long' })}` ?
            `${new Date(lastDay).toLocaleString('default', { month: 'long' })}` : '';
        this.defaultDateRange = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date(sunday).getDate()} - ${lastDateMonth} ${new Date(lastDay).getDate()}`;
    }
    getProfile(cb) {
        this.appServices.getProfile().then((profileData) => {
            this.maxCalories = profileData?.lifeStyle.calories;
            cb();
        });
    }
    // ionViewWillEnter() {
    //   this.customDailyDiets();
    // }
    customDailyDiets(date, range) {
        let obj = {
            fromDate: date,
            dateRange: range
        };
        this.appServices.fetchCustDailyDiets(obj).then((fetchCustDailyDietsResponse) => {
            console.log('fetchCustDailyDietsResponse: ', fetchCustDailyDietsResponse);
            if (fetchCustDailyDietsResponse) {
                this.custDailyDiets = fetchCustDailyDietsResponse.filter((ele) => ele.data.totalEatenCalories);
                this.custDailyDiets.forEach(ele => {
                    ele["displayDate"] = moment__WEBPACK_IMPORTED_MODULE_2___default()(moment__WEBPACK_IMPORTED_MODULE_2___default()(ele.date, "DD-MM-YYYY")).format('dddd, MMMM D');
                    ele["restCalories"] = Math.floor(this.maxCalories - ele.data.totalEatenCalories);
                    // ele.data["colorHash"] =  ele.data.scoreColor == 'dark green' ? '#38A534' :
                    // ele.data.scoreColor == 'light green' ? '#94EA0A' :
                    //   ele.data.scoreColor == 'yellow' ? '#EADC18' :
                    //     ele.data.scoreColor == 'red' ? '#ff0000' :
                    //       ele.data.scoreColor == 'orange' ? '#ffa500' : '';
                });
                this.barChartMethod();
            }
        }, (fetchCustDailyDietsError) => {
            console.log('fetchCustDailyDietsError: ', fetchCustDailyDietsError);
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    barChartMethod() {
        // this.setLabels();
        let labelToSet = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        let dataToset = [0, 0, 0, 0, 0, 0, 0];
        let dataToset1 = [0, 0, 0, 0, 0, 0, 0];
        let backgroundColorToSet = ["", "", "", "", "", "", ""];
        let counter = 0;
        let totalCalories = 0;
        for (let i = 0; i < this.custDailyDiets.length; i++) {
            const element = this.custDailyDiets[i];
            let date = moment__WEBPACK_IMPORTED_MODULE_2___default()(element.date, "DD-MM-YYYY");
            let day = moment__WEBPACK_IMPORTED_MODULE_2___default()(date).day() + 1;
            let bgColor = element.data.scoreColor == 'dark green' ? '#38A534' :
                element.data.scoreColor == 'light green' ? '#94EA0A' :
                    element.data.scoreColor == 'yellow' ? '#EADC18' :
                        element.data.scoreColor == 'red' ? '#ff0000' :
                            element.data.scoreColor == 'orange' ? '#ffa500' : '';
            // element.data.totalEatenCalories < 400 ? 
            // dataToset[day - 1] = element.data.totalEatenCalories - 400 || 0 : 
            //   dataToset1[day - 1] = element.data.totalEatenCalories || 0;
            if (element.data.totalEatenCalories > this.maxCalories) {
                dataToset[day - 1] = Math.round(this.maxCalories);
                dataToset1[day - 1] = Math.round(element.data.totalEatenCalories - this.maxCalories);
            }
            else {
                dataToset[day - 1] = Math.round(element.data.totalEatenCalories);
            }
            backgroundColorToSet[day - 1] = bgColor || "";
            if (element.data.totalEatenCalories) {
                totalCalories = totalCalories + element.data.totalEatenCalories;
                counter++;
            }
        }
        if (totalCalories && counter) {
            this.averageCal = totalCalories / counter;
        }
        else {
            this.averageCal = 0;
        }
        console.log('fetchCustDailyDietsResponse: ', backgroundColorToSet);
        let self = this;
        let limitAdded = false;
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: labelToSet,
                datasets: [{
                        data: dataToset,
                        backgroundColor: backgroundColorToSet,
                        borderRadius: 100,
                        // borderWidth: 0
                    }, {
                        data: dataToset1,
                        backgroundColor: '#ff0000',
                        borderRadius: 20,
                        // borderWidth: 0
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        // type: 'linear',
                        stacked: true,
                        grid: {
                            color: 'rgba(0,0,0,0)',
                        }
                        // display: false,
                    },
                    y: {
                        stacked: true,
                        suggestedMax: self.maxCalories,
                        grid: {
                            color: (ctx) => {
                                if (ctx.tick.value == self.maxCalories)
                                    return 'rgb(220 54 46)';
                                else
                                    return 'rgba(0,0,0,0.1)';
                            },
                        },
                        ticks: {
                            callback: function (value, index, values) {
                                if (value && values[index + 1] && values[index + 1].value && self.maxCalories > value && self.maxCalories < values[index + 1].value) {
                                    values.splice(index, 1);
                                    values.push({ value: self.maxCalories, label: self.maxCalories });
                                    limitAdded = true;
                                    // values[index+1] = {value:self.maxCalories, label: self.maxCalories};
                                }
                                if (!limitAdded && index + 1 == values.length) {
                                    values.push({ value: self.maxCalories, label: self.maxCalories });
                                }
                                return value;
                            },
                            color: (ctx) => {
                                if (ctx.tick.value == self.maxCalories) {
                                    return 'rgb(220 54 46)';
                                }
                            }
                        }
                    }
                }
            }
            // options: {
            //   // legend: {
            //   //   display: false
            //   // },
            //   // animation: {
            //   //   duration: 2000
            //   // },
            //   scales: {
            //     // yAxes: [{
            //     //   pointLabels: {
            //     //     beginAtZero: true
            //     //   }
            //     // }]
            //     // yAxis: {
            //     //   min: 0,
            //     //   max: 100,
            //     // }
            //   }
            // }
        });
    }
    dateRangeChange(dateRange, type) {
        console.log(type);
        let dateRef = 604800000;
        this.defaultDate = type == "forward" ? new Date(dateRange).getTime() + dateRef : new Date(dateRange).getTime() - dateRef;
        let sunday = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(this.defaultDate)).clone().weekday(0);
        let lastDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(this.defaultDate)).clone().weekday(6);
        let lastDateMonth = `${new Date(sunday).toLocaleString('default', { month: 'long' })}` != `${new Date(lastDay).toLocaleString('default', { month: 'long' })}` ?
            `${new Date(lastDay).toLocaleString('default', { month: 'long' })}` : '';
        this.defaultDateRange = `${new Date(sunday).toLocaleString('default', { month: 'long' })} ${sunday.date()} -  ${lastDateMonth} ${lastDay.date()}`;
        if (this.barChart)
            this.barChart.destroy();
        this.barChart = null;
        this.customDailyDiets(moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(lastDay)).format("DDMMYYYY"), 7);
    }
};
CaloryChartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _newBoarding_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
CaloryChartPage.propDecorators = {
    caloriesCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["caloriesCanvas",] }],
    barCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["barCanvas",] }]
};
CaloryChartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-calory-chart',
        template: _calory_chart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calory_chart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CaloryChartPage);



/***/ }),

/***/ 33926:
/*!**********************************************************************!*\
  !*** ./src/app/pages/calory-chart/calory-chart.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".canvas-card {\n  height: auto;\n  top: 17%;\n  width: 90%;\n  left: 2.5%;\n  margin: 0 auto;\n  right: 2.5%;\n  padding-bottom: 3rem;\n}\n\nion-content {\n  --padding-bottom: env(safe-area-inset-bottom);\n}\n\n.consumed-label {\n  color: #D4B2FF;\n}\n\n.exceeded-label {\n  color: #751FD3;\n}\n\n.daily-limit-label {\n  color: #DC362E;\n}\n\n.color-white {\n  color: #fff;\n}\n\n.date-label {\n  font-size: 14px;\n  font-weight: 400;\n  color: #757575;\n}\n\n.choice-type {\n  font-size: 14px;\n  font-weight: 600;\n  color: #212121;\n}\n\n.consumed-calory-container {\n  display: flex;\n  gap: 5px;\n}\n\n.consumed-calory-container ion-icon {\n  font-size: 14px;\n}\n\n.consumed-calory-container .calory-status {\n  color: #757575;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.calory-consumed {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.green-text {\n  color: #6CC65D;\n}\n\n.red-text {\n  color: #DC362E;\n}\n\n.orange-text {\n  color: #F8A008;\n}\n\n.yellow-text {\n  color: #EADC18;\n}\n\n.calory-status-icon {\n  font-size: 24px;\n}\n\n.light-green-text {\n  color: #94EA0A;\n}\n\n.indicator-icon-container {\n  background: #FFFEFE;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #E3E9EB;\n}\n\n.info-text {\n  color: #B2B2B2;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.records-title {\n  font-size: 20px;\n  margin: 0 16px;\n  font-weight: 600;\n}\n\n.diet-item {\n  border-bottom: 1px solid #E3E9EB;\n  --inner-padding-end: 0;\n}\n\n.date-change {\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n}\n\n.status-mark {\n  font-size: 12px;\n  font-weight: 400;\n  color: #8C8C8C;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbG9yeS1jaGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0UsNkNBQUE7QUFFRjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0FBR0o7O0FBREk7RUFDSSxlQUFBO0FBR1I7O0FBQUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QUFESiIsImZpbGUiOiJjYWxvcnktY2hhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jYXJkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAxNyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiAyLjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHJpZ2h0OiAyLjUlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG59XG4uY29uc3VtZWQtbGFiZWx7XG4gICAgY29sb3I6ICNENEIyRkY7XG59XG5cbi5leGNlZWRlZC1sYWJlbHtcbiAgICBjb2xvcjogIzc1MUZEMztcbn1cblxuLmRhaWx5LWxpbWl0LWxhYmVse1xuICAgIGNvbG9yOiAjREMzNjJFO1xufVxuXG4uY29sb3Itd2hpdGV7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5kYXRlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLmNob2ljZS10eXBlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzIxMjEyMTtcbn1cblxuLmNvbnN1bWVkLWNhbG9yeS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY2Fsb3J5LXN0YXR1cyB7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxufVxuXG4uY2Fsb3J5LWNvbnN1bWVkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG4uZ3JlZW4tdGV4dCB7XG4gICAgY29sb3I6ICM2Q0M2NUQ7XG59XG5cbi5yZWQtdGV4dCB7XG4gICAgY29sb3I6ICNEQzM2MkU7XG59XG5cbi5vcmFuZ2UtdGV4dCB7XG4gICAgY29sb3I6ICNGOEEwMDg7XG59XG5cbi55ZWxsb3ctdGV4dCB7XG4gICAgY29sb3I6ICNFQURDMTg7XG59XG5cbi5jYWxvcnktc3RhdHVzLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxpZ2h0LWdyZWVuLXRleHQge1xuICAgIGNvbG9yOiAjOTRFQTBBO1xufVxuXG4uaW5kaWNhdG9yLWljb24tY29udGFpbmVye1xuICAgIC8vIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRUZFO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTNFOUVCO1xufVxuXG4uaW5mby10ZXh0e1xuICAgIGNvbG9yOiAjQjJCMkIyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucmVjb3Jkcy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaWV0LWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTNFOUVCO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5kYXRlLWNoYW5nZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3RhdHVzLW1hcmsge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjOEM4QzhDO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 74726:
/*!**********************************************************************!*\
  !*** ./src/app/pages/calory-chart/calory-chart.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"height: 3rem !important;\">\n  <ion-toolbar style=\"--min-height: 3rem !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/new-diet\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Calories Consumed\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <!-- Top date bar -->\n  <div style=\"width: 100%;height: 75px;color:#fff;border-bottom-left-radius: 1rem;\n      border-bottom-right-radius: 1rem;padding: 1rem;background:var(--theme-profile-background)\">\n    <div class=\"date-change\">\n      <ion-button (click)=\"dateRangeChange(defaultDate, 'back')\" shape=\"round\" fill=\"clear\">\n        <ion-icon name=\"chevron-back-outline\" class=\"color-white\"></ion-icon>\n      </ion-button>\n      <span>{{defaultDateRange}}</span>\n      <ion-button (click)=\"dateRangeChange(defaultDate, 'forward')\" shape=\"round\" fill=\"clear\">\n        <ion-icon name=\"chevron-forward-outline\" class=\"color-white\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n  <!-- Main card + list -->\n  <div class=\"canvas-card\">\n    <ion-card>\n      <ion-card-content style=\"padding-left: 15px;\">\n        <ion-row class=\"text-center\" *ngIf=\"averageCal\">\n          <ion-col>\n            <b>{{Math.round(averageCal)}} Kcal </b> Average\n          </ion-col>\n        </ion-row>\n\n        <canvas #barCanvas style=\"position: relative;\" height=\"200\"></canvas>\n\n        <ion-row class=\"ion-margin-vertical\">\n          <ion-col class=\"status-mark ion-align-self-center\">\n            <span>For best benifits remain in Green Zone</span>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <p class=\"records-title\" *ngIf=\"custDailyDiets && custDailyDiets.length\">\n      My Daily Records\n    </p>\n\n    <!-- Just ONE list, no need to repeat -->\n    <ion-list class=\"ion-margin-top\" *ngIf=\"maxCalories\" lines=\"none\">\n      <ion-item class=\"ion-no-padding diet-item ion-margin-horizontal\" *ngFor=\"let item of custDailyDiets\">\n        <ion-avatar slot=\"start\" class=\"indicator-icon-container\">\n          <ion-icon class=\"calory-status-icon\"\n            [src]=\"(item.data.scoreRemark == 'Excellent choices') ? 'assets/icons/calory-excellent.svg' : \n                    (item.data.scoreRemark == 'Good choices') ? 'assets/icons/calory-light-green.svg' : \n                    (item.data.scoreRemark == 'Average Choices') ? 'assets/icons/calory-yellow.svg' : \n                    (item.data.scoreRemark == 'Poor choices') ? 'assets/icons/calory-average.svg' :\n                    'assets/icons/calory-bad.svg'\"></ion-icon>\n        </ion-avatar>\n\n        <ion-label>\n          <p class=\"date-label\">{{item.displayDate}}</p>\n          <p class=\"choice-type\">{{item.data.scoreRemark}}</p>\n        </ion-label>\n\n        <ion-label slot=\"end\">\n          <p class=\"calory-consumed ion-text-end\"\n            [ngClass]=\"(item.data.totalEatenCalories > maxCalories || item.data.scoreColor == 'red') ? 'red-text' : \n                       (item.data.scoreColor == 'dark green') ? 'green-text' : \n                       (item.data.scoreColor == 'light green') ? 'light-green-text' : \n                       (item.data.scoreColor == 'yellow') ? 'yellow-text' : \n                       (item.data.scoreColor == 'orange') ? 'orange-text' : ''\">\n            {{Math.round(item.data.totalEatenCalories)}} Kcal\n          </p>\n          <div class=\"consumed-calory-container\">\n            <span class=\"calory-status\">{{Math.ceil(item.restCalories)}} kcal\n              {{(item.data.totalEatenCalories > maxCalories) ? \"over\" : \"less\"}}\n            </span>\n            <ion-icon\n              [src]=\"(item.data.totalEatenCalories > maxCalories) ? 'assets/icons/thumb-bad.svg' : 'assets/icons/thumb-excellent-average.svg'\">\n            </ion-icon>\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calory-chart_calory-chart_module_ts.js.map