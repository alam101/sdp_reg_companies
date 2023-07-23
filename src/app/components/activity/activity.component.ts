import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilities } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  showErr=new Array(1).fill('');
  userInfo=[
    {
      displayIndex:0,
      itemIndex:0,
      image:'',//'./assets/images/activity.png',
      name:'', //'Activity Level',
      items:[{code:'',isSelected:false,value:''}]
     }
    ];
    messsage=new Array(1).fill(false);
  constructor(private utilities:Utilities,private router:Router) { }

  ngOnInit() {
    this.utilities.getStorage("defaultData").then(res1=>{
      console.log("default::",res1);
      this.userInfo[0].items=res1.otherMaster.activities;
       let res = localStorage.getItem("profileData");
        if(res){
           let newRes = JSON.parse(res);
              for (let index = 0; index < this.userInfo[0].items.length; index++) {
                let arr = this.userInfo[0].items[index].value.split('(');
                this.userInfo[0].items[index].value=arr[0] +'<br><span class="v-small">('+arr[1]+'</span>';
              } 
               this.userInfo[0].items.filter(item=>{
                  return item.code == newRes.lifeStyle.activities.code
                })[0].isSelected = true;

                if(this.userInfo[0].items.filter(item=>{
                  return item.code == newRes.lifeStyle.activities.code
                }).length>0){
                  localStorage.setItem("activity",JSON.stringify(this.userInfo[0].items));
                  this.messsage[0]=true;
                }
          }
    });
  }

  resetIndex(items){
   
    for (let index = 0; index < items.length; index++) {
      items[index].isSelected=false;
    }
  }
  selectedItem(uinfo,info,ind,inx){
      this.resetIndex(this.userInfo[0].items);
      this.userInfo[0].items[inx].isSelected=true;
      localStorage.setItem("activity",JSON.stringify(this.userInfo[0].items));
  }


  gotoNext(event){
    console.log("this.userInfo[0].items",this.userInfo[0].items);
    
   // localStorage.setItem("activity",JSON.stringify(this.userInfo[0].items));
    this.router.navigate(['user-info']);
  }

  gotoPrevious(event){
      window.history.back();
  }

}