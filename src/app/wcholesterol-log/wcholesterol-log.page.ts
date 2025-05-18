import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
@Component({
  selector: 'app-wcholesterol-log',
     standalone: true,
    imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './wcholesterol-log.page.html',
  styleUrls: ['./wcholesterol-log.page.scss'],
})
export class WcholesterolLogPage implements OnInit {
  logDate: string;
  total:number;
  ldl:number;
  hdl:number;
  triglycerides:number;
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
      // this.total = 0;
      // this.ldl = 0;
      // this.hdl  = 0;
      // this.triglycerides = 0;
  }

  async addHealthData(sys,dia) {
    // this.utilities.presentLoading();
    if(!this.total || !this.ldl || !this.hdl || ! this.triglycerides){
      return;
    }
    let obj = {
      "date": new Date(this.logDate),
      "userId":this.profileData.profile.email, //this.profileData.profile.email,
      "createdBy": this.profileData.profile.name,
      "cholesterol_total": this.total,
      "cholesterol_ldl":this.ldl,
      "cholesterol_hdl": this.hdl,
      "cholesterol_triglycerides":this.triglycerides
    };
   
    this.appService.addHealthData(obj).then((res) => {
      // this.utilities.hideLoader();
      this.utilities.showSuccessToast('blood pressure logged successfully');
      console.log('getHealthData response: ', res);
      this.total=0;
      this.ldl=0;
      this.hdl=0;
      this.triglycerides=0;
      // this.logDate = "";
      this.modalController.dismiss(true);
    })
      .catch(err => {
        this.utilities.showErrorToast('Can not log weight data.');
        // this.utilities.hideLoader();
      });
  }

  close() {
    this.modalController.dismiss();
  }

}
