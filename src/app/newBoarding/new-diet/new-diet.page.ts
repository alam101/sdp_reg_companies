import { AfterViewInit, ChangeDetectorRef, Component, ErrorHandler, Injectable, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IonSlides, ModalController, NavController, Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import moment from "moment";
import { AppService } from "../app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { Utilities } from "../utilities.service";
import { UTILITIES as UTILS } from "src/app/core/utility/utilities";
import { ActivatedRoute, Router } from "@angular/router";
import jsPDF from "jspdf";
import { UserOptions } from "jspdf-autotable";
import { UTILITIES } from "../utils/utilities";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SearchPage } from '../../search/search.page';
import { BroadcastService } from "src/app/broadcast.service";
import { Subscription } from 'rxjs';
import { Location } from "@angular/common";

// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: "app-new-diet",
  templateUrl: "./new-diet.page.html",
  styleUrls: ["./new-diet.page.scss"],
})
export class NewDietPage implements OnInit,AfterViewInit,OnDestroy {
  slideOpts = {
    slidesPerView: 1.25, // 1 full + 0.25 of next
    spaceBetween: 10,
    centeredSlides: true
  };
  clientId="";
  moment: any = moment;
  displayFooter=false;
  diets: any = [];
  selecteddate: any = new Date();
  newSelectedDate: any = new Date();
  activeSlotIndex = 0;
  today = new Date();
  tomorrow = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDay()+1).toISOString();
  allData: {
    Carbs: Number;
    Fat: Number;
    Fiber: Number;
    Protien: Number;
    totalCal: Number;
    targetCal: Object;
    calConsumed: Number;
  };
  currentDateIndex: any = 0;

  weekArray = [];
  isDetox = false;
  companyLogoBase64="";
  subscription: Subscription;
  planName: any;
  company_id=null;
  randomNumber = Number(Date.now()) * Math.random();
  constructor(
    private appServices: AppService,
    private cdr: ChangeDetectorRef,
    private navCtrl: NavController,
    private utils:Utilities,
    private router:Router,
    private utilities: UTILITIES,
    private modalController: ModalController,
    private iab: InAppBrowser,
    private storage: Storage,
    private utilss: UTILS,
    private broadcastService: BroadcastService,
    private location:Location,
    private routerActive: ActivatedRoute
  ) {
    this.routerActive.queryParams.subscribe(res=>{
     if(res?.companyId===undefined){
        this.company_id = null;
      }
      else{
        this.company_id = res.companyId;
      }
    });
    localStorage.setItem("currentDate",new Date().getTime()+"");
    this.subscription =  this.broadcastService.getMessage().subscribe(res=>{
      console.log("res");
      this.ionViewWillEnter();
    })
    this.allData = {
      Carbs: 0,
      Fat: 0,
      Fiber: 0,
      Protien: 0,
      totalCal: 0,
      targetCal: {},
      calConsumed: 0,
    };
    this.clientId = localStorage.getItem("clientId");
    this.displayFooter = true;
   
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
  weightTrackerData:any;
  ionViewWillEnter() {
    history.forward();
    if (CONSTANTS.dietDate && this.router.url.includes("refresh")) {
      this.selecteddate = moment(CONSTANTS.dietDate, "DDMMYYYY").format();
    } else {
      this.selecteddate = new Date();
    }
    CONSTANTS.dietDate = moment(this.selecteddate).format("DDMMYYYY");
    this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
    this.getProfile();
    if(localStorage.getItem("weightTracker")!==""){
      console.log("this.weightTrackerData",this.weightTrackerData);
      this.weightTrackerData = JSON.parse(localStorage.getItem("weightTracker"));
     
      
    }
  }
  async openPopupWeight(event){
    this.router.navigate(['/weight-guage']);
   }
 async gotoBloodPressure(event){
  this.router.navigate(['/blood-pressure-guage']);
 } 
 async gotoBloodGlucose(event){
  this.router.navigate(['/blood-glucose-guage']);
 }
 async gotoCholesterol(){
  this.router.navigate(['/cholesterol-guage']);
 }
   
  isdisplayFooter(event){
    this.displayFooter=event;
  }
  ngAfterViewInit() {
    if (CONSTANTS.dietDate && this.router.url.includes("refresh")) {
      this.selecteddate = moment(CONSTANTS.dietDate, "DDMMYYYY").format();
    } else {
      this.selecteddate = new Date();
    }
    CONSTANTS.dietDate = moment(this.selecteddate).format("DDMMYYYY");
    this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
  
    this.companyLogoBase64 = this.compConfig?.companyLogoBase64;
    this.defaultPlanCheck = this.compConfig.defaultPlanCheck;
   
  }
  defaultPlanCheck=false;
  logSlot(d,slot){
    this.eatenStatusUpdate(d,slot);
  }
  goToInsites(){
    this.router.navigate(["/calory-chart"]);
  }
  async eatenStatusUpdate(item,slot) {
   
    console.log("fffdd:-----",CONSTANTS.dietDate,moment(new Date()).format("DDMMYYYY"));
    
     if(CONSTANTS.dietDate !== moment(new Date()).format("DDMMYYYY")){
     setTimeout(()=>{ this.utilities.showErrorToast("Can not Log for future dates!");
    },0);
    }
    else{ 
      let foodCodeList = [];
        let dataTotal = [];
      this.utilities.logEvent("Counter_add_home", {});
      for (let index = 0; index < item.data.length; index++) {
        dataTotal.push(
          {
            code: item.data[index].itemCode,
            portion: Number(item.data[index].portion),
            eaten: 2,
            foodSource: "internal"
          }
        )
      }
      const datas = {
        date: CONSTANTS.dietDate,
        slot: Number(slot),
        foodCodeList: dataTotal,
        isUpdateDiet: true,
      };
      this.utilities.logEvent("onboarding_update_food_details", datas);
      // this.appServices.updateEatenFoodItems(data).then(
      this.appServices.postOptionFoodList(datas).then(
        (success: any) => {
       //   this.getDietdata.emit(CONSTANTS.dietDate);
       //   this.utilities.showSuccessToast(status);
          // this.todaysCalCount();
      //    this.getDietdata(CONSTANTS.dietDate);
          console.log("");
        },
        (err) => {
          console.log("details error", err);
        }
      );
   
    }
  }
  tempdesease:any=[];

  bindDesease(){
    this.tempdesease=[];
    for (let index = 0; index < this.profileData.lifeStyle.diseases.length; index++) {
      for (let j = 0; j < this.compConfig.deseases.length; j++) {
        if(this.profileData.lifeStyle.diseases[index]=== this.compConfig.deseases[j].desease){
          console.log("this.profileData.lifeStyle.diseases[index]:- ",this.profileData.lifeStyle.diseases[index], this.compConfig.deseases[j].desease);
          
          this.tempdesease.push(this.compConfig.deseases[j].description);
        }
        
      }
     
    }

    if(this.tempdesease?.length>0){
    this.tempdesease = this.tempdesease.join(',').split(',');
    }
    console.log("this.tempdesease", this.tempdesease.join(','));
    return this.tempdesease?.length===0?null:this.tempdesease;
   
  }
  compConfig:any;
  plandata: any;
  futureDateCSS="";
  fday=0;
  isPlanExpired=false;
  getOnePlan(){
    this.appServices.getOnePlan().subscribe((res) => {
      this.plandata = res;
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
    this.tomorrow = this.weeks[1].date;

    const creationDate = this.plandata?.profile?.createdDate;
   
    console.log("new Date(creationDate)",new Date(creationDate),new Date(creationDate).getTime());
    let dnew= new Date(creationDate);
    this.fday = new Date(new Date().getTime() - dnew.getTime()).getDate(); 
    console.log("this.fday:-",creationDate,this.fday);
    let tDate = new Date(); 
    let nxtDate = new Date(dnew.setDate(dnew.getDate()));
    // this.weekArray = [
    //     new Date(dnew),
    //     new Date(dnew.setDate(dnew.getDate()+1)),
    //     new Date(dnew.setDate(dnew.getDate() + 1)),
    //     new Date(dnew.setDate(dnew.getDate() + 1)),
    //     new Date(dnew.setDate(dnew.getDate() + 1)),
    //     new Date(dnew.setDate(dnew.getDate() + 1)),
    //     new Date(dnew.setDate(dnew.getDate() + 1)),
    //   ];
    
      // if(dnew.getTime() < new Date().getTime() && this.clientId==='fitelo'){
      //   this.newSelectedDate = dnew;
      //   this.selecteddate = dnew;
      // }
      // else{
        this.weekArray = [
          new Date(),
          new Date(tDate.setDate(tDate.getDate()+1)),
          new Date(tDate.setDate(tDate.getDate() + 1)),
          new Date(tDate.setDate(tDate.getDate() + 1)),
          new Date(tDate.setDate(tDate.getDate() + 1)),
          new Date(tDate.setDate(tDate.getDate() + 1)),
          new Date(tDate.setDate(tDate.getDate() + 1)),
        ];
        this.newSelectedDate = new Date();
        this.futureDateCSS="dark-css";
     // }
    });
  }
  ngOnInit() {
    this.utilities.logEvent("onboarding_dietplanPage", {});
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    console.log("this.compConfig", this.compConfig);
    
    this.getProfile();
    if(localStorage.getItem("weightTracker")!==""){
      console.log("this.weightTrackerData",localStorage.getItem("weightTracker"));
      this.weightTrackerData = JSON.parse(localStorage.getItem("weightTracker"));
    }
     this. getOnePlan();
   
  }
  profileData:any;
  profileName;
  firstConsult=null;
  instructions:any = [];
  openDial(phonenumber){
    window.open("tel:"+phonenumber+"","_system");
  }
  openlink(url){
    window.open(url,"_system");
  }
  gotoApp(){
    this.router.navigate(["inapp-test"]);
  }
  getProfile(){
    localStorage.setItem("weightTracker","");
    this.appServices.getProfile().then(
      
      profileData => {
        ////
       
        console.log("localStorage.setItem",localStorage.getItem("weightTracker"));
        
        localStorage.setItem("activities",JSON.stringify(profileData["lifeStyle"]["activities"]));
        console.log("profileData",profileData);
        this.profileData = profileData;
        localStorage.setItem("weightTracker",JSON.stringify(this.profileData));
          let userData = {
          email: profileData["profile"]["email"],
          firstName: profileData["profile"]["given_name"],
          id: profileData["profile"]["email"],
          lastName: profileData["profile"]["family_name"],
          name: profileData["profile"]["name"],
          photoUrl: null,
          provider: "mobile"
        };
        this.getdietitianDetail(this.profileData.profile.email);
        if(this.compConfig.isDietitian){
        this.firstConsult = this.profileData?.lifeStyle?.firstConsult === undefined?null:this.profileData?.lifeStyle?.firstConsult;
        }
       // this.getCommunities(this.profileData?.lifeStyle?.communities);
        // this.instructions = this.profileData?.lifeStyle?.instructions;
   
        this.profileName=userData.name;
   
        console.log("getprofile",JSON.stringify(userData));
        console.log("alam:-", profileData["lifeStyle"]);
        this. bindDesease();
        this.getInstructionData(this.profileData.profile.email);
      });

   }
  
  gotoProfile(){
    this.router.navigate(['new-profile'],{queryParams:{params: this.deititianName,role:this.deititianRole}});
 }
 

  roundUpvalue(val) {
    return Math.round(val);
  }
  noNextDate = false;
  noPrevDate = true;
  weeks = [];
  nextDateNew() {
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index + 1;
      if (index < 6) {
        this.noNextDate = false;
        this.dateSlides.slideTo(index + 1, 200);
        localStorage.setItem("firstday",JSON.stringify(this.weeks[index+1].formatDate));
        this.selecteddate = this.weeks[index + 1].formatDate;
        
        this.newSelectedDate = this.weeks[index + 1].date;
       console.log("this.newSelectedDate",this.newSelectedDate);
       
        CONSTANTS.dietDate = this.weeks[index + 1].formatDate;
        this.getDietdata(this.weeks[index + 1].formatDate);
      } else {
        this.noNextDate = true;
      }
    });
  }

  selectDate(event) {
    console.log("test",event.target?.value);
    let index = event.target?.value;
    localStorage.setItem("firstday",JSON.stringify(this.weeks[index].formatDate));
    this.selecteddate = this.weeks[index].formatDate;
    this.newSelectedDate = this.weeks[index].date;
    CONSTANTS.dietDate = this.weeks[index].formatDate;
     this.getDietdata(this.weeks[index].formatDate);
  }
  @ViewChild("slides1", { static: false }) slides: IonSlides;
  @ViewChild("slides2", { static: false }) dateSlides: IonSlides;
  prevDateNew() {
    
    this.dateSlides.getActiveIndex().then((index: number) => {
      this.currentDateIndex = index - 1;
      if (index > 0) {
        this.noPrevDate = false;
        this.dateSlides.slideTo(index - 1, 200);
        localStorage.setItem("firstday",JSON.stringify(this.weeks[index-1].formatDate));
        this.selecteddate = this.weeks[index - 1].formatDate;
        this.newSelectedDate = this.weeks[index - 1].date;
        CONSTANTS.dietDate = this.weeks[index - 1].formatDate;
         this.getDietdata(this.weeks[index - 1].formatDate);
      } else {
        this.noPrevDate = true;
      }
    })
  }
  getFoodOfTheDay(day) {
    return day.map(d => d.Food + " (" + d.portion + " " + d.portion_unit +")").join(",\n");
    // return day[index] ? day[index].Food : ""
  }
  downloadDietPlan() {
   
    const doc = new jsPDF() as jsPDFWithPlugin;
    let jsonData = [];

    let todayDate = moment(CONSTANTS.dietDate, 'DDMM').format('DDMMY')
    let tomorrowDate = moment(CONSTANTS.dietDate, 'DDMM').clone().add(1, 'days').format('DDMMY');
    let dayAftertomorrowDate = moment(CONSTANTS.dietDate, 'DDMM').clone().add(2, 'days').format('DDMMY');

    let getDataTodayPromise = this.appServices.getDietPlans(CONSTANTS.isDetox, todayDate, CONSTANTS.country, CONSTANTS.defaultCalories);
    let getDataTomorrowPromise = this.appServices.getDietPlans(CONSTANTS.isDetox, tomorrowDate, CONSTANTS.country, CONSTANTS.defaultCalories);
    let getDataDayAfterTomorrowPromise = this.appServices.getDietPlans(CONSTANTS.isDetox, dayAftertomorrowDate, CONSTANTS.country, CONSTANTS.defaultCalories);

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
        foot: [[{ content: "", colSpan: 4, }]],
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
            let base64Img = `data:image/png;base64,${this.companyLogoBase64}`;
      
            if(this.companyLogoBase64!==undefined && this.companyLogoBase64!==''){
            doc.addImage(base64Img, 'PNG', data.cell.x + 2, data.cell.y + 7, 25, 6.5);
            }
          }
        }
      });
      
        doc.save('Diet Plan.pdf');
      
    });
  }
  deititianName="";
  whatsappNum="";
  deititianRole="";
  calendlyId="";
  whatappVisible=false;
  gender="";
  image="";
  calendlyVisible=false;
  assinedDietitianExpDate=null;
  aibasedDietplan=false;
  getdietitianDetail(email){
  
   if (this.compConfig.dietitianAction) {
    this.appServices.getEditProfilePermission(email).then((res:any)=>{
      if(res.dietitianName!==undefined){
      this.deititianName = res.dietitianName;
      this.deititianRole = res.role;
      this.calendlyId = res.calendlyId;
      this.whatsappNum = res.whatsappNum;
      this.whatappVisible = res.whatsappVisible;  
      this.gender = res.gender;
      this.image = res.image;
      this.assinedDietitianExpDate = res?.expiryDate ===undefined?null:res.expiryDate;
      this.aibasedDietplan = res.aiBasedPlanContinues;
      this.calendlyVisible = res.calendlyVisible;
      }
    },err=>{

    })
   }
   
  }
  isIosDevice = this.utilities.isDeviceiOS();
  gotoWhatsApp(){

   if(this.isIosDevice){
     // let url = "https://api.whatsapp.com/send?phone=+"+this.whatsappNum+"&&text=I am "+this.profileData.profile.name+", Profile ID:'"+this.profileData.profile.email+"'. I need support.";
     let urll=`https://api.whatsapp.com/send?phone=${this.whatsappNum}?text=I am ${this.profileData.profile.name}, Profile ID: ${this.profileData.profile.email}, I need support`;
     this.iab.create(urll , '_system');
   }else{
    //   let 
    //   let url = "whatsapp://send?phone=+"+this.whatsappNum+"&text=I am "+this.profileData.profile.name+", Profile ID: '"+this.profileData.profile.email+"'. I need support.";
    //   this.iab.create(url , '_system');
    let urll=`https://wa.me/${this.whatsappNum}?text=I am ${this.profileData.profile.name}, Profile ID: ${this.profileData.profile.email}, I need support`;
    this.iab.create(urll , '_system');
     }
  }
  getCaloriesOfDay(day, index) {
    return day[index] ? day[index].Calories : 0;
  }
  isdoenloadclicked=false;
  async gotoDownloadPopup(){ 
     
     if(this.clientId==='alyve'){
     this.isdoenloadclicked=true;
     localStorage.setItem("company_id","alyve.health");
     this.downloadPdfFromApi();
     }
     if(this.clientId==='wellbeing'){
      this.isdoenloadclicked=true;
      localStorage.setItem("company_id","wellbeing");
      this.downloadPdfFromApi();
     }
     if(this.clientId==='redcliffe'){
      this.isdoenloadclicked=true;
      localStorage.setItem("company_id","REDCLIFFE");
      this.downloadPdfFromApi();
     }
     if(this.clientId==='drstore'){
      this.isdoenloadclicked=true;
      localStorage.setItem("company_id","drstore");
      this.downloadPdfFromApi();
     }
     else {
      this.isdoenloadclicked=true;
      
      this.downloadPdfFromApi();
     }
    
  }
  percent=0.0;
  percentwithPer='0%';
  iscloseInterval;
  startInterval(){
    clearInterval(this.iscloseInterval);
   this.iscloseInterval =  setInterval(() => {
    if(this.percent%2===0){
      this.percent = Number(Number(this.percent)+3);
    }
    else{
      this.percent = Number(Number(this.percent)+1);
    }
      this.percentwithPer = this.percent+'%';
      if(this.percent >90){
        clearInterval(this.iscloseInterval);
      }
    }, 1000);
  }
  isInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      // If cross-origin frame access is denied
      return true;
    }
  }
  downloadPdfFromApi(){ 
    this.percent=0.0;
  this.percentwithPer='0%';
    this.startInterval();
  //  this.utilities.showLdr();
    this.appServices.downloadPdfFromApi(localStorage.getItem("tkn"),7,
    moment(this.selecteddate).format("DDMMYYYY").trim(),
    localStorage.getItem("company_id")
    ,localStorage.getItem('email')).subscribe((blob) => {
      this.percentwithPer='100%';
      const url = window.URL.createObjectURL(blob);

      if (this.isInIframe()){
      this.iab.create(url , '_system');
      }
    
      const a = document.createElement('a');
      a.href = url;
      a.download = localStorage.getItem("clientId")+'_Dietplan.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        setTimeout(()=>{
          this.isdoenloadclicked=false;
         },2000);
         clearInterval(this.iscloseInterval);
        console.log('Page loaded:', event);
  
   
      // //window.open(url, '_blank');
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = localStorage.getItem("clientId")+'_Dietplan.pdf';
      // document.body.appendChild(a);
      // a.click();
      // document.body.removeChild(a);
    // window.URL.revokeObjectURL(url);
    
   
   this.utilities.hideLdr();
    }, (error) => {
      this.utilities.hideLdr();
      console.error('Error downloading PDF:', error);
    });

  }
  async gotoSearch() {
    const modal = await this.modalController.create({
      component: SearchPage,
      backdropDismiss: true,
      componentProps: {
       },
    });
    this.utilss.storeModal(modal);
    await modal.present();
    const modaldata = await modal.onDidDismiss();

    const d = modaldata?.data;
    // if (d) {
      // this.getDietdata.emit(CONSTANTS.dietDate);
      this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
    // }
  }

  gotoApply(url, type) {
    let email: any = "";
    let phone: any = "";
    if (this.appServices.emailOnly(this.profileData?.profile?.email)) {
      email = this.profileData?.profile?.email;
    } else {
      phone = this.profileData?.profile?.email;
    }
    const u =
      url +
      `?name=${this.profileData?.profile?.name || ''}&email=${email || ''}&a1=${phone || ''}&a2=”I need support for my ${type} plan in Paytm App. My%20profile%20ID%20is%20${this.profileData?.profile?.email}”`;
    this.iab.create(u, "_sysyem");
  }

  changeDate(date) {
    this.selecteddate = date;
    CONSTANTS.dietDate = moment(this.selecteddate).format("DDMMYYYY");
    const dt = new Date(this.selecteddate).getTime();
    localStorage.setItem("currentDate",dt+"");
    this.newSelectedDate = date;
    this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
   
  }

  openDilar(){
    let url = "tel:+919999118595"; // add the links to body
    this.iab.create(url , '_system');
  }
  links : any[]= [""];
  sendEmail(){
    let url = "mailto:admin@smartdietplanner.com?subject=Support profile id:('"+this.profileData.profile.email+"')&body="+this.links.join(" ,"); // add the links to body
       this.iab.create(url , '_system');
  }

  copyDiet:any;
  getDietdata(date) {
    this.allData = {
      Carbs: 0,
      Fat: 0,
      Fiber: 0,
      Protien: 0,
      totalCal: 0,
      targetCal: {recomended:0},
      calConsumed: 0,
    };
   this.appServices
      .getDietPlans(
        CONSTANTS.isDetox,
        date,
        CONSTANTS.country,
        CONSTANTS.defaultCalories
      )
      .then((res) => {
        console.log("alam101",this.diets);
        this.storage.set("dietData", res);
        localStorage.setItem("dtit",JSON.stringify(res));
        this.copyDiet = {...JSON.parse(localStorage.getItem("dtit"))};
        this.diets = {...this.copyDiet};
        if(this.diets.diets?.length>0){
          this.diets.diets.forEach((ele) => {
            console.log("sssssss:-",ele?.data);          
            if(ele?.data?.length>0){
            ele?.data.forEach((element) => {
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
          
            });
           }
          
          });
        }
        else{
          this.utilities.presentAlert("Slots are not available. Please refresh!");
        }
     
       
        
       this.getOnePlanForDefaultDate();
       this.getInstructionData(this.profileData.profile.email);
     
       this.allData.targetCal = this.diets;
     
      });
  }

  getOnePlanForDefaultDate(){
    this.appServices.getOnePlan().subscribe((res) => {
      this.plandata = res;
      if(this.defaultPlanCheck===true){
      this.isPlanExpired = moment().toDate() <= moment(this.plandata.defaultExpDate).toDate()?false:true;
      }
      console.log(this.isPlanExpired,moment().toDate(),moment(this.plandata.defaultExpDate).toDate());
    },err=>{});
  }
  getCalData(e, i) {
    console.log("getCalData called e", e);
    console.log(this.diets);
    if (e.eaten < 0) {
      this.allData.totalCal = Math.ceil(
        Number(this.allData.totalCal + e.Calories)
      );
      this.allData.Carbs = Math.ceil(Number(this.allData.Carbs + e.Carbs));
      this.allData.Fat = Math.ceil(Number(this.allData.Fat + e.Fat));
      this.allData.Fiber = Math.ceil(Number(this.allData.Fiber + e.Fiber));
      this.allData.Protien = Math.ceil(
        Number(this.allData.Protien + e.Protien)
      );
    } else {
      this.allData.totalCal = Math.ceil(
        Number(this.allData.totalCal) - e.Calories
      );
      this.allData.Carbs = Math.ceil(Number(this.allData.Carbs) - e.Carbs);
      this.allData.Fat = Math.ceil(Number(this.allData.Fat) - e.Fat);
      this.allData.Fiber = Math.ceil(Number(this.allData.Fiber) - e.Fiber);
      this.allData.Protien = Math.ceil(
        Number(this.allData.Protien) - e.Protien
      );
    }
    console.log("this.allData", this.allData);
    this.cdr.detectChanges();
  }

  goToAnalysis() {
    if (!this.isDetox) {
      this.navCtrl.navigateForward(["analysis"], {
        queryParams: {
          params: this.activeSlotIndex,
        },
      });
    }
  }
  openWindow(){
    this.router.navigate(["appinfo"]);
  }
  
  errorHandler(error: any) {
    throw new Error('Method not implemented.');
  }
  changePlan(){
    this.router.navigate(['change-plan']);
  }

  caloryChart() {
    this.router.navigate(["calory-chart"], {
      queryParams: {
        profileName: this.profileName,
        compConfig: JSON.stringify(this.compConfig),
        profileData: JSON.stringify(this.profileData)
      }
    });
  }
  
  getInstructionData(data) {
    this.appServices.getInstructionData(data).then((getInstructionDataResponse: any) => {
      this.instructions = [];
      console.log('getInstructionDataResponse: ', getInstructionDataResponse);
      let reference: any;
      if (getInstructionDataResponse && getInstructionDataResponse.length > 1) {
        reference = getInstructionDataResponse.reduce((a, b) => {
          let obj = new Date(a.createdOn) > new Date(b.createdOn) ? a : b;
          return obj
        });
        console.log('reference obj = ', reference);
      } else if (getInstructionDataResponse && getInstructionDataResponse.length == 1) {
        reference = getInstructionDataResponse[0];
      }
        this.planName = this.diets.dietPlanName.toLowerCase().includes('cheat') ? "cheat" :
        this.diets.dietPlanName.toLowerCase().includes('detox') ? "detox" : "normal";
        Object.keys(reference).forEach(ele => {
          if (ele.toLowerCase().includes(this.planName)) {
            if(reference[ele].length>10){
            this.instructions = reference[ele] ? reference[ele].split(/\n/g) : [];
            }
            return;
          }
        })
    })
      .catch(getInstructionDataError => {
        console.log('getInstructionDataError: ', getInstructionDataError);
      })
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