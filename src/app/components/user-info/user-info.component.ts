import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Utilities } from 'src/app/services/utilities.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  // @Input('numberInput') numberInput=-1;
  @Output('numberInput') numberInput=new EventEmitter<Number>() 
  isShowMore=new Array(5).fill(false);
  messsage=new Array(5).fill(false);
  m3 =0;
  m4 =0;
  m5 =0;
  isSelected:any[]=new Array(100);
  counter=0;
  sectionNumber=1;
  currentIndex=1;
  userInfo=[
    {
      displayIndex:0,
      itemIndex:0,
      image:'',//'./assets/images/activity.png',
      name:'', //'Activity Level',
      items:[ {code:'',isSelected:false,value:''}]
     },
     {
      displayIndex:1,
      itemIndex:1,
      image:'./assets/images/diet.png',
      name:'Diet Preferences',
      items:[ {code:'',isSelected:false,value:''}]
 
     },
     {
      displayIndex:1,
      itemIndex:2,
      image:'./assets/images/indiamap.png',
      name:'Regional Preferences',
      items:[ {code:'',isSelected:false,value:''}]
     },
     {
      displayIndex:2,
      itemIndex:3,
      image:'./assets/images/health.png',
      name:'Health Condition(s)',
      items:[ {code:'',isSelected:false,value:''}]
     },
     {
      displayIndex:2,
      itemIndex:4,
      image:'./assets/images/allergies.png',
      name:'Allergies',
      items:[
        {code:'',isSelected:false,value:''}
      ]
     }

    ];
 
  @Output() userAction= new EventEmitter(false);
  constructor(private utilities:Utilities,private storage:Storage) { 
    this.utilities.initStorage(storage);
    this.utilities.getStorage("registrationData").then(res=>{
      console.log("res:::::",res);
    });
  }
  resetIndex(items){
    for (let index = 0; index < items.length; index++) {
      items[index].isSelected=false;
    }
  }
  selectedItem(uinfo,info,ind,inx){
    
    this.currentIndex = uinfo.displayIndex;
    if(uinfo.itemIndex==0){
      this.resetIndex(this.userInfo[0].items);
      this.userInfo[0].items[inx].isSelected=!this.userInfo[0].items[inx].isSelected;
    //  this.messsage[0]=this.userInfo[0].items[inx].isSelected;
    }
    else if(uinfo.itemIndex==1){
      this.resetIndex(this.userInfo[1].items);
      this.userInfo[1].items[inx].isSelected=!this.userInfo[1].items[inx].isSelected;
      this.messsage[1]=this.userInfo[1].items[inx].isSelected;
    }
    else if(uinfo.itemIndex==2){
      if(this.userInfo[2].items[inx].isSelected){
         this.m3=this.m3-1;
      }
      else{
        this.m3=this.m3+1;
      }
      this.userInfo[2].items[inx].isSelected=!this.userInfo[2].items[inx].isSelected;
      // this.messsage[2]=this.userInfo[2].items[inx].isSelected;
      }
    else if(uinfo.itemIndex==3){
      if(this.userInfo[3].items[inx].isSelected){
        this.m4=this.m4-1;
     }
     else{
       this.m4=this.m4+1;
     }
    this.userInfo[3].items[inx].isSelected=!this.userInfo[3].items[inx].isSelected;
   // this.messsage[3]=this.userInfo[3].items[inx].isSelected;
    }
    else {
      if(this.userInfo[4].items[inx].isSelected){
        this.m5=this.m5-1;
     }
     else{
       this.m5=this.m5+1;
     }
      this.userInfo[4].items[inx].isSelected=!this.userInfo[4].items[inx].isSelected;
     // this.messsage[4]=this.userInfo[4].items[inx].isSelected;
      }
     
   
    this.showErr='';
  }

  ngOnInit(): void {
    
    this.utilities.getStorage("defaultData").then(res1=>{
      console.log("default::",res1);
      this.userInfo[0].items=res1.otherMaster.activities;
      this.userInfo[1].items=res1.otherMaster.foodPref;
      this.userInfo[2].items=res1.otherMaster.community;
      this.userInfo[3].items=[...res1.otherMaster.diseases.filter(item=>{
        return !item.value.toLowerCase().includes('allergy');
      })];
      this.userInfo[4].items=[...res1.otherMaster.diseases.filter(item=>{
        return item.value.toLowerCase() .includes('allergy');
      })];
      let res = localStorage.getItem("profileData");
        if(res){
          let newRes = JSON.parse(res);
          console.log("profile:::",newRes);
          let flagTemp=-1;
              let flagTemp1=-1;
              let flagTemp2=-1;
              for (let index = 0; index < this.userInfo[0].items.length; index++) {
                let arr = this.userInfo[0].items[index].value.split('(');
                this.userInfo[0].items[index].value=arr[0] +'<br><span class="v-small">('+arr[1]+'</span>';
              } 
        
            this.userInfo[1].items.filter(item=>{
              return item.code == newRes.lifeStyle.foodType;
            })[0].isSelected = true;
            if(this.userInfo[1].items.filter(item=>{
              return item.code == newRes.lifeStyle.foodType;
            }).length>0){
              this.messsage[1]=true;
            }
            if(newRes.lifeStyle.communities!=undefined){
          
                this.userInfo[2].items.filter(item=>{
                  for (let index = 0; index < newRes.lifeStyle.communities.length; index++) { 
                if(item.code == newRes.lifeStyle.communities[index]){
                  this.m3=this.m3+1;
                  return item.code == newRes.lifeStyle.communities[index];
                }
                }
              })[0].isSelected = true;
            
             if(this.userInfo[2].items.filter(item=>{
              return item.isSelected;
            })){
              this.messsage[2]=true; 
            }
           }
            for (let index = 0; index < newRes.lifeStyle.diseases.length; index++) {
              this.userInfo[3].items.filter(item=>{
                if(item.code == newRes.lifeStyle.diseases[index]){
                  this.m4=this.m4+1;
                  item.isSelected = true;
                }
             //   return item.code == res.lifeStyle.diseases[index];
              });

              this.userInfo[4].items.filter(item=>{
                if(item.code == newRes.lifeStyle.diseases[index]){
                  this.m5=this.m5+1;
                  item.isSelected = true;
                }
             //   return item.code == res.lifeStyle.diseases[index];
              });
            }
            if(this.userInfo[3].items.filter(item=>{
             return item.isSelected;
            })){
              this.messsage[3]=true;
             }
            

            for (let index = 0; index < this.userInfo[4].items.length; index++) {
            if(this.userInfo[4].items[index].value.includes('allergy')){
              this.messsage[4]=true;
            }
          }
            
        }
      });    
   
  }


  showMore(index){
      this.isShowMore[index] = !this.isShowMore[index];
  }
  showErr:any='';
  gotoNext(event){
   
      if(this.currentIndex<2 && this.messsage[this.currentIndex]!=true ){
        this.showErr="Please select atleast one item!";
        return;
      }
      if(this.sectionNumber==1 &&this.m3==0){
        this.showErr="Please select atleast one item!";
        return;
      }
      // if(this.sectionNumber==2 && (this.m4==0 || this.m5==0)){
      //   this.showErr="Please select atleast one item!";
      //   return;
      // }
    if(this.sectionNumber<2){
      this.sectionNumber=this.sectionNumber+1;
      this.numberInput.emit(this.sectionNumber);
      
    }
  
    else if(this.sectionNumber=2){
    this.utilities.getStorage("registrationData").then(res=>{
      this.userAction.emit(this.userInfo);
    });
    
  }
   
  }

  gotoPrevious(event){
    if(this.sectionNumber>1){
      this.sectionNumber=this.sectionNumber-1;
      console.log("userInfo",this.sectionNumber);
      this.numberInput.emit(this.sectionNumber);
      
    }
    else{
      window.history.back();
    }
    
   
  }

}
