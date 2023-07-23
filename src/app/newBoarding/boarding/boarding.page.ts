import { Location } from "@angular/common";
import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";

@Component({
  selector: "app-boarding",
  templateUrl: "./boarding.page.html",
  styleUrls: ["./boarding.page.scss"],
})
export class BoardingPage implements OnInit,AfterViewInit {
  from = "";
  sectionOpen = "";
  achieveValue = {
    fitnessValue: "",
    weightValue: "",
    deasesValue: "",
    sectionOpen: "",
    pregnancy: "",
    postPregnancy:""
  };
  fitnessValue: any = "";
  weightValue = "";
  deasesValue = "";
  pregnancy ="";
  postPregnancy ="";
  opened = false;
  data: any;
clientId="";
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private appservice: AppService,
    private storage: Storage,
    private location: Location,
    private utilities: UTILITIES,
    private modalCtrl: ModalController,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(res=>{
      this.from = res['from'];
    });
    console.log("localStorage.getItem('clientId')",localStorage.getItem('clientId'));
    
    this.clientId=localStorage.getItem('clientId');
  }

  ngOnInit() {
   
  }

  modalClose() {
      this.router.navigate(['new-profile']);
   }

  goBack() {
   if(this.from){
    this.router.navigate(['new-profile']);
   }
   else{
    this.storage.remove("pendingPage");
    this.navCtrl.navigateRoot(["/boarding1"]);
   }
    
  }

  ngAfterViewInit() {
    this.storage.get("health-journey").then((val) => {
      this.data = JSON.parse(val);
      console.log("val", this.data);
      if (this.data) {
        this.achieveValue = this.data;
      }
    });
  }

  openSection(type) {
    // this.opened = !this.opened;
    // if (this.sectionOpen === type) {
    //   this.sectionOpen = "";
    // } else {
    //   this.sectionOpen = type;
    // }
    this.achieveValue.sectionOpen = type;
    this.opened = true;

    if (type === "fitness") {
      this.achieveValue.weightValue = "";
      this.achieveValue.deasesValue = "";
      this.achieveValue.pregnancy = "";
      this.achieveValue.postPregnancy = "";
    }

    if (type === "Weight") {
      this.achieveValue.fitnessValue = "";
      this.achieveValue.deasesValue = "";
      this.achieveValue.pregnancy = "";
      this.achieveValue.postPregnancy = "";
    }

    if (type === "Disease") {
      this.achieveValue.fitnessValue = "";
      this.achieveValue.weightValue = "";
      this.achieveValue.pregnancy = "";
      this.achieveValue.postPregnancy = "";
    }
    if (type === "Pregnancy") {
      this.achieveValue.fitnessValue = "";
      this.achieveValue.weightValue = "";
      this.achieveValue.deasesValue = "";
      this.achieveValue.postPregnancy = "";
    }
    if (type === "Post-Pregnancy") {
      this.achieveValue.fitnessValue = "";
      this.achieveValue.weightValue = "";
      this.achieveValue.deasesValue = "";
      this.achieveValue.pregnancy = "";
    }
  }

  goNext() {
    if (
      this.achieveValue.fitnessValue === "" &&
      this.achieveValue.weightValue === "" &&
      this.achieveValue.pregnancy === "" &&
      this.achieveValue.postPregnancy === "" &&
      this.achieveValue.deasesValue === ""
    ) {
      this.utilities.presentToast(
        "please go to next by selecting what you want to achieve."
      );
      return;
    }
    this.storage.set("health-journey", JSON.stringify(this.achieveValue));
    console.log("DATAAAA,", this.achieveValue);
    console.log(this.utilities.camelize(this.achieveValue.weightValue));
    let reqBody: any = {};
    let reqBodyDiet: any = {};
    
    if (
      this.achieveValue.weightValue &&
      this.achieveValue.weightValue == "WeightLoss"
    ) {
      reqBody.dietPlanType = 'weightLoss';
      reqBodyDiet.dietPlanName =  this.clientId==='traya'? 'trayaHealth': 'weightLoss';
      reqBody.category = "weightLoss";
      reqBody.subCategory = this.achieveValue.weightValue.toLowerCase();
    }

    if (
      this.achieveValue.weightValue &&
      this.achieveValue.weightValue == "WeightMaintenance"
    ) {
      reqBody.dietPlanType = "maintenance";
      reqBodyDiet.dietPlanName = this.clientId==='traya'? 'trayaHealth': 'weightLoss';
      reqBody.category = "maintenance";
      reqBody.subCategory = this.achieveValue.weightValue.toLowerCase();
    }

    if (
      this.achieveValue.fitnessValue &&
      this.achieveValue.fitnessValue == "MuscleBuilding"
    ) {
      reqBody.dietPlanType = "muscleGain";
      reqBodyDiet.dietPlanName = "muscleGain_morning";
      reqBody.category = "muscleGain";
      reqBody.subCategory = this.achieveValue.fitnessValue.toLowerCase();
    }

    if (
      this.achieveValue.fitnessValue &&
      this.achieveValue.fitnessValue == "LeanBody"
    ) {
      reqBody.dietPlanType = "fatShredding";
      reqBodyDiet.dietPlanName = "fatShredding_morning";
      reqBody.category = "fatShredding";
      reqBody.subCategory = this.achieveValue.fitnessValue.toLowerCase();
    }

    if (
      this.achieveValue.pregnancy) {
      reqBody.dietPlanType = "Pregnancy";
      reqBodyDiet.dietPlanName = "Pregnancy";
      reqBody.category = "Pregnancy";
      reqBody.subCategory = this.achieveValue.pregnancy.toLowerCase();
    }
    if (
      this.achieveValue.postPregnancy) {
      reqBody.dietPlanType = "postPregnancy";
      reqBodyDiet.dietPlanName = "postPregnancy";
      reqBody.category = "post-Pregnancy";
      reqBody.subCategory = this.achieveValue.postPregnancy.toLowerCase();
    }

    if (this.achieveValue.deasesValue) {

      reqBody.dietPlanType = 'weightLoss';
      reqBodyDiet.dietPlanName =  this.clientId==='traya'? 'trayaHealth': this.achieveValue.deasesValue.toLowerCase();
      reqBody.category = "diseseManagement";
      reqBody.subCategory = this.achieveValue.deasesValue.toLowerCase();
    }

    console.log(reqBody);
    this.appservice.updateProfile(reqBody).then((success) => {
      this.appservice.dietPlan(reqBodyDiet).then((res) => {
        if (this.from) {
          return this.modalClose();
        }
        this.storage.set("pendingPage", "/boarding2");

        this.router.navigate(["/boarding2"]);
      });
    });
  }
}
