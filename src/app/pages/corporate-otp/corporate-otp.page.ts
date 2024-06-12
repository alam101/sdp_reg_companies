import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { constantsJson} from '../../core/constants/constants';

@Component({
  selector: 'app-corporate-otp',
  templateUrl: './corporate-otp.page.html',
  styleUrls: ['./corporate-otp.page.scss'],
})
export class CorporateOtpPage implements OnInit {
  email: String = "fakhre.alam101@gmail.com";
  timeLeft = 30;
  countDown: any = "00";
  timerId;
  isActive = true;
  firebaseOTP = false;
  phoneDetails;
  credentialIos;
  credentialAndroid;
  windowRef;
  confirmationResultAndroid;
  phoneNumberString;
  otp1;
  otp2;
  width = window.screen.width - 82;
  config: any = {};
  habitList: any;
  defaultData: any;
  customerID: any;

  constructor(
    private router: Router,
    private appService: AppService,
    private route: ActivatedRoute,
    private utiltites: UTILITIES,
    private storage: Storage,
    private navCtrl: NavController,
  ) {
    let self = this;
    self.route.queryParams.subscribe((res) => {
      self.email = res.email;
      self.phoneDetails = JSON.parse(res.phoneDetails);
      self.customerID = res.customerID
      self.utiltites.hideLoader();
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

  async verifyOTP() {
    this.utiltites.showLoading();
    let inputOtp = this.otp2;

    this.appService
      .verifyOTP({ customerId: this.email, otp: inputOtp })
      .then((succ) => {
        this.clearOTP();
        this.utiltites.logEvent("signin_with_coporate_complete", {});
        if (JSON.parse(JSON.stringify(succ)).code === "0000") {
          let userData = {
            authToken: null,
            email: this.email,
            firstName: "",
            id: null,
            idToken: null,
            lastName: "",
            name: "",
            photoUrl: null,
            provider: "mobile",
          };

          this.storage.set("newProfilePic", JSON.stringify(userData));
          console.log("logggg:", userData);
          this.utiltites.logEvent("Register_01Authenticate", {});
          this.loadDataAfterPhoneNumberLogin(userData);
        } else {
          this.utiltites.hideLoader();
          this.utiltites.showErrorToast(
            JSON.parse(JSON.stringify(succ)).message
          );
        }
      })
      .catch((err) => {
        this.utiltites.hideLoader();
        console.log("error: ", err);
        this.clearOTP();
      });
  }

  loadDataAfterPhoneNumberLogin(user) {
    this.utiltites.logEvent("sigin_with_phone_number", {});
    this.storage.get("profile").then((val) => {
      this.storage.set("Token", "");
      this.storage.set("profileData", "");
      this.storage.set("profile", "");
      console.log("user", user);
      // this.appService.getCorporateToken(user, this.config).then(
      let clientData = constantsJson.VerifyClient.filter((ele) => { return (ele.clientId == `${localStorage.getItem("clientId")}`)});
      console.log('clientData: ', clientData);

      let obj = {
        profile: {
          "email": user.email
        }
      }
      this.appService.authenticateExternal(clientData[0], obj).then(
        (resToken) => {
          console.log("resToken", resToken);
          let actualToken = JSON.parse(
            this.utiltites.parseString(resToken)
          ).access_token;
          this.storage.set("Token", actualToken);
          localStorage.setItem("tkn", actualToken);
          // this.appService.getHabitsForUpdate().then(
          //   (res) => {
          //     this.habitList = JSON.parse(JSON.stringify(res));

              this.appService.getDefaultData(actualToken).then(
                (res) => {
                  console.log("default Data", res);

                  this.defaultData = JSON.parse(JSON.stringify(res));
                  this.storage.set("graph", "");

                  this.storage.set("defaultData", this.defaultData);

                  this.storage.set("profile", this.utiltites.parseString(user));
                  this.appService.getProfileData(actualToken).then(
                    (profileData) => {
                      console.log("profileData,", profileData);
                      // this.bindProfileDatainDefaultData(profileData);
                      if (profileData && profileData["profile"]) {
                        if (
                          !profileData["profile"]["firstName"] ||
                          profileData["profile"]["firstName"] == ""
                        ) {
                          profileData["profile"]["firstName"] =
                            profileData["profile"]["given_name"];
                        }
                        if (
                          !profileData["profile"]["lastName"] ||
                          profileData["profile"]["lastName"] == ""
                        ) {
                          profileData["profile"]["lastName"] =
                            profileData["profile"]["family_name"];
                        }
                      }

                      this.storage.set(
                        "newProfilePic",
                        JSON.stringify(profileData["profile"])
                      );
                      const data = Object.assign({}, this.defaultData);
                      const prof = Object.assign({}, profileData);
                      const profile = JSON.parse(JSON.stringify(profileData));
                      console.log("profile:-", prof);
                      this.storage.set(
                        "profileData",
                        this.utiltites.parseString(prof)
                      );
                      localStorage.setItem(
                        "isPlanSubscribe",
                        profile.isPlanSubsCribe
                      );
                      localStorage.setItem("isCorporateUser", "true");
                      this.utiltites.hideLoader();
                      if (
                        profile.demographic == undefined ||
                        profile.lifeStyle == undefined ||
                        profile.diet == undefined
                      ) {
                        this.storage.get("pendingPage").then((res) => {
                          console.log("pending page res", res);
                          if (res) {
                            this.navCtrl.navigateRoot([res]);
                          } else {
                            this.router.navigate(["boarding1"], {
                              queryParams: {
                                token: `${localStorage.getItem("tkn")}`, clientId: `${localStorage.getItem("clientId")}`, type: 1
                              },
                            });
                            // const navigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     token: `${localStorage.getItem("accesstoken")}`, clientId: 'birla', type: 1 
                            //   }
                            // };
                            // this.navCtrl.navigateRoot(["/boarding1"], navigationExtras );
                          }
                        });
                      } else {
                        this.utiltites.hideLoader();
                        this.navCtrl.navigateRoot(["new-diet"]);
                        if (localStorage.getItem("accesstoken") != "") {
                          // const navigationExtras: NavigationExtras = {
                          //   queryParams: {
                          //     token: `${localStorage.getItem("accesstoken")}`, clientId: 'birapla', type: 1 
                          //   }
                          // };
                          // this.router.navigate(["/read"], navigationExtras);

                          this.router.navigate(["read"], {
                            queryParams: {
                              token: `${localStorage.getItem("tkn")}`, clientId: `${localStorage.getItem("clientId")}`, type: 1
                            },
                          });
                        }

                       
                      }
                      // }
                    },
                    (profileError) => {
                      this.utiltites.hideLoader();
                      this.utiltites.presentAlert(profileError);
                      console.log("profileError,", profileError.status);
                    }
                  );
                },
                (err) => {
                  this.utiltites.hideLoader();
                  this.utiltites.presentAlert(err);
                  console.log("errrrrr:-", err);
                }
              );
            // },
            // (err) => {
            //   this.utiltites.hideLoader();
            //   this.utiltites.presentAlert(err);
            // }
          // );
        },
        (error) => {
          this.utiltites.hideLoader();
          console.log(error);
        }
      );
      // }
    });
  }

  // bindProfileDatainDefaultData(resData) {
  //   console.log("UNIQE CONSOLE");
  //   const gender = resData?.demographic?.gender;
  //   const height = resData?.demographic?.height;
  //   const suggestedweight = resData?.demographic?.suggestedWeight;
  //   const weight = resData?.demographic?.weight;
  //   const age = resData?.demographic?.age;
  //   const activities = resData?.lifeStyle?.activities;
  //   const diseases = resData?.lifeStyle?.diseases;
  //   const communities = resData?.lifeStyle?.communities;
  //   const foodPref = resData?.lifeStyle?.foodType;
  //   this.storage.get("defaultData").then((res) => {
  //     if (gender) {
  //       res.otherMaster.gender.filter((item) => {
  //         return item.code === gender["code"];
  //       })[0].isSelected = true;
  //     }

  //     if (age) {
  //       age.year = (new Date().getFullYear() - age.avg_age).toString();
  //       res.age = age;
  //     }
  //     if (height) {
  //       res.otherMaster.height.push(height);
  //       console.log("res.otherMaster.gender", res.otherMaster.gender);
  //     }
  //     if (suggestedweight) {
  //       res.otherMaster.diet = { suggestedWeight: suggestedweight, param: "" };
  //     }
  //     if (weight) {
  //       res.otherMaster.weight.push(weight);
  //     }
  //     if (activities) {
  //       res.otherMaster.activities.filter((item) => {
  //         return item.code === activities["code"];
  //       })[0].isSelected = true;
  //     }
  //     if (diseases) {
  //       for (let index = 0; index < diseases.length; index++) {
  //         res.otherMaster.diseases.filter((item) => {
  //           if (item.code === diseases[index]) {
  //             item.isSelected = true;
  //           }
  //         });
  //       }
  //     }
  //     if (communities) {
  //       for (let index = 0; index < communities.length; index++) {
  //         res.otherMaster.community.filter((item) => {
  //           if (item.code === communities[index]) {
  //             item.isSelected = true;
  //           }
  //         });
  //       }
  //     }
  //     if (foodPref) {
  //       res.otherMaster.foodPref.filter((item) => {
  //         if (item.code === foodPref) {
  //           item.isSelected = true;
  //         }
  //       });
  //     }
  //     this.storage.set("localData", JSON.stringify(res));
  //     if (resData.code == "0001") {
  //       // this.router.navigate(["boarding1"]);
  //       alert('Success 1');
  //       return;
  //     } else {
  //       localStorage.setItem("userid", resData?.profile?.email);
  //     }
  //   });
  // }

  resendOtp() {
    this.clearOTP();
    this.utiltites.showLoading();
    this.appService
      .sendOTP({ customerId: this.email })
      .then((succ) => {
        this.timeLeft = 30;
        this.setTimer();
        this.utiltites.hideLoader();
      })
      .catch((err) => {
        this.utiltites.hideLoader();
        console.log("rrr", err);
      });
  }
}
