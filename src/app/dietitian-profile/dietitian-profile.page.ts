import { Component, OnInit } from '@angular/core';
import { AppService } from '../newBoarding/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dietitian-profile',
  templateUrl: './dietitian-profile.page.html',
  styleUrls: ['./dietitian-profile.page.scss'],
})
export class DietitianProfilePage implements OnInit {
  randomNumber = Number(Date.now()) * Math.random();
  localProfileObject:any;
  constructor(private router:Router,private appServices:AppService) { }

  ngOnInit() {
    this.getProfile();
  }

  goto(){
    if(this.profileData["lifeStyle"]?.communities?.length>0 
      && this.profileData["lifeStyle"]?.foodType!==null 
      && this.profileData["lifeStyle"]?.carb!==null && this.profileData["lifeStyle"]?.carb!==0){
      this.router.navigate(["/new-diet"],{queryParams:{params:Math.floor(this.randomNumber)}});
    }
    else{
      this.router.navigate(["/boarding1"],{queryParams:{params:Math.floor(this.randomNumber)}});
    }
  }
  profileData:any;
 
  getProfile(){
    this.appServices.getProfile().then(
      profileData => {
        this.profileData = profileData;
        this.getDietitianDetail(this.profileData.profile.email);
      });

   }
  dietitianRecord=[];
  skills=[];
  gender="";
  getDietitianDetail(email){
    this.appServices.getDietitianRecord(email).subscribe((res:any)=>{
      console.log("response dietitian", res);
      this.dietitianRecord = res;
      this.skills = res.speciality.split(', ');
      this.gender = res.gender.toLowerCase();
      },err=>{

    });
  }

}
