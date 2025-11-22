import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UTILITIES } from "../utils/utilities";

@Component({
  selector: "app-new-profile",
  templateUrl: "./new-profile.page.html",
  styleUrls: ["./new-profile.page.scss"],
})
export class NewProfilePage implements OnInit,AfterViewInit {
  segment = "profile";
   profileData: any = {};
  localData: any = {};
  plandata: any;
 
dietitianName="";
dietitianRole="";
  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private appservice: AppService,
    private router:Router,
    private utilities: UTILITIES,
    private route: ActivatedRoute
  ) {
   route.queryParams.subscribe(res=>{
    this.dietitianName = res["params"];
    this.dietitianRole = res["role"];
   
   });
  
   
  }
  compConfig:any;
  preferedItem: any;
  clientId: any;
  defaultPlanCheck=false;
  expiryDate="";
  ngOnInit() {
    this.utilities.logEvent("Tracker_profileUpdate", {});
    this.clientId = localStorage.getItem('clientId');
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
  
    console.log("this.compConfig", this.compConfig);
    this.defaultPlanCheck = this.compConfig.defaultPlanCheck;
    this.expiryDate = localStorage.getItem("expiryDate");
    this.preferredMeal();
  }

  ngAfterViewInit() {
    this.getProfile();
    this.checkPlan();
    this.gotoDemographic();
   
    // console.log(this.returnWeek());
  }
  
  preferredMeal(){
    this.preferedItem = JSON.parse(localStorage.getItem("selectedItem"));
   console.log("ALAM:_----",this.preferedItem);
   
  }
  returnWeek() {
    //let createdDate = new Date("9-25-2022"); // for month view
    let createdDate = new Date(this.profileData?.profile?.createdDate);
    const diff = new Date().valueOf() - createdDate?.valueOf();
    const seconds: any = Math.floor(diff / 1000);
    interval = seconds / 2592000;
    if (interval > 2) {
      return {
        type: "M",
        count: Math.floor(interval),
      };
    }
    var interval = seconds / 604800;
    if (interval > 1) {
      return {
        type: "W",
        count: Math.floor(interval),
      };
    } else {
      return {
        type: "W",
        count: 0,
      };
    }
  }

  checkPlan() {
    this.appservice.getOnePlan().subscribe(res => {
      this.plandata = res;
      let exp: any = new Date(this.plandata.planExpiryDate).getTime();
      let newDate: any = new Date().getTime();
      console.log(exp, newDate);

      // if (exp > newDate) {
      //   this.plandata.isPlanActive = true;
      // }
      console.log("plan==========>", res);
    });
  }
 unit: any;
  getFlag(type) {
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

kgToLbs(kg: number): number {
  const lbsPerKg = 2.20462;
  return Math.round(kg * lbsPerKg);
}
  modalClose(){
    this.router.navigate(['new-diet']);
  }
  goalName=[];
  getImage(type) {
    switch (type) {
      case "AC1":
        return "sedentary.png";
      case "AC2":
        return "lightly-active.png";
      case "AC3":
        return "moderatly-active.png";
      case "AC4":
        return "super-active.png";
      case "AC5":
        return "extrimaly-active.png";
      case "weightLoss":
        return "weightmanagement.png";
        case "weightLoss_blubin":
          return "weightmanagement.png";
      case "maintenance":
        return "weightmanagement.png";
        case "maintenance_blubin":
          return "weightmanagement.png";
      case "muscleGain":
        return "fitness.png";
        case "musclebuildmorning_blubin":
          return "fitness.png";  
          case "leanbodymorning_blubin":
            return "fitness.png";
      case "fatShredding":
        return "fitness.png";
      case "diseseManagement":
        return "deseasemanagement.png";
      case "V":
        return "broccoli@3x.png";
      case "NV":
        return "meat@3x.png";
      case "E":
        return "brocolly-egg.png";
      case "Ve":
        return "leaf@3x.png";
        default:
        return "weightmanagement.png";
    }
  }
  isShow=false;
  closePopup(){
    this.isShow=false;
  }
  async openModel(component) {
    console.log(this.dietitianName);
    
   if(this.dietitianName==="" || this.dietitianName===undefined || this.clientId==='lalpathlabs'){
    this.router.navigate([component],{queryParams:{from:'editProfile'}});
        this.getProfile();
    }
    else{
      this.isShow=true;
    }
  }
  suggestedWeightRange: any=0;
  gotoDemographic() {
    this.storage.get("localData").then((local) => {
      const data = this.utilities.parseJSON(local);
          
           if (data.otherMaster.height[0]?.param == "in") {
            this.suggestedWeightRange = Math.ceil(
              parseInt(data.otherMaster.height[0].value) * 2.54 - 100
            );
          }
          else if (data.otherMaster.height[0].unit == "cm") {
            this.suggestedWeightRange = Math.ceil(
              parseInt(data.otherMaster.height[0].value) - 100
            );
          }

    });
  }
  getProfile() {
    this.profileData = [];
    this.appservice.getProfile().then((res) => {
      this.profileData = res;
      debugger;
      this.goalName = this.compConfig.editGoalForDisplay.filter((item:any)=>{
        return item.value === this.profileData?.lifeStyle?.dietPlanName;
      })
      this.getCommunities(this.profileData.lifeStyle.communities);
      if (this.profileData?.profile?.subCategory === "weightloss") {
        this.profileData.profile.subCategory = "Weight Loss";
      }
      if (this.profileData?.profile?.subCategory === "weightmaintenance") {
        this.profileData.profile.subCategory = "Weight Maintenance";
      }
      if (this.profileData?.profile?.subCategory === "musclebuilding") {
        this.profileData.profile.subCategory = "Muscle Building";
      }
      if (this.profileData?.profile?.subCategory === "leanbody") {
        this.profileData.profile.subCategory = "Lean Body";
      }

      this.storage.get("localData").then((val) => {
        this.localData = JSON.parse(val);
        console.log(this.localData);

        this.profileData.lifeStyle.foodType = this.localData?.otherMaster?.foodPref.find(
          (f) => f.code === this.profileData.lifeStyle.foodType
        );
        this.profileData.lifeStyle.country = this.localData?.countries.find(
          (f) => f._id === this.profileData.lifeStyle.country
        );
if(this.clientId!=='enkeltec'){
        this.profileData.lifeStyle.activities = this.localData?.otherMaster?.activities.find(
          (item) => this.profileData?.lifeStyle?.activities.code === item.code
        );
      }
      else{
        this.profileData.lifeStyle.activities = this.compConfig.activies.find(
          (item) => this.profileData?.lifeStyle?.activities.code === item.code
        );
      }
        const communitiesItem = JSON.parse(localStorage.getItem("communitiesItem"));
        if(communitiesItem!=undefined && communitiesItem!="" && communitiesItem!=null){
        this.profileData.lifeStyle.communities = communitiesItem.filter(
          (item) => item.isSelected
        );
       
        }
        this.profileData.lifeStyle.diseases = this.localData?.otherMaster?.diseases.filter(
          (item) => this.profileData?.lifeStyle?.diseases?.includes(item.code)
        );
      });
      let h: any =
        this.profileData?.demographic?.height?.unit === "in"
          ? this.profileData?.demographic?.height?.value / 12
          : this.profileData?.demographic?.height?.value;

      if (this.profileData?.demographic?.height?.unit === "in") {
        console.log(h);
        h = h.toString().split(".");
        console.log(h);
        let h1: any = (h[1] / 0.0833333).toString().split("0")[0];
        console.log(h1);
        if(isNaN(h1)){
          h1 = 0;
        }
        this.profileData.demographic.height.value = `${h[0]}' ${h1}"`;
       } else {
        this.profileData.demographic.height.value =
          this.profileData.demographic.height.value + " cm";
      }
      console.log(this.profileData);
    });
  }

  communitiesArr=[];
  getCommunities(communities){
  
   for (let index = 0; index < communities.length; index++) {
     if(communities[index]==='P'){
       this.communitiesArr.push('North India');
     }
     else if(communities[index]==='M'){
       this.communitiesArr.push('Maharashtra');
     }
     else if(communities[index]==='G'){
       this.communitiesArr.push('Gujarat');
     }
     else if(communities[index]==='B'){
       this.communitiesArr.push('Bengali');
     }
     else if(communities[index]==='S'){
       this.communitiesArr.push('South India');
     }
     else{
      // this.communitiesArr.push('Universal');
     }
     
   }
  }
}
