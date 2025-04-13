import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AppService } from '../newBoarding/app.service';
import moment from 'moment';
import { CONSTANTS } from '../core/constants/constants';

// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-inappbowser-testing-download',
  templateUrl: './inappbowser-testing-download.page.html',
  styleUrls: ['./inappbowser-testing-download.page.scss'],
})
export class InappbowserTestingDownloadPage implements OnInit {

  constructor(private iab: InAppBrowser, private appServices: AppService,) { }
  selecteddate:any;
  ngOnInit() {
    //this.downloadPdfFromApi();
    this.selecteddate = moment(CONSTANTS.dietDate, "DDMMYYYY").format();
  }
  percent=0.0;
  percentwithPer='0%';
  iscloseInterval;
  startInterval(){
    clearInterval(this.iscloseInterval);
   this.iscloseInterval =  setInterval(() => {
    if(this.percent%2===0){
      this.percent = Number(Number(this.percent)+3);
    }
    else{
      this.percent = Number(Number(this.percent)+1);
    }
      this.percentwithPer = this.percent+'%';
      if(this.percent >90){
        clearInterval(this.iscloseInterval);
      }
    }, 1000);
  }
  url="";
   downloadPdfFromApi(){ 
      this.percent=0.0;
    this.percentwithPer='0%';
      this.startInterval();
    //  this.utilities.showLdr();
      this.appServices.downloadPdfFromApi(localStorage.getItem("tkn"),7,
      moment(this.selecteddate).format("DDMMYYYY").trim(),
      localStorage.getItem("company_id")
      ,localStorage.getItem('email')).subscribe((blob) => {
        this.percentwithPer='100%';
        const url = window.URL.createObjectURL(blob);
        this.openWebpage(url);
       window.URL.revokeObjectURL(url);
       clearInterval(this.iscloseInterval);
      }, (error) => {
        console.error('Error downloading PDF:', error);
      });
    }
  openWebpage(url) {

  //  this.iab.create(url, '_system');
    const browser = this.iab.create(url, '_system');
    browser.on('loadstop').subscribe(event => {
      console.log('Page loaded:', event);
    });
    browser.on('exit').subscribe(() => {
      console.log('Browser closed');
    });
  }
}
