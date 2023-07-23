import { Injectable } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import { AlertController, LoadingController } from '@ionic/angular';
import moment from "moment";
import { CONSTANTS } from '../constants/constants';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class UTILITIES {
  private loaderObj: any;
  isLoading = true;
  private months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private storage: Storage,
    public loadingController: LoadingController,
    private platform: Platform,
    private toastr: ToastrService
  ) {}

  changeTime(time) {
    const times = time.split(':');
    return parseInt(times[0]) + 12 + ':' + times[1];
  }
  objectLength(obj) {
    let size = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] != null) {
        size++;
      }
    }
    return size;
  }

  GetFormattedDate(date) {
    const newDate = new Date(date);
    const formattedDate =
      new Date().getDate() +
      '-' +
      this.months[newDate.getMonth()] +
      '-' +
      newDate.getFullYear();
    return formattedDate;
  }

  GetFormattedDateFromMonthName(date) {
    const arr = date.split('-');
    let i = 1;
    for (i; i <= this.months.length; i++) {
      if (this.months[i] != undefined) {
        if (this.months[i].toUpperCase() == arr[1].toUpperCase()) {
          break;
        }
      }
    }
    const formatddate = i + 1 + '/' + arr[0] + '/' + arr[2];
    return new Date(formatddate);
  }

  loadObj: any;
  presentLoading() {
    return this.loadingController
      .create({
        cssClass: 'my-custom-class',
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
        cssClass: 'my-custom-class',
        showBackdrop: false,
        spinner: null,
        message: `<ion-spinner name="bubbles"></ion-spinner>`,
      })
      .then((a) => {
        this.isLoading = true;
        a.present();
      });
  }

  hideLoader() {
    if (this.isLoading == true) {
      this.isLoading = false;
      this.loadingController.dismiss().then(() => console.log('dismissed'));
    }
  }

  showLoadingForASecond() {
    console.log('SHOW LOADDING FOR A SECOND');
    return this.loadingController
      .create({
        cssClass: 'my-custom-class',
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
    console.log('SHOW LOADDING FOR A SECOND');
    return this.loadingController
      .create({
        cssClass: 'my-custom-class',
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
        cssClass: 'my-custom-class',
        showBackdrop: false,
        spinner: null,
        message: `<ion-spinner name="bubbles"></ion-spinner>`,
      })
      .then((a) => {
        this.isLoading = true;
        a.present();
      });
  }

  hideLdr() {
    if (this.isLoading == true) {
      this.isLoading = false;
      this.loadingController.dismiss().then(() => console.log('dismissed'));
    }
  }
  async presentAlert(mesage) {
    const alert = await this.alertController.create({
      cssClass: 'Alert-class',
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: mesage,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertNoInternet(mesage, cb) {
    const alert = await this.alertController.create({
      cssClass: 'Alert-class',
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: mesage,
      buttons: [
        {
          text: 'Ok',
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
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete'],
    });

    await alert.present();
  }

  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Continue',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }

  parseJSON(stringData) {
    const type = typeof stringData;
    if(type=="string"){
    return JSON.parse(stringData);
    }
    else{
      return stringData;
    }
  }
  parseString(stringData) {
    return JSON.stringify(stringData);
  }

  async presentToast(message, duration?, cssClass?) {
    const toast = await this.toastController.create({
      message,
      duration: duration ? duration : 3000,
      position: 'top',
      cssClass: cssClass ? cssClass : 'iontoast-danger',
    });
    toast.present();
  }

  showErrorToast(message) {
    this.toastr.error(message, 'Error', {
      closeButton: true,
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }




  setFalseSingleData(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].isSelected = false;
    }
    return data;
  }

  getSelectedData(data) {
    return data.filter((ele) => ele.isSelected);
  }

  filterValueFromSingleData(data) {
    const dataConst = data.filter((item) => item.isSelected == true);

    if (dataConst.length > 0) {
      return dataConst[0].value;
    } else {
      return 'Office';
    }
  }
  filterValueForOption(data) {
    const option = data.filter((item) => item.isSelected == true);
    if (option.length <= 0) {
      return '';
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
      return this.months[newDate.getMonth() + 1] + '~' + newDate.getFullYear();
    }
  }

  setFalseDoubleData(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].isSelected = false;
    }
    return data;
  }

  getTrueanySelected(data) {
    if (
      data.filter((item) => item.isSelected == true).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  getTrueOfAnyTwo(data) {
    if (
      data.filter((item) => item.isSelected == true).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  getTrueOfAnyTwoMultiSelection(data) {
    if (
      data.filter((item) => item.isSelected == true).length > 0
    ) {
      return data.filter((item) => item.isSelected == true).length;
    } else {
      return 0;
    }
  }

  filterValue(data, type) {
    const filteredData = [];
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
    const filteredData = [];
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
      data.filter((item) => item.isSelected == true).length > 0
    ) {
      return data.filter((item) => item.isSelected == true).length;
    } else {
      return 0;
    }
  }

  convertTimeFormat(data) {
    const time = data.split(':');
    const hour = time[0].split('T');
    if (parseInt(hour[1]) > 12) {
      return parseInt(hour[1]) - 12 + ':' + time[1] + ' PM';
    } else if (parseInt(hour[1]) == 12) {
      return parseInt(hour[1]) + ':' + time[1] + ' PM';
    } else if (parseInt(hour[1]) == 0) {
      return '12:' + time[1] + ' AM';
    } else {
      return parseInt(hour[1]) + ':' + time[1] + ' AM';
    }
  }

  getArrayifSelelctedSingle(data) {
    return data.filter((item) => item.isSelected == true);
  }

  getArrayIfSelectedFirstInDouble(data) {
    return data.filter((item) => item.isSelected == true);
  }
  getArrayIfSelectedSecondInDouble(data) {
    return data.filter((item) => item.isSelected == true);
  }

  getDemographicRequest(data) {
    const gender = this.getArrayifSelelctedSingle(data.gender);
    const ageData = this.getArrayifSelelctedSingle(data.ageMaster.data);
    const reqBody = {
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
    console.log('demographicdata', reqBody);

    return reqBody;
  }

  generateMultiSelectionDouble(data) {
    const arrData = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].isSelected == true) {
        arrData.push(data[index].code);
      }
    }
    return arrData;
  }
  generateMultiSelectionDoubleForTime(data) {
    console.log('request', data);

    const arrData = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].isSelected == true) {
        if (data[index].value == 'Other') {
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
    console.log('arrData', arrData);

    return arrData;
  }

  getArrayifSelelctedSingleForTime(data) {
    return data.filter((item) => item.isSelected == true);
  }

  getTypeAndPrefWorkOut(data) {
    const types = this.getArrayifSelelctedSingle(data.type);
    console.log('types', types);
    const reqBody = {
      dietPlanType: types && types.length ? types[0].name : '',
    };

    return reqBody;
  }

  getLifeStyleRequest(data) {
    //  const single = this.getArrayifSelelctedSingle(data.single);
    // const marital = this.getArrayifSelelctedSingle(data.marital);
    // const stress = this.getArrayifSelelctedSingle(data.stress);
    const activity = this.getArrayifSelelctedSingle(data.activities);
    // const sleepType = this.getArrayifSelelctedSingle(data.sleepType);
    const community = this.getArrayifSelelctedSingle(data.community);

    const foodPref = this.getArrayifSelelctedSingle(data.foodPref);
    const workOutTime = this.getArrayifSelelctedSingle(data.workoutTime);
    // const alchohal = this.getArrayifSelelctedSingle(data.alcohol);
    // const waterDrink = this.getArrayifSelelctedSingle(data.waterDrink);

    // const ender = this.getArrayifSelelctedSingle(data.single);

    const leaveForOffice = this.getArrayifSelelctedSingleForTime(
      data.leaveForOffice
    );
    // const comeBack = this.getArrayifSelelctedSingleForTime(data.comeBack);

    const healthsData = this.generateMultiSelectionDouble(data.diseases);
    const communityArray = this.generateMultiSelectionDouble(data.community);
    communityArray.push('U');
    const wakeup = this.generateMultiSelectionDoubleForTime(data.wakeup.data);
    // const sleep = this.generateMultiSelectionDoubleForTime(data.sleep.data);

    const reqBody = {
      //   ender: single[0].code,
      diseases: healthsData,
      //    marital: marital[0].code,
      //    stress: stress[0].code,
      activities: {
        code: activity[0].code,
        data: activity[0].data,
      },
      wakeup: {
        code: wakeup[0]?.code,
        value: wakeup[0]?.value,
      },
      // sleep: {
      //   code: sleep[0].code,
      //   value: sleep[0].value
      // },
      //   sleepType: sleepType[0].code,
      leaveForOffice: {
        code: leaveForOffice[0].code,
        value: leaveForOffice[0].value,
        otherValue:
          leaveForOffice[0].otherValue == undefined
            ? ''
            : leaveForOffice[0].otherValue,
      },
      // comeBack: {
      //   code:comeBack[0].code,
      //   value:comeBack[0].value,
      //   otherValue: comeBack[0].otherValue == undefined ? "" : comeBack[0].otherValue
      // },
      prefWorkOutTime:
        workOutTime && workOutTime.length ? workOutTime[0].name : '',
      communities: communityArray,
      foodType: foodPref[0].code,
      country: data.country,
      //    alchohal: alchohal[0].code,
      //    waterDrink: waterDrink[0].code
      Type: '',
      dietPlanName: '',
    };

    console.log('lifeStyleRequest', reqBody);

    return reqBody;
  }

  getMultipleSingle(data) {
    const arr = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].isSelected == true) {
        arr.push(data[index].code);
      }
    }
    return arr;
  }

  getDietRequest(data, countryId) {
    let food;
      let drinks;
      let snacks;
      let fruits;
      let dishes;
      let pules;
      let rice;
      let reqBody;
      let beverages;
      let meals;
    if (countryId && countryId == 'IND') {
      food = this.getMultipleSingle(data.otherMaster.food.data);
      drinks = this.generateMultiSelectionDouble(data.Master.drinks);
      snacks = this.generateMultiSelectionDouble(data.Master.snacks);
      fruits = this.generateMultiSelectionDouble(data.Master.fruits);
      dishes = this.generateMultiSelectionDouble(data.Master.dishes);
      pules = this.generateMultiSelectionDouble(data.Master.plscurries);
      rice = this.generateMultiSelectionDouble(data.Master.rice);
      reqBody = {
        food,
        drinks,
        snacks,
        fruits,
        dishes,
        pules,
        rice,
      };
    } else {
      food = this.getMultipleSingle(data.otherMaster.food.data);
      beverages = this.generateMultiSelectionDouble(data.Master.beverages);
      snacks = this.generateMultiSelectionDouble(data.Master.snacks);
      meals = this.generateMultiSelectionDouble(data.Master.meals);
      reqBody = {
        food,
        beverages,
        snacks,
        meals,
      };
    }
    console.log('DietRequest', reqBody);

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
    const todays = date;
    const dd = todays.getDate();
    const mm = todays.getMonth() + 1;
    const yyyy = todays.getFullYear();
    let days: any = '';
    let months: any = '';
    let fullDate: any = '';
    if (dd < 10) {
      days = '0' + dd.toString();
    }
    if (mm < 10) {
      months = '0' + mm.toString();
    }
    fullDate = dd + '' + mm + '' + yyyy;
    return fullDate;
  }
  updateSuggestdCalories(filterData, isMulti) {
    const calories = {
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
          if (data[index].value == 'Other') {
            data[index].otherValue = filterData.value;
          }
          break;
        }
      }
    }
    console.log('datawakeup:-', filterData);

    return data;
  }



}
