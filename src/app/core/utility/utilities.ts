
import { Injectable } from "@angular/core";
import { ToastController, Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AlertController, LoadingController } from "@ionic/angular";
import moment from "moment";
import { CONSTANTS } from "../constants/constants";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root"
})
export class UTILITIES {
  modalInst = [];
  i = 0;
  private loaderObj: any;
  isLoading = true;
  private months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private storage: Storage,
    public loadingController: LoadingController,
    private platform: Platform,
    private toastr: ToastrService,
    private firebaseX: FirebaseX,
  ) {}

  async logEvent(eventName, eventData) {
    let eveName = (await this.isDeviceiOS())
      ? "iOS_" + eventName
      : this.isDeviceAndroid()
      ? "Android_" + eventName
      : "Web_" + eventName;
   // if (this.fb) await this.fb.logEvent(eveName, eventData);
    if (this.firebaseX) await this.firebaseX.logEvent(eveName, eventData);
  }
  
  changeTime(time) {
    let times = time.split(":");
    return parseInt(times[0]) + 12 + ":" + times[1];
  }
  objectLength(obj) {
    let size = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] != null) {
        size++;
      }
    }
    return size;
  }
  camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, str);
  }


 

  showToastforMessage(message) {
    this.toastr.info(message, "Locked", {
      closeButton: true,
      timeOut: 3000,
      positionClass: "toast-top-center",
    });
  }
  storeModal(x) {
    this.modalInst[this.i] = x;
    this.i++;
  }
  closeModal() {
    for (var i = 0; i < this.modalInst.length; i++) {
      this.modalInst[i].dismiss();
    }
  }


  getUserData(type = "") {
    return new Promise((resolve, reject) => {
      this.storage.get("newProfilePic").then(
        (res) => {
          if (res) {
            if (type === "id") {
              resolve(JSON.parse(res).email);
            } else {
              resolve(JSON.parse(res));
            }
          } else {
            resolve("");
          }

          console.log("userdata=========>", JSON.parse(res));
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  GetFormattedDate(date) {
    var newDate = new Date(date);
    var formattedDate =
      new Date().getDate() +
      "-" +
      this.months[newDate.getMonth()] +
      "-" +
      newDate.getFullYear();
    return formattedDate;
  }

  GetFormattedDateFromMonthName(date) {
    let arr = date.split("-");
    let i = 1;
    for (i; i <= this.months.length; i++) {
      if (this.months[i] != undefined) {
        if (this.months[i].toUpperCase() == arr[1].toUpperCase()) {
          break;
        }
      }
    }
    var formatddate = i + 1 + "/" + arr[0] + "/" + arr[2];
    return new Date(formatddate);
  }

  loadObj: any;
  presentLoading() {
    return this.loadingController
      .create({
        cssClass: "my-custom-class",
        showBackdrop: false,
        spinner: null,
        message: `<ion-spinner name="bubbles"></ion-spinner>`,
      })
      .then((a) => {
        this.isLoading = true;
        a.present().then(() => {
          setTimeout(() => {
            a.dismiss();
          }, 5000);
        });
      });
  }
  showLoading() {
    return this.loadingController
      .create({
        cssClass: "my-custom-class",
        showBackdrop: false,
        spinner: null,
        message: `
        <ion-spinner name="bubbles" style="background: #fff;
    padding: 2rem;
    border-radius: 10px;
    color: var(--theme-color);"></ion-spinner>
        `,
      })
      .then((a) => {
        this.isLoading = true;
        a.present();
      });
  }

  hideLoader() {
    if (this.isLoading == true) {
      this.isLoading = false;
      this.loadingController.dismiss().then(() => console.log("dismissed"));
    }
  }

  showLoadingForASecond() {
    console.log("SHOW LOADDING FOR A SECOND");
    return this.loadingController
      .create({
        cssClass: "my-custom-class",
        showBackdrop: false,
        spinner: null,
        message: `<ion-spinner name="bubbles"></ion-spinner>`,
        duration: 1000,
      })
      .then((a) => {
        //this.isLoading = true;
        a.present();
      });
  }

  showLoadingForA500ms() {
    console.log("SHOW LOADDING FOR A SECOND");
    return this.loadingController
      .create({
        cssClass: "my-custom-class",
        showBackdrop: false,
        spinner: null,
        message: `<ion-spinner name="bubbles"></ion-spinner>`,
        duration: 500,
      })
      .then((a) => {
        //this.isLoading = true;
        a.present();
      });
  }

  showLdr() {
    return this.loadingController
      .create({
        cssClass: "my-custom-class",
        showBackdrop: false,
        spinner: null,
        message: `<div class="custom-loader">
                  <div class="spinner-container">
                    <div class="spinner"></div>
                    <img src="./assets/icon/Spinner-loader.svg">
                  </div>
                </div>
                `,
      })
      .then((a) => {
        this.isLoading = true;
        a.present();
      });
  }

  hideLdr() {
    if (this.isLoading == true) {
      this.isLoading = false;
      this.loadingController.dismiss().then(() => console.log("dismissed"));
    }
  }
  async presentAlert(mesage) {
    const alert = await this.alertController.create({
      cssClass: "Alert-class",
      header: "Alert",
      // subHeader: 'Subtitle',
      message: mesage,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async presentAlertNoInternet(mesage, cb) {
    const alert = await this.alertController.create({
      cssClass: "Alert-class",
      header: "Alert",
      // subHeader: 'Subtitle',
      message: mesage,
      buttons: [
        {
          text: "Ok",
          handler: (blah) => {
            cb();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["Cancel", "Open Modal", "Delete"],
    });

    await alert.present();
  }

  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message: message,
      buttons: [
        {
          text: "Close",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Continue",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }

  parseJSON(stringData) {
    return JSON.parse(stringData);
  }
  parseString(stringData) {
    return JSON.stringify(stringData);
  }

  async presentToast(message, duration?, cssClass?) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 3000,
      position: "top",
      buttons: [
        {
          text: 'X',
          role: 'cancel',
          handler: () => { }
        }
      ],
      cssClass: cssClass ? cssClass : "toast-top-center",
    });
    toast.present();
    await toast.onDidDismiss();
  }

  showSuccessToast(message) {
    this.toastr.success(message, "Success", {
      closeButton: true,
      timeOut: 3000,
      positionClass: "toast-top-center",
    });
  }

  showErrorToast(message) {
    this.toastr.error(message, "Error", {
      closeButton: true,
      timeOut: 3000,
      positionClass: "toast-top-center",
    });
  }

  showWarningToast(message) {
    this.toastr.warning(message, "Warning", {
      closeButton: true,
      timeOut: 3000,
      positionClass: "toast-top-center",
    });
  }

  setFalseSingleData(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].isSelected = false;
    }
    return data;
  }

  getSelectedData(data) {
    return data.filter((ele) => {
      return ele.isSelected;
    });
  }

  filterValueFromSingleData(data) {
    const dataConst = data.filter((item) => {
      return item.isSelected == true;
    });

    if (dataConst.length > 0) {
      return dataConst[0].value;
    } else {
      return "Office";
    }
  }
  filterValueForOption(data) {
    const option = data.filter((item) => {
      return item.isSelected == true;
    });
    if (option.length <= 0) {
      return "";
    } else {
      return option[0].code;
    }
  }

  private addDays(days) {
    const copy = new Date();
    copy.setDate(new Date().getDate() + days);
    return copy;
  }
  getMonth(days) {
    const date = new Date();
    const newDate = this.addDays(days);

    if (newDate.getFullYear() == new Date().getFullYear()) {
      return this.months[newDate.getMonth() + 1];
    } else {
      return this.months[newDate.getMonth() + 1] + "~" + newDate.getFullYear();
    }
  }

  setFalseDoubleData(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].isSelected = false;
    }
    return data;
  }

  getTrueanySelected(data) {
    if (
      data.filter((item) => {
        return item.isSelected == true;
      }).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  getTrueOfAnyTwo(data) {
    if (
      data.filter((item) => {
        return item.isSelected == true;
      }).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  getTrueOfAnyTwoMultiSelection(data) {
    if (
      data.filter((item) => {
        return item.isSelected == true;
      }).length > 0
    ) {
      return data.filter((item) => {
        return item.isSelected == true;
      }).length;
    } else {
      return 0;
    }
  }

  filterValue(data, type) {
    let filteredData = [];
    for (let index = 0; index < data.length; index++) {
      for (let j = 0; j < type.length; j++) {
        if (data[index].Type.toString().trim() == type[j]) {
          filteredData.push(data[index]);
        }
      }
    }
    return filteredData;
  }

  filterSelectedValue(data, type) {
    let filteredData = [];
    for (let index = 0; index < data.length; index++) {
      for (let j = 0; j < type.length; j++) {
        if (
          data[index].Type.toString().trim() == type[j] &&
          data[index].isSelected == true
        ) {
          filteredData.push(data[index].code);
        }
      }
    }
    return filteredData;
  }

  getTrueOfAnyOneMultiSelection(data) {
    if (
      data.filter((item) => {
        return item.isSelected == true;
      }).length > 0
    ) {
      return data.filter((item) => {
        return item.isSelected == true;
      }).length;
    } else {
      return 0;
    }
  }

  convertTimeFormat(data) {
    let time = data.split(":");
    let hour = time[0].split("T");
    if (parseInt(hour[1]) > 12) {
      return parseInt(hour[1]) - 12 + ":" + time[1] + " PM";
    } else if (parseInt(hour[1]) == 12) {
      return parseInt(hour[1]) + ":" + time[1] + " PM";
    } else if (parseInt(hour[1]) == 0) {
      return "12:" + time[1] + " AM";
    } else {
      return parseInt(hour[1]) + ":" + time[1] + " AM";
    }
  }

  getArrayifSelelctedSingle(data) {
    return data.filter((item) => {
      return item.isSelected == true;
    });
  }

  getArrayIfSelectedFirstInDouble(data) {
    return data.filter((item) => {
      return item.isSelected == true;
    });
  }
  getArrayIfSelectedSecondInDouble(data) {
    return data.filter((item) => {
      return item.isSelected == true;
    });
  }

  getDemographicRequest(data) {
    const gender = this.getArrayifSelelctedSingle(data.gender);
    const ageData = this.getArrayifSelelctedSingle(data.ageMaster.data);
    let reqBody = {
      gender: {
        code: gender[0].code,
        gender: gender[0].value,
      },
      height: {
        unit: data.height[0].param,
        value: parseFloat(data.height[0].value),
        ischecked: true,
      },
      weight: {
        unit: data.weight[0].param,
        value: parseFloat(data.weight[0].value),
        ischecked: true,
      },
      age: {
        code: ageData[0].code,
        label: ageData[0].value,
        avg_age: Math.ceil(ageData[0].avg_age),
      },
    };
    console.log("demographicdata", reqBody);

    return reqBody;
  }

  generateMultiSelectionDouble(data) {
    let arrData = [];
    for (let index = 0; index < data?.length; index++) {
      if (data[index].isSelected == true) {
        arrData.push(data[index].code);
      }
    }
    return arrData;
  }
  generateMultiSelectionDoubleForTime(data) {
    console.log("request", data);

    let arrData = [];
    for (let index = 0; index < data?.length; index++) {
      if (data[index].isSelected == true) {
        if (data[index].value == "Other") {
          arrData.push({
            code: data[index].code,
            value: data[index].otherValue,
          });
        } else {
          arrData.push({
            code: data[index].code,
          });
        }
        break;
      }
    }
    console.log("arrData", arrData);

    return arrData;
  }

  getArrayifSelelctedSingleForTime(data) {
    return data.filter((item) => {
      return item.isSelected == true;
    });
  }

  getTypeAndPrefWorkOut(data) {
    const types = this.getArrayifSelelctedSingle(data.type);
    console.log("types", types);
    let reqBody = {
      dietPlanType: types && types.length ? types[0].name : "",
      category: "",
      subCategory: "",
    };

    return reqBody;
  }

  getLifeStyleRequest(data) {
    const activity = this.getArrayifSelelctedSingle(data?.activities);
    const community = this.getArrayifSelelctedSingle(data?.community);

    const foodPref = this.getArrayifSelelctedSingle(data?.foodPref);
    const workOutTime = this.getArrayifSelelctedSingle(data?.workoutTime);
   
    const leaveForOffice = this.getArrayifSelelctedSingleForTime(
      data?.leaveForOffice
    );
   
    const healthsData = this.generateMultiSelectionDouble(data?.diseases);
    const communityArray = this.generateMultiSelectionDouble(data?.community);
    communityArray.push("U");
    const wakeup = this.generateMultiSelectionDoubleForTime(data?.wakeup?.data);
   
    let reqBody = {
      diseases: healthsData,
      activities: {
        code: activity[0]?.code,
        data: activity[0]?.data
      },
      wakeup: {
        code: wakeup[0]?.code,
        value: wakeup[0]?.value,
      },
      leaveForOffice: {
        code: leaveForOffice[0]?.code,
        value: leaveForOffice[0]?.value,
        otherValue:
          leaveForOffice[0]?.otherValue == undefined
            ? ""
            : leaveForOffice[0]?.otherValue,
      },
      prefWorkOutTime:
        workOutTime && workOutTime.length ? workOutTime[0]?.name : "",
      communities: communityArray,
      firstConsult: null,
      foodType: foodPref[0]?.code,
      country: data?.country,
      Type: "",
      dietPlanName: "",
      consultQA:[],
      instructions:{}
      
    };

    console.log("lifeStyleRequest", reqBody);

    return reqBody;
  }

  getMultipleSingle(data) {
    let arr = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].isSelected == true) {
        arr.push(data[index].code);
      }
    }
    return arr;
  }

  getDietRequest(data, countryId) {
    let food,
      drinks,
      snacks,
      fruits,
      dishes,
      pules,
      rice,
      reqBody,
      beverages,
      meals;
    if (countryId && countryId == "IND") {
      food = this.getMultipleSingle(data.otherMaster.food.data);
      drinks = this.generateMultiSelectionDouble(data.Master.drinks);
      snacks = this.generateMultiSelectionDouble(data.Master.snacks);
      fruits = this.generateMultiSelectionDouble(data.Master.fruits);
      dishes = this.generateMultiSelectionDouble(data.Master.dishes);
      pules = this.generateMultiSelectionDouble(data.Master.plscurries);
      rice = this.generateMultiSelectionDouble(data.Master.rice);
      reqBody = {
        food: food,
        drinks: drinks,
        snacks: snacks,
        fruits: fruits,
        dishes: dishes,
        pules: pules,
        rice: rice,
      };
    } else {
      food = this.getMultipleSingle(data.otherMaster.food.data);
      beverages = this.generateMultiSelectionDouble(data.Master.beverages);
      snacks = this.generateMultiSelectionDouble(data.Master.snacks);
      meals = this.generateMultiSelectionDouble(data.Master.meals);
      reqBody = {
        food: food,
        beverages: beverages,
        snacks: snacks,
        meals: meals,
      };
    }
    console.log("DietRequest", reqBody);

    return reqBody;
  }

  updateDemographicData(data, filterData, isMulti) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].code == filterData.code) {
        data[index].isSelected = true;
        break;
      }
    }
    return data;
  }

  updateLifeStyleDataForSingleValue(data, filterData, isMulti) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].code == filterData) {
        data[index].isSelected = true;
        break;
      }
    }
    return data;
  }

  updateLifeStyleData(data, filterData, isMulti) {
    for (let index = 0; index < data.length; index++) {
      if (isMulti == false) {
        if (data[index].code == filterData.code) {
          data[index].isSelected = true;
          break;
        }
      } else {
        if (data[index].code1 == filterData.code1) {
          data[index].isSelected1 = true;
          break;
        } else if (data[index].code2 == filterData.code2) {
          data[index].isSelected2 = true;
          break;
        }
      }
    }
    return data;
  }
  updateDataMultiSeletion(data, filterData, isMulti) {
    if (data != undefined && filterData != undefined) {
      for (let index = 0; index < data.length; index++) {
        for (let j = 0; j < filterData.length; j++) {
          if (data[index].code == filterData[j]) {
            data[index].isSelected = true;
          }
        }
      }
    }
    return data;
  }

  formatDate(date) {
    let todays = date;
    let dd = todays.getDate();
    let mm = todays.getMonth() + 1;
    let yyyy = todays.getFullYear();
    let days: any = "";
    let months: any = "";
    let fullDate: any = "";
    if (dd < 10) {
      days = "0" + dd.toString();
    }
    if (mm < 10) {
      months = "0" + mm.toString();
    }
    fullDate = dd + "" + mm + "" + yyyy;
    return fullDate;
  }
  updateSuggestdCalories(filterData, isMulti) {
    let calories = {
      calories: 0,
      carb: 0,
      fat: 0,
      fiber: 0,
      protien: 0,
    };
    calories.calories = filterData.calories;
    calories.carb = filterData.carb;
    calories.fat = filterData.fat;
    calories.fiber = filterData.fiber;
    calories.protien = filterData.protien;
    return calories;
  }

  updateLifeStyleDataForTime(data, filterData, isMulti) {
    for (let index = 0; index < data.length; index++) {
      if (filterData != undefined) {
        if (data[index].code == filterData.code) {
          data[index].isSelected = true;
          if (data[index].value == "Other") {
            data[index].otherValue = filterData.value;
          }
          break;
        }
      }
    }
    console.log("datawakeup:-", filterData);

    return data;
  }

  isDeviceiOS() {
    if (this.platform.is("cordova") && this.platform.is("ios")) {
      return true;
    } else {
      return false;
    }
  }

  isDeviceAndroid() {
    if (this.platform.is("cordova") && this.platform.is("android")) {
      return true;
    } else {
      return false;
    }
  }
  // updateLifeStyleDataForTimeSingle(data, filterData, isMulti) {
  //   for (let index = 0; index < data.length; index++) {
  //     if (data[index].code == filterData.code) {
  //       data[index].isSelected = true;
  //       if (data[index].value == "Other") {
  //         data[index].otherValue = filterData.value;
  //       }
  //       break;
  //     }
  //   }
  //   console.log("datawakeup:-", filterData);

  //   return data;
  // }

  // updateLocalDataDiet(localData, updatedData) {}

  getCaloriesBurned(profile, diets, steps, numDays, startHour, endHour) {
    if (numDays == 0 && startHour == 0 && endHour == 0) {
      return 0;
    }

    let height = profile.demographic.height.value;
    if (profile.demographic.height.unit == "in") {
      height = profile.demographic.height.value * 2.54;
    }
    let weight = profile.demographic.weight.value;
    if (profile.demographic.weight.unit != "kg") {
      weight = profile.demographic.height.value * 0.45;
    }
    let gender = profile.demographic.gender.gender;
    let age = profile.demographic.age.avg_age;
    let caloriesAtRest =
      gender == "Male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age + 161;
    let dayTime = (caloriesAtRest * 1.025) / (24 * 3600); //per second
    let nightTime = (caloriesAtRest * 0.95) / (24 * 3600); // per second
    let caloriesForEachStep = 0.04;
    let sleepTime = 24;
    let wakeUp = "7:00";
    if (diets && diets.length > 0) {
      wakeUp = diets.find((o) => o.slot == 0).time;
    }
    let wakeupTime = moment(wakeUp, "HH:mm");
    let wakeupTime1 =
      moment(wakeupTime).hour() + moment(wakeupTime).minute() / 60;
    let dayHours = sleepTime - wakeupTime1;
    let nightHours = 24 - dayHours;
    let totalBurned = 0;
    if (numDays) {
      totalBurned =
        totalBurned +
        steps * caloriesForEachStep +
        (numDays * (dayHours * dayTime * 60 * 60) +
          nightHours * (nightTime * 60 * 60));
    }
    if (endHour) {
      if (startHour < wakeupTime1 && endHour < nightHours) {
        let hours = endHour - startHour; // night hours
        totalBurned = totalBurned + hours * (nightTime * 60 * 60);
      } else if (
        startHour > wakeupTime1 &&
        endHour > wakeupTime1 &&
        endHour < sleepTime
      ) {
        let hours = endHour - startHour; // day hours
        totalBurned = totalBurned + hours * (dayTime * 60 * 60);
      } else if (
        startHour < wakeupTime1 &&
        endHour > wakeupTime1 &&
        endHour < sleepTime
      ) {
        let night = wakeupTime1 - startHour; // night hours
        let day = endHour - wakeupTime1; // day hours
        totalBurned =
          totalBurned +
          night * (nightTime * 60 * 60) +
          day * (dayTime * 60 * 60);
      } else {
        let hours = endHour - startHour; // day hours
        totalBurned = totalBurned + hours * (dayTime * 60 * 60);
      }
      totalBurned = totalBurned + steps * caloriesForEachStep;
    }
    return totalBurned;
  }

  isPlanExpired() {
    let profile: any = CONSTANTS.profile;
    if (!CONSTANTS.isPlanActiveParent) {
      if (profile.planType == "trialEnd" || profile.planType == "premiumEnd") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
}
