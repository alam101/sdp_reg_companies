import { Component, OnInit, ViewChild,  ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CONSTANTS } from '../../core/constants/constants';
import { OptionsAnalysisComponent } from '../analysis/componets/options.component';
import { Storage, } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Chart, registerables } from "chart.js";
import moment from "moment";
import { UTILITIES } from '../../core/utility/utilities';
import { AppService } from '../../home-service/app.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {
  @ViewChild("caloriesCanvas") private caloriesCanvas: ElementRef;
  @ViewChild("slides2", { static: false }) dateSlides: IonSlides;
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 3.2,
    loop: true,
    centeredSlides: false,
    spaceBetween: 0
  };
  activeTip = "";
  noNextDate = false;
  noPrevDate = true;
  currentDateIndex = 0;
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
  };
  detoxMaxValue = 1000;
  slideOptsDate = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };

  weeks = [];
  isDetox = false;
  caloryDistri: any = [0, 0, 0, 0];
  caloriesDistribution: any = [
    {
      min: 35,
      max: 60
    },
    {
      min: 25,
      max: 50
    },
    {
      min: 29,
      max: 30
    }
  ];
  caloryAsPerPlan: any = [0, 0, 0];
  caloriesCheck = {
    caloriesPer: 0,
    isValid: false,
    points: 0,
    strokeColor: "#f70808",
    progressPer: "0",
    totalProgressPer: 0
  }
  recommendedCheck = {
    points: 0,
    recommended: 0,
    maxRecommended: 2,
    isValid: false,
    message: '',
    strokeColor: "#f70808",
    recommendedItems: [],
    progressPer: 0,
    totalProgressPer: 0
  }
  nutrientsCheck = {
    carbsIsValid: false,
    carbsStrokeColor: "#f70808",
    proteinIsValid: false,
    proteinStrokeColor: "#f70808",
    fatIsValid: false,
    fiberIsValid: false,
    fatStrokeColor: "#f70808",
    points: 0,
    message: '',
    isValid: false,
    progressPer: 0,
    totalProgressPer: 0
  }
  distributionCheck = {
    till6PMIsValid: false,
    till6PMStrokeColor: "#f70808",
    after6PMIsValid: false,
    after6PMStrokeColor: "#f70808",
    points: 0,
    message: '',
    isValid: false
  }
  meal = {
    morning: '',
    night: '',
    isValid: false,
    difference: '',
    message: '',
    points: 0,
    progressPer: 0,
    totalProgressPer: 0
  }
  diets: any;
  totalScore = 0;
  tipMessage;
  // minCarbs = 110;
  // maxCarbs = 250;
  // maxPerCarbs = 325;
  // minFats = 40;
  // maxFats = 90;
  // maxPerFats = 130;
  // minProtein = 40;
  // maxProtein = 85;
  // maxPerProtien = 125;
  // minFiber = 25;
  // maxFiber = 60;
  // maxPerFiber = 80;
  minCarbs = 30;
  maxCarbs = 65;
  maxPerCarbs = 100;

  minFats = 20;
  maxFats = 40;
  maxPerFats = 60;

  minProtein = 12;
  maxProtein = 30;
  maxPerProtien = 60;

  minFiber = 20;
  maxFiber = 45;
  maxPerFiber = 70;
  increaseCarbs = false;
  reduceCarbs = false;
  increaseProtein = false;
  reduceProtein = false;
  increaseFats = false;
  reduceFats = false;
  increaseFiber = false;
  reduceFiber = false;
  redColor = 'red';
  orangeColor = 'orange';
  greenColor = '#01A3A4';
  setColor = '';

  chartSnacks = "#F8A825";
  chartBreakfast = "#00B05E";
  chartLunch = "#F7790D";
  chartDinner = "#E64A19";
  chartCarbs = "#005FF6";
  chartFats = "#8B0D81";
  chartProtien = "#F8719F";
  chartFastingBefore = "#F8A825";
  chartFastingAfter = "#00B05E";
  chartFastingTime = "#01A3A4";
  chartMealTime = "#F8719F";

  @ViewChild("slidesHealthyChoice", { static: false }) slidesHealthyChoice: IonSlides;
  slideOptsHealthyChoice = {
    initialSlide: 0,
    slidesPerView: 2,
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,
  };
  timingPer = 0;
  isStrait: any = false;
  slotIndex=-1;
  constructor(private route: ActivatedRoute, private storage: Storage, private popoverController: PopoverController, private router: Router,
    private modalController: ModalController,private utilities: UTILITIES,private appService: AppService,private _sanitizer: DomSanitizer) { 
      Chart.register(...registerables);
      this.route.queryParams.subscribe(res=>{
        this.slotIndex = res["params"];
        console.log("slotsss",this.slotIndex);
        
      });
    }

 

  ionViewWillLeave() {
    clearTimeout(this.tipMsgInterval);
  }

  ionViewWillEnter(){
   
  console.log("suggestedCalories", this.suggestedCalories);
  
  }

  dateSlideChanged(ev) {
    console.log("Evee ", ev);
    // this.slides.slideTo(0, 200);
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index;
      this.dateChanged(this.weeks[index])
    })
  }

  getRangeLength(min, max, total){
    let range = {
      percentage: 0,
      start : 0
    };
    
    range.percentage = (((100 * max) / total) - ((100 * min) / total));
    range.start =  min * 100 / total;
    return range;
  }

  dateChanged(selectedData){
    this.storage.get("dietData").then((res)=>{
      this.resetCounter();
      if(res && res[selectedData.formatDate] && res[selectedData.formatDate][CONSTANTS.selectedDietPlan]){
        let planData = res[selectedData.formatDate][CONSTANTS.selectedDietPlan];
       this.calories = { calories: planData.recomended };
        this.totalCaloriesFunct(res[selectedData.formatDate][CONSTANTS.selectedDietPlan]["diets"],res[selectedData.formatDate][CONSTANTS.selectedDietPlan], ()=>{
          this.dataInit(res[selectedData.formatDate][CONSTANTS.selectedDietPlan]["diets"]);
        })
      }else{
        this.fetchDiet(CONSTANTS.isDetox, selectedData.formatDate);
      }
    })
  }

  fetchDiet(isDetox, date) {
    console.log("------------- fetchDiet ---------");
    let self = this;
    self.utilities.showLoading();
    self.appService.getDietPlans(isDetox, date, CONSTANTS.country, CONSTANTS.defaultCalories).then(
      success => {
        self.storage.get("dietData").then((val : any)=>{
          if(val){
            val[date] = {};
            let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
            val[date][planName] = success;
            self.storage.set("dietData", val).then(()=>{
              self.totalCaloriesFunct(success["diets"],success, ()=>{
                self.dataInit(success["diets"]);
              })
            })
          } else {
            let obj = {};
            let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
            obj[planName] = success;

            let res1 = {};
            res1[date] = obj;
            self.storage.set("dietData", res1).then(() => {
              self.totalCaloriesFunct(success["diets"],success, ()=>{
                self.dataInit(success["diets"]);
              })
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

  nextDate() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index + 1;
      if (index < 6) {
        this.noNextDate = false;
        this.dateSlides.slideTo(index + 1, 200);
        // this.dateChanged(this.weeks[index + 1])
      } else {
        this.noNextDate = true;
      }
    })
  }

  prevDate() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index - 1;
      if (index > 0) {
        this.noPrevDate = false;
        this.dateSlides.slideTo(index - 1, 200);
        // this.dateChanged(this.weeks[index - 1])
      } else {
        this.noPrevDate = true;
      }
    })
  }

  calories ;
  totalCaloriesFunct(diets, totalData, cb) {
    console.log("totalData",totalData);
    
    let cal = 0;
    const totalCalories = totalData.totalCalories;
    const totalCarbs = totalData.totalCarbs;
    let totalCarbsPer = totalData.totalCarbsPer;
    const totalProtien = totalData.totalProtien;
    let totalProtienPer = totalData.totalProtienPer;
    const totalFat = totalData.totalFat;
    let totalFatPer = totalData.totalFatPer;
    const totalFiber = totalData.totalFiber;
    let totalFiberPer = totalData.totalFiberPer;
    let minus10 = 0;
    let plus10 = 0;
    let minus1010 = 0;
    this.timeDiffernce(diets[1].time, diets[8].time ? diets[8].time : diets[7].time);
    for (let index = 0; index < diets.length; index++) {
      diets[index].slotName = diets[index].message;

      cal = cal + Number(diets[index].totalCalories);
      if (index == 3) {
        this.caloryAsPerPlan[0] = cal;
        cal = 0;
      } else if (index == 6) {
        this.caloryAsPerPlan[1] = cal;
        cal = 0;
      } else if (index == 8) {
        this.caloryAsPerPlan[2] = cal;
        cal = 0;
      }
    }


    totalCarbsPer = parseInt(
      ((totalCarbs * 100 * 4) / totalCalories).toFixed(0)
    );
    totalProtienPer = parseInt(
      ((totalProtien * 100 * 4) / totalCalories).toFixed(0)
    );

    totalFatPer = parseInt(((totalFat * 100 * 9) / totalCalories).toFixed(0));

    totalFiberPer = parseInt(((totalFiber * 100) / totalCalories).toFixed(0));
    if (totalCarbsPer + totalProtienPer + totalFatPer > 100) {
      totalCarbsPer =
        totalCarbsPer - (totalCarbsPer + totalProtienPer + totalFatPer - 100);
    } else if (totalCarbsPer + totalProtienPer + totalFatPer < 100) {
      totalCarbsPer =
        totalCarbsPer + (100 - (totalCarbsPer + totalProtienPer + totalFatPer));
    }
    if(!this.calories) this.calories = { calories: totalData.recomended };

    minus10 = parseInt(this.calories.calories) * 0.8;

    minus1010 = parseInt(this.calories.calories) * 0.8;

    plus10 = parseInt(this.calories.calories) * 1.05;
    this.isStrait =
      totalCalories >= minus1010 && totalCalories < minus10 ? true : false;
    this.suggestedCalories = {
      totalCalories: Number(totalCalories.toFixed(0)),
      recomended: totalData.recomended,
      totalCarbs: totalCarbs.toFixed(0),
      totalCarbsPer: totalCarbsPer.toFixed(0),
      totalFat: totalFat.toFixed(0),
      totalFatPer: totalFatPer.toFixed(0),
      totalFiber: totalFiber.toFixed(0),
      totalFiberPer: totalFiberPer.toFixed(0),
      totalProtien: totalProtien.toFixed(0),
      totalProtienPer: totalProtienPer.toFixed(0),
      minus10: Math.round(minus10),
      plus10: Math.round(plus10),
      isDown:
        totalCalories > minus1010 && totalCalories < plus10 ? false : true,
      isStrait: this.isStrait,
      minus1010
    };
    // text color
    if (this.isDetox) {
      this.suggestedCalories.minus10 = 500;
      this.suggestedCalories.plus10 = 1000;

    }

    setTimeout(() => {
  
      this.meal.points = 0;
      this.recommendedCheck.points = 0;
      this.caloriesCheck.points = 0;
      this.distributionCheck.points = 0;
      this.nutrientsCheck.points = 0;
     cb();

    }, 200);

    console.log(
      "caloryAsPerPlan:-",
      this.caloryAsPerPlan + "--" + this.suggestedCalories.totalCalories
    );

    console.log(
      "caloryAsPerPlan:-",
      this.caloryAsPerPlan + "--" + this.suggestedCalories.totalCalories
    );
    console.log(
      "caloryAsPerPlan:-",
      this.caloryAsPerPlan[0] +
      this.caloryAsPerPlan[1] +
      this.caloryAsPerPlan[2] +
      "--" +
      this.suggestedCalories.totalCalories
    );


    //  this.caloryAsPerPlann(diets);
  }

  resetCounter(){
    this.suggestedCalories = {
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
    };

    this.caloriesCheck = {
      caloriesPer: 0,
      isValid: false,
      points: 0,
      strokeColor: "#f70808",
      progressPer: "0",
      totalProgressPer: 0
    }
    this.recommendedCheck = {
      points: 0,
      recommended: 0,
      maxRecommended: 2,
      isValid: false,
      message: '',
      strokeColor: "#f70808",
      recommendedItems: [],
      progressPer: 0,
      totalProgressPer: 0
    }
    this.nutrientsCheck = {
      carbsIsValid: false,
      carbsStrokeColor: "#f70808",
      proteinIsValid: false,
      proteinStrokeColor: "#f70808",
      fatIsValid: false,
      fiberIsValid: false,
      fatStrokeColor: "#f70808",
      points: 0,
      message: '',
      isValid: false,
      progressPer: 0,
      totalProgressPer: 0
    }
    this.distributionCheck = {
      till6PMIsValid: false,
      till6PMStrokeColor: "#f70808",
      after6PMIsValid: false,
      after6PMStrokeColor: "#f70808",
      points: 0,
      message: '',
      isValid: false
    }
    this.meal = {
      morning: '',
      night: '',
      isValid: false,
      difference: '',
      message: '',
      points: 0,
      progressPer: 0,
      totalProgressPer: 0
    }
    // diets: any;
    this.totalScore = 0;
    this.caloryDistri = [0, 0, 0, 0];
    this.snacksTotal = 0;
    this.breakFastTotal = 0;
    this.lunchTotal = 0;
    this.dinnerTotal = 0;
  }

  navigateToUpdrade() {
    // if (!CONSTANTS.isPlanActiveParent) setTimeout(() => this.paymentSubscribeModel('diet plan analysis'), 1000);//this.router.navigate(["upgrade-plan"]), 1000);
  }

  roundingVal(val) {
    if (isNaN(val)) {
      return 0;
    }
    return Math.round(val);
  }

  averageCarbs = 0;
  averageProtein = 0;
  averageFats = 0;
  // averageFiber = 0;
  dataInit(diets){
    this.isDetox = CONSTANTS.isDetox;
    this.tipMessage = [];
    // this.minCarbs = Math.round((0.35 * this.suggestedCalories.totalCalories / 4));
    // this.maxCarbs = Math.round((0.65 * this.suggestedCalories.totalCalories / 4));
    if (parseFloat(this.suggestedCalories.totalCalories) <= this.suggestedCalories.plus10) {
      this.caloriesCheck.isValid = true;
      this.caloriesCheck.points = 50;
      this.caloriesCheck.strokeColor = "#00A86B";
    } else {
      let extraCalories = Math.round(((this.suggestedCalories.totalCalories - this.suggestedCalories.plus10) / this.suggestedCalories.plus10) * 100 / 5);
      if (extraCalories >= 4) {
        this.caloriesCheck.points = 20;
      } else if (extraCalories == 3) {
        this.caloriesCheck.points = 25;
      } else if (extraCalories == 2) {
        this.caloriesCheck.points = 30;
      } else if (extraCalories == 1) {
        this.caloriesCheck.points = 40;
      }
    }

    this.caloriesCheck.caloriesPer = (parseFloat(this.suggestedCalories.totalCalories) / parseFloat(this.suggestedCalories.recomended)) * 100;

    this.caloriesCheck.progressPer = Math.round((Math.PI * 2 * 22 * this.caloriesCheck.points) / 50) + "";
    this.caloriesCheck.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.caloriesCheck.points) / 50);

    this.totalNutrients = parseInt(this.suggestedCalories.totalCarbs) + parseInt(this.suggestedCalories.totalFat) + parseInt(this.suggestedCalories.totalProtien);

    let numOfMultiFaliure = 0;
    this.averageCarbs = this.roundingVal(((this.roundingVal(this.suggestedCalories.totalCarbs) * 4) * 100)/this.suggestedCalories.totalCalories);//this.roundingVal((this.suggestedCalories.totalCarbs * 100)/this.totalNutrients);
    // if (this.suggestedCalories.totalCarbsPer >= 35 && this.suggestedCalories.totalCarbsPer <= 70) {
    if (this.averageCarbs > this.minProtein && this.averageCarbs <= this.maxCarbs) {
      this.nutrientsCheck.carbsIsValid = true;
      this.nutrientsCheck.points = this.nutrientsCheck.points + 7.5;
      this.nutrientsCheck.carbsStrokeColor = "#00A86B";
    } else {
      numOfMultiFaliure++;
      if (this.averageCarbs < this.minCarbs) {
        // this.nutrientsCheck.message = "Carbs is less, please fix it";
        // this.nutrientsCheck.message = " Increase Carbs,";
        this.increaseCarbs = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Increase carbs to ensure fuel for brain</span>');
      } else if (this.averageCarbs > this.maxCarbs) {
        // this.nutrientsCheck.message = "Carbs is high, please fix it";
        this.reduceCarbs = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Reduce Carbs for improved weight loss</span>');
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Reduce Carbs,";

      }else{
        this.increaseCarbs = false;
        this.reduceCarbs = false;
      }
    }
    this.averageProtein = this.roundingVal(((this.roundingVal(this.suggestedCalories.totalProtien) * 4) * 100)/this.suggestedCalories.totalCalories);//this.roundingVal((this.suggestedCalories.totalProtien * 100)/this.totalNutrients);
    // if (this.suggestedCalories.totalProtienPer >= 12 && this.suggestedCalories.totalProtienPer <= 30) {
    if (this.averageProtein >= this.minProtein && this.averageProtein <= this.maxProtein) {
      this.nutrientsCheck.proteinIsValid = true;
      this.nutrientsCheck.points = this.nutrientsCheck.points + 7.5;
      this.nutrientsCheck.proteinStrokeColor = "#00A86B";
    } else {
      numOfMultiFaliure++;
      
      if (this.averageProtein < this.minProtein) {
        // this.nutrientsCheck.message = "Protein is less, please fix it";
        this.increaseProtein = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Increase protein for proper muscle building</span>');
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Increase Protein,";
      } else if (this.averageProtein > this.maxProtein) {
        // this.nutrientsCheck.message = "Protein is high, please fix it";
        this.reduceProtein = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Reduce protein to avoid excess kidney load</span>');
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Reduce Protein,";
      }else{
        this.increaseProtein = false;
        this.reduceProtein = false;
      }
    }

    this.averageFats = this.roundingVal(((this.roundingVal(this.suggestedCalories.totalFat) * 9) * 100)/this.suggestedCalories.totalCalories);//this.roundingVal((this.suggestedCalories.totalFat * 100)/this.totalNutrients);
    // if (this.suggestedCalories.totalFatPer >= 10 && this.suggestedCalories.totalFatPer <= 35) {
    // if (this.suggestedCalories.totalFat >= this.minFats && this.suggestedCalories.totalFat <= this.maxFats) {
    if (this.averageFats >= this.minFats && this.averageFats <= this.maxFats) {
      this.nutrientsCheck.fatIsValid = true;
      this.nutrientsCheck.points = this.nutrientsCheck.points + 7.5;
      this.nutrientsCheck.fatStrokeColor = "#00A86B";
    } else {
      
      if (this.averageFats < this.minFats) {
        // this.nutrientsCheck.fatStrokeColor = "#00A86B";
        // this.nutrientsCheck.points = this.nutrientsCheck.points + 5;
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Increase Fats,";
        this.increaseFats = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Increase Fats for nutrient absorption</span>');
      } else if (this.averageFats > this.maxFats) {
        numOfMultiFaliure++;
        // this.nutrientsCheck.message = "Fats is high, please fix it";
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Reduce Fats,";
        this.reduceFats = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Reduce fats for optimal heart health</span>');
      }else{
        this.increaseFats = false;
        this.reduceFats = false;
      }
    }

    if (this.suggestedCalories.totalFiber >= this.minFiber) {
      this.nutrientsCheck.fiberIsValid = true;
      this.nutrientsCheck.points = this.nutrientsCheck.points + 7.5;
      this.nutrientsCheck.fatStrokeColor = "#00A86B";
    } else {
      if (this.suggestedCalories.totalFiber < this.minFiber) {
        // this.nutrientsCheck.fatStrokeColor = "#00A86B";
        // this.nutrientsCheck.points = this.nutrientsCheck.points + 5;
        this.increaseFiber = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Increase fiber for smooth bowel movement</span>');
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Increase Fiber,";
      } else if (this.suggestedCalories.totalFiber > this.maxFiber) {
        numOfMultiFaliure++;
        // this.nutrientsCheck.message = "Fats is high, please fix it";
        this.reduceFiber = true;
        this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
        this.tipMessage.push('<span class="two-lines-noti-msg">Reduce fibre to avoid digestive problems</span>');
        // this.nutrientsCheck.message = this.nutrientsCheck.message + " Reduce Fiber,";
      }else{
        this.increaseFiber = false;
        this.reduceFiber = false;
      }
    }

    this.nutrientsCheck.progressPer = Math.round((Math.PI * 2 * 22 * this.nutrientsCheck.points) / 30);
    this.nutrientsCheck.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.nutrientsCheck.points) / 30);

    // if (this.nutrientsCheck.proteinIsValid && this.nutrientsCheck.carbsIsValid
    //   && this.nutrientsCheck.fatIsValid) {
    //   this.nutrientsCheck.points = 20;
    //   this.nutrientsCheck.isValid = true;
    //   this.nutrientsCheck.message = this.nutrientsCheck.message + " Macro Nutrients in the Diet plan are good !";
    // }
    // if (numOfMultiFaliure > 1) {
    //   this.nutrientsCheck.message = this.nutrientsCheck.message + " Nutrients proportion is not as per recommendations";
    // }



    let numOfDistributionFaliure = 0;
    if ((this.caloryDistri[3] >= (this.caloriesDistribution[1].min + this.caloriesDistribution[0].min)) &&
      (this.caloryDistri[3] <= (this.caloriesDistribution[1].max + this.caloriesDistribution[0].max))) {
      this.distributionCheck.till6PMIsValid = true;
      this.distributionCheck.points = this.distributionCheck.points + 10;
      this.distributionCheck.till6PMStrokeColor = "#00A86B";
    } else {
      numOfDistributionFaliure++;
      this.distributionCheck.message = "Consuming >70% till 6 PM. Please improve it";
    }

    if (
      this.caloryDistri[2] <= this.caloriesDistribution[2].max) {
      this.distributionCheck.after6PMIsValid = true;
      this.distributionCheck.points = this.distributionCheck.points + 10;
      this.distributionCheck.after6PMStrokeColor = "#00A86B";
    } else {
      numOfDistributionFaliure++;
      this.distributionCheck.message = "Consuming >30% after 6 PM. Please improve it";
    }

    if (numOfDistributionFaliure == 0) {
      this.distributionCheck.isValid = true;
      this.distributionCheck.message = "Consuming >70% till 6 PM and Consuming <30% after 6 PM , which is good";
    }


    // this.storage.get("diets").then(diets => {
      this.diets = diets;
      let totalRecommended = 0;
      this.diets.forEach(el => {
        el.data.forEach(element => {
          if (element.RecommendedIn && element.RecommendedIn.length > 0 && element.RecommendedIn[0] != "") {
            totalRecommended = totalRecommended + 1;
            this.recommendedCheck.recommendedItems.push(element);
          }
        });
      });

      if (totalRecommended == 1) {
        this.recommendedCheck.isValid = true;
        this.recommendedCheck.points = 10;
        this.recommendedCheck.strokeColor = "#00A86B";
        this.recommendedCheck.message = `You have ${totalRecommended} items in the plan , which are helpful to prevent or cure lifestyle disorders`
      } else if (totalRecommended >= 2) {//this.recommendedCheck.maxRecommended) {
        this.recommendedCheck.isValid = true;
        this.recommendedCheck.points = 20;
        this.recommendedCheck.strokeColor = "#00A86B";
        this.recommendedCheck.message = `You have ${totalRecommended} items in the plan , which are helpful to prevent or cure lifestyle disorders`
      } else {
        this.recommendedCheck.message = `You have no recommened items in the plan`
      }

      this.timingPer = this.getPercentageCal((this.caloryAsPerPlan[1] + this.caloryAsPerPlan[0]), this.suggestedCalories.totalCalories, (this.caloriesDistribution[1].min + this.caloriesDistribution[0].min))

      this.recommendedCheck.progressPer = Math.round((Math.PI * 2 * 22 * this.recommendedCheck.points) / 20);
      this.recommendedCheck.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.recommendedCheck.points) / 20);

      this.meal.morning = this.tConvert(this.diets.find(o => o.slot == 1).time);
      this.meal.night = this.diets.find(o => o.slot == 8).time ?
        this.tConvert(this.diets.find(o => o.slot == 8).time) :
        this.tConvert(this.diets.find(o => o.slot == 7).time);
      this.timeDiffernce(diets[1].time, diets[8].time ? diets[8].time : diets[7].time);
      if (!CONSTANTS.isDetox) {
        this.totalScore = ((this.caloriesCheck.points + this.nutrientsCheck.points +
          this.distributionCheck.points + this.meal.points) / 110 * 100);
          // this.distributionCheck.points + this.recommendedCheck.points + this.meal.points) / 110 * 100);
      }
      else {
        this.totalScore = ((this.caloriesCheck.points +
          this.distributionCheck.points + this.meal.points) / 80 * 100)
          // this.distributionCheck.points + this.recommendedCheck.points + this.meal.points) / 80 * 100)

      }
      this.totalScore = this.totalScore > 100 ? 100 : Math.floor(this.totalScore);
      this.setColorNMessage();
      this.setGraph(this.diets);
      this.tip();
    // });
  }

  senitizeHTML(htmlValue){
    return this._sanitizer.bypassSecurityTrustHtml(htmlValue);
  }

  tipMsgInterval;
  loadingMsgImgTime = 1000;
  loadingMsgTime = 4000;
  activeTipMsg;
  tip(){
    let i = 0;
    let self = this;
    // console.log(":::: active tip: ", self.activeTip);
    // self.activeTipMsg =  self.senitizeHTML(self.tipMessage[1]) ;
    function setMessage(){
      self.activeTipMsg = self.senitizeHTML(self.tipMessage[i++]);
      if(i == self.tipMessage.length) i = 0;  
      self.tipMsgInterval = setTimeout(() => {
        setMessage();
      }, i%2 != 0 ? self.loadingMsgImgTime : self.loadingMsgTime);
    }
    self.tipMsgInterval = setTimeout(() => {
      clearTimeout(self.tipMsgInterval);
      setMessage();
    }, i == 0 || i % 2 != 0 ? self.loadingMsgImgTime : self.loadingMsgTime);
    self.activeTipMsg = self.senitizeHTML(self.tipMessage[i++]);
  }
  caloriProgress;
  ngOnInit() {
    console.log("suggestedCalories", this.suggestedCalories);
  
    this.navigateToUpdrade();
    localStorage.setItem("isAnalysisPageVisited", "true");
    for (var i = 0; i < 7; i++) {
      
      let date = moment().add(i, "days");
      this.weeks.push({
        date: date.toDate(),
        formatDate: date.format("DDMMYYYY"),
        detoxDate: date.format("DD-MMM-YYYY"),
        weekName: date.format('ddd'),
        displayFormat: date.format("ddd, DD MMM")
        // displayFormat: i == 0 ? "Today,  " + date.format("DD MMM") : date.format("ddd, DD MMM")
      })
      if(date.format("DDMMYYYY") == CONSTANTS.dietDate){
        let index = i;
        setTimeout(() => {
          this.dateSlides.slideTo(index, 200);
        }, 500);
      } 
    }

    if(moment().format("DDMMYYYY") == CONSTANTS.dietDate){
      let obj = {
        formatDate: CONSTANTS.dietDate
      }
      this.dateChanged(obj);
    }

   this.caloriProgress = ((this.suggestedCalories.minus10*100)/this.suggestedCalories.plus10) +'%';
  }

  setColorNMessage(){
    if(this.totalScore >= 85){
      this.activeTip =  "Your Diet Plan is <span class='good-score'>Excellent</span>.";
      this.setColor = this.greenColor;
    }else if( this.totalScore < 85 && this.totalScore >= 70){
      this.activeTip =  "Your Diet Plan is <span class='average-score'>Average</span>.";
      this.setColor = this.orangeColor;
    }else{
      this.activeTip =  "Your Diet Plan is <span class='bad-score'>bad</span>.";
      this.setColor = this.redColor;
    }
  }

  snacksTotal = 0;
  breakFastTotal = 0;
  lunchTotal = 0;
  dinnerTotal = 0;
  totalCal = 0;
  totalNutrients = 0;

  carbsPer;
  caloriesPer;
  protienPer;
  fatsPer;
  fiberPer;
  rermainFastingTime;
  caloriesSortArray = [];
  carbsSortArray = [];
  fatsSortArray = [];
  protiensSortArray = [];
  showCarbsList = false;
  showFatsList = false;
  showProtienList = false;

  mealDiff;
  setGraph(dietsData){
    let dietData = [];
    // let snacksTotal = 0, breakFastTotal = 0, lunchTotal = 0, dinnerTotal = 0;
    dietsData.forEach(element => {
      dietData = [...dietData , ...element["data"]]
      if(element.slot == 0 || element.slot == 3 || element.slot == 5 || element.slot == 6 || element.slot == 8){
        element.data.forEach(element1 => {
          this.snacksTotal = Math.round(this.snacksTotal + element1.Calories);
        });
      }else if(element.slot == 1 || element.slot == 2){
        element.data.forEach(element1 => {
          this.breakFastTotal = Math.round(this.breakFastTotal + element1.Calories);
        });
      }else if(element.slot == 4){
        element.data.forEach(element1 => {
          this.lunchTotal = Math.round(this.lunchTotal + element1.Calories);
        });
      }else if(element.slot == 7){
        element.data.forEach(element1 => {
          this.dinnerTotal = Math.round(this.dinnerTotal + element1.Calories);
        });
      }
    });
    this.caloriesSortArray = [...dietData];
    this.carbsSortArray = [...dietData];
    this.fatsSortArray = [...dietData];
    this.protiensSortArray = [...dietData];

    this.caloriesSortArray.sort((a, b) =>{ return (a.Calories < b.Calories ? 1 : -1)});
    this.carbsSortArray.sort((a, b) =>{ return (a.Carbs < b.Carbs ? 1 : -1)});
    this.fatsSortArray.sort((a, b) =>{ return (a.Fat < b.Fat ? 1 : -1)});
    this.protiensSortArray.sort((a, b) =>{ return (a.Protien < b.Protien ? 1 : -1)});

    this.totalCal = this.snacksTotal + this.breakFastTotal + this.lunchTotal + this.dinnerTotal;
    let ctx : any = document.getElementById("mainCaloriesChart") as HTMLElement;
      let mainCalChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            'Breakfast',
            'Lunch',
            'Snacks',
            'Dinner'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [this.breakFastTotal, this.lunchTotal, this.snacksTotal, this.dinnerTotal],
            backgroundColor: [
              this.chartBreakfast,
              this.chartLunch,
              this.chartSnacks,
              this.chartDinner
            ],
            hoverOffset: 4,
            borderWidth: 0
          }]
        },
        options: {
          // cutoutPercentage: 80,
          radius: "100%",
          // legend: {
          //   display: false
          // },
          //cutoutPercentage: 40,
          responsive: true,
        }
      });

    this.carbsPer = ((parseInt(this.suggestedCalories.totalCarbs)*100)/this.maxPerCarbs) <= 100 ? Math.round((parseInt(this.suggestedCalories.totalCarbs)*100)/this.maxPerCarbs) : 100;
    this.fatsPer = ((parseInt(this.suggestedCalories.totalFat)*100)/this.maxPerFats) <= 100 ? Math.round((parseInt(this.suggestedCalories.totalFat)*100)/this.maxPerFats) : 100;
    this.protienPer = ((parseInt(this.suggestedCalories.totalProtien)*100)/this.maxPerProtien) <= 100 ? Math.round((parseInt(this.suggestedCalories.totalProtien)*100)/this.maxPerProtien) : 100;
    this.fiberPer = ((parseInt(this.suggestedCalories.totalFiber)*100)/this.maxPerFiber) <= 100 ? Math.round((parseInt(this.suggestedCalories.totalFiber)*100)/this.maxPerFiber) : 100;
    let ctx1 : any = document.getElementById("mainNutrientsChart");
    let protFatCarbChart = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: [
          'Carbs',
          'Fats',
          'Proteins'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [this.suggestedCalories.totalCarbs, this.suggestedCalories.totalFat, this.suggestedCalories.totalProtien],
          backgroundColor: [
            this.chartCarbs,
            this.chartFats,
            this.chartProtien
          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        // cutoutPercentage: 80,
        radius: "100%",
        // legend: {
        //   display: false
        // },
        //cutoutPercentage: 40,
        responsive: true,
      }
    });

    let ctx2 : any= document.getElementById("fastTimingChart");
    let fastTimingChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: [
          'After',
          'Before ',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [this.timingPer, 100-this.timingPer],
          backgroundColor: [
            this.chartFastingAfter,
            this.chartFastingBefore
          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        // cutoutPercentage: 80,
        radius: "100%",
        // legend: {
        //   display: false
        // },
        //cutoutPercentage: 40,
        responsive: true,
      }
    });
    this.rermainFastingTime = this.diffRemainTime(this.meal.difference);
    let parts = [];
    parts = this.meal.difference.split(":");
    if(parts.length == 1) {
      parts.push('00');
      this.mealDiff = parts.join(":");
    }else{
      this.mealDiff = this.meal.difference;
    } 

    let currentFast = parts[0] * 3600 + parts[1] * 60 + '00';
    let full = 8634059;
    let per = (100 * parseInt(currentFast) / full).toFixed(2);

    let ctx3 : any = document.getElementById("mealTimeChart");
    let mealTimeChart = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: [
          'Meal Time',
          'Fasting Time',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [per, 100- Number(per)],
          backgroundColor: [
            this.chartMealTime,
            this.chartFastingTime
          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        // cutoutPercentage: 80,
        radius: "100%",
        // legend: {
        //   display: false
        // },
        //cutoutPercentage: 40,
        responsive: true,
      }
    });

      this.utilities.hideLoader();
  }

  diffRemainTime(hour){
    let diff = moment("24:00", 'hh:mm').diff(moment(hour, 'hh:mm'), 'hours') + ":" + (moment("24:00", 'hh:mm').diff(moment(hour, 'hh:mm'), 'minutes')) % 60;
    let temp = diff.split(":");
    temp[1] = temp[1] == "0" ? "00" : temp[1];
    return temp.join(":");
  }

  slidePrev() {
    this.slidesHealthyChoice.slidePrev();
  }

  slideNext() {
    this.slidesHealthyChoice.slideNext();
  }

  timeDiffernce(firstDateTime, SecondDateTime) {
    console.log("breakFast", firstDateTime);
    console.log("dinner", SecondDateTime);
    let currentTime = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes()
    );
    let hourMinut = firstDateTime.split(":");
    let hourMinut2;

    hourMinut2 = SecondDateTime.split(":");

    var startDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
      parseInt(hourMinut[0]),
      parseInt(hourMinut[1])
    );
    var startDateForward = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate() + 1,
      parseInt(hourMinut[0]),
      parseInt(hourMinut[1])
    );

    var startDateBackward = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate() - 1,
      parseInt(hourMinut[0]),
      parseInt(hourMinut[1])
    );
    // Do your operations
    var endDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
      parseInt(hourMinut2[0]),
      parseInt(hourMinut2[1])
    );
    // Do your operations
    var endDatePrevious = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate() - 1,
      parseInt(hourMinut2[0]),
      parseInt(hourMinut2[1])
    );
    let totalDuration1 = (startDateForward.getTime() - endDate.getTime());
    let totalDuration2 = (startDate.getTime() - endDatePrevious.getTime());
    if (new Date().getHours() > 12) {
      let sec_num = ((startDateForward.getTime() - endDate.getTime()) / 1000);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      this.meal.difference = hours + (minutes == 0 ? '' : ':' + minutes);
      this.getMealHour();
    }
    else {
      let sec_num = ((startDate.getTime() - endDatePrevious.getTime()) / 1000);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      this.meal.difference = hours + (minutes == 0 ? '' : ':' + minutes);
      this.getMealHour();
    }
  }

  getMealHour() {
    // if (parseInt(this.meal.difference) >= 14) {
    if (parseFloat(this.meal.difference) >= 12 && parseFloat(this.meal.difference) < 12.5) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is good, recommended 14 hours`;
      this.meal.isValid = true;
      this.meal.points += 5;
    }
     else if (parseFloat(this.meal.difference) >= 12.5 && parseFloat(this.meal.difference) < 13.5) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is good, recommended 14 hours`;
      this.meal.isValid = true;
      this.meal.points += 7.5;
    }
    else if (parseFloat(this.meal.difference) > 13.5) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is awesome`;
      this.meal.isValid = false;
      this.meal.points += 10;

    }
     else if (parseFloat(this.meal.difference) < 12) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is not good, recommended 14 hours`;
      this.meal.isValid = false;
      this.meal.points += 0;

    }

    this.meal.progressPer = Math.round((Math.PI * 2 * 22 * this.meal.points) / 20);
    this.meal.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.meal.points) / 20);
  }

  tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  getVirtualPervcent(percent, minVal) {
    const perc = ((Number(percent) / Number(minVal)) * 100).toFixed(0);
    if (parseInt(perc) > 100) {
      return 100;
    } else {
      return perc;
    }
  }
  getPercentageCal(value, total, percentage) {
    let data = Math.round((Number(value) * 100) / Number(total));
    if (percentage == this.caloriesDistribution[0].min) {
      this.caloryDistri[0] = data;
    } else if (percentage == this.caloriesDistribution[1].min) {
      this.caloryDistri[1] = data;
    } else if (percentage == this.caloriesDistribution[2].min) {
      this.caloryDistri[2] = data;
    }
    else if (percentage == this.caloriesDistribution[1].min + this.caloriesDistribution[0].min) {
      this.caloryDistri[3] = data;
    }
    if (data >= 70) this.meal.points += 10;
    return data;
  }

  getMax(percent, minVal) {
    const perc: any = ((Number(percent) / Number(minVal)) * 100).toFixed(0);
    if (parseInt(perc) > 100) {
      return 100 - 100;
    } else {
      return 100 - perc;
    }

  }
  getVirtualPervcent2(percent, total, minVal) {
    const perc = Math.round(
      (((Number(percent) * 100) / Number(total)) * 100) / Number(minVal)
    ).toFixed(0);
    if (parseInt(perc) > 100) {
      return 100;
    } else {
      return perc;
    }
  }
  getMaxCal(percent, total, minVal) {
    const perc: any = Math.round(
      (((Number(percent) * 100) / Number(total)) * 100) / Number(minVal)
    ).toFixed(0);
    if (parseInt(perc) > 100) {
      return 0;
    } else {
      return 100 - perc;
    }
  }

  async healthDieses(recommenedIn, event) {
    const popover = await this.popoverController.create({
      event,
      component: OptionsAnalysisComponent,
      componentProps: { recommendedIn: recommenedIn }
    });
    return await popover.present();
  }

  onBack(){
    this.router.navigate(["new-diet"]);
   
  }

  openCloseNutrients(type){
    if(type == "carbs"){
      this.showCarbsList = !this.showCarbsList;
      this.showFatsList = false;
      this.showProtienList = false;
    }else if(type == "fats"){
      this.showCarbsList = false;
      this.showFatsList = !this.showFatsList;
      this.showProtienList = false;
    }else if(type == "protien"){
      this.showCarbsList = false;
      this.showFatsList = false;
      this.showProtienList = !this.showProtienList;
    }
  }

  grabHealth(recommendedIn) {
    if (!recommendedIn && recommendedIn.length == 0) {
      return "";
    } else {
      let healthMessage = "";
      let items = [];
      recommendedIn.forEach(element => {
        if (element == 'H') {
          items.push("Hypertension");
        }
        if (element == 'T') {
          items.push("Thyroid");
        }
        if (element == 'S') {
          items.push("Sleeping disorder");
        }
        if (element == 'C') {
          items.push("Cholesterol");
        }
        if (element == 'A') {
          items.push("Acidity");
        }
        if (element == 'D') {
          items.push("Digestion");
        }
        if (element == 'Di') {
          items.push("Diabetes");
        }
        if (element == 'P') {
          items.push("Pcod");
        }
        if (element == 'B') {
          items.push("High BP");
        }
      });
      return items.join(", ")
    }
  }
}

