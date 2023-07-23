import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Utilities } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  isActive:any=-1;
 message = '';
goals=[
    {
      image:'',
      name:'',
      code:'',
      value:'',
      value1:'',
      value2:'',
      isSelected:false
  }
  ];
  @Output() selectGoal = new EventEmitter(true);
  @Output() goalAction = new EventEmitter(true);
   image = [
     
    './assets/images/artboa1.png',
   
      './assets/images/artboa2.png',
     
    './assets/images/artboa3.png',
     
      './assets/images/artboa4.png'
     
    ];
  constructor(private router:Router,private utilities:Utilities,private storage:Storage) { 
    this.utilities.initStorage(storage);
    console.log("cons");
    
  }
  ngAfterViewInit(){
    console.log("after");
      }
  ngOnInit(): void {
    console.log("this.goals",this.goals);
    this.utilities.getStorage("defaultData").then(res=>{
      console.log("default",res);
      this.goals= [...res.otherMaster.type];
      for (let index = 0; index < this.goals.length; index++) {
        const element = this.goals[index].value.split(';');
        this.goals[index].value1=element[0];
        this.goals[index].value2=element[1];
        this.goals[index].image=this.image[index];
        
      }
      let resData = localStorage.getItem("profileData")
        if(resData){
          console.log("profile ::-",JSON.parse(resData).profile.dietPlanType);
          let tempgoals= this.goals.filter((item,index)=>{
            console.log("item.name",item.name);
            
              if(item.name==JSON.parse(resData).profile.dietPlanType){
                this.isActive=index;
           //     return item;
              }
              return  item.name==JSON.parse(resData).profile.dietPlanType;
           });
           if(tempgoals.length>0){
            this.goals[this.isActive].isSelected=true;
           }
           
        }
      });
    
  }
  resetIndex(){
    for (let index = 0; index < this.goals.length; index++) {
      this.goals[index].isSelected=false;
      
    }
  }
  selectedGoal(selectedGoalItem,index,id){
    console.log("test");
    
    this.resetIndex();
     this.goals[index].isSelected = true;
     this.isActive =index;
     
  }

  gotoNext($event){
    if(this.isActive===-1){
      this.message = 'Please select atleast one goal!';
      return;
    }
    
  console.log("res goal",this.goals);
    this.goalAction.emit(this.goals);
  }
}
