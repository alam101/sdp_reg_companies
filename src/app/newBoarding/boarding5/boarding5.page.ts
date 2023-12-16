import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-boarding5",
  templateUrl: "./boarding5.page.html",
  styleUrls: ["./boarding5.page.scss"],
})
export class Boarding5Page implements OnInit {
  @Input() from = "";
  dietPreferences = "";
  country: any = {};
  openCountryDrop = false;
  regionalPreferences = [];
  localData: any;

  countryArray = [];

  
  constructor(
    private navCtrl: NavController,
    private location: Location,
    private storage: Storage,
    private utilities: UTILITIES,
    private appService: AppService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {
      this.activatedRoute.queryParams.subscribe(res=>{
        this.from = res['from'];
      })
    }
   
  ngOnInit() {
    this.storage.get("localData").then((res) => {
      console.log(JSON.parse(res));
      this.localData = JSON.parse(res);
      this.countryArray = this.localData.countries;
      this.country = this.countryArray[0];
      this.localData?.otherMaster.foodPref.forEach((ele) => {
        if (ele.isSelected) {
          this.dietPreferences = ele.value;
        }
      });
      this.localData?.otherMaster?.community.forEach((ele) => {
        if (ele.isSelected) {
          this.regionalPref = ele.code;
        }
      });
      this.localData?.countries.forEach((ele) => {
        if (ele.isSelected) {
          this.country = ele;
        }
      });
    });
  }

  modalClose() {
    this.router.navigate(['new-profile']);
  }

  goBack() {
    if(this.from){
     this.router.navigate(['new-profile']);
    }
    else{

    this.storage.set("pendingPage", "/boarding4");
    this.navCtrl.navigateRoot(["/boarding4"]);
    }
  }

  getImage(type) {
    switch (type) {
      case "V":
        return "broccoli@3x.png";
      case "NV":
        return "meat@3x.png";
      case "E":
        return "brocolly-egg.png";
      case "Ve":
        return "leaf@3x.png";
    }
  }

  selectFoodPre(e) {
    this.localData?.otherMaster.foodPref.forEach((ele) => {
      if (ele.value === e.detail.value) {
        ele.isSelected = true;
      } else {
        ele.isSelected = false;
      }
    });
    this.storage.set("localData", this.utilities.parseString(this.localData));
  }
  regionalPref="";
  selectReginal(e, reginal) {
    console.log("regionalPref", this.regionalPref);
    
    reginal.isSelected = e.detail.checked;
    console.log(this.localData);
    if (typeof this.localData?.otherMaster !== undefined)
      this.storage.set("localData", this.utilities.parseString(this.localData));
   
  }

  getFlag(type) {
    console.log("ttttt:-",type);
    
    switch (type) {
      case "IND":
        return "india-flag.png";
      case "USA":
        return "USA-flag.png";
      case "CAN":
        return "canada-flag.png";
      case "AUS":
        return "Australia-flag.png";
      case "EGY":
        return "Egypt-flag.png";
      case "UAE":
        return "uae.jpeg";
    }
  }
 
  goNext() {
    if (!this.dietPreferences) {
      this.utilities.presentToast(
        "Please select your food and diet preferences."
      );
      return;
    }

    if (this.country._id === "IND") {
      this.localData?.otherMaster?.community.filter(item=>{
        if(item.code==this.regionalPref){
          item.isSelected=true;
        }
        else{
          item.isSelected=false;
        }
      });

      this.storage.set("localData", this.utilities.parseString(this.localData));
    
      const isSelected = this.localData?.otherMaster?.community.find(
        (f) => f.isSelected==true
      );
      if (!isSelected) {
        this.utilities.presentToast(
          "Please select your regional preferences."
        );
        return;
      }
    }
   
    this.storage.get("localData").then((local) => {
      const data = this.utilities.parseJSON(local);

      this.storage.get("health-journey").then((res) => {
        console.log("+res+", JSON.parse(res));
        let healthJourney = JSON.parse(res);
        this.storage
          .set("localData", this.utilities.parseString(data))
          .then(() => {
            const reqBodyLifeStyle = this.utilities.getLifeStyleRequest(
              data.otherMaster
            );
          //   if(localStorage.getItem("clientId")==="traya"){
          //     reqBodyLifeStyle.dietPlanName = "trayaHealth";
          //   }
          //   else{
          //   if (
          //     healthJourney?.weightValue &&
          //     healthJourney?.weightValue == "WeightLoss"
          //   ) {
          //     //reqBodyLifeStyle.Type = "weightLoss";
          //     reqBodyLifeStyle.dietPlanName = "weightLoss";
          //   }
          //   if (
          //     healthJourney?.weightValue &&
          //     healthJourney?.weightValue == "WeightMaintenance"
          //   ) {
          //     //reqBodyLifeStyle.Type = "maintenance";
          //     reqBodyLifeStyle.dietPlanName = "weightLoss";
          //   }

          //   if (
          //     healthJourney?.fitnessValue &&
          //     healthJourney?.fitnessValue == "MuscleBuilding"
          //   ) {
          //     //reqBodyLifeStyle.Type = "muscleGain";
          //     reqBodyLifeStyle.dietPlanName = "muscleGain_morning";
          //   }
          //   if (
          //     healthJourney?.fitnessValue &&
          //     healthJourney?.fitnessValue == "LeanBody"
          //   ) {
          //     //reqBodyLifeStyle.Type = "fatShredding";
          //     reqBodyLifeStyle.dietPlanName = "fatShredding_morning";
          //   }

          //   if (healthJourney?.deasesValue) {
          //     //reqBodyLifeStyle.Type = "weightLoss";
          //     reqBodyLifeStyle.dietPlanName = healthJourney?.deasesValue.toLowerCase();
          //   }
          // }
          reqBodyLifeStyle.dietPlanName = localStorage.getItem("goals");
          reqBodyLifeStyle.country = this.country?._id; 
          const activitiesData = JSON.parse(localStorage.getItem("activities"));
           reqBodyLifeStyle.activities= {code:activitiesData.code,data:activitiesData.data};
           const communitiesItem = this.localData?.otherMaster?.community.filter(item=>{
              return item?.isSelected;
          });
          localStorage.setItem("communitiesItem", JSON.stringify(communitiesItem));
           reqBodyLifeStyle.communities= communitiesItem[0]?.code===undefined?['U']:[communitiesItem[0]?.code,'U'];
            this.appService.postLifeStyle(reqBodyLifeStyle).then(
              (success) => {
                const otherMasterData = this.utilities.parseJSON(
                  this.utilities.parseString(success)
                );
                data.otherMaster.calories = {
                  calories: otherMasterData.calories,
                  carb: otherMasterData.carb,
                  fat: otherMasterData.fat,
                  fiber: otherMasterData.fiber,
                  protien: otherMasterData.protien,
                };


                console.log(
                  "otherMaster Response: ",
                  data.otherMaster.calories
                );

                this.storage
                  .set("localData", this.utilities.parseString(data))
                  .then(() => {
                    this.utilities.hideLoader();
                 //   this.utilities.logEvent("complete_lifestyle", {});
                    if (this.from) {
                      return this.modalClose();
                    }
                    
                   if(localStorage.getItem("clientId").toLowerCase()==="eatfit"){
                    this.storage.set("pendingPage", "/meal-pref");
                    this.navCtrl.navigateForward(["meal-pref"]);
                   }
                   else{
                    this.storage.set("pendingPage", "/final-boarding");
                    this.navCtrl.navigateForward(["final-boarding"]);
                   }
                    // this.updateProfile(data);
                  });


              },
              (err) => {
                this.utilities.hideLoader();
                this.utilities.presentAlert(err);
                console.log("Error:", err);
              }
            );
          });
        // });
      });
    });
  }

  selectCountry(c) {
    this.country = c;
    this.localData.countries.forEach((ele) => {
      if (c === ele) {
        ele.isSelected = true;
      } else {
        ele.isSelected = false;
      }
    });
    // this.localData?.countries.forEach((ele) => {
    //   if (ele.isSelected) {
    //     this.country = ele;
    //   }
    // });
    if (typeof this.localData.otherMaster !== undefined)
      this.storage.set("localData", this.utilities.parseString(this.localData));
    this.openCountryDrop = !this.openCountryDrop;

  }
}
