import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from "chart.js";
import moment from "moment";
import { AppService } from '../../newBoarding/app.service';

@Component({
  selector: 'app-calory-chart',
  templateUrl: './calory-chart.page.html',
  styleUrls: ['./calory-chart.page.scss'],
})
export class CaloryChartPage implements OnInit {
  @ViewChild("caloriesCanvas") private caloriesCanvas: ElementRef;
  @ViewChild("barCanvas") private barCanvas: ElementRef;
  profileName: any;
  custDailyDiets: any = [];
  compConfig: any;
  barChart: any;
  profileData: any;
  defaultDate: any;
  isValidDate: boolean = false;
  defaultDateRange: any;
  maxCalories:any;
  Math: any = Math;
  averageCal = 0;

  constructor(
    private router: Router,
    private appServices: AppService,
    private route: ActivatedRoute,
  ) {
    Chart.register(...registerables);
    let dateRange = moment(new Date()).day() + 1;

    let fromDate = moment(new Date()).format("DDMMYYYY");
    this.setDateRange(dateRange);
    this.isValidDate = false;
    this.getProfile(()=>{
      this.customDailyDiets(fromDate, dateRange);
    });
    
    this.route.queryParams.subscribe(res => {
      this.profileName = res.profileName;
      this.compConfig = JSON.parse(res.compConfig);
      this.profileData = JSON.parse(res.profileData);
    });
  }

  setDateRange(dateRange){
    let now = moment();
    let sunday: any = now.clone().weekday(0);
    let lastDay: any = now.clone().weekday(dateRange - 1);
    this.defaultDate = moment().format('ll');
    let lastDateMonth = `${new Date().toLocaleString('default', { month: 'long' })}` != `${new Date(lastDay).toLocaleString('default', { month: 'long' })}` ? 
                  `${new Date(lastDay).toLocaleString('default', { month: 'long' })}`: ''
    this.defaultDateRange = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date(sunday).getDate()} - ${lastDateMonth} ${new Date(lastDay).getDate()}`;
  }

  getProfile(cb){
    this.appServices.getProfile().then(
      
      (profileData : any) => {
        this.maxCalories = profileData?.lifeStyle.calories;
        cb();
      });

   }

  // ionViewWillEnter() {
  //   this.customDailyDiets();
  // }

  customDailyDiets(date, range) {
    let obj = {
      fromDate: date,
      dateRange: range
    }
    this.appServices.fetchCustDailyDiets(obj).then((fetchCustDailyDietsResponse:any) => {
      console.log('fetchCustDailyDietsResponse: ', fetchCustDailyDietsResponse);
      if (fetchCustDailyDietsResponse) {
        this.custDailyDiets = fetchCustDailyDietsResponse.filter((ele)=> ele.data.totalEatenCalories);
        this.custDailyDiets.forEach(ele => {
          ele["displayDate"] = moment(moment(ele.date, "DD-MM-YYYY")).format('dddd, MMMM D');
          
          ele["restCalories"] = Math.floor(this.maxCalories - ele.data.totalEatenCalories);
          // ele.data["colorHash"] =  ele.data.scoreColor == 'dark green' ? '#38A534' :
          // ele.data.scoreColor == 'light green' ? '#94EA0A' :
          //   ele.data.scoreColor == 'yellow' ? '#EADC18' :
          //     ele.data.scoreColor == 'red' ? '#ff0000' :
          //       ele.data.scoreColor == 'orange' ? '#ffa500' : '';
        })
        this.barChartMethod();
      }
    },
      (fetchCustDailyDietsError) => {
        console.log('fetchCustDailyDietsError: ', fetchCustDailyDietsError);
      })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  barChartMethod() {
    // this.setLabels();

    let labelToSet = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let dataToset: any = [0, 0, 0, 0, 0, 0, 0];
    let dataToset1: any = [0, 0, 0, 0, 0, 0, 0];
    let backgroundColorToSet: any = ["", "", "", "", "", "", ""];
    let counter = 0;
    let totalCalories = 0;
    for (let i = 0; i < this.custDailyDiets.length; i++) {
      const element = this.custDailyDiets[i];

      let date = moment(element.date, "DD-MM-YYYY");
      let day = moment(date).day() + 1;
      let bgColor = element.data.scoreColor == 'dark green' ? '#38A534' :
        element.data.scoreColor == 'light green' ? '#94EA0A' :
          element.data.scoreColor == 'yellow' ? '#EADC18' :
            element.data.scoreColor == 'red' ? '#ff0000' :
              element.data.scoreColor == 'orange' ? '#ffa500' : '';

      // element.data.totalEatenCalories < 400 ? 
        // dataToset[day - 1] = element.data.totalEatenCalories - 400 || 0 : 
        //   dataToset1[day - 1] = element.data.totalEatenCalories || 0;

          if(element.data.totalEatenCalories > this.maxCalories){
            dataToset[day - 1] = Math.round(this.maxCalories);
            dataToset1[day - 1] = Math.round(element.data.totalEatenCalories - this.maxCalories);
          }else{
            dataToset[day - 1] = Math.round(element.data.totalEatenCalories);
          }
      backgroundColorToSet[day - 1] = bgColor || "";
      if(element.data.totalEatenCalories) {
        totalCalories = totalCalories + element.data.totalEatenCalories;
        counter++;
      }
    }
    if(totalCalories && counter){
      this.averageCal = totalCalories/counter
    }else{
      this.averageCal = 0;
    }
    console.log('fetchCustDailyDietsResponse: ', backgroundColorToSet);
    let self = this;
    let limitAdded = false;
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labelToSet,
        datasets: [{
          data: dataToset,
          backgroundColor: backgroundColorToSet,
          borderRadius: 100,
          // borderWidth: 0
        },{
          data: dataToset1,
          backgroundColor: '#ff0000',
          borderRadius: 20,
          // borderWidth: 0
        }]
      },
      options: {
        plugins: {
          legend: {
              display: false
          }
        },
        scales: {
          x: {
            // type: 'linear',
            stacked: true,
            grid: {
              color: 'rgba(0,0,0,0)',
            }
            // display: false,
          },
          y: {
            stacked: true,
            suggestedMax: self.maxCalories,
            grid: {
              color: (ctx)=>{
                if(ctx.tick.value == self.maxCalories) return 'rgb(220 54 46)'
                else return 'rgba(0,0,0,0.1)'
              },
            },
            ticks: {
              callback: function(value, index, values) {
                if (value && values[index+1] && values[index+1].value && self.maxCalories > value && self.maxCalories < values[index+1].value){
                  values.splice(index, 1); 
                  values.push({value:self.maxCalories, label: self.maxCalories})
                  limitAdded = true;
                  // values[index+1] = {value:self.maxCalories, label: self.maxCalories};
                }
                if(!limitAdded && index + 1 == values.length){
                  values.push({value:self.maxCalories, label: self.maxCalories})
                }
                return value;
              },
              color: (ctx)=>{
                if(ctx.tick.value == self.maxCalories) {
                  return 'rgb(220 54 46)'
                }
              }
            }
          }
        }
      }
      // options: {
      //   // legend: {
      //   //   display: false
      //   // },
      //   // animation: {
      //   //   duration: 2000
      //   // },
      //   scales: {
      //     // yAxes: [{
      //     //   pointLabels: {
      //     //     beginAtZero: true
      //     //   }
      //     // }]
      //     // yAxis: {
      //     //   min: 0,
      //     //   max: 100,
      //     // }
      //   }
      // }
    });
  }

  dateRangeChange(dateRange, type) {
    console.log(type);
    let dateRef = 604800000;
    this.defaultDate = type == "forward" ? new Date(dateRange).getTime() + dateRef : new Date(dateRange).getTime() - dateRef;
    let sunday: any = moment(new Date(this.defaultDate)).clone().weekday(0);
    let lastDay: any = moment(new Date(this.defaultDate)).clone().weekday(6);
    let lastDateMonth = `${new Date(sunday).toLocaleString('default', { month: 'long' })}` != `${new Date(lastDay).toLocaleString('default', { month: 'long' })}` ? 
                  `${new Date(lastDay).toLocaleString('default', { month: 'long' })}`: ''
    this.defaultDateRange = `${new Date(sunday).toLocaleString('default', { month: 'long' })} ${sunday.date()} -  ${lastDateMonth} ${lastDay.date()}`;
    if(this.barChart) this.barChart.destroy();
    this.barChart = null;
    this.customDailyDiets(moment(new Date(lastDay)).format("DDMMYYYY"), 7);
  }

}
