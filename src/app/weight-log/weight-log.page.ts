import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import moment from "moment";
import { Utilities } from '../newBoarding/utilities.service';

@Component({
  selector: 'app-weight-log',
  templateUrl: './weight-log.page.html',
  styleUrls: ['./weight-log.page.scss'],
})
export class WeightLogPage implements OnInit {
  logDate: string ="";
  logWeight =0;
  profileData: any;

  constructor(
    private appService: AppService,
    private utilities: UTILITIES,
    private modalController: ModalController) {}
  ionViewWillEnter(){
    this.logDate = new Date().toISOString();
    this.logWeight = 0;
  }
  ngOnInit() {
    this.logDate = new Date().toISOString();
    this.logWeight = 0;
  }
  formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB'); 
  }
  onDateChange(event: any) {
    this.logDate = event.detail.value;
    console.log(this.logDate);
  }
  async addHealthData() {
    let obj = {
      "date": this.logDate,
      "userId": this.profileData.profile.email,
      "createdBy": null,
      "weightKg": this.logWeight
    }
    console.log("this.logWeight", this.logWeight);
    if(this.logWeight===0){
      this.utilities.presentAlert("Please Enter Weight.");
      return;
    }
    this.appService.addHealthData(obj).then((res) => {
      this.utilities.showSuccessToast('Weight logged successfully');
      console.log('getHealthData response: ', res);
      this.logWeight = 0;
      // this.logDate = "";
      this.modalController.dismiss(true);
    }).catch(err => {
        this.utilities.showErrorToast('Can not log weight data.');
      });
  }

  close() {
    this.modalController.dismiss();
  }

}
