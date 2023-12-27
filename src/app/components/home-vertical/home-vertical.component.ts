import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild,OnChanges, Output, EventEmitter } from '@angular/core';
import { UTILITIES } from '../../core/utility/utilities';
import { APIS, CONSTANTS, ProfileInfo} from '../../core/constants/constants';
import { Storage } from '@ionic/storage';
import { AppService } from "../../home-service/app.service";
import moment from "moment";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonContent, IonSlides, LoadingController, MenuController, ModalController, Platform, ToastController, } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { RecipeDayComponent } from '../recipe-day/recipe-day.component';
import { DomSanitizer } from '@angular/platform-browser';

 let counterSwipe: any = 0;
@Component({  
  selector: 'app-home-vertical', 
  templateUrl: './home-vertical.component.html',
  styleUrls: ['./home-vertical.component.scss'],
})
export class HomeVerticalComponent implements  OnInit,OnChanges, OnDestroy {
  @Output('refreshDiet')refreshDiet= new EventEmitter<object>();
  @Output('removeItem')removeItem= new EventEmitter<object>();
  @Output('counterData')counterData= new EventEmitter<object>();
  @Output('consumedProtein')consumedProtein= new EventEmitter<object>();
  
  @ViewChild("videoSlideWhySDP", { static: false }) videoSlideWhySDP: IonSlides;
  @ViewChild("videoSlide", { static: false }) videoSlide: IonSlides;
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;
  @ViewChild("resultSlide", { static: false }) resultSlide: IonSlides;
  isChecked: boolean = true;
  toggleButtons = [];

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

  ngOnChanges(){
   console.log("ngOnChange");
   this.ngOnInit();
   this.todaysCalCount();
   this.getConsumedProtien();
   
  }
 

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
  @Input()isPlanActiveForDiet = false; // lock and unlock icon
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
  noNextDate = false;
  noPrevDate = true;
  defaultCircleFillColor = true;
  hasAnimation: any = 0;
  currentDateIndex = 0;
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
  userEmail:string=localStorage.getItem("custId");
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

  private recipeDayComponent: RecipeDayComponent;
  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
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
    private iab: InAppBrowser,
    // private diagnostic: Diagnostic,
    // private winRef: WindowRefService,
    private appServices: AppService,
    private route: ActivatedRoute,
    // private device: Device,
    // public statusBar: StatusBar,
    // private firebaseX:FirebaseX,
    // private iap2: InAppPurchase2
  ) {
    let me = this;
    this.recipeDayComponent = new RecipeDayComponent(storage, appService, router, route, _sanitizer, utilities);
    this.profilePic = ProfileInfo.profilePic;
   this.image_URL = CONSTANTS.image_URL;
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.isNotCordova = false;
      }
      else {
        this.isNotCordova = true;
      }

      //this.checkPushPermission("local", null);
    });
    this.appService.offerIcon$.subscribe(() => {
      this.manageCouponCounter();
    });

    this.appService.nutriScorePayment$.subscribe(() => {
      this.paymentSubscribeModel('nutri diet plan');
    });

    this.appService.mainPageScrollTop$.subscribe(() => {
      let self = this;
      setTimeout(() => {
        self.ionContent.scrollToTop(500);
      }, 100);
    });

    this.appService.paymentDone$.subscribe(() => {
      this.startCelebration();
    //  this.dataOnInIt();
    });

    // this.appService.navigateToLunchSlot$.subscribe(() => {
    //   let self = this;
    //   self.slides.slideTo(4,200);
    //   setTimeout(() => {
    //     self.ionContent.scrollToTop(500);
    //   }, 100);
    // });

    // this.appService.goToDetoxPlan$.subscribe(() => {
    //   this.selectedDietPlan = CONSTANTS.selectedDietPlan;
    //   this.detoxConfirmation();
    // });

    // this.appService.goToAnalysis$.subscribe(() => {
    //   let self = this;
    //   self.utilities.showLoading();
    //   setTimeout(() => {
    //     self.analysis();
    //   }, 100);
    // });

    this.appService.goToPersonalDiet$.subscribe(() => {
      let self = this;
      setTimeout(() => {
        self.gotoEditPersonalPlan();
      }, 100);
    });

    // this.appService.goToDoSection$.subscribe(() => {
    //   let self = this;
    //   setTimeout(() => {
    //     let yOffset = document.getElementById("toDoSection").offsetTop;
    //     self.ionContent.scrollToPoint(0, yOffset + 250, 2000);
    //   }, 100);
      
    // });

    if(CONSTANTS.isTestEnv) alert("You are in test environment");

    setInterval(()=>{
      this.needleValue = Math.floor(Math.random() * 100);
    }, 2000);
  }
  ngOnChange(){
    this.cdr.detectChanges();
  }
  //AfterViewInit
  // @ViewChild("slides1", { static: false }) slides: IonSlides;
  // @ViewChild("slides2", { static: false }) dateSlides: IonSlides;
  // @ViewChild("lessThan100FoodItem", { static: false }) lessThan100FoodItemsSlides: IonSlides;
  // @ViewChild("highProteinFoodItem", { static: false }) highProteinFoodItemsSlides: IonSlides;
  // @ViewChild("healthyChoicesFoodItem", { static: false }) healthyChoicesFoodItemsSlides: IonSlides;
  // @ViewChild("healthyChoicesAvvoidInFoodItem", { static: false }) healthyChoicesAvvoidInFoodItemSlides: IonSlides;
  // messageCal = {
  //   moreTarget: "Calories are more than target",
  //   lessTarget: "Calories are less than target",
  //   fixNutrients: "Fix nutrients proportion.",
  //   fixDistribution: "Fix calories distribution. Dinner be lightest.",
  //   caloriesAmountNutrients: "Fix calories amount and nutrients in plan",
  //   caloriesAmountDistribution: "Fix calories amount and distribtion.",
  //   both: "Diet plan is not good "
  // };
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
  // slideOptsResult = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   loop: true,
  //   pagination: false,
  //   centeredSlides: false,
  //   spaceBetween: 0,
  //   // autoplay:true
  // };
  // slideOptsTwo = {
  //   initialSlide: 0,
  //   slidesPerView: 1.2,
  //   loop: false,
  //   centeredSlides: true,
  //   spaceBetween: 1,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'custom',
  //     // renderBullet: function (index, className) {
  //     //   return this.customProgressBar(index, this.slides.length);
  //     // }
  //     // }
  //     renderCustom: (swiper, current, total) => {
  //       return this.customProgressBar(current, total);
  //     }
  //   }
  // };
  // slideOptsDate = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   loop: false,
  //   centeredSlides: true,
  //   spaceBetween: 1,
  //   pagination: false
  // };

  // slideOptsLessThan100FoodItem = {
  //   initialSlide: 0,
  //   slidesPerView: 1.2,
  //   loop: false,
  //   centeredSlides: true,
  //   spaceBetween: 1,
  //   pagination: false
  // };

  // slideOptsHighProteinFoodItem = {
  //   initialSlide: 0,
  //   slidesPerView: 1.2,
  //   loop: false,
  //   centeredSlides: true,
  //   spaceBetween: 1,
  //   pagination: false
  // };

  // slideOptsHealthyChoicesFoodItem = {
  //   initialSlide: 0,
  //   slidesPerView: 1.2,
  //   loop: false,
  //   centeredSlides: true,
  //   spaceBetween: 1,
  //   pagination: false
  // };

  // slideOptsHealthyChoicesAvoidInFoodItem = {
  //   initialSlide: 0,
  //   slidesPerView: 1.2,
  //   loop: false,
  //   centeredSlides: true,
  //   spaceBetween: 1,
  //   pagination: false
  // };

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
    //  this.countDown();
    } else {
      this.showCouponIcon = false;
    }
  }


 
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

  async paymentSubscribeModel(content) {
    let self = this;
    self.utilities.showLoading();
    let count = localStorage.getItem("couponCounter")
    let coutDownTimer = localStorage.getItem("offerTimeExpired");
    if (Number(count) >= 1 && coutDownTimer == "false") {
      this.storage.get('profileData').then(val => {
        if (val != '') {
          this.appService.getCouponListOffered().then(
            success => {
              let couponList = JSON.parse(JSON.stringify(success)).couponList.filter((ele) => {
                return ele.couponCode.indexOf("REF") == -1;
              });
              let data;
              if (self.isIosDevice) {
                data = couponList.filter((ele) => {
                  return ele.couponCode == "special_offer_ios"
                })
              } else {
                data = couponList.filter((ele) => {
                  return ele.couponCode == "special_offer_android"
                })
              }
              // self.isIosDevice ? couponList[0] : couponList[1];
              self.utilities.hideLoader();
              data[0]["productId"] = self.isIosDevice ? "smart_diet_planner_yearly_offer_app" : self.isAndroidDevice ? "offer_sdp_6months" : "";
              self.showPaymentSubscribe(data[0], content)
            },
            err => {
              self.utilities.hideLoader();
              console.log("errr", err);
            }
          )
        }
      })
    }else{
      this.storage.get("puchase_plan").then(success => {
        if(success){
          let plans = JSON.parse(JSON.stringify(success)).couponList;
          console.log("Plan", plans);
          let plan = plans.filter(ele =>{
            return ele.perid == 6
          })[0];
          plan["productId"] = self.isIosDevice ? "smart_diet_planner_half_yearly_app" : self.isAndroidDevice ? "smart_diet_planner_half_yearly" : "";
          self.showPaymentSubscribe(plan, content);
        }
      },
        err => {
          // this.utilities.hideLoader();
          console.log('errr', err);
        }
      );
    }
  }

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

  // timingPer = 0;
  async showPaymentSubscribe(data, content) {
    let me = this;
    let obj = { 'content': content, "plan": data };
    if (content == 'diet plan analysis') {
     this.getDietPlanScore((tScore)=>{
      obj["totalScore"] = tScore;
   //   this.openPurchaseModal(obj);
     })
    } else if (content == 'unlock your diet plan') {
      obj["totalCalories"] = this.roundUpvalue(this.suggestedCalories.totalCalories);
      obj["carbs"] = this.roundUpvalue(this.suggestedCalories.totalCarbs);
      obj["protein"] = this.roundUpvalue(this.suggestedCalories.totalProtien);
      obj["fat"] = this.roundUpvalue(this.suggestedCalories.totalFat);
   //   this.openPurchaseModal(obj);
    } else {
  //    this.openPurchaseModal(obj);
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

    // border-top-right-radius: 50% 100%; border-bottom-right-radius: 50% 100%; border-top-left-radius: 50% 100%; border-bottom-left-radius: 50% 100%;

    let progressBarContainer: string = "<div><div style='display: inline-block; height: 15px; width: 15px; background: #01A3A4; border-radius: 100%;'></div>";
    let spaceSpan = "<div style='display: inline-block; height: 10px; width: 10px; background: #F6F7FC;'></div>";
    let yetToNavigateBullet = "<div style='display: inline-block; height: 15px; width: 15px; background: #DDDDDD; border-radius: 100%;'></div>"
    let navigatedBullet = "<div style='display: inline-block; height: 15px; width: 15px; background: #01A3A4; border-radius: 100%;'></div>";

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
  @Input('diets')diets: any = [];
  @Input('slotIndex') slotIndex=0;
  @Output('kcounter')kcounter= new EventEmitter<boolean>(true);
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
      this.paymentSubscribeModel('weightloss');
    }else{
      this.router.navigate(["weight-guage"])
    }
  }


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
   // this.dietChoices = false;
  }

  totalTodaysCalories = 0;
  totalTodaysCaloriesPerc = 0;
  overCalories = false;
  todaysCalCount(){
    // this.totalTodaysCalories = 0;
    let totalTodaysCalories = 0;
    this.storage.get("dietData").then((res)=>{
      let dietPlan = CONSTANTS.isDetox ? 'detox' : CONSTANTS.selectedDietPlan;
      if(res && res[moment(new Date()).format("DDMMYYYY")] && res[moment(new Date()).format("DDMMYYYY")][dietPlan]){
        let dietData = res[moment(new Date()).format("DDMMYYYY")][dietPlan];
        dietData.diets.forEach((ele) =>{
          let slotCalories = 0;
          console.log("totalTodaysCalories:-",totalTodaysCalories);
          if(CONSTANTS.dietDate != moment(new Date()).format("DDMMYYYY")){
            this.counterData.emit({totalTodaysCalories:0});
          }
          ele.data.forEach((ele1) =>{
          
            if(ele1.eaten > 0 && CONSTANTS.dietDate == moment(new Date()).format("DDMMYYYY")){
              totalTodaysCalories = totalTodaysCalories + ele1["Calories"];
              this.counterData.emit({totalTodaysCalories:totalTodaysCalories});
            }
           
          });
         
        });
        this.totalTodaysCalories = Math.round(totalTodaysCalories);
        this.totalTodaysCaloriesPerc = Math.round((totalTodaysCalories * 100) /dietData["recomended"]);
        this.totalCaloriesPer = dietData["totalCaloriesPer"];
        this.tolalCalories = dietData["tolalCalories"];
        this.kcounter.emit(true);
      }
    })
  }
  
  goToTodaysCaloriesCounter(flag){
    if(this.currentDateIndex == 0){
      if(flag){
     //   this.utilities.logEvent("Counter_click_header", {});
      }else{
     //   this.utilities.logEvent("Counter_click_tracker", {});
      }
      this.router.navigate(['todays-calorie-count']);
    } else{
   //   this.utilities.showErrorToast("You can't check KCal counter for future date");
    }
  }

  // goToProtienTracker(){
  //   if(this.currentDateIndex == 0){
  //     this.router.navigate(['protien-tracker']);
  //   } else{
  //     this.utilities.showErrorToast("You can't check Protein Tracker for future date");
  //   }
  // }

  totalProtien = 0;
  protienConsumed = 0;
  showProtienTracker = false;
  // checkingProtinTracker = true;
  protienConsumedPer = 0;
  getConsumedProtien(){
    
      let profile = this.utilities.parseJSON(localStorage.getItem("profileData"));
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
      console.log("this.protienConsumedPer",this.protienConsumedPer);
      this.consumedProtein.emit({consumedP:this.protienConsumedPer});
    
  }


  todaySuggestedCalories = 0;
  // fetchDiet(isDetox, date) {
  //   console.log("------------- fetchDiet ---------");
  //   let self = this;
  //   self.appService.getDietPlans(isDetox, date, CONSTANTS.country, CONSTANTS.defaultCalories).then(
  //     success => {
  //       self.storage.get("dietData").then((val : any)=>{
  //         if(val){
  //           val[date] = {};
  //           let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
  //           val[date][planName] = success;
  //           self.storage.set("dietData", val).then(()=>{
  //             self.setDiet(success, isDetox, date)
  //           })
  //         } else {
  //           let obj = {};
  //           let planName = isDetox ? "detox" : CONSTANTS.selectedDietPlan;
  //           obj[planName] = success;

  //           let res1 = {};
  //           res1[date] = obj;
  //           self.storage.set("dietData", res1).then(() => {
  //             self.setDiet(success, isDetox, date)
  //           })
  //         }
  //       })

  //     },
  //     error => {
  //       self.storage.set("localData", "");
  //       self.storage.set("profileData", "");
  //       self.utilities.hideLoader();
  //       console.log("DietPlan Error:", error);
  //       // self.utilities.presentAlert(message.globalError);
  //       self.router.navigate(["profile"]);
  //     }
  //   );
  // }

  recipeData = {};
  // fetchDietPlan() {
  
  //   this.storage.get("dietData").then((res)=>{
  //     if(moment(new Date()).format("DDMMYYYY") == CONSTANTS.dietDate && this.isDetox){
  //       this.deficitTotal = 900;
  //     }
  //     let dietData = res && res[CONSTANTS.dietDate] ? res[CONSTANTS.dietDate] : null;
  //     if(dietData){
  //       let planName = this.isDetox ? "detox" : CONSTANTS.selectedDietPlan;
  //       if(res[CONSTANTS.dietDate][planName]){
        
  //         this.setDiet(res[CONSTANTS.dietDate][planName], this.isDetox, CONSTANTS.dietDate);
  //        }else{
        
  //         this.fetchDiet(this.isDetox, CONSTANTS.dietDate)
  //       }
  //     } else {
  //       this.fetchDiet(this.isDetox, CONSTANTS.dietDate)
  //     }
  //   })
  // }

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



  senitizeHTML(htmlValue){
    return this._sanitizer.bypassSecurityTrustHtml(htmlValue);
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

  isFitStarted = false;
  removeMessageItem(){
    this.tipMessage.splice(4,1);
    this.tipMessage.splice(4,1);
    this.isFitStarted = true;
  }

  computeCalories(steps) {
    this.storage.get("profileData").then(val => {
      let profile = val;
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
 

    //this.setNotifications();
    // this.activateFitAPI();
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }

    if (this.deficitInterval) {
      clearInterval(this.deficitInterval);
    }

    this.myInterval = setInterval(() => {
     // this.getHabitsForUpdate();
    }, 3600 * 1000);

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
        // //this.utilities.presentLoading();
     //   this.getHabitsForUpdateOneTime();
      });
      let data = profile;
      this.profilePic = data.photoUrl ? data.photoUrl : 'assets/images/logo.png';
      this.userFirstName = data.firstName;
    })



   
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

  

  dateChanged(weeks,index) {
    this.weeks = weeks;
    let selectedDay = this.weeks[index];
    var dayValue = selectedDay.formatDate;
    CONSTANTS.dietDate = dayValue;
  
    // this.utilities.logEvent("DietPlan_02ChangeDate", {
    //   date: CONSTANTS.dietDate
    // });
   
    this.storage.get("dietData").then((res)=>{
      let dietData = res && res[CONSTANTS.dietDate];
      if(!dietData){
        this.isDetox = false;
        CONSTANTS.isDetox = false;
        this.detoxToggle = false;
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
      }else if('Detox' in dietData || 'detox' in dietData){
        this.isDetox = true;
        CONSTANTS.isDetox = true;
        this.detoxToggle = true;
        this.selectedThemeColor = this.detoxThemeColor;
        CONSTANTS.selectedPlanThemeColor = this.selectedThemeColor;
      }else{
        this.isDetox = false;
        CONSTANTS.isDetox = false;
        this.detoxToggle = false;
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
      }
    //  this.fetchDietPlan();
    })

    

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
    } else {
      this.dayValue = this.weeks[0].formatDate;
      CONSTANTS.dietDate = this.dayValue;
    }
    if (moment().format("DDMMYYYY") == this.dayValue) {
      this.isToday = true;
    } else {
      this.isToday = false;
    }
    this.profile = CONSTANTS.profile;
    
    this.storage.get("localData").then((val) => {
      let data = this.utilities.parseJSON(val);
      if (data.otherMaster.diseases.length > 0) {
        let disaeases = data.otherMaster.diseases;
        let filters = disaeases.filter(o =>
          (o.code == 'L' && o.isSelected == true) ||
          (o.code == 'T' && o.isSelected == true) ||
          (o.code == 'K' && o.isSelected == true) ||
          (o.code == 'M' && o.isSelected == true)
        )
        if (filters.length > 0) {
          this.healthProblem = true;
          CONSTANTS.isDetox = false;
          this.isDetox = false;
          this.detoxToggle = false;
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
          this.platform.ready().then(() => {
          //  this.statusBar.backgroundColorByHexString(this.selectedThemeColor);
          })
        } else {
          this.healthProblem = false;
        }
       // this.setToggleButtons();
      }

      // CONSTANTS.country = data.otherMaster.country;
    
    });
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



  initAllFuncLoad() {
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

  // highProteinSlideChanged(ev) {
  //   this.highProteinFoodItemsSlides.getActiveIndex().then((index: number) => {
  //     if (!this.isPlanActiveForDiet && index >= 1) {
  //       this.highProteinFoodItemsSlides.lockSwipeToNext(true);
  //     } else {
  //       this.highProteinFoodItemsSlides.lockSwipeToNext(false);
  //       if (index == this.highProteinFoodItems.length - 1) {
  //         this.highProteinData();
  //       }
  //     }
  //   })
  // }

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


   healthData = [];
   healthProblemCounter = 0;

  addFoodItem(type, foodItem, parentIndex) {
    //this.utilities.presentLoading();
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
    debugger
    this.appServices.postOptionFoodList(reqBody).then(
      success => {
        // this.utilities.hideLoader();
        // this.router.navigate(["consume"]);
        console.log("detail", success);
        if (sameCategoryExist) {
       //   this.utilities.showSuccessToast("In " + slot.slotName + " item replaced another of same category");
        } else {
       //   this.utilities.showSuccessToast("In " + slot.slotName + ", item is added");
        }
     //   this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate);
        this.ionContent.scrollToTop();
        // this.slides.slideTo(slotIndex, 200);
        this.loadAgain = true;
      },
      err => {
        this.utilities.hideLoader();
        console.log("details error", err);
      }
    );
  }

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


  allNewsPosts;
  bindNewsContent:String="";
  bindNewsTitle:String="";
  imageNewsUrl;

  
  longDescription(html: string) {
    return this.convertString(html.replace(/\[(.*?)\]/ig, ""));
  }
  
  convertString(input) {
    return input.split('<a').join('<a target="_blank"');
  }


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
      //  this.recipeLoadData();
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
       //   this.fetchPlan(data);
        } else {
          // alert("Checkiing plan expiry date");
          CONSTANTS.isPlanActiveParent = this.isPlanActive = this.isPlanActiveForDiet = false;
       //   this.checkAnotherLockFlow();
          this.planStatusChecked = true;
        }
        if(!localStorage.getItem("showedOffer") && !CONSTANTS.isPlanActiveParent){
          localStorage.setItem("showedOffer", "true");
          let self = this;
          setTimeout(() => {
        //    self.getCouponDataConsumer();
          }, 60000 * 3);
        }
        // Survey Page check
        if(!CONSTANTS.isPlanActiveParent && !localStorage.getItem('surveyOpend')) {
          setTimeout(()=>{
            if(!localStorage.getItem('surveyOpend')){
        //      this.checkSurveyStatus();
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

  radiousValue = true;
  mainCircleRadiousAnimate(){
    let self = this;
    setInterval(()=>{
      self.radiousValue =  !self.radiousValue; // == 55 ? 52 : 55
    },2000)
  }



  upgradePlan() {
    this.paymentSubscribeModel('update diet plan');
    // this.router.navigate(["upgrade-plan"]);
  }

  upgradeLockPlan() {
    this.paymentSubscribeModel('unlock your diet plan');
    // this.router.navigate(["upgrade-plan"]);
  }

  Continue() {
    this.isExpired = false;

    console.log("close plan");
  }

  resultData:any = [
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

  ngOnDestroy() {
    console.log("destroy");
    // clearInterval(this.intervalPercent);
    // clearInterval(this.myInterval);
    // clearInterval(this.interval);
    // clearInterval(this.deficitInterval);
  }

  isManjhari:any=false;
videoManjhari:any="https://www.youtube.com/embed/vXBq6YkkSN0";
  async ngOnInit() {
     
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


  dateSlideChanged(ev) {
    console.log("Evee ", ev);

  }

  slideChanged(event) {
   
  }

 

  eatenStatusUpdate(item, slot, slotIndex, foodIndex){
    debugger;
    if(this.currentDateIndex == 0){
      let foodCodeList = [];
      let eatenStatus = false;
   //   this.utilities.logEvent("Counter_add_home", {});
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
    //  this.utilities.logEvent("update_food_details", reqBody);
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
           //     this.tip();
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

  removeFoodItem(item, slot) {
  
    this.removeItem.emit({item:item,slot:slot});
  
  }

  removeDietSlot(i) {
    //this.utilities.presentLoading();
    console.log("Clicked index ", i);
  //  this.utilities.logEvent("DietPlan_07aDeleteFromMainPage", {})
    let foodCodeList = [];

    let reqBody = {
      foodCodeList,
      slot: i,
      detox: CONSTANTS.isDetox,
      date: CONSTANTS.dietDate,
      country: CONSTANTS.country
    };
    console.log("reqBody", reqBody);
  //  this.utilities.logEvent("update_food_details", reqBody);
    this.appServices.postOptionFoodList(reqBody).then(
      success => {
        // this.utilities.hideLoader();
        // this.router.navigate(["consume"]);
        console.log("detail", success);
  //      this.fetchDiet(CONSTANTS.isDetox, CONSTANTS.dietDate);
      },
      err => {
        this.utilities.hideLoader();
        console.log("details error", err);
      }
    );
  }


  refreshFoodItem(dataItem, index) {
    this.loadHomeData();
    
    this.refreshDiet.emit({dataItem:dataItem,index:index});
  }

  refresh() {
    //this.utilities.presentLoading();
    //this.testGoogleFit();
  //  this.startActivityTracking();
  }

  selectOption(ind) {
    if (this.utilities.isPlanExpired() && ind!=this.slotIndex) {
      this.paymentSubscribeModel('update diet plan');
      // this.upgradePlan();
      return true;
    }
    else {
      // //this.utilities.presentLoading();
      if (ind != this.slotIndex) {
        if (!this.isPlanActiveForDiet) {
          this.paymentSubscribeModel('update diet plan');
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
              portion,
              isV: true
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
            portion,
            isV:true
          }
        });
      }
    }
  }

  gotoEditProfile() {
  //  this.dietChoices = false;
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

  async showLoader() {
    //this.utilities.presentLoading();
    console.log("Loading dismissed!");
  }

  async hideLoader() {
    this.loadingController
      .getTop()
      .then(res => (res ? this.loadingController.dismiss() : null));
  }

  // changeTime() {
  //   this.showLoader();
  //   let searchDates = [];
  //   let newtodate = "";
  // }
  dataSlot = "";
  gotoFoodDetail(foodCode, ind) {

    if(!this.isPlanActiveForDiet && ind != this.slotIndex){
      return;
    }

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

    if (!this.isPlanActiveForDiet && ind !=this.slotIndex) {
      this.paymentSubscribeModel('food detail');
      // this.upgradePlan();
      return true;
    }

    if (this.utilities.isPlanExpired() && this.slotIndex!=ind) {
      // this.upgradePlan();
      this.paymentSubscribeModel('food detail');
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
          portion,
          mainCode: foodCode,
          isV:"true"
        }
      });
    }

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
    if (num != undefined && num > 0 && num != NaN) {
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
  openFB(){
    let url = "https://www.facebook.com/smartdietplanner"; 
    this.iab.create(url , '_system');
  }
  openInsta(){
    let url = "https://www.instagram.com/smartdietplanner/"; 
    this.iab.create(url , '_system');
    
  }
  openDilar(){
    let url = "tel:+919999118595"; // add the links to body
    this.iab.create(url , '_system');
  }
  links : any[]= [""];
  sendEmail(){
    let url = "mailto:admin@smartdietplanner.com?subject=Support profile id:('"+this.userEmail+"')&body="+this.links.join(" ,"); // add the links to body
       this.iab.create(url , '_system');
  }
  
  openWhatsApp(){
    if(this.isIosDevice){
      let url = "https://api.whatsapp.com/send?phone=+919999118595&&text=My profile id is '"+ this.userEmail +"'. I need support.";
      this.iab.create(url , '_system');
    }else{
      let url = "whatsapp://send?phone=+919999118595&text=My profile id is '"+ this.userEmail +"'. I need support.";
      this.iab.create(url , '_system');
    }
  }


}
