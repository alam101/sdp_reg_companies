import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { Chart } from "chart.js";
import moment from "moment";
import { Storage } from '@ionic/storage';
import { CONSTANTS } from 'src/app/core/constants/constants';
@Component({
  selector: 'app-wblood-glucose',
  templateUrl: './wblood-glucose.component.html',
  styleUrls: ['./wblood-glucose.component.scss'],
})
export class WbloodGlucoseComponent implements OnInit {
  @Input() isShowButton=false;

  @Output() bloodGlucoseGauge = new EventEmitter();
  healthDataMin: any = [];
  healthDataMax: any = [];
  profileData: any;
  @ViewChild("bloodGlucose") 
  private bloodGlucose: ElementRef;
  bloodGlucoseNew: any;
  bloodGlucoseDatapointsMin=[];
  bloodGlucoseDatapointsMax=[];
  constructor(
    private storage: Storage,
    private appService: AppService,
    private utilities: UTILITIES,
  ) { }

  ngOnInit(): void {
    this.getHealthData();
  }
  
  openEvent(event) {
    this.bloodGlucoseGauge.emit();
  }


  getHealthData() {
   // this.storage.get("profileData").then(val => {
   console.log("CONSTANTS.email", CONSTANTS.email);
   
      this.profileData = this.utilities.parseJSON(localStorage.getItem("profileData"));
      //this.profileData.profile.email
      this.appService.getHealthData(this.profileData.profile.email).then((res: any) => {
        this.healthDataMin = [];
        this.healthDataMax = [];
        if (res && res.length) {
          res.forEach(element => {
            element['formatedDate'] =  moment(new Date(element.updateDate)).format("MMM D");
            // this.profileData.demographic.weight.value - element.healthData.weightKg
            if (element?.healthData && element?.healthData?.bloodGlucose) {
              this.healthDataMin.push({min:element?.healthData?.bloodGlucose?.fasting,formatedDate:element['formatedDate']});
              this.healthDataMax.push({max:element?.healthData?.bloodGlucose?.random, formatedDate:element['formatedDate']});
            } 
           
          });
         
        } else {
          this.healthDataMin.push(0);
          this.healthDataMax.push(0);
         
        }
        this.createChart();
      });
     
   // })
  }

  createChart() {
  const bloodGlucoseDatapointsMin=[];
  const bloodGlucoseDatapointsMax=[];
    let labels = [];
    this.healthDataMin.forEach(ele => {
      bloodGlucoseDatapointsMin.push(ele.min);
    });
    this.healthDataMax.forEach(ele => {
      bloodGlucoseDatapointsMax.push(ele.max);
      labels.push(ele.formatedDate);
    });
   
    // Chart.register(minMaxLabelPlugin);
    console.log("this.bloodGlucoseDatapointsMin", bloodGlucoseDatapointsMin, labels);
      console.log("this.bloodGlucoseDatapointsMax", bloodGlucoseDatapointsMax, labels);
      if (this.bloodGlucoseNew) {
        this.bloodGlucoseNew.destroy();
      }
      this.bloodGlucoseNew = new Chart(this.bloodGlucose.nativeElement, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              data: bloodGlucoseDatapointsMin,
              borderColor: "green",
              fill: false
            },
            {
              data: bloodGlucoseDatapointsMax,
              borderColor: "blue",
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
            tooltip: {
              enabled: false  // 🔥 Disable tooltip here
            },
            annotation: {
              annotations: {
                line80: {
                  type: 'line',
                  yMin: 100,
                  yMax: 100,
                  borderColor: 'green',
                  borderWidth: 1,
                  borderDash: [5, 5], // dotted
                  label: {
                    display: false,
                    content: '100',
                    position: 'start',
                    color: 'green'
                  }
                },
                line120: {
                  type: 'line',
                  yMin: 140,
                  yMax: 140,
                  borderColor: 'blue',
                  borderWidth: 1,
                  borderDash: [5, 5], // dotted
                  label: {
                    display: false,
                    content: '140',
                    position: 'start',
                    color: 'blue'
                  }
                }
              }
            }
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: false
              }
            },
            y: {
              display: true,
              title: {
                display: false,
              },
            }
          }
        },
      });
   
  }
}
