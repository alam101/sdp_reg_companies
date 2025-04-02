import { Component, Input, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AppService } from "../app.service";
import { UTILITIES } from "src/app/core/utility/utilities";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-boarding3",
  templateUrl: "./boarding3.page.html",
  styleUrls: ["./boarding3.page.scss"],
})
export class Boarding3Page implements OnInit {
  @Input() from = "";
  selectedValue: any = {};
  localData: any;
  profileData: any;
  clientId: any;

  constructor(
    private navCtrl: NavController,
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
  
    modalClose() {
        this.router.navigate(['new-profile']);
     }
  compConfig:any;
  newModal = "";
  ngOnInit() {
    this.compConfig = JSON.parse(localStorage.getItem("clientConfig"));
    console.log("this.compConfig", this.compConfig);
    this.clientId = localStorage.getItem('clientId');
    this.storage.get("localData").then((val) => {
      this.localData = this.utilities.parseJSON(val);
      console.log("Local data ", this.localData);
      this.getProfile();
    });
  }
 
  getImage(type) {
    switch (type) {
      case "AC1":
        return "aviva-images/activity-new-1.png";
      case "AC2":
        return "aviva-images/activity-new-2.png";
      case "AC3":
        return "aviva-images/activity-new-3.png";
      case "AC4":
        return "aviva-images/activity-new-4.png";
      case "AC5":
        return "aviva-images/activity-new-5.png";
    }
  }

  goBack() {
    if(this.from){
     this.router.navigate(['new-profile']);
    }
    else{
  
    this.storage.set("pendingPage", "/boarding2");
    this.navCtrl.navigateRoot(["/boarding2"]);
    }
  }

  getProfile() {
    this.appService.getProfile().then((res) => {
      console.log(res);
      this.profileData = res;
      this.localData.otherMaster.bmi.bmi= this.profileData?.demographic?.bmi;
      if(!this.compConfig.isChild){
        this.localData?.otherMaster?.activities.forEach((ele) => {
        ele.val = ele.value.split("(")[0];
        ele.sub_val = ele.value.split("(")[1].replace(")", "");
        if (this.profileData?.lifeStyle?.activities?.code == ele.code) {
          ele.isSelected = true;
          this.newModal = ele.val;
          localStorage.setItem("activities",JSON.stringify(ele));
        }
      });
     }
     else{
      this.compConfig.activies.forEach((ele) => {
        ele.val = ele.value.split("(")[0];
        ele.sub_val = ele.value.split("(")[1].replace(")", "");
        if (this.profileData?.lifeStyle?.activities?.code == ele.code) {
          ele.isSelected = true;
          this.newModal = ele.val;
          localStorage.setItem("activities",JSON.stringify(ele));
        }
      });
     }
    });
  }

  selectActivity(e) {
    console.log(e);
  if(this.clientId!=='enkeltec'){
    this.localData?.otherMaster?.activities.forEach((ele) => {
      if (ele.val === e.detail.value) {
        ele.isSelected = true;
        this.selectedValue = ele;
       localStorage.setItem("activities",JSON.stringify(this.selectedValue));
      } else {
        ele.isSelected = false;
      }
    });
     }
     else{
      this.compConfig?.activies?.forEach((ele) => {
        if (ele.val === e.detail.value) {
          ele.isSelected = true;
          this.selectedValue = ele;
         localStorage.setItem("activities",JSON.stringify(this.selectedValue));
        } else {
          ele.isSelected = false;
        }
      });
     }
  }

  goNext() {
    let data;
    if(this.clientId!=='enkeltec'){
     data = this.localData.otherMaster?.activities.find(
      (s) => s.isSelected
    );
    }
    else{
      data = this.compConfig?.activies?.find(
        (s) => s.isSelected
      );
    }
    if (!data) {
      this.utilities.presentToast("Please select your activity level.");
      return;
    }
    if (typeof this.localData.otherMaster !== undefined)
      this.storage.set("localData", JSON.stringify(this.localData));
    const reqBody = {
     
      activities: {
        code: this.selectedValue.code,
        data: this.selectedValue.data,
      },

      //diseases: this.profileData?.lifeStyle?.diseases,
      //communities: this.profileData?.lifeStyle?.communities,
      diseases:
        typeof this.profileData?.lifeStyle?.diseases === undefined ||
        this.profileData?.lifeStyle?.diseases === null
          ? []
          : this.profileData?.lifeStyle?.diseases,
      communities:
        typeof this.profileData?.lifeStyle?.communities === undefined ||
        this.profileData?.lifeStyle?.communities === null
          ? []
          : this.profileData?.lifeStyle?.communities,
        country: this.profileData?.lifeStyle?.country,
          
      // foodType: this.profileData?.lifeStyle?.foodType,
      //};
      firstConsult: localStorage.getItem("clientId")==="orthocure" ? (this.profileData?.lifeStyle?.firstConsult===undefined?false:this.profileData?.lifeStyle?.firstConsult):null,
      foodType: this.profileData?.lifeStyle?.foodType,
      dietPlanName: localStorage.getItem("goals"),//'fatShredding', //localStorage.getItem("goals"),
      consultQA: this.profileData?.lifeStyle?.consultQA===undefined?[]:this.profileData?.lifeStyle?.consultQA,
      instructions: this.profileData?.lifeStyle?.instructions===undefined?'':this.profileData?.lifeStyle?.instructions
    };
    console.log(reqBody);
    this.appService.postLifeStyle(reqBody).then((success) => {
      if (this.from) {
        return this.modalClose();
      }
      this.storage.set("pendingPage", "/boarding4");
      this.navCtrl.navigateForward(["/boarding4"]);
    });
  }
}
