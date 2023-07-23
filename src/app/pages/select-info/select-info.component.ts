import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppService } from 'src/app/services/app.service';
import { Utilities } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-select-info',
  templateUrl: './select-info.component.html',
  styleUrls: ['./select-info.component.scss']
})
export class SelectInfoComponent implements OnInit {
  userInfo:any=[];
  defaultData:any;
  name="";
  numberI=1;
  email="";
  constructor(private appService:AppService,private router:Router,private utilities:Utilities,private storage:Storage) { 
    this.utilities.initStorage(storage);
  
    
  }
  numberInput(event){
    console.log("numberInput:",event);
    
    this.numberI = event;
  }

  back(event){
    if(this.number!=-1 && this.number!=0){
      this.number=this.number-1;
  //  this.numberInput=this.number;
    }
    else{
    console.log("back");
    window.history.back();
    }
  }
  ngOnInit(): void {
    this.utilities.getStorage("defaultData").then(res=>{
      this.defaultData = res;
      console.log("this.defaultData",this.defaultData);
      
     // this.bindUserSelecteData();
    });

      let res = localStorage.getItem("profileData");
       this.name=JSON.parse(res)?.profile?.name;
        this.email = JSON.parse(res)?.profile?.email;
    
    
  }
  number=0;
  gotoNext(event){
    console.log("eventttttt:----",event);
    
    if(!isNaN(event)){
      this.number=event;
      return;
    }
  this.utilities.getStorage("registrationData").then(res=>{
    let activity= JSON.parse(localStorage.getItem("activity")).filter(item=>{return item.isSelected})[0];
    let vitals = JSON.parse(localStorage.getItem("vitals"));
    let desease=[];
    let dietPref=event[1].items.filter(item=>{return item.isSelected})[0];
    let regionalPref=['U'];
   
    for (let index = 0; index < event[2].items.length; index++) {
      if(event[2].items[index].isSelected==true)
      regionalPref.push(event[2].items[index].code);
     }
    for (let index = 0; index < event[3].items.length; index++) {
     if(event[3].items[index].isSelected==true)
      desease.push(event[3].items[index].code);
    }
    for (let index = 0; index < event[4].items.length; index++) {
      if(event[4].items[index].isSelected==true)
       desease.push(event[4].items[index].code);
     }

      let ageItem =this.defaultData.otherMaster.ageMaster.data.filter(dt=>{
      return  dt.avg_age==(new Date().getFullYear() - parseInt(res.passData.yob)).toString()
      })[0];
      this.utilities.getStorage("goals").then(goals=>{ 
    let payload = {
      "profile": {
        "email":this.email ,
        "dietPlanType": goals.goals.filter(item=>item.isSelected)[0].name//"weightLoss"
      },
      "demographic": {
        "gender": res.passData.data.gender.filter(item=>{return item.isSelected})[0],
      "height": vitals.passData.data.height[0],
      "weight": res.passData.data.weight[0],
      "age": {
         "code": ageItem?.code,
         "label": ageItem?.value,
          "avg_age": (new Date().getFullYear() - parseInt(res.passData.yob))
           
      }
    },
      "lifeStyle": {
        "diseases": desease,
        "foodType":dietPref.code,
        
        "activities": {
          "code": activity.code,
          "data":activity.data
        },
        "prefWorkOutTime": "evening",
        "communities": regionalPref,
        "country": "IND"
      }
    };
    console.log("event",event,payload);
    this.appService.externalRegistration("HLTH22531",payload).subscribe(res=>{
      console.log("tee:",localStorage.getItem('tkn'));
      this.utilities.getStorage("type").then(res=>{
        if(res=="1"  || localStorage.getItem("inner")=="1"){
          this.router.navigate(['dietplan']);
        }
        else{
          window.open(`https://app.smartdietplanner.com?token=${localStorage.getItem('tkn')}`,'_blank');
        }
      })
     
      
    })
  });
  });
    
    
   // this.router.navigate(['goals']);
  }

  bindUserSelecteData(){
    this.utilities.getStorage("registrationData").then(res=>{
      console.log("total Data",res);
      
    });
  }
}
