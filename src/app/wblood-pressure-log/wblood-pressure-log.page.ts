import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
@Component({
  selector: 'app-wblood-pressure-log',
  templateUrl: './wblood-pressure-log.page.html',
  styleUrls: ['./wblood-pressure-log.page.scss'],
})
export class WbloodPressureLogPage implements OnInit {
  logDate: string;
  minPressure:number;
  maxPressure:number;
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
  this.minPressure=0;
  this.maxPressure=0;
  }

  async addHealthData(sys,dia) {
    this.utilities.presentLoading();
    let obj = {
      "date": new Date(this.logDate),
      "userId":this.profileData.profile.email, //this.profileData.profile.email,
      "createdBy": this.profileData.profile.name,
      "bp_systolic": this.minPressure,
      "bp_diastolic":this.maxPressure
    };
  
    this.appService.addHealthData(obj).then((res) => {
      this.utilities.hideLoader();
      this.utilities.showSuccessToast('blood pressure logged successfully');
      console.log('getHealthData response: ', res);
      this.minPressure = 0;
      this.maxPressure = 0;
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
