import { AfterViewInit, ChangeDetectorRef, Component, ErrorHandler, Injectable, OnInit, ViewChild } from "@angular/core";
import { IonSlides, ModalController, NavController, Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import moment from "moment";
import { AppService } from "../app.service";
// import { FeatureExplanationPopupComponent } from "src/app/components/feature-explanation-popup/feature-explanation-popup.component";
import { CONSTANTS } from "src/app/core/constants/constants";
import { Utilities } from "../utilities.service";
import { Router } from "@angular/router";
import jsPDF from "jspdf";
import { UserOptions } from "jspdf-autotable";
import { UTILITIES } from "../utils/utilities";
import { DownloadPopupComponent } from "src/app/components/download-popup/download-popup.component";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: "app-new-diet",
  templateUrl: "./new-diet.page.html",
  styleUrls: ["./new-diet.page.scss"],
})
export class NewDietPage implements OnInit,AfterViewInit {
  clientId="";
  moment: any = moment;
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

  constructor(
    private appServices: AppService,
    private cdr: ChangeDetectorRef,
    private navCtrl: NavController,
    private utils:Utilities,
    private router:Router,
    private utilities: UTILITIES,
    private modalController: ModalController,
    private iab: InAppBrowser
  ) {
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
  }
  ngAfterViewInit() {
    CONSTANTS.dietDate = moment(this.selecteddate).format("DDMMYYYY");
    this.getDietdata(moment(this.selecteddate).format("DDMMYYYY"));
    this.getProfile();
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
  ngOnInit() {

    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    console.log("this.compConfig", this.compConfig);
    
    this.getProfile();

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
    let nxtDate = new Date(dnew.setDate(dnew.getDate()));
    this.weekArray = [
        new Date(dnew),
        new Date(dnew.setDate(dnew.getDate()+1)),
        new Date(dnew.setDate(dnew.getDate() + 1)),
        new Date(dnew.setDate(dnew.getDate() + 1)),
        new Date(dnew.setDate(dnew.getDate() + 1)),
        new Date(dnew.setDate(dnew.getDate() + 1)),
        new Date(dnew.setDate(dnew.getDate() + 1)),
      ];
    
      if(dnew.getTime() < new Date().getTime() && this.clientId==='fitelo'){
        this.newSelectedDate = dnew;
        this.selecteddate = dnew;
      }
      else{
        this.newSelectedDate = new Date();
        this.futureDateCSS="dark-css";
      }
    });
  }
  profileData:any;
  profileName;
  getProfile(){
    this.appServices.getProfile().then(
      profileData => {
        console.log("profileData",profileData);
        this.profileData = profileData;
          let userData = {
          email: profileData["profile"]["email"],
          firstName: profileData["profile"]["given_name"],
          id: profileData["profile"]["email"],
          lastName: profileData["profile"]["family_name"],
          name: profileData["profile"]["name"],
          photoUrl: null,
          provider: "mobile"
        };
       // CONSTANTS.email = profileData["profile"]["email"];
        this.profileName=userData.name;
        console.log("getprofile",JSON.stringify(userData));
      });

   }
  gotoProfile(){
    this.router.navigate(['new-profile']);
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
    })
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
            let base64Img = 'data:image/png;base64,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';
            doc.addImage(base64Img, 'PNG', data.cell.x + 2, data.cell.y + 7, 25, 6.5)
          }
        }
      });
      
        doc.save('Diet Plan.pdf');
      
    });
  }
  getCaloriesOfDay(day, index) {
    return day[index] ? day[index].Calories : 0;
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
   // allData: any = {totalCal:0,targetCal:{recomended:0}};
    this.appServices
      .getDietPlans(
        CONSTANTS.isDetox,
        date,
        CONSTANTS.country,
        CONSTANTS.defaultCalories
      )
      .then((res) => {
        this.diets = res;
        console.log(this.diets);
        this.allData.targetCal = res;
        this.diets.diets.forEach((ele) => {
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
          });
        });

        this.cdr.detectChanges();
      });
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