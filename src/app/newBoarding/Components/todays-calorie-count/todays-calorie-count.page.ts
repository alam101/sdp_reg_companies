import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage,  } from '@ionic/storage';
import moment from "moment";
import { CONSTANTS } from '../../core/constants/constants';
import { PopoverController, ModalController, Platform, IonSlides } from '@ionic/angular';
import { OptionsComponent } from '../todays-calorie-count/componets/options.component';
import { UTILITIES } from '../../utils/utilities';
import { AppService } from '../../../home-service/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { CaloriesCounterInfoComponent } from "../../Components/calories-counter-info/calories-counter-info.component";
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-todays-calorie-count',
  templateUrl: './todays-calorie-count.page.html',
  styleUrls: ['./todays-calorie-count.page.scss'],
})
export class TodaysCalorieCountPage implements OnInit {
  isVPage="";
  slotIndex=0;
  constructor( 
    private storage: Storage, 
    private popoverController: PopoverController,
    private utilities: UTILITIES,
    private appServices: AppService,
    private router: Router,
    public modalCtrl: ModalController,
    private platform: Platform,
    private _sanitizer :DomSanitizer,
    private route: ActivatedRoute,
    private iab: InAppBrowser,
    ) { 

      this.route.queryParams.subscribe(res=>{
        console.log(res["params"]);
        
       this.isVPage = res["params"];
       this.slotIndex =res["prm"];
      })

    }
  dietData;
  dietSlotsData = [];
  carbs = 0;
  fats = 0;
  protien = 0;
  protFatCarbChart = ['-', '-', '-'];
  totalScore = 0;
  consumedColor = '#5fbe7d';
  tipMsgInterval;
  loadingMsgImgTime = 1000;
  loadingMsgTime = 4000;
  activeTip;
  tipMessage = [
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Prefer to eat food items marked as green</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Light dinner is good for metabolism</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">You have not added any food to the counter. Please start</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">You can click in Diet plan to count calories</span>'
  ];
  //isIosDevice = this.utilities.isDeviceiOS();
  isPlanActiveParent = CONSTANTS.isPlanActiveParent;
  selectedThemeColor = CONSTANTS.selectedPlanThemeColor ? CONSTANTS.selectedPlanThemeColor : 'var(--theme-color)';
  selectedDietPlan = CONSTANTS.selectedDietPlan;
  isDetox = CONSTANTS.isDetox;
  toggleTodayCalCount = [
    { "text": "Counter", "isChecked": true, "color": 'var(--theme-color)' },
    { "text": "Plan", "isChecked": false, "color": 'var(--theme-color)' }
  ];
  weightLossBottomRound = './assets/images/header-circle.svg';
  immunityBottomRound = './assets/images/header-circle-immunity.svg';
  postCovidBottomRound = './assets/images/header-circle-post-covid.svg';
  detoxBottomRound = './assets/images/header-circle-detox.svg';
  pcosBottomRound = './assets/images/pcos.svg';
  diabetesThemeColorRound = './assets/images/header-circle-diabetes.svg'; //'#D14322';
  hypertensionThemeRound ='./assets/images/header-circle-hypertension.svg';//'#FF5D56';
  cholesterolThemeRound = './assets/images/header-circle-cholesterol.svg';//'#A31E79';
  calBurnedToday = CONSTANTS.calBurnedToday ? CONSTANTS.calBurnedToday : -1;
  isRandomLock = CONSTANTS.isRandomLock;
  @ViewChild("slides2", { static: false }) dateSlides: IonSlides;
  currentDateIndex = 0;
  noPrevDate = false;
  noNextDate = false;
  weeks = [];

  slideOptsDate = {
    initialSlide: 6,
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };
  ngOnInit() {
    this.weeks = [];
    for (var i = 6; i >= 0 ; i--) {
      let date = moment().subtract(i, "days");
      this.weeks.push({
        date: date.toDate(),
        formatDate: date.format("DDMMYYYY"),
        detoxDate: date.format("DD-MMM-YYYY"),
        weekName: date.format('ddd'),
        displayFormat: date.format("ddd, DD MMM")
        // displayFormat: i == 0 ? "Today,  " + date.format("DD MMM") : date.format("ddd, DD MMM")
      })
      console.log('weeks',this.weeks);
    }
    // setTimeout(() => {
    //   this.dateSlides.slideTo(this.weeks.length, 200);
    // }, 1000);
    
  }

  closeModal(){
    this.router.navigate(['new-diet']);
  }

  senitizeHTML(htmlValue){
    return this._sanitizer.bypassSecurityTrustHtml(htmlValue);
  }

  tip(){
    let i = 0;
    let self = this;
    // self.activeTip = self.senitizeHTML(self.tipMessage[1]);
    console.log(":::: active tip: ", self.activeTip);
    function setMessage(){
      self.activeTip = self.senitizeHTML(self.tipMessage[i++]);
      self.tipMsgInterval = setTimeout(() => {
        setMessage();
        if(i == self.tipMessage.length) i = 0;  
      }, i == 0 || i%2 != 0 ? self.loadingMsgImgTime : self.loadingMsgTime);
    }
    self.tipMsgInterval = setTimeout(() => {
      clearTimeout(self.tipMsgInterval);
      setMessage();
    }, i == 0 || i % 2 != 0 ? self.loadingMsgImgTime : self.loadingMsgTime);
    self.activeTip = self.senitizeHTML(self.tipMessage[i++]);    
  }

  onBack(){
    if( this.isVPage=="v"){
      this.router.navigate(["consume-v"],{queryParams:{params:this.slotIndex}});
    }
    else{
    this.router.navigate(["consume"]);
    }
  }

  dateSlideChanged(ev) {
    console.log("Evee ", ev);
    // this.slides.slideTo(0, 200);
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index;
      this.dataInit(this.weeks[index]['formatDate']);
      // if (index == 0) this.defaultCircleFillColor = true;
      // else this.defaultCircleFillColor = false;
      // this.dateChanged(this.weeks[index])
    })
  }

  nextDate() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      // if (index == 0) this.defaultCircleFillColor = true;
      // else this.defaultCircleFillColor = false;
      if (index < 6) {
        this.currentDateIndex = index + 1;
        // this.noNextDate = false;
        this.dateSlides.slideTo(index + 1, 200);
        console.log("his.weeks[index + 1] ", this.weeks[index + 1])
        // this.dateChanged(this.weeks[index + 1])
      } else {
        // this.noNextDate = true;
      }
    })
  }

  prevDate() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      // if (index == 0) this.defaultCircleFillColor = true;
      // else this.defaultCircleFillColor = false;
      if (index > 0) {
        this.currentDateIndex = index - 1;
        // this.noPrevDate = false;
        this.dateSlides.slideTo(index - 1, 200);
        console.log("his.weeks[index - 1] ", this.weeks[index - 1])
        // this.dateChanged(this.weeks[index - 1])
      } else {
        // this.noPrevDate = true;
      }
    })
  }

  loadChartData(){
  }

  ionViewWillLeave() {
    clearTimeout(this.tipMsgInterval);
    this.platform.ready().then(() => {
      //this.statusBar.backgroundColorByHexString('var(--theme-color)');
    })
  }

  roundUpvalue(val) {
    return Math.round(val);
  }

  showTime(diet) {
    if (diet.slot == 0 || diet.slot == 1) {
      return "";
    }
    else {
      if (diet.slot == 3 || diet.slot == 5 || diet.slot == 6 || !diet.time) {
        return "As per choice";
      } else {
        return diet.time;
      }

    }
  }

  dataSlot = "";
  gotoFoodDetail(foodCode, ind) {
    if(this.currentDateIndex == 6){
      let foodDetails = this.dietSlotsData[ind]["data"].filter((ele) =>{
        return ele._id == foodCode
        })[0]
      if(foodDetails["foodSource"] && (foodDetails["foodSource"].toLowerCase() == 'personal' || foodDetails["foodSource"].toLowerCase() == 'external')){
        this.router.navigate(['add-edit-todays-calorie-count'], { 
          queryParams: { 
            selectedSlotIndex: ind, 
            selectedFoodItemIndex: foodCode, 
            foodDetails: JSON.stringify(foodDetails), 
            foodSource: foodDetails["foodSource"],
            isFromHistory: 'false',
            toMainPage: 'true',
            isEdit: 'true'
          }
        });
        return true;
      }
  
      // if (!this.isPlanActiveForDiet && ind > 2) {
      //   this.paymentSubscribeModel('food detail');
      //   // this.upgradePlan();
      //   return true;
      // }
  
      // if (this.utilities.isPlanExpired()) {
      //   // this.upgradePlan();
      //   this.paymentSubscribeModel('food detail');
      //   return true;
      // } else {
        let code = "";
        let portion = "";
        for (let index = 0; index < this.dietSlotsData[ind].data.length; index++) {
          if (this.dietSlotsData[ind].data.length > 1) {
            code = code + this.dietSlotsData[ind].data[index].code + ",";
            portion = portion + this.dietSlotsData[ind].data[index].portion + ",";
          } else {
            code = code + this.dietSlotsData[ind].data[index].code;
            portion = portion + this.dietSlotsData[ind].data[index].portion;
          }
        }
        this.dataSlot = JSON.stringify(this.dietSlotsData[ind].data);
        this.router.navigate(["food-detail"], {
          queryParams: {
            param: this.dietSlotsData[ind].slotName,
            slot: ind,
            foodCode: this.dataSlot,
            portion,
            mainCode: foodCode,
            fromCalCounter: true
          }
        });
    }
    // }
  }
  

  goToAcitivity(){
    if(this.calBurnedToday > -1 && (this.isPlanActiveParent || this.isRandomLock)){
      this.router.navigate(["activity-tracker"], {
        queryParams: {
          isGoogleFitCaloryZero: false
        }
      });
    }
  }

  goToDeficiet(){
    if(this.calBurnedToday > -1 && (this.isPlanActiveParent || this.isRandomLock)){
      this.router.navigate(["calories-deficit"], {
        queryParams: {
          isGoogleFitCaloryZero: false
        }
      });
    }
  }

  isTodaysCalSelected = false;
  switchToggle2(event){
    console.log("test");
    this.router.navigate(["consume"]);
  }

  showDetails(ind){
    if(!this.dietSlotsData[ind]["showDetails"]) this.dietSlotsData[ind]["showDetails"] = true;
    else this.dietSlotsData[ind]["showDetails"] = false;
  }

  clickAddFoodItem(ind){
    this.router.navigate(['list-todays-calorie-count'], { queryParams: { selectedSlotIndex: ind}});
  }

  showMoreDetails(ind, subInd){
    if(!this.dietSlotsData[ind]["data"][subInd]["showDetails"]) this.dietSlotsData[ind]["data"][subInd]["showDetails"] = true;
    else this.dietSlotsData[ind]["data"][subInd]["showDetails"] = false;
  }

  async openOptions(ind, subInd){
    const popover = await this.popoverController.create({
      event,
      component: OptionsComponent,
      cssClass: 'custom-popover',
      mode: "ios"
    });
    await popover.present();

    popover.onDidDismiss().then((dataReturned) => {
      if(dataReturned && dataReturned.data && dataReturned.data.action){
        if(dataReturned.data.action == "delete"){
          this.removeFoodItem(this.dietSlotsData[ind]["data"][subInd],this.dietSlotsData[ind]);
        }else if(dataReturned.data.action == "edit"){
          let food = this.dietSlotsData[ind]["data"][subInd];
          this.router.navigate(['add-edit-todays-calorie-count'], { queryParams: { selectedSlotIndex: ind, selectedFoodItemIndex: subInd, foodDetails: JSON.stringify(food), foodSource: food.foodSource ? food.foodSource : "internal", isEdit: true, isFromHistory: false, toTodaysCalPage: 'true'}});
        }
      }
    });
  }

  removeFoodItem(item, slot) {
    this.utilities.presentLoading();
    let foodCodeList = [];
    slot.data.filter((ele) => {
      if (ele.itemCode != item.itemCode){
        if(ele["foodSource"] && (ele["foodSource"].toLowerCase() == 'personal' || ele["foodSource"].toLowerCase() == 'external')){
          foodCodeList.push({
            "Food" : ele['Food'],
            "Calories" : ele["Calories"],
            "Carbs" : ele["Carbs"],
            "Fat" : ele["Fat"],
            "Protien" : ele["Protien"],
            "Fiber" : ele["Fiber"],
            "portion" :  ele["portion"], //((this.isInternal == 'external' || this.isInternal == 'personal' ) && this.portionUnit == 0) ? ele["portion"] * this.basePortionUnit : ele["portion"],
            "portion_unit" : ele["portion_unit"],
            "foodSource": ele["foodSource"],
            "code": ele["_id"] ? ele["_id"] :ele["code"],
            "eaten": 2
          })
        }else{
          foodCodeList.push({ code: ele.code, portion: ele.portion, "foodSource":ele["foodSource"] ? ele["foodSource"] : "INTERNAL", eaten: ele.eaten ? ele.eaten : -1 })
        }
      }
      // if (ele.itemCode != item.itemCode)
      //   foodCodeList.push({ code: ele.code, portion: ele.portion, "foodSource":ele["foodSource"] ? ele["foodSource"] : "INTERNAL", eaten: ele.eaten ? ele.eaten : -1 })
    });
    let reqBody = {
      foodCodeList,
      slot: slot.slot,
      detox: CONSTANTS.isDetox,
      date: CONSTANTS.dietDate,
      country: CONSTANTS.country
    };
    console.log("reqBody", reqBody);
    this.appServices.postOptionFoodList(reqBody).then(
      success => {
        this.utilities.hideLoader();
        console.log("detail", success);
        this.updateCurrentDietPlan();
           },
      err => {
        this.utilities.hideLoader();
        console.log("details error", err);
      }
    );
  }

  insertItemInArrayOnSpecificIndex = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
  ]

  ionViewWillEnter(){
    this.dataInit(moment(new Date()).format("DDMMYYYY"));

    this.route.queryParams.subscribe(res => {
      let deficitToday = res.deficitToday;
      let deficitCal = res.deficitCal;
      let consmedAtCurrentTime = res.consmedAtCurrentTime;
      if(deficitToday || consmedAtCurrentTime || deficitCal){
        this.insertItemInArrayOnSpecificIndex(this.tipMessage,0,'<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.insertItemInArrayOnSpecificIndex(this.tipMessage,1, '<span class="two-lines-noti-msg">Calories deficit is '+deficitCal+'kcal as you burnt '+consmedAtCurrentTime+' & consumed '+consmedAtCurrentTime+' kcal</span>');
      }
    })
    this.tip();
  }
  totalTodaysCalories = 0;
  totalTodaysCaloriesPerc = 0;
  totalCaloriesPer;
  tolalCalories = 0;
  setData(){
    let totalTodaysCalories = 0;
    this.carbs = 0;
    this.protien = 0;
    this.fats = 0;
    this.dietData.diets.forEach((ele) =>{
      let slotCalories = 0;
      ele.data.forEach((ele1) =>{
        if(ele1.eaten > 0){
          totalTodaysCalories = totalTodaysCalories + ele1["Calories"];
          this.carbs = this.roundUpvalue( this.carbs + ele1["Carbs"]);
          this.protien = this.roundUpvalue( this.protien + ele1["Protien"]);
          this.fats =  this.roundUpvalue( this.fats + ele1["Fat"]);
        }
      });
    });
    this.totalTodaysCalories = Math.round(totalTodaysCalories);
    this.totalTodaysCaloriesPerc = Math.round((totalTodaysCalories * 100) /this.dietData["recomended"]);
    this.totalCaloriesPer = this.dietData["totalCaloriesPer"];
    this.tolalCalories = this.dietData["tolalCalories"];
    this.dietData.diets = this.dietData.diets.filter((ele) =>{
      let slotCalories = 0;
      ele.data = ele.data.filter((ele1) =>{
        if(ele1.eaten > 0){
          slotCalories = slotCalories + ele1["Calories"];
          this.totalCarbs = this.totalCarbs + ele1["Carbs"];
          this.totalProtien = this.totalProtien + ele1["Protien"];
          this.totalFats = this.totalFats + ele1["Fat"];
          this.totalCalories = this.roundUpvalue(this.totalCalories + ele1["Calories"]);
          return ele1;
        }
      });
      ele["consumedCalories"] = slotCalories;
      return ele
    });
    this.dietSlotsData = this.dietData.diets;
    this.dietSlotsData.filter((ele)=>{
      if(ele.data && ele.data.length > 0){
        ele.showDetails = true;
        return ele;
      }else{
        return ele;
      }
    });
    // this.carbs = this.roundUpvalue(this.totalCarbs);
    // this.protien = this.roundUpvalue(this.totalProtien);
    // this.fats = this.roundUpvalue(this.totalFats);
    this.totalScore = Math.round((this.totalCalories * 100) /this.dietData["recomended"]);
    this.totalScore = this.totalScore < 100 ? 100 - this.totalScore : 0
    this.consumedColor = this.totalScore <= 100 ? '#5fbe7d' : this.totalScore > 100 && this.totalScore <= 110 ? '#FCAF54' : '#df5151';
    let valuesArray = [];
    let bgColorArray = [];
    if(this.protien == 0 && this.carbs == 0 &&  this.fats == 0){
      valuesArray = [100];
      bgColorArray = ['#e3e3e3'];
    }else{
      valuesArray = [this.protien, this.carbs, this.fats];
      bgColorArray = ['#3498DB', '#14CEB7','#FCAF54']
    }

  }

  totalCarbs = 0;
  totalProtien = 0;
  totalFats = 0;
  totalCalories = 0;
  image_URL = CONSTANTS.image_URL;
  dataInit(date){
    this.totalCarbs = 0;
    this.totalProtien = 0;
    this.totalFats = 0;
    this.totalCalories = 0;
    this.platform.ready().then(() => {
      //this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
    })
    this.storage.get("dietData").then((res)=>{
      let dietPlan = CONSTANTS.isDetox ? 'detox' : CONSTANTS.selectedDietPlan;
      if(res && res[date] && res[date][dietPlan]){
        this.dietData = res[date][dietPlan];
        this.setData();
      }else{
        this.fetchDiet(CONSTANTS.isDetox, date);
      }
    });
  }

  fetchDiet(isDetox, date) {
    console.log("------------- fetchDiet ---------");
    let self = this;
    self.appServices.getDietPlans(isDetox, date, CONSTANTS.country, CONSTANTS.defaultCalories).then(
      success => {
        self.storage.get("dietData").then((val : any)=>{
          if(val){
            val[date] = {};
            let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
            val[date][planName] = success;
            self.storage.set("dietData", val).then(()=>{
              self.dietData = success;
              self.setData();
            })
          } else {
            let obj = {};
            let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
            obj[planName] = success;

            let res1 = {};
            res1[date] = obj;
            self.storage.set("dietData", res1).then(() => {
              self.dietData = success;
              self.setData();
            })
          }
        })

      },
      error => {
        self.storage.set("localData", "");
        self.storage.set("profileData", "");
        self.utilities.hideLoader();
        console.log("DietPlan Error:", error);
        // self.utilities.presentAlert(message.globalError);
        self.router.navigate(["profile"]);
      }
    );
  }

  updateCurrentDietPlan(){
    this.utilities.showLoading();
    this.appServices.getDietPlans(CONSTANTS.isDetox,CONSTANTS.dietDate , CONSTANTS.country, CONSTANTS.defaultCalories).then(
      success => {
        this.storage.get("dietData").then((val : any)=>{
          let date = CONSTANTS.dietDate;
          val[date] = {};
          let planName = CONSTANTS.isDetox ? "detox" : CONSTANTS.selectedDietPlan;
          val[date][planName] = success;
          this.storage.set("dietData", val).then(()=>{
            this.utilities.hideLoader();
            this.dataInit(moment(new Date()).format("DDMMYYYY"));
          })
        })
      })
  }

  async openCalInfo(){
    const modal = await this.modalCtrl.create({
        component: CaloriesCounterInfoComponent,
        backdropDismiss: true,
        cssClass: 'app-offer-popup'
      });
      modal.onDidDismiss().then((data: any) => {
        // me.isStartOpenGuranteeModal = false;
      })
      return await modal.present();
    }

    userEmail = CONSTANTS.email;
  openWhatsApp(){
    // if(this.isIosDevice){
    //   let url = "https://api.whatsapp.com/send?phone=+919999118595&&text=My profile id is '"+ this.userEmail +"'. I need support.";
    //   this.iab.create(url , '_system');
    // }else{
    //   let url = "whatsapp://send?phone=+919999118595&text=My profile id is '"+ this.userEmail +"'. I need support.";
    //   this.iab.create(url , '_system');
    // }
  }

}
