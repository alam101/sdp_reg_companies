import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import moment from "moment";
import { Storage } from "@ionic/storage";
import { UTILITIES } from "src/app/core/utility/utilities";
import { CONSTANTS } from "src/app/core/constants/constants";
import { AppService } from "../app.service";
import { Location } from '@angular/common'; 

@Component({
  selector: "app-final-boarding",
  templateUrl: "./final-boarding.page.html",
  styleUrls: ["./final-boarding.page.scss"],
})
export class FinalBoardingPage implements OnInit {
  moment: any = moment;
  date: any = new Date();
  randomNumber = Number(Date.now()) * Math.random();
  next3: any = new Date().setMonth(new Date().getMonth() + 3);
  //plan: any;
  localData: any;
  poundValue = 0.453592;

  plan = { suggestedWeight: 0, dateBy: "" };
  plans: any;
  dateBy = [];
  unit: any;
  suggestedWeightRange: any;
  couponCode: any = "CU0000";
  achieveValue: any;
  selectedItem:any;
  slot:any;
  likeFood:any;
  clientId:any="";
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private location:Location
  ) {
console.log("cccccc:-",localStorage.getItem("clientId"));

    if(localStorage.getItem("clientId").toLowerCase()==="eatfit"){
      this.clientId="eatfit";
    }

  }


  ngOnInit() {
    this.clientId = localStorage.getItem("clientId");
   this.selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
   this.slot = JSON.parse(localStorage.getItem("slotChoice"));
   this.likeFood = localStorage.getItem("likeFood");
   console.log("clientId", this.clientId);
   this.clientId = localStorage.getItem('clientId');
   this.storage.get("health-journey").then((res: any) => {
   
    if (res) {
      this.plans = JSON.parse(res);
      console.log("res...", res);
    }
  });

  this.storage.get("localData").then((res: any) => {
    if (res) {
      //this.plan = JSON.parse(res);
      console.log("localData...", JSON.parse(res));
      this.localData = JSON.parse(res);
    }
  });
  this.gotoDemographic();
  this.termsandCond();
  //this.ditePlanAPIcall();
  }

  goNext() {
  //  this.appService.getOnePlan().subscribe(res=>{
  //    console.log("getoneplan()",res);
      /** enable for other company */
      let clientId=localStorage.getItem("clientId");
      if(!clientId) 
        {
        
          this.location.replaceState('/','',{});
         //  this.navCtrl.navigateForward(["new-diet"]).then(() => {});
         this.navCtrl.navigateForward(["/new-diet"],{queryParams:{params:Math.floor(this.randomNumber)}});
        }
        else  {
          this.location.replaceState(`${location.origin}/read?token=${localStorage.getItem("tkn")}&clientId=${localStorage.getItem("clientId")}&type=1`,'',{});
      
        //  this.location.replaceState('/new-diet','params='+Math.floor(this.randomNumber).toString(),{});
          this.navCtrl.navigateForward(["/new-diet"],{queryParams:{params:Math.floor(this.randomNumber)}});
      }
     }

  goBack() {
    if(localStorage.getItem("clientId").toLowerCase()==="eatfit"){
    this.storage.set("pendingPage", "/meal-pref");
    this.navCtrl.navigateRoot(["/meal-pref"]);
    }
    else{
      this.storage.set("pendingPage", "/boarding5");
                    this.navCtrl.navigateForward(["boarding5"]);
    }
  }

  gotoDemographic() {
    this.utilities.showLoading();
   
    this.storage.get("localData").then((local) => {  
      const data = this.utilities.parseJSON(local);
      console.log("local:::",data);
      let countri = this.utilities.getSelectedData(data.countries);
      let selectedCountryID = countri[0]._id;
      CONSTANTS.country = countri[0].name;
      this.appService.getDefaultDataDiet(selectedCountryID).then((res) => {
        data.Master = res["Master"];
        const reqBody = this.utilities.getDietRequest(data, selectedCountryID);
        this.appService.postDiet(reqBody).then((success) => {
          const dietData = this.utilities.parseJSON(
            this.utilities.parseString(success)
          );
          data.otherMaster.diet = {
            suggestedWeight: dietData.suggestedWeight,
            dateBy: dietData.dateBy,
          };
          //this.dateBy = dietData.dateBy;
//
          this.plan = data.otherMaster.diet;
         
          if (data.otherMaster.height[0]?.param == "in" || data.otherMaster.height[0]?.unit == "in") {
            this.suggestedWeightRange = Math.ceil(
              (parseInt(data.otherMaster.height[0].value) * 2.54) - 100
            );
          }
          else if (data.otherMaster.height[0]?.param == "cm" || data.otherMaster.height[0]?.unit == "cm") {
            this.suggestedWeightRange = Math.ceil(
              parseInt(data.otherMaster.height[0].value) - 100
            );
          }
          console.log("data.otherMaster.height[0].value", data.otherMaster.height[0].value, this.suggestedWeightRange);
          if (this.plan.dateBy != undefined) {
            console.log(this.plan.dateBy);
            this.dateBy = this.plan.dateBy.split("-");
            console.log(this.dateBy);
          }

          if (data.otherMaster.weight == "pound") this.unit = "lbs";

          console.log("this.unit", this.unit);

          console.log("Diet Response: ", dietData);
          if (typeof this.localData.otherMaster !== undefined)
            this.storage
              .set("localData", this.utilities.parseString(data))
              .then(() => {
                this.utilities.hideLoader();
                //this.navCtrl.navigateForward(["/diet"]);
              });
        });
      });

    });
  }

  termsandCond() {
  
    let reqData = { tnc: "accepted" };
    this.appService.terms(reqData).then(
      (res) => {
        //this.openTerms=false;
        this.appService
          .payment({ amount: 0, couponCode: this.couponCode, free: true })
          .then(
            (success) => {
              this.payForFree();
            },
            (err) => {
              this.utilities.hideLoader();
              console.log(err);
            }
          );
      },
      (err) => {
        console.log("error", err);
        this.utilities.hideLoader();
      }
    );
    //  });
  }


  payForFree() {
    this.appService
      .paymentConfirm({
        free: true,
      })
      .then(
        (payconfirm) => {
          this.utilities.hideLoader();
          ///this.router.navigate(["jurney"]);
          console.log("payconfirm", payconfirm);
        },
        (err) => {
          this.utilities.hideLoader();
          //  this.router.navigate(["consume"]);
          console.log("err", err);
        }
      );
  }


}
