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
import { WeightLogPage } from '../weight-log/weight-log.page';

@Component({
  selector: 'app-weight-guage',
  templateUrl: './weight-guage.page.html',
  styleUrls: ['./weight-guage.page.scss'],
})
export class WeightGuagePage implements AfterViewInit {
  @ViewChild("weightCanvas") private weightCanvas: ElementRef;
  @ViewChild("weightCanvasNew") private weightCanvasNew: ElementRef;
 
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
    this.weightGraph();
    this.getHealthData();
  }

  ngOnInit() {
    this.weightGraph();
    this.getHealthData();
  //  this.navigateToUpdrade()
  }

  // async paymentSubscribeModel(content) {
  //   const modal = await this.modalController.create({
  //     component: PaymentSubscribePopupComponent,
  //     backdropDismiss: true,
  //     cssClass: 'app-offer-popup',
  //     componentProps: { 'content': content, 'onClose': 'consume' }
  //   });
  //   return await modal.present();
  // }

  navigateToUpdrade() {
    // if (!CONSTANTS.isPlanActiveParent) setTimeout(() => this.paymentSubscribeModel('weightloss'), 1000);//this.router.navigate(["upgrade-plan"]), 1000);
    // this.storage.get("profileData").then(val => {
    //   let profile = this.utilities.parseJSON(val).profile;

    //   if (profile && !(profile.planType == 'trial'
    //     || profile.planType == 'trialEnd'
    //     || profile.planType == 'premiumEnd')) {

    //     setTimeout(() => this.router.navigate(["upgrade-plan"]), 3000)
    //   }
    // });
  }

  ngAfterViewInit() {
    this.logDate = moment(new Date()).format("l");
    moment.updateLocale('en', {
      week: {
        dow: 1,
      },
    })

    // this.weightChart = new Chart(this.weightCanvas.nativeElement, {
    //   type: "line",
    //   data: {
    //     labels: [],
    //     datasets: [
    //       {
    //         data: [],
    //         fill: false
    //       },

    //     ]
    //   },
    //   options: {
    //     animation: {
    //       duration: 0
    //     },
    //     hover: {
    //       animationDuration: 0
    //     },
    //     responsiveAnimationDuration: 0,
    //     scales: {
    //       xAxes: [{
    //         type: 'time',
    //         time: {
    //           unit: 'day',
    //           unitStepSize: 1,
    //           displayFormats: {
    //             day: 'MMM D'
    //           }
    //         },
    //         gridLines: {
    //           display: false
    //         }
    //       }],
    //       yAxes: [{
    //         ticks: {
    //           maxTicksLimit: 8,
    //         },

    //         gridLines: {
    //           display: false
    //         }
    //       }]
    //     }

    //   }
    // });
  }

  async createChart() {
    // let DATA_COUNT = 7;
    // let labels = [];
    // for (let i = 0; i < DATA_COUNT; ++i) {
    //   labels.push((i+1).toString());
    // }
    let datapoints = [];
    let labels = [];
    this.healthData.forEach(ele => {
      datapoints.push(ele.healthData.weightKg);
      labels.push(ele.formatedDate);
    })
    // let datapoints = [90, 60, 100, 40, 110, 80, 90];
    this.weightChartNew = await new Chart(this.weightCanvasNew.nativeElement, {
      type: "line",
      data: {
        // labels: labels,
        labels: labels, //["Nov 24", "Dec 24", "Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25"],
        datasets: [
          {
            // label: 'Cubic interpolation (monotone)',
            //   data: datapoints,
            //   borderColor: "red",
            //   fill: false,
            //   cubicInterpolationMode: 'monotone',
            //   tension: 0.4
            // }, {
            //   // label: 'Cubic interpolation',
            //   data: datapoints,
            //   borderColor: "blue",
            //   fill: false,
            //   tension: 0.4
            // }, {
            // label: false,
            data: datapoints,
            borderColor: "#01a3a4",
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false
            }
          },
          y: {
            display: true,
            title: {
              display: false,
            },
            // suggestedMin: 80,
            // suggestedMax: 90
          }
        }
      },
    });

    this.healthData.sort(function(a,b){
      return new Date(b.updateDate).getTime() - new Date(a.updateDate).getTime();
    });
  }
  
  weightGraph() {
    //this.utilities.presentLoading();
    let profile = JSON.parse(localStorage.getItem("profileData"));
    this.profileData = profile;
      // let profile = this.utilities.parseJSON(profile);
      this.appService.getWeightGraph().then(
        res => {
          //this.utilities.hideLoader();
          profile["demographic"]["weight"]["value"] = res["currentWeight"];
          this.storage.set("profileData", this.utilities.parseString(profile));
          this.weightGraphData = JSON.parse(JSON.stringify(res));
          let points = [];
          let labels = [];
          this.targetWeight = this.weightGraphData.suggstedWeight.toFixed(1);
          // if(!this.weightGraphData.currentWeight){
          //   if (profile.demographic.weight.unit == 'kg') {
          //     this.weightGraphData.currentWeight = profile.demographic.weight.value;
          //   } else {
          //     this.weightGraphData.currentWeight = (profile.demographic.weight.value * 0.453592);
          //   }
          // }
          this.currrentValueInKG = res["currentWeight"];
          let currentWeight = profile.demographic.weight.unit == 'kg' ? res["currentWeight"] : res["currentWeight"] / this.poundValue;
          this.weightGraphData.currentWeight = currentWeight;
          this.weightGraphData.dailyWeightArray = profile.demographic.weight.unit == 'kg' ? this.weightGraphData.dailyWeightArray : this.weightGraphData.dailyWeightArray / this.poundValue;
          this.currentWeight = this.weightGraphData.currentWeight.toFixed(1);
          if (this.weightGraphData.dailyWeightArray) {
            this.weightGraphData.dailyWeightArray.forEach(element => {
              labels.push(new Date(element.createdTime));
              points.push(element.weight);
            });
          }
          else {
            labels.push(new Date(this.weightGraphData.startDate));
            points.push(this.currentWeight);
          }
          //  this.caloriesChart.data.labels = labels;

          // this.weightChart.data = {
          //   labels: labels,

          //   datasets: [
          //     {
          //       data: points,
          //       label: 'weight',
          //       fill: false,
          //       backgroundColor: "#2A9CFF",
          //       borderColor: "#2A9CFF",
          //       borderWidth: 1
          //     }
          //   ]
          // };
          // this.weightChart.update();

          //  BMI =Kg/m2
          let heightInMeter = 0;
          if (profile.demographic.height.unit == 'cm') {
            heightInMeter = profile.demographic.height.value * 0.01;
          } else {
            heightInMeter = profile.demographic.height.value * 2.54 * 0.01;

          }
          this.weightDaily = parseFloat(this.weightGraphData.currentWeight).toFixed(1);
          this.targetWeightDaily = (profile.demographic.weight.unit == "pound" ? this.weightGraphData.suggstedWeight / this.poundValue : this.weightGraphData.suggstedWeight).toFixed(1);
          this.currentBMI.value = (parseFloat(this.currrentValueInKG) /
            (heightInMeter * heightInMeter)).toFixed(1);
          this.targetBMI.value = (parseFloat(this.weightGraphData.suggstedWeight) /
            (heightInMeter * heightInMeter)).toFixed(1);
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
  formatedDate(dt){
      return moment(dt).format('D-MMM');
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
            this.weightGraph();
          }, err => {

            //this.utilities.hideLoader();
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
          this.weightGraph();
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

  getHealthData() {
   // this.storage.get("profileData").then(val => {
      this.profileData = this.utilities.parseJSON(localStorage.getItem("profileData"));
      this.appService.getHealthData(this.profileData.profile.email).then((res: any) => {
        console.log('getHealthData response: ', res);
        this.healthData = [];
        if(res && res.length) {
       
          res.sort((a,b)=> new Date(b.updateDate).getTime() - new Date(a.updateDate).getTime());
          
          res.forEach(element => {
            element['formatedDate'] = moment(new Date(element.updateDate)).format("MMM D, YYYY");
            // this.profileData.demographic.weight.value - element?.healthData?.weightKg
            if(element?.healthData?.weightKg && this.profileData.demographic.weight.value > element?.healthData?.weightKg) {
              element['displayWeight'] = element?.healthData?.weightKg ? ("+ " + (this.profileData.demographic.weight.value - element?.healthData?.weightKg)) : null;
              this.healthData.push(element);
            } else if (element?.healthData?.weightKg) {
              element['displayWeight'] = element?.healthData?.weightKg ? ("- " + (element?.healthData?.weightKg - this.profileData.demographic.weight.value)) : null;
              this.healthData.push(element);
            }
          });
          this.createChart();
        } else {
          let obj = {
          'formatedDate': moment(new Date(this.profileData.profile.updatedDateTime)).format("MMM D, YYYY"),
          'healthData': { weightKg: this.profileData.demographic.weight.value }
          }
          this.healthData.push(obj);
          this.createChart();
        }
      });
   // })
  }

  async addHealthData() {
    
    const modal = await this.modalController.create({
      component: WeightLogPage,
      backdropDismiss: true,
      cssClass: 'weight-log-modal',
      componentProps: { logWeight: this.logWeight, logDate: this.logDate, profileData: this.profileData }
    });
    modal.onDidDismiss().then((data: any) => {
      if (data && data.data) {
        window.location.reload();
      }
    });
    return await modal.present();
  }
}
