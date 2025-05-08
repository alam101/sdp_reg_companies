import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UTILITIES } from 'src/app/core/utility/utilities';
import { Chart } from "chart.js";
import moment from "moment";
import { Storage } from '@ionic/storage';
import { CONSTANTS } from 'src/app/core/constants/constants';
@Component({
  selector: 'app-wcholesterol',
  templateUrl: './wcholesterol.component.html',
  styleUrls: ['./wcholesterol.component.scss'],
})
export class WcholesterolComponent implements OnInit {
  @Input() isShowButton=false;

  @Output() cholesterolGauge = new EventEmitter();
  totalCholesterol: any = [];
  LDLCholestol: any = [];
  HDLCholestol: any = [];
  Triglycerides: any = [];
  profileData: any;
  @ViewChild("cholesterol") 
  private cholesterol: ElementRef;
  cholesterolNew: any;
  cholesterolDatapointsMin=[];
  cholesterolDatapointsMax=[];
  constructor(
    private storage: Storage,
    private appService: AppService,
    private utilities: UTILITIES,
  ) { }

  ngOnInit(): void {
    this.getHealthData();
  }
  
  openEvent(event) {
    this.cholesterolGauge.emit();
  }


  getHealthData() {
   // this.storage.get("profileData").then(val => {
   console.log("CONSTANTS.email", CONSTANTS.email);
   
      this.profileData = this.utilities.parseJSON(localStorage.getItem("profileData"));
      //this.profileData.profile.email
      this.appService.getHealthData(this.profileData.profile.email).then((res: any) => {
        this.totalCholesterol = [];
        this.LDLCholestol = [];
        this.HDLCholestol = [];
        this.Triglycerides = [];
        if (res && res.length) {
          res.forEach(element => {
            element['formatedDate'] =  moment(new Date(element.updateDate)).format("MMM D");
            // this.profileData.demographic.weight.value - element.healthData.weightKg
            if (element?.healthData && element?.healthData?.cholesterol) {
              this.totalCholesterol.push({total:element?.healthData?.cholesterol?.total,formatedDate:element['formatedDate']});
              this.LDLCholestol.push({ldl:element?.healthData?.cholesterol?.ldl,formatedDate:element['formatedDate']});
              this.HDLCholestol.push({hdl:element?.healthData?.cholesterol?.hdl,formatedDate:element['formatedDate']});
              this.Triglycerides.push({triglycerides:element?.healthData?.cholesterol?.triglycerides,formatedDate:element['formatedDate']});
            } else {
              this.totalCholesterol.push(0);
              this.LDLCholestol.push(0);
              this.HDLCholestol.push(0);
              this.Triglycerides.push(0);
      
            }
           
          });
         
        } else {
          this.totalCholesterol.push(0);
              this.LDLCholestol.push(0);
              this.HDLCholestol.push(0);
              this.Triglycerides.push(0);
         
        }
        this.createChart();
      });
     
   // })
  }

  createChart() {
  const totalCholesterol=[];
  const LDLCholestol=[];
  const HDLCholestol=[];
  const Triglycerides=[];
    let labels = [];
    this.totalCholesterol.push(0);
    this.LDLCholestol.push(0);
    this.HDLCholestol.push(0);
    this.Triglycerides.push(0);
    this.totalCholesterol.forEach(ele => {
      totalCholesterol.push(ele.total);
    });
    this.LDLCholestol.forEach(ele => {
      LDLCholestol.push(ele.ldl);
    });
    this.HDLCholestol.forEach(ele => {
      HDLCholestol.push(ele.hdl);
    });
    this.Triglycerides.forEach(ele => {
      Triglycerides.push(ele.triglycerides);
      labels.push(ele.formatedDate);
    });

   
   
    // Chart.register(minMaxLabelPlugin);
  
      if (this.cholesterolNew) {
        this.cholesterolNew.destroy();
      }
      this.cholesterolNew = new Chart(this.cholesterol.nativeElement, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              data: totalCholesterol,
              borderColor: "green",
              fill: false
            },
            {
              data: LDLCholestol,
              borderColor: "blue",
              fill: false
            },
            {
              data: HDLCholestol,
              borderColor: "red",
              fill: false
            },
            {
              data: Triglycerides,
              borderColor: "lightblue",
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