
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { GoalComponent } from 'src/app/components/goal/goal.component';

import { AppService } from 'src/app/services/app.service';
import { Utilities } from 'src/app/services/utilities.service';
@Component({
  selector: 'app-landing-goals',
  templateUrl: './landing-goals.component.html',
  styleUrls: ['./landing-goals.component.scss'],
  providers:[GoalComponent]
})
export class LandingGoalsComponent implements OnInit {
  goals: any = [];
  planType:string;
  name="";
  constructor(private goal:GoalComponent,private storage:Storage,private readonly appService:AppService ,private utilities:Utilities,private router:Router) {
     this.utilities.initStorage(storage);
     
  } 
 
  ngOnInit(): void { 
     this.filldetail();
   // this.changeTheme("Birla");
    
   

  }

  filldetail(){
    // this.utilities.getStorage("profileData").then(res=>{
    //   // console.log("user:",res);
    //   // this.name=res?.profile?.name;
    //  });
  }
  
  changeTheme(themeName) {
    var elem = document.getElementById('myLink');
    elem.setAttribute(
      'href',
      'http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'
    );
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('type', 'text/css');
  }

  async getSelectedGoal(event){
    
    console.log("selected goal:",event);
  }

  gotoNext(event){
    console.log("event11::",event);
    this.utilities.setStorage("goals",{goals:event});
    this.router.navigate(['vitals']);
  }

  
}
