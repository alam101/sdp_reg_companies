import { Component, OnInit } from '@angular/core';
import { AppService } from '../newBoarding/app.service';

@Component({
  selector: 'app-dietitian-profile',
  templateUrl: './dietitian-profile.page.html',
  styleUrls: ['./dietitian-profile.page.scss'],
})
export class DietitianProfilePage implements OnInit {

  constructor(private appServices:AppService) { }

  ngOnInit() {
    this.getProfile();
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
      // if(res.dietitianName!==undefined){
      // this.deititianName = res.dietitianName;
      // this.deititianRole = res.role;
      // this.calendlyId = res.calendlyId;
      // this.whatsappNum = res.whatsappNum;
      // this.whatappVisible = res.whatsappVisible;  
      // this.gender = res.gender;
      // this.calendlyVisible = res.calendlyVisible;
      // }
    },err=>{

    });
  }

}
