import { AfterViewInit, Component, ElementRef, Output, ViewChild } from '@angular/core';
import { Health } from '@ionic-native/health/ngx';

import { AppService } from '../app.service';
import { UTILITIES } from '../core/utility/utilities';
import { Chart } from "chart.js";
import moment from "moment";
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { CONSTANTS } from '../core/constants/constants';
import { ModalController } from '@ionic/angular';
import { WcholesterolLogPage } from '../wcholesterol-log/wcholesterol-log.page';
@Component({
  selector: 'app-wcholesterol-guage',
  templateUrl: './wcholesterol-guage.page.html',
  styleUrls: ['./wcholesterol-guage.page.scss'],
})
export class WcholesterolGuagePage implements AfterViewInit {
 
  weightChart: any;
  weightChartNew: any;
  weightGraphData: any;
  targetWeight = 0;
  currentWeight = 0;
  bmiMeter = [{
    text: 'Normal',
    min: 18.5,
    max: 25
  },
  {
    text: 'Overweight',
    min: 25,
    max: 30
  },
  {
    text: 'Obese Class I',
    min: 30.1,
    max: 35
  },
  {
    text: 'Obese Class II',
    min: 35.1,
    max: 40
  },
  {
    text: 'Obese Class III',
    min: 40.1
  }]
  currentBMI = {
    value: '0',
    bmi: ''
  }
  targetBMI = {
    value: '0',
    bmi: ''
  }

  weightDaily: any = 0;
  targetWeightDaily: any = 0;
  poundValue = 0.453592;
  targetButtonDisabled = true;
  currentButtonDisabled = true;
  currrentValueInKG;
  healthData: any = [];

  profileData: any;
  logDate: any;
  logWeight: Number;
  currentDate: Date = new Date();
  fullHeight: boolean = false;

  constructor(
    private router: Router,
    private storage: Storage, private appService: AppService, private utilities: UTILITIES,
    private modalController: ModalController) {
  }
  close(){
    this.modalController.dismiss();
    this.router.navigate([
      "new-diet",
      { refresh: new Date().getTime() },
    ]);

  }
  ionViewWillEnter() {
    // this.utilities.logEvent("view_weight_tracker", {})      
    this.utilities.logEvent("Tracker_04Weight", {});
    this.bloodPressureGraph();
   
  }

  ngOnInit() {
    this.bloodPressureGraph();
  }

  

  navigateToUpdrade() {
   
  }

  ngAfterViewInit() {
    this.bloodPressureGraph();
    this.logDate = moment(new Date()).format("l");
    moment.updateLocale('en', {
      week: {
        dow: 1,
      },
    })

  }

  formatedDate(dt){
    return moment(dt).format('ddd MMM yyyy');
  }
  
  bloodPressureGraph() {
    this.utilities.presentLoading();
    let profile = JSON.parse(localStorage.getItem("profileData"));
    this.profileData = profile;
    this.appService.getHealthData(this.profileData.profile.email).then((res: any) => {
      this.healthData = res;
    },err=>{

console.log("error",err);

    });
   
  }

  setLabel(value) {
    if (value >= 18.5 && value <= 25) {
      return 'Normal'
    }
    if (value > 25 && value <= 30) {
      return 'Overweight'
    }
    if (value > 30 && value <= 35) {
      return 'Obese Class I'
    }
    if (value > 35 && value <= 40) {
      return 'Obese Class II'
    }
    if (value > 40) {
      return 'Obese Class III'
    }
  }
  getColor(value) {
    if (value >= 18.5 && value <= 25) {
      return {
        'color': '#27d7a1'
      }
    }
    if (value > 25 && value <= 30) {
      return {

        'color': '#c2ef67'
      }
    }
    if (value > 30 && value <= 35) {
      return {
        'color': '#ffd717'
      }
    }
    if (value > 35 && value <= 40) {
      return {
        'color': '#ffa73b'
      }
    }
    if (value > 40.1) {
      return {
        'color': '#ff595a'
      }
    }

  }
  minusWeight() {
    this.weightDaily = (parseFloat(this.weightDaily) - 1).toFixed(1);
    this.currentToggle(false);

  }
  plusWeight() {
    this.weightDaily = (parseFloat(this.weightDaily) + 1).toFixed(1);
    this.currentToggle(false);
  }

  minusTargetWeight() {
    this.targetWeightDaily = (parseFloat(this.targetWeightDaily) - 1).toFixed(1);
    this.targetToggle(false);
  }
  plusTargetWeight() {
    this.targetWeightDaily = (parseFloat(this.targetWeightDaily) + 1).toFixed(1);
    this.targetToggle(false);

  }
  getWidth(bmiValue) {
    bmiValue = parseFloat(bmiValue);
    bmiValue = (bmiValue - 20) / (45 - 20) * 100;
    bmiValue = bmiValue + 2;  // for set the pin correct position
    return {
      "width": bmiValue + "%"
    }
  }
  saveTarget() {
    this.storage.get("profileData").then(val => {
      let profile = this.utilities.parseJSON(val);
      //  BMI =Kg/m2
      let targetWeightDaily = profile.demographic.weight.unit == "pound" ? this.targetWeightDaily * this.poundValue : this.targetWeightDaily;
      let heightInMeter = 0;
      if (profile.demographic.height.unit == 'cm') {
        heightInMeter = profile.demographic.height.value * 0.01;
      } else {
        heightInMeter = profile.demographic.height.value * 2.54 * 0.01;
      }
      if ((parseFloat(targetWeightDaily) / (heightInMeter * heightInMeter)
      ) < 22) {
        this.utilities.showErrorToast('We do not advise below 22 BMI');
        return;
      } else {
        this.appService.updateTargetWeight({
          'targetedWeight': parseFloat(targetWeightDaily)
        }).then(
          res => {
            this.utilities.showSuccessToast('Target weight updated');
            this.targetToggle(true);
            this.bloodPressureGraph();
          }, err => {

            this.utilities.hideLoader();
            this.utilities.presentAlert(JSON.stringify(err));
          });
      }


    })

  }

  saveCurrent() {
    this.storage.get("profileData").then(val => {
      let profile = this.utilities.parseJSON(val);
      let weightDaily = profile.demographic.weight.unit == "pound" ? this.weightDaily * this.poundValue : this.weightDaily;
      this.appService.updateCurrentWeight({
        'currentWeight': parseFloat(weightDaily)
      }).then(
        res => {
          this.utilities.showSuccessToast('Current weight updated');
          this.currentToggle(true);
          this.bloodPressureGraph();
        }, err => {

          this.utilities.presentAlert(JSON.stringify(err));
        });
    })


  }
  targetChange() {
    this.targetToggle(false);
  }
  currentChange() {
    this.currentToggle(false);
  }

  targetToggle(type) {
    this.targetButtonDisabled = type;

  }
  currentToggle(type) {
    this.currentButtonDisabled = type;
  }


  async addHealthData() {
    
    const modal = await this.modalController.create({
      component: WcholesterolLogPage,
      backdropDismiss: true,
      cssClass: 'weight-log-modal',
      componentProps: { logWeight: this.logWeight, logDate: this.logDate, profileData: this.profileData }
    });
    modal.onDidDismiss().then((data: any) => {
      if (data && data.data) {
        // this.bloodPressureGraph();
        window.location.reload();
      }
    });
    return await modal.present();
  }
}