import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
@Component({
  selector: 'app-wblood-glucose-log',
    standalone: true,
      imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './wblood-glucose-log.page.html',
  styleUrls: ['./wblood-glucose-log.page.scss'],
})
export class WbloodGlucoseLogPage implements OnInit {
  logDate: string;
  fasting:number;
  random:number;
  currentDate: Date = new Date();
  profileData: any;

  constructor(
    private appService: AppService,
    private utilities: UTILITIES,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('logDate: ', this.logDate);
    console.log('profileData: ', this.profileData);
     this.logDate = new Date().toISOString();
   
  }

  async addHealthData(sys,dia) {
    if(!this.fasting || !this.random){
      return;
    }
    let obj = {
      "date": new Date(this.logDate),
      "userId":this.profileData.profile.email, //this.profileData.profile.email,
      "createdBy": this.profileData.profile.name,
      "bloodGlucose_fasting": this.fasting,
      "bloodGlucose_random":this.random
    };
  
    this.appService.addHealthData(obj).then((res) => {
      this.utilities.hideLoader();
      this.utilities.showSuccessToast('blood pressure logged successfully');
      console.log('getHealthData response: ', res);
     
      // this.logDate = "";
      this.modalController.dismiss(true);
    })
      .catch(err => {
        this.utilities.showErrorToast('Can not log weight data.');
        this.utilities.hideLoader();
      });
  }

  close() {
    this.modalController.dismiss();
  }

}
