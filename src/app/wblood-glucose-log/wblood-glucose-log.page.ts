import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
@Component({
  selector: 'app-wblood-glucose-log',
  templateUrl: './wblood-glucose-log.page.html',
  styleUrls: ['./wblood-glucose-log.page.scss'],
})
export class WbloodGlucoseLogPage implements OnInit {
  logDate: Date = new Date();
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
  }

  async addHealthData(sys,dia) {
    this.utilities.presentLoading();
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
      this.fasting = 0;
      this.random = 0;
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
