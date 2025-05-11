import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import moment from "moment";

@Component({
  selector: 'app-weight-log',
  templateUrl: './weight-log.page.html',
  styleUrls: ['./weight-log.page.scss'],
})
export class WeightLogPage implements OnInit {
  logDate: string = new Date().toISOString();
  logWeight: Number;
  currentDate: Date = new Date();
  profileData: any;

  constructor(
    private appService: AppService,
    private utilities: UTILITIES,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('logWeight: ', this.logWeight);
    console.log('logDate: ', this.logDate);
    console.log('profileData: ', this.profileData);
  }

  onDateChange(event: any) {

    this.logDate = event.detail.value;
    console.log(this.logDate);
    
  }
  async addHealthData() {
    this.utilities.presentLoading();
    debugger;
    let obj = {
      "date": this.logDate,
      "userId": this.profileData.profile.email,
      "createdBy": null,
      "weightKg": this.logWeight
    }
    this.appService.addHealthData(obj).then((res) => {
      this.utilities.hideLoader();
      this.utilities.showSuccessToast('Weight logged successfully');
      console.log('getHealthData response: ', res);
      this.logWeight = 0;
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
