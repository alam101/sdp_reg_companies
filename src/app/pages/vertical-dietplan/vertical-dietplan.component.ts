import { AppService } from '../../home-service/app.service';
import { AppService as apservice} from 'src/app/services/app.service';
import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectorRef,
  AfterViewInit,
  ElementRef,
  Injectable,
  ErrorHandler
} from '@angular/core'; // ,ChangeDetectionStrategy, ChangeDetectorRef,AfterViewInit
import { UTILITIES } from '../../core/utility/utilities';
import { message, CONSTANTS, ProfileInfo, APIS } from '../../core/constants/constants';
import { Storage } from "@ionic/storage";
import { Router, ActivatedRoute } from '@angular/router';
import moment from "moment";
import { RecipeDayComponent } from '../../components/recipe-day/recipe-day.component';
declare var fitnessPlugin: any;
import {
  IonSlides,
  Platform,
  MenuController,
  ModalController,
  LoadingController,
  ToastController,
  AlertController,
  IonContent,
} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

declare var require: any;

import { HomeVerticalComponent } from '../../components/home-vertical/home-vertical.component';
import { DownloadPopupComponent } from '../../components/download-popup/download-popup.component';
import { Subject } from 'rxjs';
import { timeout } from 'rxjs/operators';


declare const RazorpayCheckout: any;
let counterSwipe: any = 0;
@Component({
  selector: 'app-vertical-dietplan',
  templateUrl: './vertical-dietplan.component.html',
  styleUrls: ['./vertical-dietplan.component.scss'],
  animations: [
    trigger('headerHidden', [
        state('true' , style({ opacity: 1 })), 
        state('false', style({ opacity: 0 })),
        transition('0 => 1', animate('.5s')),
        transition('1 => 0', animate('.9s'))
    ])
  ]
})
export class VerticalDietplanComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChild(ActivityGraphComponent) childActivityGraphComponent: ActivityGraphComponent;
  planDatedisplay:any;
  noNextDate = false;
  noPrevDate = true;
  profileData={};
  currentDateIndex = 0;
  @ViewChild("caloriesDeficitCanvas") private caloriesDeficitCanvas: ElementRef;
  @ViewChild("bottomSlide") private bottomSlide: IonSlides;
  @ViewChild("videoSlideWhySDP", { static: false }) videoSlideWhySDP: IonSlides;
  @ViewChild("videoSlide", { static: false }) videoSlide: IonSlides;
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;
  @ViewChild("resultSlide", { static: false }) resultSlide: IonSlides;

  allData: {
    Carbs: Number;
    Fat: Number;
    Fiber: Number;
    Protien: Number;
    totalCal: Number;
    targetCal: {};
    calConsumed: Number;
  };

  isChecked: boolean = true;
  difference="0";
  toggleButtons = [];
  isActiveDay="0";
  day=[];
  dayName=[];
  tempDietData:any;
  toggleButtonsNormal = [
    { "text": "Normal Plan", "isChecked": true, "color": "#01A3A4", plan: "weightLoss" },
    { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
  ];

  toggleButtonsFat = [
    { "text": "Tone Up", "isChecked": true, "color": "#FD980F", plan: CONSTANTS.selectedDietPlan },
    { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
  ];

  toggleButtonsMuscle = [
    { "text": "Muscle Building", "isChecked": true, "color": "#0B94C1", plan: CONSTANTS.selectedDietPlan },
    { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
  ];

  toggleButtonsImmunity = [
    { "text": "Immunity Plan", "isChecked": true, "color": "#FD9F33", plan: "immunity_booster" },
    { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
  ];

  toggleButtonsNormalDetox = [
    { "text": "Normal Plan", "isChecked": false, "color": "#01A3A4", plan: "weightLoss" },
    { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
  ];

  toggleButtonsImmunityDetox = [
    { "text": "Immunity Plan", "isChecked": false, "color": "#FD9F33", plan: "immunity_booster" },
    { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
  ];

  toggleButtonsCholesterol = [
    { "text": "Cholesterol Plan", "isChecked": true, "color": "#A31E79", plan: "cholesterol" },
    { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
  ];
  
  toggleButtonsCholesterolDetox = [
    { "text": "Cholesterol Plan", "isChecked": false, "color": "#A31E79", plan: "cholesterol" },
    { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
  ];

 

  slidePrev(){
    this.resultSlide.slidePrev();
  }
  streamVideoM:boolean=false;
  async streamVidM() {
    this.streamVideoM = true;
    console.log("tttt",this.streamVideoM);
  }
  closeVideoM(){
    this.streamVideoM = false;
  }

  gotoLink(){
    let url = 'https://manjariwellness.com/about-us/';
    this.iab.create(url, "_blank", "location=yes");
    
  }
  slideNext(){
    this.resultSlide.slideNext();
  }

  private months = [
    { ind: 1, month: "JAN" },
    { ind: 2, month: "FEB" },
    { ind: 3, month: "MAR" },
    { ind: 4, month: "APR" },
    { ind: 5, month: "MAY" },
    { ind: 6, month: "JUN" },
    { ind: 7, month: "JUL" },
    { ind: 8, month: "AUG" },
    { ind: 9, month: "SEP" },
    { ind: 10, month: "OCT" },
    { ind: 11, month: "NOV" },
    { ind: 12, month: "DEC" }
  ];
  isNotCordova = true;
  isPlanActiveForDiet = false; // lock and unlock icon
  isRandomLock = false;
  intervalIosCalories: any;
  appleHealthKitPermission: boolean = false;
  isIosDevice = this.utilities.isDeviceiOS();
  isAndroidDevice = this.utilities.isDeviceAndroid();
  intervalUserPlan: any;
  isDetox: boolean = CONSTANTS.isDetox;
  detoxToggle: boolean = false;
  healthProblem: boolean = false;
  user: any;
  caloriesDeficitChart: any;
  deficit: any = 0;
  firstCofficient = 0;
  secondCofficient = 0;
  showDeficitGraph = true;
  profile: any;
  freeTrialPeriod: any;
  freeTrialInterval: any;
  weeks = [];
  dayValue: string = "";
  source: any;
  showSourceInfo = false;
  googleFitConfigure = true;
  googleFitConfigureCalories = false;
  isToday = true;
  subscription: any;
  waterPercentage = 0;
  consmedAtCurrentTime = 0;
  deficitToday = 0;
  deficitTodayPer = 0;
  deficitTotal = 500;
  swiper: any;
  dietTimings = [];
  defaultCircleFillColor = true;
  hasAnimation: any = 0;

  selectedCountry = "IND";
  isPullReferesh = false;
  // isTypeCovid = false;
  selectedDietPlan = "weightLoss";
  whoWeAreVideo;
  streamVideo = false;
  isTodayDietPlan = true;
  totalCaloriesPer;
  tolalCalories = 0;
  freeTrialEndDateDiff;
  countdownMins : any = "00"; 
  countdownSec : any = "00"; 
  countdownHours : any = "00";
  loadingMsgImgTime = 1000;
  loadingMsgTime = 4000;
  detoxMaxValue = 1000;
  checkSurveyInterval = 10 * 60 * 1000; // 10 mins

  toggleTodayCalCount = [
    { "text": "Counter", "isChecked": false, "color": "#01A3A4" },
    { "text": "Plan", "isChecked": true, "color": "#01A3A4" }
  ];
  slideOptsVideo = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: false,
    spaceBetween: 1
  };

  slideOptsTransformation = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: true,
    centeredSlides: false,
    spaceBetween: 1
  };
  whySDPIndex = 0;
  whySDPData = [];
  videoLandscape = false;
  isAnalysisPageVisited = false;

  slideOptsBottom = {
    initialSlide: 0,
    slidesPerView: 2.50,
    loop: false,
    centeredSlides: false,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 50,
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    on: {
      beforeInit() {
        this.swiper = this;
        this.swiper.on('slideChangeTransitionStart', function () {
          let $wrapperEl = this.swiper.$wrapperEl;
          let params = this.swiper.params;
          $wrapperEl.children(('.' + (params.slideClass) + '.' + (params.slideDuplicateClass)))
            .each(function () {
              let idx = this.getAttribute('data-swiper-slide-index');
              this.innerHTML = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + idx + '"]:not(.' + params.slideDuplicateClass + ')').html();
            });

        });
        this.swiper.on('slideChangeTransitionEnd', function () {
          this.swiper.slideToLoop(this.swiper.realIndex, 0, false);

        });
      }
    }
  };
  trackerInterval: any;
  isGoogleFitCaloryZero = false;
  currentPlan: any;
  fixScale = 1;
  isPinkText = false;
  loadAgain = false;
  lessThan100FoodItems = [];
  lessThan100FoodItemsAtTime = [];
  lessThan100FoodItemsCounter = 5;
  lessThan100FoodItemSlotSelected = 2;
  filteredLess100Food = {};
  highProteinFoodItems = [];
  highProteinFoodItemsAtTime = [];
  highProteinFoodItemsCounter = 5;
  highProteinFoodItemSlotSelected = 2;
  filteredHighProtein = {};
  healthyChoicesFoodItems = [];
  healthyChoicesFoodItemsAtTime = [];
  healthyChoicesFoodItemsCounter = 5;
  healthyChoicesFoodItemSlotSelected = 2;
  filteredHealthyChoices = {};

  // IOS inapp purchase keys
  productIDs = ['smart_diet_planner_monthly_app', 'smart_diet_planner_quarterly_app', 'smart_diet_planner_half_yearly_app', 'smart_diet_planner_yearly_app'];
  // refferProductIDs = ['6_Months_offer', 'one_year_referral', 'smart_diet_planner_monthly_app', 'smart_diet_planner_quarterly_app', 'smart_diet_planner_half_yearly_app', 'smart_diet_planner_yearly_app'];
  refferProductIDs = ['referral_6_months', 'one_year_referral', 'smart_diet_planner_monthly_app', 'smart_diet_planner_quarterly_app', 'smart_diet_planner_half_yearly_app', 'smart_diet_planner_yearly_app'];

  // Android inapp purchase keys
  androidProductIDs = ['smart_diet_planner_monthly', 'smart_diet_planner_quarterly', 'smart_diet_planner_half_yearly', 'smart_diet_planner_yearly'];
  refferAndroidProductIDs = ['referral_6_months','yearly_offer_referral', 'smart_diet_planner_monthly', 'smart_diet_planner_quarterly', 'smart_diet_planner_half_yearly', 'smart_diet_planner_yearly'];

  // Gauge meter options
  canvasWidth = 150;
  needleValue= 50;
  centralLabel = '';
  readyForChange = true;
  options = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 1000,
    arcColors: ["#0BB852", "#FFF", "#8BC73C", "#FFF", "#FFAE00", "#FFF", "#FF791F", "#FFF", "#FF2441"],
    arcDelimiters: [14, 15, 29, 30, 49, 50, 74, 75],
    needleStartValue: 0,
  }

  onFasting: boolean = false;
  fastingData;
  fastingStartTme;
  fastingEndTme;
  fastingDuration;
  fastStartCountdownIntrvl;
  fastingCountdownIntrvl;
  fastingCountdown = '00:00:00';
  isTimerRed = false;

  isWaterNotificationEnable: boolean = false
  isFastingNotificationEnable: boolean = false

  insertItemInArrayOnSpecificIndex = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
  ]

  tipMsgInterval;
  tipMessage = [
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Hi, I am your personal health coach !</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Today\'s  personalised  <b>Diet plan</b>  is ready</span>',
    // '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    // '<span class="two-lines-noti-msg"> <span class="custom-link-color" clickId="Activate">Activate</span> your Google Fit to keep track of your steps and calories burnt.</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">I suggest 12 glasses of water for you!  <span class="custom-link-color" clickId="Track Water">Start tracking.</span></span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Fast for 14 hrs to improve metabolism. <span class="custom-link-color" clickId="Track Fast">Use tracker !</span></span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="single-line-noti-msg-center"><span class="custom-link-color" clickId="CheckAnalysis">Click to view </span>Diet plan analysis</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<ng-container><span>Click tick in the diet plan <ion-icon name="checkmark-circle-outline" class="get-remove-icon-msg"></ion-icon> to add the calories in calorie counter</span></ng-container>'
  ];

  tipMessageafterReg = [
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Improve health, focus on food items marked <span style="color: #38A534">Green</span> in diet options.</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Don’t forget to keep track of your 12 glasses of water intake. <span class="custom-link-color" clickId="Add Water">Add here.</span></span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="two-lines-noti-msg">Make sure you fast for 14 hours today! <span class="custom-link-color" clickId="Track Fast">Keep track</span> of it!</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<span class="single-line-noti-msg-center"><span class="custom-link-color" clickId="CheckAnalysis">Click to view </span> Diet plan analysis</span>',
    '<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>',
    '<ng-container><span>Click tick in the diet plan <ion-icon name="checkmark-circle-outline" class="get-remove-icon-msg"></ion-icon> to add the calories in calorie counter</span></ng-container>'
  ];
  activeTip;
  tipTimeout;
  holdeIndex=[];
  private recipeDayComponent: RecipeDayComponent;
  private homeVertical: HomeVerticalComponent;
  activeSlotIndex = 0;
  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private menuController: MenuController,
    // private health: Health,
    private cdr: ChangeDetectorRef,
    private modalController: ModalController,
    private loadingController: LoadingController,
    public toastController: ToastController,
    private el: ElementRef,
    // private localNotifications: LocalNotifications,
    private _sanitizer: DomSanitizer,
    // private market: Market,
    // private push: Push,
    // private inApp: InAppService,
    // private iap: InAppPurchase,
    private alertCtrl: AlertController,
    private iab: InAppBrowser,
    // private http: HTTP,
    private cd: ChangeDetectorRef,
    // private diagnostic: Diagnostic,
    // private winRef: WindowRefService,
    private appServices: AppService,
    private appser:apservice,
    private route: ActivatedRoute,
    // private device: Device,
    // public statusBar: StatusBar,
    // private firebaseX:FirebaseX,
    // private iap2: InAppPurchase2
  ) {
    if(localStorage.getItem("userid")!="" || localStorage.getItem("userid")!="null"){
    CONSTANTS.email = localStorage.getItem("userid");
    }
    else{
      this.router.navigate(['/tabs/admin']);
    }
    this.storage.set("dietData",{...this.tempDietData});
       this.route.queryParams.subscribe(res=>{
         this.activeSlotIndex = Number(res.params);
         console.log("res.theme",res.theme);
         
       //  this.selectedThemeColor = res.theme;
       })
    var firstDay = new Date();
    let dy;
    for (let index = 0; index < 7; index++) {
     dy = new Date(firstDay.getTime() + index * 24 * 60 * 60 * 1000).toString().split(' ');
     this.day.push(dy[2].length===1?"0"+dy[2]:dy[2]);
     this.dayName.push(dy[0]);
     this.isActiveDay = Number(new Date().getDate()).toString().length===1?"0"+Number(new Date().getDate()):Number(new Date().getDate()).toString();
     this.holdeIndex.push(index);

   
    }
    CONSTANTS.dietDate = this.weeks[0];
  
    
   

    console.log("this.day",this.day);
    
  
    let me = this;
    // this.recipeDayComponent = new RecipeDayComponent(this.storage, appService, router, route, _sanitizer, utilities);
    this.profilePic = ProfileInfo.profilePic;
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.isNotCordova = false;
      }
      else {
        this.isNotCordova = true;
      }

     // this.checkPushPermission("local", null);
    });
    this.appService.offerIcon$.subscribe(() => {
      this.manageCouponCounter();
    });

    this.appService.nutriScorePayment$.subscribe(() => {
     // this.paymentSubscribeModel('nutri diet plan');
    });

    this.appService.mainPageScrollTop$.subscribe(() => {
      let self = this;
      setTimeout(() => {
        self.ionContent.scrollToTop(500);
      }, 100);
    });

    this.appService.paymentDone$.subscribe(() => {
      this.startCelebration();
      this.dataOnInIt();
    });

    this.appService.navigateToLunchSlot$.subscribe(() => {
      let self = this;
      self.slides.slideTo(4,200);
      setTimeout(() => {
        self.ionContent.scrollToTop(500);
      }, 100);
    });

    this.appService.goToDetoxPlan$.subscribe(() => {
      this.selectedDietPlan = CONSTANTS.selectedDietPlan;
      this.detoxConfirmation();
    });

    this.appService.goToAnalysis$.subscribe(() => {
      let self = this;
      //self.utilities.showLoading();
      setTimeout(() => {
        self.analysis();
      }, 100);
    });

    this.appService.goToPersonalDiet$.subscribe(() => {
      let self = this;
      setTimeout(() => {
        self.gotoEditPersonalPlan();
      }, 100);
    });

    this.appService.goToDoSection$.subscribe(() => {
      let self = this;
      setTimeout(() => {
        let yOffset = document.getElementById("toDoSection").offsetTop;
        self.ionContent.scrollToPoint(0, yOffset + 250, 2000);
      }, 100);
      
    });

    if(CONSTANTS.isTestEnv) alert("You are in test environment");

    setInterval(()=>{
      this.needleValue = Math.floor(Math.random() * 100);
    }, 2000);
   
  this.allData = {
    Carbs: 0,
    Fat: 0,
    Fiber: 0,
    Protien: 0,
    totalCal: 0,
    targetCal: {},
    calConsumed: 0,
  };
  }



  nextDateNew() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index + 1;
      if (index < 6) {
        this.noNextDate = false;
        this.dateSlides.slideTo(index + 1, 200);
        localStorage.setItem("firstday",JSON.stringify(this.weeks[index+1]));
         this.dateChanged(this.weeks[index + 1])
      } else {
        this.noNextDate = true;
      }
    })
  }

  prevDateNew() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index - 1;
      
      if (index > 0) {
        this.noPrevDate = false;
        this.dateSlides.slideTo(index - 1, 200);
        localStorage.setItem("firstday",JSON.stringify(this.weeks[index-1]));
         this.dateChanged(this.weeks[index - 1])
      } else {
        this.noPrevDate = true;
      }
    })
  }

  getProfile(){
    this.appService.getProfile().then(
      profileData => {
        console.log("profileData",profileData);
        this.profileData = profileData;
          this.storage.set("profileData", this.utilities.parseString(profileData));
          let userData = {
          email: profileData["profile"]["email"],
          firstName: profileData["profile"]["given_name"],
          id: profileData["profile"]["email"],
          lastName: profileData["profile"]["family_name"],
          name: profileData["profile"]["name"],
          photoUrl: null,
          provider: "mobile"
        };
        this.profileName = userData.firstName;
        this.profileInititals = userData.firstName.charAt(0).toUpperCase() + userData.lastName.charAt(0).toUpperCase();
        console.log("getprofile",JSON.stringify(userData));
        this.storage.set("newProfilePic", JSON.stringify(userData));
      });

   }
   profileInititals:string="";
  //AfterViewInit
  @ViewChild("slides1", { static: false }) slides: IonSlides;
  @ViewChild("slides2", { static: false }) dateSlides: IonSlides;
  @ViewChild("lessThan100FoodItem", { static: false }) lessThan100FoodItemsSlides: IonSlides;
  @ViewChild("highProteinFoodItem", { static: false }) highProteinFoodItemsSlides: IonSlides;
  @ViewChild("healthyChoicesFoodItem", { static: false }) healthyChoicesFoodItemsSlides: IonSlides;
  @ViewChild("healthyChoicesAvvoidInFoodItem", { static: false }) healthyChoicesAvvoidInFoodItemSlides: IonSlides;
  messageCal = {
    moreTarget: "Calories are more than target",
    lessTarget: "Calories are less than target",
    fixNutrients: "Fix nutrients proportion.",
    fixDistribution: "Fix calories distribution. Dinner be lightest.",
    caloriesAmountNutrients: "Fix calories amount and nutrients in plan",
    caloriesAmountDistribution: "Fix calories amount and distribtion.",
    both: "Diet plan is not good "
  };
  bar: any;
  weightGraphData: any = [{ startWeight: 0, currentWeight: 0 }];
  currenttip: any;
  drankwater: any = 0;
  recommendedwater: any;
  message: any;
  localalarmstatus: any = "";
  isMessageRed = false;
  ///
  isStrait: any = false;

  isExpired: any = false;
  isOpenMantraInfo: any = false;
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

  ///
  expiryDate: any;
  calory: any = "0";
  barPercent: any = [0, 0, 0];
  barPercent2: any = [0, 0, 0];
  calories: any = [];
  startEnd: any = [
    { date: "", weight: 0 },
    { date: "", weight: 0 }
  ];
  profileName = "";
  profilePic = "";
  habitList: any = [];
  refreshCounter: any = [];
  isUp: any = [];
  myPercent: any = "";
  habitsForUpdate: any = [];
  caloryAsPerPlan: any = [0, 0, 0];
  myInterval: any;
  deficitInterval: any;
  timerStorage: any = { dietPlan: [] };
  caloryDistri: any = [0, 0, 0, 0];
  showCouponIcon = false;
  showFreeTrialOfferIcon = false;
  amount: any = 0;
  couponCode: any = 0;
  poundValue = 0.453592;
  weightUnit = "kg";
  slideOptsResult = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pagination: false,
    centeredSlides: false,
    spaceBetween: 0,
    // autoplay:true
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      // renderBullet: function (index, className) {
      //   return this.customProgressBar(index, this.slides.length);
      // }
      // }
      renderCustom: (swiper, current, total) => {
        return this.customProgressBar(current, total);
      }
    }
  };
  slideOptsDate = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };

  slideOptsLessThan100FoodItem = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };

  slideOptsHighProteinFoodItem = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };

  slideOptsHealthyChoicesFoodItem = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };

  slideOptsHealthyChoicesAvoidInFoodItem = {
    initialSlide: 0,
    slidesPerView: 1.2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 1,
    pagination: false
  };

  videoClickWhySDP(id, data) {
    this.whoWeAreVideo = data;
    if(this.whySDPData[id]["mode"] == "l") this.videoLandscape = true;
    else this.videoLandscape = false;
    this.streamVideo = true;
  }

  whySDPSlideChanged(ev) {
    this.videoSlideWhySDP.getActiveIndex().then((index: number) => {
      if (ev.target.swiper.isEnd) {  // Added this code because getActiveIndex returns wrong index for last slide
        this.whySDPIndex = this.whySDPData.length - 1;
      }else{
        this.whySDPIndex = index;
      }
    })
  }

  headerHidden: boolean=true;
  scrollVal=0;
  onScroll(event) {
     
     localStorage.setItem("scrollVal",this.scrollVal+"");
     if (event.detail.scrollTop > 0) {
      this.scrollVal=event.detail.scrollTop;
     if(!this.headerHidden){
      this.headerHidden = true;
     }
    } 
    else if (event.detail.scrollTop ==0) {
      console.log("scrolling up, revealing footer...");
      if(this.headerHidden){
      this.headerHidden = false;
      }
    };
  };

  videoClick(){
    this.streamVideo = true;
  }

  closeVideo(){
    this.streamVideo = false;
  }

  manageCouponCounter() {
    let count = localStorage.getItem("couponCounter")
    let coutDownTimer = localStorage.getItem("offerTimeExpired");
    if (coutDownTimer && coutDownTimer == "true") {
      this.showCouponIcon = false;
    } else if (Number(count) >= 1 && coutDownTimer == "false") {
      this.showCouponIcon = true;
      this.countDown();
    } else {
      this.showCouponIcon = false;
    }
  }

  // manageCouponCounterstart(cb){
  //   localStorage.setItem("checkCounter", "true");
  //   // if(localStorage.getItem("isOpenOffer")){
  //   //   let offerOpend = parseInt(localStorage.getItem("isOpenOffer"));
  //   //   ++offerOpend
  //   //   localStorage.setItem("isOpenOffer", offerOpend+"");
  //   // }else{
  //   //   localStorage.setItem("isOpenOffer", "1");
  //   // }
  //   let plans = firebase.firestore().collection('randomLock').doc('yevyi1qgRcCN2crRA8ey');
  //   plans.get().then(snap => {
  //     const data = snap.data();
  //     if(data.freeTrialDays && data.freeTrialDays > 0){
  //       let coutDownTimer = localStorage.getItem("offerTimeExpired");
  //       if (!coutDownTimer) {
  //         let couponCounter = localStorage.getItem("couponCounter");
  //         if (!couponCounter) {
  //           localStorage.setItem("couponCounter", "1");
  //           let countDown = new Date(new Date(new Date()).getTime() + 60 * 60 * 2 * 1000); //this.isIOSDevice ? new Date(new Date(new Date()).getTime() + 60 * 30 * 1000) : new Date(new Date(new Date()).getTime() + 60 * 60 * 24 * 1000);
  //           // let countDown = new Date(new Date(new Date().setDate(new Date().getDate() + Number(data.freeTrialDays))).setHours(23, 59, 59, 0)); //new Date(new Date(new Date()).getTime() + 60 * 30 * 1000);
  //           localStorage.setItem("countDownTimer", countDown.toString());
  //           localStorage.setItem("offerTimeExpired", "false");
  //           this.showCouponIcon = true;
  //           this.countDown();
  //           this.appService.offerCountDown();
  //         }
  //         else {
  //           let count = Number(couponCounter)
  //           localStorage.setItem("couponCounter", (++count).toString());
  //           if (count == 1) {
  //             this.countDown();
  //             this.showCouponIcon = true;
  //           }
  //         }
  //       }
  //       cb();
  //     }else{
  //       cb();
  //     }
  //   })
  // }

 

  // getCouponDataConsumer() {
  //   let self = this;

  //   //self.utilities.showLoading();
  //   this.storage.get('profileData').then(val => {
  //     if (val != '') {
  //       let profileData = JSON.parse(val);
  //       console.log("profileData ALam",profileData);
        
  //       this.appService.getCouponListOffered().then(
  //         success => {
  //           // this.appService.getCurrentLocation().then(
  //           //   (location: any) => {
  //               let country = CONSTANTS.country == "IND" ? "IND" : "Non-IND";
  //               // location["country_code"] == "IN" ? "IND" : location["country_code"] == "US" ? "USA" :  location["country_code"] == "AU" ? "AUS" :  location["country_code"] == "CN" ? "CAN" : "IND";
  //               // let couponList = JSON.parse(JSON.stringify(success)).couponList.filter
  //               let couponList = JSON.parse(JSON.stringify(success)).couponList.filter((ele) => {
  //                 return ele.couponCode.indexOf("REF") == -1;
  //               });
  //               let data;
  //               if (self.isIosDevice) {
  //                 data = couponList.filter((ele) => {
  //                   return ele.couponCode == "special_offer_ios"
  //                 })
  //               } else {
  //                 data = couponList.filter((ele) => {
  //                   return ele.couponCode == "special_offer_android"
  //                 })
  //               }
  //               // self.isIosDevice ? couponList[0] : couponList[1];
  //               self.utilities.hideLoader();
  //               self.presentModalCousumePage(data[0], profileData.diet, country)
  //             // })
  //         },
  //         err => {
  //           self.utilities.hideLoader();
  //           console.log("errr", err);
  //         }
  //       )
  //     }
  //   })
  // }

  converDateForLead(date_ob){ 
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours().toString().length == 1 ? "0" + date_ob.getHours() : date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes().toString().length == 1 ? "0" + date_ob.getMinutes() : date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds().toString().length == 1 ? "0" + date_ob.getSeconds() : date_ob.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  }

  alreadyPurchased = false;
  // purchaseProduct(product) {
  //   let productAmount =  product.discountedAmount;
  //   this.storage.get("profileData").then((res) => {
  //     let profile = JSON.parse(res);
  //     this.storage.get("localData").then(val => {
  //       let localData = JSON.parse(val);
  //       let diseases = [];
  //       localData.otherMaster.diseases.forEach(item => {
  //         if (item.isSelected == true) diseases.push(item.code)
  //       });
  //       let obj = {
  //         "date": moment(new Date()).format("DDMMYYYY"),
  //         "name": profile["profile"]["name"],
  //         "age": profile["demographic"]["age"]["avg_age"],
  //         "currentWeight": profile["demographic"]["currentWeight"],
  //         "recommWeight": profile["demographic"]["suggestedWeight"],
  //         "registrationDate": this.converDateForLead(new Date(profile["profile"]["createdDateTime"])),
  //         "lifeStyleDisorder": diseases,
  //         "amount": product["amount"]
  //       }
  //       console.log("Generate lead: ", obj);
  //       this.appService.saveHotLeads(obj).then(() => {
  //         console.log("Lead saved");
  //       })
  //     })
  //   })
  //   let productId = product.productId;
  //   let period = product.period;
  //   let me = this;
  //   // me.utilities.showLoading();
  //   if(me.platform.is("android")){
  //     // New inapp purchase part
  //     me.platform.ready().then(() => {
  //       me.iap2.register({
  //         id: productId,
  //         type: me.iap2.PAID_SUBSCRIPTION,
  //       });

  //       me.iap2.order(productId);

  //       // Handle approved purchase.
  //       me.iap2.when(productId).approved(function (order) {
  //         let recipet = order.transaction; //JSON.parse(order.transaction.receipt);
  //         me.upldatePayment(recipet,period, productAmount);
  //         order.finish();
  //       });

  //       // me.iap2.refresh();
  //     })
  //   }else{
  //     // Old in app purchase code
  //     me.iap
  //     .getProducts([productId])
  //     .then((products) => {
  //       me.iap
  //         .subscribe(productId)
  //         .then((data) => {
  //           let transactionId = data.transactionId;
  //           me.utilities.hideLoader();
  //           // me.utilities.showLoading();
  //           if (me.isIosDevice) {
  //             let planData = {};
  //             // me.appService.getOnePlan().then(res => {
  //             me.storage.get("userPlanData").then(res => {
  //               planData = res;
  //               if (planData && planData["planExpiryDate"]) {
  //                 me.inApp.validateReceipt(data.receipt, me.user.uid, period, planData["planExpiryDate"]).then((res: any) => {
  //                   if (res.isPlanActive) {
  //                     // CONSTANTS.isPlanActiveParent = res.isPlanActive;
  //                     me.updateExpireDatePaid(productAmount, period, "iOS", transactionId, me.isPlanActiveUser);
  //                     me.utilities.logEvent("Payment_04Success", {});
  //                   } else {
  //                     // me.utilities.showLoading();
  //                     me.utilities.logEvent("Payment_05Failed", {});
  //                     me.utilities.presentAlert("Something went wrong. Contact to admin.");
  //                   }
  //                 }, err => {
  //                   me.utilities.hideLoader();
  //                   console.log(err);
  //                   // me.utilities.presentAlert(JSON.stringify(err));
  //                 });
  //               }
  //             })
  //           } else {
  //             // me.utilities.showLoading();                
  //           // me.utilities.showLoading();                
  //             // me.utilities.showLoading();                
  //             // alert("need backend api");
  //             let planData = {};
  //             // me.appService.getOnePlan().then(
  //             //   res => {
  //               me.storage.get("userPlanData").then(res => {
  //                 planData = res;
  //                 if (planData && planData["planExpiryDate"]) {
  //                   var _receipt = {
  //                     "packageName": JSON.parse(data.receipt).packageName,
  //                     "productId": JSON.parse(data.receipt).productId,
  //                     "purchaseToken": JSON.parse(data.receipt).purchaseToken,
  //                     "period": period,
  //                     "expDate": planData["planExpiryDate"]
  //                   }
  //                   me.inApp.validateGoogleReceipt(_receipt, me.user.uid).then((res: any) => {
  //                     me.updateExpireDatePaid(productAmount, period, "Android", transactionId, me.isPlanActiveUser);
  //                     me.utilities.logEvent("Payment_04Success", {});
  //                   }, err => {
  //                     me.utilities.logEvent("Payment_05Failed", {});
  //                     me.utilities.hideLoader();
  //                     console.log(err);
  //                     me.utilities.presentAlert(JSON.stringify(err));
  //                   });
  //                 }
  //               })
  //           }

  //           // {
  //           //   transactionId: ...
  //           //   receipt: ...
  //           //   signature: ...
  //           // }
  //         })
  //         .catch((err) => {
  //           me.utilities.hideLoader();
  //           console.log("Product Buy Error", JSON.stringify(err));
  //         });

  //     })
  //     .catch((err) => {
  //       this.utilities.hideLoader();
  //       console.log("Product Fetch Error", JSON.stringify(err));
  //     }); 
  //   }

   
  // }

  // upldatePayment(data, period, amount){
  //   let me = this;
  //   let transactionId = data.id;
  //   me.utilities.hideLoader();
  //   // me.utilities.showLoading();
  //   if (me.isIosDevice) {
  //     let planData = {};
  //     // me.appService.getOnePlan().then(res => {
  //     me.storage.get("userPlanData").then(res => {
  //       planData = res;
  //       if (planData && planData["planExpiryDate"]) {
  //         me.inApp.validateReceipt(data.receipt, me.user.uid, period, planData["planExpiryDate"]).then((res: any) => {
  //           if (res.isPlanActive) {
  //             // CONSTANTS.isPlanActiveParent = res.isPlanActive;
  //             me.updateExpireDatePaid(amount, period, "iOS", transactionId, me.isPlanActiveUser);
  //             me.utilities.logEvent("Payment_04Success", {});
  //           } else {
  //             // me.utilities.showLoading();
  //             me.utilities.logEvent("Payment_05Failed", {});
  //             me.utilities.presentAlert("Something went wrong. Contact to admin.");
  //           }
  //         }, err => {
  //           me.utilities.hideLoader();
  //           console.log(err);
  //           // me.utilities.presentAlert(JSON.stringify(err));
  //         });
  //       }
  //     })
  //   } else {
  //      let planData = {};
  //     // me.appService.getOnePlan().then(
  //     //   res => {
  //       me.storage.get("userPlanData").then(res => {
  //         planData = res;
  //         if (planData && planData["planExpiryDate"]) {
  //           var _receipt = {
  //             "packageName": JSON.parse(data.receipt).packageName,
  //             "productId": JSON.parse(data.receipt).productId,
  //             "purchaseToken": JSON.parse(data.receipt).purchaseToken,
  //             "period": period,
  //             "expDate": planData["planExpiryDate"]
  //           }
  //           me.inApp.validateGoogleReceipt(_receipt, me.user.uid).then((res: any) => {
  //             me.updateExpireDatePaid(amount, period, "Android", transactionId, me.isPlanActiveUser);
  //             me.utilities.logEvent("Payment_04Success", {});
  //           }, err => {
  //             me.utilities.logEvent("Payment_05Failed", {});
  //             me.utilities.hideLoader();
  //             console.log(err);
  //             me.utilities.presentAlert(JSON.stringify(err));
  //           });
  //         }
  //       })
  //   }
  // }

  // async paymentSubscribeModel(content) {
  //   let self = this;
  //   //self.utilities.showLoading();
  //   let count = localStorage.getItem("couponCounter")
  //   let coutDownTimer = localStorage.getItem("offerTimeExpired");
  //   if (Number(count) >= 1 && coutDownTimer == "false") {
  //     this.storage.get('profileData').then(val => {
  //       if (val != '') {
  //         this.appService.getCouponListOffered().then(
  //           success => {
  //             let couponList = JSON.parse(JSON.stringify(success)).couponList.filter((ele) => {
  //               return ele.couponCode.indexOf("REF") == -1;
  //             });
  //             let data;
  //             if (self.isIosDevice) {
  //               data = couponList.filter((ele) => {
  //                 return ele.couponCode == "special_offer_ios"
  //               })
  //             } else {
  //               data = couponList.filter((ele) => {
  //                 return ele.couponCode == "special_offer_android"
  //               })
  //             }
  //             // self.isIosDevice ? couponList[0] : couponList[1];
  //             self.utilities.hideLoader();
  //             data[0]["productId"] = self.isIosDevice ? "smart_diet_planner_yearly_offer_app" : self.isAndroidDevice ? "offer_sdp_6months" : "";
  //             self.showPaymentSubscribe(data[0], content)
  //           },
  //           err => {
  //             self.utilities.hideLoader();
  //             console.log("errr", err);
  //           }
  //         )
  //       }
  //     })
  //   }else{
  //     this.storage.get("puchase_plan").then(success => {
  //       if(success){
  //         let plans = JSON.parse(JSON.stringify(success)).couponList;
  //         console.log("Plan", plans);
  //         let plan = plans.filter(ele =>{
  //           return ele.perid == 6
  //         })[0];
  //         plan["productId"] = self.isIosDevice ? "smart_diet_planner_half_yearly_app" : self.isAndroidDevice ? "smart_diet_planner_half_yearly" : "";
  //         self.showPaymentSubscribe(plan, content);
  //       }
  //     },
  //       err => {
  //         // this.utilities.hideLoader();
  //         console.log('errr', err);
  //       }
  //     );
  //   }
  // }

  caloriesCheck = {
    caloriesPer: 0,
    isValid: false,
    points: 0,
    strokeColor: "#f70808",
    progressPer: "0",
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
  minCarbs;
  maxCarbs;
  minFats = 40;
  maxFats = 90;
  minProtein = 35;
  maxProtein = 90;
  minFiber = 25;
  maxFiber = 60;
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

  resetAllValues(cb){
    this.caloriesCheck = {
      caloriesPer: 0,
      isValid: false,
      points: 0,
      strokeColor: "#f70808",
      progressPer: "0",
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
    this.minCarbs = 0;
    this.maxCarbs = 0;
    this.minFats = 40;
    this.maxFats = 65;
    this.minProtein = 35;
    this.maxProtein = 60;
    this.minFiber = 25;
    this.maxFiber = 40;
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
    cb();
  }

  scoreColor = "#0F8E8E";
  totalScore = 0;
  callBackPlanPoints : any;
  timingPer = 0;
  getDietPlanScore(cb){
    this.resetAllValues(() => {
      this.timingPer = this.getPercentageCal((this.caloryAsPerPlan[1] + this.caloryAsPerPlan[0]), this.suggestedCalories.totalCalories, (this.caloriesDistribution[1].min + this.caloriesDistribution[0].min))
      this.minCarbs = Math.round((0.35 * this.suggestedCalories.totalCalories / 4));
      this.maxCarbs = Math.round((0.65 * this.suggestedCalories.totalCalories / 4));
      if (parseFloat(this.suggestedCalories.totalCalories) <= this.suggestedCalories.plus10) {
        this.caloriesCheck.points = 40;
      } else {
        let extraCalories = Math.round(((this.suggestedCalories.totalCalories - this.suggestedCalories.plus10) / this.suggestedCalories.plus10) * 100 / 5);
        if (extraCalories >= 4) {
          this.caloriesCheck.points = 0;
        } else if (extraCalories == 3) {
          this.caloriesCheck.points = 10;
        } else if (extraCalories == 2) {
          this.caloriesCheck.points = 20;
        } else if (extraCalories == 1) {
          this.caloriesCheck.points = 30;
        }
      }

      this.caloriesCheck.caloriesPer = (parseFloat(this.suggestedCalories.totalCalories) / parseFloat(this.suggestedCalories.recomended)) * 100;

      this.caloriesCheck.progressPer = Math.round((Math.PI * 2 * 22 * this.caloriesCheck.points) / 40) + "";
      this.caloriesCheck.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.caloriesCheck.points) / 40);


      let numOfMultiFaliure = 0;
      // if (this.suggestedCalories.totalCarbsPer >= 35 && this.suggestedCalories.totalCarbsPer <= 70) {
      if (this.suggestedCalories.totalCarbs >= this.minCarbs && this.suggestedCalories.totalCarbs <= this.maxCarbs) {
        this.nutrientsCheck.points = this.nutrientsCheck.points + 5;
      }

      // if (this.suggestedCalories.totalProtienPer >= 12 && this.suggestedCalories.totalProtienPer <= 30) {
      if (this.suggestedCalories.totalProtien >= this.minProtein && this.suggestedCalories.totalProtien <= this.maxProtein) {
        this.nutrientsCheck.points = this.nutrientsCheck.points + 5;
      }

      // if (this.suggestedCalories.totalFatPer >= 10 && this.suggestedCalories.totalFatPer <= 35) {
      // if (this.suggestedCalories.totalFat >= this.minFats && this.suggestedCalories.totalFat <= this.maxFats) {
      if (this.suggestedCalories.totalFat <= this.maxFats) {
        this.nutrientsCheck.points = this.nutrientsCheck.points + 5;
      }

      if (this.suggestedCalories.totalFiber >= this.minFiber && this.suggestedCalories.totalFiber <= this.maxFiber) {
        this.nutrientsCheck.points = this.nutrientsCheck.points + 5;
      }

      this.nutrientsCheck.progressPer = Math.round((Math.PI * 2 * 22 * this.nutrientsCheck.points) / 20);
      this.nutrientsCheck.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.nutrientsCheck.points) / 20);

      let numOfDistributionFaliure = 0;
      if ((this.caloryDistri[3] >= (this.caloriesDistribution[1].min + this.caloriesDistribution[0].min)) &&
        (this.caloryDistri[3] <= (this.caloriesDistribution[1].max + this.caloriesDistribution[0].max))) {
        this.distributionCheck.points = this.distributionCheck.points + 10;
      }

      if (
        this.caloryDistri[2] <= this.caloriesDistribution[2].max) {
        this.distributionCheck.points = this.distributionCheck.points + 10;
      }

      this.storage.get("diets").then(diets => {
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
          this.recommendedCheck.points = 10;
        } else if (totalRecommended >= 2) {//this.recommendedCheck.maxRecommended) {
          this.recommendedCheck.points = 20;
        }

        this.recommendedCheck.progressPer = Math.round((Math.PI * 2 * 22 * this.recommendedCheck.points) / 20);
        this.recommendedCheck.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.recommendedCheck.points) / 20);

        this.meal.morning = this.tConvert(this.diets.find(o => o.slot == 1).time);
        this.meal.night = this.diets.find(o => o.slot == 8).time ?
          this.tConvert(this.diets.find(o => o.slot == 8).time) :
          this.tConvert(this.diets.find(o => o.slot == 7).time);
        this.timeDiffernce(diets[1].time, diets[8].time ? diets[8].time : diets[7].time);
        let totalScore;
        if (!CONSTANTS.isDetox) {
          totalScore = ((this.caloriesCheck.points + this.nutrientsCheck.points +
            this.distributionCheck.points + this.recommendedCheck.points + this.meal.points) / 110 * 100);
        }
        else {
          totalScore = ((this.caloriesCheck.points +
            this.distributionCheck.points + this.recommendedCheck.points + this.meal.points) / 80 * 100)

        }
        this.totalScore = Math.floor(totalScore);
        console.log("Total Score :::  ", this.totalScore);
      });
    })
  }
newdiets:any;
 dietflag=1; 
getDietdata(date) {
 
  
  if(this.dietflag==1){
    console.log("getDietdata");
  this.allData = {
    Carbs: 0,
    Fat: 0,
    Fiber: 0,
    Protien: 0,
    totalCal: 0,
    targetCal: {},
    calConsumed: 0,
  };
  this.appServices
    .getDietPlans(
      this.isDetox,
      date,
      CONSTANTS.country,
      CONSTANTS.defaultCalories
    )
    .then((res) => {
      this.newdiets = res;
      console.log(this.diets);
      this.allData.targetCal = res;
      this.newdiets.diets.forEach((ele) => {
        ele.data.forEach((element) => {
          if (element.eaten > 0) {
            this.allData.totalCal = Math.ceil(
              Number(this.allData.totalCal + element.Calories)
            );
            this.allData.Carbs = Math.ceil(
              Number(this.allData.Carbs + element.Carbs)
            );
            this.allData.Fat = Math.ceil(
              Number(this.allData.Fat + element.Fat)
            );
            this.allData.Fiber = Math.ceil(
              Number(this.allData.Fiber + element.Fiber)
            );
            this.allData.Protien = Math.ceil(
              Number(this.allData.Protien + element.Protien)
            );
          }
          this.cdr.detectChanges();  
        });
       
      });
     
    });
    this.dietflag=2;
  }

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

  isPlanActiveUser = false;
  
  customProgressBar(current: number, total: number): string {

  
    let progressBarContainer: string = "<div><div style='display: inline-block; height: 15px; width: 15px; background: #01A3A4; border-radius: 100%;'></div>";
    let spaceSpan = "<div style='display: inline-block; height: 10px; width: 10px; background: #F6F7FC;'></div>";
    let yetToNavigateBullet = "<div style='display: inline-block; height: 15px; width: 15px; background: #DDDDDD; border-radius: 100%;'></div>"
    let navigatedBullet = "<div style='display: inline-block; height: 15px; width: 15px; background: #01A3A4; border-radius: 100%;'></div>";

    // let progressBarContainer: string = "<div><div class='custom-bullet active-custom-bullet'></div>";
    // let spaceSpan = "<div class='custom-bullet-space'></div>";
    // let yetToNavigateBullet = "<div class='custom-bullet'></div>"
    // let navigatedBullet = "<div class='custom-bullet active-custom-bullet'></div>";

    for (let i = 1; i < total; i++) {
      if (current > i) {
        progressBarContainer += spaceSpan + navigatedBullet;
      } else
        progressBarContainer += spaceSpan + yetToNavigateBullet;
    }

    progressBarContainer += '</div>';

    return progressBarContainer;
  }
  type = [{ index: 0, type: "When you wake-up" }];

  foodType = [];
  localData = { otherMaster: { suggestedPlan: [], dietPlan: [] } };
  dataPlan: any = { dishes: [], drinks: [] };
  diets: any = [];
  currentDayDiets: any = [];
  myVar: any;
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
    minus1010: 0
  };
  isWaterAnimation: any = 0;

  //Fasting -- alam
  fastingMessage = "";
  fastingShortMessage = "";
  fastingStartTime = "";
  fastingEndTime = "";
  differnceTime = "";
  percentageFastingMeal = 0;
  time: number = 15;
  fastEndCountDown;
  fastBeginCountDown;
  interval;
  isOpenMealInfo: any = false;
  sumrizeList = [];
  habitListAll = [];

  noofdays: any = 0;

  tempExpiryDay: any = 0;
  tempCurrentDay: any = 0;
  isPlanActive: any = false;

  habitCheck: any = [];

  isActiveButton = 0;
  isDistributionActiveButton = 0;
  weightCollaps = true;

  waterClick() {
    if(this.currentDateIndex == 0){
      this.router.navigate(["water-guage"], {
        queryParams: {
          drankwater: this.drankwater,
          recommendedwater: this.recommendedwater,
          waterPercentage: this.waterPercentage
        }
      });
    } else{
    //  this.utilities.showErrorToast("You can't check Water Tracker for future date");
    }
  }

  fastingClick() {
    // if (!this.isPlanActiveForDiet && !this.isRandomLock) {
    //   this.paymentSubscribeModel('fasting');
    // }else{
      if(this.currentDateIndex == 0){
        this.router.navigate(["meal-guage"])
      } else{
      //  this.utilities.showErrorToast("You can't check Fasting Tracker for future date");
      }
    // }
  }

  weightClick() {
    if (!this.isPlanActiveForDiet && !this.isRandomLock) {
    //  this.paymentSubscribeModel('weightloss');
    }else{
      this.router.navigate(["weight-guage"])
    }
  }

  // openStore() {
  //   this.platform.ready().then(() => {
  //     if (this.platform.is('android')) {
  //       console.log('android platform');
  //       this.market.open('com.google.android.apps.fitness');
  //     } else if (this.platform.is('ios')) {
  //       this.market.open('com.google.ios.apps.fitness');
  //       console.log('ios platform');
  //     }
  //     else {
  //       this.showBtnsBlk = false;
  //     }
  //   })
  // }

  getMealHour() {
    // if (parseInt(this.meal.difference) >= 14) {
    if (parseFloat(this.meal.difference) > 13.5) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is awesome`;
      this.meal.isValid = true;
      this.meal.points += 10;
    } else if (parseFloat(this.meal.difference) <= 13.5 && parseFloat(this.meal.difference) >= 12) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is good, recommended 14 hours`;
      this.meal.isValid = true;
      this.meal.points += 5;
    } else if (parseFloat(this.meal.difference) < 12) {
      this.meal.message = `Your fasting duration is ${this.meal.difference} Hrs which is not good, recommended 14 hours`;
      this.meal.isValid = false;
      this.meal.points = 0;

    }

    this.meal.progressPer = Math.round((Math.PI * 2 * 22 * this.meal.points) / 20);
    this.meal.totalProgressPer = Math.round((Math.PI * 2 * 22 * 1)) - Math.round((Math.PI * 2 * 22 * this.meal.points) / 20);
  }

  intervalPercent: any;
  minTime: any;
  maxTime: any;
  hourValues: any;
  mealType;
  differenceHours;
  timeDiffernce(firstDateTime, SecondDateTime) {
    console.log("breakFast", firstDateTime);
    console.log("dinner", SecondDateTime);
    this.percentageFastingMeal = 0;
    let currentTime = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes()
    );
    this.fastingStartTime = firstDateTime;

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
    clearInterval(this.intervalPercent);
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
    console.log("difference:-", startDate.getTime() - currentTime.getTime());
    if (currentTime.getTime() > startDate.getTime() && currentTime.getTime() < endDate.getTime()) {
      this.fastingMessage = "FASTING";//"MEAL TIME";
      this.fastingShortMessage = "FASTING";//"MEAL TIME";
      this.minTime = "6:00";
      this.maxTime = "11:00";
      this.hourValues = ['6', '7', '8', '9', '10', '11'];
      this.fastingEndTime = SecondDateTime;
      this.fastingStartTime = firstDateTime;
      let totalDurationMeal = (endDate.getTime() - startDate.getTime());
      // tslint:disable-next-line: max-line-length
      // this.intervalPercent = setInterval(() => {
      //   // this.percentageFastingMeal = Math.floor(100 - ((totalDurationMeal - (currentTime.getTime() - startDate.getTime())) * 100 / totalDurationMeal));
      //   this.percentageFastingMeal = Math.floor(100 - ((this.fastingDuration - (currentTime.getTime() - startDate.getTime())) * 100 / this.fastingDuration));
      // }, 1000);
      console.log("this.percentageFastingMeal", this.percentageFastingMeal);
      let sec_num = ((endDate.getTime() - startDate.getTime()) / 1000);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      this.differnceTime = hours + (minutes == 0 ? '' : ':' + minutes);
      this.value = this.differnceTime;
      this.mealType = "mealtime";
      this.differenceHours = this.differnceTime;
      localStorage.setItem("differenceHours",this.differenceHours);
      localStorage.setItem("mealType",this.mealType);
      this.startTimer((totalDurationMeal - (endDate.getTime() - currentTime.getTime())) / 1000);
    }
    else {
      this.fastingEndTime = firstDateTime;
      this.fastingStartTime = SecondDateTime;
      this.fastingMessage = "FASTING";
      this.fastingShortMessage = "FASTING";
      this.minTime = "18";
      this.maxTime = "23";
      this.hourValues = ['18', '19', '20', '21', '22', '23'];
      let totalDuration1 = (startDateForward.getTime() - endDate.getTime());
      let totalDuration2 = (startDate.getTime() - endDatePrevious.getTime());

      // this.intervalPercent = setInterval(() => {
      //   if (new Date().getHours() > 12) {
      //     this.percentageFastingMeal = Math.floor((totalDuration1 - (startDateForward.getTime() - currentTime.getTime())) * 100 / totalDuration1);
      //   }
      //   else {
      //     this.percentageFastingMeal = Math.floor((totalDuration2 - (startDate.getTime() - currentTime.getTime())) * 100 / totalDuration2);
      //   }

      // }, 1000);
      if (new Date().getHours() > 12) {
        let sec_num = ((startDateForward.getTime() - endDate.getTime()) / 1000);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - hours * 3600) / 60);
        this.differnceTime = hours + (minutes == 0 ? '' : ':' + minutes);
        this.mealType = "fastinngtime";
        this.differenceHours = this.differnceTime;
        localStorage.setItem("differenceHours",this.differenceHours);
        localStorage.setItem("mealType",this.mealType);
        this.value = this.differnceTime;
        this.startTimer((totalDuration1 - (startDateForward.getTime() - currentTime.getTime())) / 1000);
      }
      else {
        let sec_num = ((startDate.getTime() - endDatePrevious.getTime()) / 1000);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - hours * 3600) / 60);
        this.differnceTime = hours + (minutes == 0 ? '' : ':' + minutes);
        this.value = this.differnceTime;

        this.startTimer((totalDuration2 - (startDate.getTime() - currentTime.getTime())) / 1000);

      }
    }
    /* this.storage.get("fastingTime").then((fasting) => {
       let data = JSON.parse(fasting);
       if (fasting != null && fasting != undefined) {
         this.fastingStartTime = data.startTime;
         this.value = data.hours;
         this.fillDefault(this.fastingStartTime, this.value);
 
       }
     });
     */

  }

  updateFastingGauge() {
    this.onFasting = (localStorage.getItem("onFast") === 'true');
    this.fastingDuration = Number(localStorage.getItem("fastDuration")) || 12;

    if (this.onFasting) {
      this.fastingData = localStorage.getItem("fastStartTime");
      this.setFastingHours();
    }
  }

  setFastingHours() {
    this.fastingStartTme = this.fastingData ? moment(this.fastingData) : moment(this.meal.night, 'hh:mm a');
    this.fastingEndTme = moment(this.fastingStartTme).add(this.fastingDuration, "hours");
    this.updateFastingCountDown();
  }

  updateFastingCountDown() {
    const currentTme = new Date().getTime();
    const startTime = new Date(this.fastingStartTme).getTime();
    let timeDiff = Math.floor((currentTme - startTime) / 1000);

    clearInterval(this.fastingCountdownIntrvl);
    this.fastingCountdownIntrvl = setInterval(() => { 
      timeDiff++;
      this.fastingCountdown = this.transform(timeDiff);
      this.percentageFastingMeal = (Math.floor((100 * timeDiff) / (3600 * this.fastingDuration)));
      if(this.percentageFastingMeal > 100 ){
        this.isTimerRed = true;
      }
      if(!this.onFasting){
        this.resetFastingGauge();
      }
    }, 1000);
  }

  resetFastingGauge(){
    this.isTimerRed = false;
    this.percentageFastingMeal = 0;
    this.fastingCountdown = "00:00:00";
    clearInterval(this.fastingCountdownIntrvl);
  }

  // async openFastingPopup() {
  //   // if (CONSTANTS.isPlanActiveParent) {
  //     const modal = await this.modalController.create({
  //       component: FastingAlarmPopupComponent,
  //       backdropDismiss: true,
  //       cssClass: 'app-offer-popup',
  //       componentProps: { "onFast": this.onFasting, "fastDuration": this.fastingDuration }
  //     });
  //     modal.onDidDismiss().then((data: any) => {
  //       if (data.data) {
  //         this.onFasting = data.data.onFast;
  //         if (this.onFasting) {
  //           this.fastingData = new Date(data.data.startTime).toISOString();
  //           this.setFastingHours();
  //         } else {
  //           this.resetFastingGauge();
  //         }
  //       }
  //     })
  //     return await modal.present();
  //   // }else{
  //   //   this.fastingClick()
  //   // }
  // }

  fillDefault(startTime, hours) {
    this.fastingStartTime = startTime;
    let startTimeFirstPart = parseInt(startTime.split(':')[0]);
    let startTimeSecondPart = parseInt(startTime.split(':')[1]);
    let hrsFirstPart = parseInt(hours.split(':')[0]);
    let hrsSeondPart = isNaN(parseInt(hours.split(':')[1])) ? '' : parseInt(hours.split(':')[1]);

    this.fastingEndTime = (startTimeFirstPart + hrsFirstPart) + ":" + startTimeSecondPart + hrsSeondPart;
    if (parseInt(this.fastingEndTime.split(':')[0]) > 24) {
      this.fastingEndTime = parseInt(this.fastingEndTime.split(':')[0]) - 24 + ':' + this.fastingEndTime.split(':')[1];
    }

  }

  changeStarttime(event) {
    this.fastingStartTime = event.detail.value;
    let startTimeFirstPart = parseInt(event.detail.value.split(':')[0]);
    let startTimeSecondPart = parseInt(event.detail.value.split(':')[1]);
    let hrsFirstPart = parseInt(this.value.split(':')[0]);
    let hrsSeondPart = isNaN(parseInt(this.value.split(':')[1])) ? 0 : parseInt(this.value.split(':')[1]);

    this.fastingEndTime = (startTimeFirstPart + hrsFirstPart) + ":" + (startTimeSecondPart + hrsSeondPart);
    if (parseInt(this.fastingEndTime.split(':')[0]) > 24) {
      this.fastingEndTime = parseInt(this.fastingEndTime.split(':')[0]) - 24 + ':' + this.fastingEndTime.split(':')[1];
    }
    let fisting = {
      startTime: this.fastingStartTime,
      hours: this.value
    }
    this.storage.set("fastingTime", JSON.stringify(fisting));
  }
  value: string = "";
  selectedDuration() {
    let startTimeFirstPart = parseInt(this.fastingStartTime.split(':')[0]);
    let startTimeSecondPart = parseInt(this.fastingStartTime.split(':')[1]);
    let hrsFirstPart = parseInt(this.value.split(':')[0]);
    let hrsSeondPart = isNaN(parseInt(this.value.split(':')[1])) ? 0 : parseInt(this.value.split(':')[1]);

    this.fastingEndTime = (startTimeFirstPart + hrsFirstPart) + ":" + (startTimeSecondPart + hrsSeondPart);
    if (parseInt(this.fastingEndTime.split(':')[0]) > 24) {
      this.fastingEndTime = parseInt(this.fastingEndTime.split(':')[0]) - 24 + ':' + this.fastingEndTime.split(':')[1];
    }
    let fisting = {
      startTime: this.fastingStartTime,
      hours: this.value
    }
    this.storage.set("fastingTime", JSON.stringify(fisting));
  }

  startTimer(time) {
    this.time = time;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.time === 0) {
        clearInterval(this.interval);
      } else {
        this.time++;
      }
      this.fastEndCountDown = this.transform(this.time);
    }, 1000);
  }

  fastingHours = 0;
  transform(value: number): string {
    var sec_num = value;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    this.fastingHours = hours;
    return (
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


  
  isSkel=true;
  ngAfterViewInit() { 
  // CONSTANTS.dietDate = moment(this.sele).format("DDMMYYYY");
  console.log("date: ",CONSTANTS.dietDate);
     if(localStorage.getItem("firstday")!=""){
     let  firstDay = JSON.parse(localStorage.getItem("firstday"));
       const newDateF = firstDay?.formatDate;
       const newdt = this.weeks.filter(item=>{
          return newDateF===item.formatDate;
        })
        console.log("firstDay1",newdt);
        this.dateSlides.slideTo(newdt[0]?.index, 200);
     this.dateChanged(JSON.parse(localStorage.getItem("firstday")));
     }
     else{
       localStorage.setItem("firstday",JSON.stringify(this.weeks[0]));
     this.dateChanged(JSON.parse(localStorage.getItem("firstday")));
     }
   // this.getDietdata(CONSTANTS.dietDate);
    this.toggle();

    setTimeout(()=>{
      this.isSkel=false;
    },1000);
  }

  bindSlotFromLocal() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log("Time", t);
    const hoursMint = t.split(":");
    console.log("diet navaid:-", this.timerStorage.dietPlan.diets);
  
   }
 
  habitInfoClick() {
    console.log("true");

    this.isOpenMealInfo = true;
  }

  infoClick() {
    this.isOpenMantraInfo = true;
  }

  dismiss() {
    this.isOpenMantraInfo = false;
    this.isOpenMealInfo = false;
  }

  dismissSource() {
    this.showSourceInfo = false;
    this.dietChoices = false;
  }

  

  totalTodaysCalories = 0;
  totalTodaysCaloriesPerc = 0;
  overCalories = false;
  callTotalCounter(eve){
    console.log("eve::-",eve);
    
    this. todaysCalCount();
  }
  totalTodayscalNew=0;
  kCounterData(event){
    this.totalTodayscalNew =event.totalTodaysCalories;
  }
  totalconsumedPNew=0;
  isloaded=true;
  tempSub= new Subject();
  consumedProteinData(event){
    console.log("consumedProteinData",event);
    
    this.totalconsumedPNew =event.consumedP; 
    this.tempSub.next();
    }
  todaysCalCount(){
    // this.totalTodaysCalories = 0;
    let totalTodaysCalories = 0;
    this.storage.get("dietData").then((res)=>{
      let dietPlan = CONSTANTS.isDetox ? 'detox' : CONSTANTS.selectedDietPlan;
      if(res && res[moment(new Date()).format("DDMMYYYY")] && res[moment(new Date()).format("DDMMYYYY")][dietPlan]){
        let dietData = res[moment(new Date()).format("DDMMYYYY")][dietPlan];
        dietData.diets.forEach((ele) =>{
          let slotCalories = 0;
          ele.data.forEach((ele1) =>{
            if(ele1.eaten > 0){
              totalTodaysCalories = totalTodaysCalories + ele1["Calories"];
            }
          });
        });
       // this.totalTodaysCalories = Math.round(totalTodaysCalories);
        this.totalTodaysCaloriesPerc = Math.round((totalTodaysCalories * 100) /dietData["recomended"]);
        this.totalCaloriesPer = dietData["totalCaloriesPer"];
        this.tolalCalories = dietData["tolalCalories"];
      }
    })
  }
  
  goToTodaysCaloriesCounter(flag){
    if(this.currentDateIndex == 0){
      if(flag){
       this.utilities.logEvent("onboarding_Counter_click_header", {});
      }else{
        this.utilities.logEvent("onboarding_Counter_click_tracker", {});
      }
      this.router.navigate(['todays-calorie-count'],{queryParams:{params:'v',prm:this.activeSlotIndex}});
    } else{
    //  this.utilities.showErrorToast("You can't check KCal counter for future date");
    }
  }

  
  goToProtienTracker(){
    if(this.currentDateIndex == 0){
      this.router.navigate(['protien-tracker']);
    } else{
    //  this.utilities.showErrorToast("You can't check Protein Tracker for future date");
    }
  }

  totalProtien = 0;
  protienConsumed = 0;
  showProtienTracker = false;
  // checkingProtinTracker = true;
  protienConsumedPer = 0;
  getConsumedProtien(){
    this.storage.get("profileData").then(val => {
      let profile = this.utilities.parseJSON(val);
      console.log("ZprofileData:-", profile);

      let averageProtein = profile["lifeStyle"]["protien"];
      this.totalProtien = 0;
      this.protienConsumed = 0;
      let diet = [];
      if(this.diets.diets!=undefined){
      this.diets.diets.forEach((ele) =>{
        diet = [...diet , ...ele["data"]];
      });
    }
    else{
      this.diets.forEach((ele) =>{
        diet = [...diet , ...ele["data"]];
      });
    }
      diet.forEach((ele) =>{
        this.totalProtien = this.roundingVal(this.totalProtien + ele.Protien);
        if(ele.eaten == 2) this.protienConsumed = this.roundingVal(this.protienConsumed + ele.Protien);
      });
      this.protienConsumedPer = this.roundUpvalue((this.protienConsumed * 100) / parseFloat(averageProtein));
    })
    
  }

  slotDiet:any=[];
  setDiet(success, isDetox, date) {
   
    let data = this.utilities.parseJSON(
      this.utilities.parseString(success)
    );
    this.timerStorage.dietPlan = data;
    console.log("log Diet:- ", data);
    this.calories = { calories: data.recomended };
    this.diets = data.diets;
    this.slotDiet =  this.diets.slice(this.activeSlotIndex,this.activeSlotIndex+1);
     if (!localStorage.getItem("loadHighProtienData")) {
      localStorage.setItem("loadHighProtienData", new Date().toString());
      this.highProteinSlots();
    } else if (this.firstDateIsPastDayComparedToSecond(new Date(localStorage.getItem("loadHighProtienData")), new Date())) {
      localStorage.setItem("loadHighProtienData", new Date().toString());
      this.highProteinSlots();
     
    }
    
    if (this.dietTimings) {
      this.dietTimings.forEach(element => {
        if (element.slot == 0) {
          this.diets[0].time = element.time;
        }
        if (element.slot == 1) {
          this.diets[1].time = element.time;
        }
        if (element.slot == 2) {
          this.diets[2].time = element.time;
        }
        if (element.slot == 3) {
          this.diets[3].time = element.time;
        }
        if (element.slot == 4) {
          this.diets[4].time = element.time;
        }
        if (element.slot == 5) {
          this.diets[5].time = element.time;
        }
        if (element.slot == 6) {
          this.diets[6].time = element.time;
        }
        if (element.slot == 7) {
          this.diets[7].time = element.time;
        }
      });
    }
    if (!date) {
      date = this.weeks[0].formatDate;
    }
    let findRec = this.weeks.find(o => o.formatDate == date);
    if (moment().format("MM/DD/YYYY") == moment(findRec.date).format("MM/DD/YYYY")) {
      this.currentDayDiets = this.diets;
      // current time
      let consumed = 0;
      this.currentDayDiets.filter(o => o.time).forEach(element => {
        let time = parseInt(element.time.split(":")[0]);
        if ((moment().hour() + (moment().minute() / 60))
          >= time
        ) {
          consumed = consumed + parseInt(element.totalCalories);
        }
      });
      this.consmedAtCurrentTime = consumed;
    }
    // if(localStorage.getItem("startActivity") || this.isIosDevice) {
    //   this.testGoogleFit();
    //   this.startActivityTracking();
    // }

    this.storage.set("diets", this.diets);
   
    // const random = Math.floor(Math.random() * this.diets.length);
    // this.recipeData = this.diets[random];
    this.isTodayDietPlan = CONSTANTS.dietDate == moment(new Date()).format("DDMMYYYY");

    if (this.diets != undefined) {
      this.totalCaloriesFunct(this.diets, data);
      this.localData.otherMaster.dietPlan = this.diets;
      this.isActiveButton = 0;
      this.isDistributionActiveButton = 0;
      if (counterSwipe == 0) {
        // setTimeout(() => {
        //   this.bottomSlide.slideTo(3);
        // }, 300);
      }
      counterSwipe++;

    } else {
      this.storage.set("localData", "");
      this.storage.set("profileData", "");
      // this.utilities.presentAlert(
      //   "Something went wrong! Please try after some time."
      // );
    }
    setTimeout(() => {
     this.bindSlotFromLocal();
      this.calory = "0";
      this.isPinkText = isDetox;
    }, 10);

    let self = this;
    setTimeout(()=>{
      if(localStorage.getItem("waterDoneClicked") == 'true'){
        localStorage.removeItem ("waterDoneClicked")
        self.router.navigate(["water-guage"], {
          queryParams: {
            drankwater: self.drankwater,
            recommendedwater: self.recommendedwater,
            waterPercentage: self.waterPercentage,
            clickedWaterNotiDone: true
          }
        });
      }
    }, 1000)

    this.meal.night = this.diets.find(o => o.slot == 8).time ?
      this.tConvert(this.diets.find(o => o.slot == 8).time) :
      this.tConvert(this.diets.find(o => o.slot == 7).time);

    this.updateFastingGauge();
    this.utilities.hideLoader();
    
    if(CONSTANTS.dietDate==moment(new Date()).format("DDMMYYYY")){
      this.todaysCalCount();
   }
   else{
    let totalTodaysCalories = 0;
   }
   
   console.log("this.diets", this.diets);
   //////
   this.ionContent.scrollY=false;
   setTimeout(()=>{
    
   this.ionContent.scrollToPoint(0,this.scrollVal,150);
   this.ionContent.scrollY=true;
  },0);
  }

  todaySuggestedCalories = 0;
  fetchDiet(isDetox, date) {
    //this.utilities.showLoading();
    console.log("------------- fetchDiet ---------");
    let self = this;
    self.appService.getDietPlans(this.isDetox,date,'IND',false).then(
      success => {
        self.storage.get("dietData").then((val : any)=>{
          if(val){
            val[date] = {};
            let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
            val[date][planName] = success;
            self.storage.set("dietData", val).then(()=>{
              self.setDiet(success, isDetox, date)
            })
          } else {
            let obj = {};
            let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
            obj[planName] = success;

            let res1 = {};
            res1[date] = obj;
            self.storage.set("dietData", res1).then(() => {
              self.setDiet(success, isDetox, date)
            })
          }
          this.utilities.hideLoader();
        })

      },
      error => {
        //this.utilities.showLoading();
        self.storage.set("localData", "");
        self.storage.set("profileData", "");
        self.utilities.hideLoader();
        console.log("DietPlan Error:", error);
        // self.utilities.presentAlert(message.globalError);
        self.router.navigate(["profile"]);
      }
    );
    self.utilities.hideLoader();
    this.utilities.hideLoader();
  }

  recipeData = {};
  fetchDietPlan() {
    // this.isDetox = this.isTypeCovid ? false : this.isDetox;
    this.storage.get("dietData").then((res)=>{
      res = {...this.tempDietData};
      console.log("alam",res);
      
      if(moment(new Date()).format("DDMMYYYY") == CONSTANTS.dietDate && this.isDetox){
        this.deficitTotal = 900;
      }
      let dietData = res && res[CONSTANTS.dietDate] ? res[CONSTANTS.dietDate] : null;
      if(dietData){
        let planName = this.isDetox ? "detox" : CONSTANTS.selectedDietPlan;
        if(res[CONSTANTS.dietDate][planName]){
          this.setDiet(res[CONSTANTS.dietDate][planName], this.isDetox, CONSTANTS.dietDate);
        }else{
          this.fetchDiet(this.isDetox, CONSTANTS.dietDate)
        }
      } else {
        this.fetchDiet(this.isDetox, CONSTANTS.dietDate)
      }
    })
  }

  deleteOldDiet(data) {
    Object.keys(data).forEach((ele) => {
      if (!this.firstDateIsPastDayComparedToSecond(new Date(new Date().setDate(new Date().getDate() - 1)), new Date(moment(ele, "DDMMYYYY").valueOf()))) {
        delete data[ele];
      }
    })
    this.storage.set("dietData", data);
  }

  totalCalForActivity: any = 0;
  activityCalPer: any = 0;
  activityStepsPer: any = 0;
  totalCaloriesFunct(diets, totalData) {
    this.isMessageRed = false;
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
      this.totalCalForActivity = cal;
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
    let calorPer = (this.suggestedCalories.totalCalories*100)/this.suggestedCalories.recomended;
    console.log("Calore pere ", calorPer);
    this.totalTodaysCalories = this.calories.calories;
    this.difference = (this.suggestedCalories.totalCalories- this.totalTodaysCalories).toString();
    if(calorPer > 110 && calorPer <= 120){
      this.scoreColor = "orange";
    }else if(calorPer > 120){
      this.scoreColor = "red";
    }else{
      this.scoreColor = "#0F8E8E";
    }
    if(moment(new Date()).format("DDMMYYYY") == CONSTANTS.dietDate){
      this.todaySuggestedCalories = this.suggestedCalories["totalCalories"];
      localStorage.setItem("todaySuggestedCalories", this.todaySuggestedCalories.toString())
    }
    if (this.isDetox) {
      this.suggestedCalories.minus10 = 500;
      this.suggestedCalories.plus10 = 1000;

    }

    setTimeout(() => {
      if (
        parseInt(this.suggestedCalories.totalCarbsPer) < 35 ||
        parseInt(this.suggestedCalories.totalCarbsPer) > 70 ||
        parseInt(this.suggestedCalories.totalProtienPer) < 12 ||
        parseInt(this.suggestedCalories.totalProtienPer) > 30 ||
        parseInt(this.suggestedCalories.totalFatPer) < 10 ||
        parseInt(this.suggestedCalories.totalFatPer) > 40 ||
        this.caloryDistri[0] < this.caloriesDistribution[0].min ||
        this.caloryDistri[0] > this.caloriesDistribution[0].max ||
        this.caloryDistri[1] < this.caloriesDistribution[1].min ||
        this.caloryDistri[1] > this.caloriesDistribution[1].mmax ||
        this.caloryDistri[2] > this.caloriesDistribution[2].max ||
        this.suggestedCalories.totalCalories < this.suggestedCalories.minus10 ||
        this.suggestedCalories.totalCalories > this.suggestedCalories.plus10
      ) {
        this.isMessageRed = true;
      }

      if (
        parseInt(this.suggestedCalories.totalCarbsPer) < 35 ||
        parseInt(this.suggestedCalories.totalCarbsPer) > 70 ||
        parseInt(this.suggestedCalories.totalProtienPer) < 12 ||
        parseInt(this.suggestedCalories.totalProtienPer) > 30 ||
        parseInt(this.suggestedCalories.totalFatPer) < 10 ||
        parseInt(this.suggestedCalories.totalFatPer) > 40
      ) {
        this.caloryChanged();
      }
      if (
        this.caloryDistri[3] < (this.caloriesDistribution[0].min + this.caloriesDistribution[1].min) ||
        this.caloryDistri[3] > (this.caloriesDistribution[0].max + this.caloriesDistribution[1].max) ||
        this.caloryDistri[3] < (this.caloriesDistribution[1].min + this.caloriesDistribution[0].min) ||
        this.caloryDistri[3] > (this.caloriesDistribution[1].max + this.caloriesDistribution[0].max) ||
        this.caloryDistri[2] > this.caloriesDistribution[2].max
      ) {
        this.caloryDistributionChanged();
      }
      this.meal.points = 0;
      this.recommendedCheck.points = 0;
      this.caloriesCheck.points = 0;
      this.distributionCheck.points = 0;
      this.nutrientsCheck.points = 0;
      this.getDietPlanScore(null);

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
  goBack(){
    this.router.navigate(['consume']);  
  }
 
  gotoProfile(){
     this.router.navigate(['new-profile']);
  }
  
  getNoofDays(event) {
    console.log("event", event);
    this.noofdays = event;
  }

  videoURI: any = new Array(30);
  senitizedData(videoUrl, ind) {
    this.videoURI[ind] = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  senitizeHTML(htmlValue){
    return this._sanitizer.bypassSecurityTrustHtml(htmlValue);
  }

  returnSenitzedData(videoUrl) {
    console.log("returnSenitzedData : ", videoUrl)
    return this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  getPerimeter(percent): string {
    return percent + " " + (100 - percent);
  }

  getVirtualPervcent(percent, minVal) {
    const perc = ((Number(percent) / Number(minVal)) * 100).toFixed(0);
    if (parseInt(perc) > 100) {
      if (Number(minVal) == 35) {
        this.barPercent[0] = parseInt(perc);
      } else if (Number(minVal) == 12) {
        this.barPercent[1] = parseInt(perc);
      } else if (Number(minVal) == 10) {
        this.barPercent[2] = parseInt(perc);
      }
      return 100;
    } else {
      if (Number(minVal) == 35) {
        this.barPercent[0] = parseInt(perc);
      } else if (Number(minVal) == 12) {
        this.barPercent[1] = parseInt(perc);
      } else if (Number(minVal) == 10) {
        this.barPercent[2] = parseInt(perc);
      }
      return perc;
    }
  }

  getVirtualColor(value, min, max) {
    if (value < min || value > 70) {
      return "#E36049";
    } else {
      return "#4cc2c3";
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

  getVirtualPervcent2(percent, total, minVal) {
    const perc = Math.round(
      (((Number(percent) * 100) / Number(total)) * 100) / Number(minVal)
    ).toFixed(0);

    if (parseInt(perc) > 100) {
      if (Number(minVal) == this.caloriesDistribution[0].min) {
        this.barPercent2[0] = parseInt(perc);
      } else if (Number(minVal) == this.caloriesDistribution[1].min) {
        this.barPercent2[1] = parseInt(perc);
      } else if (Number(minVal) == this.caloriesDistribution[2].min) {
        this.barPercent2[2] = parseInt(perc);
      }
      return 100;
    } else {
      if (Number(minVal) == this.caloriesDistribution[0].min) {
        this.barPercent2[0] = parseInt(perc);
      } else if (Number(minVal) == this.caloriesDistribution[1].min) {
        this.barPercent2[1] = parseInt(perc);
      } else if (Number(minVal) == this.caloriesDistribution[2].min) {
        this.barPercent2[2] = parseInt(perc);
      }
      return perc;
    }
  }

  getPerPlanPerimeter(value, total, place): string {
    let percent = (value * 100) / total;
    this.myPercent = percent;
    if (place == "0") {
      // this.getPerPlanLike(percent, "40-55", 0);
    }
    if (place == "1") {
      this.getPerPlanLike(percent, "30-35", 1);
    }
    if (place == "2") {
      this.getPerPlanLike(percent, "15-20", 2);
    }
    return percent + " " + (100 - percent);
  }

  getPerPlanLike(percent, total, place) {
    let totalP = total.split("-");
    if (percent > Number(totalP[1])) {
      this.isUp.push(0);
    } else if (percent >= Number(totalP[0]) && percent <= Number(totalP[1])) {
      this.isUp.push(1);
    } else if (percent < Number(totalP[0])) {
      this.isUp.push(2);
    }
    setTimeout(() => {
      this.isUp = this.isUp;
    }, 100);
  }

  doRefresh(event) {
    setTimeout(() => {
      if (event)
        event.target.complete();
    }, 1500);
    this.storage.set("dietData", null).then(() => {
      this.storage.set("optionsData", null).then(() => {
        this.isPullReferesh = true;
        this.diets = [];
        this.loadHomeData();
      })
    })
   }

  current_val: number;
  max_val: number;
  inner_current_val: number;
  inner_max_val: number;
  total_steps: number = 0;
  total_cal: number = 0;
  total_km: number;
  move_min: number;
  isFitAPI: boolean;
  target_steps: number;
  target_cal: number;
  cal_per: any;
  showBtnsBlk: boolean;
  time_options: any[] = [];
  selectedTime: any = "yesterday";
  fromDate: Date;
  toDate: Date;
  changedTime: string = "Today";
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  calories_data: any = [];
  calories_data_length: any;
  consumed_cal: any = 0;
  recommended_cal: any = 0;
  losscalories: any;
  apiCaloriesFit: any = {};

  isGraphView: any = false;
  isRecordingSubscribed = false;
  gotoGraphView() {
    this.isGraphView = !this.isGraphView;
  }

  callRecordingApi() {
    let me = this;
    if (me.isRecordingSubscribed) {
   //   me.computeDataForAndroid();
    } else {
      this.platform.ready().then(() => {
        fitnessPlugin.show(
          'SubToApi',
          function (msg) {
            me.isRecordingSubscribed = true;
      //      me.computeDataForAndroid();
          },
          function (err) {
            me.showBtnsBlk = true;
          }
        );
      });
    }
  }

 

  isFitStarted = false;
  removeMessageItem(){
    this.tipMessage.splice(4,1);
    this.tipMessage.splice(4,1);
    this.isFitStarted = true;
  }

  removeHealthKitPerMessage(){
    if(this.isIosDevice){
      this.tipMessage.forEach((ele,ind) =>{
        if(ele.toString().includes("health kit")) {
          this.tipMessage.splice(ind,1);
          this.tipMessage.splice(ind - 1,1);
        }
      });

      this.tipMessageafterReg.forEach((ele,ind) =>{
        if(ele.toString().includes("health kit")) {
          this.tipMessageafterReg.splice(ind,1);
          this.tipMessageafterReg.splice(ind - 1,1);
        }
      })

    }else if(this.isAndroidDevice){
      this.tipMessage.forEach((ele,ind) =>{
        if(ele.toString().includes("Google Fit")) {
          this.tipMessage.splice(ind,1);
          this.tipMessage.splice(ind - 1,1);
        }
      });

      this.tipMessageafterReg.forEach((ele,ind) =>{
        if(ele.toString().includes("Google Fit")) {
          this.tipMessageafterReg.splice(ind,1);
          this.tipMessageafterReg.splice(ind - 1,1);
        }
      })
    }
  }

  

  computeCalories(steps) {
    this.storage.get("profileData").then(val => {
      let profile = this.utilities.parseJSON(val);
      let total = this.utilities.getCaloriesBurned(profile, this.diets, steps, 0, 0, moment().hour() + (moment().minute() / 60));
      CONSTANTS.calBurnedToday = this.total_cal = Math.round(total);
      this.activityCalPer = this.totalCalForActivity * 100 / this.suggestedCalories.totalCalories;
      this.cal_per = Math.round((this.total_cal / this.target_cal) * 100);
      this.total_steps = steps;
      this.activityStepsPer = this.total_steps * 100 / this.apiCaloriesFit.activityLevels;
      this.deficitToday = this.total_cal - this.consmedAtCurrentTime;
      if (this.deficitToday > 0) {
        this.deficitTodayPer = (this.deficitToday) > 500 ? 100 : this.deficitToday / 500 * 100;
      } else {
        this.deficitTodayPer = 0;
      }

    })

  }
  userFirstName = "";
  loadDataOnloadandRefresh() {
    this.time_options = [
      { label: "Today", value: "today" },
      { label: "Yesterday", value: "yesterday" },
      { label: "Last 7 Days", value: "last_seven" },
      { label: "Last 15 Days", value: "last_fifteen" },
      { label: "Last 30 Days", value: "last_thirty" },
    ];
 

   // this.setNotifications();
    // this.activateFitAPI();
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }

    if (this.deficitInterval) {
      clearInterval(this.deficitInterval);
    }

    // this.myInterval = setInterval(() => {
    //   this.getHabitsForUpdate();
    // }, 3600 * 1000);

    this.deficitInterval = setInterval(() => {
      let consumed = 0;
      this.currentDayDiets.filter(o => o.time).forEach(element => {
        let time = parseInt(element.time.split(":")[0]);
        if ((moment().hour() + (moment().minute() / 60))
          >= time
        ) {
          consumed = consumed + parseInt(element.totalCalories);
        }
      });
      this.consmedAtCurrentTime = consumed;
    }, 15 * 60 * 1000)

    //  this.ActivityData();
    this.storage.get("newProfilePic").then(profile => {
      this.storage.get("localData").then(val => {
        // ////this.utilities.presentLoading();
        this.getHabitsForUpdateOneTime();
      });
      let data = this.utilities.parseJSON(profile);
      this.profilePic = data.photoUrl ? data.photoUrl : 'assets/images/logo.png';
      this.userFirstName = data.firstName;
    })



    this.appService.user().subscribe((response: any) => {
      console.log("water recommendation :", response);
      let recommended_water = response.recommendedWater;
      let recommended_string = recommended_water.substr(
        0,
        recommended_water.indexOf(" ")
      );
      this.recommendedwater = parseInt(recommended_string);
      console.log(this.recommendedwater);
      //localStorage.setItem('localdrankwater', this.drankwater);
      this.drankwater = (response.res.filter(o => o.waterDrankQuantity > 0).length) - (response.res.filter(o => o.waterDrankQuantity < 0).length);

      localStorage.setItem("localdrankwater", this.drankwater);
      this.doProgress(this.drankwater);
    });
    var today = new Date();
    var currentdate =
      `${today.getDate()}`.padStart(2, "0") +
      `${today.getMonth() + 1}`.padStart(2, "0") +
      today.getFullYear() +
      `${today.getHours()}`.padStart(2, "0") +
      `${today.getMinutes()}`.padStart(2, "0") +
      `${today.getSeconds()}`.padStart(2, "0");


    const element = document.getElementById("alarm");
    this.localalarmstatus = localStorage.getItem("localalarm");
    if (this.localalarmstatus == "Deactive") {
      if (element) {
        element.style.color = "grey";
      }
    } else {
      if (element) {
        element.style.color = "#2569b0";
      }
    }
  
  }

  

  dateChanged(selectedDay) {
    console.log("selectedDay:-",selectedDay,new Date().getDate(),Number(this.day[0]));
    const datenext = selectedDay?.detoxDate.split('-')[0];
    var dayValue = selectedDay?.formatDate;
    CONSTANTS.dietDate = dayValue;
    this.dietflag=1; 

    
     
    this.getDietdata(CONSTANTS.dietDate);
      this.setToggleButtons();
      this.fetchDietPlan();
      if(Number(datenext)== new Date().getDate()){
        this.planDatedisplay = "Today";
      }
     else if(Number(datenext)== new Date().getDate()+1){
        this.planDatedisplay = "Tomorrow";
      }
      else{
        this.planDatedisplay = selectedDay.displayFormat;
      }
    



  }

  
  openLink(url) {
    this.iab.create(url, "_blank", "location=yes");
  }

  loadHomeData() {
    // alert("Load home data");
    this.weeks = [];
    for (var i = 0; i < 7; i++) {
      let date = moment().add(i, "days");
      this.weeks.push({
        index: i,
        date: date.toDate(),
        formatDate: date.format("DDMMYYYY"),
        detoxDate: date.format("DD-MMM-YYYY"),
        weekName: date.format('ddd'),
        displayFormat: date.format("ddd, DD MMM")
        // displayFormat: i == 0 ? "Today,  " + date.format("DD MMM") : date.format("ddd, DD MMM")
      })

    }

    let find = this.weeks.find(o => o.formatDate == CONSTANTS.dietDate);
    if (find) {
      CONSTANTS.dietDate = this.dayValue = find.formatDate;
      CONSTANTS.dietDateforHome =find.formatDate;
    } else {
      this.dayValue = this.weeks[0].formatDate;
      CONSTANTS.dietDate = this.dayValue;
      CONSTANTS.dietDateforHome = this.dayValue;
    }
    if (moment().format("DDMMYYYY") == this.dayValue) {
      this.isToday = true;
    } else {
      this.isToday = false;
    }
    this.profile = CONSTANTS.profile;

  }

  firstDateIsPastDayComparedToSecond(firstDate, secondDate) {
    if (firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) >= 0) { //first date is in future, or it is today
      return false
    }
    return true
  }

  dateCompare(firstDate, secondDate) {
    if (firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) > 0) { //first date is in future, or it is today
      return false
    }
    return true
  }

 

  getWordPressFaq() {
    this.appService.getFAQ().subscribe(faq => {
      this.storage.set("faq", faq);
    }, err => {
      console.log("Wordpress api Error: ", JSON.stringify(err));
    });
  }

  initAllFuncLoad() {
    //this.getWordPressFaq();
    // this.getWordPressHabits();
    this.storage.get("dietData").then((res) => {
      if (res) {
        this.deleteOldDiet(res);
      }
    })
  }
  loadAllData() {
    if (!localStorage.getItem("loadAllDataAtConsume")) {
      localStorage.setItem("loadAllDataAtConsume", new Date().toString());
      this.initAllFuncLoad();
    } else if (this.firstDateIsPastDayComparedToSecond(new Date(localStorage.getItem("loadAllDataAtConsume")), new Date())) {
      localStorage.setItem("loadAllDataAtConsume", new Date().toString());
      this.initAllFuncLoad();
    }
  }

  
  iosPurcaseProductsList(){
     }

  
  startCelebration() { // After payment celebration blast effect
    var self = this;
    var defaults = {
      origin: { y: 0.9 }
    };

    var count = 350;
    function fire(particleRatio, opts) {
      self.confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  selectSlot(type, index, parentIndex) {
    if (type == "less100" && this.lessThan100FoodItemSlotSelected != index) {
      this.lessThan100FoodItemSlotSelected = index;
      this.lessThan100FoodItemsCounter = 5;
      this.lessThan100FoodItems = [];
      this.loadLess100Data();
      this.lessThan100FoodItemsSlides.slideTo(0, 200)
    } else if (type == "highProtien" && this.highProteinFoodItemSlotSelected != index) {
      this.highProteinFoodItemSlotSelected = index;
      this.highProteinFoodItemsCounter = 5;
      this.highProteinFoodItems = [];
      this.highProteinData();
      this.highProteinFoodItemsSlides.slideTo(0, 200)
    } else if (type == "healthyChoices" && this.healthData[parentIndex]["healthyChoicesFoodItemSlotSelected"] != index) {
      this.healthData[parentIndex]["healthyChoicesFoodItemSlotSelected"] = index;
      this.healthData[parentIndex]['healthyChoicesFoodItemsCounter'] = 5;
      this.healthyChoicesFoodItems = [];
      this.healthyChoicesFoodItemsSlides.slideTo(0, 200);
      this.healthyChociesData(parentIndex);
    }
  }

  lessThan100SlideChanged(ev) {
    this.lessThan100FoodItemsSlides.getActiveIndex().then((index: number) => {
      if (!this.isPlanActiveForDiet && index >= 1) {
        this.lessThan100FoodItemsSlides.lockSwipeToNext(true);
      } else {
        this.lessThan100FoodItemsSlides.lockSwipeToNext(false);
        if (index == this.lessThan100FoodItems.length - 1) {
          this.loadLess100Data()
        }
      }
    })
  }

  loadLess100Data() {
    // if(this.lessThan100FoodItemsCounter <= this.lessThan100FoodItemsAtTime.length){
    let selectedSlotFoodItems = this.filteredLess100Food[this.lessThan100FoodItemSlotSelected];
    let slot = this.diets[this.lessThan100FoodItemSlotSelected];
    console.log("Load less func called");
    for (let i = this.lessThan100FoodItemsCounter - 5; i < this.lessThan100FoodItemsCounter; i++) {
      // console.log(" data:" , i , " ", this.lessThan100FoodItemsAtTime[i] )
      if (selectedSlotFoodItems[i]) {
        this.lessThan100FoodItems[i] = selectedSlotFoodItems[i];
        let foodItemInSlot = [];
        foodItemInSlot = slot.data.filter((ele) => {
          return ele.code == selectedSlotFoodItems[i].code
        })
        if (foodItemInSlot.length > 0) this.lessThan100FoodItems[i]["isExist"] = true;
        else this.lessThan100FoodItems[i]["isExist"] = false;
        // if(selectedSlotFoodItems[i].video && selectedSlotFoodItems[i].video != "" && selectedSlotFoodItems[i].video.indexOf("http") > -1){
        //   this.lessThan100FoodItems[i]["safeVideoUrl"] = this._sanitizer.bypassSecurityTrustResourceUrl(this.lessThan100FoodItems[i].video);
        //   // console.log("Source video : ", this.lessThan100FoodItems[i]["safeVideoUrl"]);
        // }
      }
    }
    this.lessThan100FoodItemsCounter = this.lessThan100FoodItems.length + 5;
    console.log("Data ", this.lessThan100FoodItems);
    // }
  }

  filterLess100FoodItems() {
    this.filteredLess100Food = {};
    console.log(" Foods ", this.lessThan100FoodItemsAtTime)
    this.filteredLess100Food["2"] = [];
    this.filteredLess100Food["3"] = [];
    this.filteredLess100Food["4"] = [];
    this.filteredLess100Food["6"] = [];
    this.filteredLess100Food["7"] = [];
    this.lessThan100FoodItemsAtTime.forEach((ele, i) => {
      if (ele["Slots"].indexOf(2) > -1) {
        this.filteredLess100Food["2"].push(ele)
      }
      if (ele["Slots"].indexOf(3) > -1) {
        this.filteredLess100Food["3"].push(ele)
      }
      if (ele["Slots"].indexOf(4) > -1) {
        this.filteredLess100Food["4"].push(ele)
      }
      if (ele["Slots"].indexOf(6) > -1) {
        this.filteredLess100Food["6"].push(ele)
      }
      if (ele["Slots"].indexOf(7) > -1) {
        this.filteredLess100Food["7"].push(ele)
      }

      if (ele.video && ele.video != "" && ele.video.indexOf("http") > -1) {
        ele["safeVideoUrl"] = this._sanitizer.bypassSecurityTrustResourceUrl(ele.video);
      }

      if (i + 1 == this.lessThan100FoodItemsAtTime.length) {
        this.loadLess100Data();
      }
    })
  }

  highProteinSlideChanged(ev) {
    this.highProteinFoodItemsSlides.getActiveIndex().then((index: number) => {
      if (!this.isPlanActiveForDiet && index >= 1) {
        this.highProteinFoodItemsSlides.lockSwipeToNext(true);
      } else {
        this.highProteinFoodItemsSlides.lockSwipeToNext(false);
        if (index == this.highProteinFoodItems.length - 1) {
          this.highProteinData();
        }
      }
    })
  }

  highProteinData() {
    // if(this.highProteinFoodItemsCounter <= this.highProteinFoodItemsAtTime.length){
    let selectedSlotFoodItems = this.filteredHighProtein[this.highProteinFoodItemSlotSelected];
    let slot = this.diets[this.highProteinFoodItemSlotSelected];
    console.log("Load less func called");
    for (let i = this.highProteinFoodItemsCounter - 5; i < this.highProteinFoodItemsCounter; i++) {
      // console.log(" data:" , i , " ", this.highProteinFoodItemsAtTime[i] )
      if (selectedSlotFoodItems[i]) {
        this.highProteinFoodItems[i] = selectedSlotFoodItems[i];
        let foodItemInSlot = [];
        foodItemInSlot = slot.data.filter((ele) => {
          return ele.code == selectedSlotFoodItems[i].code
        })
        if (foodItemInSlot.length > 0) this.highProteinFoodItems[i]["isExist"] = true;
        else this.highProteinFoodItems[i]["isExist"] = false;
        // if(selectedSlotFoodItems[i].video && selectedSlotFoodItems[i].video != "" && selectedSlotFoodItems[i].video.indexOf("http") > -1){
        //   this.highProteinFoodItems[i]["safeVideoUrl"] = this._sanitizer.bypassSecurityTrustResourceUrl(this.highProteinFoodItems[i].video);
        //   // console.log("Source video : ", this.highProteinFoodItems[i]["safeVideoUrl"]);
        // }
      }
    }
    this.highProteinFoodItemsCounter = this.highProteinFoodItems.length + 5;
    console.log("Data ", this.highProteinFoodItems);
    // }
  }

  filterHighProtienItems() {
    this.filteredHighProtein = {};
    console.log(" filteredHighProtein ", this.highProteinFoodItemsAtTime)
    this.filteredHighProtein["2"] = [];
    this.filteredHighProtein["3"] = [];
    this.filteredHighProtein["4"] = [];
    this.filteredHighProtein["6"] = [];
    this.filteredHighProtein["7"] = [];
    this.highProteinFoodItemsAtTime.forEach((ele, i) => {
      if (ele["Slots"].indexOf(2) > -1) {
        this.filteredHighProtein["2"].push(ele)
      }
      if (ele["Slots"].indexOf(3) > -1) {
        this.filteredHighProtein["3"].push(ele)
      }
      if (ele["Slots"].indexOf(4) > -1) {
        this.filteredHighProtein["4"].push(ele)
      }
      if (ele["Slots"].indexOf(6) > -1) {
        this.filteredHighProtein["6"].push(ele)
      }
      if (ele["Slots"].indexOf(7) > -1) {
        this.filteredHighProtein["7"].push(ele)
      }

      if (ele.video && ele.video != "" && ele.video.indexOf("http") > -1) {
        ele["safeVideoUrl"] = this._sanitizer.bypassSecurityTrustResourceUrl(ele.video);
      }

      if (i + 1 == this.highProteinFoodItemsAtTime.length) {
        this.highProteinData();
      }
    })
  }


  healthyChociesSlideChanged(ev, index) {
    this.healthyChoicesFoodItemsSlides.getActiveIndex().then((index: number) => {
      if (!this.isPlanActiveForDiet && index >= 1) {
        this.healthyChoicesFoodItemsSlides.lockSwipeToNext(true);
      } else {
        this.healthyChoicesFoodItemsSlides.lockSwipeToNext(false);
        // if(index == this.healthyChoicesFoodItems.length - 1 ){
        //   this.healthyChociesData(index);
        // }
      }
    })
  }

  healthyChociesData(index) {
    // if(this.highProteinFoodItemsCounter <= this.highProteinFoodItemsAtTime.length){
    let selectedSlotFoodItems = this.healthData[index]['foods'];
    let selectedSlot = this.healthData[index]['healthyChoicesFoodItemSlotSelected'];
    let slot = this.diets[selectedSlot];
    console.log("Load less func called");
    for (let i = 0; i < selectedSlotFoodItems[selectedSlot].length; i++) {
      let foodItemInSlot = selectedSlotFoodItems[selectedSlot][i];
      foodItemInSlot = slot.data.filter((ele) => {
        return ele.code == foodItemInSlot.code
      })
      if (foodItemInSlot.length > 0) this.healthData[index]["foods"][selectedSlot][i]["isExist"] = true;
      else this.healthData[index]["foods"][selectedSlot][i]["isExist"] = false;
    }
  }

  // filterHealthyChoicesItems(){
  //   this.filteredHealthyChoices = {};
  //   console.log(" filteredHealthyChoices ", this.healthyChoicesFoodItemsAtTime)
  //   this.filteredHealthyChoices["2"] = [];
  //   this.filteredHealthyChoices["3"] = [];
  //   this.filteredHealthyChoices["4"] = [];
  //   this.filteredHealthyChoices["6"] = [];
  //   this.filteredHealthyChoices["7"] = [];
  //   this.healthyChoicesFoodItemsAtTime.forEach((ele,i)=>{
  //     if(ele["Slots"].indexOf(2) > -1){
  //     this.filteredHealthyChoices["2"].push(ele)
  //     }
  //     if(ele["Slots"].indexOf(3) > -1){
  //     this.filteredHealthyChoices["3"].push(ele)
  //     }
  //     if(ele["Slots"].indexOf(4) > -1){
  //     this.filteredHealthyChoices["4"].push(ele)
  //     }
  //     if(ele["Slots"].indexOf(6) > -1){
  //     this.filteredHealthyChoices["6"].push(ele)
  //     }
  //     if(ele["Slots"].indexOf(7) > -1){
  //     this.filteredHealthyChoices["7"].push(ele)
  //     }

  //     if(ele.video && ele.video != "" && ele.video.indexOf("http") > -1){
  //       ele["safeVideoUrl"] = this._sanitizer.bypassSecurityTrustResourceUrl(ele.video);
  //     }

  //     if(i + 1 == this.healthyChoicesFoodItemsAtTime.length){
  //       this.healthyChociesData();
  //     }
  //   })
  // }

  lessThan100AllSlots() {
    let reqBodyBreakfast = { "toBeAvoided": true, "caloriesMin": 200, "slots": [2], "categories": ["W", "WP", "WPP", "WC", "WCP", "WE", "WM", "DS", "DM"] };
    this.appServices.getSubFoodItems(reqBodyBreakfast).then(
      res => {
        this.filteredLess100Food["2"] = res["foods"];
        let reqBodyMidDay = { "toBeAvoided": true, "caloriesMin": 100, "slots": [3] }
        this.appServices.getSubFoodItems(reqBodyMidDay).then(
          res => {
            this.filteredLess100Food["3"] = res["foods"];
            let reqBodyLunch = { "toBeAvoided": true, "caloriesMin": 200, "slots": [4], "categories": ["A", "C", "DS", "W", "M", "SA", "SO", "WG", "WC", "WP", "WPP"] };
            this.appServices.getSubFoodItems(reqBodyLunch).then(
              res => {
                this.filteredLess100Food["4"] = res["foods"];
                let reqEveSnacks = { "toBeAvoided": true, "caloriesMin": 100, "slots": [5] };
                this.appServices.getSubFoodItems(reqEveSnacks).then(
                  res => {
                    this.filteredLess100Food["6"] = res["foods"];
                    let reqDinner = { "toBeAvoided": true, "caloriesMin": 200, "slots": [7], "categories": ["A", "C", "DS", "W", "M", "SA", "SO", "WG", "WC", "WP", "WPP"] };
                    this.appServices.getSubFoodItems(reqDinner).then(
                      res => {
                        this.filteredLess100Food["7"] = res["foods"];
                        this.storage.set("lessThan100Data", this.filteredLess100Food);
                        this.loadLess100Data();
                      })
                  })
              })
          })
      })
  }

  highProteinSlots() {
    let reqHighProtein = { "toBeAvoided": true, "proteinMin": 5 };
    this.appServices.getSubFoodItems(reqHighProtein).then(
      res => {
        this.storage.set("highProtienData", res);
        console.log("getHighProteinFoodItem called ", res);
        if (res && res["foods"].length > 0) {
          this.highProteinFoodItemsAtTime = res["foods"];
          this.storage.set("highProteinData", this.highProteinFoodItemsAtTime);
          this.filterHighProtienItems();
        }
      })
  }
  healthData = [];
  healthProblemCounter = 0;
  grabHealthFoodData() {
    let counter = 0;
    this.healthData.forEach(element => {
      let reqHealth = { "recommendedIn": [element["code"]] };
      this.appServices.getSubFoodItems(reqHealth).then(
        res => {
          let filteredHealthyChoices = {};
          filteredHealthyChoices["2"] = [];
          filteredHealthyChoices["3"] = [];
          filteredHealthyChoices["4"] = [];
          filteredHealthyChoices["6"] = [];
          filteredHealthyChoices["7"] = [];
          res["foods"].forEach((ele, i) => {
            if (ele["Slots"].indexOf(2) > -1) {
              filteredHealthyChoices["2"].push(ele)
            }
            if (ele["Slots"].indexOf(3) > -1) {
              filteredHealthyChoices["3"].push(ele)
            }
            if (ele["Slots"].indexOf(4) > -1) {
              filteredHealthyChoices["4"].push(ele)
            }
            if (ele["Slots"].indexOf(6) > -1) {
              filteredHealthyChoices["6"].push(ele)
            }
            if (ele["Slots"].indexOf(7) > -1) {
              filteredHealthyChoices["7"].push(ele)
            }

            if (ele.video && ele.video != "" && ele.video.indexOf("http") > -1) {
              filteredHealthyChoices["safeVideoUrl"] = this._sanitizer.bypassSecurityTrustResourceUrl(ele.video);
            }
            filteredHealthyChoices["counter"] = counter;
            this.healthData[counter]["healthyChoicesFoodItemSlotSelected"] = 2;
            this.healthData[counter]["healthyChoicesFoodItemsCounter"] = 5;
            if (i + 1 == res["foods"].length) {
              this.healthData[counter]["foods"] = filteredHealthyChoices;
              if (counter + 1 == this.healthProblemCounter) {
                this.storage.set("healthData", this.healthData);
                this.healthyChociesData(0);
              }
            }

            // if(res && res["foods"].length > 0) {
            //   this.highProteinFoodItemsAtTime = res["foods"];
            //   this.storage.set("highProteinData", this.highProteinFoodItemsAtTime);
            //   this.filterHighProtienItems();
            // }
          })
          counter++
        })
    });

  }

  healthyChociesAvoidInSlideChanged(ev, index) {
    this.healthyChoicesAvvoidInFoodItemSlides.getActiveIndex().then((index: number) => {
      if (!this.isPlanActiveForDiet && index >= 1) {
        this.healthyChoicesAvvoidInFoodItemSlides.lockSwipeToNext(true);
      } else {
        this.healthyChoicesAvvoidInFoodItemSlides.lockSwipeToNext(false);
        // if(index == this.healthyChoicesFoodItems.length - 1 ){
        //   this.healthyChociesData(index);
        // }
      }
    })
  }

  healthAvoidInData = [];
  grabHealthAvoidInFoodData() {
    let counter = 0;
    this.healthData.forEach(element => {
      let reqHealth = { "avoidIn": [element["code"]] };
      this.appServices.getSubFoodItems(reqHealth).then(res => {
        this.healthAvoidInData[counter]["foods"] = res["foods"];
        counter++;
        if (counter == this.healthProblemCounter) {
          this.storage.set("healthAvoidInData", this.healthAvoidInData);
        }
      })
    })
  }



  // healthSlots() {
  //   this.healthData = [];
  //   this.storage.get("localData").then((val) => {
  //     let data = this.utilities.parseJSON(val);
  //     if (data.otherMaster.diseases.length > 0) {
  //       data.otherMaster.diseases.forEach(ele => {
  //         if (ele.isSelected) this.healthData.push(ele);
  //       })
  //       if (this.healthData.length > 0) {
  //         this.healthProblemCounter = this.healthData.length;
  //         this.grabHealthFoodData();
  //       }
  //     }
  //   })
  // }

  // healthFoodAvoidIn() {
  //   this.healthAvoidInData = [];
  //   this.storage.get("localData").then((val) => {
  //     let data = this.utilities.parseJSON(val);
  //     if (data.otherMaster.diseases.length > 0) {
  //       data.otherMaster.diseases.forEach(ele => {
  //         if (ele.isSelected) this.healthAvoidInData.push(ele);
  //       })
  //       if (this.healthAvoidInData.length > 0) {
  //         this.healthProblemCounter = this.healthAvoidInData.length;
  //         this.grabHealthAvoidInFoodData();
  //       }
  //     }
  //   })
  // }

  loadSecondPartData() {
    this.lessThan100FoodItemSlotSelected = 2;
    this.lessThan100FoodItemsCounter = 5;
    this.highProteinFoodItemSlotSelected = 2;
    this.highProteinFoodItemsCounter = 5;
    this.healthData.forEach(ele => {
      ele['healthyChoicesFoodItemsCounter'] = 5;
    })
    this.healthyChoicesFoodItemSlotSelected = 2;
    this.lessThan100FoodItems = [];
    this.highProteinFoodItems = [];
    this.healthyChoicesFoodItems = [];
    // this.appServices.getLessThan100CaloriesFoodItem().then(
    //   res => {
    //     console.log("getLessThan100CaloriesFoodItem called ", res);
    //     if(res && res["foods"].length > 0) {
    //       this.lessThan100FoodItemsAtTime = res["foods"];
    //       // this.filterLess100FoodItems();
    //     }
    // })
    if (!localStorage.getItem("loadAllDataAtSubBottom")) {
      localStorage.setItem("loadAllDataAtSubBottom", new Date().toString());
      this.lessThan100AllSlots();
      this.highProteinSlots();
    //  this.healthSlots();
     // this.healthFoodAvoidIn();
    } else if (this.firstDateIsPastDayComparedToSecond(new Date(localStorage.getItem("loadAllDataAtSubBottom")), new Date())) {
      localStorage.setItem("loadAllDataAtSubBottom", new Date().toString());
      this.lessThan100AllSlots();
      this.highProteinSlots();
    //  this.healthSlots();
    //  this.healthFoodAvoidIn();
    } else {
      this.storage.get("lessThan100Data").then((res: any) => {
        if (res) {
          // for (const [key, value] of Object.entries(res)) {
          //   console.log(`${key}: ${value}`);
          //   let j = {};
          //   j = value;
          //   value.sort(() => Math.random() - 0.5)
          // }

          for (const key in res) {
            this.filteredLess100Food[key] = res[key].sort(() => Math.random() - 0.5);
          }
          this.loadLess100Data();
        } else {
          this.lessThan100AllSlots();
        }
      })
      this.storage.get("highProteinData").then((res: any) => {
        if (res) {
          this.highProteinFoodItemsAtTime = res.sort(() => Math.random() - 0.5);
          this.filterHighProtienItems();
        } else {
          this.highProteinSlots();
        }
      })
      this.storage.get("healthData").then((res: any) => {
        if (res) {
          res.forEach((ele, index) => {
            // this.healthData[index]["foods"] = 
            this.healthData[index] = ele;
            for (const key in ele['foods']) {
              this.healthData[index]["foods"][key] = (ele && ele['foods'] && ele['foods'][key] && ele['foods'][key].length > 0) ? ele['foods'][key].sort(() => Math.random() - 0.5) : [];
            }
          })
          // this.healthData = res.sort(() => Math.random() - 0.5);
          this.healthyChoicesFoodItems = [];
          this.healthyChociesData(0);
        } else {
         // this.healthSlots();
        }
      })
      this.storage.get("healthAvoidInData").then((res: any) => {
        if (res) {
          res.forEach((ele, index) => {
            // this.healthData[index]["foods"] = 
            this.healthAvoidInData[index] = ele;
            for (const key in ele['foods']) {
              this.healthAvoidInData[index]["foods"] = (ele && ele['foods'] && ele['foods'].length > 0) ? ele['foods'].sort(() => Math.random() - 0.5) : [];
            }
          })
          // this.healthAvoidInData = res.sort(() => Math.random() - 0.5);
        } else {
          //this.healthFoodAvoidIn();
        }
      })
    }
  }

  resetAllSubSlider() {
    this.lessThan100FoodItemSlotSelected = 2;
    this.lessThan100FoodItemsCounter = 5;
    this.highProteinFoodItemSlotSelected = 2;
    this.highProteinFoodItemsCounter = 5;
    this.healthData.forEach(ele => {
      ele['healthyChoicesFoodItemsCounter'] = 5;
    })
    this.healthyChoicesFoodItemSlotSelected = 2;
    this.lessThan100FoodItems = [];
    this.highProteinFoodItems = [];
    this.healthyChoicesFoodItems = [];
    // this.filterHighProtienItems();
    // this.filterLess100FoodItems();
    // this.filterHealthyChoicesItems();
    this.loadLess100Data();
    this.highProteinSlots();
    this.healthyChociesData(0);

  }

  addFoodItem(type, foodItem, parentIndex) {
    console.log("add fooitem");
    
    ////this.utilities.presentLoading();
    let slotIndex = type == "less100" ? this.lessThan100FoodItemSlotSelected : type == "highProtien" ? this.highProteinFoodItemSlotSelected : this.healthData[parentIndex]["healthyChoicesFoodItemSlotSelected"];
    let slot = this.diets[slotIndex]; //type == "less100" ? this.diets[this.lessThan100FoodItemSlotSelected] : this.diets[this.highProteinFoodItemSlotSelected];
    let data = slot.data;
    let foodCodeList = [];
    let sameCategoryExist = false;
    foodItem.portion = foodItem.portion ? foodItem.portion : 1;
    for (let i = 0; i < data.length; i++) {
      if (data[i]["Type"].slice(0, 1).toLowerCase() == foodItem["Type"].slice(0, 1).toLowerCase()) {
        foodCodeList.push({ code: foodItem.code, portion: parseFloat(foodItem.portion), "foodSource":foodItem["foodSource"] ? foodItem["foodSource"] : "INTERNAL", "eaten": foodItem.eaten ? foodItem.eaten : -1});
        sameCategoryExist = true;
      } else {
        foodCodeList.push({ code: data[i].code, portion: parseFloat(data[i].portion), "foodSource":foodItem["foodSource"] ? foodItem["foodSource"] : "INTERNAL", "eaten": foodItem.eaten ? foodItem.eaten : -1 });
      }
    }

    if (!sameCategoryExist) {
      foodCodeList.push({ code: foodItem.code, portion: parseFloat(foodItem.portion), "foodSource":foodItem["foodSource"] ? foodItem["foodSource"] : "INTERNAL", "eaten": foodItem.eaten ? foodItem.eaten : -1 });
    }

    let reqBody = {
      foodCodeList,
      slot: slotIndex,
      detox: CONSTANTS.isDetox,
      date: CONSTANTS.dietDate,
      country: CONSTANTS.country
    };
    console.log("reqBody", reqBody);
    
    this.appServices.postOptionFoodList(reqBody).then(
      success => {
        // this.utilities.hideLoader();
        // this.router.navigate(["consume"]);
        console.log("detail", success);
        if (sameCategoryExist) {
        //  this.utilities.showSuccessToast("In " + slot.slotName + " item replaced another of same category");
        } else {
         // this.utilities.showSuccessToast("In " + slot.slotName + ", item is added");
        }
        if (type == "less100") this.utilities.logEvent("onboarding_less_than_100_foodItem_added", {});
        else if (type == "highProtien") this.utilities.logEvent("onboarding_high_protien_foodItem_added", {});
        else this.utilities.logEvent("onboarding_healthy_foodItem_added", {});
        this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate);
        this.ionContent.scrollToTop();
        this.slides.slideTo(slotIndex, 200);
        this.loadAgain = true;
      },
      err => {
        this.utilities.hideLoader();
        console.log("details error", err);
      }
    );
  }

  diseases;
  recommendedInData = [];
  checkDieses(){
    this.recommendedInData = [];
    this.storage.get("localData").then(val => {
      // console.log("profile pic", val);
      if (val != "") {
        let data = JSON.parse(val);
       
        this.diseases = data.otherMaster.diseases.filter(item=>{
          return item.isSelected==true;
         });
         this.diseases.forEach((ele, index)=>{
           if(index < 3){
            let temp = "";
            if(index + 1 == 3){
              temp = ele.value;
            } else {
              temp = ele.value + ", ";
            }
            this.recommendedInData.push(temp)
           }
         })
       }
    });
  }

  // Recipe of the day section start

  foodDetailsRecipe = { video: "", recipe: "", steps: "", Name: "", Calories: "", Carbs: "", Protien: "", Fat: "", Fiber: "" };

  videoUrl: any;
  senitizedDataRecipe(video) {
    console.log("videoUrls", video);
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  initData(res) {
    let reqBody = {
      foodId: res.foodCode
    };
    this.appServices.fetchFood(reqBody).subscribe(
      res => {

        this.foodDetailsRecipe = JSON.parse(JSON.stringify(res)).dietItem;
        console.log("fetchFood Response:", res);

        if (this.foodDetailsRecipe && (this.foodDetailsRecipe.video || this.foodDetailsRecipe.video != "-")) {

          this.foodDetailsRecipe.video = this.foodDetailsRecipe.video
            .toString()
            .replace('"', "")
            .replace('"', "");
        }
        this.senitizedDataRecipe(this.foodDetailsRecipe.video);
        if (this.foodDetailsRecipe) {
          if (this.foodDetailsRecipe.steps != null) {
            this.foodDetailsRecipe.steps = this.foodDetailsRecipe.steps.trim();
          }
          if (this.foodDetailsRecipe.steps == "") {
            this.foodDetailsRecipe.steps = "~";
          }
          if (this.foodDetailsRecipe.recipe != null) {
            this.foodDetailsRecipe.recipe = this.foodDetailsRecipe.recipe.trim();
          }
          if (this.foodDetailsRecipe.recipe == "") {
            this.foodDetailsRecipe.recipe = "~";
          }
        }

        // this.portion = this.foodDetails.portion;
      },
      err => {
        console.log("fetchFood error:", err);
      }
    );
  }
  recipeLoadData() {
    let allData = [];
    let code = ["156",
      "015",
      "010",
      "383",
      "004",
      "003",
      "027",
      "054",
      "078",
      "083",
      "128",
      "129",
      "148",
      "149",
      "167",
      "169",
      "168",
      "172",
      "176",
      "254",
      "260",
      "271",
      "302",
      "304",
      "305",
      "306",
      "311",
      "313",
      "315",
      "324",
      "329",
      "372",
      "414",
      "421",
      "427",
      "430"];
    this.storage.get("recipeDate").then(resDate => {
      if (resDate && new Date(resDate).getDate() == new Date().getDate() && new Date(resDate).getMonth() == new Date().getMonth()) {
        this.storage.get("recipeDay").then(res => {
          this.initData(res);
        });
      } else {
        this.appServices.getRecipeOfTheDay().then(
          res => {
            this.storage.set("recipeDate", new Date());
            this.storage.set("recipeDay", res);
            this.initData(res);
          })
      }
    });
  }

  // checkOffer() {
  //   let justPaid = localStorage.getItem("justPaid");
  //   if(!justPaid || justPaid != "" ){
  //     if (localStorage.getItem("checkCounter") == "true" && localStorage.getItem("isOpenOffer") && (localStorage.getItem("isOpenOffer") == "5" || localStorage.getItem("isOpenOffer") == "8")) {
  //       let offerOpend = parseInt(localStorage.getItem("isOpenOffer"));
  //       ++offerOpend
  //       localStorage.setItem("isOpenOffer", offerOpend+"");
  //       localStorage.setItem("checkCounter", "false")
  //     //  this.getCouponDataConsumer();
  //     }
  //     let deadline = new Date(localStorage.getItem("countDownTimer")).getTime();
  //     let now = new Date().getTime();
  //     let t = deadline - now;
  //     if (t < 0) {
  //       this.showCouponIcon = false;
  //       localStorage.setItem("offerTimeExpired", "true");
  //     }
  //   }else{
  //     localStorage.removeItem("justPaid");
  //   }
  // }

  // Recipe of the day section end

  // Q&A of the day section start

  allPosts;
  bindPartContent="";
  bindContent="";
  postArray;
  pageNumber=1;
  perPagePost:Number = 1;
  imageUrl;
  content;
  title;
  isMoreQnADetails=true;

  loadQnAData(){
    this.storage.get("posts").then(posts => {
      this.allPosts = posts;
      this.storage.get("qaDate").then((resDate)=>{
        console.log("this.resDate",resDate);
        if(resDate && new Date(resDate).getDate() == new Date().getDate() && new Date(resDate).getMonth() ==  new Date().getMonth()){
          this.storage.get("qaDay").then((res)=>{
            this.postArray = res;
            if(this.postArray.author!=undefined){
              this.title = this.postArray.title.rendered;
              this.imageUrl = this.postArray['_embedded']['wp:featuredmedia'][0].source_url;
              this.content = this.postArray.content.rendered;
              this.bindPartContent = this.content.toString().substr(0,100)+"</p>";
              this.bindContent = this.postArray.content.rendered;
            }
          });
        } else {
          this.storage.get("qaHistory").then((res)=>{
            if(res && res.length > 0){
              let postArray = posts.filter(ele =>{
                return res.indexOf(ele.id) < 0;
              })
              const random = Math.floor(Math.random() * postArray.length);
              if(postArray && postArray.length > 0){
                this.postArray = posts[random];
                res.push(this.postArray["id"]);
                this.storage.set("qaHistory",res);
                this.storage.set("qaDate",new Date());
                this.storage.set("qaDay",this.postArray);
                this.reloadQA();
              }else{
                this.storage.set("qaHistory",[]);
                this.reloadDataQA(posts, random);
              }
            }else{
              const random = Math.floor(Math.random() * posts.length);
              this.reloadDataQA(posts, random);
            }
          })
        }
      });
    });
  }

  reloadDataQA(posts, random){
    this.postArray = posts[random];
    let tempArr = [];
    tempArr.push(this.postArray["id"]);
    this.storage.set("qaHistory",tempArr);
    this.storage.set("qaDate",new Date());
    this.storage.set("qaDay",this.postArray);
    this.reloadQA();
  }

  reloadQA(){
    if(this.postArray.author!=undefined){
      this.title = this.postArray.title.rendered;
      this.imageUrl = this.postArray['_embedded']['wp:featuredmedia'][0].source_url;
      this.content = this.postArray.content.rendered;
      this.bindPartContent = this.content.toString().substr(0,100)+"</p>";
      this.bindContent = this.postArray.content.rendered;
    }
  }
  gotoAllQA(){
    this.router.navigate(["blog"]);
  }
  showMore(){
    this.isMoreQnADetails=!this.isMoreQnADetails;
  }

  // Q&A of the day section end

  // News of the day sectino start

  allNewsPosts;
  bindNewsContent:String="";
  bindNewsTitle:String="";
  imageNewsUrl;

  gotoNews(){
    this.router.navigate(["news"]);
  }

  loadNewsData(res){
    if(this.allNewsPosts[res].author!=undefined){
      this.imageNewsUrl = this.allNewsPosts[res]['_embedded']['wp:featuredmedia'][0].source_url;
      this.bindNewsContent = this.allNewsPosts[res].content.rendered;
      this.bindNewsTitle = this.allNewsPosts[res].title.rendered;
    }
    this.storage.set("newsDay",this.allNewsPosts[res]);
  }
  
  longDescription(html: string) {
    return this.convertString(html.replace(/\[(.*?)\]/ig, ""));
  }
  
  convertString(input) {
    return input.split('<a').join('<a target="_blank"');
  }

  loadNewsOfDayData(){
    this.storage.get("news_header").then(postsHeader => {
      let headerNews = postsHeader;
      console.log("headerNews", headerNews);
      headerNews.forEach((element, index) => {
        headerNews[index].number = parseInt(element.title.rendered.match(/\d+/)[0]);
        headerNews[index].title.rendered = element.title.rendered.replace('#' + headerNews[index].number, '')
        headerNews[index].type = 'headers';
      });
      headerNews=headerNews.sort((a, b) => b.id - a.id);
      this.storage.get("news").then(posts => {
        this.allNewsPosts = headerNews.concat(posts);
        this.storage.get("newsDate").then((resDate)=>{
          if(new Date(resDate).getDate() == new Date().getDate() && new Date(resDate).getMonth() ==  new Date().getMonth()){
            this.storage.get("newsDay").then((res)=>{
              if(res.author!=undefined){
                this.imageNewsUrl = res['_embedded']['wp:featuredmedia'][0].source_url;
                this.bindNewsContent = res.content.rendered;
                this.bindNewsTitle = res.title.rendered;
              }
            });
          } else{
            this.storage.set("newsDate", new Date());
            this.storage.get("newsHistory").then((res)=>{
              if(res && res.length > 0){
                let postArray = this.allNewsPosts.filter(ele =>{
                  return res.indexOf(ele.id) < 0;
                })
                if(postArray && postArray.length > 0){
                  this.allNewsPosts = postArray;
                  res.push(this.allNewsPosts[0].id);
                  this.storage.set("newsHistory",res);
                  this.loadNewsData(0);
                }else{
                  this.storage.set("newsHistory",[]);
                  this.loadNewsData(0);
                }
              }else{
                res = [];
                res.push(this.allNewsPosts[0].id);
                this.storage.set("newsHistory",res);
                this.loadNewsData(0);
              }
            })
          }
        });
      this.utilities.hideLoader();        
    });
  })
  }


  loadOneTimeData(){
  //  this.loadQnAData();
    this.loadNewsOfDayData();
  }

  checkRateUs(){
    if(!localStorage.getItem("showRateUsPopup") && !localStorage.getItem("showRateUsPopupShowed")){
      let showRateUsPopup = moment(new Date()).add(3, "days").format();
      localStorage.setItem("showRateUsPopup", showRateUsPopup);
    } else if(!localStorage.getItem("showRateUsPopupShowed")){
      if(new Date().getTime() > new Date(localStorage.getItem("showRateUsPopup")).getTime()){
        this.appService.showRateUSFunc();
      }
    }
  }

  // check7DaysTrialStatus(){
  //   let plans = firebase.firestore().collection('randomLock').doc('yevyi1qgRcCN2crRA8ey');
  //   plans.get().then(snap => {
  //     const data = snap.data();
  //     CONSTANTS.Refund_policy = data.Refund_policy;
  //   })
  // }

  image_URL = '';
  checkOfferInterval;
  selectedThemeColor = '';
  weightLossThemeColor = '#01A3A4';
  immunityThemeColor = '#FD9F33';
  pcosThemeColor = '#FF5A7D';
  fatThemeColor = '#FD980F';
  muscleThemeColor = '#0B94C1';
  weightLossPlusThemeColor = '#0B94C1';
  postCovidThemeColor = '#754B29';
  detoxThemeColor = '#4CB271';
  diabetesThemeColor = '#D14322';
  hypertensionTheme ='#FF5D56';
  cholesterolTheme = '#A31E79';
  weightLossBottomRound = './assets/images/header-circle.svg';
  immunityBottomRound = './assets/images/header-circle-immunity.svg';
  postCovidBottomRound = './assets/images/header-circle-post-covid.svg';
  detoxBottomRound = './assets/images/header-circle-detox.svg';
  pcosBottomRound = './assets/images/pcos.svg';
  diabetesThemeColorRound = './assets/images/header-circle-diabetes.svg'; //'#D14322';
  hypertensionThemeRound ='./assets/images/header-circle-hypertension.svg';//'#FF5D56';
  cholesterolThemeRound = './assets/images/header-circle-cholesterol.svg';//'#A31E79';
  planStatusChecked = false;

  checkUserPlanStatus(){
    // alert("Check user plan status...");
    this.appService.getOnePlan().then(
      res => {
        this.storage.set("userPlanData", res);
        // alert("Got user plan status...")
        let data = JSON.parse(JSON.stringify(res));
        let a = moment(new Date(data.planExpiryDate), "DD.MM.YYYY");
        let b = moment(new Date(data.profile.createdDate), "DD.MM.YYYY");
        let diffDays = a.diff(b, 'days');
        let expDateDiff = this.dateCompare(new Date(), new Date(data.planExpiryDate));
        // if(moment(new Date(data.planExpiryDate)).format("DDMMYYYY") == moment(new Date(data.profile.createdDate)).format("DDMMYYYY") || (diffDays <= 7 && expDateDiff)) {
        //   this.showFreeTrialOfferIcon = true;
        // }
        // CONSTANTS.isPlanActiveParent = this.isPlanActive = this.isPlanActiveForDiet = data.isPlanActive;
        this.profile = CONSTANTS.profile = data.profile;
        CONSTANTS.email = CONSTANTS.profile["email"];
        this.recipeLoadData();
        // alert("Checkiing plan expiry date");
        if (this.firstDateIsPastDayComparedToSecond(new Date(), new Date(data['planExpiryDate']))) {
          // alert("Find plan active");
          this.planStatusChecked = true;
          CONSTANTS.isPlanActiveParent = this.isPlanActive = this.isPlanActiveForDiet = true;
          this.isRandomLock = false;
          CONSTANTS.isRandomLock = this.isRandomLock;
          CONSTANTS.Diet_plan_open = true;
          // this.checkAnotherLockFlow();
          // this.dateSlides.lockSwipes(!data.isPlanActive);
        }else if (this.utilities.isDeviceiOS() || this.utilities.isDeviceAndroid()) {
          // alert("Checkiing plan for android and ios");
          // Checking user plan from firestore
          this.fetchPlan(data);
        } else {
          // alert("Checkiing plan expiry date");
          CONSTANTS.isPlanActiveParent = this.isPlanActive = this.isPlanActiveForDiet = false;
        //  this.checkAnotherLockFlow();
          this.planStatusChecked = true;
        }
        
        // Survey Page check
        if(!CONSTANTS.isPlanActiveParent && !localStorage.getItem('surveyOpend')) {
          setTimeout(()=>{
            if(!localStorage.getItem('surveyOpend')){
           //   this.checkSurveyStatus();
            }
          }, this.checkSurveyInterval);  
        }
        this.appService.isPremiumUserFunc();
      }, err => {
        console.log("PlanOne api Error: ", err);
        // this.utilities.presentAlert(
        //   "Something went wrong! Please try after some time."
        // );
      });
  }

  // toDoList = [];
  // fetchTodoList(){
  //   this.appService.fetchTodoList().then(
  //   res => {
  //     if(res["todoList"].length > 0){
  //       this.toDoList = res["todoList"];
  //       // this.scheduleTodoNotification(this.toDoList);
  //       this.storage.set("toDoList", this.toDoList);
  //     }
  //   })
  // }

  // toDoListChecked(isChecked, ind){
  //   this.toDoList[ind]["status"] = isChecked;
  //   this.storage.set("toDoList", this.toDoList);
  //   let obj =  {
  //     "date": moment(new Date()).format("DDMMYYYY"),
  //     "todoId": this.toDoList[ind]["_id"],
  //     "status": this.toDoList[ind]["status"]
  //   };
  //   this.appService.saveOrUpdateCustDailyTodo(obj).then(()=>{
  //     console.log("TOdo Update");
  //   })
  //   if(isChecked){
  //   //  this.localNotifications.cancel([this.toDoList[ind]["_id"] + 100]);
  //   }else{
  //     let ele = this.toDoList[ind];
  //     ele["display_slots"].forEach((ele1) =>{
  //       this.diets.filter((ele2) =>{
  //         if(ele2.slot == ele1) {
  //           console.log("Slots ", ele2 , " Todo " , ele);
  //           let atTime = ele2.time.split(":");
  //           let newSetTime = new Date(new Date().setHours(atTime[0],atTime[1]));
  //           // this.localNotifications.schedule([
  //           //   {
  //           //     id: Number(ele["_id"]) + 100,
  //           //     title: "To Do for you",
  //           //     text:  ele["todo"],
  //           //     smallIcon: 'res://sm_icon.png',
  //           //     trigger: { at: new Date(newSetTime.setMinutes(newSetTime.getMinutes() - 15)) },
  //           //     icon: "file://assets/img/todo-icons/"+ ele.image +".jpg"
  //           //   }
  //           // ]);
  //         }
  //       })
  //     })
  //   }
  //   // console.log("IS checked ", isChecked , " index ", ind , " User ", CONSTANTS.userDetails);
  // }

  loadWhySDPData(){
    let self = this;
    self.getWhySDPdata();
 
  }

 

  dataOnInIt(){
  

    this.checkRateUs()

    if(localStorage.getItem("slideToFirst") == "true"){
      localStorage.removeItem("slideToFirst");
      this.isDetox = false;
      CONSTANTS.isDetox = false;
      this.detoxToggle = false;
      this.currentDateIndex = 0;
     // this.dateSlides.slideTo(0, 200);
     // this.slides.slideTo(0, 200);
      this.ionContent.scrollToTop();
      this.diets = [];
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
        minus1010: 0
      };
    } 

    this.route.queryParams.subscribe(res => {
      if(res.selectedSlot){
        this.ionContent.scrollToTop();
        this.slides.slideTo(res.selectedSlot, 200);
      }
      
    });
    this.image_URL = CONSTANTS.image_URL;
    
    this.checkDieses();
    this.restMessages();
    this.storage.get("dietData").then((res)=>{
      let dietData = res && res[CONSTANTS.dietDate];
      if(dietData && ('Detox' in dietData || 'detox' in dietData)){
        this.isDetox = true;
      }else{
        this.isDetox = false;
      }
      CONSTANTS.isDetox = this.isDetox;
    // this.storage.get("profileData").then((res) => {  
    //     let profileData = JSON.parse(res);

    //     // Check protien tracker icon show/hide
    //     console.log("Check protien tracker icon show/hide")
    //     let showProtienTracker = false;
    //     if(profileData['profile']['dietPlanType']!=undefined){
    //     if((profileData['profile']['dietPlanType'].includes('fatShredding') || profileData['profile']['dietPlanType'].includes('muscleGain'))){
    //       this.showProtienTracker = true;
    //       showProtienTracker = true;
    //     }
    //     else if(!showProtienTracker) {
    //       this.showProtienTracker = false;
    //     }
    //    }
    //     else if(!showProtienTracker) {
    //       this.showProtienTracker = false;
    //     }
    //     // this.checkingProtinTracker = false;
    //     CONSTANTS.defaultCalories = profileData.lifeStyle["calories"];
    //     CONSTANTS.country = profileData.lifeStyle["country"] ? profileData.lifeStyle["country"] : "IND";
    //     let selectedDietPlan = this.selectedDietPlan = 
    //     profileData.lifeStyle.dietPlanName ? profileData.lifeStyle.dietPlanName && profileData.lifeStyle.dietPlanName.dietPlanType ? profileData.lifeStyle.dietPlanName.dietPlanType:  profileData.lifeStyle.dietPlanName : "weightLoss" ;//this.isTypeCovid = profileData.lifeStyle.dietPlanName && profileData.lifeStyle.dietPlanName != "weightLoss" ? true : false;
        
    //     CONSTANTS.selectedDietPlan = selectedDietPlan.split("_")[0];
    //     // [ngClass]="selectedDietPlan == 'weightLoss' ? 'weight-loss' : selectedDietPlan == 'immunity_booster' ? 'immunity-section' : selectedDietPlan == 'pos_covid' ? 'post-covid-section' : 'detox-section' "
    //     if (this.isDetox){
    //       this.selectedThemeColor = this.detoxThemeColor;
    //     }else if(this.selectedDietPlan == 'weightLoss'){
    //       this.selectedThemeColor = this.weightLossThemeColor;
    //     }else if(this.selectedDietPlan == 'immunity_booster'){
    //       this.selectedThemeColor = this.immunityThemeColor ;
    //     }else if(this.selectedDietPlan == 'weightLossPlus'){
    //       this.selectedThemeColor = this.weightLossPlusThemeColor ;
    //     }else if(this.selectedDietPlan == 'post_covid'){
    //       this.selectedThemeColor = this.postCovidThemeColor ;
    //     }else if(this.selectedDietPlan == 'diabetes'){
    //       this.selectedThemeColor = this.diabetesThemeColor ;
    //     }else if(this.selectedDietPlan == 'hypertension'){
    //       this.selectedThemeColor = this.hypertensionTheme ;
    //     }else if(this.selectedDietPlan == 'cholesterol'){
    //       this.selectedThemeColor = this.cholesterolTheme ;
    //     }else if(this.selectedDietPlan == 'pcos'){
    //       this.selectedThemeColor = this.pcosThemeColor ;
    //     }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'muscleGain'){
    //       this.selectedThemeColor = this.muscleThemeColor ;
    //     }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'fatShredding'){
    //       this.selectedThemeColor = this.fatThemeColor ;
    //     }else{
    //       this.selectedThemeColor = this.weightLossThemeColor;
    //     }
    //     CONSTANTS.selectedPlanThemeColor = this.selectedThemeColor;
    //     console.log("Seleected theme color dataoninit", this.selectedThemeColor);
    //     // set Toggle Buttons
    //     this.setToggleButtons();
  
    //     this.platform.ready().then(() => {
    //     //  this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
    //     })
    //     this.selectedCountry = CONSTANTS.country;
    //  //   this.getWordPressHabits();
    //     this.loadOneTimeData();
    //     // if(this.selectedCountry == "IND")  this.recipeDayComponent.loadData();
    //   })
    })
    
    this.loadAllData();
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      if(this.isAndroidDevice) navigator['app'].exitApp();
    })

   // this.checkUserPlanStatus();
    
    // if(localStorage.getItem("startActivity") || this.isIosDevice){
    //   // this.trackerInterval = setInterval(() => {
    //   //   this.testGoogleFit();
    //   // }, 20000);
    //   this.startActivityTracking();
    // }
    this.manageCouponCounter();
    // this.whoWeAreVideo = this.returnSenitzedData("https://www.youtube.com/embed/Fg0Y3tBv06o");
    setTimeout(() => {
      this.storage.get("isNavigateDiet").then((res) => {
        if (res != true) {
          this.dietChoices = true;
        }
      });

    }, 10000);
  }

  sortWhySDPData(whySDPData){
    this.storage.get("localData").then(val => {
      if (val != "") {
        let data = JSON.parse(val);
        let diseases = data.otherMaster.diseases.filter(item=>{
          return item.isSelected==true;
        });
        if(diseases && diseases.length > 0){
          let arrray1 = [];
          diseases.forEach(element => {
            arrray1 = [...arrray1, ...whySDPData.filter(ele => { // Merge array after filter
                return ele.recommendedIn == element.code;
            })];
          });
          whySDPData = [...new Set([...arrray1, ...whySDPData].map(item => item))]; // Unique objects set
          whySDPData.sort(function(a, b){return a["orderId"]-b["orderId"]});
          this.whySDPData = whySDPData;
        }else{
          whySDPData.sort(function(a, b){return a["orderId"]-b["orderId"]});
          this.whySDPData = whySDPData;
        }
        // let self = this;
        // setTimeout(() => {
        //   self.videoSlideWhySDP.update();
        // }, 3000);
        
      }else{
        whySDPData.sort(function(a, b){return a["orderId"]-b["orderId"]});
        this.whySDPData = whySDPData;
        // let self = this;
        // setTimeout(() => {
        //   self.videoSlideWhySDP.update();
        // },3000);
      }
    })
  }

  async getWhySDPdata(){
  //  const snapshot = await firebase.firestore().collection("whySDP").get();
  //  let whySDPData = snapshot.docs.map(doc => doc.data());
    // whySDPData.forEach((ele)=>{
    //   ele["video"] = this.returnSenitzedData(ele["video"]);
    // })
  //  this.sortWhySDPData(whySDPData);
  }

  loadMessages(){
    // if(localStorage.getItem("foodNotificationMsg")){
    //   clearTimeout(this.tipMsgInterval);
    //   this.activeTip = this.senitizeHTML('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
    //   this.tipMsgInterval = setTimeout(() => {
    //     clearTimeout(this.tipMsgInterval);
    //     this.activeTip = localStorage.getItem("foodNotificationMsg");
    //     localStorage.removeItem("foodNotificationMsg");
    //     setTimeout(() => {
    //       this.tip();
    //     }, this.loadingMsgTime);
    //   }, this.loadingMsgImgTime);
    // }else this.tip();
    //this.tip()
  }

  // async checkSurveyStatus(){
  //   let randomNumber;
  //   if(localStorage.getItem("surveyOpendRandomNumber")){
  //     randomNumber = Number(localStorage.getItem("surveyOpendRandomNumber"));
  //   }else{
  //     randomNumber = Math.floor(Math.random() * 100) + 1;
  //     localStorage.setItem("surveyOpendRandomNumber", randomNumber);
  //   }
  //   if(!localStorage.getItem('surveyOpend') && !localStorage.getItem('razorPayClicked') && randomNumber <= 15){
  //     // this.router.navigate(['survey']);
  //     localStorage.setItem('surveyOpend', 'true');
  //     let me = this;
  //     me.utilities.hideLoader();
  //     const modal = await this.modalController.create({
  //       component: SurveyStartComponent,
  //       backdropDismiss: true,
  //       cssClass: 'app-offer-popup'
  //     });
  //     modal.onDidDismiss().then((data: any) => {
  //       if (data.data) {
  //         this.router.navigate(['survey']);
  //       }else{
  //         this.utilities.logEvent("Survey_Closed_without_complete", {});
  //       }
  //     })
  //     me.utilities.hideLoader();
  //     return await modal.present();
  //   }
  // }

 
  ionViewWillEnter() {
    //  setTimeout(()=>{this.utilities.hideLoader();},2000);
    // this.getProfile();
    // if(localStorage.getItem('isAnalysisPageVisited')){
    //   this.isAnalysisPageVisited = true;
    // }
    // this.mainCircleRadiousAnimate();
    // if(localStorage.getItem("startActivity") || this.isIosDevice) {
    //   this.isActivityStarted = true;
  
    // }
    //   this.dataOnInIt();
  
    // this.isWaterNotificationEnable = localStorage.getItem("waterClearAllNotification") == 'true' ? true : false;
    // this.isFastingNotificationEnable = localStorage.getItem("fastingClearAllNotification") == 'true' ? true : false;
    // this.dateChanged(this.weeks[0]);
  }

  getUserDetails(){
    let me = this;
    // this.firebaseX.getCurrentUser().then((userDetails)=>{
    //   console.log("User deatails ", userDetails);
    //   if(userDetails){
    //     this.storage.get("profile").then((user)=>{
    //       let userInfo = JSON.parse(user);
    //       userInfo.uid = userDetails["uid"];
    //       me.user = CONSTANTS.userDetails = userInfo;
    //       CONSTANTS.email = userInfo.email;
    //       if (me.platform.is('cordova')) {
    //         // me.pushNotification(user);
    //         // this.localNotificationSet("main", user);
    //         me.checkPushPermission("main", userInfo);
    //       }
    //       me.dataOnInIt();
    //     })
    //   }else{
    //     counterSwipe = 0;
    //     me.user = null;
    //   }
    // })
  }

  isActivityStarted = false;
  startActivityTracking(){
    // this.testGoogleFit();
    this.trackerInterval = setInterval(() => {
    //  this.testGoogleFit();
    }, 10000);
  }

  // isOpenFreeTrial = false;
  // openFreeTrial(){
  //   if(!this.isOpenFreeTrial && this.showFreeTrialOfferIcon){
  //     this.isOpenFreeTrial = true;
  //     let plans = firebase.firestore().collection('randomLock').doc('yevyi1qgRcCN2crRA8ey');
  //     plans.get().then(snap => {
  //       const data = snap.data();
  //       if(data.freeTrialDays && data.freeTrialDays > 0){
  //         localStorage.setItem("freeTrialSet", "true");
  //         let diffDays = data.freeTrialDays
  //         if(localStorage.getItem("freeTrialStartedAt")){
  //           let a = moment(new Date(localStorage.getItem("freeTrialStartedAt")), "DD.MM.YYYY");
  //           let b = moment(new Date(), "DD.MM.YYYY");
  //           diffDays = a.diff(b, 'days') < -1 ? a.diff(b, 'days') : data.freeTrialDays;
  //         }
  //         this.presentFreeStartTrial(diffDays, data.video, data.couponCode);
  //       }
  //     })
  //   }
  // }

  // checkAnotherLockFlow(){
  //   if(localStorage.getItem("randomLockCounter")){
  //   //  let plans = firebase.firestore().collection('randomLock').doc('yevyi1qgRcCN2crRA8ey');
  //     plans.get().then(snap => {
  //       const data = snap.data();
  //       if(data.randomLockCounter > Number(localStorage.getItem("randomLockCounter"))){
  //         // this.isPlanActiveForDiet = true;
  //         this.isRandomLock = true;
  //         CONSTANTS.isRandomLock = this.isRandomLock;
  //         CONSTANTS.Diet_plan_open = false;
  //       }else{
  //         this.isRandomLock = false;
  //         CONSTANTS.isRandomLock = this.isRandomLock;
  //         CONSTANTS.Diet_plan_open = true;
  //       }
  //     }).catch((err)=>{
  //       this.isRandomLock = false;
  //       CONSTANTS.isRandomLock = this.isRandomLock;
  //       CONSTANTS.Diet_plan_open = true;
  //       console.log("Error in random lock daata grab: ", err);
  //     })
  //   }else{
  //     this.isRandomLock = false;
  //     CONSTANTS.isRandomLock = this.isRandomLock;
  //     CONSTANTS.Diet_plan_open = true;
  //   }
  //   // this.dateSlides.lockSwipes(true);
  // }

  // updateExpDateInFirebase(oldPlanExpiryDate, newPlanExpiryDate, productId, amount, period, platform){
  //   let obj = {
  //     oldPlanExpiryDate: oldPlanExpiryDate,
  //     newPlanExpiryDate: newPlanExpiryDate, 
  //     productId: productId,
  //     amount: amount,
  //     email: this.user.email,
  //     duration: period,
  //     platform: platform
  //   }
  //   firebase.firestore().collection('user_plan_renew').doc(this.user.uid).set(obj).then(function () {
  //     console.log("Enter user_plan_renew entry")
  //   }).catch(function (error) {
  //     console.error("Error writing document: ", error);
  //   });
  // }

  getReciptData(cb){
  //  let prod1 = this.iap2.get('smart_diet_planner_monthly_app');
    // this.iap2.refresh().completed(()=>{
    //   // GET RECIPET DATA
    //   let receiptProduct = [];
    //   this.productIDs.forEach((ele) =>{
    //     let prod = this.iap2.get(ele);
    //     console.log("GET RECIPET DATA: ", prod);
    //     if(prod.transaction && receiptProduct.length == 0 && prod.transaction["appStoreReceipt"]){
    //       receiptProduct.push(prod.transaction["appStoreReceipt"]);
    //       this.storage.set("iosRecieptData", prod.transaction["appStoreReceipt"]).then(()=>{
    //         cb();
    //       });
    //     }
    //   })
    // })
  }

  radiousValue = true;
  mainCircleRadiousAnimate(){
    let self = this;
    setInterval(()=>{
      self.radiousValue =  !self.radiousValue; // == 55 ? 52 : 55
    },2000)
  }

  dietChoices: boolean = false;
  async fetchPlan(planData) {
    let me = this;
   // try{
      // alert("Checkiing plan in firebase");
     // let plans = await firebase.firestore().collection('user_plan').doc(this.user.uid);
    //   plans.get().then(snap => {
    //     if (snap.exists) {
    //       // alert("Found plan in firebase");
    //       const data = snap.data();
    //       me.currentPlan = data;
    //       if (data.isPlanActive) {
    //         if (me.isIosDevice) {
    //           // alert("Found plan in IOS section");
    //           // me.getReciptData(()=>{
    //             me.inApp.checkStatus(this.user.uid).then((res: any) => {
    //               // alert("Get inapp purchase user status");
    //               me.planStatusChecked = true;
    //               if(planData && planData["planExpiryDate"] && new Date(planData["planExpiryDate"]) && me.dateCompare(new Date(data['newExpDate']), new Date(planData["planExpiryDate"]) )){
    //                 // alert("Update user expire date");
    //                 me.storage.get("puchase_plan").then((ele)=>{
    //                   let puchase_plan_data = JSON.parse(JSON.stringify(ele))
    //                   let plansArray = puchase_plan_data["couponList"];
    //                   let plan = plansArray.filter((ele) =>{
    //                     return (me.isIosDevice && ele.appStoreId == data.productId) || ( ele.playStoreId == data.productId)
    //                   });
    //                   if(plan && plan.length){
    //                     me.updateExpireDate(plan[0]["discountedAmount"], new Date(data['newExpDate']));
    //                     me.updateExpDateInFirebase(new Date(data['planExpiryDate']), new Date(planData["newExpDate"]),  me.currentPlan.receiptData.productId, planData.amount, me.currentPlan.receiptData.period, "apple");
    //                   }
    //                 })
    //               }
    //               // alert("User active TRUE");
    //               CONSTANTS.isPlanActiveParent = me.isPlanActiveForDiet = data.isPlanActive;
    //               me.planStatusChecked = true;
    //               if(!me.isPlanActiveForDiet) me.checkAnotherLockFlow();
    //               else {
    //                 me.dateSlides.lockSwipes(false);
    //                 me.isRandomLock = false;
    //                 CONSTANTS.isRandomLock = me.isRandomLock;
    //                 CONSTANTS.Diet_plan_open = true;
    //               }
  
    //               // if(this.firstDateIsPastDayComparedToSecond(new Date(), new Date(data['planExpiryDate']))){
    //               //   CONSTANTS.isPlanActiveParent = this.isPlanActive = this.isPlanActiveForDiet = true;
    //               //   this.isRandomLock = false;
    //               //   CONSTANTS.Diet_plan_open = true;
    //               // }else{
    //               //   CONSTANTS.isPlanActiveParent = this.isPlanActive = this.isPlanActiveForDiet = false;
    //               //   this.isRandomLock = false;
    //               //   CONSTANTS.Diet_plan_open = true;
    //               //   this.checkAnotherLockFlow();
    //               // }
    //             }).catch(error => {
    //               me.checkAnotherLockFlow();
    //               me.planStatusChecked = true;
    //               console.log(error);
    //             });
    //           // });
    //         } else {
    //           me.inApp.validateGoogleReceipt(me.currentPlan.receiptData, me.user.uid).then((res: any) => {
    //             me.planStatusChecked = true;
    //             if(res.newExpDate && me.dateCompare(new Date(data['newExpDate']), new Date(planData["planExpiryDate"]) )){
    //               me.storage.get("puchase_plan").then((ele)=>{
    //                 let puchase_plan_data = JSON.parse(JSON.stringify(ele))
    //                 let plansArray = puchase_plan_data["couponList"];
    //                 let plan = plansArray.filter((ele) =>{
    //                   return (me.isIosDevice && ele.appStoreId == data.productId) || ( ele.playStoreId == data.productId)
    //                 });
    //                 if(plan && plan.length){
    //                   me.updateExpireDate(plan[0]["discountedAmount"], new Date(data['newExpDate']));
    //                   me.updateExpDateInFirebase(new Date(data['planExpiryDate']), new Date(planData["newExpDate"]),  me.currentPlan.receiptData.productId, planData.amount, me.currentPlan.receiptData.period, "Android");
    //                 }
    //               })
    //             }
    //             CONSTANTS.isPlanActiveParent = me.isPlanActiveForDiet = data.isPlanActive;
    //             me.planStatusChecked = true;
    //             // me.dateSlides.lockSwipes(!data.isPlanActive);
    //             if(!me.isPlanActiveForDiet) me.checkAnotherLockFlow();
    //             else {
    //               me.dateSlides.lockSwipes(false);
    //               me.isRandomLock = false;
    //               CONSTANTS.isRandomLock = me.isRandomLock;
    //               CONSTANTS.Diet_plan_open = true;
    //             }
    //             // if(me.firstDateIsPastDayComparedToSecond(new Date(), new Date(data['planExpiryDate']))){
    //             //   CONSTANTS.isPlanActiveParent = me.isPlanActive = me.isPlanActiveForDiet = true;
    //             //   me.isRandomLock = false;
    //             //   CONSTANTS.Diet_plan_open = true;
    //             // }else{
    //             //   CONSTANTS.isPlanActiveParent = me.isPlanActive = me.isPlanActiveForDiet = false;
    //             //   me.isRandomLock = false;
    //             //   CONSTANTS.Diet_plan_open = true;
    //             //   me.checkAnotherLockFlow();
    //             // }
    //           }).catch(error => {
    //             me.checkAnotherLockFlow();
    //             me.planStatusChecked = true;
    //             console.log(error);
    //           });
    //         }
    //       }
    //     }else{
    //       // alert("Not Found plan in firebase");
    //       me.checkAnotherLockFlow();
    //       me.planStatusChecked = true;
    //     }
    //   }).catch((err)=>{
    //     me.checkAnotherLockFlow();
    //     me.planStatusChecked = true;
    //     console.log("Erroorr : ", err);
    //   })
    // }catch(err){
    //   me.checkAnotherLockFlow();
    //   me.planStatusChecked = true;
    //   console.log("Erroorr : ", err);
    // }
    
  }

  ionViewWillLeave() {
    clearTimeout(this.tipMsgInterval);
    clearTimeout(this.tipTimeout);
    this.platform.ready().then(() => {
   //   this.statusBar.backgroundColorByHexString('#01A3A4');
    })
    this.setToggleButtons();
    if (this.intervalIosCalories) {
      clearInterval(this.intervalIosCalories);
    }
    if (this.freeTrialInterval) {
      clearInterval(this.freeTrialInterval);
    }
    if (this.trackerInterval) {
      clearInterval(this.trackerInterval);
    }
    clearInterval(this.checkOfferInterval)
    this.subscription.unsubscribe();
  }

  toWaterNotification(){
    this.router.navigate(['water-notification-settings']);
  }

  toFastingNotification(){
    this.router.navigate(['fasting-notification-settings'])
  }

  getHabitsForUpdate() {
    this.appService.getHabitsForUpdate().then(
      res => {
        this.habitCheck = JSON.parse(JSON.stringify(res)).habits;
        const habitlst = JSON.parse(JSON.stringify(res));
        if (!habitlst.isHabitApplicableForToday) {
          this.storage.set("habits", habitlst).then(() => {
            this.storage.set("dietData", null).then(() => {
              this.storage.set("optionsData", null).then(() => {
                localStorage.removeItem("refreshCounter");
                // let self  = this;
                // setTimeout(() => {
                //   self.openFreeTrial();
                // },3000000);
                this.router.navigate(["unlock-plan"]);
              })
            })
          })
        } else {
          this.fetchDietPlan();
        }
      },
      err => { }
    );
  }

  getHabitsForUpdateOneTime() {
    // this.appService.getHabitsForUpdate().then(
    //   res => {
    //     this.habitCheck = JSON.parse(JSON.stringify(res)).habits;
    //     const habitlst = JSON.parse(JSON.stringify(res));
    //     //  console.log("habbit logs:", JSON.stringify(habitlst));
    //     if (!habitlst.isHabitApplicableForToday) {
    //       this.storage.set("dietData", null).then(() => {
    //         this.storage.set("optionsData", null).then(() => {
    //           localStorage.removeItem("refreshCounter");
    //           // let self  = this;
    //           // setTimeout(() => {
    //           //   self.openFreeTrial();
    //           // },3000000);
    //           this.router.navigate(["unlock-plan"]);
    //         })
    //       })
    //     } else {
          this.fetchDietPlan();
    //     }
    //   },
    //   err => { }
    // );
  }

  upgradePlan() {
  //  this.paymentSubscribeModel('update diet plan');
    // this.router.navigate(["upgrade-plan"]);
  }

  upgradeLockPlan() {
   // this.paymentSubscribeModel('unlock your diet plan');
    // this.router.navigate(["upgrade-plan"]);
  }

  Continue() {
    this.isExpired = false;

    console.log("close plan");
  }

  resultData:any = [
    // {
    //   "resultImage": "./assets/images/test03.png",
    //   "resultName": "Nitya Arora",
    //   "resultAge": "28 yrs",
    //   "resultTitle": "Lost 52 Kg  in 14 months",
    //   "resultDetails": '"I had tried all sorts of diets such as GM, keto, intermittent fasting, did lots of exercises also but the results were temporary. This app taught me the right way."'
    // },
    {
      "isPlantype":false,
      "resultImage": "./assets/images/trnsform_new.jpeg",
      "resultName": "Viraj Sethi",
      "resultAge": "26 yrs",
      "resultTitle": "Transformed  in 15 months",
      "resultDetails": '"Smart Diet Planner helped me a lot to align my diet as per macro nutrient & my taste. Features like Protein Tracker was something I used to follow everyday."'
    },
    {
      "isPlantype":false,
      "resultImage": "./assets/images/tejas.png",
      "resultName": "Tejas",
      "resultAge": "25 yrs",
      "resultTitle": "Transformed  in 1.7 year",
      "resultDetails": '"I was using excel earlier to plan my diet and now I use "Smart Diet Planner" I highly recommend it to my followers and to my students."'
    },
    {
      "isPlantype":false,
      "resultImage": "./assets/images/transform_musel.jpg",
      "resultName": "Fakhare Alam",
      "resultAge": "35 yrs",
      "resultTitle": "Transformed  in 1 year",
      "resultDetails": '"For Me following diet had been tough as I am very choosy of my food. This app is helping me and I really like the protein tracker"'
    }
    // ,
    // {
    //   "resultImage": "./assets/images/test01.png",
    //   "resultName": "Disha Jain",
    //   "resultAge": "31 yrs",
    //   "resultTitle": "Lost 14 Kg in 4 months",
    //   "resultDetails": '"Being a foodie my journey was difficult but this app gives me a plethora of healthy options to eat and as per my liking, made the journey much easier."'
    // }
    ,{
      "isPlantype":true,
      "resultImage": "./assets/images/test02.png",
      "resultName": "Shalloo Chawdhary",
      "resultAge": "45 yrs",
      "resultTitle": "Lost 45 Kg in 10 months",
      "resultDetails": '"Smart diet planner taught me the right way of losing fat based on changes in lifestyle with my choice of meals and the concept of mindful eating."'
    },{
      "isPlantype":true,
      "resultImage": "./assets/images/test04.png",
      "resultName": "Poonam Bedi",
      "resultAge": "56 yrs",
      "resultTitle": "Lost 10 Kg in 3 months",
      "resultDetails": '"Smart Diet plan taught me right way of eating and I have been able to change my lifestyle with ease with help of its trackers."'
    },{
      "isPlantype":true,
      "resultImage": "./assets/images/test05.png",
      "resultName": "Puneet Manchanda",
      "resultAge": "51 yrs",
      "resultTitle": "87 Kg to 72 Kg in 5 months",
      "resultDetails": '"I am a transformed person and much healthier version of myself. I have learnt what to eat and how much to eat at what time with this app."'
    },{
      "isPlantype":true,
      "resultImage": "./assets/images/test06.png",
      "resultName": "Sakshi Sharma",
      "resultAge": "26 yrs",
      "resultTitle": "Lost 6 kgs in 2 months",
      "resultDetails": '"Got healthy personalized diet plan based on my preferences. I could see the results from the 1st week itself. It had certain key mantras that are cherry on the cake."'
    },{
      "isPlantype":true,
      "resultImage": "./assets/images/test07.png",
      "resultName": "Saurabh Kochhar",
      "resultAge": "42 yrs",
      "resultTitle": "Reduced 16 Kg in 5 months",
      "resultDetails": '"Best part of this app is NO MOR CALORIES COUNTING. I used to hate data entry to count calories. With this app  I know what to eat and when to eat."'
    }
  ];
  resultDataUpdated:any=[];
  isManjhariNew:any="manjhari2.png";
  // weightGraph() {
    
  //   this.appService.getWeightGraph().then(
  //     res => {
  //       this.utilities.hideLoader();
  //       this.weightGraphData = JSON.parse(JSON.stringify(res));
  //       console.log("this.weightGraphData", this.weightGraphData);

  //       setTimeout(()=>{
  //       this.storage.get("profileData").then(val => {
  //         let profile = this.utilities.parseJSON(val);
  //         console.log("ZprofileData Alam:-", profile);
    
  //         if(profile.profile.dietPlanType==="muscleGain" || profile.profile.dietPlanType==="fatShredding"){
  //           this.isManjhari=true;
  //           this.isManjhariNew = "manjhari.jpeg";
  //           this.resultData[0].isPlantype = true;
  //           this.resultData[1].isPlantype = true;
  //           this.resultData[2].isPlantype = true;
  //           //this.videoManjhari = "https://www.youtube.com/embed/raL0GedTV-Q";
  //           }
  //           else{
  //             this.isManjhari=false;
  //             this.isManjhariNew = "manjhari2.png";
  //             this.resultData[0].isPlantype = false;
  //             this.resultData[1].isPlantype = false;
  //             this.resultData[2].isPlantype = false;
  //           }
  //           this.resultDataUpdated = [...this.resultData].filter(item=>{
  //             return item.isPlantype===true;
  //           });

  //       });
  //     },100);
  //       this.weightIsCollaped();
  //     },
  //     err => {
  //       this.utilities.hideLoader();
  //     }
  //   );
  // }

  ngOnDestroy() {
    console.log("destroy");
    clearInterval(this.intervalPercent);
    clearInterval(this.myInterval);
    clearInterval(this.interval);
    clearInterval(this.deficitInterval);
    
  }

  restMessages(){
    if(this.isIosDevice){
      this.tipMessage = this.insertItemInArrayOnSpecificIndex(this.tipMessage,4,'<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
      this.tipMessage = this.insertItemInArrayOnSpecificIndex(this.tipMessage,5,'<span class="two-lines-noti-msg">Give permission in health kit to "Smart diet planner" to keep track of your steps.</span>');
      this.tipMessageafterReg = this.insertItemInArrayOnSpecificIndex(this.tipMessageafterReg,2,'<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
      this.tipMessageafterReg = this.insertItemInArrayOnSpecificIndex(this.tipMessageafterReg,3,'<span class="two-lines-noti-msg">Give permission in health kit to "Smart diet planner" to keep track of your steps.</span>');
    }else if(this.isAndroidDevice){
      this.tipMessage = this.insertItemInArrayOnSpecificIndex(this.tipMessage,4,'<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
      this.tipMessage = this.insertItemInArrayOnSpecificIndex(this.tipMessage,5,'<span class="two-lines-noti-msg"> <span class="custom-link-color" clickId="Activate">Activate</span> your Google Fit to keep track of your steps and calories burnt.</span>');
      this.tipMessageafterReg = this.insertItemInArrayOnSpecificIndex(this.tipMessageafterReg,2,'<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
      this.tipMessageafterReg = this.insertItemInArrayOnSpecificIndex(this.tipMessageafterReg,3,'<span class="two-lines-noti-msg"> <span class="custom-link-color" clickId="Activate">Activate</span> your Google Fit to keep track of your steps and calories burnt.</span>');
    }
    if(localStorage.getItem("startActivity")) this.removeHealthKitPerMessage();
    // this.storage.get("localData").then((val) => {
    //   let data = JSON.parse(val);
      
    //   let dieasesArray = data["otherMaster"]["diseases"].filter((ele) =>{
    //     return ele.isSelected;
    //   })
    //   if(dieasesArray.length){
    //     let diesValues = "";
    //     dieasesArray.forEach((ele) =>{
    //       console.log(ele.value)
    //       diesValues = diesValues ? diesValues + ", "+ ele.value : ele.value;
    //     });
    //     this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
    //     this.tipMessage.push('<ng-container><span class="two-lines-noti-msg">Items marked with heart icon <img src="./assets/img/health1.svg" class="pic-food-heart-msg"/> are best for your '+diesValues+'</span></ng-container>');
    //     this.tipMessageafterReg.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
    //     this.tipMessageafterReg.push('<ng-container><span class="two-lines-noti-msg">Items marked with heart icon <img src="./assets/img/health1.svg" class="pic-food-heart-msg"/> are best for your '+diesValues+'</span></ng-container>');
    //     this.loadMessages();
    //   }else{
    //     this.loadMessages();
    //   }
    // })
  }
  isManjhari:any=false;
videoManjhari:any="https://www.youtube.com/embed/vXBq6YkkSN0";
  ngOnInit() {
    //CONSTANTS.email = 'fakhre.alam101@gmail.com';
    localStorage.setItem("inner","1");
    this.loadHomeData();
    this.setToggleButtons();
   
    setTimeout(()=>{this.utilities.hideLoader();},2000);
    
    if(localStorage.getItem('isAnalysisPageVisited')){
      this.isAnalysisPageVisited = true;
    }
    this.mainCircleRadiousAnimate();
   
      this.dataOnInIt();
  
    this.isWaterNotificationEnable = localStorage.getItem("waterClearAllNotification") == 'true' ? true : false;
    this.isFastingNotificationEnable = localStorage.getItem("fastingClearAllNotification") == 'true' ? true : false;
  
    console.log("CONSTANTS.dietDate",CONSTANTS.dietDate);
    
   // this.getDietdata(CONSTANTS.dietDate);
   this.getProfile();

   this.tempSub.subscribe(res=>{
    this.dietflag=1; 
    this.getDietdata(CONSTANTS.dietDate);
   })
  }

  gotoWeightGraph() {
    console.log("weight");

    this.router.navigate(["weight-graph"]);
  }

  filterActualDietPlan(data) {
    return data.filter(item => {
      return item.currentSlot == true;
    });
  }

  caloryChanged() {
    console.log("caloryChanged", this.isActiveButton);

    if (this.isActiveButton == 0) {
      this.isActiveButton = 1;
      this.isDistributionActiveButton = 0;
      this.calory = 1;
    } else {
      this.isActiveButton = 0;
      this.calory = 0;
    }
  }

  caloryDistributionChanged() {
    console.log("caloryDistributionChanged", this.isDistributionActiveButton);
    if (this.isDistributionActiveButton == 0) {
      this.isDistributionActiveButton = 1;
      this.isActiveButton = 0;
      this.calory = 2;
    } else {
      this.isDistributionActiveButton = 0;
      this.calory = 0;
    }
  }

  habitDays: any = 0;
  habitAvg: any = 0;
  habitSmallArray: any = new Array(30);
  // getHabit() {
  //   this.appService.fetchCustomerHabitList().then(res => {
  //     this.utilities.hideLoader();
  //     console.log("habbits:-", res);
  //     this.habitList = JSON.parse(JSON.stringify(res)).habits;
  //     // if(this.habitList){
  //     //   for (let index = 0; index < this.habitList.length; index++) {
  //     //     this.isMore[index] = false;
  //     //     this.habitSmallArray[index] = this.habitList[index].description.toString().substr(0, 70);
  //     //     this.senitizedData(this.habitList[index].videoUrl, index);
  //     //   }
  //     // }else 
  //     if (this.habitList == undefined) {
  //       this.getHabitMaster();
  //     }
  //     else {
  //       if (this.habitAvg == 0) {
  //         for (let index = 0; index < this.habitList.length; index++) {
  //           this.habitAvg = this.habitAvg + parseInt(this.habitList[index].completePer);
  //         }
  //         console.log("this.habitAvg:- ", this.habitAvg);
  //       }
  //     }
  //   },
  //     err => {
  //       this.utilities.hideLoader();
  //       console.log("error habbit error:", err);
  //     }
  //   );
  // }
  addHabits() {
    this.router.navigate(["yesterday-plan"]);
  }

  // deleteHabits(code) {
  //   const reqBody = {
  //     code: code
  //   };
  //   console.log("reqBody", reqBody);

  //   this.appService.deleteCustomerHabit(reqBody).then(
  //     res => {
  //       this.utilities.hideLoader();
  //       console.log("res Success", res);
  //       this.getWordPressHabits();
  //       // this.getHabit();
  //     },
  //     err => {
  //       this.utilities.hideLoader();
  //       console.log("err", err);
  //     }
  //   );
  // }

  fetchFormatedDate(date) {
    const day = date.toString().substring(0, 2);
    const month = date.toString().substring(2, 4);
    const year = date.toString().substring(4, 8);
    console.log("formatedDate", year + "-" + month + "-" + day);

    return year + "-" + month + "-" + day;
  }

  returnLength(obj) {
    return this.utilities.objectLength(obj);
  }

  nextDate() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      if (index < 6) {
        this.currentDateIndex = index + 1;
        if (index == 0) this.defaultCircleFillColor = true;
        else this.defaultCircleFillColor = false;
        this.noNextDate = false;
        this.dateSlides.slideTo(index + 1, 200);
         this.dateChanged(this.weeks[index + 1])
       // this.homeVertical.dateChanged(this.weeks,index+1);
      } else {
        this.noNextDate = true;
      }
    })
  }

  clickDate(dy,index){
    this.tolalCalories=0;
    this.totalTodaysCaloriesPerc=0;
    this.isActiveDay=dy;
    this.dateChanged(this.weeks[index]);
  }
  prevDate() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      if (index > 0) {
        this.currentDateIndex = index - 1;
        if (index == 0) this.defaultCircleFillColor = true;
        else this.defaultCircleFillColor = false;
        this.noPrevDate = false;
        this.dateSlides.slideTo(index - 1, 200);
         this.dateChanged(this.weeks[index - 1])
       // this.homeVertical.dateChanged(this.weeks,index-1);
      } else {
        this.noPrevDate = true;
      }
    })
  }

  dateSlideChanged(ev) {
    console.log("Evee ", ev);
   // this.slides.slideTo(0, 200);
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index;
      if (index == 0) this.defaultCircleFillColor = true;
      else this.defaultCircleFillColor = false;
    //  this.dateChanged(this.weeks[index])
    //  this.homeVertical.dateChanged(this.weeks,index)
    });
  }

  // slideChanged(event) {
  //   // if (this.utilities.isPlanExpired()) {
  //   //   this.slides.slideTo(0, 200);
  //   //   this.upgradePlan();
  //   //   return true;
  //   // }
  //   // this.slides.getActiveIndex().then((index: number) => {
  //   //   if (this.profile.planType == 'Freemium') {
  //   //     if (!this.isToday && index > 2) {
  //   //       this.slides.slideTo(0, 200);
  //   //       this.upgradePlan();
  //   //       return true;
  //   //     }
  //   //   }

  //   // })
  //   /*  
  //       console.log("updateIndex:-", index);
   
  //       this.slides.update();
  //       this.type = this.foodType.filter(item => {
  //         return item.index == index;
  //       });
  //     });
  //     console.log("Type:--", this.type);
  //     */
  // }

  gotoDietVideo(havitcode) {
    let item = this.habitListAll.filter(item => {
      return item.code == havitcode;
    });
    this.router.navigate(["key-mantra"], {
      queryParams: { param: JSON.stringify(item[0]) }
    });
  }

  eatenStatusUpdate(item, slot, slotIndex, foodIndex){
    if(this.currentDateIndex == 0){
      let foodCodeList = [];
      let eatenStatus = false;
      this.utilities.logEvent("onboarding_Counter_add_home", {});
      slot.data.filter((ele) => {
        if (ele.itemCode == item.itemCode){
          if(ele.eaten > 0) eatenStatus = false;
          else eatenStatus = true;
          foodCodeList.push({ code: ele.code, eaten: ele.eaten > 0 ? -1 : 2, slot: slot.slot});
        }
      });

      this.diets[slotIndex]["data"][foodIndex].eaten = this.diets[slotIndex]["data"][foodIndex].eaten > 0 ? -1 : 2;

      this.storage.get("dietData").then((res)=>{
        let dietPlan = CONSTANTS.isDetox ? 'detox' : CONSTANTS.selectedDietPlan;
        if(res && res[moment(new Date()).format("DDMMYYYY")] && res[moment(new Date()).format("DDMMYYYY")][dietPlan]){
          res[moment(new Date()).format("DDMMYYYY")][dietPlan]["diets"][slotIndex]['data'][foodIndex] =  this.diets[slotIndex]["data"][foodIndex];
          this.storage.set("dietData",res).then((res)=>{
            this.todaysCalCount();
            this.getConsumedProtien();
          });
        }
      })

      let reqBody = {
        foodCodeList,
        date: CONSTANTS.dietDate
      };
      console.log("reqBody", reqBody);
      this.utilities.logEvent("onboarding_update_food_details", reqBody);
      this.appServices.updateEatenFoodItems(reqBody).then(
        success => {
          console.log("detail", success);
          // this.utilities.showSuccessToast(message);
          let foodName = item.Food.length > 28 ? item.Food.slice(0,28) + ".." : item.Food;
          let orangeFoodItem = item.Food.length > 12 ? item.Food.slice(0,12) + ".." : item.Food ;
          if(eatenStatus){
            let message = "";
            if(Number(item.Score) == 9 || Number(item.Score) == 6){
              message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
            message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
              message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
            message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
              message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
            message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
              message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
            message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
              message = "You just added " + foodName +". <span style='color:green'>Excellent choice! </span>"; 
            }else if(Number(item.Score) == 3){
              message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
            message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
              message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
            message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
              message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
            message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
              message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
            message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
              message = "You just had " + foodName +".  <span style='color:orange'>Good choice.</span>"; 
            }else if(Number(item.Score) == 1){
              message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
            message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
              message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
            message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
              message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
            message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
              message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
            message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
              message = "I see you have consumed " + orangeFoodItem + ". Explore better “Recommended options”"; 
            }else if(!item.Score){
              message = "You ate "+ foodName + ". I have better suggestions for you!"
            }
            //eatenStatus ? "Added " + item.Calories + " kcal in to Calories counter" : "Removed " + item.Calories + " kcal from to Calories counter";
            clearTimeout(this.tipTimeout);
            console.log("Timerr Cleared  ############################################");
            clearTimeout(this.tipMsgInterval);
            this.activeTip = this.senitizeHTML('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
            this.tipMsgInterval = setTimeout(() => {
              clearTimeout(this.tipMsgInterval);
              this.activeTip = this.senitizeHTML(message);
              localStorage.removeItem("foodNotificationMsg");
              this.tipMsgInterval = setTimeout(() => {
                clearTimeout(this.tipMsgInterval);
              //  this.tip();
              }, this.loadingMsgTime);
            }, this.loadingMsgImgTime);
          }


          // this.activeTip = this.senitizeHTML(message);
          // console.log("Timerr Started  ############################################")
          // this.tipTimeout = setTimeout(() => {
          //   this.tip();
          //   console.log("Timerr Completed  ############################################")
          // }, 10000);
          // this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate);
        },
        err => {
          console.log("details error", err);
        }
      );
    }
    // else{
    //   this.utilities.showErrorToast('You can not eat in future date')
    // }
  }

  removeFoodItemFromChild(event){
    this.removeFoodItem(event.item,event.slot);
  }

  removeFoodItem(item, slot) {
    ////this.utilities.presentLoading();
    let foodCodeList = [];
    slot.data.filter((ele) => {
      if (ele.itemCode != item.itemCode)
        if(ele.foodSource && ((ele.foodSource).toLowerCase()  == "personal" || (ele.foodSource).toLowerCase()  == "external")){
          foodCodeList.push({
            "code" : ele.code,
            "Food" : ele.Food,
            "Calories" : ele.Calories,
            "Carbs" : ele.Carbs,
            "Fat" : ele.Fat,
            "Protien" : ele.Protien,
            "Fiber" : ele.Fiber,
            "portion" : ele.portion,
            "portion_unit" : ele.portion_unit,
            "foodSource":ele.foodSource,
            "eaten": ele.eaten ? ele.eaten : -1
          });
        }else{
          foodCodeList.push({ code: ele.code, portion: ele.portion, foodSource: ele.foodSource ?  ele.foodSource : 'INTERNAL', "eaten": ele.eaten ? ele.eaten : -1 });
        }
    });

    let reqBody = {
      foodCodeList,
      slot: slot.slot,
      detox: CONSTANTS.isDetox,
      date: CONSTANTS.dietDate,
      country: CONSTANTS.country
    };
    console.log("reqBody", reqBody);
    this.utilities.logEvent("onboarding_update_food_details", reqBody);
    this.appServices.postOptionFoodList(reqBody).then(
      success => {
        this.utilities.hideLoader();
        console.log("detail", success);
        this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate);
      },
      err => {
        this.utilities.hideLoader();
        console.log("details error", err);
      }
    );
  }

  removeDietSlot(i) {
    ////this.utilities.presentLoading();
    console.log("Clicked index ", i);
   this.utilities.logEvent("onboarding_DietPlan_07aDeleteFromMainPage", {})
    let foodCodeList = [];

    let reqBody = {
      foodCodeList,
      slot: i,
      detox: CONSTANTS.isDetox,
      date: CONSTANTS.dietDate,
      country: CONSTANTS.country
    };
    console.log("reqBody", reqBody);
    this.utilities.logEvent("onboarding_update_food_details", reqBody);
    this.appServices.postOptionFoodList(reqBody).then(
      success => {
        // this.utilities.hideLoader();
        // this.router.navigate(["consume"]);
        console.log("detail", success);
        this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate);
      },
      err => {
        this.utilities.hideLoader();
        console.log("details error", err);
      }
    );
  }

  refreshFoodItemFromChild(event){
    console.log("check the event:",event);
    
    this.refreshFoodItem(event.dataItem, event.index);
  }
  refreshFoodItem(dataItem, index) {
  //  this.ionContent.scrollToPoint(0,parseInt(localStorage.getItem("scrollVal")),10);
      this.utilities.logEvent("onboarding_DietPlan_07cUpdateFromRefresh", {});
      if (index > 2 || (this.showProtienTracker && index > 0)) {
        // if (!this.isPlanActiveForDiet) {
        //   // this.router.navigate(['upgrade-plan']);
        //   // this.paymentSubscribeModel('update diet plan');
        //   return false;
        // } 
        // else {
          let category = dataItem.category.charAt(0);
          let refreshCounter = localStorage.getItem("refreshCounter") ? JSON.parse(localStorage.getItem("refreshCounter")) : {};
          let itemCounter = 1;
          let key = index + "" + category;
          if (refreshCounter) {
            itemCounter = refreshCounter[key] ? ++refreshCounter[key] : 1;
          }
          refreshCounter[key] = itemCounter;
          localStorage.setItem("refreshCounter", JSON.stringify(refreshCounter))

          ////this.utilities.presentLoading();
          let reqData = {
            slot: index,
            category: dataItem.category,
            foodCodeList: [
              {
                code: dataItem.itemCode
              }
            ],
            detox: this.isDetox,
            date: CONSTANTS.dietDate,
            itemCounter: itemCounter,
            country: CONSTANTS.country
          };

          this.selectedCountry = CONSTANTS.country;
          // if (CONSTANTS.country != "IND") {
          //   reqData["customerId"] = this.isIosDevice || this.isAndroidDevice ? this.user.email : CONSTANTS.profile["email"];
          // } else {
          //   delete reqData.country
          // }
          console.log("reqData:", reqData);
          this.appService.refresh(reqData).subscribe(
            res => {
              console.log("Alam13:",res);
              let success = res["dietplan"];
              if (success) {
                this.storage.get("dietData").then((res1: any) => {
                  if (this.isDetox) {
                    if (res[CONSTANTS.dietDate] && res[CONSTANTS.dietDate]["detox"]) {
                      this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                    } else {
                      this.storage.get("dietData").then((val) => {
                        val[CONSTANTS.dietDate] = val[CONSTANTS.dietDate] ? val[CONSTANTS.dietDate] : {};
                        val[CONSTANTS.dietDate]["detox"] = success;
                        this.storage.set("dietData", val);
                        this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                      })
                    }
                  } else {
                    if (res[CONSTANTS.dietDate] && res[CONSTANTS.dietDate][CONSTANTS.selectedDietPlan]) {
                      this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                    } else {
                      this.storage.get("dietData").then((val) => {
                        val[CONSTANTS.dietDate] = val[CONSTANTS.dietDate] ? val[CONSTANTS.dietDate] : {};
                        val[CONSTANTS.dietDate][CONSTANTS.selectedDietPlan] = success;
                        this.storage.set("dietData", val);
                        this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                      })
                    }
                  }
                })
              } else {
                this.utilities.hideLoader();
              }
            },
            err => {
              this.utilities.hideLoader();
            }
          );

       // }
      }
      else {
        let category = dataItem.category.charAt(0);
        let refreshCounter = localStorage.getItem("refreshCounter") ? JSON.parse(localStorage.getItem("refreshCounter")) : {};
        let itemCounter = 1;
        let key = index + "" + category;
        if (refreshCounter) {
          itemCounter = refreshCounter[key] ? ++refreshCounter[key] : 1;
        }
        refreshCounter[key] = itemCounter;
        localStorage.setItem("refreshCounter", JSON.stringify(refreshCounter))
        ////this.utilities.presentLoading();
        let reqData = {
          slot: index,
          category: dataItem.category,
          foodCodeList: [
            {
              code: dataItem.itemCode
            }
          ],
          detox: this.isDetox,
          date: CONSTANTS.dietDate,
          itemCounter: itemCounter,
          country: CONSTANTS.country
        };

        // if (CONSTANTS.country != "IND") {
        //   reqData["customerId"] = this.isIosDevice || this.isAndroidDevice ? this.user.email : CONSTANTS.profile["email"];
        // } else {
        //   delete reqData.country
        // }
        console.log("reqData:", reqData);
        this.appService.refresh(reqData).subscribe(
          res => {
            let success = res["dietplan"];
            console.log("Alam12:",res);
            
            if (success) {
              this.storage.get("dietData").then((res1: any) => {
                if (this.isDetox) {
                  if (res[CONSTANTS.dietDate] && res[CONSTANTS.dietDate]["detox"]) {
                    this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                  } else {
                    this.storage.get("dietData").then((val) => {
                      val[CONSTANTS.dietDate] = val[CONSTANTS.dietDate] ? val[CONSTANTS.dietDate] : {};
                      val[CONSTANTS.dietDate]["detox"] = success;
                      this.storage.set("dietData", val);
                      this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                    })
                  }
                } else {
                  if (res[CONSTANTS.dietDate] && res[CONSTANTS.dietDate][CONSTANTS.selectedDietPlan]) {
                    this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                  } else {
                    this.storage.get("dietData").then((val) => {
                      val[CONSTANTS.dietDate] = val[CONSTANTS.dietDate] ? val[CONSTANTS.dietDate] : {};
                      val[CONSTANTS.dietDate][CONSTANTS.selectedDietPlan] = success;
                      this.storage.set("dietData", val).then(()=>{
                        this.setDiet(success, this.isDetox, CONSTANTS.dietDate)
                      });
                    })
                  }
                }
              })
            } else {
              this.utilities.hideLoader();
            }
          },
          err => {
            this.utilities.hideLoader();
          }
        );
      }
    // }
  }

  refresh() {
    ////this.utilities.presentLoading();
  //  this.testGoogleFit();
    this.startActivityTracking();
  }

  selectOption(ind) {
    if (this.utilities.isPlanExpired()) {
    //  this.paymentSubscribeModel('update diet plan');
      // this.upgradePlan();
      return true;
    }
    else {
      // ////this.utilities.presentLoading();
      if (ind > 2 || (this.showProtienTracker && ind > 0)) {
        if (!this.isPlanActiveForDiet) {
        //  this.paymentSubscribeModel('update diet plan');
          // this.router.navigate(['upgrade-plan']);
        }
        else {
          this.isExpired = false;
          let code = "";
          let portion = "";
          for (let index = 0; index < this.diets[ind].data.length; index++) {
            if (this.diets[ind].data.length > 1) {
              code = code + this.diets[ind].data[index].code + ",";
              portion = portion + this.diets[ind].data[index].portion + ",";
            } else {
              code = code + this.diets[ind].data[index].code;
              portion = portion + this.diets[ind].data[index].portion;
            }
          }
          this.router.navigate(["options"], {
            queryParams: {
              param: this.diets[ind].slotName,
              slot: ind,
              foodCode: code,
              portion
            }
          });
        }

      }
      else {
        let code = "";
        let portion = "";
        for (let index = 0; index < this.diets[ind].data.length; index++) {
          if (this.diets[ind].data.length > 1) {
            code = code + this.diets[ind].data[index].code + ",";
            portion = portion + this.diets[ind].data[index].portion + ",";
          } else {
            code = code + this.diets[ind].data[index].code;
            portion = portion + this.diets[ind].data[index].portion;
          }
        }
        this.router.navigate(["options"], {
          queryParams: {
            param: this.diets[ind].slotName,
            slot: ind,
            foodCode: code,
            portion
          }
        });
      }
    }
  }

  gotoEditProfile() {
    this.dietChoices = false;
    this.storage.set("isNavigateDiet", true);
    this.router.navigate(["drinks"], { queryParams: { prop: 'edit' } });

  }

  gotoPersonalise(){
    this.router.navigate(["personalise"], { queryParams: { prop: 'edit', toConsume: 'toConsume' } });
  }

  gotoEditPersonalPlan(){
    this.router.navigate(["other-foods-selection"],{queryParams:{isPlanActiveForDiet:this.isPlanActiveForDiet, diets : JSON.stringify(this.diets)}});
  }

  faq() {
    this.router.navigate(["faq"]);
  }

  alarm() {
    const element = document.getElementById("alarm");
    this.localalarmstatus = localStorage.getItem("localalarm");

    if (this.localalarmstatus == "Active") {
      localStorage.setItem("localalarm", "Deactive");
      this.custom_notification("#glass_text", "Alarm Deactivated");
      element.style.color = "grey";
      const data = { waterReminderStatusToBe: "D" };
      // this.appService.reminderupdate(data).subscribe((response:any) => {
      //   console.log(response.message);
      // });
    } else {
      // this.localNotifications.schedule([
      //   {
      //     id: 1,
      //     title: "Drink Water!",
      //     text: "Easiest way to keep metabolism high",
      //     smallIcon: 'res://sm_icon.png',
      //     //   icon: "https://test.fightitaway.com/images/170.png",
      //     trigger: { at: new Date(new Date().getTime() + 1000) },
      //     actions: [
      //       { id: "d1", title: "Done" },
      //       { id: "s1", title: "Snooze" }
      //     ]
      //   }
      // ]);
      localStorage.setItem("localalarm", "Active");
      this.custom_notification("#glass_text", "Alarm Activated");
      const data = { waterReminderStatusToBe: "A" };
    }
  }

  doProgress(localdrankwater) {
    // let cnt = document.getElementById("count");
    this.waterPercentage = (Math.round((parseInt(localdrankwater) * 100) / this.recommendedwater));
    // cnt.innerHTML = + this.waterPercentage + " %";
  }
  addGlass() {
    var today = new Date();
    var currentdate =
      `${today.getDate()}`.padStart(2, "0") +
      `${today.getMonth() + 1}`.padStart(2, "0") +
      today.getFullYear() +
      `${today.getHours()}`.padStart(2, "0") +
      `${today.getMinutes()}`.padStart(2, "0") +
      `${today.getSeconds()}`.padStart(2, "0");

    const request = { quantity: 1, datetime: currentdate };
    let localdrankwater = localStorage.getItem("localdrankwater");
    this.drankwater = Number(localdrankwater) + 1;
    localStorage.setItem("localdrankwater", this.drankwater);
    console.log(localdrankwater);
    this.doProgress(this.drankwater);
    this.appService.waterDrank(request).subscribe((response: any) => {
      this.drankwater = response.total;
      localStorage.setItem("localdrankwater", this.drankwater);
      console.log(response);
    });
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position: "top",
      mode: "ios",
      color: "dark"
    });
    toast.present();
  }

  customNotification(custom_element, custom_message) {
    const element = this.el.nativeElement.querySelector(custom_element);
    element.innerText = custom_message;
    element.className = "slide-up fade-out glass-text";
    setTimeout(function () {
      element.className = "glass-text";
    }, 2000);
  }
  custom_notification(custom_element, custom_message) {
    this.message = custom_message;
    const alarm_element = this.el.nativeElement.querySelector(custom_element);
    alarm_element.classList.add("slide-up");
    setTimeout(function () {
      alarm_element.classList.remove("slide-up");
    }, 2000);
  }
  doSomethingWithCurrentValue(e) {
    // console.log('event', e);
  }

  initializeApp() { }

 

  async hideLoader() {
    this.loadingController
      .getTop()
      .then(res => (res ? this.loadingController.dismiss() : null));
  }

 
  dataSlot = "";
  gotoFoodDetail(foodCode, ind) {

    let foodDetails = this.diets[ind]["data"].filter((ele) =>{
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

    if (!this.isPlanActiveForDiet && ind > 2) {
    //  this.paymentSubscribeModel('food detail');
      // this.upgradePlan();
      return true;
    }

    if (this.utilities.isPlanExpired()) {
      // this.upgradePlan();
    //  this.paymentSubscribeModel('food detail');
      return true;
    } else {
      this.isExpired = false;
      let code = "";
      let portion = "";
      for (let index = 0; index < this.diets[ind].data.length; index++) {
        if (this.diets[ind].data.length > 1) {
          code = code + this.diets[ind].data[index].code + ",";
          portion = portion + this.diets[ind].data[index].portion + ",";
        } else {
          code = code + this.diets[ind].data[index].code;
          portion = portion + this.diets[ind].data[index].portion;
        }
      }
      this.dataSlot = JSON.stringify(this.diets[ind].data);
      this.router.navigate(["food-detail"], {
        queryParams: {
          param: this.diets[ind].slotName,
          slot: ind,
          foodCode: this.dataSlot,
          date:CONSTANTS.dietDate,
          portion,
          mainCode: foodCode
        }
      });
    }

  }

 
  fillWater(type) {
    let cnt = document.getElementById("count");
    let water = document.getElementById("water");
    // if (parseInt(cnt.innerText) < this.recommendedwater) {
    let localdrankwater = localStorage.getItem("localdrankwater");
    let percent1: any = localdrankwater;

    let interval;
    if (type == 'plus') {
      percent1++;
       this.utilities.logEvent("onboarding_water", { drank: 1 })
      this.utilities.logEvent("onboarding_Tracker_03Water", { drank: 1 })
      this.utilities.logEvent("onboarding_Tracker_03aAddWater", { drank: 1 })
    } else {
      percent1--;
      if (this.drankwater <= 0) {
        return true;
      }
       this.utilities.logEvent("onboarding_water", { drank: -1 })
      this.utilities.logEvent("onboarding_Tracker_03Water", { drank: -1 })
    }
    this.customNotification("#glass_text_water", type == 'plus' ? "+250 ml Well done!" : "-250 ml Oops!");
    // cnt.innerHTML = percent1;
    this.drankwater = percent1;
    localStorage.setItem("localdrankwater", percent1);
    if (this.recommendedwater >= this.drankwater) {
      water.style.transform =
        "translate(0" +
        "," +
        (100 - (100 / this.recommendedwater) * this.drankwater) +
        "%)";
    }
    var today = new Date();
    var currentdate =
      `${today.getDate()}`.padStart(2, "0") +
      `${today.getMonth() + 1}`.padStart(2, "0") +
      today.getFullYear() +
      `${today.getHours()}`.padStart(2, "0") +
      `${today.getMinutes()}`.padStart(2, "0") +
      `${today.getSeconds()}`.padStart(2, "0");

    const request = { quantity: type == 'plus' ? 1 : -1, datetime: currentdate };
    this.appService.waterDrank(request).subscribe((response: any) => {
      localStorage.setItem("localdrankwater", percent1);
      console.log(response);
    });
    this.waterPercentage = (Math.round((percent1 * 100) / this.recommendedwater));

    // cnt.innerHTML = this.waterPercentage + " %";

  }
  getTotalLiters(total) {
    return (total / 4).toFixed(1);
  }
  getDrunkLiters(drunk) {
    return (drunk / 4).toFixed(2);
  }
  getDrunkMiliLiters(drunk) {
    return ((drunk / 4) * 1000).toFixed(0);
  }


  isWeightCollaps = true;
  weightTitle = "";
  weightPercentage = 0;
  weightIsCollaped() {
    // if(!this.isWeightCollaps){
    this.weightTitle = "WEIGHT";
    this.storage.get("localData").then(val => {
      let data = this.utilities.parseJSON(val);
      this.weightUnit = data.otherMaster.weight[0].param;
      this.weightGraphData.currentWeight = this.weightUnit == "pound" ? this.weightGraphData.currentWeight / this.poundValue : this.weightGraphData.currentWeight;
      this.weightGraphData.suggstedWeight = this.weightUnit == "pound" ? this.weightGraphData.suggstedWeight / this.poundValue : this.weightGraphData.suggstedWeight;
      this.weightGraphData.startWeight = this.weightUnit == "pound" ? this.weightGraphData.startWeight / this.poundValue : this.weightGraphData.startWeight;
      this.weightPercentage = Math.round((this.weightGraphData.startWeight - this.weightGraphData.currentWeight) * 100 / (this.weightGraphData.startWeight - this.weightGraphData.suggstedWeight));
      if (this.weightPercentage < 0 || Number.isNaN(this.weightPercentage) || this.weightPercentage == undefined) {
        this.weightPercentage = 0;
      }
    })

    // this.weightPercentage = Math.round((this.weightGraphData.startWeight - this.weightGraphData.currentWeight) * 100 / (this.weightGraphData.startWeight - this.weightGraphData.suggstedWeight));
    //   if (this.weightPercentage < 0 || Number.isNaN(this.weightPercentage) || this.weightPercentage == undefined) {
    //     this.weightPercentage = 0;
    //   }

    // }
  }

  roundUpvalue(val) {
    return Math.round(val);
  }

  DateFormat(isDate) {
    if (isDate != undefined) {
      isDate = isDate.toString();
      if (isDate == "false") {
        return new Date().toDateString();

      }
      else {
        return isDate;

      }
    }
    else {
      return "";
    }
  }

  getAbsoluteWeight(a, b) {
    if (a != undefined && b != undefined) {
      return Math.abs(a - b).toFixed(1);
    }
    else {
      return 0;
    }
  }
  getCurrentWeight(weight) {
    return Math.abs(weight).toFixed(1);

  }

  DayCount(obj) {
    if (obj.startDate != undefined) {
      let dateArr = obj.startDate.split('-');
      let fiterData = this.months.filter(item => {
        return item.month == dateArr[1].toUpperCase();
      });

      let firstNum = new Date(dateArr[2], fiterData[0].ind - 1, dateArr[0]);
      const date1: any = firstNum;
      const date2: any = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays;
    }
    else {
      return "";
    }
  }


  customRoundof(num) {
    if (num != undefined && num > 0 && !Number.isNaN(num)) {
      return Math.round(num);
    }
    else {
      return 0;
    }
  }

  isMore: any = new Array(50);
  openMoreHabit(ind) {
    this.isMore[ind] = !this.isMore[ind];
  }

  roundingVal(val) {
    if (isNaN(val)) {
      return 0;
    }
    return Math.round(val);
  }

  editDiets(val, diets) {
    if (!this.isPlanActiveForDiet) {
      this.router.navigate(['upgrade-plan']);
    }
    else {
      if (this.utilities.isPlanExpired()) {
        this.upgradePlan();
        return true;
      } else {
        this.storage.remove("slotTiming");
        this.storage.set("diets", diets);
        this.router.navigate(['slot-dinner-time']);
      }

    }
  }
  showTime(diet) {
    if (diet.slot == 0 || diet.slot == 1) {
      return "";
    }
    else {
      if (diet.slot == 3 || diet.slot == 5 || diet.slot == 6 || !diet.time) {
        return "";//"Optional"; //"As per choice";
      } else {
        return diet.time;
      }

    }
  }


  updateExpireDate(amount, expiryDate, cb?) {
    let body = {
      expiryDate: expiryDate,
      amount: amount
    }
    this.appService.updateExpiryDate(body).then(
      res => {
        if(cb){
          //this.utilities.showLoading();
          cb();
        } 
       // else this.checkUserPlanStatus();
        // this.getPlanStatus();
      }, err => {
        console.log("PlanOne api Error: ", err);

      });
  }

  // updatePlanFirebase(amount, period, paymentFrom, expiryDate, transactionId, isActive, cb) {
  //   // this.appService.getCurrentLocation().then(
  //   //   (location: any) => {
  //       let self = this;
  //       let config = {};
  //       if (self.platform.is("cordova") && self.platform.is("android")) {
  //         config["app_source"] = 'android';
  //         config["device"] = self.device.model; //self.deviceService.getDeviceInfo().device;
  //       } else if (self.platform.is("cordova") && self.platform.is("ios")) {
  //         config["app_source"] = 'ios';
  //         config["device"] = self.device.model; //self.deviceService.getDeviceInfo().device;
  //       } else {
  //         config["app_source"] = 'web';
  //         config["device"] = "web_browser";
  //       }
  //       let obj1 = {
  //         "country": CONSTANTS.location_country,
  //         "os": config["app_source"],
  //         "source": paymentFrom,
  //         "amount": amount,
  //         "planDuration": period,
  //         "planValidity": expiryDate,
  //         "planCreationDate": moment(new Date()).format("DD-MMM-YYYY"),
  //         "referralCode": null, //"ATLQx", //refferData.referralCode, 
  //         "paymentId": transactionId,
  //         "referralEmail": null, //"patelanant26@gmail.com",
  //         "referralBonus": null,
  //         "referralDueOn": null,
  //         "refundedAmount": 0,
  //         "refundedOn": null,
  //         "refundedBy": null,
  //         "paymentType": isActive ? "upgrade" : "new",
  //         "purchasedByEmailId": CONSTANTS.profile["email"],
  //       }
  //       self.appService.doReferralUser(obj1).then(
  //         success => {
  //           let obj = {
  //             "email": CONSTANTS.profile["email"],
  //             "created_at": new Date(),
  //             "amount": amount,
  //             "source": paymentFrom,
  //             "platform": this.isIosDevice ? "ios" : this.isAndroidDevice ? "android" : "web",
  //             "duration": period,
  //             "revised_expiery": expiryDate,
  //             "payment_id": transactionId,
  //             "planType": isActive ? "upgrade" : "new",
  //             "offer": true,
  //             "lifestyle_country": CONSTANTS.country ? CONSTANTS.country : "IND",
  //             "location_country": CONSTANTS.location_country,
  //             "autoId": success["autoId"],
  //             "Diet_plan_open": CONSTANTS.Diet_plan_open,
  //             "Refund_policy": CONSTANTS.Refund_policy
  //           }

  //           let currentTimeStamp = new Date().getTime().toString();
  //           // firebase.firestore().collection('user_plan_purchase').doc(currentTimeStamp).set(obj).then(function () {
  //           //   cb();
  //           // }).catch(function (error) {
  //           //     console.error("Error writing document: ", error);
  //           //   });
  //         },
  //         err => {
  //           // this.utilities.hideLoader();
  //           console.log(err);
  //         });

  //     // })
  // }

  // updateExpireDatePaid(amount, period, mode, transactionId, isActive) {
  //   // this.fetchPlanCallback(period, (expDate) => {
  //   //   let body = {
  //   //     expiryDate: expDate,
  //   //     amount: amount
  //   //   }
  //   //   let paymentType = mode == "iOS" ? "applestore" : mode == "Android" ? "googleplaystore" : "web";
  //   //   this.updatePlanFirebase(amount, period, paymentType, expDate, transactionId, isActive, () => {
  //   //     let me = this;
  //   //     this.appService.updateExpiryDate(body).then(
  //   //       res => {
  //   //         me.storage.get('profileData').then(val => {
  //   //           if (val != '') {
  //   //             const data = JSON.parse(val);
  //   //             if (data != undefined) {
  //   //               data.planExpiryDate = expDate;
  //   //               //  me.expiryDate = data.planExpiryDate;
  //   //               me.storage.set('profileData', JSON.stringify(data));
  //   //             }
  //   //           }
  //   //         });
  //   //         let obj = {
  //   //           "date": moment(new Date()).format("DDMMYYYY"),
  //   //         }
  //   //         console.log("delete lead: ", obj);
  //   //         me.appService.deleteHotLeads(obj).then(() => {
  //   //           console.log("Lead delete");
  //   //           me.utilities.showSuccessToast("Your plan upgraded successfully!");
  //   //           me.startCelebration();
  //   //           localStorage.removeItem("randomLockCounter");
  //   //           me.utilities.logEvent("purchase_plan", {
  //   //             mode: mode
  //   //           })
  //   //           me.utilities.hideLoader();
  //   //           setTimeout(() => {
  //   //             location.reload();
  //   //           }, 500);
  //   //         })
  //   //       }, err => {
  //   //         setTimeout(() => {
  //   //           location.reload();
  //   //         }, 500);
  //   //         console.log("PlanOne api Error: ", err);
  //   //       });
  //   //   });
  //   // })

  // }

  // fetchPlanCallback(period, cb) {
  //   let plans = firebase.firestore().collection('user_plan').doc(this.user.uid);
  //   plans.get().then(snap => {
  //     if (snap.exists) {
  //       const data = snap.data();
  //       if (data.isPlanActive) {
  //         let expiryDate = new Date(data.planExpiryDate.toDate());
  //         var newDate = moment(expiryDate).format("DD-MMM-YYYY");
  //         // var numberOfDaysToAdd = period;
  //         // expiryDate.setDate(expiryDate.getDate() + numberOfDaysToAdd); 
  //         cb(newDate);
  //       }
  //     } else {
  //       var someDate = new Date();
  //       // var numberOfDaysToAdd = period;
  //       // someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

  //       // let expiryDate = new Date(data.planExpiryDate.toDate());
  //       var newDate = moment(someDate).add(period, "days").format("DD-MMM-YYYY");
  //       cb(newDate);
  //     }
  //   });
  // }

  updateDetox(value) {
    this.storage.get("dietData").then((val : any)=>{
      if(val){
        val[CONSTANTS.dietDate] = {};
        this.storage.set("dietData", val).then((val : any)=>{
          if (value == 'normal') {
            CONSTANTS.isDetox = false;
            setTimeout(() => {
              this.isDetox = false;
              if(this.selectedDietPlan == 'weightLoss'){
                this.selectedThemeColor = this.weightLossThemeColor;
              }else if(this.selectedDietPlan == 'immunity_booster'){
                this.selectedThemeColor = this.immunityThemeColor ;
              }else if(this.selectedDietPlan == 'weightLossPlus'){
                this.selectedThemeColor = this.weightLossPlusThemeColor ;
              }else if(this.selectedDietPlan == 'post_covid'){
                this.selectedThemeColor = this.postCovidThemeColor ;
              }else if(this.selectedDietPlan == 'diabetes'){
                this.selectedThemeColor = this.diabetesThemeColor ;
              }else if(this.selectedDietPlan == 'hypertension'){
                this.selectedThemeColor = this.hypertensionTheme ;
              }else if(this.selectedDietPlan == 'cholesterol'){
                this.selectedThemeColor = this.cholesterolTheme ;
              }else if(this.selectedDietPlan == 'pcos'){
                this.selectedThemeColor = this.pcosThemeColor ;
              }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'muscleGain'){
                this.selectedThemeColor = this.muscleThemeColor ;
              }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'fatShredding'){
                this.selectedThemeColor = this.fatThemeColor ;
              }else{
                this.selectedThemeColor = this.weightLossThemeColor;
              }
              CONSTANTS.selectedPlanThemeColor = this.selectedThemeColor;
              console.log("Seleected theme color update detox", this.selectedThemeColor);
              this.platform.ready().then(() => {
              //  this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
              })

            }, 5);
          //  ////this.utilities.presentLoading();
            this.fetchDietPlan();
          }
          else {
            CONSTANTS.isDetox = true;
            setTimeout(() => {
              this.selectedThemeColor = this.detoxThemeColor;
              console.log("Seleected theme color update detox else", this.selectedThemeColor);
              this.platform.ready().then(() => {
               // this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
              })
              CONSTANTS.isDetox = this.isDetox = true;
            }, 500);
          //  ////this.utilities.presentLoading();
            this.utilities.logEvent("onboarding_click_detox", {})
            this.fetchDietPlan();
          }
          this.setToggleButtons()
        })
      }
    })
  }

 
  toggle() {
  //   if (!this.isDetox) {
  //  //    this.presentConfirm();
  //   } else {
      if(this.selectedDietPlan == 'weightLoss'){
        this.selectedThemeColor = this.weightLossThemeColor;
      }else if(this.selectedDietPlan == 'immunity_booster'){
        this.selectedThemeColor = this.immunityThemeColor ;
      }else if(this.selectedDietPlan == 'weightLossPlus'){  
        this.selectedThemeColor = this.weightLossPlusThemeColor ;
      }else if(this.selectedDietPlan == 'post_covid'){
        this.selectedThemeColor = this.postCovidThemeColor ;
      }else if(this.selectedDietPlan == 'diabetes'){  
        this.selectedThemeColor = this.diabetesThemeColor     
      }else if(this.selectedDietPlan == 'hypertension'){  
        this.selectedThemeColor = this.hypertensionTheme ;
      }else if(this.selectedDietPlan == 'cholesterol'){  
        this.selectedThemeColor = this.cholesterolTheme ;
      }else if(this.selectedDietPlan == 'pcos'){  
        this.selectedThemeColor = this.pcosThemeColor ;
      }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'muscleGain'){
        this.selectedThemeColor = this.muscleThemeColor ;
      }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'fatShredding'){
        this.selectedThemeColor = this.fatThemeColor ;
      }else{
        this.selectedThemeColor = this.weightLossThemeColor;
      }
      CONSTANTS.selectedPlanThemeColor = this.selectedThemeColor;
      console.log("Seleected theme color toogle", this.selectedThemeColor);
      this.platform.ready().then(() => {
        this.ionContent.scrollToTop();
       // this.slides.slideTo(0, 200);
      //  this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
      })
      this.isDetox = !this.isDetox;
      this.updateDetox('normal');
    //}
    this.setToggleButtons()
  }

  

  // async presentConfirm() {
  
  //   let me = this;
  //   const modal = await me.modalController.create({
  //     component: SelectPlanPopupComponent,
  //     backdropDismiss: true,
  //     cssClass: 'app-offer-popup',
  //     componentProps: { planType: 'detox', plan: {"note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice."}, isPremium: this.isPlanActiveForDiet }
  //   });
  //   modal.onDidDismiss().then((data: any) => {
  //     if (data && data.data && data.data.isActivate) {
  //       if (data.data.planId == 'detox') {
  //         this.isDetox = !this.isDetox;
  //         this.selectedThemeColor = this.detoxThemeColor;
  //         console.log("Seleected theme color presentConfirm detox", this.selectedThemeColor);
  //         CONSTANTS.selectedPlanThemeColor = this.selectedThemeColor;
  //         this.platform.ready().then(() => {
  //           this.ionContent.scrollToTop();
  //           this.slides.slideTo(0, 200);
  //           this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
  //         })
  //         this.updateDetox('detox');
  //       }
  //     }
  //   })
  //   return await modal.present();
  // }


  getText(isDetox) {
    if (isDetox) {
      return "Detox Diet plan";
    } else {
      return "Normal Diet plan";
    }
  }

  // async EditFasting() {
  //   const modal = await this.modalController.create({
  //     component: EditFastingComponent,
  //     cssClass: 'my-custom-class',
  //     componentProps: {
  //       'time': 'fasting',

  //     }
  //   });
  //   return await modal.present();
  // }


  // tracker() {
  //   if (this.diets && this.apiCaloriesFit) {
  //     this.router.navigate(["activity-tracker"], {
  //       queryParams: {
  //         isGoogleFitCaloryZero: this.isGoogleFitCaloryZero
  //       }
  //     });
  //   }
  // }

  // trackerCalories() {
  //   if (this.apiCaloriesFit) {
  //     // if (this.profile.planType == 'Freemium') {
  //     //   this.upgradePlan();
  //     //   return;
  //     // } else {
  //     //   this.router.navigate(["calories-deficit"], {
  //     //     queryParams: {
  //     //       isGoogleFitCaloryZero: this.isGoogleFitCaloryZero
  //     //     }
  //     //   });
  //     // }
  //     this.router.navigate(["calories-deficit"], {
  //       queryParams: {
  //         isGoogleFitCaloryZero: this.isGoogleFitCaloryZero
  //       }
  //     });
  //   }

  // }

  // getSource() {
  // //  ////this.utilities.presentLoading();
  //   if (this.utilities.isDeviceiOS()) {
  //     this.http.get(APIS.WP_BASEURL + "?include[]=4308", {}, {})
  //       .then((data: any) => {
  //         let post = JSON.parse(data.data);
  //         this.source = post[0].content.rendered;
  //         this.showSourceInfo = true;
  //         this.utilities.hideLoader();
  //       })
  //       .catch(error => {
  //         this.utilities.hideLoader();
  //         console.log(error.error); // error message as string
  //       });
  //   } else {
  //     this.appService.getByPostId(4306).then(
  //       (res: any) => {
  //         this.showSourceInfo = true;
  //         this.source = res[0].content.rendered;
  //         this.utilities.hideLoader();
  //       }, (err) => {
  //         this.utilities.hideLoader();
  //       });
  //   }

  // }

  toInt(value) {
    if (value) {
      return parseInt(value);
    }
    else {
      return "";
    }
  }

  detoxConfirmation() {
  //  ////this.utilities.presentLoading();
    // this.slides.slideTo(0, 200);
    let find = this.weeks.find(o => o.formatDate == CONSTANTS.dietDate);
    let reqBody = {
      detox: !this.isDetox,
      date: find.detoxDate
    };
     this.utilities.logEvent("onboarding_update_detox_status", reqBody);
    if (this.isDetox) this.utilities.logEvent("onboarding_DietPlan_03ChangeDetox", reqBody);
    else this.utilities.logEvent("onboarding_DietPlan_04ChangeNormal", reqBody);
    this.appService.updateDetoxStatus(reqBody).subscribe((res) => {
      this.utilities.hideLoader();
      this.appService.calories().subscribe((res) => {
        this.storage.set("caloriesFit", res);
        this.apiCaloriesFit = JSON.parse(JSON.stringify(res));
        if(this.apiCaloriesFit && this.apiCaloriesFit.activityLevels){
          this.tipMessage.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
          this.tipMessage.push('<span class="single-line-noti-msg-center"><span>Do walk '+this.apiCaloriesFit.activityLevels+' steps today</span></span>');
          this.tipMessageafterReg.push('<span class=""><img src="./assets/img/typing_icon.gif" class="loading-noti-msg"></img></span>');
          this.tipMessageafterReg.push('<span class="single-line-noti-msg-center"><span>Do walk '+this.apiCaloriesFit.activityLevels+' steps today</span></span>');
        }
        // this.updateDetoxStyle();
        // if (this.detoxToggle) {
        // this.utilities.showErrorToast("Calories of detox plan will be considered for " + find.detoxDate, "1500", "iontoast-danger");
        // } else {
        // this.utilities.showErrorToast("Calories of nornal plan will be considered for " + find.detoxDate, "1500", "iontoast-success");
        this.toggle();
        // }
      })
    });

  }

  // basalCalories() {
  //   this.fromDate = new Date();
  //   this.fromDate.setHours(0, 0, 0, 0);
  //   this.toDate = new Date();
  //   this.toDate.setHours(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
  //   this.health.requestAuthorization([
  //     {
  //       read: ['calories.basal']
  //     }
  //   ]).then(res => {

  //     this.health.query({
  //       startDate: this.fromDate,
  //       endDate: this.toDate, // now
  //       dataType: 'calories.basal'
  //     })
  //       .then((resnew: any) => {
  //         alert(JSON.stringify(resnew));
  //       })
  //       .catch(e => {
  //         alert(JSON.stringify(e));

  //       });
  //   }).catch(ex => {
  //     alert("Permission" + JSON.stringify(ex));
  //   });
  // }

  // actCalories() {
  //   this.fromDate = new Date();
  //   this.fromDate.setHours(0, 0, 0, 0);
  //   this.toDate = new Date();
  //   this.toDate.setHours(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
  //   this.health.requestAuthorization([
  //     {
  //       read: ['calories.active']
  //     }
  //   ]).then(res => {

  //     this.health.query({
  //       startDate: this.fromDate,
  //       endDate: this.toDate, // now
  //       dataType: 'calories.active'
  //     })
  //       .then((resnew: any) => {
  //         alert(JSON.stringify(resnew));
  //       })
  //       .catch(e => {
  //         alert(JSON.stringify(e));

  //       });
  //   }).catch(ex => {
  //     alert("Permission" + JSON.stringify(ex));

  //   });
  // }

  slideBottomChanged(evt) {
    this.bottomSlide.update();
    // this.bottomSlide.getActiveIndex().then((index: number) => {
    //   if(index > 7){
    //     this.bottomSlide.slideTo(3,200);
    //   }
    // }
    // )
  }

  goToAnalysis(){
    if(!this.isDetox){
      this.router.navigate(["analysis"],
      {
        queryParams: {
          suggestedCalories: JSON.stringify(this.suggestedCalories),
          caloryDistri: JSON.stringify(this.caloryDistri),
          caloriesDistribution: JSON.stringify(this.caloriesDistribution),
          caloryAsPerPlan: JSON.stringify(this.caloryAsPerPlan),
          params:this.activeSlotIndex
        }
      });
    }
  }

  analysis() {
    if(this.isTodaysCalSelected){
      this.router.navigate(['todays-calorie-count'], {
        queryParams: {
          deficitToday: this.deficitToday,
          totalTodaysCalories: this.totalTodaysCalories,
          consmedAtCurrentTime: this.consmedAtCurrentTime,
          deficitCal: this.totalTodaysCalories - this.consmedAtCurrentTime
        }
      });
    }else if(this.selectedDietPlan == 'weightLossPlus'){
      return false;
    }else if (!this.isPlanActiveForDiet && !this.isRandomLock) {
      // this.paymentSubscribeModel('diet plan analysis');
    }else if (this.isDetox) {
      return false;
    } else {
      this.utilities.hideLoader();
      this.router.navigate(["analysis"],
        {
          queryParams: {
            suggestedCalories: JSON.stringify(this.suggestedCalories),
            caloryDistri: JSON.stringify(this.caloryDistri),
            caloriesDistribution: JSON.stringify(this.caloriesDistribution),
            caloryAsPerPlan: JSON.stringify(this.caloryAsPerPlan)

          }
        });
    }
  }

  isAnythingAbnormal() {
    return (this.suggestedCalories.totalCarbsPer != 0 && (this.suggestedCalories.totalCarbsPer < 35 || this.suggestedCalories.totalCarbsPer > 70))
      || (this.suggestedCalories.totalProtienPer != 0 && (this.suggestedCalories.totalProtienPer < 12 || this.suggestedCalories.totalProtienPer > 30))
      || (this.suggestedCalories.totalFatPer != 0 && (this.suggestedCalories.totalFatPer < 10 || this.suggestedCalories.totalFatPer > 40))
      || (this.suggestedCalories.totalCalories != 0 && (this.suggestedCalories.totalCalories > this.suggestedCalories.plus10))
  }

  openActivity(){
    if(this.isAndroidDevice){
      this.onCard('activity');
    }
  }

  onCard(card) {
    // if(!this.isPlanActiveForDiet && !this.isRandomLock && card == "deficit"){
    //   this.paymentSubscribeModel('deficit');
    //   return true;
    // }else{
    // if(this.currentDateIndex == 0){
    //   if (this.isNotCordova) window.open("https://play.google.com/store/apps/details?id=com.diet.planner", '_system');
    //   if (this.showBtnsBlk && !this.isNotCordova) this.openStore()
    //   if ((!this.showBtnsBlk && !this.isNotCordova && !this.isIosDevice && this.googleFitConfigure) || (!this.showBtnsBlk && this.appleHealthKitPermission && this.isIosDevice)) {
    //     switch (card) {
    //       case 'activity':
    //         this.tracker();
    //         break;
    //       case 'deficit':
    //         this.trackerCalories()
    //         break;
    //     }
    //   }
    // } else{
    //   let type =  card  == 'activity' ?  "Steps" : "Deficit" 
    //   this.utilities.showErrorToast("You can't check "+ type +" for future date");
    // }
    // }

  }

  gotoStoryboard(story) {
    this.router.navigate(["story-board"],
      {
        queryParams: {
          story: story,
          suggestedCalories: this.todaySuggestedCalories,
          mealType: this.mealType,
          differenceHours: this.differenceHours,
          fromPage: "/consume"
        }
      });
  }

  setToggleButtons() {
    if (this.selectedDietPlan == 'weightLoss' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Normal Plan", "isChecked": false, "color": "#01A3A4", plan: "weightLoss" },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    } else if (this.selectedDietPlan == 'weightLoss' && !this.isDetox) {
      this.toggleButtons = [
        { "text": "Normal Plan", "isChecked": true, "color": "#01A3A4", plan: "weightLoss" },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    } else if (this.selectedDietPlan == 'immunity_booster' && !this.isDetox) {
      this.toggleButtons = [
        { "text": "Immunity Plan", "isChecked": true, "color": "#FD9F33", plan: "immunity_booster" },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    }else if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Immunity Plan", "isChecked": false, "color": "#FD9F33", plan: "immunity_booster" },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    }else if (this.selectedDietPlan == 'cholesterol' && !this.isDetox) {
      this.toggleButtons = [
        { "text": "Cholesterol Plan", "isChecked": true, "color": "#A31E79", plan: "cholesterol" },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    }else if (this.selectedDietPlan == 'cholesterol' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Cholesterol Plan", "isChecked": false, "color": "#A31E79", plan: "cholesterol" },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    } else if(this.selectedDietPlan == 'pcos' && this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "PCOS", "isChecked": false, "color": "#FF5A7D", plan: "pcos" },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    } else if(this.selectedDietPlan == 'pcos' && !this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "PCOS", "isChecked": true, "color": "#FF5A7D", plan: "pcos" },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    }else if(this.selectedDietPlan == 'weightLossPlus' && !this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Fast Track", "isChecked": true, "color": "#0B94C1", plan: "weightLossPlus" },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'fatShredding' && !this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Tone Up", "isChecked": true, "color": "#FD980F", plan: this.selectedDietPlan },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'fatShredding' && this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Tone Up", "isChecked": false, "color": "#FD980F", plan: this.selectedDietPlan },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'muscleGain' && !this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Muscle Building", "isChecked": true, "color": "#0B94C1", plan: this.selectedDietPlan },
        { "text": "Detox Plan", "isChecked": false, "color": "#4CB271", plan: "detox" }
      ];
    }else if(this.selectedDietPlan.split('_').length > 0 && this.selectedDietPlan.split('_')[0] == 'muscleGain' && this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Muscle Building", "isChecked": false, "color": "#0B94C1", plan: this.selectedDietPlan },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    }else if(this.selectedDietPlan == 'weightLossPlus' && this.isDetox){// if (this.selectedDietPlan == 'immunity_booster' && this.isDetox) {
      this.toggleButtons = [
        { "text": "Fast Track", "isChecked": false, "color": "#0B94C1", plan: "weightLossPlus" },
        { "text": "Detox Plan", "isChecked": true, "color": "#4CB271", plan: "detox" }
      ];
    }
    this.appService.toogleSwitchFunc(this.toggleButtons);
  }

  switchToggle1(event){
    this.selectedDietPlan = event.find(button => button.plan !="detox").plan;
    this.detoxConfirmation();
  }

  isTodaysCalSelected = false;
  switchToggle2(event){
    // event.map((ele) =>{
    //   ele.isChecked = !ele.isChecked
    //   return ele
    // });
    // this.toggleTodayCalCount = event;
    this.isTodaysCalSelected = this.toggleTodayCalCount[0]["isChecked"];
    if(this.isTodaysCalSelected){
      this.dateSlides.lockSwipeToNext(true);
      if(CONSTANTS.dietDate != moment(new Date()).format("DDMMYYYY")){
        this.dateSlides.slideTo(0, 200);
      }
    }else{
      this.dateSlides.lockSwipeToNext(false);
    }
    this.goToTodaysCaloriesCounter(true);
    // this.appService.toogleSwitchTodaysCalFunc(this.toggleTodayCalCount);
  }

  gotoNutriScore() {
    if(CONSTANTS.isPlanActiveParent){
      this.utilities.logEvent("onboarding_Nutricheck_click_homebanner_premium", {});
      this.router.navigate(["nutri-score"]);
    }else{
      this.utilities.logEvent("onboarding_Nutricheck_click_homebanner_free", {});
     // this.paymentSubscribeModel('nutri diet plan');
    }
  }

  countDown(){
    let deadline = new Date(localStorage.getItem("countDownTimer")).getTime();
    let a = moment(new Date(localStorage.getItem("countDownTimer")), "DD.MM.YYYY");
    let b = moment(new Date(), "DD.MM.YYYY");
    this.freeTrialEndDateDiff = a.diff(b, 'days');
    if(this.freeTrialEndDateDiff == 0){
      let self = this;
      let x = setInterval(function () {
        let now = new Date().getTime();
        let t = deadline - now;
        if (t < 0) {
          clearInterval(x);
          console.log("offer page");
          localStorage.setItem("offerTimeExpired", "true");
          self.showCouponIcon = false;
          return false;
        }
  
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
  
        self.countdownHours = (hours <= 9 ? "0" + hours : hours);
        self.countdownMins = (minutes <= 9 ? "0" + minutes : minutes);
        self.countdownSec = (seconds <= 9 ? "0" + seconds : seconds);
      }, 1000);
    }
  }

  tipMsgClcked(eve) {
    if(eve && eve.target && eve.target.getAttribute("clickId")){
      let option = eve.target.getAttribute("clickId");
      switch (option) {
        case "Activate": {
          this.onCard('activity');
          break;
        }
        case "Track Water": {
          this.waterClick();
          break;
        }
        case "Track Fast": {
          this.fastingClick();
          break;
        }
        case "Add Water": {
          this.waterClick();
          break;
        }
        case "CheckAnalysis":{
          this.goToAnalysis();
          break;
        }
        default: {
          break;
        }
      }
    }
  }
  getFoodOfTheDay(day) {
    return day.map(d => d.Food + " (" + d.portion + " " + d.portion_unit +")").join(",\n");
    // return day[index] ? day[index].Food : ""
  }

  getCaloriesOfDay(day, index) {
    return day[index] ? day[index].Calories : 0;
  }
  downloadDietPlan() {
   
    const doc = new jsPDF() as jsPDFWithPlugin;
    let jsonData = [];

    let todayDate = moment(CONSTANTS.dietDate, 'DDMM').format('DDMMY')
    let tomorrowDate = moment(CONSTANTS.dietDate, 'DDMM').clone().add(1, 'days').format('DDMMY');
    let dayAftertomorrowDate = moment(CONSTANTS.dietDate, 'DDMM').clone().add(2, 'days').format('DDMMY');

    let getDataTodayPromise = this.appService.getDietPlans(CONSTANTS.isDetox, todayDate, CONSTANTS.country, CONSTANTS.defaultCalories);
    let getDataTomorrowPromise = this.appService.getDietPlans(CONSTANTS.isDetox, tomorrowDate, CONSTANTS.country, CONSTANTS.defaultCalories);
    let getDataDayAfterTomorrowPromise = this.appService.getDietPlans(CONSTANTS.isDetox, dayAftertomorrowDate, CONSTANTS.country, CONSTANTS.defaultCalories);

    Promise.all([
      getDataTodayPromise.catch(error => { this.errorHandler(error) }),
      getDataTomorrowPromise.catch(error => { this.errorHandler(error) }),
      getDataDayAfterTomorrowPromise.catch(error => { this.errorHandler(error) })
    ]).then(values => {
      this.utilities.hideLoader();


      let todayDiets = this.utilities.parseJSON(this.utilities.parseString(values[0])).diets;
      let tomorrowDiets = this.utilities.parseJSON(this.utilities.parseString(values[1])).diets;
      let dayAfterTomorrowDiets = this.utilities.parseJSON(this.utilities.parseString(values[2])).diets;

      let todayCalories = 0, tomorrowCalories = 0, dayAfterTomorrowCalories = 0;


      todayDiets.forEach((diet, index) => {
        let row = diet.message;
        let time = diet.time;

        let todayDiet = diet.data;
        let tomorrowDiet = tomorrowDiets[index].data;
        let dayAfterTomorrowDiet = dayAfterTomorrowDiets[index].data;

        let foodIteratIndex = Math.max(todayDiet.length, tomorrowDiet.length, dayAfterTomorrowDiet.length);

        for (let i = 0; i < foodIteratIndex; i++) {
          todayCalories += this.getCaloriesOfDay(todayDiet, i);
          tomorrowCalories += this.getCaloriesOfDay(tomorrowDiet, i);
          dayAfterTomorrowCalories += this.getCaloriesOfDay(dayAfterTomorrowDiet, i);
        }
        jsonData.push({
          "row": {
            content: row,
            styles: {
              'fillColor': '#FD9F33',
              'textColor': '#FFF',
              'fontStyle': 'bold',
              'halign': 'center'
            }
          },

          [`${todayDate}`]: this.getFoodOfTheDay(todayDiet),
          [`${tomorrowDate}`]: this.getFoodOfTheDay(tomorrowDiet),
          [`${dayAftertomorrowDate}`]: this.getFoodOfTheDay(dayAfterTomorrowDiet)
        });


      });

      let columns = [
        { header: '', dataKey: 'row' },
        { header: moment(todayDate, 'DDMM').format('dddd') + "\n" + Math.ceil(Number(todayCalories))  + " Kcals", dataKey: todayDate },
        { header: moment(tomorrowDate, 'DDMM').format('dddd') + "\n" + Math.ceil(Number(tomorrowCalories)) + " Kcals", dataKey: tomorrowDate },
        { header: moment(dayAftertomorrowDate, 'DDMM').format('dddd') + "\n" + Math.ceil(Number(dayAfterTomorrowCalories)) + " Kcals", dataKey: dayAftertomorrowDate },
      ];

      doc.autoTable({
        margin: { top: 0, left: 0, right: 0, bottom: 0 },
        tableLineWidth: 1,
        tableLineColor: "#FFF",
        theme: 'plain',
        body: [
          [
            { content: "", styles: { cellWidth: 50, fontSize: 14 } },
            { content: "Diet reccommendations for ", styles: { halign: 'right', fillColor: '#01A3A4', textColor: '#FFF', fontSize: 14 } },
            { content: this.profileName, styles: { fontStyle: 'bold', halign: 'left', fillColor: '#01A3A4', textColor: '#FFF',fontSize: 14 } },
            { content: "", styles: { cellWidth: 50, fontSize: 14 } }
          ]
        ]
      })

      doc.autoTable({
        startY: 8,
        margin: { top: 0, left: 5, right: 5, bottom:0},
        tableLineWidth: 1,
        tableLineColor: '#01A3A4',
        body: JSON.parse(JSON.stringify(jsonData)),
        columns: columns,
        headStyles: { halign: 'center', textColor: '#FFF', fillColor: '#FFF', cellPadding: 5, fontSize: 14 },
        bodyStyles: { valign: 'middle', textColor: "#000000", fontSize: 12 },
        foot: [[{ content: "This is as per https://www.smartdietplanner.com/terms-conditions/", colSpan: 4, }]],
        footStyles :{ halign: 'center', textColor: '#FFF', fillColor: '#01A3A4', fontStyle: 'italic', cellPadding: 1, fontSize: 12},

        didParseCell: (data) => {

          if (data.section === 'head') {
            if (data.column.index === 1) data.cell.styles.fillColor = '#F9B747';
            else if (data.column.index === 2) data.cell.styles.fillColor = '#FF8F66';
            else if (data.column.index === 3) data.cell.styles.fillColor = '#FF535A';
          }

          if (data.section === 'body') {
            if (data.column.index === 0) {
              // if (data.row.index < jsonData.length - 1) {
                data.cell.styles.textColor = "#FFF";
                data.cell.styles.fontStyle = 'normal';
                data.cell.styles.halign = 'left';
                data.cell.styles.cellPadding = 5;
                data.cell.styles.fontSize = 14;
                // data.cell.styles.minCellHeight = 27;

                if (data.row.index % 2 === 0 && data.row.index > 1) data.cell.styles.fillColor = '#9B7F88';
                else data.cell.styles.fillColor = '#826970';
              // }
            }

            if (data.column.index === 1) {
              if (data.row.index % 2 === 0 && data.row.index > 1) data.cell.styles.fillColor = '#FEEFD6';
              else data.cell.styles.fillColor = '#FCE0AF';
            } else if (data.column.index === 2) {
              if (data.row.index % 2 === 0 && data.row.index > 1) data.cell.styles.fillColor = '#FFE6DD';
              else data.cell.styles.fillColor = '#FFCFBD';
            } else if (data.column.index === 3) {
              if (data.row.index % 2 === 0 && data.row.index > 1) data.cell.styles.fillColor = '#FFD9DB';
              else data.cell.styles.fillColor = '#FFB7B9';
            }
          }

          if (data.column.index > 0) data.cell.styles.cellWidth = 55;
          else data.cell.styles.cellWidth = 35;
          data.cell.styles.lineWidth = 0.5;
          data.cell.styles.lineColor = '#FFF';

          // if(data.section == "foot"){
          //   data.cell.styles.lineWidth = 0;
          // }
        },

        didDrawCell: (data) => {
          if (data.section === 'head' && data.column.index === 0) {
            let base64Img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAWCAYAAACxOdCYAAAABmJLR0QA/wD/AP+gvaeTAAAGVklEQVRYw+2Za2wUVRTHFwuIGpSXdDcgYHcLMRoUFTWiwO5WEA3tFtx0u3dm2fRDg9EoCQZh28qKJoiQKH5QFAV8AanSsoXdghRLkGDlISREg1FQUIJ9BEuxDyx0/J/pHbg7nZ0dTOyXMsnJ3Dlz7525vz33PGZtNpPj5V05t5XGPdGShOcw5ATkp5KEe3Ok2hvwl/szxL4dsdtd7TFHaVvM/m37NvsynNshe9uqMgtt14/uY0ncO7404TkFkEoKORFJeBceiN9tb43ZPwLASxCFzn9XjZR5W5NNSq2tf58GGi33DwS0YyZANVlH/Vtjjq84vNMdcceTOB/UQVXattpX6p8TlKRIoST9BblQKMtfky4cDg/CtQJpKyoqGsz77eQ6nzYW7VrSBSQpVzdOHYsxidnFxTcXMrZD0HeLLK/S5hHGdUGaaVzBvHnOpHuMLdDNT9Kcbu6koyTumW8BKMT9GfUHsBrI/tYtIxwAWN4DKLfgjopR469AKSzMpIVgEWUBxrx4wVd6wGFMkmV5JNqdItRgMDiU6wjE2qRxsvxWQJZfUIEz9gz63hcMhXJw/Qv9ENSGLlsPFT/Ou0FZDqN9BnIEt/oZQVX70XyyPC3d3MlQu31oOqgtkYQn1g01s0CpHDIE58oUQLulyrFce0YgHB7HQW3Aiz4ejUZv0MH5Duc4oD+Pc10SVEli/LoSclYPAPNN5/efECz7KKBt1q9VHCfOXSBJ96eA+hK1/X7/wHRzX/WlNd7hANZlArMVvnZVdMfMYeI4wy3fA6q9VhyDF3wfL3SZAziKF71JWMhCnNshx7DQF5OgYgG4/ytdqwAYmyxYuDbfl+KzrEKFlT+ouRXT7S/LhyxDLav2Tk5lmYD5RnTnjJFlO9z34nrBNUONZf6hf54kSY4gY6/Ri9L2ERYiQXaRfxSs2ldcXDyA/Bm29nr8CMPIBQDAMmHcCiz4HbT/wdyua4bKWNDMUsm9MMYeKZDleyxDjVS7vUkw456NJXH3XOhnRqo9SwF2H7fk9uJDDwzQxiED+CE9VHuXUm7L4H5xLF5mDaxsFqyjVLWOUGiSCBUv+hQWsQT+d4QGlfswRSdHRAAU4GDdrWLQSAeVfCXGzkP7d+pL7sjMp5JoListVECcqrPQy5BOI+tdXD19nGCpJy1AvaT1D4VCw/EyuyEtaiSVpLd1liMJQe0qVMZWq5aKbUqBAotcqlo5AoRocWh/Cqkny7Zkqd1B7zxlGhajv0I6S1AXb8/Jshb5PeeoOBCg1luAeqFv5qgwaQA7nxZqtSdf51PPWID6fZ9N/lGa7k0D9Zh+DFVN6aC2brWv77NQKSClAopAtT8S82bqx7THHWMB7rgZVHwbYLo05zc1EDG2n3JVrqszqLwSFCCEcZ2I0kU8BZoPfxYw02P8KQqGakCU5dlJz4ZfpyLhf4dalsiZlAJqzaLYFLV0bH56zNAmn3N9o89V25ifpVZKLRWjhtMHlRRQO5q3jxmqg1rHM4GH0F5nBJWnTR8DyDZK8jmkA1TBGMAz1Bv9UJoOadcEtDf1irX2rKrcG+ibAN1r8mV5AfM0ROHS0ujLVr9GKbXjBqFy+ryHlVY51qZaGEVuLXrqAVCag3tzyKoA6mHeZw/kTSoVdfAM9YB9GLnlaC63arpAIHAH+i6CLO8lqF7GgXaWxr3Pka4xd8LgpjznakDsEoBelXznmj9nTLxFUWz9kLdGxfz0YoXjLoNtrS4M55VUNRlBJdgFodB4tfTkiyd4PM/9Qg81hf4sxn9IolVlpEN69gnV7VSA9E4WUDu9P6zzG/jQGSrQPNdsgDtlCDNZTtbPcU5R/WyVPQygF1GeGuZwtDCA+oA+gGCbZ+ih8tzwoAYE4Gs0ePxcTqBFqCn0dSa7xE0VXa+mVw1zs7IbfK6dFmCK0tngyy5V/LYMgJ3WtmXU6BRQ68x0FFTog8oVq0Xiz33gHg5kKtqNeqgGetPn4AfbpyXyvXI0+VzPXiNQUXb/PMt1Y6q5xYguuIQaTbDwH1FjX3EbanlI/pVXXxzORsD38LahPmlOWX5d/2z1k18o9FivpljY+q/+N6jOFdf/QzE5GvJdRQDVYRHoJQBdpvAU6PphBjbX6aIID2DHSSgTqM+9c2JjnvM9gGyAnINsq89zPtqXOf0LQ6jWiqVt35oAAAAASUVORK5CYII=';
            doc.addImage(base64Img, 'PNG', data.cell.x + 2, data.cell.y + 7, 25, 6.5)
          }
        }
      });
      
        doc.save('Diet Plan.pdf');
      
    });
  }

  async gotoDownloadPopup(){
   
    let me = this;
    const modal = await me.modalController.create({
      component: DownloadPopupComponent,
      backdropDismiss: true,
      cssClass: 'app-offer-popup',
      componentProps: { }
    });
    modal.onDidDismiss().then((data: any) => {
      if(localStorage.getItem("isDownload")=="1"){
        localStorage.setItem("isDownload","0");
      this.downloadDietPlan();
      
      }
    })
    return await modal.present();
  }
  fetchProfile(){
    this.appser.getProfile().subscribe(resData=>{
    
       if(resData.demographic!=undefined){
         localStorage.setItem("profileData",JSON.stringify(resData));
       }
      
    });
  }

  errorHandler(error: any) {
    throw new Error('Method not implemented.');
  }
  changePlan(){
    this.router.navigate(['change-plan']);
  }

}

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
    console.log(error);
  }

}
