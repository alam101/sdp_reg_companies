import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { Chart, registerables } from "chart.js";
import moment from "moment";
import { Storage } from '@ionic/storage';
import { CONSTANTS } from 'src/app/core/constants/constants';
import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-weight-show',
  templateUrl: './weight-show.component.html',
  styleUrls: ['./weight-show.component.scss']
})
export class WeightShowComponent implements OnInit, AfterViewInit {
  @Input() current = 73;
  @Input() suggestedWeight=55;
  @Input() isShowButton=false;
  @Input() totalWeight = 85;
  @Output() weightgauge = new EventEmitter();
  healthData: any = [];
  profileData: any;
  @ViewChild("weightCanvasNew") private weightCanvasNew: ElementRef;
  weightChartNew: any;

  constructor(
    private storage: Storage,
    private appService: AppService,
    private utilities: UTILITIES,
  ) {
    
   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    Chart.register(...registerables, annotationPlugin);
    this.getHealthData();
  }
  openEvent(event) {
    this.weightgauge.emit();
  }


  getHealthData() {
   // this.storage.get("profileData").then(val => {
   console.log("CONSTANTS.email", CONSTANTS.email);
   
      this.profileData = this.utilities.parseJSON(localStorage.getItem("profileData"));
      this.appService.getHealthData(this.profileData.profile.email).then((res: any) => {
        // console.log('getHealthData response: ', res);
        this.healthData = [];
        if (res && res.length) {
          res.forEach(element => {
            element['formatedDate'] = moment(new Date(element.updateDate)).format("MMM D");
            // this.profileData.demographic.weight.value - element.healthData.weightKg
            if (element?.healthData?.weightKg && (this.profileData.demographic.weight.value > element?.healthData?.weightKg)) {
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
          'formatedDate': moment(new Date(this.profileData.profile.updatedDateTime)).format("MMM D"),
          'healthData': { weightKg: this.profileData.demographic.weight.value }
          }
          this.healthData.push(obj);
          this.createChart();
        }
      });
   // })
  }

  createChart() {
    let datapoints = [];
    let labels = [];
    console.log("this.suggestedWeight", this.suggestedWeight,this.healthData);
    const suggestedWeight1 = this.suggestedWeight;
    this.healthData.forEach(ele => {
      datapoints.push(ele.healthData.weightKg);
      labels.push(ele.formatedDate);
    });
    if (this.weightChartNew) {
      this.weightChartNew.destroy();
    }
    if(datapoints?.length==0){
      datapoints.push(0);
    }
    this.weightChartNew = new Chart(this.weightCanvasNew.nativeElement, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
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
          tooltip: {
            enabled: false  
          },
          annotation: {
            annotations: {
              line200: {
                type: 'line',
                yMin: suggestedWeight1,
                yMax: suggestedWeight1,
                borderColor: 'green',
                borderWidth: 1,
                borderDash: [5, 5], // dotted
                label: {
                  display: false,
                  content: `${suggestedWeight1}`,
                  position: 'start',
                  color: 'green'
                }
              },
          },
        },
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
