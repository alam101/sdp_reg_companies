import { Component, Input, OnInit } from "@angular/core";
import { Health } from "@ionic-native/health/ngx";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import moment from "moment";
import { AppService } from "src/app/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";
declare var fitnessPlugin: any;

@Component({
  selector: "app-calories-burned",
  templateUrl: "./calories-burned.page.html",
  styleUrls: ["./calories-burned.page.scss"],
})
export class CaloriesBurnedPage implements OnInit {
  @Input() currentDateIndex = 0;
  @Input() isNotCordova = false;
  @Input() showBtnsBlk: boolean = false;
  @Input() googleFitConfigure = true;
  @Input() appleHealthKitPermission: boolean = false;
  @Input() diets = [];
  @Input() apiCaloriesFit: any = {};
  @Input() isGoogleFitCaloryZero = false;
  @Input() habitAvg: any = 0;
  @Input() habitList = [];
  trackerInterval: any;
  // googleFitConfigureCalories = false;
  isIosDevice = this.utilities.isDeviceiOS();
  isAndroidDevice = this.utilities.isDeviceAndroid();

  isFitAPI = true;
  fromDate = new Date();
  toDate = new Date();
  total_steps = 0;
  isActivityStarted = false;
  tipMsgInterval;
  total_cal: number = 0;
  suggestedCalories: any = {
    totalCalories: 0,
    recomended: 0,
    totalCarbs: 0,
    totalCarbsPer: 0,
    totalFat: 0,
    totalFatPer: 0,
    totalFiber: 0,
    totalFiberPer: 0,
    totalProtien: 0,
    totalProtienPer: 0,
    minus10: 0,
    plus10: 0,
    minus1010: 0,
  };
  isRecordingSubscribed = false;
  totalCalForActivity: any = 0;
  activityCalPer: any = 0;
  activityStepsPer: any = 0;
  target_cal: number;
  cal_per: any;
  deficitTodayPer = 0;
  deficitToday = 0;
  consmedAtCurrentTime = 0;
  width: any;
  constructor(
    private health: Health,
    private utilities: UTILITIES,
    private storage: Storage,
    private appService: AppService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.getCaloryData();
    this.width = window.screen.width - 40;
    console.log(this.width);
  }

  startActivityTracking() {
    // this.testGoogleFit();
    this.trackerInterval = setInterval(() => {
      this.testGoogleFit();
    }, 10000);
  }

  getCaloryData() {
    this.appService.calories().subscribe((res) => {
      this.storage.set("caloriesFit", res);
      this.apiCaloriesFit = JSON.parse(JSON.stringify(res));
      console.log(this.apiCaloriesFit);
      this.testGoogleFit();
    });
  }

  testGoogleFit() {
    console.log("---------------Test Google Fit-------------");
    if (!this.isNotCordova) {
      this.health
        .isAvailable()
        .then((available: boolean) => {
          if (available) {
            if (this.utilities.isDeviceiOS()) {
              this.health
                .requestAuthorization([
                  {
                    read: ["steps"],
                  },
                ])
                .then((res) => {
                  this.health
                    .isAuthorized([
                      {
                        read: ["steps"],
                      },
                    ])
                    .then((res) => {
                      this.isFitAPI = true;
                      this.fromDate = new Date();
                      this.fromDate.setHours(0, 0, 0, 0);
                      this.toDate = new Date();
                      this.toDate.setHours(
                        new Date().getHours(),
                        new Date().getMinutes(),
                        new Date().getSeconds()
                      );
                      this.health
                        .queryAggregated({
                          startDate: this.fromDate,
                          endDate: this.toDate, // now
                          dataType: "steps",
                        })
                        .then((resnew: any) => {
                          console.log(
                            "steps from apple kit",
                            JSON.stringify(resnew)
                          );
                          this.total_steps = resnew.value;
                          if (
                            resnew.value > 0 &&
                            !localStorage.getItem("setSteps")
                          ) {
                            localStorage.setItem("setSteps", "true");
                      //      this.utilities.logEvent("steps_captured", {});
                          }
                          if (resnew.value >= 0) {
                            if (!localStorage.getItem("startActivity")) {
                              localStorage.setItem("startActivity", "true");
                              // this.startActivityTracking();
                            }
                            //  health.isAuthorized always returned true,so we are checking steps value is 0 or not(0 means not authorized)
                            this.appleHealthKitPermission = true;
                            this.isActivityStarted = true;

                            // this.removeMessageItem();
                            this.computeCalories(this.total_steps);
                            /** For Avoiding loop permission added one extra query*/
                            let permission =
                              localStorage.getItem("premissionAllowed");
                            if (permission) {
                            } else {
                              this.health
                                .query({
                                  startDate: this.fromDate,
                                  endDate: this.toDate,
                                  dataType: "steps",
                                })
                                .then((resC: any) => {
                                  localStorage.setItem(
                                    "premissionAllowed",
                                    "true"
                                  );
                                });
                            }
                          } else {
                            this.appleHealthKitPermission = false;
                          }
                        })
                        .catch((e) => {
                          console.log("google fit steps error");
                          console.log(e);
                        });
                    })
                    .catch((e) => {
                      this.appleHealthKitPermission = false;
                      console.log("Apple Fit permission declined:", e);
                    });
                });
            } else {
              this.computeDataForAndroid();
            }
          } else {
            // compute data from recording api
            this.callRecordingApi();
          }
        })
        .catch((e) => console.log("Alam1:", e));
    }
  }

  computeDataForAndroid() {
    this.health
      .requestAuthorization([
        {
          read: ["steps", "calories"], //read only permission
        },
      ])
      .then((res) => {
        if (res) {
          this.isFitAPI = true;
          this.fromDate = new Date();
          this.fromDate.setHours(0, 0, 0, 0);
          this.toDate = new Date();
          this.toDate.setHours(
            new Date().getHours(),
            new Date().getMinutes(),
            new Date().getSeconds()
          );
          //steps
          this.health
            .queryAggregated({
              startDate: this.fromDate,
              endDate: this.toDate, // now
              dataType: "steps",
            })
            .then((resnew: any) => {
              this.total_steps = resnew.value;
              this.activityStepsPer =
                (this.total_steps * 100) / this.apiCaloriesFit.activityLevels;
              this.health
                .queryAggregated({
                  startDate: this.fromDate,
                  endDate: this.toDate, // now
                  dataType: "calories",
                })
                .then((resCal: any) => {
                  CONSTANTS.calBurnedToday = this.total_cal = Math.round(
                    resCal.value
                  );
                  // if (this.total_cal == 0 && this.total_steps == 0) {
                  //   this.googleFitConfigure = false;
                  //   // compute data from recording api
                  //   this.callRecordingApi();
                  // } else {
                  if (!localStorage.getItem("startActivity")) {
                    localStorage.setItem("startActivity", "true");
                    this.startActivityTracking();
                  }
                  this.googleFitConfigure = true;
                  this.isActivityStarted = true;
                  // this.removeMessageItem();
                  if (this.total_cal == 0) {
                    this.isGoogleFitCaloryZero = true;
                    this.computeCalories(this.total_steps);
                  } else {
                    this.isGoogleFitCaloryZero = false;
                    this.activityCalPer =
                      (this.totalCalForActivity * 100) /
                      this.suggestedCalories.totalCalories;
                    this.deficitToday =
                      this.total_cal - this.consmedAtCurrentTime;
                    if (this.deficitToday > 0) {
                      this.deficitTodayPer =
                        this.deficitToday > 500
                          ? 100
                          : (this.deficitToday / 500) * 100;
                    } else {
                      this.deficitTodayPer = 0;
                    }
                    this.cal_per = Math.round(
                      (this.total_cal / this.target_cal) * 100
                    );
                  }
                  /** For Avoiding multiple permission promot one extra query*/
                  let permission = localStorage.getItem("premissionAllowed");
                  if (permission) {
                  } else {
                    this.health
                      .query({
                        startDate: this.fromDate,
                        endDate: this.toDate,
                        dataType: "calories",
                      })
                      .then((resC: any) => {
                        localStorage.setItem("premissionAllowed", "true");
                      });
                  }
                  // }
                })
                .catch((e) => {
                  console.log("google fit error");
                  console.log(e);
                });
            })
            .catch((e) => {
              console.log("google fit steps error");
              console.log(e);
            });
        }
      })
      .catch((e) => console.log("Alam:", e));
  }

  callRecordingApi() {
    let me = this;
    if (me.isRecordingSubscribed) {
      me.computeDataForAndroid();
    } else {
      this.platform.ready().then(() => {
        fitnessPlugin.show(
          "SubToApi",
          function (msg) {
            me.isRecordingSubscribed = true;
            me.computeDataForAndroid();
          },
          function (err) {
            me.showBtnsBlk = true;
          }
        );
      });
    }
  }

  computeCalories(steps) {
    this.storage.get("profileData").then((val) => {
      let profile = this.utilities.parseJSON(val);
      let total = this.utilities.getCaloriesBurned(
        profile,
        this.diets,
        steps,
        0,
        0,
        moment().hour() + moment().minute() / 60
      );
      CONSTANTS.calBurnedToday = this.total_cal = Math.round(total);
      this.activityCalPer =
        (this.totalCalForActivity * 100) / this.suggestedCalories.totalCalories;
      this.cal_per = Math.round((this.total_cal / this.target_cal) * 100);
      this.total_steps = steps;
      this.activityStepsPer =
        (this.total_steps * 100) / this.apiCaloriesFit.activityLevels;
      this.deficitToday = this.total_cal - this.consmedAtCurrentTime;
      if (this.deficitToday > 0) {
        this.deficitTodayPer =
          this.deficitToday > 500 ? 100 : (this.deficitToday / 500) * 100;
      } else {
        this.deficitTodayPer = 0;
      }
    });
  }
}
