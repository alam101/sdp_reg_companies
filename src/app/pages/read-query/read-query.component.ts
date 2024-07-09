import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Utilities } from 'src/app/services/utilities.service';
import {Storage} from '@ionic/storage-angular';
import { SettingsService } from 'src/app/services/settings.service';
import { LoadingController } from '@ionic/angular';
import  compJson from '../../../assets/comp_config.json';
import {CONSTANTS} from '../../core/constants/constants';
@Component({
  selector: 'app-read-query',
  templateUrl: './read-query.component.html',
  styleUrls: ['./read-query.component.scss'],
})
export class ReadQueryComponent implements OnInit {
  token="";
  clientId: any; //="newmi";
  type="0";
  selectedTheme: String;
  constructor(private loading:LoadingController,private settings:SettingsService ,private routerActive:ActivatedRoute,private router: Router,private appService:AppService,private storage:Storage,private utilities:Utilities) {
    if(this.token=="")
    {  this.presentLoadingCustom();
      this.routerActive.queryParams.subscribe(res=>{
       console.log("res",res.token);
       localStorage.setItem("firstday","");
       this.token = res.token;
       this.clientId = res.clientId || res.clientid;
      if(this.clientId==undefined){   
       this.clientId =localStorage.getItem("clientId");
       this.toggleAppTheme(this.clientId);
       }
       else{
        localStorage.setItem("clientId",this.clientId);
        this.toggleAppTheme(this.clientId);
       }
       
       this.type=res.type;
        if(this.token){
          localStorage.setItem("tkn",this.token);
          this.toggleAppTheme(this.clientId);
          console.log("this.token",this.token);
          this.storage.set("type",this.type);
        
          this.defaultData();
        }
        else{
          this.dismissLoader();
        }
        
      });
    } 
  }

  filterCompanyJson(){

   const data = compJson.filter((item,index)=>{
    console.log("clientConfig:-", Object.keys(item)[0], this.clientId.toLowerCase());
      return this.clientId && Object.keys(item)[0].toLowerCase()===this.clientId.toLowerCase();
    });
    console.log("clientConfig", data);
    if(data?.length>0 && this.clientId){
    localStorage.setItem("clientConfig", JSON.stringify(data[0][this.clientId.toLowerCase()]));
    }
    else{
      localStorage.setItem("clientConfig", JSON.stringify(compJson[0].default));
    }
  }
  async presentLoadingCustom() {
    this.loading.create({
      message: ''
  }).then((response) => {
      response.present();
  }); 
  }

  toggleAppTheme(theme) {
    document.body.setAttribute('color-theme', theme);
  }
  
  dismissLoader() {
    this.loading.dismiss().then((response) => {
        console.log('Loader closed!', response);
    }).catch((err) => {
        console.log('Error occured : ', err);
    });
}
   ngOnInit() {
    this. filterCompanyJson();
  }
  bindProfileDatainDefaultData(resData){
      const gender = resData?.demographic?.gender;
      const height = resData?.demographic?.height;
      const bmi = resData?.demographic?.bmi;
      const suggestedweight = resData?.demographic?.suggestedWeight;
      const weight = resData?.demographic?.weight;
      const age = resData?.demographic?.age;
      const activities = resData?.lifeStyle?.activities;
      const diseases = resData?.lifeStyle?.diseases;
      const communities = resData?.lifeStyle?.communities;
      const foodPref = resData?.lifeStyle?.foodType; 
      localStorage.setItem("goals",resData?.lifeStyle?.dietPlanName);
      let res1 = localStorage.getItem("defaultData");
         const res= JSON.parse(res1);
        if(gender){
          if(res?.otherMaster!==undefined){
          res.otherMaster.gender.filter(item=>{
          return item.code ===gender["code"];
        })[0].isSelected=true;
      }
    }
      if(bmi && res?.otherMaster?.bmi!=undefined){
        res.otherMaster.bmi={bmi:bmi};
      }
      if(age && res?.age!=undefined){
        age.year=(new Date().getFullYear()-age.avg_age).toString();
        res.age=age;
      }
      if(height && res?.otherMaster?.height!=undefined){
        res?.otherMaster?.height.push(height);
        console.log("res.otherMaster.gender",res.otherMaster.gender);
      }
      if(suggestedweight && res?.otherMaster?.diet!=undefined){
        res.otherMaster.diet = {suggestedWeight:suggestedweight,param:''};
      }
      if(weight && res?.otherMaster?.weight!=undefined){
        res.otherMaster.weight.push(weight);
      }
      if(activities?.length>0 && res?.otherMaster?.activities!=undefined){
        res.otherMaster.activities.filter(item=>{
          return item.code ===activities["code"];
        })[0].isSelected=true;
      }
      if(diseases && res?.otherMaster?.diseases!=undefined){
        for (let index = 0; index < diseases.length; index++) {
        res.otherMaster.diseases.filter((item)=>{
             if(item.code === diseases[index]){
              item.isSelected=true;
             }
          });
         
        }
       
      }
      if(communities && res?.otherMaster?.community!=undefined){
        for (let index = 0; index < communities.length; index++) {
          res.otherMaster.community.filter((item)=>{
               if(item.code === communities[index]){
                item.isSelected=true;
               }
            });
           
          }
      }
      if(foodPref && res?.otherMaster?.foodPref!=undefined){
          res.otherMaster.foodPref.filter((item)=>{
               if(item.code === foodPref){
                item.isSelected=true;
               }
            });
      }
      

      this.storage.set("localData",JSON.stringify(res));
     this.dismissLoader();
     const localProfileObject = JSON.parse(localStorage.getItem("profileData"))
      if(localProfileObject.code=="0001"){
        // if(localStorage.getItem("default")==null || localStorage.getItem("default")=='' || localStorage.getItem("default")==undefined){
        //   this.router.navigate(['fight-slider']);
        // }
        // else{
         this.router.navigate(['/boarding1']);
       // }
        
        return;
      }
      else{
      localStorage.setItem("userid",resData?.profile?.email);
      CONSTANTS.email = resData?.profile?.email;
      }
      setTimeout(() => {
        this.dismissLoader();
      }, 4000);
     console.log(this.type);
      if(this.type=="2"){
        window.open('https://app.smartdietplanner.com','_blank');
      }
      debugger;
      console.log("localProfileObject::",localProfileObject);
      if(localProfileObject["demographic"]?.gender?.code!=undefined &&
        localProfileObject["demographic"]?.age?.code!=undefined && 
        localProfileObject["demographic"]?.height?.value!=undefined &&
        localProfileObject["demographic"]?.weight?.value!=undefined 
        // localProfileObject["lifeStyle"]?.activities?.code!=undefined  &&
        // (localProfileObject["lifeStyle"]?.foodType!="" && localProfileObject["lifeStyle"]?.foodType!=undefined)
        ){
         if((localProfileObject["lifeStyle"]?.country!=="" && localProfileObject["lifeStyle"]?.country!==undefined)){
          if(localProfileObject["lifeStyle"]?.country==="IND"){
          if(localProfileObject["lifeStyle"]?.communities?.length>0 
            && localProfileObject["lifeStyle"]?.foodType!==null 
            && localProfileObject["lifeStyle"]?.carb!==null && localProfileObject["lifeStyle"]?.carb!==0){
            this.router.navigate(["/new-diet"]);
          }
          else{
            this.router.navigate(["/boarding5"]);
          }
         } 
         else if(localProfileObject["lifeStyle"]?.foodType!==null 
          && localProfileObject["lifeStyle"]?.carb!==null && localProfileObject["lifeStyle"]?.carb!==0){
          this.router.navigate(["/new-diet"]);
         }
         else{
          this.router.navigate(["/boarding1"]);
         }
        }
        else{
          this.router.navigate(["/boarding5"]);
        }
       // this.router.navigate(["/dietplan"]);
      
   
      }
    else{
      this.router.navigate(["/boarding1"]);
    }
   
   
  }
   fetchProfile(){
     this.appService.getProfile().subscribe(resData=>{
      localStorage.setItem("profileData",JSON.stringify(resData));
     this.storage.set('plan',JSON.stringify(resData.profile));
      this.storage.set("profileData",JSON.stringify(resData));
      console.log("resData:::",resData);
      this.bindProfileDatainDefaultData(resData);
     });
   }
  defaultData(){
    if(this.token!='' && this.token != 'null'){
    this.appService.defaultData().subscribe(res=>{
      console.log("defaultData::",res);
      localStorage.setItem("defaultData",JSON.stringify(res));
      
      localStorage.setItem("tkn",this.token);
      this.fetchProfile();
       
    },err=>{
      this.dismissLoader();
      console.log("eee",err);
      
  //    window.open('https://app.smartdietplanner.com','_blank');
    });
  }
  else{
  
   this.dismissLoader();
    this.router.navigate(['/boarding1']);
  }
  }
  navigateToHome(){
    this.router.navigate(['/home']);
  }
  }