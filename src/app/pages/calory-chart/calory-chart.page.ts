import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from "chart.js";
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

  constructor(
    private router: Router,
    private appServices: AppService,
    private route: ActivatedRoute,
  ) {
    let now = moment();
    let dateRange = moment(new Date()).day() + 1;
    let sunday: any = now.clone().weekday(0);
    let lastDay: any = now.clone().weekday(dateRange - 1);

    let fromDate = moment(new Date()).format("DDMMYYYY");
    this.defaultDate = moment().format('ll');
    this.defaultDateRange = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date(sunday).getDate()} - ${new Date(lastDay).getDate()}`;
    this.isValidDate = false;

    this.customDailyDiets(fromDate, dateRange);
    this.route.queryParams.subscribe(res => {
      this.profileName = res.profileName;
      this.compConfig = JSON.parse(res.compConfig);
      this.profileData = JSON.parse(res.profileData);
      console.log('this.profileName = ', this.profileName);
      console.log('this.compConfig = ', this.compConfig);
      console.log('this.profileData = ', this.profileData);
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
    this.appServices.fetchCustDailyDiets(obj).then((fetchCustDailyDietsResponse) => {
      console.log('fetchCustDailyDietsResponse: ', fetchCustDailyDietsResponse);
      if (fetchCustDailyDietsResponse) {
        this.custDailyDiets = fetchCustDailyDietsResponse;
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
    let backgroundColorToSet: any = ["", "", "", "", "", "", ""];
    for (let i = 0; i < this.custDailyDiets.length; i++) {
      const element = this.custDailyDiets[i];

      let date = moment(element.date, "DD-MM-YYYY");
      let day = moment(date).day() + 1;
      let bgColor = element.data.scoreColor == 'dark green' ? '#38A534' :
        element.data.scoreColor == 'light green' ? '#94EA0A' :
          element.data.scoreColor == 'yellow' ? '#EADC18' :
            element.data.scoreColor == 'red' ? '#ff0000' :
              element.data.scoreColor == 'orange' ? '#ffa500' : '';

      dataToset[day - 1] = element.data.totalEatenCalories || 0;
      backgroundColorToSet[day - 1] = bgColor || "";
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labelToSet,
        datasets: [{
          data: dataToset,
          backgroundColor: backgroundColorToSet,
          borderRadius: 20,
          borderWidth: 0
        }]
      },
      options: {
        animation: {
          duration: 2000
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  dateRangeChange(dateRange, type) {
    console.log(type);
    let dateRef = 604800000;
    this.defaultDate = type == "forward" ? new Date(dateRange).getTime() + dateRef : new Date(dateRange).getTime() - dateRef;
    let sunday: any = moment(new Date(this.defaultDate)).clone().weekday(0);
    let lastDay: any = moment(new Date(this.defaultDate)).clone().weekday(6);
    this.defaultDateRange = `${new Date(sunday).toLocaleString('default', { month: 'long' })} ${sunday.date()} - ${lastDay.date()}`;

  }

}
