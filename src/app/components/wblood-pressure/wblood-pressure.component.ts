import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { Chart, registerables } from "chart.js";
import moment from "moment";
import { Storage } from '@ionic/storage';
import { CONSTANTS } from 'src/app/core/constants/constants';
import annotationPlugin from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-wblood-pressure',
  templateUrl: './wblood-pressure.component.html',
  styleUrls: ['./wblood-pressure.component.scss'],
})
export class WbloodPressureComponent implements OnInit {
  @Input() isShowButton=false;

  @Output() bloodPressureGauge = new EventEmitter();
  healthDataMin: any = [];
  healthDataMax: any = [];
  profileData: any;
  @ViewChild("bloodPressure") 
  private bloodPressure: ElementRef;
  bloodPressureNew: any;
  bloodPressureDatapointsMin=[];
  bloodPressureDatapointsMax=[];
  constructor(
    private storage: Storage,
    private appService: AppService,
    private utilities: UTILITIES,
  ) { 
    Chart.register(...registerables, annotationPlugin);
  }

  ngOnInit(): void {
    this.getHealthData();
  }
  
  openEvent(event) {
    this.bloodPressureGauge.emit();
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
            if (element?.healthData && element?.healthData?.bloodPressure) {
              this.healthDataMin.push({min:element?.healthData?.bloodPressure?.systolic,formatedDate:element['formatedDate']});
              this.healthDataMax.push({max:element?.healthData?.bloodPressure?.diastolic, formatedDate:element['formatedDate']});
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
  const bloodPressureDatapointsMin=[];
  const bloodPressureDatapointsMax=[];
    let labels = [];
    this.healthDataMin.forEach(ele => {
      bloodPressureDatapointsMin.push(ele.min);
     // labels.push(ele.formatedDate);
    });
    this.healthDataMax.forEach(ele => {
      bloodPressureDatapointsMax.push(ele.max);
      labels.push(ele.formatedDate);
    });
   
    // Chart.register(minMaxLabelPlugin);
    console.log("this.bloodPressureDatapointsMin", bloodPressureDatapointsMin, labels);
      console.log("this.bloodPressureDatapointsMax", bloodPressureDatapointsMax, labels);
      if (this.bloodPressureNew) {
        this.bloodPressureNew.destroy();
      }
      this.bloodPressureNew = new Chart(this.bloodPressure.nativeElement, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              data: bloodPressureDatapointsMin,
              borderColor: "green",
              fill: false
            },
            {
              data: bloodPressureDatapointsMax,
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
                  yMin: 80,
                  yMax: 80,
                  borderColor: 'green',
                  borderWidth: 1,
                  borderDash: [5, 5], // dotted
                  label: {
                    display: false,
                    content: '80',
                    position: 'start',
                    color: 'green'
                  }
                },
                line120: {
                  type: 'line',
                  yMin: 120,
                  yMax: 120,
                  borderColor: 'blue',
                  borderWidth: 1,
                  borderDash: [5, 5], // dotted
                  label: {
                    display: false,
                    content: '120',
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
