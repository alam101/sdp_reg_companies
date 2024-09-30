import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UTILITIES } from "../../core/utility/utilities";
// import { message, CONSTANTS } from "../core/constants/constants";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { AppService } from "../../home-service/app.service";
import { AlertController } from "@ionic/angular";
// import { Keyboard } from '@ionic-native/keyboard/ngx';
import { CONSTANTS } from "../../core/constants/constants";

import moment from "moment";
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  heading = "Lunch options";
  slot = 0;
  constantText:any = "See more...";
  isAlertCame: any = false;
  isLoadFirst: any = false;
  requestBody: any = [];
  isMeal: any = "";
  optionData: any = [];
  segments: any = [];
  categories: any = [];
  jsonCreation: any = [];
  isShowName = "";
  foodCode: String = "";
  portions: String = "";
  selectedData: any = [];
  isSeeMore:any = false;
  seeMore:any = new Array(10);
  dataWithRef: any = [];
  optionSelection: any = 0;
  selectedCode: any = new Array(10);
  selectPortion: any = new Array(10);
  selectedCode1: any = new Array(5);
  showHideItem: any = new Array(10);
  showHideItem1: any = false;
  isCatOrOther = 0;
  onlyportion: any = 1;
  isNoDataInSearch = false;
  totalDataSearchedData = [];
  searchVal = "";

  xflag = 0;
  isKeyboardHide=false;
  isCategorySelected: any = false;
  selectedDietPlan = "weightLoss";
  isV=false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private alertController: AlertController,
    
  ) {
    // this.requestBody = [];
    this.route.queryParams.subscribe(res => {
      this.heading = res.param;
      this.slot = res.slot;
      this.foodCode = res.foodCode ? res.foodCode : "";
      this.portions = res.portion ? res.portion : ""; 
      this.isV = res.isV
    });

    for (let index = 0; index < this.seeMore.length; index++) {
      this.seeMore[index]="See more...";
    }
  }
  
  activeInd:any=0;
  caloryChanged(ind,optionName){
    this.activeInd=ind;
    this.requestBody = [];
    if (this.xflag < 2) {
      this.xflag = this.xflag + 1;
    }
    this.isMeal = optionName;
    this.categoryLength = this.optionData.mealOptions[this.activeInd].categories.length;
  }


  isFiterOption = false;
  filterOption(){
    this.isFiterOption = !this.isFiterOption;
    if(this.isFiterOption==false){
      this.selectedItemByFiter(0);
    }
  }

  isHeartShow=true;
  flagIndexforHealth=0;
  itembyFilter=0;
  selectedItemByFiter(ind){
    this.itembyFilter = ind;
    if(ind==-1){
      for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {
        if(this.mainData[index]!=null && this.mainData[index]!=""){
         this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
        }
        else{
          this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
         }
        }
    }
     if(ind==0){
      this.getOptions();
     setTimeout(()=>{this.caloryChanged(this.activeInd,this.isMeal)},1000);
      }
       
       else  if(ind==1){
        for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {  
          if(this.mainData[index]!=null && this.mainData[index]!=""){
            this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
           }
           else{
             this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
            }
        this.optionData.mealOptions[this.activeInd].categories[index].food.sort((a,b)=>{
          return a.Calories -b.Calories;
        });
      }
         }
         if(ind==2){
          for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {  
            if(this.mainData[index]!=null && this.mainData[index]!=""){
              this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
             }
             else{
               this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
              }
            this.optionData.mealOptions[this.activeInd].categories[index].food.sort((a,b)=>{
              return b.Protien - a.Protien;
            });
          }
          
           }
           if(ind==3){
            for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {  
              if(this.mainData[index]!=null && this.mainData[index]!=""){
                this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
               }
               else{
                 this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
                }
              this.optionData.mealOptions[this.activeInd].categories[index].food.sort((a,b)=>{
                return a.Fat - b.Fat;
              });
            }
          }
    

  }

  mainData:any=new Array(10);
  searchKey = "";
  searchedWithGetData = false;
  searchByInput(evt){
    // this.keyboard.hide();
     this.utilities.logEvent("onboarding_search_other_options", {});
    // if(evt != '') this.clearFilterForUpdate = true;
    // else this.clearFilterForUpdate = false;
    let filteredData = [];
    this.searchKey = evt.toLowerCase();
    for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {
    if(this.mainData[index]!=null && this.mainData[index]!=""){
     this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
    }
    else{
      this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
     }
       let data1 = this.optionData.mealOptions[this.activeInd].categories[index].food.filter(item=>{
        return item.Food.toLowerCase().includes(evt.toLowerCase());
      });
      filteredData = [ ...filteredData, ...data1];
      this.optionData.mealOptions[this.activeInd].categories[index].food = data1;
      this.searchingData = false;
    }
    if(!filteredData.length){
      this.searchingData = true;
      this.getAllForSearch(evt.toLowerCase(), true);
      this.searchedWithGetData = false;
      this.isNoDataInSearch = true;
    }else{
      this.searchingData = false;
      this.getAllForSearch(evt.toLowerCase(), false);
      this.searchedWithGetData = true;
      this.isNoDataInSearch = false;
    }
  }

  searchingData = false;
  getAllForSearch(searchTerm, flag){
     this.utilities.logEvent("onboarding_Counter_search_all", {});
    this.appService.searchFoodItemByName(searchTerm).then((resp)=>{
      let internalData = resp["internalFoods"];
      let externalData = resp["externalFoods"];
      internalData = internalData.sort((a, b) =>{ return (a.Score < b.Score ? 1 : -1) });
      // externalData = externalData.sort((a, b) =>{ return (a.Score < b.Score ? 1 : -1) });
      internalData.map((ele)=>{
        ele.foodSource = "internal";
        return ele
      })
      externalData.map((ele)=>{
        ele.foodSource = "external";
        return ele
      })

      this.totalDataSearchedData =  [...internalData,  ...externalData];
      // if(flag) this.searchingData = this.totalDataSearchedData.length == 0 ? true : false;
    })
  }

  clearSearchAndReset(){
    this.searchVal = "";
    this.searchByInput('');
    this.searchingData = false;
    this.searchedWithGetData = false;
    this.totalDataSearchedData = [];
  }

  // filterCodeOnTop(itemCode){
  //   const foodCodeArr = this.foodCode.split(",");
  //   foodCodeArr.forEach((code,ind)=>{
  //     if(itemCode === code){
  //       return code;
  //     }
  //   })
  // }
  // clearFilterForUpdate = false;
  fillDefaultData(){
    // this.clearFilterForUpdate = false;
    for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {
      if(this.mainData[index]!=null && this.mainData[index]!=""){
       this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
      }
      else{
        this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
       }
         let data1 = this.optionData.mealOptions[this.activeInd].categories[index].food.filter(item=>{
          return item.Food.toLowerCase().includes('');
        });
         this.optionData.mealOptions[this.activeInd].categories[index].food = data1;
      }
  }
  showHide(categoryIndex) {
    this.showHideItem[categoryIndex] = !this.showHideItem[categoryIndex];
    this.isSeeMore = this.showHideItem[categoryIndex];
   if(this.isSeeMore){
    this.seeMore[categoryIndex] ="See less...";
   }
   else{
    this.fillDefaultData()
    this.seeMore[categoryIndex] ="See more...";
   }
  }
  gotoDietplan(){
    this.router.navigate(['new-diet']);
  }
  showHide1() {
    this.showHideItem1 = !this.showHideItem1;
  }
  minusWeight(code) {
    console.log("this.optionSelection", this.optionSelection);
    if (this.optionSelection > 1) {
      this.optionSelection = this.optionSelection - 0.5;
    }
    if (this.requestBody.length == 0) {
      this.requestBody.push({ code });
    }
  }
  plusWeight(code) {
    if (this.optionSelection < 20) {
      this.optionSelection = this.optionSelection + 0.5;
      console.log("this.optionSelection", this.optionSelection);
    }
    if (this.requestBody.length == 0) {
      this.requestBody.push({ code });
    }
  }
  
  plusUnverified(n){
    let isPortion = this.unvrifiedData[n].portion_unit.indexOf('portion') > -1;
    let baseUnit = {
      Calories: parseFloat((this.unvrifiedData[n].Calories/this.unvrifiedData[n].portion).toFixed(2)),
      Protien: parseFloat((this.unvrifiedData[n].Protien/this.unvrifiedData[n].portion).toFixed(2)),
      Fat: parseFloat((this.unvrifiedData[n].Fat/this.unvrifiedData[n].portion).toFixed(2)),
      Carbs: parseFloat((this.unvrifiedData[n].Carbs/this.unvrifiedData[n].portion).toFixed(2)),
      Fiber: parseFloat((this.unvrifiedData[n].Fiber/this.unvrifiedData[n].portion).toFixed(2)),
    }
    if(isPortion && this.unvrifiedData[n].portion < 20){
      this.unvrifiedData[n].portion = this.unvrifiedData[n].portion + 0.5;
    }else if(this.unvrifiedData[n].portion < 750){
      this.unvrifiedData[n].portion = this.unvrifiedData[n].portion + 25;
    }
    this.changeUnverified(this.unvrifiedData[n],n, baseUnit);
    if (this.requestBody.length == 0) {
      this.requestBody.push({ valid:true });
    }
    // if(this.unvrifiedData[n].toLowerCase() == 'external' || this.unvrifiedData[n].toLowerCase() == 'personal'){
    //   if (this.unvrifiedData[n].portion_unit == 0 && this.unvrifiedData[n]["portion"] < 20) {
    //     this.unvrifiedData[n]["portion"] = this.unvrifiedData[n]["portion"] + 0.5;
    //     this.unvrifiedData[n].Protien = parseFloat(Math.round(this.unvrifiedData[n]["Protien"] * this.unvrifiedData[n].portion * this.basePortionUnit).toFixed(2));
    //     this.unvrifiedData[n].Fat = parseFloat(Math.round(this.unvrifiedData[n]["Fat"] * this.unvrifiedData[n].portion * this.basePortionUnit).toFixed(2));
    //     this.unvrifiedData[n].Carbs = parseFloat(Math.round(this.unvrifiedData[n]["Carbs"] * this.unvrifiedData[n].portion * this.basePortionUnit).toFixed(2));
    //     this.unvrifiedData[n].Fiber = parseFloat(Math.round(this.unvrifiedData[n]["Fiber"] * this.unvrifiedData[n].portion * this.basePortionUnit).toFixed(2));
    //     this.unvrifiedData[n].Calories = parseFloat(Math.round(this.unvrifiedData[n]["Calories"] * this.unvrifiedData[n].portion * this.basePortionUnit).toFixed(2));
    //   }else if(this.unvrifiedData[n].portion_unit == 1 && this.unvrifiedData[n]["portion"] < 750) {
    //     this.unvrifiedData[n]["portion"] = this.unvrifiedData[n]["portion"] + 25;
    //     this.updateMeacros(false);
    //   }
    // }else{
    //   if (this.unvrifiedData[n].portion_unit == 0 && this.unvrifiedData[n]["portion"] < 20) {
    //     this.unvrifiedData[n]["portion"] = this.unvrifiedData[n]["portion"] + 0.5;
    //   }else if(this.unvrifiedData[n].portion_unit == 1 && this.unvrifiedData[n]["portion"] < 750) {
    //     this.unvrifiedData[n]["portion"] = this.unvrifiedData[n]["portion"] + 25;
    //   }
    //   this.updateMeacros(false);
    // }
  }

  minusUnverified(n){
    let isPortion = this.unvrifiedData[n].portion_unit.indexOf('portion') > -1;
    let baseUnit = {
      // portion: this.unvrifiedData[n].portion,
      Calories: parseFloat((this.unvrifiedData[n].Calories/this.unvrifiedData[n].portion).toFixed(2)),
      Protien: parseFloat((this.unvrifiedData[n].Protien/this.unvrifiedData[n].portion).toFixed(2)),
      Fat: parseFloat((this.unvrifiedData[n].Fat/this.unvrifiedData[n].portion).toFixed(2)),
      Carbs: parseFloat((this.unvrifiedData[n].Carbs/this.unvrifiedData[n].portion).toFixed(2)),
      Fiber: parseFloat((this.unvrifiedData[n].Fiber/this.unvrifiedData[n].portion).toFixed(2)),
    }
    if(isPortion && this.unvrifiedData[n].portion > 1){
      this.unvrifiedData[n].portion = this.unvrifiedData[n].portion - 0.5;
    }else if(this.unvrifiedData[n].portion > 50){
      this.unvrifiedData[n].portion = this.unvrifiedData[n].portion - 25;
    }
    this.changeUnverified(this.unvrifiedData[n],n, baseUnit);
    if (this.requestBody.length == 0) {
      this.requestBody.push({ valid:true });
    }
  }

  minusWeight1(i, code, catName, optionName,k) {
    this.isCategorySelected = true;

    if (this.optionData.mealOptions[0].categories[i].food[k]['portion'] > 0) {
      this.optionData.mealOptions[0].categories[i].food[k]['portion'] = this.optionData.mealOptions[0].categories[i].food[k]['portion'] - 0.5;
    }

    if (this.selectPortion[i] > 0) {
      this.selectPortion[i] = this.selectPortion[i] - 0.5;
    }

    if (this.requestBody.length == 0) {
      this.requestBody.push({
        optionName,
        code,
        category: catName,
        portion: this.selectPortion[i]
      });
    } else {
      this.isCategorySelected = true;
      for (let index = 0; index < this.requestBody.length; index++) {
        if (this.requestBody[index].code == code) {
          this.requestBody[index].portion = this.selectPortion[i];
        }
      }

      for (let index = 0; index < this.jsonCreation.length; index++) {
        if (this.jsonCreation[index].code == code) {
          this.jsonCreation[index].portion = this.selectPortion[i];
        }
      }
      console.log("Json Creation", this.jsonCreation);
    }
  }
  plusWeight1(i, code, catName, optionName, k) {
    this.optionData.mealOptions[0].categories[i].food[k]['portion'] = this.optionData.mealOptions[0].categories[i].food[k]['portion'] ? this.optionData.mealOptions[0].categories[i].food[k]['portion'] : 1;
    if (parseFloat(this.optionData.mealOptions[0].categories[i].food[k]['portion']) < 20) {
      this.optionData.mealOptions[0].categories[i].food[k]['portion'] = parseFloat(this.optionData.mealOptions[0].categories[i].food[k]['portion']) + 0.5;
    }

    if (this.requestBody.length == 0) {
      this.requestBody.push({ valid:true });
    }

  }

  changeUnverified(value, n, baseUnit){
    let limit = this.unvrifiedData[n].portion_unit.indexOf('portion') > -1 ? 20 : 750;
    let portion = this.unvrifiedData[n].portion;
    if(portion <= limit && portion > 0){
      this.unvrifiedData[n]['portion'] = parseFloat(portion.toFixed(1));
      this.unvrifiedData[n]["Calories"] = this.unvrifiedData[n].portion*baseUnit['Calories'];
      this.unvrifiedData[n]["Protien"] = this.unvrifiedData[n].portion*baseUnit['Protien'];
      this.unvrifiedData[n]["Fat"] = this.unvrifiedData[n].portion*baseUnit['Fat'];
      this.unvrifiedData[n]["Carbs"] = this.unvrifiedData[n].portion*baseUnit['Carbs'];
      this.unvrifiedData[n]["Fiber"] = this.unvrifiedData[n].portion*baseUnit['Fiber'];
      this.requestBody.push(this.unvrifiedData[n]);
      } else if(portion <= 0){
      this.unvrifiedData[n]['portion'] = 0;
    }
  }

  async unverifiedChange(value, n) {
    // let value = parseFloat(eve.detail.value);
    let limit = this.unvrifiedData[n].portion_unit.indexOf('portion') > -1 ? 20 : 750;
    if(value > limit){
      const alert = await this.alertController.create({
        cssClass: "Alert-class",
        header: "Alert",
        backdropDismiss: false,
        // subHeader: 'Subtitle',
        message: "Food portion can't be more then "+ limit,
        buttons: [{
          text: 'Ok',
          handler: (evt) => {
            this.unvrifiedData[n]['portion'] = 0;
          }
        }]
      });
  
      await alert.present();
    }else{
      this.changeUnverified(value,n, null);
      if (this.requestBody.length == 0) {
        this.requestBody.push({ valid:true });
      }
    }
    // this.optionSelection = value.length > 1 ? value.substring(0, 1) : value;
  }

  async unverifiedChange1(value, n) {
    // let value = parseFloat(eve.detail.value);
    if(value && value.currentTarget && value.currentTarget.value){
      let speValue = value.currentTarget.value.split(".");
      if(speValue.length == 2){
        if(speValue[1].length == 1){
          value.preventDefault();
        }
      }
    }
    // this.optionSelection = value.length > 1 ? value.substring(0, 1) : value;
  }
  
  async change(value, i, k) {
    // let value = parseFloat(eve.detail.value);
    if(value > 20){
      const alert = await this.alertController.create({
        cssClass: "Alert-class",
        header: "Alert",
        backdropDismiss: false,
        // subHeader: 'Subtitle',
        message: "Food portion can't be more then 20",
        buttons: [{
          text: 'Ok',
          handler: (evt) => {
            this.optionData.mealOptions[0].categories[i].food[k]['portion'] = 0;
          }
        }]
      });
  
      await alert.present();
    }else if(value <= 20 && value > 0){
      this.optionData.mealOptions[0].categories[i].food[k]['portion'] = parseFloat(value.toFixed(1));
    } else if(value <= 0){
      this.optionData.mealOptions[0].categories[i].food[k]['portion'] = 0;
    }
    if (this.requestBody.length == 0) {
      this.requestBody.push({ valid:true });
    }
    // this.optionSelection = value.length > 1 ? value.substring(0, 1) : value;
  }

  async change1(value, i, k) {
    // let value = parseFloat(eve.detail.value);
    if(value && value.currentTarget && value.currentTarget.value){
      let speValue = value.currentTarget.value.split(".");
      if(speValue.length == 2){
        if(speValue[1].length == 1){
          value.preventDefault();
        }
      }
    }
    // this.optionSelection = value.length > 1 ? value.substring(0, 1) : value;
  }

  filterMeals(data, type) {
    return data.filter(item => {
      return item.category == type;
    });
  }

  filterdata(data, code) {
    const dataq = data.filter(item => {
      return item.code == code;
    });
  }
  segmentName="";
  segmentChanged(event) {
    this.requestBody = [];
    if (this.xflag < 2) {
      this.xflag = this.xflag + 1;
    }
    console.log("event:-  ", this.xflag);
  }
  ngOnInit() {
    this.storage.get("diets").then(diets => {
      this.diets = diets;
    });
    this.searchingData = false;
    this.selectedDietPlan = CONSTANTS.selectedDietPlan;
    this.image_URL = CONSTANTS.image_URL;
    
    this.xflag = 0;
    this.selectedCode= new Array(10);
    this.selectPortion = new Array(10);
    this.selectedCode1 = new Array(5);
    this.showHideItem = new Array(10);
    for (let index = 0; index < this.showHideItem.length; index++) {
      this.showHideItem[index] = false;
    }
    this.isLoadFirst=true;
    this.loadAllData();
    this.loadDietPlanSlotData();
    this.loadUnverifiedFoodData();
    this.storage.get("localData").then(val => {
      console.log("profile pic", val);
      if (val != "") {
        let data = JSON.parse(val);
       
         let filteredDesease = data.otherMaster.diseases.filter(item=>{
          return item.isSelected==true;
         });
        for (let index = 0; index < filteredDesease.length; index++) {
            this.diseases= this.diseases + filteredDesease[index].value;
            if(index<filteredDesease.length-1){
              this.diseases=this.diseases+" or ";
            }
          }
       }
    });
   
  }
  gotoSuggestion(name){
    this.router.navigate(['suggestion'],{
      queryParams: {
        param: name
        }
    });

  }
 // showHideOption(index, name) {
    // console.log(name);
    // if (this.isShowName != name) {
    //   this.isShowName = name;
    // } else {
    //   this.isShowName = "";
    // }
 // }

 goToFoodDetails(food){

  let portion = "";
  for (let index = 0; index < this.diets[this.slot].data.length; index++) {
    if (this.diets[this.slot].data.length > 1) {
      portion = portion + this.diets[this.slot].data[index].portion + ",";
    } else {
      portion = portion + this.diets[this.slot].data[index].portion;
    }
  }
  this.router.navigate(["food-detail"], {
    queryParams: {
      param: this.heading,
      slot: this.slot,
      foodCode: JSON.stringify(this.diets[this.slot].data),
      portion,
      mainCode: food._id,
      category: food.category
    }
  })
 }

  copyOfMainData:any=[];
  categoryLength=0;
  getOptions() {
    // this.appService.getOptions(this.slot,CONSTANTS.isDetox).then(
    //   success => {
    this.storage.get("optionsData").then((res) => {
      let success = res[this.slot];
      this.optionData = JSON.parse(JSON.stringify(success));
      // for(let i = 0; i < this.optionData.mealOptions.length;i++){
      //   for(let j = 0; j < this.optionData.mealOptions[i].categories.length;j++){
      //     this.optionData.mealOptions[i].categories[j]["food"].sort((a, b) =>{ return (a.Score < b.Score ? 1 : -1) })
      //   }
      // }
      this.isNoDataInSearch = false;
      this.searchKey = "";
      this.totalDataSearchedData = [];
      this.searchVal = "";
      const foodCodeArr = this.foodCode.split(",");
      const portions = this.portions.split(",");
      for(let i = 0; i < this.optionData.mealOptions.length;i++){
        for(let j = 0; j < this.optionData.mealOptions[i].categories.length;j++){
          for(let k = 0; k < foodCodeArr.length;k++){
            this.optionData.mealOptions[i].categories[j]["food"].filter((ele)=>{
              if(ele.code == foodCodeArr[k]){
                ele.portion = portions[k];
                return ele;
              }
            })
          }
        }
      }
      
      this.copyOfMainData = this.optionData;
      console.log("optionData:-", this.optionData);
      this.categoryLength = this.optionData.mealOptions[this.activeInd].categories.length;
      this.segments = [];
      console.log("this.optionData.mealOptions.length",this.optionData.mealOptions.length);
      if(this.optionData.mealOptions.length==1){
        this.xflag=0;
      }
      for (
        let index = 0;
        index < this.optionData.mealOptions.length;
        index++
      ) {
        if (this.optionData.mealOptions[index].isCategory) {
          console.log(" this.isShowName", this.isShowName);
          this.getSelectedOption(index,
            this.optionData.mealOptions[index].optionName,
            this.optionData.mealOptions[index].categories
          );

        } 
   
      }
  
        this.isMeal = this.segmentName = this.optionData.mealOptions[this.activeInd]["optionName"];
        this.utilities.hideLoader();
        
      },
      err => {
        this.utilities.hideLoader();
      }
    );
  }


  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.order;
    const bandB = b.order;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  getSelectedOption(optionIndex,optionName, categories) {
    //   this.dataWithRef = data;
     this.utilities.logEvent("onboarding_sort_other_options", {});       
    let roast = 0;
    const foodCodeArr = this.foodCode.split(",");
    const portions = this.portions.split(",");
   
    
    for (let k = 0; k < categories.length; k++) {
      for (let j = 0; j < foodCodeArr.length; j++) {
        for (let index = 0; index < categories[k].food.length; index++) {
          if (
            categories[k].name != null &&
            categories[k].food[index].code === foodCodeArr[j]
          ) {
            console.log("ddddd: ",k);
            if (this.jsonCreation.length == 0) {
              if (foodCodeArr.length == 1) {
                for (let s = 0; s < foodCodeArr.length; s++) {
                  this.jsonCreation.push({
                    catName: "",
                    code: foodCodeArr[s],
                    optionName: optionName,
                    portion: parseFloat(portions[s])
                  });
                }
              } else {
                for (let s = 0; s < foodCodeArr.length - 1; s++) {
                  this.jsonCreation.push({
                    catName: "",
                    code: foodCodeArr[s],
                    optionName: optionName,
                    portion: parseFloat(portions[s])
                  });
                }
              }
            }

            if (roast == 0) {
              roast = 1;
              this.isShowName = categories[k].name;
            }

            this.jsonCreation[j].catName = categories[k].name;

            this.selectedCode[k] = categories[k].food[index].code;
            this.selectPortion[k] = parseFloat(portions[j]);
            // new changes alam
            categories[k].food[index].order = 1;
            categories[k].food[index].selected = "checked";
            this.isCatOrOther = 1;
            if(optionIndex!=0 && this.isLoadFirst==true){
              this.isLoadFirst=false;
             this.xflag=0;
            }
            this.isMeal = optionName; 
            this.caloryChanged(optionIndex,optionName);
            this.segmentName = optionName;
            console.log("xxxxx: ",optionName);
          }
        }
      }

      for (let index = 0; index < categories[k].food.length; index++) {
        if (categories[k].food[index].order == undefined) {
          categories[k].food[index].order = 2;
          //  data[index].selected = "false";
        }
      }
      categories[k].food.sort(this.compare);
    }
    console.log("this.selectPortion", this.selectPortion);
    //   return data;
  }

  getSelectedOption1(option) {
    //   this.dataWithRef = data;
    const foodCodeArr = this.foodCode.split(",");
    const portions = this.portions.split(",");
    for (let k = 0; k < option.length; k++) {
      if (option[k].food != undefined) {
        for (let j = 0; j < foodCodeArr.length; j++) {
          for (let index = 0; index < option[k].food.length; index++) {
            if (option[k].food[index].code === foodCodeArr[j]) {
              // ----new change alam
              this.selectedCode1[k] = option[k].food[index].code;
              this.optionSelection = Number(portions[j]); // option[k].food[index].portion;
              // --- new change alam

              option[k].food[index].order = 1;
              option[k].food[index].selected = "checked";
              console.log(option[k].optionName);
              this.isMeal = option[k].optionName;
            }
          }
        }

        for (let index = 0; index < option[k].food.length; index++) {
          if (option[k].food[index].order == undefined) {
            option[k].food[index].order = 2;
          }
        }
        option[k].food.sort(this.compare);
      }
    }

    console.log("this.selectedCode1", this.selectedCode1[0]);
    //   return data;
  }

  firstDateIsPastDayComparedToSecond(firstDate, secondDate) {
    if (firstDate.setHours(0,0,0,0) - secondDate.setHours(0,0,0,0) >= 0) { //first date is in future, or it is today
      return false
    }
    return true
  }

  getWordPressOtions(){
    this.utilities.showLoading();
    this.appService.getOptions(this.slot,CONSTANTS.isDetox, CONSTANTS.country).then(
      success => {
      this.utilities.hideLoader();
       this.storage.get("optionsData").then((res)=>{
        res = res ? res : {};
        res[this.slot] = success;
        this.storage.set("optionsData", res).then(()=>{
          this.getOptions();
        })
      })
    }, err => {
      console.log("Wordpress api Error: ", JSON.stringify(err));
    });
  }


  loadAllData(){
      this.getWordPressOtions();
   
  }

  dietPlanSlotData = [];
  loadDietPlanSlotData(){
    this.storage.get("dietData").then((res)=>{
      let planName = CONSTANTS.isDetox ? "detox" : CONSTANTS.selectedDietPlan;
      let dietPlan = res[moment(new Date()).format("DDMMYYYY")][planName];
      this.dietPlanSlotData = dietPlan["diets"][this.slot]["data"];
    })
  }

  unvrifiedData = [];
  loadUnverifiedFoodData(){
    this.storage.get("dietData").then((res)=>{
      let planName = CONSTANTS.isDetox ? "detox" : CONSTANTS.selectedDietPlan;
      let dietPlan = res[moment(new Date()).format("DDMMYYYY")][planName];
      this.unvrifiedData = dietPlan["diets"][this.slot]["data"].filter((ele) => {
        return ele.foodSource && (ele.foodSource.toLowerCase() == 'personal' || ele.foodSource.toLowerCase() == 'external');
      })

    })
  }

  diseases:any="";
  image_URL = '';
  diets;
  ionViewWillEnter() {
 
  
  }

  filterDring(value) {}

  async presentAlertConfirm(
    message,
    moptionFood,
    option,
    optionName,
    category,
    code,
    portion,
    i
  ) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message,
      buttons: [
        {
          text: "Close",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {}
        },
        {
          text: "Continue",
          handler: () => {
            this.isCategorySelected = true;
            this.categoryItems(
              moptionFood,
              option,
              optionName,
              category,
              code,
              portion,
              i
            );
          }
        }
      ]
    });

    await alert.present();
  }
  selectedMealCategory(
    moptionFood,
    option,
    optionName,
    category,
    code,
    portion,
    i,
    k
  ) {
    if (this.isMeal != this.segmentName && this.xflag!=3) {
      this.xflag = 3;
      this.presentAlertConfirm(
        "If you select in this option then your selection in the other option will be lost. Please confirm",
        moptionFood,
        option,
        optionName,
        category,
        code,
        portion,
        i
      ).then(
        succes => {
          this.isAlertCame = true;
          console.log("success");
        },
        err => {
          console.log("err", err);
        }
      );
    } else {
      console.log("xflag", this.xflag);
      if(this.xflag==0){
        this.xflag=1;
      }
      this.categoryItems(
        moptionFood,
        option,
        optionName,
        category,
        code,
        portion,
        i
      );
    }
    this.optionData.mealOptions[0].categories[i].food[k].selected = "checked";
    console.log("dadad", this.requestBody);
  }

  categoryItems(moptionFood, option, optionName, category, code, portion, i) {
    this.utilities.hideLoader();
    this.isCategorySelected = true;
    this.selectPortion[i] = portion;
    console.log("new datadat:- ", this.jsonCreation);

    if (this.requestBody.length > 0) {
      //    for (let index = 0; index < this.requestBody.length; index++) {
      let bodyData = this.requestBody.filter(item => {
        return item.category == category;
      });

      if (bodyData.length > 0) {
        for (let index = 0; index < this.requestBody.length; index++) {
          if (bodyData[0].category == this.requestBody[index].category) {
            this.requestBody[index].code = code;
            this.requestBody[index].portion = portion;
          }
        }
      } else {
        this.requestBody.push({
          optionName,
          code,
          category,
          portion
        });
        option.selected = "checked";
      }
      console.log("added Data:- ", this.requestBody);

      // }
    } else {
      option.selected = "checked";
      this.selectedCode[i] = code;
      this.requestBody.push({
        optionName,
        code,
        category,
        portion
      });
    }

    console.log("requestBody:-", this.requestBody);
  }

  selectedMeal(moptionFood, option, optionName, category, code, portion) {
    if (this.xflag == 2) {
      this.xflag = 3;
      this.utilities
        .presentAlertConfirm(
          "If you select in this option then your selection in the other option will be lost. Please confirm"
        )
        .then(
          succes => {
            this.isCategorySelected = false;
            this.fruitssnacks(
              moptionFood,
              option,
              optionName,
              category,
              code,
              portion
            );
          },
          err => {
            console.log("err", err);
          }
        );
    } else {
      this.fruitssnacks(
        moptionFood,
        option,
        optionName,
        category,
        code,
        portion
      );
    }
    console.log("dadad", this.requestBody);
  }

  removeByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  fruitssnacks(moptionFood, option, optionName, category, code, portion) {
    this.optionSelection = portion;
    console.log("optionName,category ,code:-", this.selectedCode1);
    for (let index = 0; index < moptionFood.length; index++) {
      moptionFood[index].selected = "false";
    }

    if (this.requestBody.length > 0) {
      for (let index = 0; index < this.requestBody.length; index++) {
        if (this.requestBody[index].category == null) {
          // this.requestBody = [];
        }
        if (this.requestBody.length > 0) {
          if (this.requestBody[index].code != code) {
            this.requestBody.push({
              optionName,
              code,
              category
            });
            option.selected = "checked";
          }
        } else {
          this.requestBody.push({
            optionName,
            code,
            category
          });
          option.selected = "checked";
        }
      }
    } else {
      //  this.requestBody = [];
      //  this.filterdata(this.dataWithRef,code);
      option.selected = "checked";

      this.requestBody.push({
        optionName,
        code,
        category
      });
    }
  }

  back() {
    this.router.navigate(["/new-diet"]);
  }

  gotoCounter(){
    this.router.navigate(['list-todays-calorie-count'], { queryParams: { selectedSlotIndex: Number(this.slot), searchKey: this.searchKey, fromFoodOptions: true, toMainPage: true }});
  }

  gotoCounterAddQuick(){
    this.router.navigate(['list-todays-calorie-count'], { queryParams: { selectedSlotIndex: Number(this.slot), searchKey: this.searchKey, fromFoodOptions: true, toMainPage: true, addQuick: true }});
  }
  
  goto() {
   
    let selectedPref = [];
    let selectedFoodItems = [];
    // needed for clear filtered data removed and back to non filter data 
    for (let index = 0; index < this.optionData.mealOptions[this.activeInd].categories.length; index++) {
      if(this.mainData[index]!=null && this.mainData[index]!=""){
        this.optionData.mealOptions[this.activeInd].categories[index].food = this.mainData[index];
      }else{
        this.mainData[index] = [...this.optionData.mealOptions[this.activeInd].categories[index].food];
      }
        let data1 = this.optionData.mealOptions[this.activeInd].categories[index].food.filter(item=>{
        return item.Food.toLowerCase().includes('');
      });
        this.optionData.mealOptions[this.activeInd].categories[index].food = data1;
    }

    let selectedFoodList = [];
    this.optionData.mealOptions[0].categories.forEach((ele)=>{
      let foodItmes = ele.food.filter((ele1) =>{
          return ele1["selected"] && ele1["selected"] == "checked" && ele1["portion"] != 0;
      });
      selectedFoodList = [...selectedFoodList, ...foodItmes]
    })

    if(selectedFoodList.length) selectedFoodItems = selectedFoodList[selectedFoodList.length - 1];
    
    selectedFoodList.forEach((ele) =>{
      selectedPref.push({
        code: ele.code,
        portion: ele.portion != undefined ? parseFloat(ele.portion) : 1,
        eaten: ele.eaten ? ele.eaten : -1,
        foodSource: ele.foodSource ? ele.foodSource : "INTERNAL"
      });
    })    
    let unverifiedList = this.unvrifiedData.filter((ele) =>{
      if(ele.portion > 0){
        let obj ={
          "Food" : ele['Food'],
          "Calories" : ele["Calories"],
          "Carbs" : ele["Carbs"],
          "Fat" : ele["Fat"],
          "Protien" : ele["Protien"],
          "Fiber" : ele["Fiber"],
          "portion" :  ele["portion"], //((this.isInternal == 'external' || this.isInternal == 'personal' ) && this.portionUnit == 0) ? this.foodItem["portion"] * this.basePortionUnit : this.foodItem["portion"],
          "portion_unit" : ele["portion_unit"],//this.foodItem["portion_unit"],
          "foodSource": ele["foodSource"],
          "code": ele["_id"] ? ele["_id"] :ele["code"],
          "eaten": ele["eaten"]
        }
        return obj;
      }
    })

    selectedPref.forEach((ele, index) =>{
      this.dietPlanSlotData.forEach((ele1) =>{
        if(ele.code == ele1.code){
          selectedPref[index]["eaten"] = ele1["eaten"]
        }
      })
    })

    selectedPref = [...selectedPref, ...unverifiedList];
   const  itemCode = [...new Map(selectedPref.map(item => [item['code'], item])).values()]
    const reqData = {
      slot: Number(this.slot),
      foodCodeList: itemCode,
      detox:CONSTANTS.isDetox,
      date:CONSTANTS.dietDate,
      country: CONSTANTS.country
    };
    console.log("reqData Navaid:-", reqData);
    if(reqData.foodCodeList.length>0){
    //  this.utilities.presentLoading();
        this.appService.postOptionFoodList(reqData).then(
          success => {
            this.utilities.hideLoader();
            this.requestBody = [];
            this.jsonCreation = [];
            console.log("post", success);
            this.appService.getNotifyMessage(selectedFoodItems);
            this.storage.set("optionsData",this.optionData).then(()=>{
              this.getWordPressOtions();
            })
             this.utilities.logEvent("onboarding_DietPlan_07bUpdateFromOptions", reqData); 
            this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate, success["dietplan"]);
          },
          err => {
            this.utilities.hideLoader();
            console.log("post", err);
          }
        );
    }
    else{
      this.utilities.presentAlert("Please select item with portion.");
    }
  }

  fetchDiet(isDetox, date, success){
    console.log("------------- fetchDietPlan---------");
    let self = this;
    self.appService.getDietPlans(isDetox, date, CONSTANTS.country, CONSTANTS.defaultCalories).then(
      success => {
        self.storage.get("dietData").then((res : any)=>{
          if(res){
            self.storage.get("dietData").then((val)=>{
              val[date] = val[date] ? val[date] : {};
              let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
              val[date][planName] = success;
              self.storage.set("dietData", val).then(()=>{
              
                self.router.navigate(["/new-diet"]);
              //  }
              });
            })
       
          }
        })
        
      },
      error => {
        self.storage.set("localData", "");
        self.storage.set("profileData", "");
        self.utilities.hideLoader();
        console.log("DietPlan Error:", error);
        self.router.navigate(["profile"]);
      }
    );
  }
}
