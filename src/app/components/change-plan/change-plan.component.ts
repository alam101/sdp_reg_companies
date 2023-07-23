import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UTILITIES } from '../../core/utility/utilities';
import { AppService } from '../../home-service/app.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from "@angular/router";
import { CONSTANTS } from "../../core/constants/constants";
import moment from "moment";
import { constantsJson } from '../../core/constants/constants';
import {
 
  ModalController
 
} from '@ionic/angular';
import { SelectPlanPopupComponent } from '../select-plan-popup/select-plan-popup.component';

@Component({
  selector: 'app-change-plan',
  templateUrl: './change-plan.component.html',
  styleUrls: ['./change-plan.component.scss'],
})
export class ChangePlanComponent implements OnInit,AfterViewInit {
  planTypes;
  muscleMaleImg = "../../assets/img/muscle-male.png";
  muscleFemaleImg = "../../assets/img/muscle-female.png";
  fatMaleImg = "../../assets/img/fat-male.png";
  fatFemaleImg = "../../assets/img/fat-female.png";
  isIosDevice = this.utilities.isDeviceiOS();
   containPlanTypes = [];

  selectedPlan = "weightLoss";
  constructor( 
    private utilities: UTILITIES,
    private appService: AppService,
    private storage: Storage,
    private router: Router,
    private modalController: ModalController,
    ) { }

  ngOnInit() {
    let activityArr = [];
    let selectedDietPlan = CONSTANTS.selectedDietPlan;
    if(['post_covid', 'diabetes', 'hypertension'].includes(selectedDietPlan)){
      activityArr = constantsJson.premiumPlanInculdes.filter((ele) =>{
        return ele.title != "Detox Plan";
      })
      this.activitySlider = activityArr;
    }else{
      this.activitySlider = constantsJson.premiumPlanInculdes;
    }

        this.dataInit();
 
  }
  isPlanLoaded = false;
  isPlanActiveForDiet = CONSTANTS.isPlanActiveParent;
  activitySlider = [];
  
  async gotoEditPlanSelection(event, isType, plan, note){
    event.stopPropagation();
     if(isType == this.selectedPlan) return;
   
    let me = this;
    const modal = await me.modalController.create({
      component: SelectPlanPopupComponent,
      backdropDismiss: true,
      cssClass: 'app-offer-popup',
      componentProps: { planType: isType, plan: plan, isPremium: this.isPlanActiveForDiet, note: note }
    });
    modal.onDidDismiss().then((data: any) => {
      if(data && data.data && data.data.isActivate){
        this.selectePlan(data.data.planId)
      }
    })
    return await modal.present();
  }

  upgradePlan() {
    this.router.navigate(["upgrade-plan"]);
  }

  selectPlanFromDiseases = false;
  async dataInit(){
    // const snapshot = await firebase.firestore().collection("diet_plans").get();
    let planTypes = constantsJson.diet_plans;//snapshot.docs.map(doc => doc.data());
    planTypes = planTypes.filter((ele) =>{
      return ele.isVisible;
    })
    let tempPlanTypes;
    let self = this;
    this.storage.get("profileData").then((res)=>{
      let profileData = JSON.parse(res);
      if(profileData.demographic.gender.value.toLowerCase() == 'male'){
       tempPlanTypes = planTypes.filter((ele) =>{
          if(ele.id.toLowerCase() != "pcos"){
            return ele;
          }
        })
      }else{
       tempPlanTypes = planTypes;
      }
      this.userName = profileData["profile"]["name"];
      this.suggestedClories = profileData["lifeStyle"]["calories"];
      if(profileData && profileData["lifeStyle"] &&  profileData["lifeStyle"]["dietPlanName"]){
        self.selectedPlan = profileData["lifeStyle"]["dietPlanName"];
      } else {
        self.selectedPlan = "weightLoss";
      }

      if(this.diseases.length > 0){
        let isDiabetes, isPCOD, isCholestrol, isBloodPressure; 
        this.diseases.forEach((ele)=>{
          if(ele.code == "D") isDiabetes = true;
          else if(ele.code == "P") isPCOD = true;
          else if(ele.code == "C") isCholestrol = true;
          else if(ele.code == "B") isBloodPressure = true;
        })
        tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "weightLoss"), 1)[0]);
        tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "weightLossPlus"), 1)[0]);
        if(isBloodPressure) tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "hypertension"), 1)[0]); //.sort((a, b) =>{ return (a.id != 'hypertension' ? 1 : -1)});
        if(isCholestrol) tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "cholesterol"), 1)[0]); //sort((a, b) =>{ return (a.id != 'cholesterol' ? 1 : -1) });
        if(isPCOD) tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "pcos"), 1)[0]); //tempPlanTypes.sort((a, b) =>{ return (a.id != 'pcos' ? 1 : -1) });
        if(isDiabetes) tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "diabetes"), 1)[0]); //tempPlanTypes.sort((a, b) =>{ return (a.id != 'diabetes' ? 1 : -1) });
        
        if(this.selectedPlan == 'hypertension' || this.selectedPlan == 'cholesterol' || 
          this.selectedPlan == 'pcos' || this.selectedPlan == 'diabetes') this.selectPlanFromDiseases = true;
        this.planTypes = tempPlanTypes;
      }else{
        tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "weightLoss"), 1)[0]); 
        tempPlanTypes.unshift(tempPlanTypes.splice(tempPlanTypes.findIndex(item => item.id === "weightLossPlus"), 1)[0]);
        this.planTypes = tempPlanTypes;
      }
      
      this.planTypes.unshift(this.planTypes.splice(this.planTypes.findIndex(item => item.id === self.selectedPlan), 1)[0]);

      this.planTypes.filter((ele)=>{
        if(ele.isGenderCheck){
          if(ele.id == 'fatShredding_morning'){
            if(profileData.demographic.gender.value.toLowerCase() == 'male'){
              ele['img'] = this.fatMaleImg;
              return ele;
            }else{
              ele['img'] = this.fatFemaleImg;
              return ele;
            }
          }else if(ele.id == 'muscleGain_morning'){
            if(profileData.demographic.gender.value.toLowerCase() == 'male'){
              ele['img'] = this.muscleMaleImg;
              return ele;
            }else{
              ele['img'] = this.muscleFemaleImg;
              return ele;
            }
          }
        }else return ele;
      })
      this.containPlanTypes = this.planTypes;
    })
  }

  userName = "";
  suggestedClories = 0;
  diseases = [];
  localData;
  ngAfterViewInit() {
    // this.getPlanStatus();
    // this.dataInit();
    this.storage.get("localData").then(val => {
      if (val != "") {
        let data = JSON.parse(val);
        this.diseases = data.otherMaster.diseases.filter(item=>{
          return item.isSelected==true;
        });
        this.localData = data;
        this.dataInit();
      }else{
        this.dataInit();
      }
    })
  }

  expandPlanCards = false;
  toggelExpandCards(flag){
    if(!this.expandPlanCards || flag) this.expandPlanCards = !this.expandPlanCards;
  }


  selectePlan(isType){
  //  this.utilities.showLoading();
    let req = {
      "dietPlanName": isType
    }
    this.appService.doUpdateCustDietPlan(req).then(
      success => {
        this.appService.getProfile().then(
          profileData => {
            console.log("profileData,", profileData);
          //  this.storage.get("localData").then((defaultData)=>{
           //   defaultData = JSON.parse(defaultData);
              if(profileData && profileData["profile"] && profileData["profile"].dietPlanType){
             //   defaultData.otherMaster.type.filter((ele) => {
             //     if(profileData["profile"].dietPlanType == ele.name) return ele.isSelected = true;
             //   })
              }
              if(profileData && profileData["lifeStyle"] && profileData["lifeStyle"].prefWorkOutTime){
             //   defaultData.otherMaster.workoutTime.filter((ele) => {
              //    if(profileData["lifeStyle"].prefWorkOutTime == ele.name) return ele.isSelected = true;
             //   })
              }
          //    this.storage.set("localData", this.utilities.parseString(defaultData)).then(()=>{
                this.storage.set("profileData", this.utilities.parseString(profileData)).then(()=>{
               //   this.storage.set("dietData", null).then(()=>{
             //       this.storage.set("optionsData", null).then(()=>{
                      CONSTANTS.dietDate = moment().format("DDMMYYYY");
                      localStorage.setItem("profileData",JSON.stringify(profileData));
                      this.router.navigate(["new-diet"] );
                    })
               //   })
             //   })
            //  });
            })
         // })
    },
    error => {
      this.utilities.hideLoader();
      console.log("DietPlan Error:", error);
      this.utilities.presentAlert("Errror...");
    });
  }

}
